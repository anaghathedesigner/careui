import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./calendar-ChYElMof.js";import{t as i}from"./circle-question-mark-BNaUCazB.js";import{n as a,t as o}from"./scissors-CFFrsJAd.js";import{t as s}from"./file-text-DINNd2TT.js";import{t as c}from"./inbox-CHZvzz7d.js";import{t as l}from"./settings-Bc2NTS1M.js";import{t as u}from"./trash-DP0FVvLN.js";import{t as d}from"./user-KlrTp-XM.js";import{t as f}from"./button-DTwq4-az.js";import{$r as p,Ii as m,Ji as h,Ta as g,ai as _,ca as v,ei as y,fa as b,ii as x,ma as S,ni as C,oi as w,pa as T,ri as E,si as D,ti as O,ua as k}from"./index-Ck2hFZuL.js";var A=n(`calculator`,[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`line`,{x1:`8`,x2:`16`,y1:`6`,y2:`6`,key:`x4nwl0`}],[`line`,{x1:`16`,x2:`16`,y1:`14`,y2:`18`,key:`wjye3r`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}]]),j=n(`folder-plus`,[[`path`,{d:`M12 10v6`,key:`1bos4e`}],[`path`,{d:`M9 13h6`,key:`1uhe8q`}],[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),M=n(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),N=n(`layout-grid`,[[`rect`,{width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`,key:`1g98yp`}],[`rect`,{width:`7`,height:`7`,x:`14`,y:`3`,rx:`1`,key:`6d4xhi`}],[`rect`,{width:`7`,height:`7`,x:`14`,y:`14`,rx:`1`,key:`nxv5o0`}],[`rect`,{width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`,key:`1bb6yr`}]]),P=n(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),F=n(`smile`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M8 14s1.5 2 4 2 4-2 4-2`,key:`1y1vjs`}],[`line`,{x1:`9`,x2:`9.01`,y1:`9`,y2:`9`,key:`yxxnd0`}],[`line`,{x1:`15`,x2:`15.01`,y1:`9`,y2:`9`,key:`1p4y9e`}]]),I=n(`zoom-out`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),L=t(e(),1),R={id:`command`,name:`Command`,description:`Fast, composable, unstyled command menu for React.`,installation:{cli:`npx shadcn@latest add command`,manual:`Copy and paste the command component source code into your project.`},usage:`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

