import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./inbox-CHZvzz7d.js";import{t as i}from"./button-DTwq4-az.js";import{Cn as a,Dn as o,Ea as s,En as c,Ji as l,On as u,Rn as d,Sa as f,ba as p,bn as m,vn as h,wn as g}from"./index-Ck2hFZuL.js";import{a as _,c as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./item-CMkwMgPZ.js";var T=n(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),E=n(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),D=t(e(),1),O=[{username:`shadcn`,avatar:`https://github.com/shadcn.png`,email:`shadcn@vercel.com`},{username:`maxleiter`,avatar:`https://github.com/maxleiter.png`,email:`maxleiter@vercel.com`},{username:`evilrabbit`,avatar:`https://github.com/evilrabbit.png`,email:`evilrabbit@vercel.com`}],k=[{title:`Midnight City Lights`,artist:`Neon Dreams`,album:`Electric Nights`,duration:`3:45`},{title:`Coffee Shop Conversations`,artist:`The Morning Brew`,album:`Urban Stories`,duration:`4:05`},{title:`Digital Rain`,artist:`Cyber Symphony`,album:`Binary Beats`,duration:`3:30`}],A=[{name:`v0-1.5-sm`,description:`Everyday tasks and UI generation.`,image:`https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop`},{name:`v0-1.5-lg`,description:`Advanced thinking or reasoning.`,image:`https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop`},{name:`v0-2.0-mini`,description:`Open Source model for everyone.`,image:`https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop`}],j={id:`item`,name:`Item`,description:`A versatile component for displaying content with media, title, description, and actions.`,installation:{cli:`npx shadcn@latest add item`,manual:`Copy and paste the item component source code into your project.`},usage:`import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

<Item>
  <ItemMedia variant="icon">
    <Icon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Title</ItemTitle>
    <ItemDescription>Description</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button>Action</Button>
  </ItemActions>
</Item>`,preview:{code:`import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}`,component:D.createElement(`div`,{className:`flex w-full max-w-md flex-col gap-6`},D.createElement(w,{variant:`outline`},D.createElement(S,{},D.createElement(v,{},`Basic Item`),D.createElement(y,{},`A simple item with title and description.`)),D.createElement(b,{},D.createElement(i,{variant:`outline`,size:`sm`},`Action`))),D.createElement(w,{variant:`outline`,size:`sm`,asChild:!0},D.createElement(`a`,{href:`#`},D.createElement(C,{},D.createElement(s,{className:`size-5`})),D.createElement(S,{},D.createElement(v,{},`Your profile has been verified.`)),D.createElement(b,{},D.createElement(p,{className:`size-4`})))))},examples:[{name:`Variant`,description:`Use the variant prop to change the visual style of the item.`,code:`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { InboxIcon } from "lucide-react"

export function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>
            Transparent background with no border.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with a visible border.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Muted background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-md flex-col gap-6`},D.createElement(w,{},D.createElement(C,{variant:`icon`},D.createElement(r)),D.createElement(S,{},D.createElement(v,{},`Default Variant`),D.createElement(y,{},`Transparent background with no border.`))),D.createElement(w,{variant:`outline`},D.createElement(C,{variant:`icon`},D.createElement(r)),D.createElement(S,{},D.createElement(v,{},`Outline Variant`),D.createElement(y,{},`Outlined style with a visible border.`))),D.createElement(w,{variant:`muted`},D.createElement(C,{variant:`icon`},D.createElement(r)),D.createElement(S,{},D.createElement(v,{},`Muted Variant`),D.createElement(y,{},`Muted background for secondary content.`))))},{name:`Size`,description:`Use the size prop to change the size of the item. Available sizes are "default", "sm", and "xs".`,code:`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { InboxIcon } from "lucide-react"

export function ItemSizeDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>
            The standard size for most use cases.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>A compact size for dense layouts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Extra Small Size</ItemTitle>
          <ItemDescription>The most compact size available.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-md flex-col gap-6`},D.createElement(w,{variant:`outline`},D.createElement(C,{variant:`icon`},D.createElement(r)),D.createElement(S,{},D.createElement(v,{},`Default Size`),D.createElement(y,{},`The standard size for most use cases.`))),D.createElement(w,{variant:`outline`,size:`sm`},D.createElement(C,{variant:`icon`},D.createElement(r)),D.createElement(S,{},D.createElement(v,{},`Small Size`),D.createElement(y,{},`A compact size for dense layouts.`))),D.createElement(w,{variant:`outline`,size:`xs`},D.createElement(C,{variant:`icon`},D.createElement(r)),D.createElement(S,{},D.createElement(v,{},`Extra Small Size`),D.createElement(y,{},`The most compact size available.`))))},{name:`Icon`,description:`Use ItemMedia with variant="icon" to display an icon.`,code:`import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ShieldAlertIcon } from "lucide-react"

export function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-lg flex-col gap-6`},D.createElement(w,{variant:`outline`},D.createElement(C,{variant:`icon`},D.createElement(E)),D.createElement(S,{},D.createElement(v,{},`Security Alert`),D.createElement(y,{},`New login detected from unknown device.`)),D.createElement(b,{},D.createElement(i,{size:`sm`,variant:`outline`},`Review`))))},{name:`Avatar`,description:`Use ItemMedia with variant="avatar" to display an avatar.`,code:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Plus } from "lucide-react"

