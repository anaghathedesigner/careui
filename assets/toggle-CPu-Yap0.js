import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{n as r,t as i}from"./italic-GcDAC32e.js";import{ir as a}from"./index-Ck2hFZuL.js";var o=n(`bookmark`,[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,key:`oz39mx`}]]),s=t(e(),1),c={id:`toggle`,name:`Toggle`,description:`A two-state button that can be either on or off.`,installation:{cli:`npx shadcn@latest add toggle`,manual:`Copy and paste the toggle component source code into your project.`},usage:`import { Toggle } from "@/components/ui/toggle"

<Toggle>Toggle</Toggle>`,preview:{code:`import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}`,component:s.createElement(a,{"aria-label":`Toggle bookmark`,size:`sm`,variant:`outline`},s.createElement(o,{className:`group-data-[state=on]/toggle:fill-foreground`}),`Bookmark`)},examples:[{name:`Outline`,description:'Use `variant="outline"` for an outline style.',code:`import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </div>
  )
}`,preview:s.createElement(`div`,{className:`flex flex-wrap items-center gap-2`},s.createElement(a,{variant:`outline`,"aria-label":`Toggle italic`},s.createElement(i,{}),`Italic`),s.createElement(a,{variant:`outline`,"aria-label":`Toggle bold`},s.createElement(r,{}),`Bold`))},{name:`With Text`,description:`Combine an icon with a text label inside the toggle.`,code:`import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}`,preview:s.createElement(a,{"aria-label":`Toggle italic`},s.createElement(i,{}),`Italic`)},{name:`Size`,description:"Use the `size` prop to change the size of the toggle.",code:`import { Toggle } from "@/components/ui/toggle"

export function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle small" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle default" size="default">
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle large" size="lg">
        Large
      </Toggle>
    </div>
  )
}`,preview:s.createElement(`div`,{className:`flex flex-wrap items-center gap-2`},s.createElement(a,{variant:`outline`,"aria-label":`Toggle small`,size:`sm`},`Small`),s.createElement(a,{variant:`outline`,"aria-label":`Toggle default`,size:`default`},`Default`),s.createElement(a,{variant:`outline`,"aria-label":`Toggle large`,size:`lg`},`Large`))},{name:`Disabled`,description:"Use the `disabled` prop to disable the toggle.",code:`import { Toggle } from "@/components/ui/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle disabled" disabled>
        Disabled
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
        Disabled
      </Toggle>
    </div>
  )
}`,preview:s.createElement(`div`,{className:`flex flex-wrap items-center gap-2`},s.createElement(a,{"aria-label":`Toggle disabled`,disabled:!0},`Disabled`),s.createElement(a,{variant:`outline`,"aria-label":`Toggle disabled outline`,disabled:!0},`Disabled`))}],props:[{name:`variant`,type:`"default" | "outline"`,description:`Visual style of the toggle.`,default:`"default"`},{name:`size`,type:`"default" | "sm" | "lg"`,description:`Size of the toggle.`,default:`"default"`},{name:`pressed`,type:`boolean`,description:`The controlled pressed state of the toggle.`},{name:`defaultPressed`,type:`boolean`,description:`The pressed state of the toggle when it is initially rendered.`,default:`false`},{name:`onPressedChange`,type:`(pressed: boolean) => void`,description:`Event handler called when the pressed state changes.`},{name:`disabled`,type:`boolean`,description:`Disables user interaction.`,default:`false`}]};export{c as toggleDoc};