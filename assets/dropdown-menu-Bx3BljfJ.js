import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./settings-Bc2NTS1M.js";import{t as i}from"./user-KlrTp-XM.js";import{t as a}from"./button-DTwq4-az.js";import{An as o,Dn as s,En as c,Fn as l,H as u,Hi as d,In as f,Ln as p,Lt as m,Mn as h,Nn as g,On as _,Pn as v,Rn as y,Sa as b,Tn as x,V as S,ea as C,fa as w,ia as T,jn as E,kn as D,wn as O}from"./index-Ck2hFZuL.js";var k=n(`ellipsis-vertical`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`12`,cy:`5`,r:`1`,key:`gxeob9`}],[`circle`,{cx:`12`,cy:`19`,r:`1`,key:`lyex9k`}]]),A=t(e(),1),j={id:`dropdown-menu`,name:`Dropdown Menu`,description:`Displays a menu to the user — such as a set of actions or functions — triggered by a button.`,installation:{cli:`npx shadcn@latest add dropdown-menu`,manual:`Install @base-ui/react and copy the dropdown menu component source code into your project.`},usage:`import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:{code:`import { ChevronDown } from "lucide-react"

<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="default" className="shadow-sm">
      Open Menu
      <ChevronDown className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-44" align="start">
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Billing
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,component:A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`,size:`default`},`Open Menu`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{className:`w-44`,align:`start`},A.createElement(s,{},A.createElement(D,{},`My Account`),A.createElement(g,{}),A.createElement(_,{},`Profile`,A.createElement(v,{},`⇧⌘P`)),A.createElement(_,{},`Billing`,A.createElement(v,{},`⌘B`)),A.createElement(_,{},`Settings`)),A.createElement(g,{}),A.createElement(_,{variant:`destructive`},`Log out`)))},examples:[{name:`Basic`,description:`A basic dropdown menu with groups, labels, and separators.`,code:`import { ChevronDown } from "lucide-react"

<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="shadow-sm">
      Open
      <ChevronDown className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>GitHub</DropdownMenuItem>
    <DropdownMenuItem>Support</DropdownMenuItem>
    <DropdownMenuItem disabled>API</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,preview:A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Open`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(s,{},A.createElement(D,{},`My Account`),A.createElement(_,{},`Profile`),A.createElement(_,{},`Billing`),A.createElement(_,{},`Settings`)),A.createElement(g,{}),A.createElement(_,{},`GitHub`),A.createElement(_,{},`Support`),A.createElement(_,{disabled:!0},`API`)))},{name:`Modal`,description:"Pass `modal={true}` (Base UI default) to block interaction with the page behind the menu. Useful for destructive flows where users should explicitly confirm or dismiss. The rest of the examples on this page use `modal={false}` so scrolling and other UI stay responsive while the menu is open — recommended for dashboards and data-dense surfaces.",code:`import { ChevronDown } from "lucide-react"

