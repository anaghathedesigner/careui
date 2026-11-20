import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./input-BRwr7HbH.js";import{t as i}from"./textarea-s05ZOwWG.js";import{H as a,Lt as o,U as s,V as c,_t as l,at as u,ct as d,dt as f,ft as p,gt as m,ht as h,it as g,lt as _,mt as v,nt as y,pt as b,rt as x,ut as S,vt as C,yr as w,yt as T}from"./index-Ck2hFZuL.js";var E=t(e(),1),D={id:`field`,name:`Field`,description:`Combine labels, controls, and help text to compose accessible form fields and grouped inputs.`,installation:{cli:`npx shadcn@latest add field`,manual:`Copy and paste the field component source code into your project.`},usage:`import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldDescription>This appears on invoices and emails.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>This appears on invoices and emails.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
    <Field orientation="horizontal">
      <Switch id="newsletter" />
      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>`,preview:{code:`<div className="w-full max-w-md">
  <form>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <FieldDescription>All transactions are secure and encrypted</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-card-name">Name on Card</FieldLabel>
            <Input id="checkout-card-name" placeholder="Evil Rabbit" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-card-number">Card Number</FieldLabel>
            <Input id="checkout-card-number" placeholder="1234 5678 9012 3456" required />
            <FieldDescription>Enter your 16-digit card number</FieldDescription>
          </Field>
          <div className="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="checkout-exp-month">Month</FieldLabel>
              <Select defaultValue="">
                <SelectTrigger id="checkout-exp-month"><SelectValue placeholder="MM" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                    <SelectItem value="04">04</SelectItem>
                    <SelectItem value="05">05</SelectItem>
                    <SelectItem value="06">06</SelectItem>
                    <SelectItem value="07">07</SelectItem>
                    <SelectItem value="08">08</SelectItem>
                    <SelectItem value="09">09</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-exp-year">Year</FieldLabel>
              <Select defaultValue="">
                <SelectTrigger id="checkout-exp-year"><SelectValue placeholder="YYYY" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-cvv">CVV</FieldLabel>
              <Input id="checkout-cvv" placeholder="123" required />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <FieldDescription>The billing address associated with your payment method</FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="checkout-same-shipping" defaultChecked />
            <FieldLabel htmlFor="checkout-same-shipping" className="font-normal">Same as shipping address</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-comments">Comments</FieldLabel>
            <Textarea id="checkout-comments" placeholder="Add any additional comments" className="resize-none" />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Field orientation="horizontal">
        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="button">Cancel</Button>
        </div>
      </Field>
    </FieldGroup>
  </form>
