/* Offline, and the reason the game can be installed at all.
 *
 * Android and Fire will not offer "install" without a service worker that
 * handles fetch, however complete the manifest is. iOS does not require one,
 * but benefits from it identically once the game is on a home screen and the
 * tablet is on a train.
 *
 * This is cache-first with a network fallback, and it precaches nothing.
 * Precaching would mean listing the built asset names, which Vite hashes — so
 * the list would be generated, would go stale exactly when a build changed,
 * and would fail in the one way this project has already been bitten by twice.
 * Instead the first play populates the cache with precisely what the game
 * actually asked for, which is the same set by definition and cannot drift.
 *
 * The whole game is one JS bundle of about 950 kB, so "the first play warms
 * the cache" costs one load, once.
 */
const CACHE = 'flat14-v1';

self.addEventListener('install', e => {
  /* Take over without waiting for every old tab to close. There is no
     persisted state to migrate — the game keeps everything in memory — so an
     older worker has nothing to hand over. */
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  /* Only GETs, and only our own origin. A cross-origin opaque response caches
     as an opaque blob whose failure looks identical to its success. */
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true });
    if (hit) {
      /* Refresh in the background so a new build lands on the next launch
         rather than never. Failure here is normal — it means offline. */
      e.waitUntil((async () => {
        try {
          const fresh = await fetch(req);
          if (fresh.ok) (await caches.open(CACHE)).put(req, fresh.clone());
        } catch { /* offline; the cached copy is the point */ }
      })());
      return hit;
    }
    const res = await fetch(req);
    if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
    return res;
  })());
});