<DropdownMenu modal={true}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="shadow-sm">
      Open
      <ChevronDown className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Danger zone</DropdownMenuLabel>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Archive patient</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Delete record</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,preview:A.createElement(O,{modal:!0},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Open`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(s,{},A.createElement(D,{},`Danger zone`)),A.createElement(g,{}),A.createElement(_,{},`Archive patient`),A.createElement(_,{variant:`destructive`},`Delete record`)))},{name:`With Submenu`,description:`A dropdown menu with nested submenu actions.`,code:`import { ChevronDown } from "lucide-react"

<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="shadow-sm">
      Open
      <ChevronDown className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Email</DropdownMenuItem>
          <DropdownMenuItem>Message</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>More...</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`,preview:A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Open`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(_,{},`Team`),A.createElement(l,{},A.createElement(p,{},`Invite users`),A.createElement(o,{},A.createElement(f,{},A.createElement(_,{},`Email`),A.createElement(_,{},`Message`),A.createElement(g,{}),A.createElement(_,{},`More...`))))))},{name:`With Checkboxes`,description:`Selectable checkbox items for visibility toggles.`,code:`"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">
          View
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={(checked) => setShowStatusBar(checked === true)}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={(checked) => setShowActivityBar(checked === true)}
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:A.createElement(function(){let[e,t]=A.useState(!0),[n,r]=A.useState(!1);return A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`View`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(s,{},A.createElement(D,{},`Appearance`)),A.createElement(g,{}),A.createElement(x,{checked:e,onCheckedChange:e=>t(e===!0)},`Status Bar`),A.createElement(x,{checked:n,onCheckedChange:e=>r(e===!0)},`Activity Bar`)))})},{name:`With Checkboxes Component`,description:`Use actual Checkbox components as dropdown items with matching checkbox label styling.`,code:`"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export function DropdownMenuCheckboxComponent() {
  const [open, setOpen] = React.useState(false)
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const footerButtonRef = React.useRef<HTMLButtonElement | null>(null)
  const hasSelection = showStatusBar || showActivityBar

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">
          View
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onKeyDown={(event) => {
          if (event.key === "Tab" && !event.shiftKey) {
            event.preventDefault()
            footerButtonRef.current?.focus()
          }
        }}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          role="menuitemcheckbox"
          aria-checked={showStatusBar}
          closeOnClick={false}
          onClick={() => setShowStatusBar((prev) => !prev)}
        >
          <Checkbox
            checked={showStatusBar}
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none bg-background data-checked:bg-primary data-checked:text-primary-foreground! group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]"
          />
          <span>Status Bar</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          role="menuitemcheckbox"
          aria-checked={showActivityBar}
          closeOnClick={false}
          onClick={() => setShowActivityBar((prev) => !prev)}
        >
          <Checkbox
            checked={showActivityBar}
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none bg-background data-checked:bg-primary data-checked:text-primary-foreground! group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]"
          />
          <span>Activity Bar</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="bg-popover sticky bottom-0 -mx-1 p-1">
          <Button
            ref={footerButtonRef}
            size="sm"
            variant={hasSelection ? "secondary" : "ghost"}
            className="w-full"
            onClick={() => setOpen(false)}
          >
            {hasSelection ? "Done" : "Close"}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:A.createElement(function(){let[e,t]=A.useState(!1),[n,r]=A.useState(!0),[i,o]=A.useState(!1),l=A.useRef(null),u=n||i;return A.createElement(O,{open:e,onOpenChange:t},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`View`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{onKeyDown:e=>{e.key===`Tab`&&!e.shiftKey&&(e.preventDefault(),l.current?.focus())}},A.createElement(s,{},A.createElement(D,{},`Appearance`)),A.createElement(g,{}),A.createElement(_,{role:`menuitemcheckbox`,"aria-checked":n,closeOnClick:!1,onClick:()=>r(e=>!e)},A.createElement(m,{checked:n,tabIndex:-1,"aria-hidden":!0,className:`pointer-events-none bg-background data-checked:bg-primary data-checked:text-primary-foreground! group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]`}),A.createElement(`span`,{},`Status Bar`)),A.createElement(_,{role:`menuitemcheckbox`,"aria-checked":i,closeOnClick:!1,onClick:()=>o(e=>!e)},A.createElement(m,{checked:i,tabIndex:-1,"aria-hidden":!0,className:`pointer-events-none bg-background data-checked:bg-primary data-checked:text-primary-foreground! group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]`}),A.createElement(`span`,{},`Activity Bar`)),A.createElement(g,{}),A.createElement(`div`,{className:`bg-popover sticky bottom-0 -mx-1 p-1`},A.createElement(a,{ref:l,size:`sm`,variant:u?`secondary`:`ghost`,className:`w-full`,onClick:()=>t(!1)},u?`Done`:`Close`))))})},{name:`With RadioGroup Component`,description:`Use RadioGroup and RadioGroupItem as actual dropdown item controls.`,code:`"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DropdownMenuRadioGroupComponent() {
  const [position, setPosition] = React.useState("top")

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">
          Position
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <RadioGroup value={position} className="gap-0 w-full">
          <DropdownMenuItem
            role="menuitemradio"
            aria-checked={position === "top"}
            closeOnClick={false}
            onClick={() => setPosition("top")}
          >
            <RadioGroupItem
              value="top"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]"
            />
            <span>Top</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            role="menuitemradio"
            aria-checked={position === "bottom"}
            closeOnClick={false}
            onClick={() => setPosition("bottom")}
          >
            <RadioGroupItem
              value="bottom"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]"
            />
            <span>Bottom</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            role="menuitemradio"
            aria-checked={position === "right"}
            closeOnClick={false}
            onClick={() => setPosition("right")}
          >
            <RadioGroupItem
              value="right"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]"
            />
            <span>Right</span>
          </DropdownMenuItem>
        </RadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:A.createElement(function(){let[e,t]=A.useState(`top`);return A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Position`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(s,{},A.createElement(D,{},`Panel Position`)),A.createElement(g,{}),A.createElement(S,{value:e,className:`gap-0 w-full`},A.createElement(_,{role:`menuitemradio`,"aria-checked":e===`top`,closeOnClick:!1,onClick:()=>t(`top`)},A.createElement(u,{value:`top`,tabIndex:-1,"aria-hidden":!0,className:`pointer-events-none group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]`}),A.createElement(`span`,{},`Top`)),A.createElement(_,{role:`menuitemradio`,"aria-checked":e===`bottom`,closeOnClick:!1,onClick:()=>t(`bottom`)},A.createElement(u,{value:`bottom`,tabIndex:-1,"aria-hidden":!0,className:`pointer-events-none group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]`}),A.createElement(`span`,{},`Bottom`)),A.createElement(_,{role:`menuitemradio`,"aria-checked":e===`right`,closeOnClick:!1,onClick:()=>t(`right`)},A.createElement(u,{value:`right`,tabIndex:-1,"aria-hidden":!0,className:`pointer-events-none group-focus-visible/dropdown-menu-item:ring-ring/50 group-focus-visible/dropdown-menu-item:ring-[3px]`}),A.createElement(`span`,{},`Right`)))))})},{name:`With Radio Items`,description:`Radio items for a single selected value.`,code:`"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

export function DropdownMenuTheme() {
  const [theme, setTheme] = React.useState("light")

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">
          Theme
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:A.createElement(function(){let[e,t]=A.useState(`light`);return A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Theme`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(s,{},A.createElement(D,{},`Theme`)),A.createElement(g,{}),A.createElement(E,{value:e,onValueChange:t},A.createElement(h,{value:`light`},`Light`),A.createElement(h,{value:`dark`},`Dark`),A.createElement(h,{value:`system`},`System`))))})},{name:`Destructive Action`,description:`Use the destructive variant for irreversible actions.`,code:`import { ChevronDown } from "lucide-react"

<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="shadow-sm">
      Actions
      <ChevronDown className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,preview:A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Actions`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(_,{},`Edit`),A.createElement(_,{},`Duplicate`),A.createElement(g,{}),A.createElement(_,{variant:`destructive`},`Delete`)))},{name:`Icon-only Trigger`,description:`Use an icon-only trigger with a vertical three-dots menu button.`,code:`import { EllipsisVertical } from "lucide-react"

<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon" aria-label="Open menu" className="shadow-sm">
      <EllipsisVertical className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,preview:A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,size:`icon`,"aria-label":`Open menu`,className:`shadow-sm`},A.createElement(k,{className:`size-4`}))),A.createElement(c,{align:`end`},A.createElement(_,{},`Profile`),A.createElement(_,{},`Settings`),A.createElement(_,{variant:`destructive`},`Log out`)))},{name:`Complex Menu`,description:`A richer dropdown combining icons, shortcuts, submenu, checkbox items, radio group, and destructive action.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  CreditCardIcon,
  LogOutIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  UserIcon,
} from "lucide-react"

