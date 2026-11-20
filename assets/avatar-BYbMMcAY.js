import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{Cn as r,Dn as i,En as a,Ji as o,Nn as s,On as c,Rn as l,Sn as u,bn as d,vn as f,wn as p,xn as m,yn as h}from"./index-Ck2hFZuL.js";var g=t(e(),1),_={id:`avatar`,name:`Avatar`,description:`An image element with a fallback for representing the user.`,installation:{cli:`npx shadcn@latest add avatar`,manual:`Copy and paste the avatar component source code into your project.`},usage:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,preview:{code:`import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

<div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
  <Avatar>
    <AvatarImage
      src="https://github.com/shadcn.png"
      alt="@shadcn"
      className="grayscale"
    />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage
      src="https://github.com/evilrabbit.png"
      alt="@evilrabbit"
    />
    <AvatarFallback>ER</AvatarFallback>
    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
  </Avatar>
  <AvatarGroup className="grayscale">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        src="https://github.com/maxleiter.png"
        alt="@maxleiter"
      />
      <AvatarFallback>LR</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        src="https://github.com/evilrabbit.png"
        alt="@evilrabbit"
      />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+3</AvatarGroupCount>
  </AvatarGroup>
</div>`,component:g.createElement(`div`,{className:`flex flex-row flex-wrap items-center gap-6 md:gap-12`},g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`,className:`grayscale`}),g.createElement(d,{},`CN`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),g.createElement(d,{},`ER`),g.createElement(h,{className:`bg-green-600 dark:bg-green-800`})),g.createElement(m,{className:`grayscale`},g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/maxleiter.png`,alt:`@maxleiter`}),g.createElement(d,{},`LR`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),g.createElement(d,{},`ER`)),g.createElement(u,{},`+3`)))},examples:[{name:`Basic`,description:`A basic avatar component with an image and a fallback.`,code:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,preview:g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`,className:`grayscale`}),g.createElement(d,{},`CN`))},{name:`Badge`,description:`Use the AvatarBadge component to add a badge to the avatar. The badge is positioned at the bottom right of the avatar.`,code:`import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  )
}`,preview:g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`),g.createElement(h,{className:`bg-green-600 dark:bg-green-800`}))},{name:`Badge with Icon`,description:`You can also use an icon inside AvatarBadge.`,code:`import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { PlusIcon } from "lucide-react"

export function AvatarBadgeIconExample() {
  return (
    <Avatar className="grayscale">
      <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  )
}`,preview:g.createElement(f,{className:`grayscale`},g.createElement(r,{src:`https://github.com/pranathip.png`,alt:`@pranathip`}),g.createElement(d,{},`PP`),g.createElement(h,{},g.createElement(o)))},{name:`Avatar Group`,description:`Use the AvatarGroup component to add a group of avatars.`,code:`import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarGroupExample() {
  return (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}`,preview:g.createElement(m,{className:`grayscale`},g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/maxleiter.png`,alt:`@maxleiter`}),g.createElement(d,{},`LR`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),g.createElement(d,{},`ER`)))},{name:`Avatar Group Count`,description:`Use AvatarGroupCount to add a count to the group.`,code:`import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarGroupCountExample() {
  return (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}`,preview:g.createElement(m,{className:`grayscale`},g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/maxleiter.png`,alt:`@maxleiter`}),g.createElement(d,{},`LR`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),g.createElement(d,{},`ER`)),g.createElement(u,{},`+3`))},{name:`Avatar Group with Icon`,description:`You can also use an icon inside AvatarGroupCount.`,code:`import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { PlusIcon } from "lucide-react"

export function AvatarGroupCountIconExample() {
  return (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  )
}`,preview:g.createElement(m,{className:`grayscale`},g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/maxleiter.png`,alt:`@maxleiter`}),g.createElement(d,{},`LR`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),g.createElement(d,{},`ER`)),g.createElement(u,{},g.createElement(o)))},{name:`Sizes`,description:`Use the size prop to change the size of the avatar.`,code:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSizeExample() {
  return (
    <div className="flex flex-wrap items-center gap-2 grayscale">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}`,preview:g.createElement(`div`,{className:`flex flex-wrap items-center gap-2 grayscale`},g.createElement(f,{size:`sm`},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)),g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)),g.createElement(f,{size:`lg`},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),g.createElement(d,{},`CN`)))},{name:`Dropdown`,description:`You can use the Avatar component as a trigger for a dropdown menu.`,code:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full [corner-shape:round] shadow-sm">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:g.createElement(p,{},g.createElement(l,{asChild:!0},g.createElement(n,{variant:`ghost`,size:`icon`,className:`rounded-full shadow-sm`},g.createElement(f,{},g.createElement(r,{src:`https://github.com/shadcn.png`,alt:`shadcn`}),g.createElement(d,{},`CN`)))),g.createElement(a,{className:`w-32`},g.createElement(i,{},g.createElement(c,{},`Profile`),g.createElement(c,{},`Billing`),g.createElement(c,{},`Settings`)),g.createElement(s),g.createElement(i,{},g.createElement(c,{variant:`destructive`},`Log out`))))},{name:`Colors`,description:`Use the color prop on AvatarFallback to apply a colored background with matching text. Follows the same palette as Badge.`,code:`import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const users = [
  { initials: "AB", color: "red" },
  { initials: "CD", color: "orange" },
  { initials: "EF", color: "amber" },
  { initials: "GH", color: "lime" },
  { initials: "IJ", color: "green" },
  { initials: "KL", color: "teal" },
  { initials: "MN", color: "sky" },
  { initials: "OP", color: "blue" },
  { initials: "QR", color: "violet" },
  { initials: "ST", color: "purple" },
  { initials: "UV", color: "pink" },
  { initials: "WX", color: "rose" },
  { initials: "YZ", color: "neutral" },
] as const

export function AvatarColorsExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {users.map(({ initials, color }) => (
        <Avatar key={color}>
          <AvatarFallback color={color}>{initials}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}`,preview:g.createElement(`div`,{className:`flex flex-wrap gap-2`},...[{initials:`AB`,color:`red`},{initials:`CD`,color:`orange`},{initials:`EF`,color:`amber`},{initials:`GH`,color:`lime`},{initials:`IJ`,color:`green`},{initials:`KL`,color:`teal`},{initials:`MN`,color:`sky`},{initials:`OP`,color:`blue`},{initials:`QR`,color:`violet`},{initials:`ST`,color:`purple`},{initials:`UV`,color:`pink`},{initials:`WX`,color:`rose`},{initials:`YZ`,color:`neutral`}].map(({initials:e,color:t})=>g.createElement(f,{key:t},g.createElement(d,{color:t},e))))},{name:`Shapes`,description:`Use the shape prop to choose between circle (default), rounded, or squircle.`,code:`import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarShapesExample() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar shape="circle" size="lg">
          <AvatarFallback color="blue">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar shape="rounded" size="lg">
          <AvatarFallback color="violet">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">rounded</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar shape="squircle" size="lg">
          <AvatarFallback color="green">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">squircle</span>
      </div>
    </div>
  )
}`,preview:g.createElement(`div`,{className:`flex flex-wrap items-center gap-6`},...[{shape:`circle`,color:`blue`},{shape:`rounded`,color:`violet`},{shape:`squircle`,color:`green`}].map(({shape:e,color:t})=>g.createElement(`div`,{key:e,className:`flex flex-col items-center gap-2`},g.createElement(f,{shape:e,size:`lg`},g.createElement(d,{color:t},`CN`)),g.createElement(`span`,{className:`text-xs text-muted-foreground`},e))))}]};export{_ as avatarDoc};