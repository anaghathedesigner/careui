import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./file-BPO4c3K7.js";import{t as i}from"./button-DTwq4-az.js";import{t as a}from"./input-BRwr7HbH.js";import{n as o,r as s,t as c}from"./collapsible-Cw_U2Ocs.js";import{Cr as l,Er as u,Sa as d,Sr as f,Tr as p,ba as m,br as h,ht as g,mt as _,ua as v,ut as y,va as b}from"./index-Ck2hFZuL.js";var x=n(`maximize`,[[`path`,{d:`M8 3H5a2 2 0 0 0-2 2v3`,key:`1dcmit`}],[`path`,{d:`M21 8V5a2 2 0 0 0-2-2h-3`,key:`1e4gt3`}],[`path`,{d:`M3 16v3a2 2 0 0 0 2 2h3`,key:`wsl5sc`}],[`path`,{d:`M16 21h3a2 2 0 0 0 2-2v-3`,key:`18trek`}]]),S=n(`minimize`,[[`path`,{d:`M8 3v3a2 2 0 0 1-2 2H3`,key:`hohbtr`}],[`path`,{d:`M21 8h-3a2 2 0 0 1-2-2V3`,key:`5jw1f3`}],[`path`,{d:`M3 16h3a2 2 0 0 1 2 2v3`,key:`198tvr`}],[`path`,{d:`M16 21v-3a2 2 0 0 1 2-2h3`,key:`ph8mxp`}]]),C=t(e(),1),w=()=>{let[e,t]=C.useState(!1);return C.createElement(c,{open:e,onOpenChange:t,className:`flex w-[350px] flex-col gap-2`},C.createElement(`div`,{className:`flex items-center justify-between gap-4 px-4`},C.createElement(`h4`,{className:`text-sm font-semibold`},`Order #4189`),C.createElement(s,{asChild:!0},C.createElement(i,{variant:`ghost`,size:`icon`,className:`size-8`},C.createElement(b,{}),C.createElement(`span`,{className:`sr-only`},`Toggle details`)))),C.createElement(`div`,{className:`flex items-center justify-between rounded-md border px-4 py-2 text-sm`},C.createElement(`span`,{className:`text-muted-foreground`},`Status`),C.createElement(`span`,{className:`font-medium`},`Shipped`)),C.createElement(o,{className:`flex flex-col gap-2`},C.createElement(`div`,{className:`rounded-md border px-4 py-2 text-sm`},C.createElement(`p`,{className:`font-medium`},`Shipping address`),C.createElement(`p`,{className:`text-muted-foreground`},`100 Market St, San Francisco`)),C.createElement(`div`,{className:`rounded-md border px-4 py-2 text-sm`},C.createElement(`p`,{className:`font-medium`},`Items`),C.createElement(`p`,{className:`text-muted-foreground`},`2x Studio Headphones`))))},T=()=>C.createElement(h,{className:`mx-auto w-full max-w-sm`},C.createElement(f,{},C.createElement(c,{className:`rounded-md data-open:bg-muted`},C.createElement(s,{asChild:!0},C.createElement(i,{variant:`ghost`,className:`group w-full`},`Product details`,C.createElement(d,{className:`ml-auto group-data-panel-open:rotate-180 transition-transform`}))),C.createElement(o,{className:`flex flex-col items-start gap-2 p-2.5 pt-0 text-sm`},C.createElement(`div`,{},`This panel can be expanded or collapsed to reveal additional content.`),C.createElement(i,{size:`xs`},`Learn More`))))),E=()=>{let[e,t]=C.useState(!1);return C.createElement(h,{className:`mx-auto w-full max-w-xs`,size:`sm`},C.createElement(p,{},C.createElement(u,{},`Radius`),C.createElement(l,{},`Set the corner radius of the element.`)),C.createElement(f,{},C.createElement(c,{open:e,onOpenChange:t,className:`flex items-start gap-2`},C.createElement(_,{className:`grid w-full grid-cols-2 gap-2`},C.createElement(y,{},C.createElement(g,{className:`sr-only`},`Radius X`),C.createElement(a,{placeholder:`0`,defaultValue:`0`})),C.createElement(y,{},C.createElement(g,{className:`sr-only`},`Radius Y`),C.createElement(a,{placeholder:`0`,defaultValue:`0`})),C.createElement(o,{className:`col-span-full grid grid-cols-2 gap-2`},C.createElement(y,{},C.createElement(g,{className:`sr-only`},`Radius X`),C.createElement(a,{placeholder:`0`,defaultValue:`0`})),C.createElement(y,{},C.createElement(g,{className:`sr-only`},`Radius Y`),C.createElement(a,{placeholder:`0`,defaultValue:`0`})))),C.createElement(s,{asChild:!0},C.createElement(i,{variant:`outline`,size:`icon`},e?C.createElement(S,{}):C.createElement(x,{}))))))},D=e=>`items`in e?C.createElement(c,{key:e.name},C.createElement(s,{asChild:!0},C.createElement(i,{variant:`ghost`,size:`sm`,className:`group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground`},C.createElement(m,{className:`transition-transform group-data-panel-open:rotate-90`}),C.createElement(v,{}),e.name)),C.createElement(o,{className:`mt-1 ml-5`},C.createElement(`div`,{className:`flex flex-col gap-1`},...e.items.map(e=>D(e))))):C.createElement(i,{key:e.name,variant:`link`,size:`sm`,className:`w-full justify-start gap-2 text-foreground`},C.createElement(r,{}),C.createElement(`span`,{},e.name)),O={id:`collapsible`,name:`Collapsible`,description:`An interactive component which expands/collapses a panel.`,installation:{cli:`npx shadcn@latest add collapsible`,manual:`Install @base-ui/react, then copy and paste the collapsible component source code into your project.`},usage:`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>`,preview:{code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">Order #4189</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
            <span className="sr-only">Toggle details</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Shipped</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Shipping address</p>
          <p className="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Items</p>
          <p className="text-muted-foreground">2x Studio Headphones</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,component:C.createElement(w)},examples:[{name:`Basic`,description:`A simple collapsible with a toggle trigger.`,code:`import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="group w-full">
              Product details
              <ChevronDown className="ml-auto group-data-panel-open:rotate-180 transition-transform" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="xs">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}`,preview:C.createElement(T)},{name:`Settings Panel`,description:`Use a trigger button to reveal additional settings.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { MaximizeIcon, MinimizeIcon } from "lucide-react"

export function CollapsibleSettings() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel className="sr-only">Radius X</FieldLabel>
              <Input placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel className="sr-only">Radius Y</FieldLabel>
              <Input placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel className="sr-only">Radius X</FieldLabel>
                <Input placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel className="sr-only">Radius Y</FieldLabel>
                <Input placeholder="0" defaultValue={0} />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon">
              {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}`,preview:C.createElement(E)},{name:`File Tree`,description:`Use nested collapsibles to build a file tree.`,code:`import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight, FileIcon, FolderIcon } from "lucide-react"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

export function CollapsibleFileTree() {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
          ],
        },
        { name: "login-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "api.ts" }],
    },
    { name: "app.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="transition-transform group-data-panel-open:rotate-90" />
              <FolderIcon />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2 text-foreground"
      >
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <Card className="mx-auto w-full max-w-[16rem]" size="sm">
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}`,preview:C.createElement(()=>C.createElement(h,{className:`mx-auto w-full max-w-[16rem]`,size:`sm`},C.createElement(f,{},C.createElement(`div`,{className:`flex flex-col gap-1`},...[{name:`components`,items:[{name:`ui`,items:[{name:`button.tsx`},{name:`card.tsx`},{name:`dialog.tsx`}]},{name:`login-form.tsx`}]},{name:`lib`,items:[{name:`utils.ts`},{name:`api.ts`}]},{name:`app.tsx`},{name:`globals.css`},{name:`package.json`}].map(e=>D(e))))))}]};export{O as collapsibleDoc};