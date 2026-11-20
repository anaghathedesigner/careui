import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./check-CfIGZGct.js";import{t as i}from"./corner-down-left-LESxYacP.js";import{t as a}from"./loader-sOAn5YMt.js";import{t as o}from"./refresh-ccw-Cv3osxFE.js";import{t as s}from"./search-Dl4KIBBW.js";import{Ca as c,Dn as l,En as u,On as d,Rn as f,Sa as p,Wi as m,Zr as h,da as g,di as _,fa as v,fi as y,ft as b,ht as x,li as S,mi as C,mt as w,n as T,pa as E,pi as D,r as O,ra as k,s as A,sa as j,ui as M,ut as N,wn as P}from"./index-Ck2hFZuL.js";import{n as F}from"./spinner-CNEvLfBE.js";var I=n(`file-code-corner`,[[`path`,{d:`M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35`,key:`1wthlu`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`m5 16-3 3 3 3`,key:`331omg`}],[`path`,{d:`m9 22 3-3-3-3`,key:`lsp7cz`}]]),L=t(e(),1),R={id:`input-group`,name:`Input Group`,description:`Add addons, buttons, and helper content to inputs.`,installation:{cli:`npx shadcn@latest add input-group`,manual:`Copy and paste the input group component source code into your project.`},usage:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"`,preview:{code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from "lucide-react"

export function InputGroupDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  )
}`,component:L.createElement(S,{className:`max-w-xs`},L.createElement(y,{placeholder:`Search...`}),L.createElement(M,{},L.createElement(s)),L.createElement(M,{align:`inline-end`},`12 results`))},examples:[{name:`Icon`,description:`Use icons as addons at the start or end of the input.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"

export function InputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:L.createElement(`div`,{className:`grid w-full max-w-sm gap-6`},L.createElement(S,{},L.createElement(y,{placeholder:`Search...`}),L.createElement(M,{},L.createElement(s))),L.createElement(S,{},L.createElement(y,{type:`email`,placeholder:`Enter your email`}),L.createElement(M,{},L.createElement(k))),L.createElement(S,{},L.createElement(y,{placeholder:`Card number`}),L.createElement(M,{},L.createElement(v)),L.createElement(M,{align:`inline-end`},L.createElement(r))),L.createElement(S,{},L.createElement(y,{placeholder:`Card number`}),L.createElement(M,{align:`inline-end`},L.createElement(m),L.createElement(j))))},{name:`Text`,description:`Use text addons for prefixes and suffixes like currency symbols or domains.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="pl-0.5!" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs text-muted-foreground">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:L.createElement(`div`,{className:`grid w-full max-w-sm gap-6`},L.createElement(S,{},L.createElement(M,{},L.createElement(D,{},`$`)),L.createElement(y,{placeholder:`0.00`}),L.createElement(M,{align:`inline-end`},L.createElement(D,{},`USD`))),L.createElement(S,{},L.createElement(M,{},L.createElement(D,{},`https://`)),L.createElement(y,{placeholder:`example.com`,className:`pl-0.5!`}),L.createElement(M,{align:`inline-end`},L.createElement(D,{},`.com`))),L.createElement(S,{},L.createElement(y,{placeholder:`Enter your username`}),L.createElement(M,{align:`inline-end`},L.createElement(D,{},`@company.com`))),L.createElement(S,{},L.createElement(C,{placeholder:`Enter your message`}),L.createElement(M,{align:`block-end`},L.createElement(D,{className:`text-xs text-muted-foreground`},`120 characters left`))))},{name:`Kbd`,description:`Show keyboard shortcut hints inside the input.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { SearchIcon } from "lucide-react"

export function InputGroupKbd() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}`,preview:L.createElement(S,{className:`max-w-sm`},L.createElement(y,{placeholder:`Search...`}),L.createElement(M,{},L.createElement(s,{className:`text-muted-foreground`})),L.createElement(M,{align:`inline-end`},L.createElement(h,{},`⌘K`)))},{name:`Button`,description:`Add action buttons inside the input group.`,code:`"use client"

import * as React from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CheckIcon, CopyIcon, InfoIcon, StarIcon } from "lucide-react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn", "url")
            }}
          >
            {isCopied("url") ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="tertiary" size="icon-xs">
                <InfoIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">
          https://
        </InputGroupAddon>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <StarIcon
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="tertiary" size="xs"><SearchIcon />Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:L.createElement(function(){let[e,t]=L.useState(!1),[n,i]=L.useState(!1);return L.createElement(`div`,{className:`grid w-full max-w-sm gap-6`},L.createElement(S,{},L.createElement(y,{placeholder:`https://x.com/shadcn`,readOnly:!0}),L.createElement(M,{align:`inline-end`},L.createElement(_,{"aria-label":`Copy`,title:`Copy`,size:`icon-xs`,onClick:()=>{navigator.clipboard.writeText(`https://x.com/shadcn`),t(!0),setTimeout(()=>t(!1),2e3)}},e?L.createElement(r):L.createElement(E)))),L.createElement(S,{className:``},L.createElement(T,{},L.createElement(A,{asChild:!0},L.createElement(M,{},L.createElement(_,{variant:`tertiary`,size:`icon-xs`},L.createElement(j)))),L.createElement(O,{align:`start`,className:`flex flex-col gap-1 rounded-xl text-sm`},L.createElement(`p`,{className:`font-medium`},`Your connection is not secure.`),L.createElement(`p`,{},`You should not enter any sensitive information on this site.`))),L.createElement(M,{className:`pl-1.5 text-muted-foreground`},`https://`),L.createElement(y,{}),L.createElement(M,{align:`inline-end`},L.createElement(_,{size:`icon-xs`,onClick:()=>i(e=>!e)},L.createElement(m,{className:n?`fill-blue-600 stroke-blue-600`:void 0})))),L.createElement(S,{},L.createElement(y,{placeholder:`Type to search...`}),L.createElement(M,{align:`inline-end`},L.createElement(_,{variant:`tertiary`,size:`xs`},L.createElement(s),`Search`))))})},{name:`Dropdown`,description:`Combine input groups with dropdown menus.`,code:`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

export function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="More"
                size="icon-xs"
                className="shadow-sm"
              >
                <MoreHorizontal />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Copy path</DropdownMenuItem>
                <DropdownMenuItem>Open location</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" className="pr-1.5! text-xs shadow-sm">
                Search In... <ChevronDownIcon className="size-3" />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
              <DropdownMenuGroup>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Blog Posts</DropdownMenuItem>
                <DropdownMenuItem>Changelog</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:L.createElement(`div`,{className:`grid w-full max-w-sm gap-4`},L.createElement(S,{},L.createElement(y,{placeholder:`Enter file name`}),L.createElement(M,{align:`inline-end`},L.createElement(P,{},L.createElement(f,{asChild:!0},L.createElement(_,{variant:`ghost`,"aria-label":`More`,size:`icon-xs`,className:`shadow-sm`},L.createElement(g))),L.createElement(u,{align:`end`},L.createElement(l,{},L.createElement(d,{},`Settings`),L.createElement(d,{},`Copy path`),L.createElement(d,{},`Open location`)))))),L.createElement(S,{className:``},L.createElement(y,{placeholder:`Enter search query`}),L.createElement(M,{align:`inline-end`},L.createElement(P,{},L.createElement(f,{asChild:!0},L.createElement(_,{variant:`tertiary`,size:`xs`,className:`no-underline shadow-sm`},`Search In `,L.createElement(p,{className:`size-4.5`}))),L.createElement(u,{align:`end`,className:``},L.createElement(l,{},L.createElement(d,{},`Documentation`),L.createElement(d,{},`Blog Posts`),L.createElement(d,{},`Changelog`)))))))},{name:`Spinner`,description:`Show loading spinners inside the input group to indicate async activity.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { LoaderIcon } from "lucide-react"

export function InputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Searching..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Processing..." />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Saving changes..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Refreshing data..." />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">
            Please wait...
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:L.createElement(`div`,{className:`grid w-full max-w-sm gap-4`},L.createElement(S,{},L.createElement(y,{placeholder:`Searching...`}),L.createElement(M,{align:`inline-end`},L.createElement(F))),L.createElement(S,{},L.createElement(y,{placeholder:`Processing...`}),L.createElement(M,{},L.createElement(F))),L.createElement(S,{},L.createElement(y,{placeholder:`Saving changes...`}),L.createElement(M,{align:`inline-end`},L.createElement(D,{},`Saving...`),L.createElement(F))),L.createElement(S,{},L.createElement(y,{placeholder:`Refreshing data...`}),L.createElement(M,{},L.createElement(a,{className:`animate-spin`})),L.createElement(M,{align:`inline-end`},L.createElement(D,{className:`text-muted-foreground`},`Please wait...`))))},{name:`Textarea`,description:`Use block addons with a textarea for headers, footers, and action toolbars.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  CornerDownLeftIcon,
  CopyIcon,
  FileCode2Icon,
  RefreshCcwIcon,
} from "lucide-react"

export function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          placeholder="console.log('Hello, world!');"
          className="min-h-50"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <CornerDownLeftIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <FileCode2Icon />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <RefreshCcwIcon />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:L.createElement(`div`,{className:`grid w-full max-w-md gap-4`},L.createElement(S,{},L.createElement(C,{placeholder:`console.log('Hello, world!');`,className:`min-h-50`}),L.createElement(M,{align:`block-end`,className:`border-t`},L.createElement(D,{},`Line 1, Column 1`),L.createElement(_,{size:`sm`,className:`ml-auto`,variant:`default`},`Run `,L.createElement(i))),L.createElement(M,{align:`block-start`,className:`border-b`},L.createElement(D,{className:`font-mono font-medium`},L.createElement(I),`script.js`),L.createElement(_,{className:`ml-auto`,size:`icon-xs`},L.createElement(o)),L.createElement(_,{variant:`ghost`,size:`icon-xs`},L.createElement(E)))))},{name:`inline-start`,description:`Use align="inline-start" to position the addon at the start of the input. This is the default.`,code:`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

export function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  )
}`,preview:L.createElement(N,{className:`max-w-sm`},L.createElement(x,{htmlFor:`inline-start-input`},`Input`),L.createElement(S,{},L.createElement(y,{id:`inline-start-input`,placeholder:`Search...`}),L.createElement(M,{align:`inline-start`},L.createElement(s,{className:`text-muted-foreground`}))),L.createElement(b,{},`Icon positioned at the start.`))},{name:`inline-end`,description:`Use align="inline-end" to position the addon at the end of the input.`,code:`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { CalendarDaysIcon } from "lucide-react"

