import{i as e,l as t}from"./dist-DtVyZPdI.js";import{U as n,bt as r}from"./index-Ck2hFZuL.js";var i=t(e(),1),a={id:`slider`,name:`Slider`,description:`An input where the user selects a value from within a given range.`,installation:{cli:`npx shadcn@latest add slider`,manual:`Copy and paste the slider component source code into your project.`},usage:`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[33]} max={100} step={1} />`,preview:{code:`import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}`,component:i.createElement(n,{defaultValue:[75],max:100,step:1,className:`mx-auto w-full max-w-xs`})},examples:[{name:`Range`,description:`Use an array with two values for a range slider.`,code:`import { Slider } from "@/components/ui/slider"

export function SliderRange() {
  return (
    <Slider
      defaultValue={[25, 50]}
      max={100}
      step={5}
      className="mx-auto w-full max-w-xs"
    />
  )
}`,preview:i.createElement(n,{defaultValue:[25,50],max:100,step:5,className:`mx-auto w-full max-w-xs`})},{name:`Multiple Thumbs`,description:`Use an array with multiple values for multiple thumbs.`,code:`import { Slider } from "@/components/ui/slider"

export function SliderMultiple() {
  return (
    <Slider
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
      className="mx-auto w-full max-w-xs"
    />
  )
}`,preview:i.createElement(n,{defaultValue:[10,20,70],max:100,step:10,className:`mx-auto w-full max-w-xs`})},{name:`Vertical`,description:'Use `orientation="vertical"` for a vertical slider.',code:`import { Slider } from "@/components/ui/slider"

export function SliderVertical() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        orientation="vertical"
        className="h-40"
      />
      <Slider
        defaultValue={[25]}
        max={100}
        step={1}
        orientation="vertical"
        className="h-40"
      />
    </div>
  )
}`,preview:i.createElement(`div`,{className:`mx-auto flex w-full max-w-xs items-center justify-center gap-6`},i.createElement(n,{defaultValue:[50],max:100,step:1,orientation:`vertical`,className:`h-40`}),i.createElement(n,{defaultValue:[25],max:100,step:1,orientation:`vertical`,className:`h-40`}))},{name:`Controlled`,description:`A controlled slider that displays the current value.`,code:`import * as React from "react"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={(v) => setValue(Array.isArray(v) ? v : [v])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  )
}`,preview:i.createElement(function(){let[e,t]=i.useState([.3,.7]);return i.createElement(`div`,{className:`mx-auto grid w-full max-w-xs gap-3`},i.createElement(`div`,{className:`flex items-center justify-between gap-2`},i.createElement(r,{htmlFor:`slider-demo-temperature`},`Temperature`),i.createElement(`span`,{className:`text-muted-foreground text-sm`},e.join(`, `))),i.createElement(n,{id:`slider-demo-temperature`,value:e,onValueChange:e=>t(Array.isArray(e)?e:[e]),min:0,max:1,step:.1}))})},{name:`Disabled`,description:"Use the `disabled` prop to disable the slider.",code:`import { Slider } from "@/components/ui/slider"

export function SliderDisabled() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="mx-auto w-full max-w-xs"
    />
  )
}`,preview:i.createElement(n,{defaultValue:[50],max:100,step:1,disabled:!0,className:`mx-auto w-full max-w-xs`})}]};export{a as sliderDoc};