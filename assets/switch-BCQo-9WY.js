import{i as e,l as t}from"./dist-DtVyZPdI.js";import{dt as n,ft as r,ht as i,mt as a,ut as o,yr as s,yt as c}from"./index-Ck2hFZuL.js";var l=t(e(),1),u={id:`switch`,name:`Switch`,description:`A control that allows the user to toggle between checked and not checked.`,installation:{cli:`npx shadcn@latest add switch`,manual:`Install @base-ui/react and copy the switch component source code.`},usage:`import { Switch } from "@/components/ui/switch"

<Switch />`,preview:{code:`import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <Field orientation="horizontal">
      <Switch id="airplane-mode" />
      <FieldLabel htmlFor="airplane-mode">Airplane Mode</FieldLabel>
    </Field>
  )
}`,component:l.createElement(o,{orientation:`horizontal`},l.createElement(s,{id:`airplane-mode`}),l.createElement(i,{htmlFor:`airplane-mode`},`Airplane Mode`))},examples:[{name:`Description`,description:"Pair a `Switch` with `FieldContent`, `FieldLabel`, and `FieldDescription` inside a horizontal `Field` to provide context.",code:`import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-share-devices">Share across devices</FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-share-devices" />
    </Field>
  )
}`,preview:l.createElement(o,{orientation:`horizontal`,className:`max-w-sm`},l.createElement(n,{},l.createElement(i,{htmlFor:`switch-share-devices`},`Share across devices`),l.createElement(r,{},`Focus is shared across devices, and turns off when you leave the app.`)),l.createElement(s,{id:`switch-share-devices`}))},{name:`Choice Card`,description:"Card-style selection where `FieldLabel` wraps the entire `Field` for a fully clickable row.",code:`import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <FieldLabel htmlFor="switch-choice-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-choice-share" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="switch-choice-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-choice-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}`,preview:l.createElement(a,{className:`w-full max-w-sm`},l.createElement(i,{htmlFor:`switch-choice-share`},l.createElement(o,{orientation:`horizontal`},l.createElement(n,{},l.createElement(c,{},`Share across devices`),l.createElement(r,{},`Focus is shared across devices, and turns off when you leave the app.`)),l.createElement(s,{id:`switch-choice-share`}))),l.createElement(i,{htmlFor:`switch-choice-notifications`},l.createElement(o,{orientation:`horizontal`},l.createElement(n,{},l.createElement(c,{},`Enable notifications`),l.createElement(r,{},`Receive notifications when focus mode is enabled or disabled.`)),l.createElement(s,{id:`switch-choice-notifications`,defaultChecked:!0}))))},{name:`Disabled`,description:"Add the `disabled` prop to the `Switch` and `data-disabled` to the wrapping `Field` to apply disabled styling.",code:`import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled" disabled />
      <FieldLabel htmlFor="switch-disabled">Disabled</FieldLabel>
    </Field>
  )
}`,preview:l.createElement(o,Object.assign({orientation:`horizontal`,className:`w-fit`},{"data-disabled":``}),l.createElement(s,{id:`switch-disabled`,disabled:!0}),l.createElement(i,{htmlFor:`switch-disabled`},`Disabled`))},{name:`Invalid`,description:"Add `aria-invalid` to the `Switch` and `data-invalid` to the wrapping `Field` to indicate a validation error.",code:`import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchInvalid() {
  return (
    <Field orientation="horizontal" className="max-w-sm" data-invalid>
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>
          You must accept the terms and conditions to continue.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-terms" aria-invalid />
    </Field>
  )
}`,preview:l.createElement(o,Object.assign({orientation:`horizontal`,className:`max-w-sm`},{"data-invalid":``}),l.createElement(i,{htmlFor:`switch-terms`},l.createElement(n,{},l.createElement(i,{htmlFor:`switch-terms`},`Accept terms and conditions`),l.createElement(r,{},`You must accept the terms and conditions to continue.`)),l.createElement(s,{id:`switch-terms`,"aria-invalid":!0})))},{name:`Size`,description:"Use the `size` prop to change the size of the switch. Available values: `sm`, `default`.",code:`import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchSizes() {
  return (
    <FieldGroup className="w-full max-w-40">
      <Field orientation="horizontal">
        <Switch id="switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-default" size="default" />
        <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
      </Field>
    </FieldGroup>
  )
}`,preview:l.createElement(a,{className:`w-full max-w-40`},l.createElement(o,{orientation:`horizontal`},l.createElement(s,{id:`switch-size-sm`,size:`sm`}),l.createElement(i,{htmlFor:`switch-size-sm`},`Small`)),l.createElement(o,{orientation:`horizontal`},l.createElement(s,{id:`switch-size-default`,size:`default`}),l.createElement(i,{htmlFor:`switch-size-default`},`Default`)))},{name:`Accessibility`,description:`Guidelines for making switches usable by everyone, including keyboard and screen-reader users.`,items:[{title:`Use for binary settings`,description:`Use a switch only for settings that toggle immediately between on and off.`},{title:`Provide a clear label`,description:`Every switch must have a visible label describing the setting.`},{title:`Link label to switch`,description:`Use id and htmlFor so screen readers correctly associate the label with the switch.`},{title:`Optional description`,description:`Add a short description if the setting needs more explanation.`},{title:`Label and description should be clickable`,description:`When a description is present, both the label and description should toggle the switch.`},{title:`Keyboard accessible`,description:`Tab → focus. Space / Enter → toggle.`},{title:`Visible focus state`,description:`The switch must show a clear focus indicator.`},{title:`Do not rely on color alone`,description:`Use additional cues like thumb movement or icons (check / minus) so color-blind users can understand the state.`},{title:`Touch target size`,description:`Ensure a minimum 44 × 44 px clickable area.`},{title:`Expose state to assistive tech`,description:`Use proper attributes like role="switch" and aria-checked.`}],code:``,preview:null}]};export{u as switchDoc};