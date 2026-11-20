import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./textarea-s05ZOwWG.js";import{ft as i,ht as a,ut as o}from"./index-Ck2hFZuL.js";var s=t(e(),1),c={id:`textarea`,name:`Textarea`,description:`Displays a form textarea or a component that looks like a textarea.`,installation:{cli:`npx shadcn@latest add textarea`,manual:`Copy and paste the textarea component source code into your project.`},usage:`import { Textarea } from "@/components/ui/textarea"

<Textarea />`,preview:{code:`<Textarea placeholder="Type your message here." />`,component:s.createElement(r,{placeholder:`Type your message here.`})},examples:[{name:`Field`,description:`Use Field, FieldLabel, and FieldDescription to create a textarea with a label and description.`,code:`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}`,preview:s.createElement(o,{},s.createElement(a,{htmlFor:`textarea-field-message`},`Message`),s.createElement(i,{},`Enter your message below.`),s.createElement(r,{id:`textarea-field-message`,placeholder:`Type your message here.`}))},{name:`Disabled`,description:`Use the disabled prop to disable the textarea. To style the disabled state, add the data-disabled attribute to the Field component.`,code:`import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </Field>
  )
}`,preview:s.createElement(o,{"data-disabled":!0},s.createElement(a,{htmlFor:`textarea-disabled`},`Message`),s.createElement(r,{id:`textarea-disabled`,placeholder:`Type your message here.`,disabled:!0}))},{name:`Invalid`,description:`Use the aria-invalid prop to mark the textarea as invalid. To style the invalid state, add the data-invalid attribute to the Field component.`,code:`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="Type your message here."
        aria-invalid
      />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  )
}`,preview:s.createElement(o,{"data-invalid":!0},s.createElement(a,{htmlFor:`textarea-invalid`},`Message`),s.createElement(r,{id:`textarea-invalid`,placeholder:`Type your message here.`,"aria-invalid":!0}),s.createElement(i,{},`Please enter a valid message.`))},{name:`Button`,description:`Pair with Button to create a textarea with a submit button.`,code:`import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}`,preview:s.createElement(`div`,{className:`grid w-full gap-2`},s.createElement(r,{placeholder:`Type your message here.`}),s.createElement(n,{},`Send message`))},{name:`Auto Space`,description:`Use autoSpace to automatically insert a space after punctuation (. , ! ? ; :) when the user types without one. Useful for prose fields like notes, comments, and descriptions.`,code:`<Textarea
  autoSpace
  placeholder="Try: Hello,World or Patient reported pain.No fever."
  rows={4}
/>`,preview:s.createElement(r,{autoSpace:!0,placeholder:`Try: Hello,World or Patient reported pain.No fever.`,rows:4})}],props:[{name:`placeholder`,type:`string`,description:`Placeholder text when the textarea is empty.`},{name:`disabled`,type:`boolean`,description:`Disables user interaction.`,default:`false`},{name:`rows`,type:`number`,description:`Number of visible text lines.`},{name:`aria-invalid`,type:`boolean`,description:`Marks the textarea as invalid for accessibility.`,default:`false`},{name:`autoSpace`,type:`boolean`,description:`When true, automatically inserts a space after punctuation (. , ! ? ; :) when the next character typed is not a space. Useful for prose fields like notes and comments.`,default:`false`}]};export{c as textareaDoc};