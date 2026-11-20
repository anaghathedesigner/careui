import{i as e,l as t,t as n}from"./dist-DtVyZPdI.js";import{t as r}from"./loader-sOAn5YMt.js";import{t as i}from"./button-DTwq4-az.js";import{Ct as a,Da as o,Dr as s,Et as c,St as l,Tt as u,di as d,fi as f,li as p,mi as m,ui as h,wt as g,xt as _}from"./index-Ck2hFZuL.js";import{n as v,t as y}from"./spinner-CNEvLfBE.js";import{c as b,r as x,s as S,t as C}from"./item-CMkwMgPZ.js";var w=t(e(),1),T={id:`spinner`,name:`Spinner`,description:`An indicator that can be used to show a loading state.`,installation:{cli:`npx shadcn@latest add spinner`,manual:`Copy and paste the spinner component source code into your project.`},usage:`import { Spinner } from "@/components/ui/spinner"`,preview:{code:`import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  )
}`,component:w.createElement(`div`,{className:`flex w-full max-w-xs flex-col gap-4 [--radius:1rem]`},w.createElement(C,{variant:`muted`},w.createElement(S,{},w.createElement(v,{})),w.createElement(x,{},w.createElement(b,{className:`line-clamp-1`},`Processing payment...`)),w.createElement(x,{className:`flex-none justify-end`},w.createElement(`span`,{className:`text-sm tabular-nums`},`$100.00`))))},examples:[{name:`Size`,description:`Use the size-* utility class to change the size of the spinner.`,code:`import { Spinner } from "@/components/ui/spinner"

export function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex items-center gap-6`},w.createElement(v,{className:`size-3`}),w.createElement(v,{className:`size-4`}),w.createElement(v,{className:`size-6`}),w.createElement(v,{className:`size-8`}))},{name:`Button`,description:`Add a spinner to a button to indicate a loading state. Place the <Spinner /> before the label with data-icon="inline-start" for a start position, or after the label with data-icon="inline-end" for an end position.`,code:`import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex flex-col items-center gap-4`},w.createElement(i,{disabled:!0,size:`sm`},w.createElement(v,{"data-icon":`inline-start`}),`Loading...`),w.createElement(i,{variant:`outline`,disabled:!0,size:`sm`},w.createElement(v,{"data-icon":`inline-start`}),`Please wait`),w.createElement(i,{variant:`secondary`,disabled:!0,size:`sm`},w.createElement(v,{"data-icon":`inline-start`}),`Processing`))},{name:`Badge`,description:`Add a spinner to a badge to indicate a loading state. Place the <Spinner /> before the label with data-icon="inline-start" for a start position, or after the label with data-icon="inline-end" for an end position.`,code:`import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Processing
      </Badge>
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex items-center gap-4 [--radius:1.2rem]`},w.createElement(s,{},w.createElement(v,{"data-icon":`inline-start`}),`Syncing`),w.createElement(s,{variant:`secondary`},w.createElement(v,{"data-icon":`inline-start`}),`Updating`),w.createElement(s,{variant:`outline`},w.createElement(v,{"data-icon":`inline-start`}),`Processing`))},{name:`Input Group`,description:`Add a spinner to an input group to indicate a loading or validation state.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { ArrowUpIcon } from "lucide-react"

export function SpinnerInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Send a message..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> Validating...
          <InputGroupButton className="ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex w-full max-w-md flex-col gap-4`},w.createElement(p,{},w.createElement(f,{placeholder:`Send a message...`,disabled:!0}),w.createElement(h,{align:`inline-end`},w.createElement(v,{}))),w.createElement(p,{},w.createElement(m,{placeholder:`Send a message...`,disabled:!0}),w.createElement(h,{align:`block-end`},w.createElement(v,{}),` Validating...`,w.createElement(d,{className:`ml-auto`,variant:`default`},w.createElement(o,{}),w.createElement(`span`,{className:`sr-only`},`Send`)))))},{name:`Empty`,description:`Use a spinner in an empty state to indicate a loading or processing state.`,code:`import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerEmpty() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}`,preview:w.createElement(_,{className:`w-full`},w.createElement(g,{},w.createElement(u,{variant:`icon`},w.createElement(v,{})),w.createElement(c,{},`Processing your request`),w.createElement(a,{},`Please wait while we process your request. Do not refresh the page.`)),w.createElement(l,{},w.createElement(i,{variant:`outline`,size:`sm`},`Cancel`)))},{name:`Customization`,description:`Replace the default spinner icon with any icon by editing the Spinner component.`,code:`import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex items-center gap-4`},w.createElement(r,{role:`status`,"aria-label":`Loading`,className:n(`size-4 animate-spin`)}))},{name:`RTL`,description:`Spinner renders correctly in right-to-left layouts.`,code:`"use client"

import * as React from "react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      title: "Processing payment...",
      amount: "$100.00",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      title: "جاري معالجة الدفع...",
      amount: "١٠٠.٠٠ دولار",
    },
  },
  he: {
    dir: "rtl",
    values: {
      title: "מעבד תשלום...",
      amount: "$100.00",
    },
  },
}

export function SpinnerRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div
      className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]"
      dir={dir}
    >
      <Item variant="muted" dir={dir}>
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">{t.title}</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">{t.amount}</span>
        </ItemContent>
      </Item>
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex w-full max-w-xs flex-col gap-4 [--radius:1rem]`,dir:`rtl`},w.createElement(C,{variant:`muted`},w.createElement(S,{},w.createElement(v,{})),w.createElement(x,{},w.createElement(b,{className:`line-clamp-1`},`جاري معالجة الدفع...`)),w.createElement(x,{className:`flex-none justify-end`},w.createElement(`span`,{className:`text-sm tabular-nums`},`١٠٠.٠٠ دولار`))))},{name:`Radial Spinner`,description:`A 12-bar radial spinner — the classic iOS/macOS activity indicator. Use size-* utilities to scale; inherits currentColor.`,code:`import { RadialSpinner } from "@/components/ui/spinner"

export function RadialSpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <RadialSpinner className="size-3" />
      <RadialSpinner className="size-4" />
      <RadialSpinner className="size-6" />
      <RadialSpinner className="size-8" />
    </div>
  )
}`,preview:w.createElement(`div`,{className:`flex items-center gap-6`},w.createElement(y,{className:`size-3`}),w.createElement(y,{className:`size-4`}),w.createElement(y,{className:`size-6`}),w.createElement(y,{className:`size-8`}))}]};export{T as spinnerDoc};