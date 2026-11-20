import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./refresh-ccw-Cv3osxFE.js";import{t as i}from"./search-Dl4KIBBW.js";import{t as a}from"./button-DTwq4-az.js";import{Cn as o,Ct as s,Et as c,Ji as l,Oa as u,St as d,Ta as f,Tt as p,Zr as m,bn as h,fi as g,li as _,ui as v,vn as y,wt as b,xt as x}from"./index-Ck2hFZuL.js";var S=n(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),C=n(`folder-code`,[[`path`,{d:`M10 10.5 8 13l2 2.5`,key:`m4t9c1`}],[`path`,{d:`m14 10.5 2 2.5-2 2.5`,key:`14w2eb`}],[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z`,key:`1u1bxd`}]]),w=t(e(),1),T={id:`empty`,name:`Empty`,description:`Use the Empty component to display an empty state.`,installation:{cli:`npx shadcn@latest add empty`,manual:`Copy and paste the empty component source code into your project.`},usage:`import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>`,preview:{code:`import { FolderCodeIcon, ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven't created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-4">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button variant="link" asChild className="text-muted-foreground" size="sm">
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}`,component:w.createElement(()=>w.createElement(x,{},w.createElement(b,{},w.createElement(p,{variant:`icon`},w.createElement(C,{})),w.createElement(c,{},`No Projects Yet`),w.createElement(s,{},`You haven't created any projects yet. Get started by creating your first project.`)),w.createElement(d,{className:`flex-row justify-center gap-4`},w.createElement(a,{},`Create Project`),w.createElement(a,{variant:`outline`},`Import Project`)),w.createElement(a,{variant:`link`,asChild:!0,className:`text-muted-foreground`,size:`sm`},w.createElement(`a`,{href:`#`},`Learn More `,w.createElement(u,{})))))},examples:[{name:`Outline`,description:`Use the border utility class to create an outline empty state.`,code:`import { CloudIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CloudIcon />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">Upload Files</Button>
      </EmptyContent>
    </Empty>
  )
}`,preview:w.createElement(()=>w.createElement(x,{className:`border border-dashed`},w.createElement(b,{},w.createElement(p,{variant:`icon`},w.createElement(S,{})),w.createElement(c,{},`Cloud Storage Empty`),w.createElement(s,{},`Upload files to your cloud storage to access them anywhere.`)),w.createElement(d,{},w.createElement(a,{variant:`outline`,size:`sm`},`Upload Files`))))},{name:`Background`,description:`Use the bg-* and bg-gradient-* utilities to add a background to the empty state.`,code:`import { BellIcon, RefreshCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyMuted() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BellIcon />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          You're all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcwIcon />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}`,preview:w.createElement(()=>w.createElement(x,{className:`h-full bg-muted/30`},w.createElement(b,{},w.createElement(p,{variant:`icon`},w.createElement(f,{})),w.createElement(c,{},`No Notifications`),w.createElement(s,{className:`max-w-xs text-pretty`},`You're all caught up. New notifications will appear here.`)),w.createElement(d,{},w.createElement(a,{variant:`outline`},w.createElement(r,{}),`Refresh`))))},{name:`Avatar`,description:`Use the EmptyMedia component to display an avatar in the empty state.`,code:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyAvatar() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/shadcn.png" className="grayscale" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>
          This user is currently offline. You can leave a message to notify
          them or try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Leave Message</Button>
      </EmptyContent>
    </Empty>
  )
}`,preview:w.createElement(()=>w.createElement(x,{},w.createElement(b,{},w.createElement(p,{variant:`default`},w.createElement(y,{className:`size-12`},w.createElement(o,{src:`https://github.com/shadcn.png`,className:`grayscale`}),w.createElement(h,{},`LR`))),w.createElement(c,{},`User Offline`),w.createElement(s,{},`This user is currently offline. You can leave a message to notify them or try again later.`)),w.createElement(d,{},w.createElement(a,{size:`sm`},`Leave Message`))))},{name:`Avatar Group`,description:`Use the EmptyMedia component to display an avatar group in the empty state.`,code:`import { PlusIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyAvatarGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  )
}`,preview:w.createElement(()=>w.createElement(x,{},w.createElement(b,{},w.createElement(p,{},w.createElement(`div`,{className:`flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale`},w.createElement(y,{},w.createElement(o,{src:`https://github.com/shadcn.png`,alt:`@shadcn`}),w.createElement(h,{},`CN`)),w.createElement(y,{},w.createElement(o,{src:`https://github.com/maxleiter.png`,alt:`@maxleiter`}),w.createElement(h,{},`LR`)),w.createElement(y,{},w.createElement(o,{src:`https://github.com/evilrabbit.png`,alt:`@evilrabbit`}),w.createElement(h,{},`ER`)))),w.createElement(c,{},`No Team Members`),w.createElement(s,{},`Invite your team to collaborate on this project.`)),w.createElement(d,{},w.createElement(a,{size:`sm`},w.createElement(l,{}),`Invite Members`))))},{name:`InputGroup`,description:`You can add an InputGroup component to the EmptyContent component.`,code:`import { SearchIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you're looking for doesn't exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}`,preview:w.createElement(()=>w.createElement(x,{},w.createElement(b,{},w.createElement(c,{},`404 - Not Found`),w.createElement(s,{},`The page you're looking for doesn't exist. Try searching for what you need below.`)),w.createElement(d,{},w.createElement(_,{className:`sm:w-3/4`},w.createElement(g,{placeholder:`Try searching for pages...`}),w.createElement(v,{},w.createElement(i,{})),w.createElement(v,{align:`inline-end`},w.createElement(m,{},`/`))),w.createElement(s,{},`Need help? `,w.createElement(`a`,{href:`#`},`Contact support`)))))}]};export{T as emptyDoc};