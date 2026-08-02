# Linefall status dashboard

This repository publishes a static GitHub Pages dashboard for the private `keyrabbit/connect4` game project.

Live page: <https://keyrabbit.github.io/Test/>

The dashboard is intentionally simple: `index.html` fetches `status.json` at runtime, uses inline CSS and vanilla JavaScript only, and has no build step or external CDN dependency.

## Updating the status

1. Verify the project state from evidence first: local files, git history, GitHub issues, and tool output.
2. Edit `status.json`.
3. For each milestone, set every acceptance criterion to `done: true` only when there is direct evidence.
4. Recompute:
   - milestone percent = completed criteria / total criteria
   - overall percent = sum of `milestone.weight * completed criteria / total criteria`
5. Commit and push to `main`. GitHub Pages serves the root of `main`.

## Honesty rules

- Do not fabricate progress, green checks, test counts, screenshots, builds, or links.
- Do not show subjective completion percentages.
- If validation was skipped, unavailable, or blocked, record it under `not_run` or `blockers`.
- A failed or unavailable build remains failed/unavailable until a later run proves otherwise.

Existing unrelated demos in this repo are preserved under their own folders.

Other pages previously listed here:

- Scopa: <https://keyrabbit.github.io/Test/scopa>
- Escape: <https://keyrabbit.github.io/Test/flat-14>