export function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Date</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-end-input" placeholder="Select a date" />
        <InputGroupAddon align="inline-end">
          <CalendarDaysIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  )
}`,preview:L.createElement(N,{className:`max-w-sm`},L.createElement(x,{htmlFor:`inline-end-input`},`Date`),L.createElement(S,{},L.createElement(y,{id:`inline-end-input`,placeholder:`Select a date`}),L.createElement(M,{align:`inline-end`},L.createElement(c))),L.createElement(b,{},`Icon positioned at the end.`))},{name:`block-start`,description:`Use align="block-start" to position the addon above the input.`,code:`import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { CopyIcon, FileCode2Icon } from "lucide-react"

export function InputGroupBlockStart() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-start-input">Input</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput
            id="block-start-input"
            placeholder="Enter your name"
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-start-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCode2Icon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">Copy</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the textarea.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}`,preview:L.createElement(w,{className:`max-w-sm`},L.createElement(N,{},L.createElement(x,{htmlFor:`block-start-input`},`Input`),L.createElement(S,{className:`h-auto`},L.createElement(y,{id:`block-start-input`,placeholder:`Enter your name`}),L.createElement(M,{align:`block-start`},L.createElement(D,{},`Full Name`))),L.createElement(b,{},`Header positioned above the input.`)),L.createElement(N,{},L.createElement(x,{htmlFor:`block-start-textarea`},`Textarea`),L.createElement(S,{},L.createElement(C,{id:`block-start-textarea`,placeholder:`console.log('Hello, world!');`,className:`font-mono text-sm`}),L.createElement(M,{align:`block-start`},L.createElement(I,{className:`text-muted-foreground`}),L.createElement(D,{className:`font-mono`},`script.js`),L.createElement(_,{size:`icon-xs`,className:`ml-auto`},L.createElement(E),L.createElement(`span`,{className:`sr-only`},`Copy`)))),L.createElement(b,{},`Header positioned above the textarea.`)))},{name:`block-end`,description:`Use align="block-end" to position the addon below the input.`,code:`import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupBlockEnd() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-end-input">Input</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Enter amount" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the input.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Write a comment..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the textarea.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}`,preview:L.createElement(w,{className:`max-w-sm`},L.createElement(N,{},L.createElement(x,{htmlFor:`block-end-input`},`Input`),L.createElement(S,{className:`h-auto`},L.createElement(y,{id:`block-end-input`,placeholder:`Enter amount`}),L.createElement(M,{align:`block-end`},L.createElement(D,{},`USD`))),L.createElement(b,{},`Footer positioned below the input.`)),L.createElement(N,{},L.createElement(x,{htmlFor:`block-end-textarea`},`Textarea`),L.createElement(S,{},L.createElement(C,{id:`block-end-textarea`,placeholder:`Write a comment...`}),L.createElement(M,{align:`block-end`},L.createElement(D,{},`0/280`),L.createElement(_,{variant:`default`,size:`sm`,className:`ml-auto`},`Post`))),L.createElement(b,{},`Footer positioned below the textarea.`)))}],props:[{name:`align`,type:`"inline-start" | "inline-end" | "block-start" | "block-end"`,description:`Position of the addon relative to the input (InputGroupAddon).`,default:`"inline-start"`},{name:`size`,type:`"xs" | "icon-xs" | "sm" | "icon-sm"`,description:`Size of the button (InputGroupButton).`,default:`"xs"`},{name:`variant`,type:`"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`,description:`Visual variant of the button (InputGroupButton).`,default:`"ghost"`}]};export{R as inputGroupDoc};