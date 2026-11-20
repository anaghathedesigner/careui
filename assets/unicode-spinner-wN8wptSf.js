import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./dist-CxWIzVbt.js";var a=t(e(),1),o=n(),s=[[1,8],[2,16],[4,32],[64,128]];function c(e,t){return Array.from({length:e},()=>Array(t).fill(!1))}function l(e){let t=e.length,n=e[0]?.length??0,r=``;for(let i=0;i<Math.ceil(n/2);i++){let n=10240;for(let r=0;r<4&&r<t;r++)for(let t=0;t<2;t++)e[r]?.[i*2+t]&&(n|=s[r][t]);r+=String.fromCodePoint(n)}return r}function u(){return[`⠋`,`⠙`,`⠹`,`⠸`,`⠼`,`⠴`,`⠦`,`⠧`,`⠇`,`⠏`]}function d(){return[`⠁⠂⠄⡀`,`⠂⠄⡀⢀`,`⠄⡀⢀⠠`,`⡀⢀⠠⠐`,`⢀⠠⠐⠈`,`⠠⠐⠈⠁`,`⠐⠈⠁⠂`,`⠈⠁⠂⠄`]}function f(){return[`⠋⠉⠙⠚`,`⠉⠙⠚⠒`,`⠙⠚⠒⠂`,`⠚⠒⠂⠂`,`⠒⠂⠂⠒`,`⠂⠂⠒⠲`,`⠂⠒⠲⠴`,`⠒⠲⠴⠤`,`⠲⠴⠤⠄`,`⠴⠤⠄⠋`,`⠤⠄⠋⠉`,`⠄⠋⠉⠙`]}function p(){let e=[[0,0],[0,1],[1,1],[2,1],[3,1],[3,0],[2,0],[1,0]];return e.map((t,n)=>{let r=c(4,2);r[e[n][0]][e[n][1]]=!0;let i=(n-1+e.length)%e.length;return r[e[i][0]][e[i][1]]=!0,l(r)})}function m(){let e=[[],[[1,0]],[[0,1],[2,0]],[[0,0],[1,1],[3,0]],[[0,0],[1,1],[2,0],[3,1]],[[0,0],[0,1],[1,1],[2,0],[3,1]],[[0,0],[0,1],[1,0],[2,1],[3,0],[3,1]],[[0,0],[0,1],[1,0],[1,1],[2,0],[3,0],[3,1]],[[0,0],[0,1],[1,0],[1,1],[2,0],[2,1],[3,0],[3,1]]];return[...e,...e.slice().reverse().slice(1)].map(e=>{let t=c(4,2);for(let[n,r]of e)t[n][r]=!0;return l(t)})}function h(){let e=[];for(let t=-1;t<9;t++){let n=c(4,8);for(let e=0;e<4;e++)for(let r=0;r<8;r++)(r===t||r===t-1)&&(n[e][r]=!0);e.push(l(n))}return e}function g(){return[.5,1.2,2,3,3.5].map(e=>{let t=c(4,6);for(let n=0;n<4;n++)for(let r=0;r<6;r++)Math.abs(Math.sqrt((r-2.5)**2+(n-1.5)**2)-e)<.9&&(t[n][r]=!0);return l(t)})}function _(){return Array.from({length:16},(e,t)=>{let n=c(4,8);for(let e=0;e<8;e++){let r=(t+e)*(Math.PI/4);n[Math.round((Math.sin(r)+1)/2*3)][e]=!0,n[Math.round((Math.sin(r+Math.PI)+1)/2*3)][e]=!0}return l(n)})}function v(){let e=[];for(let t=-2;t<12;t++){let n=c(4,8);for(let e=0;e<4;e++)for(let r=0;r<8;r++)(r+e===t||r+e===t-1)&&(n[e][r]=!0);e.push(l(n))}return e}function y(){let e=[];for(let t=0;t<4;t++)if(t%2==0)for(let n=0;n<4;n++)e.push([t,n]);else for(let n=3;n>=0;n--)e.push([t,n]);return e.map((t,n)=>{let r=c(4,4);for(let t=0;t<4;t++){let i=(n-t+e.length)%e.length;r[e[i][0]][e[i][1]]=!0}return l(r)})}function b(){return Array.from({length:16},(e,t)=>{let n=c(4,8);for(let e=0;e<8;e++){let r=Math.round((Math.sin((t-e*.5)*.8)+1)/2*3);n[r][e]=!0,r>0&&(n[r-1][e]=(t+e)%3==0)}return l(n)})}function x(){let e=[0,2,4,1,3,5,2,4];return Array.from({length:12},(t,n)=>{let r=c(4,8);for(let t=0;t<8;t++){let i=(n+e[t])%6;i<4&&(r[i][t]=!0,i>0&&(r[i-1][t]=!0))}return l(r)})}function S(){let e=[];for(let t=0;t<4;t++){let n=c(4,8);for(let e=0;e<8;e++)n[t][e]=!0,t>0&&(n[t-1][e]=e%2==0);e.push(l(n))}return e.push(l(c(4,8))),e.push(l(c(4,8))),e}function C(){return[[[0,1],[1,4],[2,7],[3,2]],[[0,5],[1,0],[2,3],[3,6]],[[0,3],[1,6],[2,1],[3,4]],[[0,7],[1,2],[2,5],[3,0]],[[0,0],[0,4],[2,2],[2,6]],[[1,1],[1,5],[3,3],[3,7]]].map(e=>{let t=c(4,8);for(let[n,r]of e)t[n][r]=!0;return l(t)})}function w(){let e=[0,Math.PI*.4,Math.PI*.8,Math.PI*1.3];return Array.from({length:26},(t,n)=>{let r=c(4,8);for(let t=0;t<4;t++){let i=Math.max(1,Math.round((Math.sin(2*Math.PI/26*n+e[t])+1)/2*4));for(let e=4-i;e<4;e++)r[e][t*2]=!0,r[e][t*2+1]=!0}return l(r)})}function T(){return Array.from({length:4},(e,t)=>{let n=c(4,8);for(let e=0;e<4;e++)for(let r=0;r<8;r++)(e+r+t)%2==0&&(n[e][r]=!0);return l(n)})}function E(){let e=[];for(let t=0;t<=8;t++){let n=c(4,8);for(let e=0;e<4;e++)for(let r=0;r<t;r++)n[e][r]=!0;e.push(l(n))}let t=c(4,8);for(let e=0;e<4;e++)for(let n=0;n<8;n++)t[e][n]=!0;return e.push(l(t)),e.push(l(c(4,8))),e}function D(){return Array.from({length:16},(e,t)=>{let n=c(4,8),r=t-5;for(let e=0;e<4;e++)for(let t=0;t<8;t++){let i=t-e;(i===r||i===r+1)&&(n[e][t]=!0)}return l(n)})}function O(){let e=e=>e.map(Boolean),t=[...e([0,0,1,1,1,1,0,0]),...e([1,1,1,1,1,1,1,1]),...e([1,1,1,1,1,1,1,1]),...e([0,0,1,1,1,1,0,0])],n=[...e([0,1,1,0,0,1,1,0]),...e([1,1,1,1,1,1,1,1]),...e([1,1,1,1,1,1,1,1]),...e([0,0,1,1,1,1,0,0])],r=[...e([0,1,1,0,0,1,1,0]),...e([1,1,1,1,1,1,1,1]),...e([0,1,1,1,1,1,1,0]),...e([0,0,1,1,1,1,0,0])],i=[...e([0,1,1,0,0,1,1,0]),...e([1,1,1,1,1,1,1,1]),...e([0,1,1,1,1,1,1,0]),...e([0,0,0,1,1,0,0,0])],a=[...e([0,0,1,0,0,1,0,0]),...e([0,1,1,1,1,1,1,0]),...e([0,0,1,1,1,1,0,0]),...e([0,0,0,1,1,0,0,0])];return[t,t,t,n,r,i,a,i,i,a,i,r,n,t].map(e=>{let t=c(4,8);for(let n=0;n<4;n++)for(let r=0;r<8;r++)t[n][r]=e[n*8+r];return l(t)})}var k={braille:{frames:u(),interval:80},braillewave:{frames:d(),interval:100},dna:{frames:f(),interval:80},orbit:{frames:p(),interval:100},breathe:{frames:m(),interval:100},scan:{frames:h(),interval:70},rain:{frames:x(),interval:100},scanline:{frames:S(),interval:120},pulse:{frames:g(),interval:180},sparkle:{frames:C(),interval:150},cascade:{frames:v(),interval:60},columns:{frames:w(),interval:60},snake:{frames:y(),interval:80},helix:{frames:_(),interval:80},waverows:{frames:b(),interval:90},checkerboard:{frames:T(),interval:250},fillsweep:{frames:E(),interval:100},diagswipe:{frames:D(),interval:60},heartbeat:{frames:O(),interval:150}},A=i(`inline-block select-none font-mono leading-none`,{variants:{size:{xs:`text-xs`,sm:`text-sm`,md:`text-base`,lg:`text-lg`,xl:`text-xl`,"2xl":`text-2xl`}},defaultVariants:{size:`sm`}});function j({name:e=`braille`,size:t,className:n,...i}){let s=k[e],[c,l]=a.useState(0);return a.useEffect(()=>{if(typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=setInterval(()=>l(e=>(e+1)%s.frames.length),s.interval);return()=>clearInterval(e)},[e,s.frames.length,s.interval]),(0,o.jsxs)(`span`,{"data-slot":`spinner`,role:`status`,"aria-label":`Loading`,"aria-live":`polite`,className:r(A({size:t}),n),...i,children:[s.frames[c],(0,o.jsx)(`span`,{className:`sr-only`,children:`Loading…`})]})}var M=Object.keys(k),N={id:`unicode-spinner`,name:`Unicode Spinner`,description:`Braille-based Unicode spinner with multiple animation presets. Zero dependencies — all frames are computed once at module load using the braille dot grid algorithm.`,installation:{cli:`npx shadcn@latest add unicode-spinner`,manual:`Copy and paste the unicode-spinner component source code into your project.`},usage:`import { Spinner } from "@/components/ui/unicode-spinner"

