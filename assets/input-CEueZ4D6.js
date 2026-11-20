import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./input-BRwr7HbH.js";import{Dr as i,at as a,ct as o,fi as s,ft as c,ht as l,li as u,lt as d,mt as f,nt as p,pi as m,pt as h,rt as g,sa as _,ui as v,ut as y}from"./index-Ck2hFZuL.js";import{t as b}from"./button-group-BC7IZZoH.js";var x=t(e(),1),S={id:`input`,name:`Input`,description:`A text input component for forms and user data entry with built-in styling and accessibility features.`,installation:{cli:`npx shadcn@latest add input`,manual:`Copy and paste the input component source code into your project.`},usage:`import { Input } from "@/components/ui/input"

<Input />`,preview:{code:`<Field>
  <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
  <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
  <FieldDescription>
    Your API key is encrypted and stored securely.
  </FieldDescription>
</Field>`,component:x.createElement(y,{},x.createElement(l,{htmlFor:`input-demo-api-key`},`API Key`),x.createElement(r,{id:`input-demo-api-key`,type:`password`,placeholder:`sk-...`}),x.createElement(c,{},`Your API key is encrypted and stored securely.`))},examples:[{name:`Field`,description:`Use Field, FieldLabel, and FieldDescription to create an input with a label and description.`,code:`<Field>
  <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
  <Input
    id="input-field-username"
    type="text"
    placeholder="Enter your username"
  />
  <FieldDescription>
    Choose a unique username for your account.
  </FieldDescription>
</Field>`,preview:x.createElement(y,{},x.createElement(l,{htmlFor:`input-field-username`},`Username`),x.createElement(r,{id:`input-field-username`,type:`text`,placeholder:`Enter your username`}),x.createElement(c,{},`Choose a unique username for your account.`))},{name:`Field Group`,description:`Use FieldGroup to show multiple Field blocks and forms.`,code:`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
    <Input id="fieldgroup-name" placeholder="Jordan Lee" />
  </Field>
  <Field>
    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
    <Input id="fieldgroup-email" type="email" placeholder="name@example.com" />
    <FieldDescription>We'll send updates to this address.</FieldDescription>
  </Field>
  <Field orientation="horizontal">
    <Button type="reset" variant="outline">Reset</Button>
    <Button type="submit">Submit</Button>
  </Field>
</FieldGroup>`,preview:x.createElement(f,{},x.createElement(y,{},x.createElement(l,{htmlFor:`fieldgroup-name`},`Name`),x.createElement(r,{id:`fieldgroup-name`,placeholder:`Jordan Lee`})),x.createElement(y,{},x.createElement(l,{htmlFor:`fieldgroup-email`},`Email`),x.createElement(r,{id:`fieldgroup-email`,type:`email`,placeholder:`name@example.com`}),x.createElement(c,{},`We'll send updates to this address.`)),x.createElement(y,{orientation:`horizontal`},x.createElement(n,{type:`reset`,variant:`outline`},`Reset`),x.createElement(n,{type:`submit`},`Submit`)))},{name:`Disabled`,description:`An input in disabled state.`,code:`<Field data-disabled>
  <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
  <Input id="input-demo-disabled" type="email" placeholder="Email" disabled />
  <FieldDescription>This field is currently disabled.</FieldDescription>
</Field>`,preview:x.createElement(y,{"data-disabled":!0},x.createElement(l,{htmlFor:`input-demo-disabled`},`Email`),x.createElement(r,{id:`input-demo-disabled`,type:`email`,placeholder:`Email`,disabled:!0}),x.createElement(c,{},`This field is currently disabled.`))},{name:`Invalid`,description:`Use aria-invalid to mark the input as invalid and data-invalid on Field for styling. Use FieldError to display the error message.`,code:`<Field data-invalid>
  <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
  <Input id="input-invalid" placeholder="Error" aria-invalid />
  <FieldError>This field contains validation errors.</FieldError>
</Field>`,preview:x.createElement(y,{"data-invalid":!0},x.createElement(l,{htmlFor:`input-invalid`},`Invalid Input`),x.createElement(r,{id:`input-invalid`,placeholder:`Error`,"aria-invalid":!0}),x.createElement(h,{},`This field contains validation errors.`))},{name:`File`,description:`Use type="file" to create a file input.`,code:`<Field>
  <FieldLabel htmlFor="picture">Picture</FieldLabel>
  <Input id="picture" type="file" />
  <FieldDescription>Select a picture to upload.</FieldDescription>