</div>`,component:E.createElement(`div`,{className:`w-full max-w-md`},E.createElement(`form`,{},E.createElement(v,{},E.createElement(C,{},E.createElement(m,{},`Payment Method`),E.createElement(p,{},`All transactions are secure and encrypted`),E.createElement(v,{},E.createElement(S,{},E.createElement(h,{htmlFor:`checkout-card-name`},`Name on Card`),E.createElement(r,{id:`checkout-card-name`,placeholder:`Evil Rabbit`,required:!0})),E.createElement(S,{},E.createElement(h,{htmlFor:`checkout-card-number`},`Card Number`),E.createElement(r,{id:`checkout-card-number`,placeholder:`1234 5678 9012 3456`,required:!0}),E.createElement(p,{},`Enter your 16-digit card number`)),E.createElement(`div`,{className:`grid grid-cols-3 gap-4`},E.createElement(S,{},E.createElement(h,{htmlFor:`checkout-exp-month`},`Month`),E.createElement(y,{defaultValue:``},E.createElement(d,{id:`checkout-exp-month`},E.createElement(_,{placeholder:`MM`})),E.createElement(x,{},E.createElement(g,{},...[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`].map(e=>E.createElement(u,{key:e,value:e},e)))))),E.createElement(S,{},E.createElement(h,{htmlFor:`checkout-exp-year`},`Year`),E.createElement(y,{defaultValue:``},E.createElement(d,{id:`checkout-exp-year`},E.createElement(_,{placeholder:`YYYY`})),E.createElement(x,{},E.createElement(g,{},...[`2024`,`2025`,`2026`,`2027`,`2028`,`2029`].map(e=>E.createElement(u,{key:e,value:e},e)))))),E.createElement(S,{},E.createElement(h,{htmlFor:`checkout-cvv`},`CVV`),E.createElement(r,{id:`checkout-cvv`,placeholder:`123`,required:!0}))))),E.createElement(l,{}),E.createElement(C,{},E.createElement(m,{},`Billing Address`),E.createElement(p,{},`The billing address associated with your payment method`),E.createElement(v,{},E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`checkout-same-shipping`,defaultChecked:!0}),E.createElement(h,{htmlFor:`checkout-same-shipping`,className:`font-normal`},`Same as shipping address`)))),E.createElement(C,{},E.createElement(v,{},E.createElement(S,{},E.createElement(h,{htmlFor:`checkout-comments`},`Comments`),E.createElement(i,{id:`checkout-comments`,placeholder:`Add any additional comments`,className:`resize-none`})))),E.createElement(S,{orientation:`horizontal`},E.createElement(`div`,{className:`flex w-full flex-row-reverse gap-4`},E.createElement(n,{type:`submit`},`Submit`),E.createElement(n,{variant:`outline`,type:`button`},`Cancel`))))))},examples:[{name:`Input`,description:`Use Field, FieldLabel, and FieldDescription to compose accessible input fields.`,code:`<FieldSet className="w-full max-w-xs">
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" type="text" placeholder="Max Leiter" />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <FieldDescription>
        Must be at least 8 characters long.
      </FieldDescription>
      <Input id="password" type="password" placeholder="••••••••" />
    </Field>
  </FieldGroup>
</FieldSet>`,preview:E.createElement(C,{className:`w-full max-w-xs`},E.createElement(v,{},E.createElement(S,{},E.createElement(h,{htmlFor:`field-input-username`},`Username`),E.createElement(r,{id:`field-input-username`,type:`text`,placeholder:`Max Leiter`}),E.createElement(p,{},`Choose a unique username for your account.`)),E.createElement(S,{},E.createElement(h,{htmlFor:`field-input-password`},`Password`),E.createElement(p,{},`Must be at least 8 characters long.`),E.createElement(r,{id:`field-input-password`,type:`password`,placeholder:`••••••••`}))))},{name:`Textarea`,description:`Compose textarea controls with helper text.`,code:`<FieldSet className="w-full max-w-xs">
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
      <Textarea
        id="feedback"
        placeholder="Your feedback helps us improve..."
        rows={4}
      />
      <FieldDescription>
        Share your thoughts about our service.
      </FieldDescription>
    </Field>
  </FieldGroup>
</FieldSet>`,preview:E.createElement(C,{className:`w-full max-w-xs`},E.createElement(v,{},E.createElement(S,{},E.createElement(h,{htmlFor:`field-textarea-feedback`},`Feedback`),E.createElement(i,{id:`field-textarea-feedback`,placeholder:`Your feedback helps us improve...`,rows:4}),E.createElement(p,{},`Share your thoughts about our service.`))))},{name:`Select`,description:`Use Field around Select controls for consistent form layout.`,code:`<Field className="w-full max-w-xs">
  <FieldLabel>Department</FieldLabel>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Choose department" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="engineering">Engineering</SelectItem>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="marketing">Marketing</SelectItem>
        <SelectItem value="sales">Sales</SelectItem>
        <SelectItem value="support">Customer Support</SelectItem>
        <SelectItem value="hr">Human Resources</SelectItem>
        <SelectItem value="finance">Finance</SelectItem>
        <SelectItem value="operations">Operations</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  <FieldDescription>
    Select your department or area of work.
  </FieldDescription>
</Field>`,preview:E.createElement(S,{className:`w-full max-w-xs`},E.createElement(h,{},`Department`),E.createElement(y,{},E.createElement(d,{},E.createElement(_,{placeholder:`Choose department`})),E.createElement(x,{},E.createElement(g,{},E.createElement(u,{value:`engineering`},`Engineering`),E.createElement(u,{value:`design`},`Design`),E.createElement(u,{value:`marketing`},`Marketing`),E.createElement(u,{value:`sales`},`Sales`),E.createElement(u,{value:`support`},`Customer Support`),E.createElement(u,{value:`hr`},`Human Resources`),E.createElement(u,{value:`finance`},`Finance`),E.createElement(u,{value:`operations`},`Operations`)))),E.createElement(p,{},`Select your department or area of work.`))},{name:`Slider`,description:`Combine FieldTitle and FieldDescription with slider controls.`,code:`"use client"

import * as React from "react"

export function FieldSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <FieldDescription>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </FieldDescription>
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as [number, number])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="Price Range"
      />
    </Field>
  )
}`,preview:E.createElement(S,{className:`w-full max-w-xs`},E.createElement(T,{},`Price Range`),E.createElement(p,{},`Set your budget range ($200 - $800).`),E.createElement(s,{defaultValue:[200,800],max:1e3,min:0,step:10,className:`mt-2 w-full`,"aria-label":`Price Range`}))},{name:`Fieldset`,description:`Use FieldSet and FieldLegend to structure related inputs.`,code:`<FieldSet className="w-full max-w-sm">
  <FieldLegend>Address Information</FieldLegend>
  <FieldDescription>
    We need your address to deliver your order.
  </FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="street">Street Address</FieldLabel>
      <Input id="street" type="text" placeholder="123 Main St" />
    </Field>
    <div className="grid grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Input id="city" type="text" placeholder="New York" />
      </Field>
      <Field>
        <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
        <Input id="zip" type="text" placeholder="90502" />
      </Field>
    </div>
  </FieldGroup>
</FieldSet>`,preview:E.createElement(C,{className:`w-full max-w-sm`},E.createElement(m,{},`Address Information`),E.createElement(p,{},`We need your address to deliver your order.`),E.createElement(v,{},E.createElement(S,{},E.createElement(h,{htmlFor:`field-street`},`Street Address`),E.createElement(r,{id:`field-street`,type:`text`,placeholder:`123 Main St`})),E.createElement(`div`,{className:`grid grid-cols-2 gap-4`},E.createElement(S,{},E.createElement(h,{htmlFor:`field-city`},`City`),E.createElement(r,{id:`field-city`,type:`text`,placeholder:`New York`})),E.createElement(S,{},E.createElement(h,{htmlFor:`field-zip`},`Postal Code`),E.createElement(r,{id:`field-zip`,type:`text`,placeholder:`90502`})))))},{name:`Checkbox`,description:`Use FieldContent for multiline checkbox descriptions and grouped checkbox settings.`,code:`<FieldGroup className="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
    <FieldDescription>
      Select the items you want to show on the desktop.
    </FieldDescription>
    <FieldGroup className="gap-3">
      <Field orientation="horizontal">
        <Checkbox id="hard-disks" defaultChecked />
        <FieldLabel htmlFor="hard-disks" className="font-normal">
          Hard disks
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="external-disks" />
        <FieldLabel htmlFor="external-disks" className="font-normal">
          External disks
        </FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
  <FieldSeparator />
  <Field orientation="horizontal">
    <Checkbox id="sync-folders" defaultChecked />
    <FieldContent>
      <FieldLabel htmlFor="sync-folders">Sync Desktop & Documents folders</FieldLabel>
      <FieldDescription>
        Your Desktop & Documents folders are being synced with iCloud Drive.
      </FieldDescription>
    </FieldContent>
  </Field>
</FieldGroup>`,preview:E.createElement(v,{className:`w-full max-w-xs`},E.createElement(C,{},E.createElement(m,{variant:`label`},`Show these items on the desktop`),E.createElement(p,{},`Select the items you want to show on the desktop.`),E.createElement(v,{className:`gap-3`},E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`field-hard-disks`,defaultChecked:!0}),E.createElement(h,{htmlFor:`field-hard-disks`,className:`font-normal`},`Hard disks`)),E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`field-external-disks`}),E.createElement(h,{htmlFor:`field-external-disks`,className:`font-normal`},`External disks`)))),E.createElement(l,{}),E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`field-sync-folders`,defaultChecked:!0}),E.createElement(f,{},E.createElement(h,{htmlFor:`field-sync-folders`},`Sync Desktop & Documents folders`),E.createElement(p,{},`Your Desktop & Documents folders are being synced with iCloud Drive.`))))},{name:`Radio`,description:`Group radio options inside a FieldSet.`,code:`<FieldSet className="w-full max-w-xs">
  <FieldLegend variant="label">Subscription Plan</FieldLegend>
  <FieldDescription>
    Yearly and lifetime plans offer significant savings.
  </FieldDescription>
  <RadioGroup defaultValue="monthly">
    <Field orientation="horizontal">
      <RadioGroupItem value="monthly" id="plan-monthly" />
      <FieldLabel htmlFor="plan-monthly" className="font-normal">
        Monthly ($9.99/month)
      </FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="yearly" id="plan-yearly" />
      <FieldLabel htmlFor="plan-yearly" className="font-normal">
        Yearly ($99.99/year)
      </FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="lifetime" id="plan-lifetime" />
      <FieldLabel htmlFor="plan-lifetime" className="font-normal">
        Lifetime ($299.99)
      </FieldLabel>
    </Field>
  </RadioGroup>
</FieldSet>`,preview:E.createElement(C,{className:`w-full max-w-xs`},E.createElement(m,{variant:`label`},`Subscription Plan`),E.createElement(p,{},`Yearly and lifetime plans offer significant savings.`),E.createElement(c,{defaultValue:`monthly`},E.createElement(S,{orientation:`horizontal`},E.createElement(a,{value:`monthly`,id:`field-plan-monthly`}),E.createElement(h,{htmlFor:`field-plan-monthly`,className:`font-normal`},`Monthly ($9.99/month)`)),E.createElement(S,{orientation:`horizontal`},E.createElement(a,{value:`yearly`,id:`field-plan-yearly`}),E.createElement(h,{htmlFor:`field-plan-yearly`,className:`font-normal`},`Yearly ($99.99/year)`)),E.createElement(S,{orientation:`horizontal`},E.createElement(a,{value:`lifetime`,id:`field-plan-lifetime`}),E.createElement(h,{htmlFor:`field-plan-lifetime`,className:`font-normal`},`Lifetime ($299.99)`))))},{name:`Switch`,description:`Use horizontal orientation for switch rows.`,code:`<Field orientation="horizontal" className="w-fit">
  <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
  <Switch id="2fa" />
</Field>`,preview:E.createElement(S,{orientation:`horizontal`,className:`w-fit`},E.createElement(h,{htmlFor:`field-2fa`},`Multi-factor authentication`),E.createElement(w,{id:`field-2fa`}))},{name:`Choice Card`,description:`Wrap Field components inside FieldLabel to create selectable field groups.`,code:`<FieldGroup className="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">Compute Environment</FieldLegend>
    <FieldDescription>
      Select the compute environment for your cluster.
    </FieldDescription>
    <RadioGroup defaultValue="kubernetes">
      <FieldLabel htmlFor="kubernetes-r2h">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Kubernetes</FieldTitle>
            <FieldDescription>Run GPU workloads on a K8s cluster.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="vm-z4k">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Virtual Machine</FieldTitle>
            <FieldDescription>Access a cluster to run GPU workloads.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="vm" id="vm-z4k" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  </FieldSet>
</FieldGroup>`,preview:E.createElement(v,{className:`w-full max-w-xs`},E.createElement(C,{},E.createElement(m,{variant:`label`},`Compute Environment`),E.createElement(p,{},`Select the compute environment for your cluster.`),E.createElement(c,{defaultValue:`kubernetes`},E.createElement(h,{htmlFor:`field-kubernetes`},E.createElement(S,{orientation:`horizontal`},E.createElement(f,{},E.createElement(T,{},`Kubernetes`),E.createElement(p,{},`Run GPU workloads on a K8s cluster.`)),E.createElement(a,{value:`kubernetes`,id:`field-kubernetes`}))),E.createElement(h,{htmlFor:`field-vm`},E.createElement(S,{orientation:`horizontal`},E.createElement(f,{},E.createElement(T,{},`Virtual Machine`),E.createElement(p,{},`Access a cluster to run GPU workloads.`)),E.createElement(a,{value:`vm`,id:`field-vm`}))))))},{name:`Field Group`,description:`Stack Field components with FieldGroup and divide with FieldSeparator.`,code:`<FieldGroup className="w-full max-w-xs">
  <FieldSet>
    <FieldLabel>Responses</FieldLabel>
    <FieldDescription>
      Get notified when ChatGPT responds to requests that take time, like research or image generation.
    </FieldDescription>
    <FieldGroup data-slot="checkbox-group">
      <Field orientation="horizontal">
        <Checkbox id="push" defaultChecked disabled />
        <FieldLabel htmlFor="push" className="font-normal">Push notifications</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
  <FieldSeparator />
  <FieldSet>
    <FieldLabel>Tasks</FieldLabel>
    <FieldDescription>
      Get notified when tasks you've created have updates. <a href="#">Manage tasks</a>
    </FieldDescription>
    <FieldGroup data-slot="checkbox-group">
      <Field orientation="horizontal">
        <Checkbox id="push-tasks" />
        <FieldLabel htmlFor="push-tasks" className="font-normal">Push notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="email-tasks" />
        <FieldLabel htmlFor="email-tasks" className="font-normal">Email notifications</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
</FieldGroup>`,preview:E.createElement(v,{className:`w-full max-w-xs`},E.createElement(C,{},E.createElement(h,{},`Responses`),E.createElement(p,{},`Get notified when ChatGPT responds to requests that take time, like research or image generation.`),E.createElement(v,{},E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`field-push`,defaultChecked:!0,disabled:!0}),E.createElement(h,{htmlFor:`field-push`,className:`font-normal`},`Push notifications`)))),E.createElement(l,{}),E.createElement(C,{},E.createElement(h,{},`Tasks`),E.createElement(p,{},`Get notified when tasks you've created have updates. `,E.createElement(`a`,{href:`#`},`Manage tasks`)),E.createElement(v,{},E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`field-push-tasks`}),E.createElement(h,{htmlFor:`field-push-tasks`,className:`font-normal`},`Push notifications`)),E.createElement(S,{orientation:`horizontal`},E.createElement(o,{id:`field-email-tasks`}),E.createElement(h,{htmlFor:`field-email-tasks`,className:`font-normal`},`Email notifications`)))))},{name:`Anatomy`,description:`Typical structure for a single field with helper and error text.`,code:`<Field>
  <FieldLabel htmlFor="input-id">Label</FieldLabel>
  {/* Input, Select, Switch, etc. */}
  <FieldDescription>Optional helper text.</FieldDescription>
  <FieldError>Validation message.</FieldError>
</Field>`,preview:E.createElement(S,{},E.createElement(h,{htmlFor:`field-anatomy`},`Label`),E.createElement(r,{id:`field-anatomy`,placeholder:`Input`}),E.createElement(p,{},`Optional helper text.`),E.createElement(b,{},`Validation message.`))},{name:`Form`,description:`Use Field with the Form docs patterns and validation libraries like React Hook Form or TanStack Form.`,code:`See the Form documentation for building forms with Field and schema validators.`,preview:E.createElement(`p`,{className:`text-muted-foreground text-sm`},`See Form docs for React Hook Form and TanStack Form integration patterns.`)},{name:`RTL`,description:`Field supports RTL layouts by passing dir=rtl to the container.`,code:`<div dir="rtl" className="w-full max-w-md py-6">
  <FieldGroup>
    <FieldSet>
      <FieldLegend>طريقة الدفع</FieldLegend>
      <FieldDescription>جميع المعاملات آمنة ومشفرة</FieldDescription>
      <Field>
        <FieldLabel htmlFor="rtl-name">الاسم على البطاقة</FieldLabel>
        <Input id="rtl-name" placeholder="Evil Rabbit" />
      </Field>
    </FieldSet>
  </FieldGroup>
</div>`,preview:E.createElement(`div`,{dir:`rtl`,className:`w-full max-w-md`},E.createElement(v,{},E.createElement(C,{},E.createElement(m,{},`طريقة الدفع`),E.createElement(p,{},`جميع المعاملات آمنة ومشفرة`),E.createElement(S,{},E.createElement(h,{htmlFor:`field-rtl-name`},`الاسم على البطاقة`),E.createElement(r,{id:`field-rtl-name`,placeholder:`Evil Rabbit`})))))},{name:`Responsive Layout`,description:`Use orientation=responsive for automatic container-aware layouts.`,code:`<div className="w-full max-w-lg">
  <form>
    <FieldSet>
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>Fill in your profile information.</FieldDescription>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <FieldDescription>
              Provide your full name for identification
            </FieldDescription>
          </FieldContent>
          <Input id="name" placeholder="Evil Rabbit" required />
        </Field>
        <Field orientation="responsive">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline">Cancel</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </form>
</div>`,preview:E.createElement(`div`,{className:`w-full max-w-lg`},E.createElement(`form`,{},E.createElement(C,{},E.createElement(m,{},`Profile`),E.createElement(p,{},`Fill in your profile information.`),E.createElement(v,{},E.createElement(S,{orientation:`responsive`},E.createElement(f,{},E.createElement(h,{htmlFor:`field-responsive-name`},`Name`),E.createElement(p,{},`Provide your full name for identification`)),E.createElement(r,{id:`field-responsive-name`,placeholder:`Evil Rabbit`,required:!0})),E.createElement(S,{orientation:`responsive`},E.createElement(n,{type:`submit`},`Submit`),E.createElement(n,{variant:`outline`,type:`button`},`Cancel`))))))},{name:`Validation and Errors`,description:`Add data-invalid to Field and aria-invalid to controls.`,code:`<Field data-invalid>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" aria-invalid />
  <FieldError>Enter a valid email address.</FieldError>
</Field>`,preview:E.createElement(S,{"data-invalid":!0},E.createElement(h,{htmlFor:`field-validation-email`},`Email`),E.createElement(r,{id:`field-validation-email`,type:`email`,"aria-invalid":!0}),E.createElement(b,{},`Enter a valid email address.`))},{name:`Accessibility`,description:`Use FieldSet/FieldLegend for semantic groups and keep separators sparse for clear screen-reader flow.`,code:`- FieldSet + FieldLegend keep related controls grouped.
- Field renders role=group for grouped controls.
- Use FieldSeparator sparingly to preserve reading flow.`,preview:E.createElement(`ul`,{className:`text-muted-foreground list-disc space-y-1 pl-5 text-sm`},E.createElement(`li`,{},`Use FieldSet and FieldLegend to group related controls.`),E.createElement(`li`,{},`Field renders role=group for grouped controls.`),E.createElement(`li`,{},`Use FieldSeparator sparingly for clearer reading flow.`))}],props:[{name:`FieldSet.className`,type:`string`,description:`Container class applied to the semantic fieldset wrapper.`},{name:`FieldLegend.variant`,type:`"legend" | "label"`,description:`Legend style variant.`,default:`"legend"`},{name:`FieldGroup.className`,type:`string`,description:`Layout wrapper class for stacking and container-query grouping.`},{name:`Field.orientation`,type:`"vertical" | "horizontal" | "responsive"`,description:`Orientation for control and label layout.`,default:`"vertical"`},{name:`Field.data-invalid`,type:`boolean`,description:`Marks a field block as invalid for styling.`},{name:`FieldContent.className`,type:`string`,description:`Class for grouping label and helper text in a column.`},{name:`FieldLabel.asChild`,type:`boolean`,description:`Whether to render label via slot composition.`,default:`false`},{name:`FieldDescription.className`,type:`string`,description:`Class for helper text slot.`},{name:`FieldSeparator.className`,type:`string`,description:`Class for the visual separator between grouped sections.`},{name:`FieldError.errors`,type:`Array<{ message?: string } | undefined>`,description:`Error list consumed by FieldError.`}]};export{D as fieldDoc};