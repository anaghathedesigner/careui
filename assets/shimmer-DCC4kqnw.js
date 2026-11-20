import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{n as r}from"./spinner-CNEvLfBE.js";import{n as i,r as a,t as o}from"./marker-Duns2Jli.js";var s=t(e(),1),c=(e,...t)=>s.createElement(`div`,{className:e},...t);function l(){let[e,t]=s.useState(0);return c(`flex flex-col items-center gap-4`,s.createElement(`p`,{key:e,className:`shimmer shimmer-duration-1100 shimmer-once text-sm text-muted-foreground`},`Generating response…`),s.createElement(n,{variant:`outline`,size:`sm`,onClick:()=>t(e=>e+1)},`Replay`))}var u={id:`shimmer`,name:`Shimmer`,description:`Utilities for adding a shimmer effect to text elements.`,installation:{cli:`npx shadcn@latest add shimmer`,manual:`Copy the shimmer utility block (declared in src/index.css) into your project's global stylesheet.`},usage:`<p className="shimmer text-muted-foreground">Generating response&hellip;</p>`,preview:{code:`import { } from "react"

export function ShimmerDemo() {
  return (
    <p className="shimmer text-sm text-muted-foreground">
      Generating response&hellip;
    </p>
  )
}`,component:s.createElement(`p`,{className:`shimmer text-sm text-muted-foreground`},`Generating response…`)},examples:[{name:`With Marker`,description:`The shimmer composes with any component that renders text. A common pattern is a Marker showing a live status while the assistant is working.`,code:`import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export function ShimmerMarker() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">Thinking...</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent className="shimmer">Reading 4 files</MarkerContent>
      </Marker>
    </div>
  )
}`,preview:c(`flex w-full max-w-sm flex-col gap-4`,s.createElement(o,{role:`status`},s.createElement(a,null,s.createElement(r)),s.createElement(i,{className:`shimmer`},`Thinking...`)),s.createElement(o,{variant:`separator`,role:`status`},s.createElement(i,{className:`shimmer`},`Reading 4 files`)))},{name:`Color`,description:`Use shimmer-color-<color> to set the highlight color explicitly. It accepts theme colors with an optional opacity modifier, or any arbitrary color value.`,code:`<p className="shimmer shimmer-color-blue-500/60">Generating response&hellip;</p>
<p className="shimmer shimmer-color-[#378ADD]">Generating response&hellip;</p>`,preview:c(`flex flex-col items-center gap-2 text-sm text-muted-foreground`,s.createElement(`p`,{className:`shimmer shimmer-color-blue-500/60`},`Generating response…`),s.createElement(`p`,{className:`shimmer shimmer-color-[#378ADD]`},`Generating response…`))},{name:`Duration`,description:`Use shimmer-duration-<number> to set the duration of one sweep in milliseconds. The default is 2000, i.e. 2s.`,code:`<p className="shimmer shimmer-duration-1000">Generating response&hellip;</p>`,preview:s.createElement(`div`,{className:`mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-muted-foreground sm:grid-cols-2`},c(`flex flex-col gap-3`,s.createElement(`p`,{className:`shimmer`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer`)),c(`flex flex-col gap-3`,s.createElement(`p`,{className:`shimmer shimmer-duration-1000`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer-duration-1000`)))},{name:`Spread`,description:`Use shimmer-spread-<number> to set the width of the highlight band using the spacing scale. The default is calc(3ch + 40px): a fixed base plus a 3ch term that scales with the font size. For one-off values, use an arbitrary length or percentage: shimmer-spread-[5rem].`,code:`<p className="shimmer shimmer-spread-24">Generating response&hellip;</p>

/* Arbitrary value */
<p className="shimmer shimmer-spread-[5rem]">Generating response&hellip;</p>`,preview:s.createElement(`div`,{className:`mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-muted-foreground sm:grid-cols-2`},c(`flex flex-col gap-3`,s.createElement(`p`,{className:`shimmer shimmer-spread-4`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer-spread-4`)),c(`flex flex-col gap-3`,s.createElement(`p`,{className:`shimmer shimmer-spread-24`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer-spread-24`)))},{name:`Angle`,description:`Use shimmer-angle-<number> to set the tilt of the highlight band in degrees. The default is 20.`,code:`<p className="shimmer shimmer-angle-45">Generating response&hellip;</p>`,preview:s.createElement(`div`,{className:`mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-muted-foreground sm:grid-cols-2`},c(`flex flex-col gap-3`,s.createElement(`p`,{className:`shimmer`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer`)),c(`flex flex-col gap-3`,s.createElement(`p`,{className:`shimmer shimmer-angle-45`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer-angle-45`)))},{name:`Reverse`,description:`Use shimmer-reverse to sweep the highlight in the opposite direction. In RTL layouts the sweep already follows the reading direction — see RTL below.`,code:`<p className="shimmer shimmer-reverse">Generating response&hellip;</p>`,preview:s.createElement(`p`,{className:`shimmer shimmer-reverse text-sm text-muted-foreground`},`Generating response…`)},{name:`Play Once`,description:`Use shimmer-once to play a single sweep instead of looping, useful as a reveal when streaming completes. Pair it with shimmer-duration-<number> to control how long the sweep takes.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

export function ShimmerOnce() {
  const [key, setKey] = React.useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <p
        key={key}
        className="shimmer text-sm text-muted-foreground shimmer-duration-1100 shimmer-once"
      >
        Generating response&hellip;
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setKey((value) => value + 1)}
      >
        Replay
      </Button>
    </div>
  )
}`,preview:s.createElement(l,{})},{name:`Disabling the Shimmer`,description:`Use shimmer-none to turn the effect off and render the text normally. It works in any class order, so the typical use is responsive or stateful, e.g. shimmer md:shimmer-none.`,code:`<p className="shimmer md:shimmer-none">Generating response&hellip;</p>`,preview:c(`flex flex-col items-center gap-3 text-sm text-muted-foreground`,s.createElement(`p`,{className:`shimmer shimmer-none`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`shimmer-none`))},{name:`Fallback`,description:`The shimmer is built on modern color features — relative color syntax and color-mix() — available in all current browsers. In older browsers without support, the highlight gradient is dropped and the text can render transparent. If you target older browsers, apply shimmer conditionally with a supports-* variant.`,code:`<p className="supports-[color:oklch(from_white_l_c_h)]:shimmer">
  Generating response&hellip;
</p>`},{name:`Reduced Motion`,description:`When the user prefers reduced motion, the animation is disabled automatically and the text renders normally. There is nothing to configure.`},{name:`RTL`,description:`The sweep follows the reading direction, left to right in LTR and right to left in RTL, with no extra classes. Use shimmer-reverse to flip the direction manually.`,code:`<p dir="ltr" className="shimmer">Generating response&hellip;</p>
<p dir="rtl" className="shimmer">جارٍ إنشاء الرد&hellip;</p>`,preview:s.createElement(`div`,{className:`mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-muted-foreground sm:grid-cols-2`},c(`flex flex-col gap-3`,s.createElement(`p`,{dir:`ltr`,className:`shimmer`},`Generating response…`),s.createElement(`p`,{className:`font-mono text-xs`},`dir="ltr"`)),c(`flex flex-col gap-3`,s.createElement(`p`,{dir:`rtl`,className:`shimmer`},`جارٍ إنشاء الرد…`),s.createElement(`p`,{className:`font-mono text-xs`},`dir="rtl"`)))}]};export{u as shimmerDoc};