</Field>`,preview:x.createElement(y,{},x.createElement(l,{htmlFor:`picture`},`Picture`),x.createElement(r,{id:`picture`,type:`file`}),x.createElement(c,{},`Select a picture to upload.`))},{name:`Inline`,description:`Use horizontal Field orientation and pair with Button for a search row.`,code:`<Field orientation="horizontal">
  <Input type="search" placeholder="Search..." />
  <Button>Search</Button>
</Field>`,preview:x.createElement(y,{orientation:`horizontal`},x.createElement(r,{type:`search`,placeholder:`Search...`}),x.createElement(n,{},`Search`))},{name:`Grid`,description:`Place multiple inputs side by side with a grid layout.`,code:`<FieldGroup className="grid max-w-sm grid-cols-2">
  <Field>
    <FieldLabel htmlFor="first-name">First Name</FieldLabel>
    <Input id="first-name" placeholder="Jordan" />
  </Field>
  <Field>
    <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
    <Input id="last-name" placeholder="Lee" />
  </Field>
</FieldGroup>`,preview:x.createElement(f,{className:`grid max-w-sm grid-cols-2`},x.createElement(y,{},x.createElement(l,{htmlFor:`first-name`},`First Name`),x.createElement(r,{id:`first-name`,placeholder:`Jordan`})),x.createElement(y,{},x.createElement(l,{htmlFor:`last-name`},`Last Name`),x.createElement(r,{id:`last-name`,placeholder:`Lee`})))},{name:`Required`,description:`Use required to indicate mandatory inputs.`,code:`<Field>
  <FieldLabel htmlFor="input-required">
    Required Field <span className="text-destructive">*</span>
  </FieldLabel>
  <Input id="input-required" placeholder="This field is required" required />
  <FieldDescription>This field must be filled out.</FieldDescription>
</Field>`,preview:x.createElement(y,{},x.createElement(l,{htmlFor:`input-required`},`Required Field `,x.createElement(`span`,{className:`text-destructive`},`*`)),x.createElement(r,{id:`input-required`,placeholder:`This field is required`,required:!0}),x.createElement(c,{},`This field must be filled out.`))},{name:`Badge`,description:`Use Badge in the label to highlight a recommended field.`,code:`<Field>
  <FieldLabel htmlFor="input-badge" className="flex items-center gap-2">
    Webhook URL
    <Badge variant="neutral" className="ml-auto">Beta</Badge>
  </FieldLabel>
  <Input id="input-badge" type="url" placeholder="https://api.example.com/webhook" />
</Field>`,preview:x.createElement(y,{},x.createElement(l,{htmlFor:`input-badge`,className:`flex items-center gap-2`},`Webhook URL`,x.createElement(i,{variant:`neutral`,className:`ml-auto`},`Beta`)),x.createElement(r,{id:`input-badge`,type:`url`,placeholder:`https://api.example.com/webhook`}))},{name:`Input Group`,description:`Use InputGroup to place text or icons inside an input.`,code:`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { InfoIcon } from "lucide-react"

<Field>
  <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
  <InputGroup>
    <InputGroupInput id="input-group-url" placeholder="example.com" />
    <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
    <InputGroupAddon align="inline-end"><InfoIcon /></InputGroupAddon>
  </InputGroup>
</Field>`,preview:x.createElement(y,{},x.createElement(l,{htmlFor:`input-group-url`},`Website URL`),x.createElement(u,{},x.createElement(s,{id:`input-group-url`,placeholder:`example.com`}),x.createElement(v,{},x.createElement(m,{},`https://`)),x.createElement(v,{align:`inline-end`},x.createElement(_,{}))))},{name:`Button Group`,description:`Use ButtonGroup to append an action button to an input.`,code:`<Field>
  <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
  <ButtonGroup>
    <Input id="input-button-group" placeholder="Type to search..." />
    <Button variant="outline">Search</Button>
  </ButtonGroup>
</Field>`,preview:x.createElement(y,{},x.createElement(l,{htmlFor:`input-button-group`},`Search`),x.createElement(b,{},x.createElement(r,{id:`input-button-group`,placeholder:`Type to search...`}),x.createElement(n,{variant:`outline`},`Search`)))},{name:`Auto Space`,description:`Use autoSpace to automatically insert a space after punctuation (. , ! ? ; :) when the user types without one. Opt-in only — disabled by default. Automatically skipped for email, number, url, password, search, and tel inputs.`,code:`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="input-autospace-on">Notes (autoSpace on)</FieldLabel>
    <Input
      id="input-autospace-on"
      autoSpace
      placeholder="Try typing: Hello,World or Hello.World"
    />
    <FieldDescription>
      Punctuation auto-inserts a space before the next word.
    </FieldDescription>
  </Field>
  <Field>
    <FieldLabel htmlFor="input-autospace-email">Email (always skipped)</FieldLabel>
    <Input
      id="input-autospace-email"
      type="email"
      autoSpace
      placeholder="user@example.com"
    />
    <FieldDescription>
      autoSpace is silently ignored for email, number, url, password, search, and tel.
    </FieldDescription>
  </Field>