export function CommandDemo() {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,preview:{code:`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

export function CommandDemo() {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,component:L.createElement(p,{className:`max-w-sm rounded-lg border`},L.createElement(E,{placeholder:`Type a command or search...`}),L.createElement(_,{},L.createElement(O,{},`No results found.`),L.createElement(C,{heading:`Suggestions`},L.createElement(x,{},L.createElement(r,{}),L.createElement(`span`,{},`Calendar`)),L.createElement(x,{},L.createElement(F,{}),L.createElement(`span`,{},`Search Emoji`)),L.createElement(x,{disabled:!0},L.createElement(A,{}),L.createElement(`span`,{},`Calculator`))),L.createElement(w),L.createElement(C,{heading:`Settings`},L.createElement(x,{},L.createElement(d,{}),L.createElement(`span`,{},`Profile`),L.createElement(D,{},`⌘P`)),L.createElement(x,{},L.createElement(b,{}),L.createElement(`span`,{},`Billing`),L.createElement(D,{},`⌘B`)),L.createElement(x,{},L.createElement(l,{}),L.createElement(`span`,{},`Settings`),L.createElement(D,{},`⌘S`)))))},examples:[{name:`Basic`,description:`A simple command menu in a dialog.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function CommandBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Open Menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`,preview:L.createElement(()=>{let[e,t]=L.useState(!1);return L.createElement(`div`,{className:`flex flex-col gap-4`},L.createElement(f,{variant:`outline`,onClick:()=>t(!0),className:`w-fit`},`Open Menu`),L.createElement(y,{open:e,onOpenChange:t},L.createElement(p,{},L.createElement(E,{placeholder:`Type a command or search...`}),L.createElement(_,{},L.createElement(O,{},`No results found.`),L.createElement(C,{heading:`Suggestions`},L.createElement(x,{},`Calendar`),L.createElement(x,{},`Search Emoji`),L.createElement(x,{},`Calculator`))))))})},{name:`Shortcuts`,description:`Commands with keyboard shortcuts displayed.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react"

export function CommandWithShortcuts() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Open Menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`,preview:L.createElement(()=>{let[e,t]=L.useState(!1);return L.createElement(`div`,{className:`flex flex-col gap-4`},L.createElement(f,{variant:`outline`,onClick:()=>t(!0),className:`w-fit`},`Open Menu`),L.createElement(y,{open:e,onOpenChange:t},L.createElement(p,{},L.createElement(E,{placeholder:`Type a command or search...`}),L.createElement(_,{},L.createElement(O,{},`No results found.`),L.createElement(C,{heading:`Settings`},L.createElement(x,{},L.createElement(d,{}),L.createElement(`span`,{},`Profile`),L.createElement(D,{},`⌘P`)),L.createElement(x,{},L.createElement(b,{}),L.createElement(`span`,{},`Billing`),L.createElement(D,{},`⌘B`)),L.createElement(x,{},L.createElement(l,{}),L.createElement(`span`,{},`Settings`),L.createElement(D,{},`⌘S`)))))))})},{name:`Groups`,description:`A command menu with groups, icons and separators.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

export function CommandWithGroups() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Open Menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <CalculatorIcon />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`,preview:L.createElement(()=>{let[e,t]=L.useState(!1);return L.createElement(`div`,{className:`flex flex-col gap-4`},L.createElement(f,{variant:`outline`,onClick:()=>t(!0),className:`w-fit`},`Open Menu`),L.createElement(y,{open:e,onOpenChange:t},L.createElement(p,{},L.createElement(E,{placeholder:`Type a command or search...`}),L.createElement(_,{},L.createElement(O,{},`No results found.`),L.createElement(C,{heading:`Suggestions`},L.createElement(x,{},L.createElement(r,{}),L.createElement(`span`,{},`Calendar`)),L.createElement(x,{},L.createElement(F,{}),L.createElement(`span`,{},`Search Emoji`)),L.createElement(x,{},L.createElement(A,{}),L.createElement(`span`,{},`Calculator`))),L.createElement(w),L.createElement(C,{heading:`Settings`},L.createElement(x,{},L.createElement(d,{}),L.createElement(`span`,{},`Profile`),L.createElement(D,{},`⌘P`)),L.createElement(x,{},L.createElement(b,{}),L.createElement(`span`,{},`Billing`),L.createElement(D,{},`⌘B`)),L.createElement(x,{},L.createElement(l,{}),L.createElement(`span`,{},`Settings`),L.createElement(D,{},`⌘S`)))))))})},{name:`Scrollable`,description:`Scrollable command menu with multiple items.`,code:`"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  BellIcon,
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  HelpCircleIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  ScissorsIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react"

export function CommandManyItems() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Open Menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem><HomeIcon /><span>Home</span><CommandShortcut>⌘H</CommandShortcut></CommandItem>
              <CommandItem><InboxIcon /><span>Inbox</span><CommandShortcut>⌘I</CommandShortcut></CommandItem>
              <CommandItem><FileTextIcon /><span>Documents</span><CommandShortcut>⌘D</CommandShortcut></CommandItem>
              <CommandItem><FolderIcon /><span>Folders</span><CommandShortcut>⌘F</CommandShortcut></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem><PlusIcon /><span>New File</span><CommandShortcut>⌘N</CommandShortcut></CommandItem>
              <CommandItem><FolderPlusIcon /><span>New Folder</span><CommandShortcut>⇧⌘N</CommandShortcut></CommandItem>
              <CommandItem><CopyIcon /><span>Copy</span><CommandShortcut>⌘C</CommandShortcut></CommandItem>
              <CommandItem><ScissorsIcon /><span>Cut</span><CommandShortcut>⌘X</CommandShortcut></CommandItem>
              <CommandItem><ClipboardPasteIcon /><span>Paste</span><CommandShortcut>⌘V</CommandShortcut></CommandItem>
              <CommandItem><TrashIcon /><span>Delete</span><CommandShortcut>⌫</CommandShortcut></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="View">
              <CommandItem><LayoutGridIcon /><span>Grid View</span></CommandItem>
              <CommandItem><ListIcon /><span>List View</span></CommandItem>
              <CommandItem><ZoomInIcon /><span>Zoom In</span><CommandShortcut>⌘+</CommandShortcut></CommandItem>
              <CommandItem><ZoomOutIcon /><span>Zoom Out</span><CommandShortcut>⌘-</CommandShortcut></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem><UserIcon /><span>Profile</span><CommandShortcut>⌘P</CommandShortcut></CommandItem>
              <CommandItem><CreditCardIcon /><span>Billing</span><CommandShortcut>⌘B</CommandShortcut></CommandItem>
              <CommandItem><SettingsIcon /><span>Settings</span><CommandShortcut>⌘S</CommandShortcut></CommandItem>
              <CommandItem><BellIcon /><span>Notifications</span></CommandItem>
              <CommandItem><HelpCircleIcon /><span>Help & Support</span></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tools">
              <CommandItem><CalculatorIcon /><span>Calculator</span></CommandItem>
              <CommandItem><CalendarIcon /><span>Calendar</span></CommandItem>
              <CommandItem><ImageIcon /><span>Image Editor</span></CommandItem>
              <CommandItem><CodeIcon /><span>Code Editor</span></CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`,preview:L.createElement(()=>{let[e,t]=L.useState(!1);return L.createElement(`div`,{className:`flex flex-col gap-4`},L.createElement(f,{variant:`outline`,onClick:()=>t(!0),className:`w-fit`},`Open Menu`),L.createElement(y,{open:e,onOpenChange:t},L.createElement(p,{},L.createElement(E,{placeholder:`Type a command or search...`}),L.createElement(_,{},L.createElement(O,{},`No results found.`),L.createElement(C,{heading:`Navigation`},L.createElement(x,{},L.createElement(v,{}),L.createElement(`span`,{},`Home`),L.createElement(D,{},`⌘H`)),L.createElement(x,{},L.createElement(c,{}),L.createElement(`span`,{},`Inbox`),L.createElement(D,{},`⌘I`)),L.createElement(x,{},L.createElement(s,{}),L.createElement(`span`,{},`Documents`),L.createElement(D,{},`⌘D`)),L.createElement(x,{},L.createElement(k,{}),L.createElement(`span`,{},`Folders`),L.createElement(D,{},`⌘F`))),L.createElement(w),L.createElement(C,{heading:`Actions`},L.createElement(x,{},L.createElement(h,{}),L.createElement(`span`,{},`New File`),L.createElement(D,{},`⌘N`)),L.createElement(x,{},L.createElement(j,{}),L.createElement(`span`,{},`New Folder`),L.createElement(D,{},`⇧⌘N`)),L.createElement(x,{},L.createElement(T,{}),L.createElement(`span`,{},`Copy`),L.createElement(D,{},`⌘C`)),L.createElement(x,{},L.createElement(o,{}),L.createElement(`span`,{},`Cut`),L.createElement(D,{},`⌘X`)),L.createElement(x,{},L.createElement(a,{}),L.createElement(`span`,{},`Paste`),L.createElement(D,{},`⌘V`)),L.createElement(x,{},L.createElement(u,{}),L.createElement(`span`,{},`Delete`),L.createElement(D,{},`⌫`))),L.createElement(w),L.createElement(C,{heading:`View`},L.createElement(x,{},L.createElement(N,{}),L.createElement(`span`,{},`Grid View`)),L.createElement(x,{},L.createElement(P,{}),L.createElement(`span`,{},`List View`)),L.createElement(x,{},L.createElement(m,{}),L.createElement(`span`,{},`Zoom In`),L.createElement(D,{},`⌘+`)),L.createElement(x,{},L.createElement(I,{}),L.createElement(`span`,{},`Zoom Out`),L.createElement(D,{},`⌘-`))),L.createElement(w),L.createElement(C,{heading:`Account`},L.createElement(x,{},L.createElement(d,{}),L.createElement(`span`,{},`Profile`),L.createElement(D,{},`⌘P`)),L.createElement(x,{},L.createElement(b,{}),L.createElement(`span`,{},`Billing`),L.createElement(D,{},`⌘B`)),L.createElement(x,{},L.createElement(l,{}),L.createElement(`span`,{},`Settings`),L.createElement(D,{},`⌘S`)),L.createElement(x,{},L.createElement(g,{}),L.createElement(`span`,{},`Notifications`)),L.createElement(x,{},L.createElement(i,{}),L.createElement(`span`,{},`Help & Support`))),L.createElement(w),L.createElement(C,{heading:`Tools`},L.createElement(x,{},L.createElement(A,{}),L.createElement(`span`,{},`Calculator`)),L.createElement(x,{},L.createElement(r,{}),L.createElement(`span`,{},`Calendar`)),L.createElement(x,{},L.createElement(M,{}),L.createElement(`span`,{},`Image Editor`)),L.createElement(x,{},L.createElement(S,{}),L.createElement(`span`,{},`Code Editor`)))))))})}],props:[{name:`className`,type:`string`,description:`Additional CSS classes to apply to the command.`},{name:`shouldFilter`,type:`boolean`,description:`Whether the command should filter items based on the search value.`,default:`true`},{name:`filter`,type:`(value: string, search: string) => number`,description:`Custom filter function for command items.`},{name:`value`,type:`string`,description:`The selected command value.`},{name:`onValueChange`,type:`(value: string) => void`,description:`Callback fired when the selected command value changes.`},{name:`loop`,type:`boolean`,description:`Whether to loop through items when using arrow keys.`,default:`false`}]};export{R as commandDoc};