<Spinner />
<Spinner name="helix" />
<Spinner name="scan" size="lg" />`,preview:{code:`import { Spinner } from "@/components/ui/unicode-spinner"

export function UnicodeSpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner name="braille" />
      <Spinner name="helix" />
      <Spinner name="orbit" />
      <Spinner name="scan" />
      <Spinner name="waverows" />
    </div>
  )
}`,component:a.createElement(`div`,{className:`flex items-center gap-6`},a.createElement(j,{name:`braille`}),a.createElement(j,{name:`helix`}),a.createElement(j,{name:`orbit`}),a.createElement(j,{name:`scan`}),a.createElement(j,{name:`waverows`}))},examples:[{name:`Presets`,description:`All 11 built-in animation presets. Pass the name prop to choose one.`,code:`import { Spinner, type SpinnerName } from "@/components/ui/unicode-spinner"

const presets: SpinnerName[] = [
  "braille", "braillewave", "dna",
  "orbit", "breathe", "scan",
  "pulse", "helix", "cascade",
  "snake", "waverows",
]

export function UnicodeSpinnerPresets() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {presets.map((name) => (
        <div key={name} className="flex flex-col items-center gap-1.5">
          <Spinner name={name} size="md" />
          <span className="text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex flex-wrap items-center gap-6`},...M.map(e=>a.createElement(`div`,{key:e,className:`flex flex-col items-center gap-1.5`},a.createElement(j,{name:e,size:`md`}),a.createElement(`span`,{className:`text-xs text-muted-foreground`},e))))},{name:`Size`,description:`Use the size prop to control the font size of the braille character(s).`,code:`import { Spinner } from "@/components/ui/unicode-spinner"

export function UnicodeSpinnerSize() {
  return (
    <div className="flex items-end gap-6">
      <Spinner name="helix" size="xs" />
      <Spinner name="helix" size="sm" />
      <Spinner name="helix" size="md" />
      <Spinner name="helix" size="lg" />
      <Spinner name="helix" size="xl" />
      <Spinner name="helix" size="2xl" />
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex items-end gap-6`},a.createElement(j,{name:`helix`,size:`xs`}),a.createElement(j,{name:`helix`,size:`sm`}),a.createElement(j,{name:`helix`,size:`md`}),a.createElement(j,{name:`helix`,size:`lg`}),a.createElement(j,{name:`helix`,size:`xl`}),a.createElement(j,{name:`helix`,size:`2xl`}))},{name:`Color`,description:`Apply any Tailwind text color via className to tint the spinner.`,code:`import { Spinner } from "@/components/ui/unicode-spinner"

export function UnicodeSpinnerColor() {
  return (
    <div className="flex items-center gap-6">
      <Spinner name="braille" className="text-primary" />
      <Spinner name="braille" className="text-destructive" />
      <Spinner name="braille" className="text-muted-foreground" />
      <Spinner name="braille" className="text-green-500" />
      <Spinner name="braille" className="text-amber-500" />
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex items-center gap-6`},a.createElement(j,{name:`braille`,className:`text-primary`}),a.createElement(j,{name:`braille`,className:`text-destructive`}),a.createElement(j,{name:`braille`,className:`text-muted-foreground`}),a.createElement(j,{name:`braille`,className:`text-green-500`}),a.createElement(j,{name:`braille`,className:`text-amber-500`}))},{name:`Inline`,description:`Use inline with text to show a loading label.`,code:`import { Spinner } from "@/components/ui/unicode-spinner"

export function UnicodeSpinnerInline() {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner name="orbit" /> Processing payment…
      </p>
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner name="breathe" /> Syncing records…
      </p>
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner name="dna" /> Generating report…
      </p>
    </div>
  )
}`,preview:a.createElement(`div`,{className:`flex flex-col gap-3`},a.createElement(`p`,{className:`flex items-center gap-2 text-sm text-muted-foreground`},a.createElement(j,{name:`orbit`}),`Processing payment…`),a.createElement(`p`,{className:`flex items-center gap-2 text-sm text-muted-foreground`},a.createElement(j,{name:`breathe`}),`Syncing records…`),a.createElement(`p`,{className:`flex items-center gap-2 text-sm text-muted-foreground`},a.createElement(j,{name:`dna`}),`Generating report…`))}]};export{N as unicodeSpinnerDoc};