</FieldGroup>`,preview:x.createElement(f,{},x.createElement(y,{},x.createElement(l,{htmlFor:`input-autospace-on`},`Notes (autoSpace on)`),x.createElement(r,{id:`input-autospace-on`,autoSpace:!0,placeholder:`Try typing: Hello,World or Hello.World`}),x.createElement(c,{},`Punctuation auto-inserts a space before the next word.`)),x.createElement(y,{},x.createElement(l,{htmlFor:`input-autospace-email`},`Email (always skipped)`),x.createElement(r,{id:`input-autospace-email`,type:`email`,autoSpace:!0,placeholder:`user@example.com`}),x.createElement(c,{},`autoSpace is silently ignored for email, number, url, password, search, and tel.`)))},{name:`Form`,description:`A full form example with inputs, a select, and actions.`,code:`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<form className="w-full max-w-sm">
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="form-name">Name</FieldLabel>
      <Input id="form-name" type="text" placeholder="Evil Rabbit" required />
    </Field>
    <Field>
      <FieldLabel htmlFor="form-email">Email</FieldLabel>
      <Input id="form-email" type="email" placeholder="john@example.com" />
      <FieldDescription>We'll never share your email with anyone.</FieldDescription>
    </Field>
    <div className="grid grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
        <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
      </Field>
      <Field>
        <FieldLabel htmlFor="form-country">Country</FieldLabel>
        <Select defaultValue="us">
          <SelectTrigger id="form-country"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
    <Field>
      <FieldLabel htmlFor="form-address">Address</FieldLabel>
      <Input id="form-address" type="text" placeholder="123 Main St" />
    </Field>
    <Field orientation="horizontal">
      <div className="flex w-full flex-row-reverse gap-4">
        <Button type="submit">Submit</Button>
        <Button type="button" variant="outline">Cancel</Button>
      </div>
    </Field>
  </FieldGroup>
</form>`,preview:x.createElement(`form`,{className:`w-full max-w-sm`},x.createElement(f,{},x.createElement(y,{},x.createElement(l,{htmlFor:`form-name`},`Name`),x.createElement(r,{id:`form-name`,type:`text`,placeholder:`Evil Rabbit`,required:!0})),x.createElement(y,{},x.createElement(l,{htmlFor:`form-email`},`Email`),x.createElement(r,{id:`form-email`,type:`email`,placeholder:`john@example.com`}),x.createElement(c,{},`We'll never share your email with anyone.`)),x.createElement(`div`,{className:`grid grid-cols-2 gap-4`},x.createElement(y,{},x.createElement(l,{htmlFor:`form-phone`},`Phone`),x.createElement(r,{id:`form-phone`,type:`tel`,placeholder:`+1 (555) 123-4567`})),x.createElement(y,{},x.createElement(l,{htmlFor:`form-country`},`Country`),x.createElement(p,{defaultValue:`us`},x.createElement(o,{id:`form-country`},x.createElement(d,{})),x.createElement(g,{},x.createElement(a,{value:`us`},`United States`),x.createElement(a,{value:`uk`},`United Kingdom`),x.createElement(a,{value:`ca`},`Canada`))))),x.createElement(y,{},x.createElement(l,{htmlFor:`form-address`},`Address`),x.createElement(r,{id:`form-address`,type:`text`,placeholder:`123 Main St`})),x.createElement(y,{orientation:`horizontal`},x.createElement(`div`,{className:`flex w-full flex-row-reverse gap-4`},x.createElement(n,{type:`submit`},`Submit`),x.createElement(n,{type:`button`,variant:`outline`},`Cancel`)))))}],props:[{name:`type`,type:`string`,description:`The HTML input type.`,default:`"text"`},{name:`placeholder`,type:`string`,description:`Placeholder text when the input is empty.`},{name:`disabled`,type:`boolean`,description:`Disables user interaction.`,default:`false`},{name:`aria-invalid`,type:`boolean`,description:`Marks the input as invalid for accessibility.`,default:`false`},{name:`required`,type:`boolean`,description:`Marks the field as required.`,default:`false`},{name:`autoSpace`,type:`boolean`,description:`When true, automatically inserts a space after punctuation (. , ! ? ; :) when the next character typed is not a space. Silently ignored for email, number, url, password, search, and tel inputs.`,default:`false`}]};export{S as inputDoc};