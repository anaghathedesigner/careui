import{i as e,l as t}from"./dist-DtVyZPdI.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./frame-D1cG9lxH.js";var c=t(e(),1),l={id:`frame`,name:`Frame`,description:`Displays related content in a structured frame with header, content, and footer.`,installation:{cli:`npx shadcn@latest add frame`,manual:`Copy and paste the frame component source code into your project.`},usage:`import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

<Frame>
  <FramePanel>
    <FrameHeader>
      <FrameTitle>Frame Title</FrameTitle>
      <FrameDescription>Frame Description</FrameDescription>
    </FrameHeader>
    <div className="p-5">Frame Content</div>
    <FrameFooter>Frame Footer</FrameFooter>
  </FramePanel>
</Frame>`,preview:{code:`import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameDemo() {
  return (
    <Frame className="w-full max-w-sm">
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">Section footer</p>
      </FrameFooter>
    </Frame>
  )
}`,component:c.createElement(s,{className:`w-full max-w-sm`},c.createElement(r,null,c.createElement(a,null,`Section header`),c.createElement(i,null,`Description for the section`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Section title`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)),c.createElement(o,null,c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section footer`)))},examples:[{name:`With Separated Panels`,description:`Frame with multiple panels separated by the frame's gap.`,code:`import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameSeparatedPanels() {
  return (
    <Frame className="w-full max-w-lg">
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  )
}`,preview:c.createElement(s,{className:`w-full max-w-lg`},c.createElement(r,null,c.createElement(a,null,`Section header`),c.createElement(i,null,`Description for the section`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Separated panel`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Separated panel`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)))},{name:`With Stacked Panels`,description:`Use the stacked prop to remove margins between panels and connect them with shared borders.`,code:`import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameStackedPanels() {
  return (
    <Frame className="w-full max-w-lg" stacked>
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  )
}`,preview:c.createElement(s,{stacked:!0,className:`w-full max-w-lg`},c.createElement(r,null,c.createElement(a,null,`Section header`),c.createElement(i,null,`Description for the section`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Stacked panel`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Stacked panel`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)))},{name:`With Dense Panels`,description:`Combine the dense prop with stacked to remove panel padding for a tighter layout.`,code:`import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameDensePanels() {
  return (
    <Frame className="w-full max-w-lg" stacked dense>
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Description for the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
      <FramePanel>
        <h2 className="text-sm font-semibold">Stacked panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  )
}`,preview:c.createElement(s,{stacked:!0,dense:!0,className:`w-full max-w-lg`},c.createElement(r,null,c.createElement(a,null,`Section header`),c.createElement(i,null,`Description for the section`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Stacked panel`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Stacked panel`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Section description`)))},{name:`Without Outer Border`,description:`Use the ghost variant to remove the outer frame border and background.`,code:`import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameGhost() {
  return (
    <Frame className="w-full max-w-lg" variant="ghost">
      <FrameHeader>
        <FrameTitle>No Outer Border</FrameTitle>
        <FrameDescription>
          This frame uses variant="ghost" to remove the outer border.
        </FrameDescription>
      </FrameHeader>
      <FramePanel>
        <p className="text-muted-foreground text-sm">
          The outer container of this frame has no border, only the background
          and panels are visible.
        </p>
      </FramePanel>
    </Frame>
  )
}`,preview:c.createElement(s,{variant:`ghost`,className:`w-full max-w-lg`},c.createElement(r,null,c.createElement(a,null,`No Outer Border`),c.createElement(i,null,`This frame uses variant="ghost" to remove the outer border.`)),c.createElement(n,null,c.createElement(`p`,{className:`text-muted-foreground text-sm`},`The outer container of this frame has no border, only the background and panels are visible.`)))},{name:`Custom Spacing`,description:`Use the spacing prop to control internal padding and the gap between panels.`,code:`import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameCustomSpacing() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-lg">
      <Frame spacing="sm">
        <FrameHeader>
          <FrameTitle>Small spacing</FrameTitle>
          <FrameDescription>Compact padding and gap</FrameDescription>
        </FrameHeader>
        <FramePanel>
          <p className="text-sm text-muted-foreground">
            Small spacing is ideal for high-density toolbars and property panels.
          </p>
        </FramePanel>
      </Frame>
      <Frame spacing="lg">
        <FrameHeader>
          <FrameTitle>Large spacing</FrameTitle>
          <FrameDescription>Generous padding and gap</FrameDescription>
        </FrameHeader>
        <FramePanel>
          <p className="text-sm text-muted-foreground">
            Large spacing works well for marketing pages and feature highlights.
          </p>
        </FramePanel>
      </Frame>
    </div>
  )
}`,preview:c.createElement(`div`,{className:`flex flex-col gap-6 w-full max-w-lg`},c.createElement(s,{spacing:`sm`},c.createElement(r,null,c.createElement(a,null,`Small spacing`),c.createElement(i,null,`Compact padding and gap`)),c.createElement(n,null,c.createElement(`p`,{className:`text-sm text-muted-foreground`},`Small spacing is ideal for high-density toolbars and property panels.`))),c.createElement(s,{spacing:`lg`},c.createElement(r,null,c.createElement(a,null,`Large spacing`),c.createElement(i,null,`Generous padding and gap`)),c.createElement(n,null,c.createElement(`p`,{className:`text-sm text-muted-foreground`},`Large spacing works well for marketing pages and feature highlights.`))))},{name:`Custom Radius`,description:`Customize the border radius of the frame and panels using the --frame-radius CSS variable.`,code:`import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"

export function FrameCustomRadius() {
  return (
    <Frame className="w-full max-w-lg [--frame-radius:var(--radius-md)]">
      <FrameHeader>
        <FrameTitle>Media Library</FrameTitle>
        <FrameDescription>Manage your assets and downloads</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="text-sm font-semibold">Storage Capacity</h2>
        <p className="text-muted-foreground text-sm">
          Medium radius is a versatile middle ground between sharp and rounded
          aesthetics.
        </p>
      </FramePanel>
    </Frame>
  )
}`,preview:c.createElement(s,{className:`w-full max-w-lg [--frame-radius:var(--radius-md)]`},c.createElement(r,null,c.createElement(a,null,`Media Library`),c.createElement(i,null,`Manage your assets and downloads`)),c.createElement(n,null,c.createElement(`h2`,{className:`text-sm font-semibold`},`Storage Capacity`),c.createElement(`p`,{className:`text-muted-foreground text-sm`},`Medium radius is a versatile middle ground between sharp and rounded aesthetics.`)))}]};export{l as frameDoc};