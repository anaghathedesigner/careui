import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./dist-CxWIzVbt.js";var a=t(e(),1),o=n(),s=5;function c(e=s){return new Uint8Array(e*e)}function l(e,t,n,r=s){t>=0&&t<r&&n>=0&&n<r&&(e[t*r+n]=1)}function u(){let e=s,t=[];for(let n=0;n<e;n++)t.push([0,n]);for(let n=1;n<e;n++)t.push([n,4]);for(let e=3;e>=0;e--)t.push([4,e]);for(let e=3;e>0;e--)t.push([e,0]);let n=t.length;return Array.from({length:n},(e,r)=>{let i=c();for(let e=0;e<3;e++){let[a,o]=t[(r-e+n)%n];l(i,a,o)}return i})}function d(){let e=s;return Array.from({length:e},(t,n)=>{let r=c();for(let t=0;t<e;t++)l(r,t,(n+t)%e);return r})}function f(){let e=s;return Array.from({length:12},(t,n)=>{let r=c();for(let t=0;t<e;t++){let e=(n-t)*(Math.PI/3);l(r,Math.round((Math.sin(e)+1)/2*4),t),l(r,Math.round((Math.sin(e+Math.PI)+1)/2*4),t)}return r})}function p(){let e=s,t=[];for(let n=0;n<e;n++)t.push([0,n]);for(let n=1;n<e;n++)t.push([n,4]);for(let e=3;e>=0;e--)t.push([4,e]);for(let e=3;e>0;e--)t.push([e,0]);let n=t.length,r=Math.floor(n/2);return Array.from({length:n},(e,i)=>{let a=c();return l(a,t[i][0],t[i][1]),l(a,t[(i+r)%n][0],t[(i+r)%n][1]),a})}function m(){let e=[[2,2,2,2],[1,1,3,3],[0,0,4,4]];return[e[0],e[0],e[1],e[2],e[2],e[1],e[0]].map(([e,t,n,r])=>{let i=c();for(let a=e;a<=n;a++)for(let e=t;e<=r;e++)l(i,a,e);return i})}function h(){let e=s,t=[];for(let n=-1;n<6;n++){let r=c();for(let t=0;t<e;t++)for(let i=0;i<e;i++)(i===n||i===n-1)&&l(r,t,i);t.push(r)}return t}function g(){let e=s,t=[0,3,1,4,2];return Array.from({length:12},(n,r)=>{let i=c();for(let n=0;n<e;n++){let a=(r+t[n])%7;a<e&&(l(i,a,n),a>0&&l(i,a-1,n))}return i})}function _(){let e=s,t=[];for(let n=0;n<e;n++){let r=c();for(let t=0;t<e;t++)l(r,n,t),n>0&&t%2==0&&l(r,n-1,t);t.push(r)}return t.push(c()),t}function v(){let e=s;return[.5,1.2,2,2.8,3.5].map(t=>{let n=c();for(let r=0;r<e;r++)for(let i=0;i<e;i++){let e=Math.sqrt((i-2)**2+(r-2)**2);Math.abs(e-t)<.6&&l(n,r,i)}return n})}function y(){return[[[0,1],[1,3],[2,0],[3,4],[4,2]],[[0,3],[1,0],[2,4],[3,2],[4,1]],[[0,0],[1,4],[2,2],[3,1],[4,3]],[[0,4],[1,2],[2,1],[3,3],[4,0]],[[0,2],[1,1],[2,3],[3,0],[4,4]],[[0,3],[1,4],[2,0],[3,2],[4,1]]].map(e=>{let t=c();for(let[n,r]of e)l(t,n,r);return t})}function b(){let e=s,t=[];for(let n=-1;n<10;n++){let r=c();for(let t=0;t<e;t++)for(let i=0;i<e;i++)(i+t===n||i+t===n-1)&&l(r,t,i);t.push(r)}return t}function x(){let e=s,t=[0,Math.PI*.4,Math.PI*.8,Math.PI*1.2,Math.PI*1.6];return Array.from({length:26},(n,r)=>{let i=c();for(let n=0;n<e;n++){let a=Math.max(1,Math.round((Math.sin(2*Math.PI/26*r+t[n])+1)/2*e));for(let t=e-a;t<e;t++)l(i,t,n)}return i})}function S(){let e=s,t=[];for(let n=0;n<e;n++)if(n%2==0)for(let r=0;r<e;r++)t.push([n,r]);else for(let e=4;e>=0;e--)t.push([n,e]);return t.map((e,n)=>{let r=c();for(let e=0;e<8;e++){let[i,a]=t[(n-e+t.length)%t.length];l(r,i,a)}return r})}function C(){let e=s;return Array.from({length:16},(t,n)=>{let r=c();for(let t=0;t<e;t++){let e=(n+t)*(Math.PI/4);l(r,Math.round((Math.sin(e)+1)/2*4),t),l(r,Math.round((Math.sin(e+Math.PI)+1)/2*4),t)}return r})}function w(){let e=s;return Array.from({length:16},(t,n)=>{let r=c();for(let t=0;t<e;t++){let e=Math.round((Math.sin((n-t*.5)*.8)+1)/2*4);l(r,e,t),e>0&&(n+t)%4==0&&l(r,e-1,t)}return r})}function T(){let e=s;return Array.from({length:4},(t,n)=>{let r=c();for(let t=0;t<e;t++)for(let i=0;i<e;i++)(t+i+n)%2==0&&l(r,t,i);return r})}function E(){let e=s,t=[];for(let n=0;n<=e;n++){let r=c();for(let t=0;t<e;t++)for(let e=0;e<n;e++)l(r,t,e);t.push(r)}let n=c();for(let e=0;e<25;e++)n[e]=1;return t.push(n),t.push(c()),t}function D(){let e=s;return Array.from({length:16},(t,n)=>{let r=c(),i=n-4;for(let t=0;t<e;t++)for(let n=0;n<e;n++){let e=n-t;(e===i||e===i+1)&&l(r,t,n)}return r})}function O(){let e=e=>e,t=[...e([0,0,1,0,0]),...e([0,0,1,0,0]),...e([1,1,1,1,1]),...e([0,0,1,0,0]),...e([0,0,1,0,0])],n=[...e([0,0,1,0,0]),...e([0,0,1,0,0]),...e([1,1,1,1,1]),...e([0,1,1,1,0]),...e([0,0,1,0,0])],r=[...e([0,0,1,0,0]),...e([0,1,0,1,0]),...e([1,1,1,1,1]),...e([0,1,1,1,0]),...e([0,0,1,0,0])],i=[...e([0,0,0,0,0]),...e([0,1,0,1,0]),...e([1,1,1,1,1]),...e([0,1,1,1,0]),...e([0,0,1,0,0])];return[t,t,t,n,r,i,i,i,i,[...e([0,0,1,0,0]),...e([0,1,0,1,0]),...e([1,1,1,1,1]),...e([0,1,1,1,0]),...e([0,0,1,0,0])],[...e([0,0,1,0,0]),...e([0,0,1,0,0]),...e([1,1,1,1,1]),...e([0,1,1,1,0]),...e([0,0,1,0,0])],t,t,t].map(e=>{let t=c();for(let n=0;n<25;n++)t[n]=e[n];return t})}var k={braille:{frames:u(),interval:80},braillewave:{frames:d(),interval:100},dna:{frames:f(),interval:80},orbit:{frames:p(),interval:100},breathe:{frames:m(),interval:160},scan:{frames:h(),interval:70},rain:{frames:g(),interval:100},scanline:{frames:_(),interval:120},pulse:{frames:v(),interval:180},sparkle:{frames:y(),interval:150},cascade:{frames:b(),interval:60},columns:{frames:x(),interval:60},snake:{frames:S(),interval:80},helix:{frames:C(),interval:80},waverows:{frames:w(),interval:90},checkerboard:{frames:T(),interval:250},fillsweep:{frames:E(),interval:100},diagswipe:{frames:D(),interval:60},heartpulse:{frames:O(),interval:80}},A=i(`inline-grid select-none`,{variants:{size:{14:`[--size:14px]`,19:`[--size:19px]`,24:`[--size:24px]`,29:`[--size:29px]`}},defaultVariants:{size:`19`}});function j({name:e=`braille`,size:t,className:n,style:i,...c}){let l=k[e],u=Math.round(l.interval*.85),d=a.useRef(null);a.useEffect(()=>{let e=d.current;if(!e||typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let t=Array.from(e.querySelectorAll(`[data-dot]`)),n=0,r=setInterval(()=>{n=(n+1)%l.frames.length;let e=l.frames[n];for(let n=0;n<t.length;n++)t[n].style.opacity=e[n]?`1`:`0.18`},l.interval);return()=>clearInterval(r)},[e,l]);let f=l.frames[0];return(0,o.jsxs)(`span`,{ref:d,"data-slot":`pixel-spinner`,role:`status`,"aria-label":`Loading`,"aria-live":`polite`,className:r(A({size:t}),n),style:{display:`inline-grid`,width:`var(--size, 16px)`,height:`var(--size, 16px)`,gridTemplateColumns:`repeat(${s}, 1fr)`,gridTemplateRows:`repeat(${s}, 1fr)`,gap:`1px`,...i},...c,children:[Array.from({length:25},(e,t)=>(0,o.jsx)(`span`,{"data-dot":!0,className:`rounded-sm bg-current`,style:{opacity:f[t]?1:.18,transition:`opacity ${u}ms cubic-bezier(0.4, 0, 0.2, 1)`}},t)),(0,o.jsx)(`span`,{className:`sr-only`,children:`Loading…`})]})}var M=Object.keys(k),N={id:`pixel-spinner`,name:`Pixel Spinner`,description:`Dot-matrix spinner with 19 animation presets rendered as a CSS 8×8 square grid of discrete rounded dots. Zero dependencies — all frames are computed once at module load.`,installation:{cli:`npx shadcn@latest add pixel-spinner`,manual:`Copy and paste the pixel-spinner component source code into your project.`},usage:`import { PixelSpinner } from "@/components/ui/pixel-spinner"

