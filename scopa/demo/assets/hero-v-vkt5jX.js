const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-DTyw1K6x.js","./Geometry-ClPDmabw.js","./defaultFilter.vert-DERGfM7k.js","./canvasUtils-4aZugTyj.js","./init-C_L3YMA5.js","./CanvasPool-Cqxob_4F.js","./webworkerAll-m3wf7FG_.js","./WebGPURenderer-BXqbXNmC.js","./RenderTargetSystem-Cn3DRDig.js","./getTextureBatchBindGroup-CQevSlO5.js","./BufferResource-BnuA0CQJ.js","./WebGLRenderer-DShrEJeZ.js","./CanvasRenderer-B685CvGo.js"])))=>i.map(i=>d[i]);
import{$ as e,C as t,J as n,_ as r,b as i,c as a,f as o,g as s,i as c,nt as l,q as u,s as d,tt as f,u as p,w as m,x as h,y as g}from"./Geometry-ClPDmabw.js";import{t as _}from"./index-fBDuOTiq.js";import{t as v}from"./defaultFilter.vert-DERGfM7k.js";import{n as y}from"./CanvasRenderer-B685CvGo.js";import{a as b,i as x,o as S}from"./RenderTargetSystem-Cn3DRDig.js";import{i as C,r as w}from"./cards-BnpxwnpG.js";import{a as T,c as E,d as D,f as O,g as ee,h as k,m as te,n as A,r as ne,s as re,t as j,y as ie}from"./anim-DrM5-_RP.js";var ae={extension:{type:f.Environment,name:`browser`,priority:-1},test:()=>!0,load:async()=>{await _(()=>import(`./browserAll-DTyw1K6x.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)}},oe={extension:{type:f.Environment,name:`webworker`,priority:0},test:()=>typeof self<`u`&&self.WorkerGlobalScope!==void 0,load:async()=>{await _(()=>import(`./webworkerAll-m3wf7FG_.js`),__vite__mapDeps([6,2,1,3,4,5]),import.meta.url)}},M;function se(e){return M===void 0&&(M=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??S.defaultOptions.failIfMajorPerformanceCaveat};try{if(!r.get().getWebGLRenderingContext())return!1;let e=r.get().createCanvas().getContext(`webgl`,t),n=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension(`WEBGL_lose_context`);t&&t.loseContext()}return e=null,n}catch{return!1}})()),M}var N;async function ce(e={}){return N===void 0&&(N=await(async()=>{let t=r.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),N}var P=[`webgl`,`webgpu`,`canvas`];async function le(e){let t=[];e.preference?Array.isArray(e.preference)?t=e.preference.slice():(t.push(e.preference),P.forEach(n=>{n!==e.preference&&t.push(n)})):t=P.slice();let n,r={};for(let i=0;i<t.length;i++){let a=t[i];if(a===`webgpu`&&await ce()){let{WebGPURenderer:t}=await _(async()=>{let{WebGPURenderer:e}=await import(`./WebGPURenderer-BXqbXNmC.js`).then(e=>e.t);return{WebGPURenderer:e}},__vite__mapDeps([7,1,5,8,9,10]),import.meta.url);n=t,r={...e,...e.webgpu};break}else if(a===`webgl`&&se(e.failIfMajorPerformanceCaveat??S.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await _(async()=>{let{WebGLRenderer:e}=await import(`./WebGLRenderer-DShrEJeZ.js`).then(e=>e.t);return{WebGLRenderer:e}},__vite__mapDeps([11,1,8,10]),import.meta.url);n=t,r={...e,...e.webgl};break}else if(a===`canvas`){let{CanvasRenderer:t}=await _(async()=>{let{CanvasRenderer:e}=await import(`./CanvasRenderer-B685CvGo.js`).then(e=>e.t);return{CanvasRenderer:e}},__vite__mapDeps([12,1,3,8,9]),import.meta.url);n=t,r={...e,...e.canvasOptions};break}}if(delete r.webgpu,delete r.webgl,delete r.canvasOptions,!n)throw Error(`No available renderer for the current environment`);let i=new n;return await i.init(r),i}var F=class{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener(`resize`,this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener(`resize`,this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&=(cancelAnimationFrame(this._resizeId),null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,t;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:n,clientHeight:r}=this._resizeTo;e=n,t=r}this.renderer.resize(e,t),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener(`resize`,this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};F.extension=f.Application;var I=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,i.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?g.shared:new g,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}};I.extension=f.Application,l.add(F),l.add(I);var L=class e{constructor(...e){this.stage=new h,e[0]!==void 0&&u(n,`Application constructor options are deprecated, please use Application.init() instead.`)}async init(t){t={...t},this.stage||=new h,this.renderer=await le(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return u(n,`Application.view is deprecated, please use Application.canvas instead.`),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(t=!1,n=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};L._plugins=[];var R=L;l.handleByList(f.Application,R._plugins),l.add(b);var z={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},ue=[`in vec2 vBlurTexCoords[%size%];`,`uniform sampler2D uTexture;`,`out vec4 finalColor;`,`void main(void)`,`{`,`    %blur%`,`}`].join(`
`);function de(e){let t=z[e],n=t.length,r=``;for(let i=0;i<e;i++){let a=i===0?`finalColor = `:`    + `,o=i<n?i:e-i-1,s=`texture(uTexture, vBlurTexCoords[%index%]) * %value%`.replace(`%index%`,i.toString()).replace(`%value%`,t[o].toString());r+=`${a}${s}
`}return ue.replace(`%blur%`,`${r};`).replace(`%size%`,e.toString())}var fe=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function pe(e,t){let n=Math.ceil(e/2),r=fe,i=``,a;a=t?`vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);`:`vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);`;for(let t=0;t<e;t++){let e=a.replace(`%index%`,t.toString());e=e.replace(`%sampleIndex%`,`${t-(n-1)}.0`),i+=e,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r=r.replace(`%dimension%`,t?`z`:`w`),r}function me(e,t){let n=pe(t,e),r=de(t);return o.from({vertex:n,fragment:r,name:`blur-${e?`horizontal`:`vertical`}-pass-filter`})}var he=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}
`;function ge(e,t){let n=z[t],r=n.length,i=[],a=[],o=[];for(let s=0;s<t;s++){i[s]=`@location(${s}) offset${s}: vec2<f32>,`,e?a[s]=`filteredCord + vec2(${s-r+1} * pixelStrength, 0.0),`:a[s]=`filteredCord + vec2(0.0, ${s-r+1} * pixelStrength),`;let c=n[s<r?s:t-s-1].toString();o[s]=`finalColor += textureSample(uTexture, uSampler, offset${s}) * ${c};`}let s=i.join(`
`),c=a.join(`
`),l=o.join(`
`),u=he.replace(`%blur-struct%`,s).replace(`%blur-vertex-out%`,c).replace(`%blur-fragment-in%`,s).replace(`%blur-sampling%`,l).replace(`%dimension%`,e?`z`:`w`);return p.from({vertex:{source:u,entryPoint:`mainVertex`},fragment:{source:u,entryPoint:`mainFragment`}})}var B=class e extends c{constructor(t){t={...e.defaultOptions,...t};let n=me(t.horizontal,t.kernelSize),r=ge(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:`f32`}}},...t}),this.horizontal=t.horizontal,this.legacy=t.legacy??!1,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._blurUniforms=this.resources.blurUniforms,this._uniforms=this._blurUniforms.uniforms}apply(e,t,n,r){this.legacy?this._applyLegacy(e,t,n,r):this._applyOptimized(e,t,n,r)}_applyLegacy(e,n,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,n,r,i);else{let o=t.getSameSizeTexture(n),s=n,c=o;this._state.blend=!1;let l=e.renderer.type===a.WEBGPU;for(let t=0;t<this.passes-1;t++){e.applyFilter(this,s,c,t===0||l);let n=c;c=s,s=n}this._state.blend=!0,e.applyFilter(this,s,r,i),t.returnTexture(o)}}_applyOptimized(e,n,r,i){if(this._uniforms.uStrength=this._calculateInitialStrength(),this.passes===1)e.applyFilter(this,n,r,i);else{let o=t.getSameSizeTexture(n),s=n,c=o;this._state.blend=!1;let l=e.renderer,u=l.type===a.WEBGPU,d=u?l.renderPipes.uniformBatch:null;for(let t=0;t<this.passes-1;t++){d&&this.groups[1].setResource(d.getUboResource(this._blurUniforms),0),e.applyFilter(this,s,c,u);let t=c;c=s,s=t,this._uniforms.uStrength*=.5}d&&this.groups[1].setResource(d.getUboResource(this._blurUniforms),0),this._state.blend=!0,e.applyFilter(this,s,r,i),t.returnTexture(o)}}_calculateInitialStrength(){let e=1,t=.5;for(let n=1;n<this.passes;n++)e+=t*t,t*=.5;return this.strength/Math.sqrt(e)}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};B.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var V=B,H=class extends c{constructor(...e){let t=e[0]??{};typeof t==`number`&&(u(n,`BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }`),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]||`inherit`),e[3]!==void 0&&(t.kernelSize=e[3])),t={...V.defaultOptions,...t};let{strength:r,strengthX:i,strengthY:o,quality:s,...c}=t;super({...c,compatibleRenderers:a.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new V({horizontal:!0,...t}),this.blurYFilter=new V({horizontal:!1,...t}),this.quality=s,this.strengthX=i??r,this.strengthY=o??r,this.repeatEdgePixels=!1}apply(e,n,r,i){let a=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(a&&o){let a=t.getSameSizeTexture(n);this.blurXFilter.blendMode=`normal`,this.blurXFilter.apply(e,n,a,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,a,r,i),t.returnTexture(a)}else o?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,n,r,i)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,n,r,i))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw Error(`BlurFilter's strengthX and strengthY are different`);return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return u(`8.3.0`,`BlurFilter.blur is deprecated, please use BlurFilter.strength instead.`),this.strength}set blur(e){u(`8.3.0`,`BlurFilter.blur is deprecated, please use BlurFilter.strength instead.`),this.strength=e}get blurX(){return u(`8.3.0`,`BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.`),this.strengthX}set blurX(e){u(`8.3.0`,`BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.`),this.strengthX=e}get blurY(){return u(`8.3.0`,`BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.`),this.strengthY}set blurY(e){u(`8.3.0`,`BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.`),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}};H.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var _e=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`,U=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`,ve=class extends c{constructor(e={}){let t=new d({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:`f32`,size:20},uAlpha:{value:1,type:`f32`}}),n=p.from({vertex:{source:U,entryPoint:`mainVertex`},fragment:{source:U,entryPoint:`mainFragment`}}),r=o.from({vertex:v,fragment:_e,name:`color-matrix-filter`});super({...e,gpuProgram:n,glProgram:r,resources:{colorMatrixUniforms:t}}),this.alpha=1}_loadMatrix(e,t=!1){if(t){let t=[...e];this._multiply(t,this.matrix,e),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e;this.resources.colorMatrixUniforms.update()}_multiply(e,t,n){return e[0]=t[0]*n[0]+t[1]*n[5]+t[2]*n[10]+t[3]*n[15],e[1]=t[0]*n[1]+t[1]*n[6]+t[2]*n[11]+t[3]*n[16],e[2]=t[0]*n[2]+t[1]*n[7]+t[2]*n[12]+t[3]*n[17],e[3]=t[0]*n[3]+t[1]*n[8]+t[2]*n[13]+t[3]*n[18],e[4]=t[0]*n[4]+t[1]*n[9]+t[2]*n[14]+t[3]*n[19]+t[4],e[5]=t[5]*n[0]+t[6]*n[5]+t[7]*n[10]+t[8]*n[15],e[6]=t[5]*n[1]+t[6]*n[6]+t[7]*n[11]+t[8]*n[16],e[7]=t[5]*n[2]+t[6]*n[7]+t[7]*n[12]+t[8]*n[17],e[8]=t[5]*n[3]+t[6]*n[8]+t[7]*n[13]+t[8]*n[18],e[9]=t[5]*n[4]+t[6]*n[9]+t[7]*n[14]+t[8]*n[19]+t[9],e[10]=t[10]*n[0]+t[11]*n[5]+t[12]*n[10]+t[13]*n[15],e[11]=t[10]*n[1]+t[11]*n[6]+t[12]*n[11]+t[13]*n[16],e[12]=t[10]*n[2]+t[11]*n[7]+t[12]*n[12]+t[13]*n[17],e[13]=t[10]*n[3]+t[11]*n[8]+t[12]*n[13]+t[13]*n[18],e[14]=t[10]*n[4]+t[11]*n[9]+t[12]*n[14]+t[13]*n[19]+t[14],e[15]=t[15]*n[0]+t[16]*n[5]+t[17]*n[10]+t[18]*n[15],e[16]=t[15]*n[1]+t[16]*n[6]+t[17]*n[11]+t[18]*n[16],e[17]=t[15]*n[2]+t[16]*n[7]+t[17]*n[12]+t[18]*n[17],e[18]=t[15]*n[3]+t[16]*n[8]+t[17]*n[13]+t[18]*n[18],e[19]=t[15]*n[4]+t[16]*n[9]+t[17]*n[14]+t[18]*n[19]+t[19],e}brightness(e,t){let n=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(n,t)}tint(t,n){let[r,i,a]=e.shared.setValue(t).toArray(),o=[r,0,0,0,0,0,i,0,0,0,0,0,a,0,0,0,0,0,1,0];this._loadMatrix(o,n)}greyscale(e,t){let n=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(n,t)}grayscale(e,t){this.greyscale(e,t)}blackAndWhite(e){this._loadMatrix([.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0],e)}hue(e,t){e=(e||0)/180*Math.PI;let n=Math.cos(e),r=Math.sin(e),i=Math.sqrt,a=1/3,o=i(a),s=[n+(1-n)*a,a*(1-n)-o*r,a*(1-n)+o*r,0,0,a*(1-n)+o*r,n+a*(1-n),a*(1-n)-o*r,0,0,a*(1-n)-o*r,a*(1-n)+o*r,n+a*(1-n),0,0,0,0,0,1,0];this._loadMatrix(s,t)}contrast(e,t){let n=(e||0)+1,r=-.5*(n-1),i=[n,0,0,0,r,0,n,0,0,r,0,0,n,0,r,0,0,0,1,0];this._loadMatrix(i,t)}saturate(e=0,t){let n=e*2/3+1,r=(n-1)*-.5,i=[n,r,r,0,0,r,n,r,0,0,r,r,n,0,0,0,0,0,1,0];this._loadMatrix(i,t)}desaturate(){this.saturate(-1)}negative(e){this._loadMatrix([-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0],e)}sepia(e){this._loadMatrix([.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0],e)}technicolor(e){this._loadMatrix([1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0],e)}polaroid(e){this._loadMatrix([1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],e)}toBGR(e){this._loadMatrix([0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],e)}kodachrome(e){this._loadMatrix([1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0],e)}browni(e){this._loadMatrix([.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0],e)}vintage(e){this._loadMatrix([.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0],e)}colorTone(t,n,r,i,a){t||=.2,n||=.15,r||=16770432,i||=3375104;let o=e.shared,[s,c,l]=o.setValue(r).toArray(),[u,d,f]=o.setValue(i).toArray(),p=[.3,.59,.11,0,0,s,c,l,t,0,u,d,f,n,0,s-u,c-d,l-f,0,0];this._loadMatrix(p,a)}night(e,t){e||=.1;let n=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(n,t)}predator(e,t){let n=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(n,t)}lsd(e){this._loadMatrix([2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0],e)}reset(){this._loadMatrix([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(e){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(e){this.resources.colorMatrixUniforms.uniforms.uAlpha=e}};l.add(ae,oe);function W(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);if(!r)throw Error(`2D context unavailable for texture bake`);return[n,r]}function G(e,t,n,r,i,a){let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+i,o),e.arcTo(t+r,n+i,t,n+i,o),e.arcTo(t,n+i,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}function K(e){let t=Math.round(256*k),n=e*2+8,[r,i]=W(256+n*2,t+n*2);return i.filter=`blur(${e}px)`,i.fillStyle=`#000`,G(i,n,n,256,t,256*.06),i.fill(),m.from(r)}function ye(e=256,t=0){let[n,r]=W(e,e),i=e/2,a=r.createRadialGradient(i,i,i*t,i,i,i);return a.addColorStop(0,`rgba(255,255,255,1)`),a.addColorStop(.35,`rgba(255,255,255,0.75)`),a.addColorStop(1,`rgba(255,255,255,0)`),r.fillStyle=a,r.fillRect(0,0,e,e),m.from(n)}function be(e=128){let[t,n]=W(e,e),r=e/2,i=n.createRadialGradient(r,r,0,r,r,r*.5);i.addColorStop(0,`rgba(255,255,255,1)`),i.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=i,n.fillRect(0,0,e,e),n.globalCompositeOperation=`lighter`,n.lineCap=`round`;for(let t=0;t<4;t++){let i=t/4*Math.PI*2,a=n.createLinearGradient(r,r,r+Math.cos(i)*r,r+Math.sin(i)*r);a.addColorStop(0,`rgba(255,255,255,0.9)`),a.addColorStop(1,`rgba(255,255,255,0)`),n.strokeStyle=a,n.lineWidth=e*.03,n.beginPath(),n.moveTo(r,r),n.lineTo(r+Math.cos(i)*r,r+Math.sin(i)*r),n.stroke()}return m.from(t)}function xe(){let e=Math.round(256*k),[t,n]=W(256,e),r=n.createLinearGradient(0,0,0,e*.5);return r.addColorStop(0,`rgba(255,252,244,0.9)`),r.addColorStop(1,`rgba(255,252,244,0)`),n.fillStyle=r,G(n,0,0,256,e,256*.06),n.fill(),m.from(t)}function Se(){let e=Math.round(256*k),[t,n]=W(256,e);return n.fillStyle=`#fff`,G(n,0,0,256,e,256*.06),n.fill(),m.from(t)}function Ce(){let e=Math.round(256*k),[t,n]=W(256,e),r=256*.055,i=n.createLinearGradient(0,0,256,e);return i.addColorStop(0,`rgba(255,246,214,0.98)`),i.addColorStop(.28,`rgba(240,196,92,0.72)`),i.addColorStop(.55,`rgba(150,96,28,0.34)`),i.addColorStop(.8,`rgba(58,32,10,0.5)`),i.addColorStop(1,`rgba(28,16,6,0.72)`),n.strokeStyle=i,n.lineWidth=r,n.lineJoin=`round`,G(n,r/2,r/2,256-r,e-r,256*.06),n.stroke(),m.from(t)}function we(){let e=Math.round(256*k),[t,n]=W(256,e);G(n,0,0,256,e,256*.06),n.clip();let r=n.createRadialGradient(256*.34,e*.2,0,256*.34,e*.2,256*1.05);return r.addColorStop(0,`rgba(255,251,236,0.55)`),r.addColorStop(.38,`rgba(255,246,222,0.14)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,256,e),m.from(t)}function Te(e=256){let[t,n]=W(e,e),r=e/2,i=n.createRadialGradient(r,r,0,r,r,r);return i.addColorStop(0,`rgba(255,238,182,0.95)`),i.addColorStop(.22,`rgba(243,196,80,0.7)`),i.addColorStop(.55,`rgba(196,132,26,0.28)`),i.addColorStop(1,`rgba(150,90,10,0)`),n.fillStyle=i,n.fillRect(0,0,e,e),m.from(t)}function Ee(e=96){let[t,n]=W(e,e),r=e/2,i=n.createRadialGradient(r,r,0,r,r,r);return i.addColorStop(0,`rgba(255,252,240,1)`),i.addColorStop(.28,`rgba(255,244,214,0.82)`),i.addColorStop(.62,`rgba(255,232,190,0.24)`),i.addColorStop(1,`rgba(255,224,180,0)`),n.fillStyle=i,n.fillRect(0,0,e,e),m.from(t)}function De(){let e=Math.round(256*k),[t,n]=W(296,e+40);n.filter=`blur(7px)`;let r=256*.05;return n.strokeStyle=`#fff`,n.lineWidth=r,n.lineJoin=`round`,G(n,26.4,26.4,256-r,e-r,256*.06),n.stroke(),m.from(t)}function Oe(){let e=Math.round(256*k),[t,n]=W(276,e+20);n.filter=`blur(2px)`;let r=256*.06;return n.strokeStyle=`#fff`,n.lineWidth=r,n.lineJoin=`round`,G(n,17.68,17.68,256-r,e-r,256*.06),n.stroke(),m.from(t)}function ke(){let e=Math.round(256*k),[t,n]=W(268,e+12);n.filter=`blur(1px)`;let r=256*.013;return n.strokeStyle=`#fff`,n.lineWidth=r,n.lineJoin=`round`,G(n,7.664,7.664,256-r,e-r,256*.06),n.stroke(),m.from(t)}function Ae(){let e=Math.round(256*k),[t,n]=W(256,e);G(n,0,0,256,e,256*.06),n.clip();let r=256*.36,i=e*.22,a=n.createRadialGradient(r,i,0,r,i,256*.6);return a.addColorStop(0,`rgba(255,255,255,0.72)`),a.addColorStop(.4,`rgba(255,252,244,0.16)`),a.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=a,n.fillRect(0,0,256,e),m.from(t)}function je(e=512){let[t,n]=W(e,e),r=e/2,i=n.createRadialGradient(r,r,0,r,r,r);for(let e=0;e<=12;e++){let t=e/12,n=(1-t)**2.2;i.addColorStop(t,`rgba(255,255,255,${n.toFixed(4)})`)}return n.fillStyle=i,n.fillRect(0,0,e,e),m.from(t)}function Me(e=512){let[t,n]=W(e,e),r=e/2,i=n.createRadialGradient(r,r,r*.2,r,r,r);return i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(.5,`rgba(0,0,0,0)`),i.addColorStop(.78,`rgba(0,0,0,0.42)`),i.addColorStop(1,`rgba(0,0,0,0.98)`),n.fillStyle=i,n.fillRect(0,0,e,e),m.from(t)}function Ne(){let e=Math.round(256*k),[t,n]=W(256,e);G(n,0,0,256,e,256*.06),n.clip();let r=n.createLinearGradient(0,0,256*.28,e);return r.addColorStop(0,`rgb(255,253,247)`),r.addColorStop(.42,`rgb(236,238,244)`),r.addColorStop(.78,`rgb(210,214,224)`),r.addColorStop(1,`rgb(188,194,208)`),n.fillStyle=r,n.fillRect(0,0,256,e),m.from(t)}function Pe(){let e=Math.round(256*k),[t,n]=W(372,e+116);return n.filter=`blur(24px)`,n.fillStyle=`#fff`,G(n,58,58,256,e,256*.06),n.fill(),m.from(t)}var q=null;function Fe(){return q||(q={shadowAmbient:K(26),shadowContact:K(5),shadowAO:K(2),glow:ye(256,0),spark:be(128),ember:Ee(96),edgeGlow:De(),edgeRimTight:ke(),rimBloomWhite:Oe(),glossHot:Ae(),gloss:xe(),fill:Se(),rim:Ce(),spec:we(),shade:Ne(),backlight:Pe(),core:Te(),keyFalloff:je(),vignette:Me(),aspect:k},q)}var Ie=2600,Le=.6,Re=9e-5,ze=.3,Be=.08,Ve={stiffness:24,damping:.5};function J(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=r+(o-r)*n|0,u=i+(s-i)*n|0,d=a+(c-a)*n|0;return l<<16|u<<8|d}var He=class{card;faceTex;backTex;tex;pos;rot;lift;scale;flip;width=120;z=0;root=new h;backlight;face=new s;shade;spec;rim;core;edgeGlow;whiteRim;whiteBloom;coolRim;gloss;edge=new y;flash;shadowAmbient;shadowContact;shadowAO;flashAmount=0;glowAmount=0;glowTint=15979641;idle=0;dim=0;constructor(e,t,n,r,i=!1,a=0,o=0){this.card=e,this.faceTex=t,this.backTex=n,this.tex=r,this.pos=new ne(a,o,j.layout),this.rot=new A(0,j.layout),this.lift=new A(0,j.hover),this.scale=new A(1,j.hover),this.flip=new A(+!!i,j.snap),this.face.anchor.set(.5),this.face.texture=i?t:n,this.backlight=new s(r.backlight),this.backlight.anchor.set(.5),this.backlight.blendMode=`screen`,this.backlight.alpha=0,this.backlight.tint=16761418,this.shade=new s(r.shade),this.shade.anchor.set(.5),this.shade.blendMode=`multiply`,this.shade.alpha=0,this.spec=new s(r.spec),this.spec.anchor.set(.5),this.spec.blendMode=`add`,this.spec.alpha=0,this.rim=new s(r.rim),this.rim.anchor.set(.5),this.rim.alpha=0,this.core=new s(r.core),this.core.anchor.set(.5),this.core.blendMode=`screen`,this.core.alpha=0,this.edgeGlow=new s(r.edgeGlow),this.edgeGlow.anchor.set(.5),this.edgeGlow.blendMode=`add`,this.edgeGlow.alpha=0,this.edgeGlow.tint=16757818,this.whiteRim=new s(r.edgeRimTight),this.whiteRim.anchor.set(.5),this.whiteRim.blendMode=`screen`,this.whiteRim.alpha=0,this.whiteRim.tint=16777215,this.whiteBloom=new s(r.rimBloomWhite),this.whiteBloom.anchor.set(.5),this.whiteBloom.blendMode=`screen`,this.whiteBloom.alpha=0,this.whiteBloom.tint=16777215,this.coolRim=new s(r.edgeRimTight),this.coolRim.anchor.set(.5),this.coolRim.blendMode=`screen`,this.coolRim.alpha=0,this.coolRim.tint=13163775,this.gloss=new s(r.glossHot),this.gloss.anchor.set(.5),this.gloss.blendMode=`screen`,this.gloss.alpha=0,this.flash=new s(r.fill),this.flash.anchor.set(.5),this.flash.blendMode=`screen`,this.flash.alpha=0,this.flash.tint=15910494,this.root.addChild(this.backlight,this.face,this.shade,this.spec,this.gloss,this.core,this.rim,this.edgeGlow,this.whiteBloom,this.coolRim,this.whiteRim,this.flash,this.edge),this.root.eventMode=`none`,this.shadowAmbient=new s(r.shadowAmbient),this.shadowAmbient.anchor.set(.5),this.shadowAmbient.tint=198154,this.shadowContact=new s(r.shadowContact),this.shadowContact.anchor.set(.5),this.shadowContact.tint=66314,this.shadowAO=new s(r.shadowAO),this.shadowAO.anchor.set(.5),this.shadowAO.tint=774}get height(){return this.width*this.tex.aspect}get x(){return this.pos.x.value}get y(){return this.pos.y.value}get speed(){return Math.hypot(this.pos.x.velocity,this.pos.y.velocity)}get atRest(){return this.pos.atRest&&this.rot.atRest&&this.lift.atRest&&this.scale.atRest&&this.flip.atRest}configurePos(e){return this.pos.configure(e),this}configureRot(e){return this.rot.configure(e),this}placeAt(e,t,n=0){return this.pos.reset(e,t),this.rot.reset(n),this}moveTo(e,t,n=this.rot.target){return this.pos.to(e,t),this.rot.target=n,this}setFaceUp(e){return this.flip.target=+!!e,this}liftTo(e){return this.lift.target=e,this}flashNow(e=1){return this.flashAmount=Math.max(this.flashAmount,e),this}punch(e=4,t=0,n=1){return this.scale.configure(Ve),this.scale.target=n,this.scale.velocity+=e,t&&(this.rot.velocity+=t),this}relaxScale(){return this.scale.configure(j.hover),this.scale.target=1,this}effectiveLift(){let e=T(this.speed/Ie,0,1)*Le;return T(this.lift.value+e,0,1.6)}step(e){this.pos.step(e),this.rot.step(e),this.lift.step(e),this.scale.step(e),this.flip.step(e),this.flashAmount*=Math.exp(-e*6),this.flashAmount<.001&&(this.flashAmount=0),this.dimShown+=(this.dim-this.dimShown)*Math.min(1,e*8)}dimShown=0;edgeW=-1;drawEdge(e,t,n){Math.abs(e-this.edgeW)<.5||(this.edgeW=e,this.edge.clear().roundRect(-e/2,-t/2,e,t,n).stroke({width:Math.max(.8,e*.006),color:1708556,alpha:.35}))}sync(){let e=this.effectiveLift(),t=T(this.flip.value,0,1),n=t>.5,r=n?this.faceTex:this.backTex;this.face.texture!==r&&(this.face.texture=r);let i=Math.max(Math.abs(t*2-1),1e-4),a=T(this.pos.x.velocity*Re,-.3,ze),o=this.scale.value*(1+e*Be),s=this.width*o,c=this.height*o,l=T(this.glowAmount,0,1),u=T(this.dimShown,0,1),d=this.root;d.x=this.x,d.y=this.y,d.rotation=this.rot.value+a,d.zIndex=this.z;let f=s/this.faceTex.width,p=c/this.faceTex.height,m=f*i;this.face.scale.set(m,p);let h=n?J(16777215,15246402,l*.6):J(16777215,15515780,l*.34);u>.001&&(h=J(h,724760,u*.6)),l>.001&&(h=J(h,0,l*.18)),this.face.tint=h;let g=s*i/this.tex.rim.width,_=c/this.tex.rim.height,v=1-u*.85;if(this.shade.scale.set(g,_),this.shade.alpha=(.82-l*.22)*(1-u*.35),l>.001&&u<.99){this.backlight.visible=!0;let e=T((l-.72)/.28,0,1);this.backlight.tint=J(J(16761418,this.glowTint,.4),16758330,e*.6);let t=Math.max(s,c)*(1.34+e*.24)/Math.max(this.tex.backlight.width,this.tex.backlight.height);this.backlight.scale.set(t*i,t),this.backlight.alpha=(l*.42+e*.14)*v}else this.backlight.visible&&(this.backlight.visible=!1);if(this.spec.scale.set(g,_),this.spec.tint=J(16777215,16763514,l),this.spec.alpha=((.1+T(e,0,1)*.26+this.idle*.16)*(1-l*.7)+l*.16)*v,this.rim.scale.set(g,_),this.rim.alpha=(.32+this.idle*.12)*(1-l*.85)*v,this.rim.tint=J(16777215,this.glowTint,this.idle*.5),l>.001){this.core.visible=!0,this.core.tint=J(16757818,this.glowTint,.4);let e=Math.min(s,c)*.8/this.tex.core.width;this.core.scale.set(e*i,e),this.core.alpha=l*.1}else this.core.visible&&(this.core.visible=!1);if(this.edgeGlow.visible&&(this.edgeGlow.visible=!1),l>.14){let e=T((l-.14)/.24,0,1);this.whiteBloom.visible=!0,this.whiteBloom.scale.set(g,_),this.whiteBloom.alpha=(.82+T((l-.5)/.5,0,1)*.18)*e*v,this.coolRim.visible=!0,this.coolRim.scale.set(g*.965,_*.965),this.coolRim.alpha=.34*e*v,this.whiteRim.visible=!0,this.whiteRim.scale.set(g,_),this.whiteRim.alpha=(.85+T((l-.5)/.5,0,1)*.15)*e*v}else this.whiteBloom.visible&&(this.whiteBloom.visible=!1),this.coolRim.visible&&(this.coolRim.visible=!1),this.whiteRim.visible&&(this.whiteRim.visible=!1);this.gloss.scale.set(g,_),this.gloss.alpha=n?(.24+T(e,0,1)*.24+this.idle*.12)*(1-l*.42)*v:0,this.flash.scale.set(g,_),this.flash.alpha=Math.min(this.flashAmount*.26,.3),this.drawEdge(this.width,this.height,this.width*.06),this.edge.scale.set(o*i,o);let y=T(e,0,1.6),b=this.shadowAmbient;b.x=this.x+y*12,b.y=this.y+10+y*40,b.rotation=this.rot.value;let x=s*(1.08+y*.1)/this.tex.shadowAmbient.width;b.scale.set(x,c/s*x*(this.tex.shadowAmbient.width/this.tex.shadowAmbient.height)),b.alpha=T(.4+y*.06,0,.66);let S=this.shadowContact;S.x=this.x+y*1.5,S.y=this.y+3+y*4+l*5,S.rotation=this.rot.value;let C=s*.9/this.tex.shadowContact.width;S.scale.set(C,c/s*C*(this.tex.shadowContact.width/this.tex.shadowContact.height)),S.alpha=T(.62-y*.24+l*.46,0,.95);let w=this.shadowAO;w.x=this.x,w.y=this.y+2+y*2+l*3,w.rotation=this.rot.value;let E=s*.92/this.tex.shadowAO.width;w.scale.set(E,c/s*E*(this.tex.shadowAO.width/this.tex.shadowAO.height)),w.alpha=T(.86-y*.58+l*.34,0,.98)}setVisible(e){this.root.visible=e,this.shadowAmbient.visible=e,this.shadowContact.visible=e,this.shadowAO.visible=e}};function Ue(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=r+(o-r)*n|0,u=i+(s-i)*n|0,d=a+(c-a)*n|0;return l<<16|u<<8|d}var Y=class{texture;view=new h;pool=[];cursor=0;constructor(e,t,n=`add`){this.texture=t,this.view.eventMode=`none`;for(let r=0;r<e;r++){let e=new s(t);e.anchor.set(.5),e.visible=!1,e.blendMode=n,this.view.addChild(e),this.pool.push({sprite:e,active:!1,x:0,y:0,vx:0,vy:0,life:0,ttl:1,size:1,spin:0,gravity:0,drag:0,tint:16777215,stretch:1})}}emit(e){let t=e.count;for(let n=0;n<t;n++){let t=this.next(),n=e.angle===void 0?Math.random()*Math.PI*2:e.angle+(Math.random()-.5)*(e.spread??Math.PI*2),r=e.speed+(Math.random()-.5)*(e.speedVar??e.speed*.6);t.active=!0;let i=e.ring??0;if(i>0){let r=i*(e.ringAspect??1);t.x=e.x+Math.cos(n)*i,t.y=e.y+Math.sin(n)*r}else t.x=e.x+(Math.random()-.5)*6,t.y=e.y+(Math.random()-.5)*6;t.vx=Math.cos(n)*r,t.vy=Math.sin(n)*r,t.life=0,t.ttl=e.ttl+(Math.random()-.5)*(e.ttlVar??e.ttl*.4),t.size=e.size+(Math.random()-.5)*(e.sizeVar??e.size*.5),t.gravity=e.gravity??0,t.drag=e.drag??1.4,t.spin=e.spin??(Math.random()-.5)*8,t.tint=e.tint2===void 0?e.tint??16777215:Ue(e.tint??16777215,e.tint2,Math.random()),t.stretch=e.stretch??1;let a=t.sprite;a.visible=!0,a.tint=t.tint,a.rotation=t.stretch>1?n:Math.random()*Math.PI}}next(){for(let e=0;e<this.pool.length;e++){this.cursor=(this.cursor+1)%this.pool.length;let e=this.pool[this.cursor];if(!e.active)return e}return this.pool[this.cursor]}update(e){for(let t=0;t<this.pool.length;t++){let n=this.pool[t];if(!n.active)continue;if(n.life+=e,n.life>=n.ttl){n.active=!1,n.sprite.visible=!1;continue}let r=Math.exp(-n.drag*e);n.vx*=r,n.vy=n.vy*r+n.gravity*e,n.x+=n.vx*e,n.y+=n.vy*e;let i=n.life/n.ttl,a=i<.15?i/.15:1-(i-.15)/.85,o=n.sprite;o.x=n.x,o.y=n.y,o.alpha=a*a;let s=n.size*(.4+(1-i)*.6)/this.texture.width;n.stretch>1?(o.rotation=Math.atan2(n.vy,n.vx),o.scale.set(s*n.stretch,s*.5)):(o.rotation+=n.spin*e,o.scale.set(s))}}clear(){for(let e of this.pool)e.active=!1,e.sprite.visible=!1}},X=15979641,Z=16773312,Q=14256426,$=[.35,-.55,.2,-.38,.5,-.22,.42,-.46,.15,-.3],We=class{app;deck;onBeat;bg=new h;world=new h;feltSprite=new s(m.WHITE);frameVig=new s(m.WHITE);lightSprite;captureVig;shadowLayer=new h;cardLayer=new h;fxLayer=new h;haloSprite=new s;haloRT=null;haloScratch=new h;haloFills=[];haloBlur=new H({strength:11,quality:4});haloInner=new s;haloOuter=new s;haloInnerPeak=.85;haloOuterPeak=.3;felt=new E;feltTex=null;viewW=1;viewH=1;tex;sparks;motes;streaks;vigLife=1;vigTtl=1;vigX=0;vigY=0;haloLife=1;haloTtl=1;haloPeak=.72;layout;designW;designH;all=[];playerHand=[];oppHand=[];table=[];stock=[];hero=null;playerPileN=0;faceTexCache=new Map;backTex;token=0;waits=[];time=0;pointerX=.5;pointerY=.5;constructor(e,t,n){this.app=e,this.deck=t,this.onBeat=n,this.tex=Fe(),this.feltSprite.anchor.set(0),this.frameVig.texture=this.tex.vignette,this.frameVig.anchor.set(.5),this.frameVig.tint=0,this.frameVig.alpha=.52,this.lightSprite=new s(this.tex.glow),this.lightSprite.anchor.set(.5),this.lightSprite.blendMode=`add`,this.lightSprite.tint=16771504,this.lightSprite.alpha=.045,this.haloSprite.anchor.set(0),this.haloSprite.blendMode=`add`,this.haloSprite.tint=16758848,this.haloSprite.alpha=0,this.haloSprite.visible=!1,this.haloScratch.filters=[this.haloBlur],this.haloScratch.eventMode=`none`;for(let e=0;e<6;e++){let e=new s(this.tex.fill);e.anchor.set(.5),e.visible=!1,this.haloScratch.addChild(e),this.haloFills.push(e)}this.haloInner.texture=this.tex.glow,this.haloInner.anchor.set(.5),this.haloInner.blendMode=`add`,this.haloInner.tint=16773328,this.haloInner.alpha=0,this.haloInner.visible=!1,this.haloOuter.texture=this.tex.glow,this.haloOuter.anchor.set(.5),this.haloOuter.blendMode=`add`,this.haloOuter.tint=16752680,this.haloOuter.alpha=0,this.haloOuter.visible=!1,this.captureVig=new s(this.tex.vignette),this.captureVig.anchor.set(.5),this.captureVig.alpha=0,this.captureVig.visible=!1;let r=new ve;r.saturate(.14,!1);let i=r.matrix;for(let e=0;e<3;e++){for(let t=0;t<4;t++)i[e*5+t]=(i[e*5+t]??0)*1.2;i[e*5+4]=.028}r.matrix=i,this.app.stage.filters=[r],this.cardLayer.sortableChildren=!0,this.sparks=new Y(760,this.tex.ember,`add`),this.motes=new Y(160,this.tex.glow,`add`),this.streaks=new Y(80,this.tex.ember,`add`),this.bg.addChild(this.feltSprite,this.frameVig),this.app.stage.addChild(this.bg),this.world.addChild(this.lightSprite,this.haloOuter,this.haloInner,this.haloSprite,this.captureVig,this.shadowLayer,this.cardLayer,this.motes.view,this.fxLayer,this.streaks.view,this.sparks.view),this.app.stage.addChild(this.world),this.backTex=this.deckBackTexture(),this.designW=this.app.renderer.width/this.app.renderer.resolution,this.designH=this.app.renderer.height/this.app.renderer.resolution,this.viewW=this.app.screen.width,this.viewH=this.app.screen.height,this.layout=D(this.designW,this.designH),this.haloRT=x.create({width:Math.max(2,Math.ceil(this.designW)),height:Math.max(2,Math.ceil(this.designH)),resolution:this.app.renderer.resolution}),this.haloSprite.texture=this.haloRT,this.buildFelt(),this.placeWorldLights()}deckBackTexture(){let e=this.deck.peekBack();return e?m.from(e):m.WHITE}faceTexture(e){let t=this.faceTexCache.get(e);if(!t){let n=this.deck.peek(e);t=n?m.from(n):m.WHITE,this.faceTexCache.set(e,t)}return t}buildFelt(){let e=this.app.renderer.resolution,t=this.viewW,n=this.viewH,r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t*e)),r.height=Math.max(1,Math.round(n*e));let i=r.getContext(`2d`);i&&(this.felt.setPalette(re),i.setTransform(e,0,0,e,0,0),this.felt.draw(i,t,n,e,{rail:!1,lightX:.5,lightY:.54}),this.feltTex?.destroy(!0),this.feltTex=m.from(r),this.feltSprite.texture=this.feltTex,this.feltSprite.position.set(0,0),this.feltSprite.width=t,this.feltSprite.height=n,this.frameVig.position.set(t/2,n/2),this.frameVig.width=t*1.06,this.frameVig.height=n*1.06)}placeWorldLights(){let e=this.designW,t=this.designH;this.lightSprite.x=e*.5,this.lightSprite.y=t*.54;let n=Math.hypot(e,t)*1.05;this.lightSprite.scale.set(n/this.tex.glow.width*1.3,n/this.tex.glow.width*.95),this.captureVig.scale.set(e*1.6/this.tex.vignette.width,t*1.6/this.tex.vignette.height)}spawn(e,t,n){let r=new He(e,this.faceTexture(e),this.backTex,this.tex,t,n.x,n.y);return r.width=this.layout.cardW*n.scale,r.placeAt(n.x,n.y,n.rot),r.z=this.all.length,this.shadowLayer.addChild(r.shadowAmbient,r.shadowContact,r.shadowAO),this.cardLayer.addChild(r.root),this.all.push(r),r}removeCard(e){e.setVisible(!1);let t=this.all.indexOf(e);t>=0&&this.all.splice(t,1),this.shadowLayer.removeChild(e.shadowAmbient,e.shadowContact,e.shadowAO),this.cardLayer.removeChild(e.root)}clearAll(){for(let e of this.all.slice())this.removeCard(e);this.all.length=0,this.playerHand=[],this.oppHand=[],this.table=[],this.stock=[],this.hero=null,this.playerPileN=0,this.sparks.clear(),this.motes.clear(),this.streaks.clear(),this.captureVig.visible=!1,this.captureVig.alpha=0,this.vigLife=this.vigTtl,this.haloSprite.visible=!1,this.haloSprite.alpha=0,this.haloInner.visible=!1,this.haloInner.alpha=0,this.haloOuter.visible=!1,this.haloOuter.alpha=0,this.haloLife=this.haloTtl}wait(e){return new Promise(t=>this.waits.push({t:e,res:t}))}alive(e){return e===this.token}start(){this.token++,this.waits.length=0,this.clearAll(),this.run(this.token)}async run(e){let t=e=>C(w.Denari,e),n=e=>C(w.Coppe,e),r=e=>C(w.Spade,e),i=e=>C(w.Bastoni,e),a=[r(7),n(3),i(2),t(4)],o=[t(7),n(9),i(5)],s=[n(8),r(9),i(6)];for(;this.alive(e);){if(this.clearAll(),this.onBeat(`Opening deal`),await this.deal(a,o,s),!this.alive(e)||(this.hero=this.all.find(e=>e.card===t(7))??null,await this.wait(.7),this.onBeat(`Play — the settebello`),await this.playAndCapture(e,0,[this.table[0]],`Settebello!`),!this.alive(e))||(await this.wait(.9),this.onBeat(`Play — sweeping the board`),await this.playAndCapture(e,0,[this.tableCard(n(3)),this.tableCard(i(2)),this.tableCard(t(4))],`Scopa!`,!0),!this.alive(e))||(await this.wait(1.6),this.onBeat(``),await this.gatherOut(e),!this.alive(e)))return;await this.wait(.5)}}tableCard(e){return this.table.find(t=>t.card===e)??this.table[0]}async deal(e,t,n){let r=this.layout.deck;for(let e=0;e<6;e++){let t=this.spawn(-1,!1,{x:r.x-e*.6,y:r.y-e*1.4,rot:r.rot,scale:r.scale});t.width=this.layout.cardW*r.scale,t.width*=.94,t.root.alpha=.9,this.stock.push(t)}let i=this.layout.handAnchor[0],a=this.layout.handAnchor[1],o=O(this.layout,i,t.length),s=O(this.layout,a,n.length),c=te(this.layout,e.length,$),l=0,u=[],d=Math.max(t.length,n.length,e.length);for(let r=0;r<d;r++)r<t.length&&u.push({c:t[r],faceUp:!0,slot:o[r],hand:`p`}),r<e.length&&u.push({c:e[r],faceUp:!0,slot:c[r],hand:`t`}),r<n.length&&u.push({c:n[r],faceUp:!1,slot:s[r],hand:`o`});for(let e of u)this.flyDeal(e.c,e.faceUp,r,e.slot,l,e.hand),l+=.12;await this.wait(l+.7)}async flyDeal(e,t,n,r,i,a){i>0&&await this.wait(i);let o=this.spawn(e,!1,n);o.width=this.layout.cardW*r.scale,o.configurePos(j.deal).configureRot(j.deal),o.z=500+this.all.length,o.root.zIndex=o.z,o.liftTo(.55),o.moveTo(r.x,r.y,r.rot),t&&o.setFaceUp(!0),a===`p`?this.playerHand.push(o):a===`o`?this.oppHand.push(o):this.table.push(o),await this.wait(.26),o.liftTo(0),o.z=a===`t`?100+this.table.indexOf(o):200,o.root.zIndex=o.z}async playAndCapture(e,t,n,r,i=!1){let a=this.playerHand[t];if(!a)return;this.playerHand.splice(t,1),this.reflowHand(this.playerHand,this.layout.handAnchor[0]),a.z=900,a.root.zIndex=900,a.configurePos(j.snap).configureRot(j.snap),a.liftTo(1),a.glowTint=12571903,a.glowAmount=.52;let o=this.layout.stage;if(a.moveTo(o.x,o.y,0),await this.wait(.42),!this.alive(e))return;let s=n[0],c=this.designW/2,l=this.designH*.5,u=n.length===1?.64:.36,d=s.x+(c-s.x)*u,f=s.y-this.layout.cardH*.02+(l-s.y)*u;a.moveTo(d,f,$[2]*.04),a.liftTo(.15);let p=new Set([a,...n]),m=a.x,h=a.x,g=a.y,_=a.y;for(let e of n)e.x<m&&(m=e.x),e.x>h&&(h=e.x),e.y<g&&(g=e.y),e.y>_&&(_=e.y);let v=(m+h)/2,y=(g+_)/2,b=Math.max(h-m,_-g)/2+this.layout.cardH*1.05,x=[];for(let e of this.all){if(p.has(e)){e.dim=0;continue}Math.hypot(e.x-v,e.y-y)<=b?(e.dim=.12,e.glowAmount=.56,e.glowTint=16758890,x.push(e)):(e.dim=this.oppHand.includes(e)||this.stock.includes(e)?.62:.72,e.glowAmount=0)}if(await this.wait(.16),!this.alive(e))return;this.contact(a,n,i,[a,...n,...x]),r&&this.onBeat(r),a.punch(i?6:4.5,($[1]??.4)*.9,1.12);for(let e of n)e.punch(3,($[3]??-.4)*.7,1.03);for(let e of n){e.glowAmount=.72,e.glowTint=X;let t=a.x-e.x,n=a.y-e.y,r=Math.hypot(t,n)||1;e.configurePos(j.snap),e.moveTo(e.x+t/r*this.layout.cardW*.14,e.y+n/r*this.layout.cardH*.1),e.liftTo(.22)}if(a.glowAmount=1,a.glowTint=i?Z:X,a.z=950,a.root.zIndex=950,await this.wait(i?.5:.34),!this.alive(e))return;let S=this.layout.pile[0],C=[a,...n],w=0;for(let t of C){t.configurePos(j.gather).configureRot(j.gather),t.liftTo(.5);let n=this.playerPileN+w;t.moveTo(S.x+Math.min(n,6)*.9,S.y-Math.min(n,6)*1.4,S.rot),t.z=700+w,t.root.zIndex=t.z,t.width=this.layout.cardW*S.scale,w++,this.trail(e,t)}for(let e of n){let t=this.table.indexOf(e);t>=0&&this.table.splice(t,1)}if(await this.wait(.5),this.alive(e)){for(let e of C)e.glowAmount=0,e.liftTo(0),e.relaxScale();for(let e of this.all)e.dim=0,C.includes(e)||(e.glowAmount=0);this.playerPileN+=C.length}}contact(e,t,n,r){e.flashNow(1);for(let e of t)e.flashNow(.9);let i=[e,...t],a=i[0].x,o=a,s=i[0].y,c=s;for(let e of i)e.x<a&&(a=e.x),e.x>o&&(o=e.x),e.y<s&&(s=e.y),e.y>c&&(c=e.y);let l=(a+o)/2,u=(s+c)/2;this.renderHalo(r),this.haloLife=0,this.haloTtl=n?1:.82,this.haloPeak=n?.34:.3,this.haloSprite.visible=!0;let d=this.layout.cardH;this.haloInner.position.set(l,u),this.haloOuter.position.set(l,u),this.haloInner.width=this.haloInner.height=d*1.7,this.haloOuter.width=this.haloOuter.height=d*4.4,this.haloInnerPeak=n?.9:.82,this.haloOuterPeak=n?.32:.28,this.haloInner.visible=!0,this.haloOuter.visible=!0,this.vigX=l,this.vigY=u,this.vigLife=0,this.vigTtl=n?.85:.6,this.captureVig.visible=!0;let f=this.layout.cardW,p=this.layout.cardH/f,m=f*.42;for(let t of i){let r=t===e,i=r?n?60:52:34;this.sparks.emit({count:i,x:t.x,y:t.y,ring:m,ringAspect:p,speed:340,speedVar:240,size:f*.085,sizeVar:f*.07,ttl:.7,ttlVar:.35,drag:2.4,gravity:-90,tint:16770732,tint2:16776694}),this.sparks.emit({count:r?n?56:48:22,x:t.x,y:t.y,ring:f*.48,ringAspect:p,speed:130,speedVar:110,size:f*.024,sizeVar:f*.016,ttl:.32,ttlVar:.18,drag:3.6,gravity:-30,tint:16777215,tint2:16773056}),this.sparks.emit({count:r?n?22:20:14,x:t.x,y:t.y,ring:f*.56,ringAspect:p,speed:240,speedVar:130,size:f*.056,sizeVar:f*.018,ttl:.44,ttlVar:.16,drag:2,gravity:-50,tint:16777215,tint2:16765562}),this.motes.emit({count:6,x:t.x,y:t.y,ring:m*.6,ringAspect:p,speed:90,speedVar:60,size:f*.3,sizeVar:f*.14,ttl:.5,ttlVar:.25,drag:3,tint:X,tint2:Q}),this.sparks.emit({count:10,x:t.x,y:t.y,ring:m,ringAspect:p,speed:70,speedVar:50,size:f*.045,sizeVar:f*.03,ttl:1.3,ttlVar:.5,drag:1.2,gravity:40,tint:Q,tint2:X}),r&&(this.sparks.emit({count:n?30:26,x:t.x,y:t.y,ring:m,ringAspect:p,speed:360,speedVar:240,size:f*.065,sizeVar:f*.055,ttl:.75,ttlVar:.35,drag:2.2,gravity:-70,angle:2.35,spread:1,tint:16772784,tint2:16776694}),this.streaks.emit({count:n?7:5,x:t.x,y:t.y,ring:m,ringAspect:p,speed:420,speedVar:200,size:f*.2,sizeVar:f*.08,ttl:.42,ttlVar:.16,drag:2.6,angle:2.35,spread:1.1,stretch:2.4,tint:Z,tint2:Q}))}this.sparks.emit({count:n?160:118,x:l,y:u,ring:f*.35,ringAspect:p,speed:560,speedVar:400,size:f*.05,sizeVar:f*.032,ttl:.6,ttlVar:.4,drag:2.6,gravity:150,tint:16775915,tint2:16770751}),this.sparks.emit({count:n?96:72,x:l,y:u,ring:f*.5,ringAspect:p,speed:340,speedVar:300,size:f*.09,sizeVar:f*.06,ttl:.95,ttlVar:.5,drag:1.7,gravity:95,tint:16756768,tint2:16747546}),this.sparks.emit({count:n?40:32,x:e.x,y:e.y+f*.24,ring:f*.24,ringAspect:p,speed:250,speedVar:190,size:f*.045,sizeVar:f*.03,ttl:.5,ttlVar:.3,drag:2.4,gravity:70,angle:Math.PI/2,spread:1.15,tint:16775915,tint2:16760928})}renderHalo(e){if(!this.haloRT)return;for(let e of this.haloFills)e.visible=!1;let t=this.tex.fill.width,n=this.tex.fill.height;for(let r=0;r<e.length&&r<this.haloFills.length;r++){let i=e[r],a=this.haloFills[r];a.visible=!0,a.x=i.x,a.y=i.y,a.rotation=i.rot.value,a.scale.set(i.width*1.06/t,i.height*1.06/n),a.alpha=1}this.app.renderer.render({container:this.haloScratch,target:this.haloRT,clear:!0})}async trail(e,t){let n=this.layout.pile[0];for(let r=0;r<5&&this.alive(e);r++){let e=Math.atan2(n.y-t.y,n.x-t.x)+Math.PI;this.motes.emit({count:2,x:t.x,y:t.y,speed:80,speedVar:60,size:this.layout.cardW*.34,ttl:.42,drag:3,angle:e,spread:.8,tint:X}),this.streaks.emit({count:1,x:t.x,y:t.y,speed:220,size:this.layout.cardW*.3,ttl:.3,drag:3.4,angle:e,spread:.3,stretch:4,tint:Z}),await this.wait(.05)}}async gatherOut(e){let t=this.layout.pile[0];for(let e of this.all.slice())e.configurePos(j.gather),e.liftTo(.3),e.moveTo(t.x,t.y-40,t.rot);await this.wait(.5),this.alive(e)}reflowHand(e,t){let n=O(this.layout,t,e.length);for(let t=0;t<e.length;t++)e[t].configurePos(j.layout).configureRot(j.layout),e[t].moveTo(n[t].x,n[t].y,n[t].rot)}setPointer(e,t){this.pointerX=e,this.pointerY=t}update(e){if(this.time+=e,this.waits.length){let t=[];for(let n=this.waits.length-1;n>=0;n--){let r=this.waits[n];r.t-=e,r.t<=0&&(t.push(r.res),this.waits.splice(n,1))}for(let e of t)e()}this.hero&&(this.hero.idle=.5+.5*Math.sin(this.time*1.8));for(let t of this.all)t.step(e),t.sync();this.sparks.update(e),this.motes.update(e),this.streaks.update(e),this.updateCaptureVig(e),this.updateHalo(e);let t=Math.sin(this.time*.35),n=Math.cos(this.time*.27),r=(this.pointerX-.5)*2,i=(this.pointerY-.5)*2,a=t*4+r*10,o=n*3+i*7;this.applyFit(a,o),this.lightSprite.x=this.designW*.5-a*1.6-r*20,this.lightSprite.y=this.designH*.54-o*1.6-i*14,this.lightSprite.alpha=.06+.02*(.5+.5*t)}updateCaptureVig(e){if(this.vigLife>=this.vigTtl){this.captureVig.visible&&(this.captureVig.visible=!1,this.captureVig.alpha=0);return}this.vigLife+=e;let t=this.vigLife/this.vigTtl,n=t<.25?t/.25:1-(t-.25)/.75;this.captureVig.x=this.vigX,this.captureVig.y=this.vigY,this.captureVig.alpha=Math.max(0,n)*.64}updateHalo(e){if(this.haloLife>=this.haloTtl){this.haloSprite.visible&&(this.haloSprite.visible=!1,this.haloSprite.alpha=0),this.haloInner.visible&&(this.haloInner.visible=!1,this.haloInner.alpha=0,this.haloOuter.visible=!1,this.haloOuter.alpha=0);return}this.haloLife+=e;let t=this.haloLife/this.haloTtl,n=t<.18?t/.18:1-(t-.18)/.82,r=Math.max(0,n);this.haloSprite.alpha=r*this.haloPeak;let i=1+.06*Math.sin(this.haloLife*24);this.haloInner.alpha=r*this.haloInnerPeak*i,this.haloOuter.alpha=r*this.haloOuterPeak}fitScale=1;fitX=0;fitY=0;zoom=1.1;resize(e,t){let n=Math.min(e/this.designW,t/this.designH)*this.zoom;this.fitScale=n,this.fitX=(e-this.designW*n)/2,this.fitY=(t-this.designH*n)/2,this.applyFit(0,0),(Math.abs(e-this.viewW)>.5||Math.abs(t-this.viewH)>.5)&&(this.viewW=e,this.viewH=t,this.buildFelt())}applyFit(e,t){this.world.scale.set(this.fitScale),this.world.x=this.fitX+e*this.fitScale,this.world.y=this.fitY+t*this.fitScale}};async function Ge(){let e=document.getElementById(`stage`);if(!e)throw Error(`#stage canvas is missing`);let t=Math.min(window.devicePixelRatio||1,3),n=new R;await n.init({canvas:e,resolution:t,autoDensity:!0,resizeTo:window,antialias:!0,backgroundColor:529167,powerPreference:`high-performance`});let r=D(window.innerWidth,window.innerHeight),i=new ee(ie(`napoletano`));i.setSize(r.cardW,t);let a=document.getElementById(`boot-bar`);await i.warm((e,t)=>{a&&(a.style.width=`${Math.round(e/t*100)}%`)});let o=Ke(),s=new We(n,i,o.setBeat);s.resize(window.innerWidth,window.innerHeight),n.ticker.add(e=>{s.update(e.deltaMS/1e3),o.setFps(n.ticker.FPS)}),window.addEventListener(`resize`,()=>s.resize(window.innerWidth,window.innerHeight)),window.addEventListener(`pointermove`,e=>{s.setPointer(e.clientX/window.innerWidth,e.clientY/window.innerHeight)}),o.onReplay(()=>s.start()),s.start(),window.__hero=s;let c=document.getElementById(`boot`);c&&(c.classList.add(`done`),setTimeout(()=>c.remove(),600))}function Ke(){let e=document.getElementById(`overlay`)??document.body,t=document.createElement(`style`);t.textContent=`
    .hero-cap { position: fixed; top: 22px; left: 0; right: 0; text-align: center;
      font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.4rem, 4vw, 2.4rem);
      font-weight: 600; letter-spacing: 0.04em; color: #bcae90; pointer-events: none;
      text-shadow: 0 2px 20px rgba(0,0,0,0.85); opacity: 0; transition: opacity .4s ease; }
    .hero-cap.show { opacity: 0.78; }
    .hero-cap.flourish { color: #cdad72;
      text-shadow: 0 2px 20px rgba(0,0,0,0.85), 0 0 16px rgba(200,150,60,0.32), 0 0 34px rgba(180,130,45,0.2); }
    .hero-bar { position: fixed; bottom: 18px; left: 0; right: 0; display: flex; gap: 14px;
      align-items: center; justify-content: center; pointer-events: none; }
    .hero-btn { pointer-events: auto; cursor: pointer; border: 1px solid rgba(243,212,121,0.5);
      background: rgba(20,40,30,0.55); color: #f3d479; font-family: Inter, sans-serif;
      font-size: 0.82rem; letter-spacing: 0.14em; text-transform: uppercase; padding: 9px 20px;
      border-radius: 999px; backdrop-filter: blur(6px); transition: background .2s, transform .1s; }
    .hero-btn:hover { background: rgba(30,60,44,0.8); }
    .hero-btn:active { transform: scale(0.96); }
    .hero-badge { position: fixed; top: 14px; left: 16px; font-family: Inter, sans-serif;
      font-size: 0.62rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(143,174,159,0.75); }
    .hero-fps { font-variant-numeric: tabular-nums; color: rgba(143,174,159,0.7);
      font-family: Inter, sans-serif; font-size: 0.72rem; }
  `,document.head.appendChild(t);let n=document.createElement(`div`);n.className=`hero-cap`,e.appendChild(n);let r=document.createElement(`div`);r.className=`hero-badge`,r.textContent=`Settebello · Hero · GPU / PixiJS`,e.appendChild(r);let i=document.createElement(`div`);i.className=`hero-bar`;let a=document.createElement(`button`);a.className=`hero-btn`,a.textContent=`Replay`;let o=document.createElement(`span`);o.className=`hero-fps`,i.append(a,o),e.appendChild(i);let s=0,c=0;return{setBeat(e){if(!e){n.classList.remove(`show`);return}n.textContent=e,n.classList.add(`show`),n.classList.toggle(`flourish`,/!\s*$/.test(e)),window.clearTimeout(s),s=window.setTimeout(()=>n.classList.remove(`show`),2200)},setFps(e){let t=Math.round(e);t!==c&&(c=t,o.textContent=`${t} fps`)},onReplay(e){a.addEventListener(`click`,e)}}}Ge();