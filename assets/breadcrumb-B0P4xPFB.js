import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./button-DTwq4-az.js";import{C as i,D as a,Dn as o,E as s,En as c,On as l,Rn as u,S as d,Sa as f,T as p,w as m,wn as h,x as g}from"./index-Ck2hFZuL.js";var _=n(`dot`,[[`circle`,{cx:`12.1`,cy:`12.1`,r:`1`,key:`18d7e5`}]]),v=t(e(),1),y={id:`breadcrumb`,name:`Breadcrumb`,description:`Displays the path to the current resource using a hierarchy of links.`,installation:{cli:`npx shadcn@latest add breadcrumb`,manual:`Copy and paste the breadcrumb component source code into your project.`},usage:`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,preview:{code:`import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon-sm" variant="ghost" className="shadow-sm">
            <BreadcrumbEllipsis />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Themes</DropdownMenuItem>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,component:v.createElement(g,{},v.createElement(p,{},v.createElement(i,{},v.createElement(m,{href:`#`},`Home`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(h,{},v.createElement(u,{asChild:!0},v.createElement(r,{size:`icon-sm`,variant:`ghost`,className:`shadow-sm`},v.createElement(d,{}),v.createElement(`span`,{className:`sr-only`},`Toggle menu`))),v.createElement(c,{align:`start`},v.createElement(o,{},v.createElement(l,{},`Documentation`),v.createElement(l,{},`Themes`),v.createElement(l,{},`GitHub`))))),v.createElement(a,{}),v.createElement(i,{},v.createElement(m,{href:`#`},`Components`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(s,{},`Breadcrumb`))))},examples:[{name:`Basic`,description:`A basic breadcrumb with a home link and a components link.`,code:`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbBasic() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,preview:v.createElement(g,{},v.createElement(p,{},v.createElement(i,{},v.createElement(m,{href:`#`},`Home`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(m,{href:`#`},`Components`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(s,{},`Breadcrumb`))))},{name:`Custom separator`,description:`Use a custom component as children for <BreadcrumbSeparator /> to create a custom separator.`,code:`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DotIcon } from "lucide-react"

export function BreadcrumbSeparatorDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,preview:v.createElement(g,{},v.createElement(p,{},v.createElement(i,{},v.createElement(m,{href:`#`},`Home`)),v.createElement(a,{},v.createElement(_)),v.createElement(i,{},v.createElement(m,{href:`#`},`Components`)),v.createElement(a,{},v.createElement(_)),v.createElement(i,{},v.createElement(s,{},`Breadcrumb`))))},{name:`Dropdown`,description:`You can compose <BreadcrumbItem /> with a <DropdownMenu /> to create a dropdown in the breadcrumb.`,code:`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, DotIcon } from "lucide-react"

export function BreadcrumbDropdown() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 shadow-sm">
                Components
                <ChevronDownIcon className="size-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,preview:v.createElement(g,{},v.createElement(p,{},v.createElement(i,{},v.createElement(m,{href:`#`},`Home`)),v.createElement(a,{},v.createElement(_)),v.createElement(i,{},v.createElement(h,{},v.createElement(u,{asChild:!0},v.createElement(`button`,{className:`flex items-center gap-1 shadow-sm`},`Components`,v.createElement(f,{className:`size-3.5`}))),v.createElement(c,{align:`start`},v.createElement(o,{},v.createElement(l,{},`Documentation`),v.createElement(l,{},`Themes`),v.createElement(l,{},`GitHub`))))),v.createElement(a,{},v.createElement(_)),v.createElement(i,{},v.createElement(s,{},`Breadcrumb`))))},{name:`Collapsed`,description:`We provide a <BreadcrumbEllipsis /> component to show a collapsed state when the breadcrumb is too long.`,code:`import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbEllipsisDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,preview:v.createElement(g,{},v.createElement(p,{},v.createElement(i,{},v.createElement(m,{href:`#`},`Home`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(d,{})),v.createElement(a,{}),v.createElement(i,{},v.createElement(m,{href:`#`},`Components`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(s,{},`Breadcrumb`))))},{name:`Link component`,description:`To use a custom link component from your routing library, you can use the render prop on <BreadcrumbLink />.`,code:`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbLinkDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,preview:v.createElement(g,{},v.createElement(p,{},v.createElement(i,{},v.createElement(m,{href:`#`},`Home`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(m,{href:`#`},`Components`)),v.createElement(a,{}),v.createElement(i,{},v.createElement(s,{},`Breadcrumb`))))}]};export{y as breadcrumbDoc};