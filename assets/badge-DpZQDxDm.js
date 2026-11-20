import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{Bi as r,Dr as i,Li as a,Wi as o,ga as s,sa as c}from"./index-Ck2hFZuL.js";import{t as l}from"./indicator-CDgBFGzA.js";var u=n(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),d=t(e(),1),f=(...e)=>d.createElement(`div`,{className:`flex items-center gap-2 flex-wrap`},...e),p=(e,...t)=>d.createElement(`div`,{className:`flex flex-col gap-2`},d.createElement(`p`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`},e),...t),m={id:`badge`,name:`Badge`,description:`An outlined badge for displaying status labels, tags, and notification indicators. Supports semantic and full Tailwind color palettes, four sizes, and dot, icon, and close-button variants.`,installation:{cli:`npx shadcn@latest add badge`,manual:`Copy and paste the badge component source code into your project.`},usage:`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`,preview:{code:`<div className="flex items-center gap-2 flex-wrap">
  <Badge variant="primary">Primary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`,component:f(d.createElement(i,{variant:`primary`},`Primary`),d.createElement(i,{variant:`success`},`Success`),d.createElement(i,{variant:`warning`},`Warning`),d.createElement(i,{variant:`info`},`Info`),d.createElement(i,{variant:`destructive`},`Destructive`))},examples:[{name:`Sizes`,description:`Four sizes: xs (16 px), sm (20 px), md (24 px), lg (28 px).`,code:`<div className="flex items-center gap-2 flex-wrap">
  <Badge size="xs" variant="primary">XSmall</Badge>
  <Badge size="sm" variant="primary">Small</Badge>
  <Badge size="md" variant="primary">Medium</Badge>
  <Badge size="lg" variant="primary">Large</Badge>
</div>`,preview:f(d.createElement(i,{size:`xs`,variant:`primary`},`XSmall`),d.createElement(i,{size:`sm`,variant:`primary`},`Small`),d.createElement(i,{size:`md`,variant:`primary`},`Medium`),d.createElement(i,{size:`lg`,variant:`primary`},`Large`))},{name:`With Indicator`,description:`Pair the Indicator component with a Badge for color-matched status dots.`,code:`import { Indicator } from "@/components/ui/indicator"

<div className="flex items-center gap-2 flex-wrap">
  <Badge variant="primary"><Indicator tone="primary" variant="filled" size="xs" />Primary</Badge>
  <Badge variant="success"><Indicator tone="success" variant="filled" size="xs" />Success</Badge>
  <Badge variant="warning"><Indicator tone="warning" variant="filled" size="xs" />Warning</Badge>
  <Badge variant="info"><Indicator tone="info" variant="filled" size="xs" />Info</Badge>
  <Badge variant="destructive"><Indicator tone="destructive" variant="filled" size="xs" />Destructive</Badge>
</div>`,preview:f(d.createElement(i,{variant:`primary`},d.createElement(l,{tone:`primary`,variant:`filled`,size:`xs`}),`Primary`),d.createElement(i,{variant:`success`},d.createElement(l,{tone:`success`,variant:`filled`,size:`xs`}),`Success`),d.createElement(i,{variant:`warning`},d.createElement(l,{tone:`warning`,variant:`filled`,size:`xs`}),`Warning`),d.createElement(i,{variant:`info`},d.createElement(l,{tone:`info`,variant:`filled`,size:`xs`}),`Info`),d.createElement(i,{variant:`destructive`},d.createElement(l,{tone:`destructive`,variant:`filled`,size:`xs`}),`Destructive`))},{name:`With Icon`,description:`Use data-icon="inline-start" to render the icon on the left and data-icon="inline-end" to render the icon on the right. Padding on the icon side is reduced automatically.`,code:`import { CheckCircle2, AlertTriangle, Info, XCircle, Star, Zap } from "lucide-react"

{/* Icon on the left — inline-start */}
<div className="flex items-center gap-2 flex-wrap">
  <Badge variant="success">
    <CheckCircle2 data-icon="inline-start" />
    Approved
  </Badge>
  <Badge variant="warning">
    <AlertTriangle data-icon="inline-start" />
    Pending
  </Badge>
  <Badge variant="info">
    <Info data-icon="inline-start" />
    Notice
  </Badge>
  <Badge variant="destructive">
    <XCircle data-icon="inline-start" />
    Failed
  </Badge>
</div>

{/* Icon on the right — inline-end */}
<div className="flex items-center gap-2 flex-wrap">
  <Badge variant="primary">
    Featured
    <Star data-icon="inline-end" />
  </Badge>
  <Badge variant="violet">
    Pro
    <Zap data-icon="inline-end" />
  </Badge>
  <Badge variant="success">
    Verified
    <CheckCircle2 data-icon="inline-end" />
  </Badge>
  <Badge variant="info">
    Info
    <Info data-icon="inline-end" />
  </Badge>
</div>`,preview:d.createElement(`div`,{className:`flex flex-col gap-3`},p(`inline-start`,f(d.createElement(i,{variant:`success`},d.createElement(s,{"data-icon":`inline-start`}),`Approved`),d.createElement(i,{variant:`warning`},d.createElement(r,{"data-icon":`inline-start`}),`Pending`),d.createElement(i,{variant:`info`},d.createElement(c,{"data-icon":`inline-start`}),`Notice`),d.createElement(i,{variant:`destructive`},d.createElement(u,{"data-icon":`inline-start`}),`Failed`))),p(`inline-end`,f(d.createElement(i,{variant:`primary`},`Featured`,d.createElement(o,{"data-icon":`inline-end`})),d.createElement(i,{variant:`violet`},`Pro`,d.createElement(a,{"data-icon":`inline-end`})),d.createElement(i,{variant:`success`},`Verified`,d.createElement(s,{"data-icon":`inline-end`})),d.createElement(i,{variant:`info`},`Info`,d.createElement(c,{"data-icon":`inline-end`})))))},{name:`Solid`,description:`Add the solid prop to the five semantic variants for a fully filled background.`,code:`import { Indicator } from "@/components/ui/indicator"

<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2 flex-wrap">
    <Badge variant="primary" solid>Primary</Badge>
    <Badge variant="success" solid>Success</Badge>
    <Badge variant="warning" solid>Warning</Badge>
    <Badge variant="info" solid>Info</Badge>
    <Badge variant="destructive" solid>Destructive</Badge>
  </div>
  <div className="flex items-center gap-2 flex-wrap">
    <Badge variant="primary" solid><Indicator tone="primary" variant="filled" size="xs" />Primary</Badge>
    <Badge variant="success" solid><Indicator tone="success" variant="filled" size="xs" />Success</Badge>
    <Badge variant="warning" solid><Indicator tone="warning" variant="filled" size="xs" />Warning</Badge>
    <Badge variant="info" solid><Indicator tone="info" variant="filled" size="xs" />Info</Badge>
    <Badge variant="destructive" solid><Indicator tone="destructive" variant="filled" size="xs" />Destructive</Badge>
  </div>
</div>`,preview:d.createElement(`div`,{className:`flex flex-col gap-3`},p(`Solid`,f(d.createElement(i,{variant:`primary`,solid:!0},`Primary`),d.createElement(i,{variant:`success`,solid:!0},`Success`),d.createElement(i,{variant:`warning`,solid:!0},`Warning`),d.createElement(i,{variant:`info`,solid:!0},`Info`),d.createElement(i,{variant:`destructive`,solid:!0},`Destructive`))),p(`Solid + Indicator`,f(d.createElement(i,{variant:`primary`,solid:!0},d.createElement(l,{tone:`primary`,variant:`filled`,size:`xs`}),`Primary`),d.createElement(i,{variant:`success`,solid:!0},d.createElement(l,{tone:`success`,variant:`filled`,size:`xs`}),`Success`),d.createElement(i,{variant:`warning`,solid:!0},d.createElement(l,{tone:`warning`,variant:`filled`,size:`xs`}),`Warning`),d.createElement(i,{variant:`info`,solid:!0},d.createElement(l,{tone:`info`,variant:`filled`,size:`xs`}),`Info`),d.createElement(i,{variant:`destructive`,solid:!0},d.createElement(l,{tone:`destructive`,variant:`filled`,size:`xs`}),`Destructive`))))},{name:`Counter`,description:`Use the counter prop to render a pill-shaped numeric indicator. It stays square for single digits and grows for multi-digit numbers with tabular-nums for consistent widths.`,code:`<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2 flex-wrap">
    <Badge counter size="xs" variant="neutral">1</Badge>
    <Badge counter size="sm" variant="neutral">3</Badge>
    <Badge counter size="md" variant="neutral">7</Badge>
    <Badge counter size="lg" variant="neutral">9</Badge>
  </div>
  <div className="flex items-center gap-2 flex-wrap">
    <Badge counter size="xs" variant="primary">12</Badge>
    <Badge counter size="sm" variant="success">24</Badge>
    <Badge counter size="md" variant="info">99</Badge>
    <Badge counter size="lg" variant="destructive">128</Badge>
  </div>
</div>`,preview:d.createElement(`div`,{className:`flex flex-col gap-3`},p(`Single digit`,f(d.createElement(i,{counter:!0,size:`xs`,variant:`neutral`},`1`),d.createElement(i,{counter:!0,size:`sm`,variant:`neutral`},`3`),d.createElement(i,{counter:!0,size:`md`,variant:`neutral`},`7`),d.createElement(i,{counter:!0,size:`lg`,variant:`neutral`},`9`))),p(`Multi digit`,f(d.createElement(i,{counter:!0,size:`xs`,variant:`primary`},`12`),d.createElement(i,{counter:!0,size:`sm`,variant:`success`},`24`),d.createElement(i,{counter:!0,size:`md`,variant:`info`},`99`),d.createElement(i,{counter:!0,size:`lg`,variant:`destructive`},`128`))))},{name:`With Close Button`,description:`Pass an onClose handler to render a dismiss button inside the badge.`,code:`<div className="flex items-center gap-2 flex-wrap">
  <Badge variant="primary" onClose={() => {}}>Primary</Badge>
  <Badge variant="success" onClose={() => {}}>Success</Badge>
  <Badge variant="warning" onClose={() => {}}>Warning</Badge>
  <Badge variant="info" onClose={() => {}}>Info</Badge>
  <Badge variant="destructive" onClose={() => {}}>Destructive</Badge>
</div>`,preview:f(d.createElement(i,{variant:`primary`,onClose:()=>{}},`Primary`),d.createElement(i,{variant:`success`,onClose:()=>{}},`Success`),d.createElement(i,{variant:`warning`,onClose:()=>{}},`Warning`),d.createElement(i,{variant:`info`,onClose:()=>{}},`Info`),d.createElement(i,{variant:`destructive`,onClose:()=>{}},`Destructive`))},{name:`Combined`,description:`Combine Indicator, icon, and close across sizes.`,code:`import { Indicator } from "@/components/ui/indicator"

<div className="flex items-center gap-3 flex-wrap">
  <Badge size="xs" variant="success" onClose={() => {}}><Indicator tone="success" variant="filled" size="xs" />XSmall</Badge>
  <Badge size="sm" variant="info" onClose={() => {}}><Indicator tone="info" variant="filled" size="xs" />Small</Badge>
  <Badge size="md" variant="warning" onClose={() => {}}><Indicator tone="warning" variant="filled" size="xs" />Medium</Badge>
  <Badge size="lg" variant="destructive" onClose={() => {}}><Indicator tone="destructive" variant="filled" size="xs" />Large</Badge>
</div>`,preview:f(d.createElement(i,{size:`xs`,variant:`success`,onClose:()=>{}},d.createElement(l,{tone:`success`,variant:`filled`,size:`xs`}),`XSmall`),d.createElement(i,{size:`sm`,variant:`info`,onClose:()=>{}},d.createElement(l,{tone:`info`,variant:`filled`,size:`xs`}),`Small`),d.createElement(i,{size:`md`,variant:`warning`,onClose:()=>{}},d.createElement(l,{tone:`warning`,variant:`filled`,size:`xs`}),`Medium`),d.createElement(i,{size:`lg`,variant:`destructive`,onClose:()=>{}},d.createElement(l,{tone:`destructive`,variant:`filled`,size:`xs`}),`Large`))},{name:`Full Palette`,description:`All variants displayed together.`,code:`<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2 flex-wrap">
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="destructive">Destructive</Badge>
  </div>
  <div className="flex items-center gap-2 flex-wrap">
    <Badge variant="neutral">Neutral</Badge>
    <Badge variant="red">Red</Badge>
    <Badge variant="orange">Orange</Badge>
    <Badge variant="amber">Amber</Badge>
    <Badge variant="yellow">Yellow</Badge>
    <Badge variant="lime">Lime</Badge>
    <Badge variant="green">Green</Badge>
    <Badge variant="teal">Teal</Badge>
    <Badge variant="cyan">Cyan</Badge>
    <Badge variant="sky">Sky</Badge>
    <Badge variant="blue">Blue</Badge>
    <Badge variant="indigo">Indigo</Badge>
    <Badge variant="violet">Violet</Badge>
    <Badge variant="purple">Purple</Badge>
    <Badge variant="fuchsia">Fuchsia</Badge>
    <Badge variant="pink">Pink</Badge>
    <Badge variant="rose">Rose</Badge>
  </div>
</div>`,preview:d.createElement(`div`,{className:`flex flex-col gap-3`},p(`Semantic`,f(d.createElement(i,{variant:`primary`},`Primary`),d.createElement(i,{variant:`success`},`Success`),d.createElement(i,{variant:`warning`},`Warning`),d.createElement(i,{variant:`info`},`Info`),d.createElement(i,{variant:`destructive`},`Destructive`))),p(`Gray`,f(d.createElement(i,{variant:`neutral`},`Neutral`))),p(`Warm`,f(d.createElement(i,{variant:`red`},`Red`),d.createElement(i,{variant:`orange`},`Orange`),d.createElement(i,{variant:`amber`},`Amber`),d.createElement(i,{variant:`yellow`},`Yellow`),d.createElement(i,{variant:`lime`},`Lime`))),p(`Green`,f(d.createElement(i,{variant:`green`},`Green`),d.createElement(i,{variant:`teal`},`Teal`))),p(`Blue`,f(d.createElement(i,{variant:`cyan`},`Cyan`),d.createElement(i,{variant:`sky`},`Sky`),d.createElement(i,{variant:`blue`},`Blue`),d.createElement(i,{variant:`indigo`},`Indigo`))),p(`Purple & Pink`,f(d.createElement(i,{variant:`violet`},`Violet`),d.createElement(i,{variant:`purple`},`Purple`),d.createElement(i,{variant:`fuchsia`},`Fuchsia`),d.createElement(i,{variant:`pink`},`Pink`),d.createElement(i,{variant:`rose`},`Rose`))))}],props:[{name:`variant`,type:`"primary" | "success" | "warning" | "info" | "destructive" | "neutral" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"`,description:`Color variant of the badge.`,default:`"primary"`},{name:`size`,type:`"xs" | "sm" | "md" | "lg"`,description:`Height of the badge: xs=16 px, sm=20 px, md=24 px, lg=28 px.`,default:`"md"`},{name:`solid`,type:`boolean`,description:`When true, renders a fully filled (solid) background instead of the default tinted outline style.`,default:`false`},{name:`dot`,type:`boolean`,description:`When true, renders a small filled dot before the label.`,default:`false`},{name:`counter`,type:`boolean`,description:`When true, renders a pill-shaped counter with tabular-nums. Square at single digit, grows for multi-digit numbers.`,default:`false`},{name:`onClose`,type:`React.MouseEventHandler<HTMLButtonElement>`,description:`When provided, renders a close (×) button inside the badge.`,default:`undefined`}]};export{m as badgeDoc};