export function DropdownMenuComplex() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [theme, setTheme] = React.useState("light")

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-sm">
          Complex Menu
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SettingsIcon />
              Settings
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>General</DropdownMenuItem>
                <DropdownMenuItem>Security</DropdownMenuItem>
                <DropdownMenuItem>Integrations</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={(checked) => setShowStatusBar(checked === true)}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={(checked) => setShowActivityBar(checked === true)}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">
              <SunIcon />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <MoonIcon />
              Dark
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,preview:A.createElement(function(){let[e,t]=A.useState(!0),[n,u]=A.useState(!1),[m,S]=A.useState(`light`);return A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Complex Menu`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{className:`w-52`,align:`start`},A.createElement(s,{},A.createElement(D,{},`My Account`),A.createElement(_,{},A.createElement(i,{}),`Profile`,A.createElement(v,{},`⇧⌘P`)),A.createElement(_,{},A.createElement(w,{}),`Billing`,A.createElement(v,{},`⌘B`)),A.createElement(l,{},A.createElement(p,{},A.createElement(r,{}),`Settings`),A.createElement(o,{},A.createElement(f,{},A.createElement(_,{},`General`),A.createElement(_,{},`Security`),A.createElement(_,{},`Integrations`))))),A.createElement(g,{}),A.createElement(s,{},A.createElement(D,{},`View`),A.createElement(x,{checked:e,onCheckedChange:e=>t(e===!0)},`Status Bar`),A.createElement(x,{checked:n,onCheckedChange:e=>u(e===!0)},`Activity Bar`)),A.createElement(g,{}),A.createElement(s,{},A.createElement(D,{},`Theme`),A.createElement(E,{value:m,onValueChange:S},A.createElement(h,{value:`light`},A.createElement(d,{}),`Light`),A.createElement(h,{value:`dark`},A.createElement(C,{}),`Dark`))),A.createElement(g,{}),A.createElement(_,{variant:`destructive`},A.createElement(T,{}),`Log out`,A.createElement(v,{},`⇧⌘Q`))))})},{name:`Icon Items`,description:`Combine icons with labels for faster scanning.`,code:`import { ChevronDown, CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react"

<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="shadow-sm">
      Open
      <ChevronDown className="size-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <UserIcon />
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CreditCardIcon />
      Billing
    </DropdownMenuItem>
    <DropdownMenuItem>
      <SettingsIcon />
      Settings
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,preview:A.createElement(O,{modal:!1},A.createElement(y,{asChild:!0},A.createElement(a,{variant:`outline`,className:`shadow-sm`},`Open`,A.createElement(b,{className:`size-4`}))),A.createElement(c,{},A.createElement(_,{},A.createElement(i,{}),`Profile`),A.createElement(_,{},A.createElement(w,{}),`Billing`),A.createElement(_,{},A.createElement(r,{}),`Settings`)))}],props:[{name:`open`,type:`boolean`,description:`The controlled open state of the dropdown menu.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Event handler called when the open state of the dropdown menu changes.`},{name:`modal`,type:`boolean`,description:`The modality of the dropdown menu.`,default:`true`},{name:`inset`,type:`boolean`,description:`Add inset padding to menu item and sub trigger.`,default:`false`},{name:`variant`,type:`"default" | "destructive"`,description:`Visual style for DropdownMenuItem.`,default:`"default"`}]};export{j as dropdownMenuDoc};