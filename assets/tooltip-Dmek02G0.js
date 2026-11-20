import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./save-gWT68yOB.js";import{t as r}from"./button-DTwq4-az.js";import{Fr as i,Ir as a,Nr as o,Pr as s,Zr as c}from"./index-Ck2hFZuL.js";var l=t(e(),1),u={id:`tooltip`,name:`Tooltip`,description:`A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.`,installation:{cli:`npx shadcn@latest add tooltip`,manual:`Install the following dependencies:

\`\`\`bash
npm install @base-ui/react
\`\`\`

Copy and paste the following code into your project:
components/ui/tooltip.tsx

Update the import paths to match your project setup.

Add the TooltipProvider to the root of your app.`},usage:`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`,preview:{code:`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}`,component:l.createElement(i,{},l.createElement(o,{},l.createElement(a,{asChild:!0},l.createElement(r,{variant:`outline`},`Hover`)),l.createElement(s,{},l.createElement(`p`,{},`Add to library`))))},examples:[{name:`Side`,description:`Use the side prop to change the position of the tooltip.`,code:`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-fit capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}`,preview:l.createElement(i,{},l.createElement(`div`,{className:`flex flex-wrap gap-2`},...[`left`,`top`,`bottom`,`right`].map(e=>l.createElement(o,{key:e},l.createElement(a,{asChild:!0},l.createElement(r,{variant:`outline`,className:`w-fit capitalize`},e)),l.createElement(s,{side:e},l.createElement(`p`,{},`Add to library`))))))},{name:`With Keyboard Shortcut`,description:`Show a tooltip with a keyboard shortcut hint.`,code:`import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SaveIcon } from "lucide-react"

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <SaveIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}`,preview:l.createElement(i,{},l.createElement(o,{},l.createElement(a,{asChild:!0},l.createElement(r,{variant:`outline`,size:`icon-sm`},l.createElement(n))),l.createElement(s,{},`Save Changes `,l.createElement(c,{},`S`))))},{name:`Disabled Button`,description:`Show a tooltip on a disabled button by wrapping it with a span.`,code:`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDisabled() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-block w-fit">
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This feature is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  )
}`,preview:l.createElement(i,{},l.createElement(o,{},l.createElement(a,{asChild:!0},l.createElement(`span`,{className:`inline-block w-fit`},l.createElement(r,{variant:`outline`,disabled:!0},`Disabled`))),l.createElement(s,{},l.createElement(`p`,{},`This feature is currently unavailable`))))}],props:[{name:`side`,type:`"top" | "right" | "bottom" | "left"`,description:`The preferred side of the trigger to render against.`,default:`"top"`},{name:`sideOffset`,type:`number`,description:`The distance in pixels from the trigger.`,default:`0`},{name:`align`,type:`"start" | "center" | "end"`,description:`The preferred alignment against the trigger.`,default:`"center"`},{name:`delay`,type:`number`,description:`The duration from when the mouse enters the trigger until the tooltip opens.`,default:`0`}]};export{u as tooltipDoc};