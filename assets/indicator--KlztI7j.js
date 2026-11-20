import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./indicator-CDgBFGzA.js";var r=t(e(),1),i=(...e)=>r.createElement(`div`,{className:`flex items-center gap-3 flex-wrap`},...e),a=(e,...t)=>r.createElement(`div`,{className:`flex items-center gap-3`},...t,r.createElement(`span`,{className:`text-sm text-muted-foreground`},e)),o=(e,...t)=>r.createElement(`div`,{className:`flex flex-col gap-3`},r.createElement(`p`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`},e),...t),s={id:`indicator`,name:`Indicator`,description:`A small filled or outlined dot for status, presence, selection, and notification indicators. Supports semantic and full Tailwind color palettes, two variants, and five sizes.`,installation:{cli:`npx shadcn@latest add indicator`,manual:`Copy and paste the indicator component source code into your project.`},usage:`import { Indicator } from "@/components/ui/indicator"

export function IndicatorDemo() {
  return (
    <div className="flex items-center gap-3">
      <Indicator tone="primary" />
      <Indicator tone="success" />
      <Indicator tone="warning" />
      <Indicator tone="info" />
      <Indicator tone="destructive" />
    </div>
  )
}`,preview:{code:`<div className="flex items-center gap-3">
  <Indicator tone="primary" />
  <Indicator tone="success" />
  <Indicator tone="warning" />
  <Indicator tone="info" />
  <Indicator tone="destructive" />
</div>`,component:i(r.createElement(n,{tone:`primary`}),r.createElement(n,{tone:`success`}),r.createElement(n,{tone:`warning`}),r.createElement(n,{tone:`info`}),r.createElement(n,{tone:`destructive`}))},examples:[{name:`Sizes`,description:`Five sizes: xs (6px), sm (8px), md (10px), lg (12px), xl (16px).`,code:`<div className="flex items-center gap-3">
  <Indicator size="xs" tone="primary" />
  <Indicator size="sm" tone="primary" />
  <Indicator size="md" tone="primary" />
  <Indicator size="lg" tone="primary" />
  <Indicator size="xl" tone="primary" />
</div>`,preview:i(r.createElement(n,{size:`xs`,tone:`primary`}),r.createElement(n,{size:`sm`,tone:`primary`}),r.createElement(n,{size:`md`,tone:`primary`}),r.createElement(n,{size:`lg`,tone:`primary`}),r.createElement(n,{size:`xl`,tone:`primary`}))},{name:`Filled`,description:`Solid filled variant for bolder status indicators.`,code:`<div className="flex items-center gap-3">
  <Indicator variant="filled" tone="primary" />
  <Indicator variant="filled" tone="success" />
  <Indicator variant="filled" tone="warning" />
  <Indicator variant="filled" tone="info" />
  <Indicator variant="filled" tone="destructive" />
  <Indicator variant="filled" tone="neutral" />
</div>`,preview:i(r.createElement(n,{variant:`filled`,tone:`primary`}),r.createElement(n,{variant:`filled`,tone:`success`}),r.createElement(n,{variant:`filled`,tone:`warning`}),r.createElement(n,{variant:`filled`,tone:`info`}),r.createElement(n,{variant:`filled`,tone:`destructive`}),r.createElement(n,{variant:`filled`,tone:`neutral`}))},{name:`Status List`,description:`Indicators paired with labels, common in dropdown lists.`,code:`<div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <Indicator tone="success" size="sm" />
    <span className="text-sm">Online</span>
  </div>
  <div className="flex items-center gap-2">
    <Indicator tone="warning" size="sm" />
    <span className="text-sm">Away</span>
  </div>
  <div className="flex items-center gap-2">
    <Indicator tone="neutral" size="sm" />
    <span className="text-sm">Offline</span>
  </div>
</div>`,preview:r.createElement(`div`,{className:`flex flex-col gap-2`},a(`Online`,r.createElement(n,{tone:`success`,size:`sm`})),a(`Away`,r.createElement(n,{tone:`warning`,size:`sm`})),a(`Offline`,r.createElement(n,{tone:`neutral`,size:`sm`})))},{name:`Full Palette`,description:`All tones displayed together.`,code:`<div className="flex flex-col gap-3">
  <div className="flex items-center gap-3 flex-wrap">
    <Indicator tone="primary" />
    <Indicator tone="success" />
    <Indicator tone="warning" />
    <Indicator tone="info" />
    <Indicator tone="destructive" />
  </div>
  <div className="flex items-center gap-3 flex-wrap">
    <Indicator tone="neutral" />
    <Indicator tone="red" />
    <Indicator tone="orange" />
    <Indicator tone="amber" />
    <Indicator tone="yellow" />
    <Indicator tone="lime" />
    <Indicator tone="green" />
    <Indicator tone="teal" />
    <Indicator tone="cyan" />
    <Indicator tone="sky" />
    <Indicator tone="blue" />
    <Indicator tone="indigo" />
    <Indicator tone="violet" />
    <Indicator tone="purple" />
    <Indicator tone="fuchsia" />
    <Indicator tone="pink" />
    <Indicator tone="rose" />
  </div>
</div>`,preview:r.createElement(`div`,{className:`flex flex-col gap-3`},o(`Semantic`,i(r.createElement(n,{tone:`primary`}),r.createElement(n,{tone:`success`}),r.createElement(n,{tone:`warning`}),r.createElement(n,{tone:`info`}),r.createElement(n,{tone:`destructive`}))),o(`Gray`,i(r.createElement(n,{tone:`neutral`}))),o(`Warm`,i(r.createElement(n,{tone:`red`}),r.createElement(n,{tone:`orange`}),r.createElement(n,{tone:`amber`}),r.createElement(n,{tone:`yellow`}),r.createElement(n,{tone:`lime`}))),o(`Green`,i(r.createElement(n,{tone:`green`}),r.createElement(n,{tone:`teal`}))),o(`Blue`,i(r.createElement(n,{tone:`cyan`}),r.createElement(n,{tone:`sky`}),r.createElement(n,{tone:`blue`}),r.createElement(n,{tone:`indigo`}))),o(`Purple & Pink`,i(r.createElement(n,{tone:`violet`}),r.createElement(n,{tone:`purple`}),r.createElement(n,{tone:`fuchsia`}),r.createElement(n,{tone:`pink`}),r.createElement(n,{tone:`rose`}))))}],props:[{name:`variant`,type:`"filled" | "outlined"`,default:`"outlined"`,description:`Visual style — outlined with tinted fill (default) or solid fill.`},{name:`tone`,type:`"primary" | "success" | "warning" | "info" | "destructive" | "neutral" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"`,default:`"primary"`,description:`Color tone — semantic or named Tailwind color.`},{name:`size`,type:`"xs" | "sm" | "md" | "lg" | "xl"`,default:`"md"`,description:`Dot diameter: xs=6px, sm=8px, md=10px, lg=12px, xl=16px.`},{name:`className`,type:`string`,default:`—`,description:`Additional Tailwind classes merged via cn().`}]};export{s as indicatorDoc};