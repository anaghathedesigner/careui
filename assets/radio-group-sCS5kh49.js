import{i as e,l as t}from"./dist-DtVyZPdI.js";import{H as n,V as r,bt as i,dt as a,ft as o,gt as s,ht as c,ut as l,vt as u,yt as d}from"./index-Ck2hFZuL.js";var f=t(e(),1),p={id:`radio-group`,name:`Radio Group`,description:`A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.`,installation:{cli:`npx shadcn@latest add radio-group`,manual:`Install @base-ui/react, copy the radio group component source, and update import paths to match your project setup.`},usage:`import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="option-one">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`,preview:{code:`<RadioGroup defaultValue="comfortable" className="w-fit">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`,component:f.createElement(r,{defaultValue:`comfortable`,className:`w-fit`},f.createElement(`div`,{className:`flex items-center gap-3`},f.createElement(n,{value:`default`,id:`r1`}),f.createElement(i,{htmlFor:`r1`},`Default`)),f.createElement(`div`,{className:`flex items-center gap-3`},f.createElement(n,{value:`comfortable`,id:`r2`}),f.createElement(i,{htmlFor:`r2`},`Comfortable`)),f.createElement(`div`,{className:`flex items-center gap-3`},f.createElement(n,{value:`compact`,id:`r3`}),f.createElement(i,{htmlFor:`r3`},`Compact`)))},examples:[{name:`Description`,description:`Radio group items with a description using the Field component.`,code:`<RadioGroup defaultValue="comfortable" className="w-fit">
  <Field orientation="horizontal">
    <RadioGroupItem value="default" id="desc-r1" />
    <FieldContent>
      <FieldLabel htmlFor="desc-r1">Default</FieldLabel>
      <FieldDescription>Standard spacing for most use cases.</FieldDescription>
    </FieldContent>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="comfortable" id="desc-r2" />
    <FieldContent>
      <FieldLabel htmlFor="desc-r2">Comfortable</FieldLabel>
      <FieldDescription>More space between elements.</FieldDescription>
    </FieldContent>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="compact" id="desc-r3" />
    <FieldContent>
      <FieldLabel htmlFor="desc-r3">Compact</FieldLabel>
      <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
    </FieldContent>
  </Field>
</RadioGroup>`,preview:f.createElement(r,{defaultValue:`comfortable`,className:`w-fit`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`default`,id:`desc-r1`}),f.createElement(a,{},f.createElement(c,{htmlFor:`desc-r1`},`Default`),f.createElement(o,{},`Standard spacing for most use cases.`))),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`comfortable`,id:`desc-r2`}),f.createElement(a,{},f.createElement(c,{htmlFor:`desc-r2`},`Comfortable`),f.createElement(o,{},`More space between elements.`))),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`compact`,id:`desc-r3`}),f.createElement(a,{},f.createElement(c,{htmlFor:`desc-r3`},`Compact`),f.createElement(o,{},`Minimal spacing for dense layouts.`))))},{name:`Choice Card`,description:`Use FieldLabel to wrap the entire Field for a clickable card-style selection.`,code:`<RadioGroup defaultValue="plus" className="max-w-sm">
  <FieldLabel htmlFor="plus-plan">
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Plus</FieldTitle>
        <FieldDescription>For individuals and small teams.</FieldDescription>
      </FieldContent>
      <RadioGroupItem value="plus" id="plus-plan" />
    </Field>
  </FieldLabel>
  <FieldLabel htmlFor="pro-plan">
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Pro</FieldTitle>
        <FieldDescription>For growing businesses.</FieldDescription>
      </FieldContent>
      <RadioGroupItem value="pro" id="pro-plan" />
    </Field>
  </FieldLabel>
  <FieldLabel htmlFor="enterprise-plan">
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Enterprise</FieldTitle>
        <FieldDescription>For large teams and enterprises.</FieldDescription>
      </FieldContent>
      <RadioGroupItem value="enterprise" id="enterprise-plan" />
    </Field>
  </FieldLabel>
</RadioGroup>`,preview:f.createElement(r,{defaultValue:`plus`,className:`max-w-sm`},f.createElement(c,{htmlFor:`plus-plan`},f.createElement(l,{orientation:`horizontal`},f.createElement(a,{},f.createElement(d,{},`Plus`),f.createElement(o,{},`For individuals and small teams.`)),f.createElement(n,{value:`plus`,id:`plus-plan`}))),f.createElement(c,{htmlFor:`pro-plan`},f.createElement(l,{orientation:`horizontal`},f.createElement(a,{},f.createElement(d,{},`Pro`),f.createElement(o,{},`For growing businesses.`)),f.createElement(n,{value:`pro`,id:`pro-plan`}))),f.createElement(c,{htmlFor:`enterprise-plan`},f.createElement(l,{orientation:`horizontal`},f.createElement(a,{},f.createElement(d,{},`Enterprise`),f.createElement(o,{},`For large teams and enterprises.`)),f.createElement(n,{value:`enterprise`,id:`enterprise-plan`}))))},{name:`Fieldset`,description:`Use FieldSet and FieldLegend to group radio items with a label and description.`,code:`<FieldSet className="w-full max-w-xs">
  <FieldLegend variant="label">Subscription Plan</FieldLegend>
  <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
  <RadioGroup defaultValue="monthly">
    <Field orientation="horizontal">
      <RadioGroupItem value="monthly" id="plan-monthly" />
      <FieldLabel htmlFor="plan-monthly" className="font-normal">Monthly ($9.99/month)</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="yearly" id="plan-yearly" />
      <FieldLabel htmlFor="plan-yearly" className="font-normal">Yearly ($99.99/year)</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="lifetime" id="plan-lifetime" />
      <FieldLabel htmlFor="plan-lifetime" className="font-normal">Lifetime ($299.99)</FieldLabel>
    </Field>
  </RadioGroup>
</FieldSet>`,preview:f.createElement(u,{className:`w-full max-w-xs`},f.createElement(s,{variant:`label`},`Subscription Plan`),f.createElement(o,{},`Yearly and lifetime plans offer significant savings.`),f.createElement(r,{defaultValue:`monthly`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`monthly`,id:`plan-monthly`}),f.createElement(c,{htmlFor:`plan-monthly`,className:`font-normal`},`Monthly ($9.99/month)`)),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`yearly`,id:`plan-yearly`}),f.createElement(c,{htmlFor:`plan-yearly`,className:`font-normal`},`Yearly ($99.99/year)`)),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`lifetime`,id:`plan-lifetime`}),f.createElement(c,{htmlFor:`plan-lifetime`,className:`font-normal`},`Lifetime ($299.99)`))))},{name:`Grid Layout`,description:`Display radio options in a 2-column grid using card-style FieldLabels wrapping each option.`,code:`<RadioGroup defaultValue="small" className="grid grid-cols-2 max-w-xs">
  <FieldLabel htmlFor="grid-small">
    <Field orientation="horizontal">
      <RadioGroupItem value="small" id="grid-small" />
      Small
    </Field>
  </FieldLabel>
  <FieldLabel htmlFor="grid-medium">
    <Field orientation="horizontal">
      <RadioGroupItem value="medium" id="grid-medium" />
      Medium
    </Field>
  </FieldLabel>
  <FieldLabel htmlFor="grid-large">
    <Field orientation="horizontal">
      <RadioGroupItem value="large" id="grid-large" />
      Large
    </Field>
  </FieldLabel>
  <FieldLabel htmlFor="grid-xlarge">
    <Field orientation="horizontal">
      <RadioGroupItem value="xlarge" id="grid-xlarge" />
      X-Large
    </Field>
  </FieldLabel>
</RadioGroup>`,preview:f.createElement(r,{defaultValue:`small`,className:`grid grid-cols-2 max-w-xs`},f.createElement(c,{htmlFor:`grid-small`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`small`,id:`grid-small`}),`Small`)),f.createElement(c,{htmlFor:`grid-medium`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`medium`,id:`grid-medium`}),`Medium`)),f.createElement(c,{htmlFor:`grid-large`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`large`,id:`grid-large`}),`Large`)),f.createElement(c,{htmlFor:`grid-xlarge`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`xlarge`,id:`grid-xlarge`}),`X-Large`)))},{name:`Disabled`,description:`Use the disabled prop on RadioGroupItem to disable individual items.`,code:`<RadioGroup defaultValue="option2" className="w-fit">
  <Field orientation="horizontal" data-disabled>
    <RadioGroupItem value="option1" id="disabled-1" disabled />
    <FieldLabel htmlFor="disabled-1" className="font-normal">Disabled</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="option2" id="disabled-2" />
    <FieldLabel htmlFor="disabled-2" className="font-normal">Option 2</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="option3" id="disabled-3" />
    <FieldLabel htmlFor="disabled-3" className="font-normal">Option 3</FieldLabel>
  </Field>
</RadioGroup>`,preview:f.createElement(r,{defaultValue:`option2`,className:`w-fit`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`option1`,id:`disabled-1`,disabled:!0}),f.createElement(c,{htmlFor:`disabled-1`,className:`font-normal`},`Disabled`)),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`option2`,id:`disabled-2`}),f.createElement(c,{htmlFor:`disabled-2`,className:`font-normal`},`Option 2`)),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`option3`,id:`disabled-3`}),f.createElement(c,{htmlFor:`disabled-3`,className:`font-normal`},`Option 3`)))},{name:`Invalid`,description:`Use aria-invalid on RadioGroupItem and data-invalid on Field to show validation errors.`,code:`<FieldSet className="w-full max-w-xs">
  <FieldLegend variant="label">Notification Preferences</FieldLegend>
  <FieldDescription>Choose how you want to receive notifications.</FieldDescription>
  <RadioGroup defaultValue="email">
    <Field orientation="horizontal" data-invalid>
      <RadioGroupItem value="email" id="invalid-email" aria-invalid />
      <FieldLabel htmlFor="invalid-email" className="font-normal">Email only</FieldLabel>
    </Field>
    <Field orientation="horizontal" data-invalid>
      <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
      <FieldLabel htmlFor="invalid-sms" className="font-normal">SMS only</FieldLabel>
    </Field>
    <Field orientation="horizontal" data-invalid>
      <RadioGroupItem value="both" id="invalid-both" aria-invalid />
      <FieldLabel htmlFor="invalid-both" className="font-normal">Both Email & SMS</FieldLabel>
    </Field>
  </RadioGroup>
</FieldSet>`,preview:f.createElement(u,{className:`w-full max-w-xs`},f.createElement(s,{variant:`label`},`Notification Preferences`),f.createElement(o,{},`Choose how you want to receive notifications.`),f.createElement(r,{defaultValue:`email`},f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`email`,id:`invalid-email`,"aria-invalid":!0}),f.createElement(c,{htmlFor:`invalid-email`,className:`font-normal`},`Email only`)),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`sms`,id:`invalid-sms`,"aria-invalid":!0}),f.createElement(c,{htmlFor:`invalid-sms`,className:`font-normal`},`SMS only`)),f.createElement(l,{orientation:`horizontal`},f.createElement(n,{value:`both`,id:`invalid-both`,"aria-invalid":!0}),f.createElement(c,{htmlFor:`invalid-both`,className:`font-normal`},`Both Email & SMS`))))}],props:[{name:`defaultValue`,type:`string`,description:`The value of the item that should be checked when initially rendered.`},{name:`value`,type:`string`,description:`The controlled value of the radio group.`},{name:`onValueChange`,type:`(value: string) => void`,description:`Event handler called when the checked value changes.`},{name:`disabled`,type:`boolean`,description:`When true, prevents the user from interacting with all radio items in the group.`,default:`false`},{name:`required`,type:`boolean`,description:`When true, indicates that one radio item in the group must be checked before submitting.`,default:`false`}]};export{p as radioGroupDoc};