<PixelSpinner />
<PixelSpinner name="helix" />
<PixelSpinner name="columns" size="lg" />`,preview:{code:`import { PixelSpinner } from "@/components/ui/pixel-spinner"

export function PixelSpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <PixelSpinner name="braille" />
      <PixelSpinner name="helix" />
      <PixelSpinner name="columns" />
      <PixelSpinner name="scan" />
      <PixelSpinner name="waverows" />
    </div>
  )
}`,component:a.createElement(`div`,{className:`flex items-center gap-6`},a.createElement(j,{name:`braille`}),a.createElement(j,{name:`helix`}),a.createElement(j,{name:`columns`}),a.createElement(j,{name:`scan`}),a.createElement(j,{name:`waverows`}))},examples:[{name:`Presets`,description:`All 19 built-in animation presets rendered as discrete dots on an 8×8 square grid.`,code:`import { PixelSpinner, type PixelSpinnerName } from "@/components/ui/pixel-spinner"

const presets: PixelSpinnerName[] = [
  "braille", "braillewave", "dna",
  "orbit", "breathe", "scan",
  "rain", "scanline", "pulse",
  "sparkle", "cascade", "columns",
  "snake", "helix", "waverows",
  "checkerboard", "fillsweep", "diagswipe",
  "heartpulse",
]

