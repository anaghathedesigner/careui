import{i as e,l as t}from"./dist-DtVyZPdI.js";import{U as n,W as r,ht as i,ut as a}from"./index-Ck2hFZuL.js";var o=t(e(),1);function s(){let[e,t]=o.useState(13);return o.useEffect(()=>{let e=setTimeout(()=>t(66),500);return()=>clearTimeout(e)},[]),o.createElement(r,{value:e,className:`w-[60%]`})}function c(){let[e,t]=o.useState([50]);return o.createElement(`div`,{className:`flex w-full max-w-sm flex-col gap-4`},o.createElement(r,{value:e[0]}),o.createElement(n,{value:e,onValueChange:e=>t(Array.isArray(e)?e:[e]),min:0,max:100,step:1}))}var l={id:`progress`,name:`Progress`,description:`Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.`,installation:{cli:`npx shadcn@latest add progress`,manual:`Copy and paste the progress component source code into your project.`},usage:`import { Progress } from "@/components/ui/progress"

<Progress value={33} />`,preview:{code:`const [progress, setProgress] = React.useState(13)

React.useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

return <Progress value={progress} className="w-[60%]" />`,component:o.createElement(s)},examples:[{name:`Label`,description:`Use a Field component to add a label to the progress bar.`,code:`<Field className="w-full max-w-sm">
  <FieldLabel htmlFor="progress-upload">
    <span>Upload progress</span>
    <span className="ml-auto">66%</span>
  </FieldLabel>
  <Progress value={66} id="progress-upload" />
</Field>`,preview:o.createElement(a,{className:`w-full max-w-sm`},o.createElement(i,{htmlFor:`progress-upload`},o.createElement(`span`,{},`Upload progress`),o.createElement(`span`,{className:`ml-auto`},`66%`)),o.createElement(r,{value:66,id:`progress-upload`}))},{name:`Controlled`,description:`A progress bar that can be controlled by a slider.`,code:`const [value, setValue] = React.useState([50])

return (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Progress value={value[0]} />
    <Slider
      value={value}
      onValueChange={setValue}
      min={0}
      max={100}
      step={1}
    />
  </div>
)`,preview:o.createElement(c)}]};export{l as progressDoc};