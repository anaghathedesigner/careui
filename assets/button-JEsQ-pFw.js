import{i as e,l as t,r as n}from"./dist-DtVyZPdI.js";import{t as r}from"./check-CfIGZGct.js";import{t as i}from"./refresh-cw-CmJjVdGU.js";import{t as a}from"./x-CgxuUKeI.js";import{t as o}from"./button-DTwq4-az.js";import{Ea as s,Gn as c,Ji as l,Jn as u,Kn as d,Qn as f,Vi as p,Xn as m,Yn as h,Zn as g,ba as _,qn as v,ra as y}from"./index-Ck2hFZuL.js";import{n as b,t as x}from"./spinner-CNEvLfBE.js";var S=t(e(),1);function C(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function w(...e){return t=>{let n=!1,r=e.map(e=>{let r=C(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():C(e[t],null)}}}}function T(...e){return S.useCallback(w(...e),e)}var E=n(),D=class extends S.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(u(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=u(e)&&e.offsetWidth||0,r=u(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function O({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,S.useId)(),s=(0,S.useRef)(null),c=(0,S.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,S.useContext)(v),u=T(s,e.props?.ref??e?.ref);return(0,S.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,E.jsx)(D,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:S.cloneElement(e,{ref:u})})}var k=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=g(A),d=(0,S.useId)(),f=!0,p=(0,S.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,S.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),S.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,E.jsx)(O,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,E.jsx)(h.Provider,{value:p,children:e})};function A(){return new Map}var j=e=>e.key||``;function M(e){let t=[];return S.Children.forEach(e,e=>{(0,S.isValidElement)(e)&&t.push(e)}),t}var N=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,p]=d(o),h=(0,S.useMemo)(()=>M(e),[e]),_=o&&!u?[]:h.map(j),v=(0,S.useRef)(!0),y=(0,S.useRef)(h),b=g(()=>new Map),x=(0,S.useRef)(new Set),[C,w]=(0,S.useState)(h),[T,D]=(0,S.useState)(h);m(()=>{v.current=!1,y.current=h;for(let e=0;e<T.length;e++){let t=j(T[e]);_.includes(t)?(b.delete(t),x.current.delete(t)):b.get(t)!==!0&&b.set(t,!1)}},[T,_.length,_.join(`-`)]);let O=[];if(h!==C){let e=[...h];for(let t=0;t<T.length;t++){let n=T[t],r=j(n);_.includes(r)||(e.splice(t,0,n),O.push(n))}return a===`wait`&&O.length&&(e=O),D(M(e)),w(h),null}let{forceRender:A}=(0,S.useContext)(f);return(0,E.jsx)(E.Fragment,{children:T.map(e=>{let d=j(e),f=o&&!u?!1:h===T||_.includes(d);return(0,E.jsx)(k,{isPresent:f,initial:!v.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:f?void 0:()=>{if(x.current.has(d))return;if(b.has(d))x.current.add(d),b.set(d,!0);else return;let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(A?.(),D(y.current),o&&p?.(),r&&r())},anchorX:s,anchorY:c,children:e},d)})})},P={type:`spring`,duration:.3,bounce:0},F={initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0},transition:{...P,exit:{duration:0}}},I={initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},transition:P},L={initial:{opacity:1,y:0},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:P};function R({onClick:e,idleContent:t,successContent:n,errorContent:r,disableOnSuccess:i=!0,variant:a=`default`,...s}){let[l,u]=S.useState(`idle`),d=l===`loading`,f=l===`success`,p=l===`error`;async function m(){if(!d){u(`loading`);try{await e(),u(`success`)}catch{u(`error`)}}}let h=p?`destructive`:a;return S.createElement(o,{...s,variant:h,disabled:i&&f||s.disabled,onClick:m,className:`overflow-hidden`+(d?` pointer-events-none`:``)+(s.className?` `+s.className:``)},S.createElement(`span`,{className:`grid *:col-start-1 *:row-start-1 *:flex *:items-center *:justify-center *:gap-1.5`},S.createElement(`span`,{className:`invisible`,"aria-hidden":`true`},t),n?S.createElement(`span`,{className:`invisible`,"aria-hidden":`true`},n):null,r?S.createElement(`span`,{className:`invisible`,"aria-hidden":`true`},r):null,S.createElement(N,{mode:`popLayout`,initial:!1},d?S.createElement(c.span,{key:`loading`,...L},S.createElement(x,{"data-icon":`inline-start`,className:`text-inherit`})):f&&n?S.createElement(c.span,{key:`success`,...I},n):p&&r?S.createElement(c.span,{key:`error`,...I},r):S.createElement(c.span,{key:`idle`,...F},t))))}function z(){let[e,t]=S.useState(0);return S.createElement(`div`,{className:`flex flex-col items-center gap-6`},S.createElement(`div`,{key:e,className:`flex flex-wrap gap-12 justify-center items-end`},S.createElement(`div`,{className:`flex flex-col items-center gap-3`},S.createElement(R,{onClick:()=>new Promise(e=>setTimeout(e,1500)),idleContent:S.createElement(S.Fragment,null,S.createElement(r,{"data-icon":`inline-start`}),`Save Changes`),successContent:S.createElement(S.Fragment,null,S.createElement(s,{"data-icon":`inline-start`}),`Saved`)}),S.createElement(`span`,{className:`text-xs text-muted-foreground`},`→ success`)),S.createElement(`div`,{className:`flex flex-col items-center gap-3`},S.createElement(R,{onClick:()=>new Promise((e,t)=>setTimeout(()=>t(Error(`fail`)),1500)),disableOnSuccess:!1,idleContent:S.createElement(S.Fragment,null,S.createElement(r,{"data-icon":`inline-start`}),`Update Changes`),errorContent:S.createElement(S.Fragment,null,S.createElement(i,{"data-icon":`inline-start`}),`Retry`)}),S.createElement(`span`,{className:`text-xs text-muted-foreground`},`→ error / retry`))),S.createElement(`button`,{className:`text-xs text-muted-foreground underline underline-offset-2 cursor-pointer`,onClick:()=>t(e=>e+1)},`Reset`))}var B={id:`button`,name:`Button`,description:`Displays a button or a component that looks like a button.`,installation:{cli:`npx shadcn@latest add button`,manual:`Copy and paste the button component source code into your project.`},usage:`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,preview:{code:`<div className="flex gap-8 flex-wrap">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="destructive-solid">Destructive Solid</Button>
</div>`,component:S.createElement(`div`,{className:`flex gap-8 flex-wrap`},S.createElement(o,{},`Default`),S.createElement(o,{variant:`secondary`},`Secondary`),S.createElement(o,{variant:`tertiary`},`Tertiary`),S.createElement(o,{variant:`outline`},`Outline`),S.createElement(o,{variant:`ghost`},`Ghost`),S.createElement(o,{variant:`link`},`Link`),S.createElement(o,{variant:`destructive`},`Destructive`),S.createElement(o,{variant:`destructive-solid`},`Destructive Solid`))},examples:[{name:`Sizes`,description:`Different button sizes.`,code:`<div className="flex gap-2 items-center flex-wrap">
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button>Default</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
</div>`,preview:S.createElement(`div`,{className:`flex gap-2 items-center flex-wrap`},S.createElement(o,{size:`xs`},`Extra Small`),S.createElement(o,{size:`sm`},`Small`),S.createElement(o,{},`Default`),S.createElement(o,{size:`lg`},`Large`),S.createElement(o,{size:`xl`},`Extra Large`))},{name:`With Icons`,description:`Buttons with icons on the left or right side.`,code:`import { Mail, Plus } from "lucide-react"

<div className="flex gap-2 flex-wrap">
  <Button>
    <Mail data-icon="inline-start" />
    Login with Email
  </Button>
  <Button variant="secondary">
    <Plus data-icon="inline-start" />
    Add Item
  </Button>
  <Button variant="outline">
    Continue
    <ChevronRight data-icon="inline-end" />
  </Button>
</div>`,preview:S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{},S.createElement(y,{"data-icon":`inline-start`}),`Login with Email`),S.createElement(o,{variant:`secondary`},S.createElement(l,{"data-icon":`inline-start`}),`Add Item`),S.createElement(o,{variant:`outline`},`Continue`,S.createElement(_,{"data-icon":`inline-end`})))},{name:`As Child`,description:`Use the asChild prop on <Button /> to make another component look like a button. Here's an example of a link that looks like a button.`,code:`import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}`,preview:S.createElement(o,{asChild:!0},S.createElement(`a`,{href:`#`},`Login`))},{name:`All Variants with Icons`,description:`All button variants with icons across all sizes.`,code:`import { Mail } from "lucide-react"

<div className="space-y-4">
  {/* Extra Small */}
  <div className="space-y-2">
    <p className="text-xs font-medium text-muted-foreground">Extra Small (xs)</p>
    <div className="flex gap-2 flex-wrap">
      <Button size="xs">
        <Mail data-icon="inline-start" />
        Default
      </Button>
      <Button size="xs" variant="secondary">
        <Mail data-icon="inline-start" />
        Secondary
      </Button>
      <Button size="xs" variant="tertiary">
        <Mail data-icon="inline-start" />
        Tertiary
      </Button>
      <Button size="xs" variant="outline">
        <Mail data-icon="inline-start" />
        Outline
      </Button>
      <Button size="xs" variant="ghost">
        <Mail data-icon="inline-start" />
        Ghost
      </Button>
      <Button size="xs" variant="destructive">
        <Mail data-icon="inline-start" />
        Destructive
      </Button>
    </div>
  </div>

  {/* Small */}
  <div className="space-y-2">
    <p className="text-xs font-medium text-muted-foreground">Small (sm)</p>
    <div className="flex gap-2 flex-wrap">
      <Button size="sm">
        <Mail data-icon="inline-start" />
        Default
      </Button>
      <Button size="sm" variant="secondary">
        <Mail data-icon="inline-start" />
        Secondary
      </Button>
      <Button size="sm" variant="tertiary">
        <Mail data-icon="inline-start" />
        Tertiary
      </Button>
      <Button size="sm" variant="outline">
        <Mail data-icon="inline-start" />
        Outline
      </Button>
      <Button size="sm" variant="ghost">
        <Mail data-icon="inline-start" />
        Ghost
      </Button>
      <Button size="sm" variant="destructive">
        <Mail data-icon="inline-start" />
        Destructive
      </Button>
    </div>
  </div>

  {/* Default */}
  <div className="space-y-2">
    <p className="text-xs font-medium text-muted-foreground">Default</p>
    <div className="flex gap-2 flex-wrap">
      <Button>
        <Mail data-icon="inline-start" />
        Default
      </Button>
      <Button variant="secondary">
        <Mail data-icon="inline-start" />
        Secondary
      </Button>
      <Button variant="tertiary">
        <Mail data-icon="inline-start" />
        Tertiary
      </Button>
      <Button variant="outline">
        <Mail data-icon="inline-start" />
        Outline
      </Button>
      <Button variant="ghost">
        <Mail data-icon="inline-start" />
        Ghost
      </Button>
      <Button variant="destructive">
        <Mail data-icon="inline-start" />
        Destructive
      </Button>
    </div>
  </div>

  {/* Large */}
  <div className="space-y-2">
    <p className="text-xs font-medium text-muted-foreground">Large (lg)</p>
    <div className="flex gap-2 flex-wrap">
      <Button size="lg">
        <Mail data-icon="inline-start" />
        Default
      </Button>
      <Button size="lg" variant="secondary">
        <Mail data-icon="inline-start" />
        Secondary
      </Button>
      <Button size="lg" variant="tertiary">
        <Mail data-icon="inline-start" />
        Tertiary
      </Button>
      <Button size="lg" variant="outline">
        <Mail data-icon="inline-start" />
        Outline
      </Button>
      <Button size="lg" variant="ghost">
        <Mail data-icon="inline-start" />
        Ghost
      </Button>
      <Button size="lg" variant="destructive">
        <Mail data-icon="inline-start" />
        Destructive
      </Button>
    </div>
  </div>

  {/* Extra Large */}
  <div className="space-y-2">
    <p className="text-xs font-medium text-muted-foreground">Extra Large (xl)</p>
    <div className="flex gap-2 flex-wrap">
      <Button size="xl">
        <Mail data-icon="inline-start" />
        Default
      </Button>
      <Button size="xl" variant="secondary">
        <Mail data-icon="inline-start" />
        Secondary
      </Button>
      <Button size="xl" variant="tertiary">
        <Mail data-icon="inline-start" />
        Tertiary
      </Button>
      <Button size="xl" variant="outline">
        <Mail data-icon="inline-start" />
        Outline
      </Button>
      <Button size="xl" variant="ghost">
        <Mail data-icon="inline-start" />
        Ghost
      </Button>
      <Button size="xl" variant="destructive">
        <Mail data-icon="inline-start" />
        Destructive
      </Button>
    </div>
  </div>
</div>`,preview:S.createElement(`div`,{className:`space-y-4`},S.createElement(`div`,{className:`space-y-2`},S.createElement(`p`,{className:`text-xs font-medium text-muted-foreground`},`Extra Small (xs)`),S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{size:`xs`},S.createElement(y,{"data-icon":`inline-start`}),`Default`),S.createElement(o,{size:`xs`,variant:`secondary`},S.createElement(y,{"data-icon":`inline-start`}),`Secondary`),S.createElement(o,{size:`xs`,variant:`tertiary`},S.createElement(y,{"data-icon":`inline-start`}),`Tertiary`),S.createElement(o,{size:`xs`,variant:`outline`},S.createElement(y,{"data-icon":`inline-start`}),`Outline`),S.createElement(o,{size:`xs`,variant:`ghost`},S.createElement(y,{"data-icon":`inline-start`}),`Ghost`),S.createElement(o,{size:`xs`,variant:`destructive`},S.createElement(y,{"data-icon":`inline-start`}),`Destructive`))),S.createElement(`div`,{className:`space-y-2`},S.createElement(`p`,{className:`text-xs font-medium text-muted-foreground`},`Small (sm)`),S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{size:`sm`},S.createElement(y,{"data-icon":`inline-start`}),`Default`),S.createElement(o,{size:`sm`,variant:`secondary`},S.createElement(y,{"data-icon":`inline-start`}),`Secondary`),S.createElement(o,{size:`sm`,variant:`tertiary`},S.createElement(y,{"data-icon":`inline-start`}),`Tertiary`),S.createElement(o,{size:`sm`,variant:`outline`},S.createElement(y,{"data-icon":`inline-start`}),`Outline`),S.createElement(o,{size:`sm`,variant:`ghost`},S.createElement(y,{"data-icon":`inline-start`}),`Ghost`),S.createElement(o,{size:`sm`,variant:`destructive`},S.createElement(y,{"data-icon":`inline-start`}),`Destructive`))),S.createElement(`div`,{className:`space-y-2`},S.createElement(`p`,{className:`text-xs font-medium text-muted-foreground`},`Default`),S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{},S.createElement(y,{"data-icon":`inline-start`}),`Default`),S.createElement(o,{variant:`secondary`},S.createElement(y,{"data-icon":`inline-start`}),`Secondary`),S.createElement(o,{variant:`tertiary`},S.createElement(y,{"data-icon":`inline-start`}),`Tertiary`),S.createElement(o,{variant:`outline`},S.createElement(y,{"data-icon":`inline-start`}),`Outline`),S.createElement(o,{variant:`ghost`},S.createElement(y,{"data-icon":`inline-start`}),`Ghost`),S.createElement(o,{variant:`destructive`},S.createElement(y,{"data-icon":`inline-start`}),`Destructive`))),S.createElement(`div`,{className:`space-y-2`},S.createElement(`p`,{className:`text-xs font-medium text-muted-foreground`},`Large (lg)`),S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{size:`lg`},S.createElement(y,{"data-icon":`inline-start`}),`Default`),S.createElement(o,{size:`lg`,variant:`secondary`},S.createElement(y,{"data-icon":`inline-start`}),`Secondary`),S.createElement(o,{size:`lg`,variant:`tertiary`},S.createElement(y,{"data-icon":`inline-start`}),`Tertiary`),S.createElement(o,{size:`lg`,variant:`outline`},S.createElement(y,{"data-icon":`inline-start`}),`Outline`),S.createElement(o,{size:`lg`,variant:`ghost`},S.createElement(y,{"data-icon":`inline-start`}),`Ghost`),S.createElement(o,{size:`lg`,variant:`destructive`},S.createElement(y,{"data-icon":`inline-start`}),`Destructive`))),S.createElement(`div`,{className:`space-y-2`},S.createElement(`p`,{className:`text-xs font-medium text-muted-foreground`},`Extra Large (xl)`),S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{size:`xl`},S.createElement(y,{"data-icon":`inline-start`}),`Default`),S.createElement(o,{size:`xl`,variant:`secondary`},S.createElement(y,{"data-icon":`inline-start`}),`Secondary`),S.createElement(o,{size:`xl`,variant:`tertiary`},S.createElement(y,{"data-icon":`inline-start`}),`Tertiary`),S.createElement(o,{size:`xl`,variant:`outline`},S.createElement(y,{"data-icon":`inline-start`}),`Outline`),S.createElement(o,{size:`xl`,variant:`ghost`},S.createElement(y,{"data-icon":`inline-start`}),`Ghost`),S.createElement(o,{size:`xl`,variant:`destructive`},S.createElement(y,{"data-icon":`inline-start`}),`Destructive`))))},{name:`Spinner`,description:'Render a <Spinner /> component inside the button to show a loading state. Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` attribute to the spinner for the correct spacing.',code:`import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function ButtonSpinner() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Default
      </Button>
      <Button variant="secondary" disabled>
        <Spinner data-icon="inline-start" />
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        <Spinner data-icon="inline-start" />
        Tertiary
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Outline
      </Button>
      <Button variant="ghost" disabled>
        <Spinner data-icon="inline-start" />
        Ghost
      </Button>
      <Button variant="destructive" disabled>
        <Spinner data-icon="inline-start" />
        Destructive
      </Button>
      <Button variant="destructive-solid" disabled>
        <Spinner data-icon="inline-start" />
        Destructive Solid
      </Button>
    </div>
  )
}`,preview:S.createElement(`div`,{className:`flex gap-2 flex-wrap`},S.createElement(o,{disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Default`),S.createElement(o,{variant:`secondary`,disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Secondary`),S.createElement(o,{variant:`tertiary`,disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Tertiary`),S.createElement(o,{variant:`outline`,disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Outline`),S.createElement(o,{variant:`ghost`,disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Ghost`),S.createElement(o,{variant:`destructive`,disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Destructive`),S.createElement(o,{variant:`destructive-solid`,disabled:!0},S.createElement(b,{"data-icon":`inline-start`}),`Destructive Solid`))},{name:`Icon Only`,description:`Icon-only buttons in different sizes and variants. Always include aria-label for accessibility.`,code:`import { Trash2 } from "lucide-react"

<div className="flex gap-4 items-center flex-wrap">
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">xs / outline</span>
    <Button size="icon-xs" variant="outline" aria-label="Delete">
      <Trash2 />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">sm / secondary</span>
    <Button size="icon-sm" variant="secondary" aria-label="Delete">
      <Trash2 />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">default / default</span>
    <Button size="icon" aria-label="Delete">
      <Trash2 />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">lg / destructive</span>
    <Button size="icon-lg" variant="destructive" aria-label="Delete">
      <Trash2 />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">xl / ghost</span>
    <Button size="icon-xl" variant="ghost" aria-label="Delete">
      <Trash2 />
    </Button>
  </div>
</div>`,preview:S.createElement(`div`,{className:`flex gap-4 items-center flex-wrap`},S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`xs / outline`),S.createElement(o,{size:`icon-xs`,variant:`outline`,"aria-label":`Delete`},S.createElement(p))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`sm / secondary`),S.createElement(o,{size:`icon-sm`,variant:`secondary`,"aria-label":`Delete`},S.createElement(p))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`default / default`),S.createElement(o,{size:`icon`,"aria-label":`Delete`},S.createElement(p))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`lg / destructive`),S.createElement(o,{size:`icon-lg`,variant:`destructive`,"aria-label":`Delete`},S.createElement(p))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`xl / ghost`),S.createElement(o,{size:`icon-xl`,variant:`ghost`,"aria-label":`Delete`},S.createElement(p))))},{name:`Icon Only - Close`,description:`Close button variations in different sizes and variants. Always include aria-label for accessibility.`,code:`import { X } from "lucide-react"

<div className="flex gap-4 items-center flex-wrap">
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">xs / default</span>
    <Button size="icon-xs" aria-label="Close">
      <X />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">sm / secondary</span>
    <Button size="icon-sm" variant="secondary" aria-label="Close">
      <X />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">default / outline</span>
    <Button size="icon" variant="outline" aria-label="Close">
      <X />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">lg / ghost</span>
    <Button size="icon-lg" variant="ghost" aria-label="Close">
      <X />
    </Button>
  </div>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs text-muted-foreground">xl / destructive</span>
    <Button size="icon-xl" variant="destructive" aria-label="Close">
      <X />
    </Button>
  </div>
</div>`,preview:S.createElement(`div`,{className:`flex gap-4 items-center flex-wrap`},S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`xs / default`),S.createElement(o,{size:`icon-xs`,"aria-label":`Close`},S.createElement(a))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`sm / secondary`),S.createElement(o,{size:`icon-sm`,variant:`secondary`,"aria-label":`Close`},S.createElement(a))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`default / outline`),S.createElement(o,{size:`icon`,variant:`outline`,"aria-label":`Close`},S.createElement(a))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`lg / ghost`),S.createElement(o,{size:`icon-lg`,variant:`ghost`,"aria-label":`Close`},S.createElement(a))),S.createElement(`div`,{className:`flex flex-col items-center gap-2`},S.createElement(`span`,{className:`text-xs text-muted-foreground`},`xl / destructive`),S.createElement(o,{size:`icon-xl`,variant:`destructive`,"aria-label":`Close`},S.createElement(a))))},{name:`Button States`,description:`A generic AsyncButton that accepts a promise-returning onClick. Shows a RadialSpinner while loading, then animates to success or error content via AnimatePresence. Width stays stable using a CSS grid stack.`,code:`import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { RadialSpinner } from "@/components/ui/spinner"

type AsyncButtonState = "idle" | "loading" | "success" | "error"

const SPRING = { type: "spring" as const, duration: 0.3, bounce: 0 }
const FADE_UP   = { initial: { opacity: 0, y:  6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, transition: { ...SPRING, exit: { duration: 0 } } }
const FADE_DOWN = { initial: { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y:  6 }, transition: SPRING }
const SNAP_IN   = { initial: { opacity: 1, y:  0 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: SPRING }

type AsyncButtonProps = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  onClick: () => Promise<void>
  idleContent: React.ReactNode
  successContent?: React.ReactNode
  errorContent?: React.ReactNode
  disableOnSuccess?: boolean
}

function AsyncButton({
  onClick,
  idleContent,
  successContent,
  errorContent,
  disableOnSuccess = true,
  variant: variantProp = "default",
  ...props
}: AsyncButtonProps) {
  const [state, setState] = useState<AsyncButtonState>("idle")
  const isLoading = state === "loading"
  const isSuccess = state === "success"
  const isError   = state === "error"

  async function handleClick() {
    if (isLoading) return
    setState("loading")
    try {
      await onClick()
      setState("success")
    } catch {
      setState("error")
    }
  }

  const variant = isError ? "destructive" : variantProp

  return (
    <Button
      {...props}
      variant={variant}
      disabled={(disableOnSuccess && isSuccess) || props.disabled}
      onClick={handleClick}
      className={\`overflow-hidden\${isLoading ? " pointer-events-none" : ""}\${props.className ? " " + props.className : ""}\`}
    >
      {/* Grid stack: invisible sizer + animated content share one cell → stable width */}
      <span className="grid *:col-start-1 *:row-start-1 *:flex *:items-center *:justify-center *:gap-1.5">
        {/* Invisible sizers for every state → width = max(idle, success, error) */}
        <span className="invisible" aria-hidden="true">{idleContent}</span>
        {successContent && <span className="invisible" aria-hidden="true">{successContent}</span>}
        {errorContent && <span className="invisible" aria-hidden="true">{errorContent}</span>}
        <AnimatePresence mode="popLayout" initial={false}>
          {isLoading ? (
            <motion.span key="loading" {...SNAP_IN}>
              <RadialSpinner data-icon="inline-start" className="text-inherit" />
            </motion.span>
          ) : isSuccess && successContent ? (
            <motion.span key="success" {...FADE_DOWN}>{successContent}</motion.span>
          ) : isError && errorContent ? (
            <motion.span key="error" {...FADE_DOWN}>{errorContent}</motion.span>
          ) : (
            <motion.span key="idle" {...FADE_UP}>{idleContent}</motion.span>
          )}
        </AnimatePresence>
      </span>
    </Button>
  )
}

// Usage
function Demo() {
  return (
    <AsyncButton
      onClick={async () => {
        await fetch("/api/save", { method: "POST" })
      }}
      idleContent={<><SaveIcon data-icon="inline-start" /> Save</>}
      successContent={<><CheckIcon data-icon="inline-start" /> Saved</>}
      errorContent={<><RefreshCwIcon data-icon="inline-start" /> Retry</>}
    />
  )
}`,preview:S.createElement(z,{})}]};export{B as buttonDoc};