export function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-lg flex-col gap-6`},D.createElement(w,{variant:`outline`},D.createElement(C,{},D.createElement(h,{className:`size-10`},D.createElement(a,{src:`https://github.com/evilrabbit.png`}),D.createElement(m,{},`ER`))),D.createElement(S,{},D.createElement(v,{},`Evil Rabbit`),D.createElement(y,{},`Last seen 5 months ago`)),D.createElement(b,{},D.createElement(i,{size:`icon-sm`,variant:`outline`,className:`rounded-full`,"aria-label":`Invite`},D.createElement(l)))),D.createElement(w,{variant:`outline`},D.createElement(C,{},D.createElement(`div`,{className:`flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale`},D.createElement(h,{className:`hidden sm:flex`},D.createElement(a,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),D.createElement(m,{},`CN`)),D.createElement(h,{className:`hidden sm:flex`},D.createElement(a,{src:`https://github.com/maxleiter.png`,alt:`@maxleiter`}),D.createElement(m,{},`LR`)),D.createElement(h,{},D.createElement(a,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),D.createElement(m,{},`ER`)))),D.createElement(S,{},D.createElement(v,{},`No Team Members`),D.createElement(y,{},`Invite your team to collaborate on this project.`)),D.createElement(b,{},D.createElement(i,{size:`sm`,variant:`outline`},`Invite`))))},{name:`Group`,description:`Use ItemGroup to group related items together.`,code:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { PlusIcon } from "lucide-react"

const people = [
  { username: "shadcn", avatar: "https://github.com/shadcn.png", email: "shadcn@vercel.com" },
  { username: "maxleiter", avatar: "https://github.com/maxleiter.png", email: "maxleiter@vercel.com" },
  { username: "evilrabbit", avatar: "https://github.com/evilrabbit.png", email: "evilrabbit@vercel.com" },
]

export function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}`,preview:D.createElement(_,{className:`max-w-sm`},...O.map(e=>D.createElement(w,{key:e.username,variant:`outline`},D.createElement(C,{},D.createElement(h,{},D.createElement(a,{src:e.avatar,className:`grayscale`}),D.createElement(m,{},e.username.charAt(0)))),D.createElement(S,{className:`gap-1`},D.createElement(v,{},e.username),D.createElement(y,{},e.email)),D.createElement(b,{},D.createElement(i,{variant:`ghost`,size:`icon`,className:`rounded-full`},D.createElement(l))))))},{name:`Header`,description:`Use ItemHeader to add a header above the item content.`,code:`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"

const models = [
  { name: "v0-1.5-sm", description: "Everyday tasks and UI generation.", image: "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop" },
  { name: "v0-1.5-lg", description: "Advanced thinking or reasoning.", image: "https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop" },
  { name: "v0-2.0-mini", description: "Open Source model for everyone.", image: "https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop" },
]

