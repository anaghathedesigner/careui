import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{Mr as r}from"./index-Ck2hFZuL.js";var i=t(e(),1),a={id:`sonner`,name:`Sonner`,description:`An opinionated toast component for React.`,installation:{cli:`npx shadcn@latest add sonner`,manual:`Copy and paste the sonner component source code into your project.`},usage:`import { toast } from "sonner"

toast("Event has been created.")`,preview:{code:`"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          position: "top-center",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}`,component:i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{description:`Sunday, December 03, 2023 at 9:00 AM`,position:`top-center`,action:{label:`Undo`,onClick:()=>console.log(`Undo`)}})},`Show Toast`)},examples:[{name:`Types`,description:`All available toast types: default, success, info, warning, error, and promise.`,code:`"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-center" })}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Event has been created", { position: "top-center" })}>
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Be at the area 10 minutes before the event time", { position: "top-center" })}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Event start time cannot be earlier than 8am", { position: "top-center" })}
      >
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Event has not been created", { position: "top-center" })}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise(
            () => new Promise((resolve) => setTimeout(() => resolve({ name: "Event" }), 2000)),
            {
              loading: "Loading...",
              success: (data) => \`\${(data as { name: string }).name} has been created\`,
              error: "Error",
              position: "top-center",
            }
          )
        }}
      >
        Promise
      </Button>
    </div>
  )
}`,preview:i.createElement(()=>i.createElement(`div`,{className:`flex flex-wrap gap-2`},i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`top-center`})},`Default`),i.createElement(n,{variant:`outline`,onClick:()=>r.success(`Event has been created`,{position:`top-center`})},`Success`),i.createElement(n,{variant:`outline`,onClick:()=>r.info(`Be at the area 10 minutes before the event time`,{position:`top-center`})},`Info`),i.createElement(n,{variant:`outline`,onClick:()=>r.warning(`Event start time cannot be earlier than 8am`,{position:`top-center`})},`Warning`),i.createElement(n,{variant:`outline`,onClick:()=>r.error(`Event has not been created`,{position:`top-center`})},`Error`),i.createElement(n,{variant:`outline`,onClick:()=>{r.promise(()=>new Promise(e=>setTimeout(()=>e({name:`Event`}),2e3)),{loading:`Loading...`,success:e=>`${e.name} has been created`,error:`Error`,position:`top-center`})}},`Promise`)))},{name:`Description`,description:`Add a description to provide more context to the toast.`,code:`"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerDescription() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
          position: "top-center",
        })
      }
    >
      Show Toast
    </Button>
  )
}`,preview:i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{description:`Monday, January 3rd at 6:00pm`,position:`top-center`})},`Show Toast`)},{name:`Position`,description:`Use the position option to change the position of the toast.`,code:`"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerPosition() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-left" })}>
        Top Left
      </Button>
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-center" })}>
        Top Center
      </Button>
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-right" })}>
        Top Right
      </Button>
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-left" })}>
        Bottom Left
      </Button>
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-center" })}>
        Bottom Center
      </Button>
      <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-right" })}>
        Bottom Right
      </Button>
    </div>
  )
}`,preview:i.createElement(()=>i.createElement(`div`,{className:`flex flex-wrap justify-center gap-2`},i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`top-left`})},`Top Left`),i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`top-center`})},`Top Center`),i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`top-right`})},`Top Right`),i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`bottom-left`})},`Bottom Left`),i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`bottom-center`})},`Bottom Center`),i.createElement(n,{variant:`outline`,onClick:()=>r(`Event has been created`,{position:`bottom-right`})},`Bottom Right`)))}]};export{a as sonnerDoc};