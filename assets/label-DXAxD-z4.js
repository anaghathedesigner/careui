import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./input-BRwr7HbH.js";import{Lt as r,bt as i,ht as a,mt as o,ut as s}from"./index-Ck2hFZuL.js";var c=t(e(),1),l={id:`label`,name:`Label`,description:`Renders an accessible label associated with controls.`,installation:{cli:`npx shadcn@latest add label`,manual:`Copy and paste the label component source code into your project.`},usage:`import { Label } from "@/components/ui/label"`,preview:{code:`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`,component:c.createElement(`div`,{className:`flex gap-2`},c.createElement(r,{id:`terms`}),c.createElement(i,{htmlFor:`terms`},`Accept terms and conditions`))},examples:[{name:`Label in Field`,description:`For form fields, use the Field component which includes built-in label, description, and error handling.`,code:`import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LabelInField() {
  return (
    <div className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="label-field-email">Email address</FieldLabel>
          <Input id="label-field-email" type="email" placeholder="m@example.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="label-field-name">Full name</FieldLabel>
          <Input id="label-field-name" placeholder="Evil Rabbit" />
        </Field>
      </FieldGroup>
    </div>
  )
}`,preview:c.createElement(`div`,{className:`w-full max-w-sm`},c.createElement(o,null,c.createElement(s,null,c.createElement(a,{htmlFor:`label-field-email`},`Email address`),c.createElement(n,{id:`label-field-email`,type:`email`,placeholder:`m@example.com`})),c.createElement(s,null,c.createElement(a,{htmlFor:`label-field-name`},`Full name`),c.createElement(n,{id:`label-field-name`,placeholder:`Evil Rabbit`}))))}]};export{l as labelDoc};