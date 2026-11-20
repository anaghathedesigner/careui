import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./input-BRwr7HbH.js";import{a as i,bt as a,ht as o,i as s,mt as c,n as l,o as u,r as d,s as f,ut as p}from"./index-Ck2hFZuL.js";var m=t(e(),1),h={id:`popover`,name:`Popover`,description:`Displays rich content in a portal, triggered by a button.`,installation:{cli:`npx shadcn@latest add popover`,manual:`Install @base-ui/react and copy the popover component source code into your project.`},usage:`import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"`,preview:{code:`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,component:m.createElement(l,{},m.createElement(f,{asChild:!0},m.createElement(n,{variant:`outline`},`Open popover`)),m.createElement(d,{className:`w-80`},m.createElement(`div`,{className:`grid gap-4`},m.createElement(`div`,{className:`space-y-2`},m.createElement(`h4`,{className:`leading-none font-medium`},`Dimensions`),m.createElement(`p`,{className:`text-muted-foreground text-sm`},`Set the dimensions for the layer.`)),m.createElement(`div`,{className:`grid gap-2`},m.createElement(`div`,{className:`grid grid-cols-3 items-center gap-4`},m.createElement(a,{htmlFor:`width`},`Width`),m.createElement(r,{id:`width`,defaultValue:`100%`,className:`col-span-2 h-8`})),m.createElement(`div`,{className:`grid grid-cols-3 items-center gap-4`},m.createElement(a,{htmlFor:`maxWidth`},`Max. width`),m.createElement(r,{id:`maxWidth`,defaultValue:`300px`,className:`col-span-2 h-8`})),m.createElement(`div`,{className:`grid grid-cols-3 items-center gap-4`},m.createElement(a,{htmlFor:`height`},`Height`),m.createElement(r,{id:`height`,defaultValue:`25px`,className:`col-span-2 h-8`})),m.createElement(`div`,{className:`grid grid-cols-3 items-center gap-4`},m.createElement(a,{htmlFor:`maxHeight`},`Max. height`),m.createElement(r,{id:`maxHeight`,defaultValue:`none`,className:`col-span-2 h-8`}))))))},examples:[{name:`Basic`,description:`A simple popover with a header, title, and description.`,code:`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}`,preview:m.createElement(l,{},m.createElement(f,{asChild:!0},m.createElement(n,{variant:`outline`},`Open Popover`)),m.createElement(d,{align:`start`},m.createElement(i,{},m.createElement(u,{},`Dimensions`),m.createElement(s,{},`Set the dimensions for the layer.`))))},{name:`Align`,description:`Use the align prop on PopoverContent to control the horizontal alignment.`,code:`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverAlignments() {
  return (
    <div className="flex gap-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Start
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-40">
          Aligned to start
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Center
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-40">
          Aligned to center
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            End
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-40">
          Aligned to end
        </PopoverContent>
      </Popover>
    </div>
  )
}`,preview:m.createElement(`div`,{className:`flex gap-6`},m.createElement(l,{},m.createElement(f,{asChild:!0},m.createElement(n,{variant:`outline`,size:`sm`},`Start`)),m.createElement(d,{align:`start`,className:`w-40`},`Aligned to start`)),m.createElement(l,{},m.createElement(f,{asChild:!0},m.createElement(n,{variant:`outline`,size:`sm`},`Center`)),m.createElement(d,{align:`center`,className:`w-40`},`Aligned to center`)),m.createElement(l,{},m.createElement(f,{asChild:!0},m.createElement(n,{variant:`outline`,size:`sm`},`End`)),m.createElement(d,{align:`end`,className:`w-40`},`Aligned to end`)))},{name:`With Form`,description:`A popover with form fields inside.`,code:`import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverForm() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="width" className="w-1/2">
              Width
            </FieldLabel>
            <Input id="width" defaultValue="100%" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="height" className="w-1/2">
              Height
            </FieldLabel>
            <Input id="height" defaultValue="25px" />
          </Field>
        </FieldGroup>
        <div className="bg-popover sticky bottom-0 -mx-4 -mb-4 mt-2 flex items-center justify-end gap-2 border-t px-4 py-3">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,preview:m.createElement(function(){let[e,t]=m.useState(!1);return m.createElement(l,{open:e,onOpenChange:t},m.createElement(f,{asChild:!0},m.createElement(n,{variant:`outline`},`Open Popover`)),m.createElement(d,{className:`w-64`,align:`start`},m.createElement(i,{},m.createElement(u,{},`Dimensions`),m.createElement(s,{},`Set the dimensions for the layer.`)),m.createElement(c,{className:`gap-4`},m.createElement(p,{orientation:`vertical`},m.createElement(o,{htmlFor:`width`,className:`w-1/2`},`Width`),m.createElement(r,{id:`width`,defaultValue:`100%`})),m.createElement(p,{orientation:`vertical`},m.createElement(o,{htmlFor:`height`,className:`w-1/2`},`Height`),m.createElement(r,{id:`height`,defaultValue:`25px`}))),m.createElement(`div`,{className:`bg-popover sticky bottom-0 -mx-4 -mb-4 mt-2 flex items-center justify-end gap-4 border-t px-4 py-3`},m.createElement(n,{variant:`ghost`,size:`default`,onClick:()=>t(!1)},`Close`),m.createElement(n,{size:`default`,onClick:()=>t(!1)},`Save`))))},{})}]};export{h as popoverDoc};