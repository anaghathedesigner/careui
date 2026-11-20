import{i as e,l as t,t as n}from"./dist-DtVyZPdI.js";import{t as r}from"./button-DTwq4-az.js";import{t as i}from"./input-BRwr7HbH.js";import{Ai as a,Fi as o,Ji as s,Mi as c,Ni as l,Oi as u,Pi as d,Ti as f,_i as p,bi as m,bt as h,ci as g,gi as _,hi as v,ji as y,ta as b,vi as x,wi as S,xi as C,yi as w}from"./index-Ck2hFZuL.js";import{Z as T,n as E,t as D}from"./BarChart-DPQAecie.js";var O=t(e(),1),k=[{goal:400},{goal:300},{goal:200},{goal:300},{goal:200},{goal:278},{goal:189},{goal:239},{goal:300},{goal:200},{goal:278},{goal:189},{goal:349}],A={id:`drawer`,name:`Drawer`,description:`A drawer component for React, built on top of Base UI.`,installation:{cli:`npx shadcn@latest add drawer`,manual:`Install @base-ui/react and copy the drawer component source code into your project.`},usage:`import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerBody>
      <p>Your content goes here.</p>
    </DrawerBody>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose render={<Button variant="outline" />}>
        Cancel
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,preview:{code:`"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
  { goal: 400 }, { goal: 300 }, { goal: 200 }, { goal: 300 }, { goal: 200 },
  { goal: 278 }, { goal: 189 }, { goal: 239 }, { goal: 300 }, { goal: 200 },
  { goal: 278 }, { goal: 189 }, { goal: 349 },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open Drawer
      </DrawerTrigger>
      <DrawerContent size="md">
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(-10)}
              disabled={goal <= 200}
            >
              <Minus />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter tabular-nums">{goal}</div>
              <div className="text-muted-foreground text-[0.70rem] uppercase">
                Calories/day
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(10)}
              disabled={goal >= 400}
            >
              <Plus />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          <div className="mt-3 h-30">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar
                  dataKey="goal"
                  style={{ fill: "var(--chart-1)" } as React.CSSProperties}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,component:O.createElement(()=>{let[e,t]=O.useState(350);function n(n){t(Math.max(200,Math.min(400,e+n)))}return O.createElement(v,{},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Open Drawer`)),O.createElement(x,{size:`md`},O.createElement(C,{},O.createElement(S,{},`Move Goal`),O.createElement(w,{},`Set your daily activity goal.`)),O.createElement(_,{},O.createElement(`div`,{className:`flex items-center justify-center space-x-2`},O.createElement(r,{variant:`outline`,size:`icon`,className:`h-8 w-8 shrink-0 rounded-full`,onClick:()=>n(-10),disabled:e<=200},O.createElement(b,{}),O.createElement(`span`,{className:`sr-only`},`Decrease`)),O.createElement(`div`,{className:`flex-1 text-center`},O.createElement(`div`,{className:`text-7xl font-bold tracking-tighter tabular-nums`},e),O.createElement(`div`,{className:`text-muted-foreground text-[0.70rem] uppercase`},`Calories/day`)),O.createElement(r,{variant:`outline`,size:`icon`,className:`h-8 w-8 shrink-0 rounded-full`,onClick:()=>n(10),disabled:e>=400},O.createElement(s,{}),O.createElement(`span`,{className:`sr-only`},`Increase`))),O.createElement(`div`,{className:`mt-3 h-30`},O.createElement(T,{width:`100%`,height:`100%`},O.createElement(D,{data:k},O.createElement(E,{dataKey:`goal`,style:{fill:`var(--chart-1)`}}))))),O.createElement(m,{},O.createElement(r,{},`Submit`),O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Cancel`)))))})},examples:[{name:`Scrollable Content`,description:`Keep actions visible while the content scrolls.`,code:`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerScrollableContent() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        Scrollable Content
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </DrawerBody>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,preview:O.createElement(()=>O.createElement(v,{swipeDirection:`right`},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Scrollable Content`)),O.createElement(x,{},O.createElement(C,{},O.createElement(S,{},`Move Goal`),O.createElement(w,{},`Set your daily activity goal.`)),O.createElement(_,{},...Array.from({length:10},(e,t)=>O.createElement(`p`,{key:t,className:`mb-4 leading-normal`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`))),O.createElement(m,{},O.createElement(r,{},`Submit`),O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Cancel`))))))},{name:`Sides`,description:`Use the swipeDirection prop to set the drawer side. Options: up, right, down (default), left.`,code:`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const DRAWER_SIDES = ["up", "right", "down", "left"] as const

export function DrawerWithSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer
          key={side}
          swipeDirection={
            side === "down" ? undefined : (side as "up" | "right" | "left")
          }
        >
          <DrawerTrigger render={<Button variant="outline" className="capitalize" />}>
            {side}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              ))}
            </DrawerBody>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose render={<Button variant="outline" />}>
                Cancel
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}`,preview:O.createElement(()=>O.createElement(`div`,{className:`flex flex-wrap gap-2`},...[`up`,`right`,`down`,`left`].map(e=>O.createElement(v,{key:e,swipeDirection:e===`down`?void 0:e},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`,className:`capitalize`},e)),O.createElement(x,{},O.createElement(C,{},O.createElement(S,{},`Move Goal`),O.createElement(w,{},`Set your daily activity goal.`)),O.createElement(_,{},...Array.from({length:10},(e,t)=>O.createElement(`p`,{key:t,className:`mb-4 leading-normal`},`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`))),O.createElement(m,{},O.createElement(r,{},`Submit`),O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Cancel`))))))))},{name:`Size Variants`,description:`Use the size prop on DrawerContent to constrain the inner content width for bottom and top drawers. Available sizes: md (max-w-lg), lg (max-w-2xl), and full (default).`,code:`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerBody,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const SIZES = ["md", "lg", "full"] as const

export function DrawerSizes() {
  return (
    <div className="flex flex-wrap gap-2">
      {SIZES.map((size) => (
        <Drawer key={size}>
          <DrawerTrigger render={<Button variant="outline" className="capitalize" />}>
            {size}
          </DrawerTrigger>
          <DrawerContent size={size}>
            <DrawerHeader>
              <DrawerTitle>Size: {size}</DrawerTitle>
              <DrawerDescription>This drawer uses size="{size}".</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p className="text-muted-foreground text-sm">
                The header, body, and footer content are constrained to the
                selected size. Resize the window to see the effect at different
                breakpoints.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose render={<Button variant="outline" />}>
                Cancel
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}`,preview:O.createElement(()=>O.createElement(`div`,{className:`flex flex-wrap gap-2`},...[`md`,`lg`,`full`].map(e=>O.createElement(v,{key:e},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`,className:`capitalize`},e)),O.createElement(x,{size:e},O.createElement(C,{},O.createElement(S,{},`Size: ${e}`),O.createElement(w,{},`This drawer uses size="${e}".`)),O.createElement(_,{},O.createElement(`p`,{className:`text-muted-foreground text-sm`},`The header, body, and footer content are constrained to the selected size. Resize the window to see the effect at different breakpoints.`)),O.createElement(m,{},O.createElement(r,{},`Submit`),O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Cancel`))))))))},{name:`Responsive Dialog`,description:`You can combine the Dialog and Drawer components to create a responsive dialog. This renders a Dialog component on desktop and a Drawer on mobile.`,code:`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>
        Edit Profile
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <ProfileForm />
        </DrawerBody>
        <DrawerFooter>
          <Button type="submit">Save changes</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
    </form>
  )
}`,preview:O.createElement(()=>{let[e,t]=O.useState(!1),s=g(`(min-width: 768px)`),b=({className:e})=>O.createElement(`form`,{className:n(`grid items-start gap-6`,e)},O.createElement(`div`,{className:`grid gap-3`},O.createElement(h,{htmlFor:`email`},`Email`),O.createElement(i,{type:`email`,id:`email`,defaultValue:`shadcn@example.com`})),O.createElement(`div`,{className:`grid gap-3`},O.createElement(h,{htmlFor:`username`},`Username`),O.createElement(i,{id:`username`,defaultValue:`@shadcn`})));return s?O.createElement(u,{open:e,onOpenChange:t},O.createElement(o,{asChild:!0},O.createElement(r,{variant:`outline`},`Edit Profile`)),O.createElement(a,{className:`sm:max-w-[425px]`},O.createElement(l,{},O.createElement(d,{},`Edit profile`),O.createElement(y,{},`Make changes to your profile here. Click save when you're done.`)),O.createElement(b,{}),O.createElement(c,{},O.createElement(r,{variant:`outline`,onClick:()=>t(!1)},`Cancel`),O.createElement(r,{type:`submit`},`Save changes`)))):O.createElement(v,{open:e,onOpenChange:t},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Edit Profile`)),O.createElement(x,{},O.createElement(C,{},O.createElement(S,{},`Edit profile`),O.createElement(w,{},`Make changes to your profile here. Click save when you're done.`)),O.createElement(_,{},O.createElement(b,{})),O.createElement(m,{},O.createElement(r,{type:`submit`},`Save changes`),O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Cancel`)))))})},{name:`Nested Drawers`,description:`Base UI handles nesting automatically. Use Drawer directly — inner drawers stack and scale behind the frontmost one.`,code:`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function NestedDrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open Drawer
      </DrawerTrigger>
      <DrawerContent size="md">
        <DrawerHeader>
          <DrawerTitle>Nested Drawers</DrawerTitle>
          <DrawerDescription>
            Nesting drawers creates a Sonner-like stacking effect.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-muted-foreground mb-2 text-sm">
            Drawers nest automatically — just use Drawer inside another Drawer.
          </p>
          <div className="space-y-3 pb-4">
            <p className="text-muted-foreground text-sm">
              Parent content row 1. This is intentionally added to force
              vertical overflow.
            </p>
            <p className="text-muted-foreground text-sm">
              Parent content row 2. Scroll this parent drawer before opening
              the nested drawer.
            </p>
            <p className="text-muted-foreground text-sm">
              Parent content row 3. Closing the nested drawer should not cause
              a scrollbar flash now.
            </p>
            <p className="text-muted-foreground text-sm">
              Parent content row 4. Keep swiping up and down to verify the
              interaction.
            </p>
            <p className="text-muted-foreground text-sm">
              Parent content row 5. This mirrors long-form content sections.
            </p>
            <p className="text-muted-foreground text-sm">
              Parent content row 6. The footer stays pinned while body scrolls.
            </p>
          </div>
          <Drawer>
            <DrawerTrigger render={<Button className="mt-4 w-full" />}>
              Open Second Drawer
            </DrawerTrigger>
            <DrawerContent size="md">
              <DrawerHeader>
                <DrawerTitle>This drawer is nested.</DrawerTitle>
                <DrawerDescription>
                  Pull this drawer down a bit and it&apos;ll scale the drawer
                  underneath it.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline" />}>
                  Close
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,preview:O.createElement(()=>O.createElement(v,{},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Open Drawer`)),O.createElement(x,{size:`md`},O.createElement(C,{},O.createElement(S,{},`Nested Drawers`),O.createElement(w,{},`Nesting drawers creates a Sonner-like stacking effect.`)),O.createElement(_,{},O.createElement(`p`,{className:`text-muted-foreground mb-2 text-sm`},`Drawers nest automatically - just use Drawer inside another Drawer.`),O.createElement(`div`,{className:`space-y-3 pb-4`},O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Parent content row 1. This is intentionally added to force vertical overflow.`),O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Parent content row 2. Scroll this parent drawer before opening the nested drawer.`),O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Parent content row 3. Closing the nested drawer should not cause a scrollbar flash now.`),O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Parent content row 4. Keep swiping up and down to verify the interaction.`),O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Parent content row 5. This mirrors long-form content sections.`),O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Parent content row 6. The footer stays pinned while body scrolls.`)),O.createElement(v,{},O.createElement(f,{asChild:!0},O.createElement(r,{className:`mt-4 w-full`},`Open Second Drawer`)),O.createElement(x,{size:`md`},O.createElement(C,{},O.createElement(S,{},`This drawer is nested.`),O.createElement(w,{},`Pull this drawer down a bit and it'll scale the drawer underneath it.`)),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`)))))),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`))))))},{name:`Nested Drawers (Right)`,description:`Open nested drawers from the right. Parent and child drawers can share the same swipeDirection.`,code:`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function NestedDrawerRightDemo() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        Open Right Drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nested Right Drawers</DrawerTitle>
          <DrawerDescription>
            Open another right drawer from inside this one.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button className="w-full" />}>
              Open Inner Right Drawer
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Inner Right Drawer</DrawerTitle>
                <DrawerDescription>
                  This nested drawer also opens from the right.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline" />}>
                  Close
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,preview:O.createElement(()=>O.createElement(v,{swipeDirection:`right`},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Open Right Drawer`)),O.createElement(x,{},O.createElement(C,{},O.createElement(S,{},`Nested Right Drawers`),O.createElement(w,{},`Open another right drawer from inside this one.`)),O.createElement(_,{},O.createElement(v,{swipeDirection:`right`},O.createElement(f,{asChild:!0},O.createElement(r,{className:`w-full`},`Open Inner Right Drawer`)),O.createElement(x,{},O.createElement(C,{},O.createElement(S,{},`Inner Right Drawer`),O.createElement(w,{},`This nested drawer also opens from the right.`)),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`)))))),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`))))))},{name:`Swipe Handle`,description:`Use showSwipeHandle on Drawer to render a draggable handle.`,code:`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerSwipeHandleDemo() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open Drawer
      </DrawerTrigger>
      <DrawerContent size="md">
        <DrawerHeader>
          <DrawerTitle>Swipe Handle</DrawerTitle>
          <DrawerDescription>
            Drag from the handle to move the drawer.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            Enable <code>showSwipeHandle</code> when you want stronger touch
            affordance for draggable drawers.
          </p>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,preview:O.createElement(()=>O.createElement(v,{showSwipeHandle:!0},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Open Drawer`)),O.createElement(x,{size:`md`},O.createElement(C,{},O.createElement(S,{},`Swipe Handle`),O.createElement(w,{},`Drag from the handle to move the drawer.`)),O.createElement(_,{},O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Enable `,O.createElement(`code`,{className:`bg-muted rounded px-1 py-0.5 text-xs`},`showSwipeHandle`),` when you want stronger touch affordance for draggable drawers.`)),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`))))))},{name:`Non Modal`,description:`Set modal={false} to keep page interaction enabled, and use disablePointerDismissal to prevent outside press dismissal.`,code:`import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerNonModalDemo() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="flex flex-wrap items-start gap-3">
      <Button variant="tertiary" className="tabular-nums" onClick={() => setCount((value) => value + 1)}>
        Background Clicks: {count}
      </Button>
      <Drawer modal={false} disablePointerDismissal swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          Open Non Modal Drawer
        </DrawerTrigger>
        <DrawerContent size="md">
          <DrawerHeader>
            <DrawerTitle>Non Modal Drawer</DrawerTitle>
            <DrawerDescription>
              Outside content stays interactive while the drawer is open.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p className="text-muted-foreground text-sm">
              Try clicking the background button while this drawer is open.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose render={<Button variant="outline" />}>
              Close
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}`,preview:O.createElement(()=>{let[e,t]=O.useState(0);return O.createElement(`div`,{className:`flex flex-wrap items-start gap-3`},O.createElement(r,{variant:`tertiary`,className:`tabular-nums`,onClick:()=>t(e=>e+1)},`Background Clicks: ${e}`),O.createElement(v,{modal:!1,disablePointerDismissal:!0,swipeDirection:`right`},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Open Non Modal Drawer`)),O.createElement(x,{size:`md`},O.createElement(C,{},O.createElement(S,{},`Non Modal Drawer`),O.createElement(w,{},`Outside content stays interactive while the drawer is open.`)),O.createElement(_,{},O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Try clicking the background button while this drawer is open.`)),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`))))))})},{name:`Snap Points`,description:`Use snapPoints with controlled snapPoint and onSnapPointChange for vertical drawers.`,code:`import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerSnapPointsDemo() {
  const [snapPoint, setSnapPoint] = React.useState<number | string | null>(0.35)

  return (
    <Drawer
      snapPoints={[0.35, 0.6, 1]}
      snapPoint={snapPoint}
      onSnapPointChange={setSnapPoint}
      snapToSequentialPoints
      showSwipeHandle
    >
      <DrawerTrigger render={<Button variant="outline" />}>
        Open Snap Points Drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Snap Points</DrawerTitle>
          <DrawerDescription className="tabular-nums">
            Active snap point: {String(snapPoint)}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            Swipe up and down to move between 35%, 60%, and 100% heights.
          </p>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,preview:O.createElement(()=>{let[e,t]=O.useState(.35);return O.createElement(v,{snapPoints:[.35,.6,1],snapPoint:e,onSnapPointChange:t,snapToSequentialPoints:!0,showSwipeHandle:!0},O.createElement(f,{asChild:!0},O.createElement(r,{variant:`outline`},`Open Snap Points Drawer`)),O.createElement(x,{},O.createElement(C,{},O.createElement(S,{},`Snap Points`),O.createElement(w,{className:`tabular-nums`},`Active snap point: ${String(e)}`)),O.createElement(_,{},O.createElement(`p`,{className:`text-muted-foreground text-sm`},`Swipe up and down to move between 35%, 60%, and 100% heights.`)),O.createElement(m,{},O.createElement(p,{asChild:!0},O.createElement(r,{variant:`outline`},`Close`)))))})}],props:[{name:`swipeDirection`,type:`"up" | "right" | "down" | "left"`,description:`The direction from which the drawer slides.`,default:`"down"`},{name:`showSwipeHandle`,type:`boolean`,description:`Render a swipe handle on the drawer edge.`,default:`false`},{name:`snapPoints`,type:`(number | string)[]`,description:`Snap point heights. Numbers 0–1 are viewport fractions; larger numbers are pixels; strings support px/rem.`},{name:`snapPoint`,type:`number | string | null`,description:`Controlled active snap point value.`},{name:`onSnapPointChange`,type:`(snapPoint: number | string | null) => void`,description:`Callback fired when the active snap point changes.`},{name:`snapToSequentialPoints`,type:`boolean`,description:`When true, snap gestures move to adjacent snap points in sequence.`,default:`false`},{name:`open`,type:`boolean`,description:`Whether the drawer is open.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Callback when the open state changes.`},{name:`modal`,type:`"boolean" | "trap-focus"`,description:`Modal traps focus and blocks pointer events. trap-focus keeps focus inside but allows scroll/pointer outside.`,default:`true`},{name:`disablePointerDismissal`,type:`boolean`,description:`Disables outside pointer press dismissal when true.`,default:`false`},{name:`onOpenChangeComplete`,type:`(open: boolean) => void`,description:`Called after open/close transitions finish.`}]};export{A as drawerDoc};