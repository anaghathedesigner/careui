import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{Sa as i}from"./index-Ck2hFZuL.js";var a=t(e(),1),o=n();function s({className:e,size:t=`default`,...n}){return(0,o.jsxs)(`div`,{className:r(`group/native-select relative w-fit has-[select:disabled]:opacity-50`,e),"data-slot":`native-select-wrapper`,"data-size":t,children:[(0,o.jsx)(`select`,{"data-slot":`native-select`,"data-size":t,className:`border-input selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent py-1 pr-8 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] outline-none select-none focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:ring-3 data-[size=sm]:h-8`,...n}),(0,o.jsx)(i,{className:`text-muted-foreground pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 select-none`,"aria-hidden":`true`,"data-slot":`native-select-icon`})]})}function c({...e}){return(0,o.jsx)(`option`,{"data-slot":`native-select-option`,...e})}function l({className:e,...t}){return(0,o.jsx)(`optgroup`,{"data-slot":`native-select-optgroup`,className:r(e),...t})}var u={id:`native-select`,name:`Native Select`,description:`A styled native HTML select element with consistent design system integration.`,installation:{cli:`npx shadcn@latest add native-select`,manual:`Copy and paste the native-select component source code into your project.`},usage:`import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"`,preview:{code:`import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
      <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
    </NativeSelect>
  )
}`,component:a.createElement(s,null,a.createElement(c,{value:``},`Select status`),a.createElement(c,{value:`todo`},`Todo`),a.createElement(c,{value:`in-progress`},`In Progress`),a.createElement(c,{value:`done`},`Done`),a.createElement(c,{value:`cancelled`},`Cancelled`))},examples:[{name:`Groups`,description:`Use NativeSelectOptGroup to organize options into categories.`,code:`import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectGroups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Sales">
        <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          Account Manager
        </NativeSelectOption>
        <NativeSelectOption value="sales-director">
          Sales Director
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Operations">
        <NativeSelectOption value="support">
          Customer Support
        </NativeSelectOption>
        <NativeSelectOption value="product-manager">
          Product Manager
        </NativeSelectOption>
        <NativeSelectOption value="ops-manager">
          Operations Manager
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}`,preview:a.createElement(s,null,a.createElement(c,{value:``},`Select department`),a.createElement(l,{label:`Engineering`},a.createElement(c,{value:`frontend`},`Frontend`),a.createElement(c,{value:`backend`},`Backend`),a.createElement(c,{value:`devops`},`DevOps`)),a.createElement(l,{label:`Sales`},a.createElement(c,{value:`sales-rep`},`Sales Rep`),a.createElement(c,{value:`account-manager`},`Account Manager`),a.createElement(c,{value:`sales-director`},`Sales Director`)),a.createElement(l,{label:`Operations`},a.createElement(c,{value:`support`},`Customer Support`),a.createElement(c,{value:`product-manager`},`Product Manager`),a.createElement(c,{value:`ops-manager`},`Operations Manager`)))},{name:`Disabled`,description:`Add the disabled prop to the NativeSelect component to disable the select.`,code:`import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectDisabled() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">Disabled</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  )
}`,preview:a.createElement(s,{disabled:!0},a.createElement(c,{value:``},`Disabled`),a.createElement(c,{value:`apple`},`Apple`),a.createElement(c,{value:`banana`},`Banana`),a.createElement(c,{value:`blueberry`},`Blueberry`))},{name:`Invalid`,description:`Use aria-invalid to show validation errors.`,code:`import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectInvalid() {
  return (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">Error state</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  )
}`,preview:a.createElement(s,{"aria-invalid":`true`},a.createElement(c,{value:``},`Error state`),a.createElement(c,{value:`apple`},`Apple`),a.createElement(c,{value:`banana`},`Banana`),a.createElement(c,{value:`blueberry`},`Blueberry`))}]};export{u as nativeSelectDoc};