export function PixelSpinnerPresets() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      {presets.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <PixelSpinner name={name} size="19" />
          <span className="text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex flex-wrap items-start gap-6`},...M.map(e=>a.createElement(`div`,{key:e,className:`flex flex-col items-center gap-2`},a.createElement(j,{name:e,size:`19`}),a.createElement(`span`,{className:`text-xs text-muted-foreground`},e))))},{name:`Size`,description:`Use the size prop to control the total spinner dimension — 14, 19, 24, or 29 px (each gives 2/3/4/5 px integer dots).`,code:`import { PixelSpinner } from "@/components/ui/pixel-spinner"

export function PixelSpinnerSize() {
  return (
    <div className="flex items-end gap-4">
      <PixelSpinner name="helix" size="14" />
      <PixelSpinner name="helix" size="19" />
      <PixelSpinner name="helix" size="24" />
      <PixelSpinner name="helix" size="29" />
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex items-end gap-4`},a.createElement(j,{name:`helix`,size:`14`}),a.createElement(j,{name:`helix`,size:`19`}),a.createElement(j,{name:`helix`,size:`24`}),a.createElement(j,{name:`helix`,size:`29`}))},{name:`Color`,description:`Apply any Tailwind text color via className to tint both the on (█) and off (░) pixels.`,code:`import { PixelSpinner } from "@/components/ui/pixel-spinner"

export function PixelSpinnerColor() {
  return (
    <div className="flex items-center gap-6">
      <PixelSpinner name="orbit" className="text-primary" />
      <PixelSpinner name="orbit" className="text-destructive" />
      <PixelSpinner name="orbit" className="text-muted-foreground" />
      <PixelSpinner name="orbit" className="text-green-500" />
      <PixelSpinner name="orbit" className="text-amber-500" />
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex items-center gap-6`},a.createElement(j,{name:`orbit`,className:`text-primary`}),a.createElement(j,{name:`orbit`,className:`text-destructive`}),a.createElement(j,{name:`orbit`,className:`text-muted-foreground`}),a.createElement(j,{name:`orbit`,className:`text-green-500`}),a.createElement(j,{name:`orbit`,className:`text-amber-500`}))},{name:`Inline`,description:`Pixel spinners can appear inline next to text labels.`,code:`import { PixelSpinner } from "@/components/ui/pixel-spinner"

export function PixelSpinnerInline() {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <PixelSpinner name="columns" /> Processing payment…
      </p>
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <PixelSpinner name="breathe" /> Syncing records…
      </p>
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <PixelSpinner name="dna" /> Generating report…
      </p>
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex flex-col gap-3`},a.createElement(`p`,{className:`flex items-center gap-2 text-sm text-muted-foreground`},a.createElement(j,{name:`columns`}),`Processing payment…`),a.createElement(`p`,{className:`flex items-center gap-2 text-sm text-muted-foreground`},a.createElement(j,{name:`breathe`}),`Syncing records…`),a.createElement(`p`,{className:`flex items-center gap-2 text-sm text-muted-foreground`},a.createElement(j,{name:`dna`}),`Generating report…`))},{name:`Heartpulse`,description:`Medical cross smoothly morphs into a heart cell-by-cell via Chebyshev ripple order, holds, then dissolves back.`,code:`import { PixelSpinner } from "@/components/ui/pixel-spinner"

export function PixelSpinnerHeartpulse() {
  return (
    <div className="flex items-center gap-3">
      <PixelSpinner name="heartpulse" size="24" className="text-destructive" />
      <span className="text-sm text-muted-foreground">Monitoring vitals…</span>
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex items-center gap-3`},a.createElement(j,{name:`heartpulse`,size:`24`,className:`text-destructive`}),a.createElement(`span`,{className:`text-sm text-muted-foreground`},`Monitoring vitals…`))}]};export{N as pixelSpinnerDoc};