export function ItemHeaderDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <img
                src={model.image}
                alt={model.name}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-xl flex-col gap-6`},D.createElement(_,{className:`grid grid-cols-3 gap-4`},...A.map(e=>D.createElement(w,{key:e.name,variant:`outline`},D.createElement(x,{},D.createElement(`img`,{src:e.image,alt:e.name,className:`aspect-square w-full rounded-sm object-cover`})),D.createElement(S,{},D.createElement(v,{},e.name),D.createElement(y,{},e.description))))))},{name:`Link`,description:`Use the asChild prop to render the item as a link.`,code:`import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>
              Learn how to get started with our components.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>
              Opens in a new tab with security attributes.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLinkIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-md flex-col gap-4`},D.createElement(w,{asChild:!0},D.createElement(`a`,{href:`#`},D.createElement(S,{},D.createElement(v,{},`Visit our documentation`),D.createElement(y,{},`Learn how to get started with our components.`)),D.createElement(b,{},D.createElement(p,{className:`size-4`})))),D.createElement(w,{variant:`outline`,asChild:!0},D.createElement(`a`,{href:`#`,target:`_blank`,rel:`noopener noreferrer`},D.createElement(S,{},D.createElement(v,{},`External resource`),D.createElement(y,{},`Opens in a new tab with security attributes.`)),D.createElement(b,{},D.createElement(T,{className:`size-4`})))))},{name:`Dropdown`,description:`Use Item inside a dropdown menu.`,code:`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ChevronDownIcon } from "lucide-react"

const people = [
  { username: "shadcn", avatar: "https://github.com/shadcn.png", email: "shadcn@vercel.com" },
  { username: "maxleiter", avatar: "https://github.com/maxleiter.png", email: "maxleiter@vercel.com" },
  { username: "evilrabbit", avatar: "https://github.com/evilrabbit.png", email: "evilrabbit@vercel.com" },
]

export function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">
          Select <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item size="xs" className="w-full p-2">
                <ItemMedia>
                  <Avatar className="size-6.5">
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">
                    {person.email}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:D.createElement(g,{},D.createElement(d,{asChild:!0},D.createElement(i,{variant:`outline`,className:`shadow-sm`},`Select `,D.createElement(f))),D.createElement(c,{className:`w-48`,align:`end`},D.createElement(o,{},...O.map(e=>D.createElement(u,{key:e.username},D.createElement(w,{size:`xs`,className:`w-full p-2`},D.createElement(C,{},D.createElement(h,{className:`size-6.5`},D.createElement(a,{src:e.avatar,className:`grayscale`}),D.createElement(m,{},e.username.charAt(0)))),D.createElement(S,{className:`gap-0`},D.createElement(v,{},e.username),D.createElement(y,{className:`leading-none`},e.email))))))))},{name:`Music List`,description:`Use ItemGroup with ItemMedia variant='image' to build a music list.`,code:`import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const music = [
  { title: "Midnight City Lights", artist: "Neon Dreams", album: "Electric Nights", duration: "3:45" },
  { title: "Coffee Shop Conversations", artist: "The Morning Brew", album: "Urban Stories", duration: "4:05" },
  { title: "Digital Rain", artist: "Cyber Symphony", album: "Binary Beats", duration: "3:30" },
]

export function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild>
            <a href="#">
              <ItemMedia variant="image">
                <img
                  src={\`https://avatar.vercel.sh/\${song.title}\`}
                  alt={song.title}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {song.title} -{" "}
                  <span className="text-muted-foreground">{song.album}</span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}`,preview:D.createElement(`div`,{className:`flex w-full max-w-md flex-col gap-6`},D.createElement(_,{className:`gap-4`},...k.map(e=>D.createElement(w,{key:e.title,variant:`outline`,asChild:!0},D.createElement(`a`,{href:`#`},D.createElement(C,{variant:`image`},D.createElement(`img`,{src:`https://avatar.vercel.sh/${e.title}`,alt:e.title,className:`object-cover grayscale`})),D.createElement(S,{},D.createElement(v,{className:`line-clamp-1`},`${e.title} - `,D.createElement(`span`,{className:`text-muted-foreground`},e.album)),D.createElement(y,{},e.artist)),D.createElement(S,{className:`flex-none text-center`},D.createElement(y,{},e.duration)))))))}],props:[{name:`variant`,type:`"default" | "outline" | "muted"`,description:`Visual style of the item.`,default:`"default"`},{name:`size`,type:`"default" | "sm" | "xs"`,description:`Size of the item.`,default:`"default"`},{name:`asChild`,type:`boolean`,description:`Render as a child element (e.g. anchor tag).`,default:`false`}]};export{j as itemDoc};