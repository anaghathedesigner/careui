import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";var i=t(e(),1),a=n();function o({className:e,...t}){let n=`dotted-divider-${i.useId().replace(/:/g,``)}`;return(0,a.jsx)(`div`,{"data-slot":`dotted-divider`,className:r(`text-border-strong h-2 w-full`,e),...t,children:(0,a.jsxs)(`svg`,{width:`100%`,height:`100%`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`},children:[(0,a.jsx)(`defs`,{children:(0,a.jsxs)(`pattern`,{id:n,width:`8`,height:`8`,patternUnits:`userSpaceOnUse`,children:[(0,a.jsx)(`circle`,{cx:`0.5`,cy:`0.5`,r:`0.5`,fill:`currentColor`}),(0,a.jsx)(`circle`,{cx:`0.5`,cy:`7.5`,r:`0.5`,fill:`currentColor`}),(0,a.jsx)(`circle`,{cx:`4`,cy:`4`,r:`0.5`,fill:`currentColor`})]})}),(0,a.jsx)(`rect`,{width:`100%`,height:`100%`,fill:`url(#${n})`})]})})}function s(){return i.createElement(`div`,{className:`flex w-full max-w-sm flex-col gap-6 text-sm`},i.createElement(`div`,{className:`flex flex-col gap-1.5`},i.createElement(`div`,{className:`leading-none font-medium`},`Section Title`),i.createElement(`div`,{className:`text-muted-foreground`},`A brief description of this section.`)),i.createElement(o,{}),i.createElement(`div`,{className:`text-muted-foreground`},`Content continues below the decorative dotted divider.`))}function c(){return i.createElement(`div`,{className:`flex w-full max-w-sm flex-col gap-6 text-sm`},i.createElement(`div`,{className:`flex flex-col gap-1.5`},i.createElement(`div`,{className:`leading-none font-medium`},`Accent divider`),i.createElement(`div`,{className:`text-muted-foreground`},`Using a custom color class.`)),i.createElement(o,{className:`text-primary`}),i.createElement(`div`,{className:`text-muted-foreground`},`The dots inherit your custom text color.`))}var l={id:`dotted-divider`,name:`Dotted Divider`,description:`A decorative divider rendered as a staggered dot-matrix SVG pattern.`,installation:{cli:`npx shadcn@latest add https://careui.ohc.network/registry/care-ui/dotted-divider/dotted-divider.json`,manual:`Copy the dotted-divider component source code into your project.`},usage:`import { DottedDivider } from "@/components/ui/dotted-divider"

<DottedDivider />`,preview:{code:`import { DottedDivider } from "@/components/ui/dotted-divider"

export function DottedDividerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">Section Title</div>
        <div className="text-muted-foreground">
          A brief description of this section.
        </div>
      </div>
      <DottedDivider />
      <div className="text-muted-foreground">
        Content continues below the decorative dotted divider.
      </div>
    </div>
  )
}`,component:i.createElement(s)},examples:[{name:`Custom Color`,description:`Pass a Tailwind text-color class to tint the dots.`,code:`import { DottedDivider } from "@/components/ui/dotted-divider"

export function DottedDividerColored() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">Accent divider</div>
        <div className="text-muted-foreground">Using a custom color class.</div>
      </div>
      <DottedDivider className="text-primary" />
      <div className="text-muted-foreground">
        The dots inherit your custom text color.
      </div>
    </div>
  )
}`,preview:i.createElement(c)}],props:[{name:`className`,type:`string`,description:`Extra classes applied to the wrapper div. Use Tailwind text-color utilities to change dot color.`}]};export{l as dottedDividerDoc};