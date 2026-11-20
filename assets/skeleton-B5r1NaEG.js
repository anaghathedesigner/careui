import{i as e,l as t}from"./dist-DtVyZPdI.js";import{Rr as n,Sr as r,Tr as i,br as a}from"./index-Ck2hFZuL.js";var o=t(e(),1),s={id:`skeleton`,name:`Skeleton`,description:`Use to show a placeholder while content is loading.`,installation:{cli:`npx shadcn@latest add skeleton`,manual:`Copy and paste the skeleton component source code into your project.`},usage:`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-5 w-25 rounded-full" />`,preview:{code:`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  )
}`,component:o.createElement(`div`,{className:`flex items-center gap-4`},o.createElement(n,{className:`h-12 w-12 rounded-full`}),o.createElement(`div`,{className:`space-y-2`},o.createElement(n,{className:`h-4 w-62.5`}),o.createElement(n,{className:`h-4 w-50`})))},examples:[{name:`Avatar`,description:`A skeleton placeholder for an avatar with name and handle.`,code:`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonAvatar() {
  return (
    <div className="flex w-fit items-center gap-4">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-37.5" />
        <Skeleton className="h-4 w-25" />
      </div>
    </div>
  )
}`,preview:o.createElement(`div`,{className:`flex w-fit items-center gap-4`},o.createElement(n,{className:`size-10 shrink-0 rounded-full`}),o.createElement(`div`,{className:`grid gap-2`},o.createElement(n,{className:`h-4 w-37.5`}),o.createElement(n,{className:`h-4 w-25`})))},{name:`Card`,description:`A skeleton placeholder for a card with header and media.`,code:`import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  )
}`,preview:o.createElement(a,{className:`w-full max-w-xs`},o.createElement(i,{},o.createElement(n,{className:`h-4 w-2/3`}),o.createElement(n,{className:`h-4 w-1/2`})),o.createElement(r,{},o.createElement(n,{className:`aspect-video w-full`})))},{name:`Text`,description:`A skeleton placeholder for a block of text lines.`,code:`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonText() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}`,preview:o.createElement(`div`,{className:`flex w-full max-w-xs flex-col gap-2`},o.createElement(n,{className:`h-4 w-full`}),o.createElement(n,{className:`h-4 w-full`}),o.createElement(n,{className:`h-4 w-3/4`}))},{name:`Form`,description:`A skeleton placeholder for a form with fields and a submit button.`,code:`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonForm() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-full" />
      </div>
      <Skeleton className="h-8 w-24" />
    </div>
  )
}`,preview:o.createElement(`div`,{className:`flex w-full max-w-xs flex-col gap-7`},o.createElement(`div`,{className:`flex flex-col gap-3`},o.createElement(n,{className:`h-4 w-20`}),o.createElement(n,{className:`h-8 w-full`})),o.createElement(`div`,{className:`flex flex-col gap-3`},o.createElement(n,{className:`h-4 w-24`}),o.createElement(n,{className:`h-8 w-full`})),o.createElement(n,{className:`h-8 w-24`}))},{name:`Table`,description:`A skeleton placeholder for a table with rows and columns.`,code:`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTable() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex gap-4" key={index}>
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  )
}`,preview:o.createElement(`div`,{className:`flex w-full max-w-sm flex-col gap-2`},...Array.from({length:5},(e,t)=>o.createElement(`div`,{key:t,className:`flex gap-4`},o.createElement(n,{className:`h-4 flex-1`}),o.createElement(n,{className:`h-4 w-24`}),o.createElement(n,{className:`h-4 w-20`}))))},{name:`RTL`,description:`Skeleton renders correctly in right-to-left layouts.`,code:`"use client"

import * as React from "react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { Skeleton } from "@/components/ui/skeleton"

const translations: Translations = {
  en: { dir: "ltr", values: {} },
  ar: { dir: "rtl", values: {} },
  he: { dir: "rtl", values: {} },
}

export function SkeletonRtl() {
  const { dir } = useTranslation(translations, "ar")

  return (
    <div className="flex items-center gap-4" dir={dir}>
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  )
}`,preview:o.createElement(`div`,{className:`flex items-center gap-4`,dir:`rtl`},o.createElement(n,{className:`h-12 w-12 rounded-full`}),o.createElement(`div`,{className:`space-y-2`},o.createElement(n,{className:`h-4 w-62.5`}),o.createElement(n,{className:`h-4 w-50`})))}]};export{s as skeletonDoc};