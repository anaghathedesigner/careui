import{i as e,l as t}from"./dist-DtVyZPdI.js";import{Lt as n,_r as r,bt as i,dr as a,dt as o,fr as s,ft as c,gr as l,gt as u,ht as d,mr as f,mt as p,ut as m,vr as h,vt as g,yt as _}from"./index-Ck2hFZuL.js";var v=t(e(),1),y=[{id:`1`,name:`Sarah Chen`,email:`sarah.chen@example.com`,role:`Admin`},{id:`2`,name:`Marcus Rodriguez`,email:`marcus.rodriguez@example.com`,role:`User`},{id:`3`,name:`Priya Patel`,email:`priya.patel@example.com`,role:`User`},{id:`4`,name:`David Kim`,email:`david.kim@example.com`,role:`Editor`}];function b(){let[e,t]=v.useState(new Set([`1`])),i=e.size===y.length,o=e=>{t(e?new Set(y.map(e=>e.id)):new Set)},c=(n,r)=>{let i=new Set(e);r?i.add(n):i.delete(n),t(i)};return v.createElement(a,{},v.createElement(r,{},v.createElement(h,{},v.createElement(l,{className:`w-8`},v.createElement(n,{id:`select-all-checkbox`,name:`select-all-checkbox`,checked:i,onCheckedChange:o})),v.createElement(l,{},`Name`),v.createElement(l,{},`Email`),v.createElement(l,{},`Role`))),v.createElement(s,{},...y.map(t=>v.createElement(h,Object.assign({key:t.id},e.has(t.id)?{"data-state":`selected`}:{}),v.createElement(f,{},v.createElement(n,{id:`row-${t.id}-checkbox`,name:`row-${t.id}-checkbox`,checked:e.has(t.id),onCheckedChange:e=>c(t.id,e)})),v.createElement(f,{className:`font-medium`},t.name),v.createElement(f,{},t.email),v.createElement(f,{},t.role)))))}var x={id:`checkbox`,name:`Checkbox`,description:`A control that allows the user to toggle between checked and not checked.`,installation:{cli:`npx shadcn@latest add checkbox`,manual:`Install @base-ui/react, then copy and paste the checkbox component source code into your project.`},usage:`import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />`,preview:{code:`import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-2"
          name="terms-checkbox-2"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
        <FieldLabel htmlFor="toggle-checkbox">Enable notifications</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}`,component:v.createElement(p,{className:`max-w-sm`},v.createElement(m,{orientation:`horizontal`},v.createElement(n,{id:`terms-checkbox`,name:`terms-checkbox`}),v.createElement(i,{htmlFor:`terms-checkbox`},`Accept terms and conditions`)),v.createElement(m,{orientation:`horizontal`},v.createElement(n,{id:`terms-checkbox-2`,name:`terms-checkbox-2`,defaultChecked:!0}),v.createElement(o,{},v.createElement(d,{htmlFor:`terms-checkbox-2`},`Accept terms and conditions`),v.createElement(c,{},`By clicking this checkbox, you agree to the terms.`))),v.createElement(m,Object.assign({orientation:`horizontal`},{"data-disabled":``}),v.createElement(n,{id:`toggle-checkbox`,name:`toggle-checkbox`,disabled:!0}),v.createElement(d,{htmlFor:`toggle-checkbox`},`Enable notifications`)),v.createElement(d,{},v.createElement(m,{orientation:`horizontal`},v.createElement(n,{id:`toggle-checkbox-2`,name:`toggle-checkbox-2`}),v.createElement(o,{},v.createElement(_,{},`Enable notifications`),v.createElement(c,{},`You can enable or disable notifications at any time.`)))))},examples:[{name:`Basic`,description:"Pair the checkbox with `Field` and `FieldLabel` for proper layout and labeling.",code:`import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}`,preview:v.createElement(p,{className:`mx-auto w-56`},v.createElement(m,{orientation:`horizontal`},v.createElement(n,{id:`terms-checkbox-basic`,name:`terms-checkbox-basic`}),v.createElement(d,{htmlFor:`terms-checkbox-basic`},`Accept terms and conditions`)))},{name:`Description`,description:"Use `FieldContent` and `FieldDescription` for helper text.",code:`import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

export function CheckboxDescription() {
  return (
    <FieldGroup className="mx-auto w-72">
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-desc"
          name="terms-checkbox-desc"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}`,preview:v.createElement(p,{className:`mx-auto w-72`},v.createElement(m,{orientation:`horizontal`},v.createElement(n,{id:`terms-checkbox-desc`,name:`terms-checkbox-desc`,defaultChecked:!0}),v.createElement(o,{},v.createElement(d,{htmlFor:`terms-checkbox-desc`},`Accept terms and conditions`),v.createElement(c,{},`By clicking this checkbox, you agree to the terms and conditions.`))))},{name:`Disabled`,description:"Use the `disabled` prop and `data-disabled` on `<Field>` for disabled styles.",code:`import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function CheckboxDisabled() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          disabled
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          Enable notifications
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}`,preview:v.createElement(p,{className:`mx-auto w-56`},v.createElement(m,Object.assign({orientation:`horizontal`},{"data-disabled":``}),v.createElement(n,{id:`toggle-checkbox-disabled`,name:`toggle-checkbox-disabled`,disabled:!0}),v.createElement(d,{htmlFor:`toggle-checkbox-disabled`},`Enable notifications`)))},{name:`Invalid`,description:"Set `aria-invalid` on the checkbox and `data-invalid` on the field wrapper to show invalid styles.",code:`import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function CheckboxInvalid() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-invalid>
        <Checkbox
          id="terms-checkbox-invalid"
          name="terms-checkbox-invalid"
          aria-invalid
        />
        <FieldLabel htmlFor="terms-checkbox-invalid">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}`,preview:v.createElement(p,{className:`mx-auto w-56`},v.createElement(m,Object.assign({orientation:`horizontal`},{"data-invalid":``}),v.createElement(n,{id:`terms-checkbox-invalid`,name:`terms-checkbox-invalid`,"aria-invalid":!0}),v.createElement(d,{htmlFor:`terms-checkbox-invalid`},`Accept terms and conditions`)))},{name:`Group`,description:`Use multiple fields to create a checkbox list.`,code:`import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

const items = [
  { id: "hard-disks", label: "Hard disks", defaultChecked: true },
  { id: "external-disks", label: "External disks", defaultChecked: true },
  { id: "cds-dvds", label: "CDs, DVDs, and iPods" },
  { id: "connected-servers", label: "Connected servers" },
]

export function CheckboxGroup() {
  return (
    <FieldSet>
      <FieldLegend variant="label">
        Show these items on the desktop:
      </FieldLegend>
      <FieldDescription>
        Select the items you want to show on the desktop.
      </FieldDescription>
      <FieldGroup className="gap-3">
        {items.map((item) => (
          <Field key={item.id} orientation="horizontal">
            <Checkbox
              id={\`checkbox-\${item.id}\`}
              name={\`checkbox-\${item.id}\`}
              defaultChecked={item.defaultChecked}
            />
            <FieldLabel htmlFor={\`checkbox-\${item.id}\`} className="font-normal">
              {item.label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}`,preview:v.createElement(g,{},v.createElement(u,{variant:`label`},`Show these items on the desktop:`),v.createElement(c,{},`Select the items you want to show on the desktop.`),v.createElement(p,{className:`gap-3`},...[{id:`hard-disks`,label:`Hard disks`,defaultChecked:!0},{id:`external-disks`,label:`External disks`,defaultChecked:!0},{id:`cds-dvds`,label:`CDs, DVDs, and iPods`},{id:`connected-servers`,label:`Connected servers`}].map(e=>v.createElement(m,{key:e.id,orientation:`horizontal`},v.createElement(n,{id:`checkbox-${e.id}`,name:`checkbox-${e.id}`,defaultChecked:e.defaultChecked}),v.createElement(d,{htmlFor:`checkbox-${e.id}`,className:`font-normal`},e.label)))))},{name:`Table`,description:`Use checkboxes inside a table for row selection.`,code:`"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tableData = [
  { id: "1", name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin" },
  { id: "2", name: "Marcus Rodriguez", email: "marcus.rodriguez@example.com", role: "User" },
  { id: "3", name: "Priya Patel", email: "priya.patel@example.com", role: "User" },
  { id: "4", name: "David Kim", email: "david.kim@example.com", role: "Editor" },
]

export function CheckboxInTable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(["1"])
  )

  const selectAll = selectedRows.size === tableData.length

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(checked ? new Set(tableData.map((r) => r.id)) : new Set())
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const next = new Set(selectedRows)
    checked ? next.add(id) : next.delete(id)
    setSelectedRows(next)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox
              id="select-all-checkbox"
              name="select-all-checkbox"
              checked={selectAll}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            key={row.id}
            data-state={selectedRows.has(row.id) ? "selected" : undefined}
          >
            <TableCell>
              <Checkbox
                id={\`row-\${row.id}-checkbox\`}
                name={\`row-\${row.id}-checkbox\`}
                checked={selectedRows.has(row.id)}
                onCheckedChange={(checked) =>
                  handleSelectRow(row.id, checked === true)
                }
              />
            </TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`,preview:v.createElement(b,{})}],props:[{name:`size`,type:`"default" | "md"`,description:'Controls the size of the checkbox. `"default"` is 20 px; `"md"` is 16 px.',default:`"default"`},{name:`checked`,type:`boolean`,description:`The controlled checked state of the checkbox.`},{name:`defaultChecked`,type:`boolean`,description:`The default checked state when initially rendered.`},{name:`indeterminate`,type:`boolean`,description:"The mixed state, decoupled from `checked` (e.g. a header checkbox when only some rows are selected).",default:`false`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,description:`Event handler called when the checked state changes.`},{name:`disabled`,type:`boolean`,description:`When true, prevents the user from interacting with the checkbox.`},{name:`required`,type:`boolean`,description:`When true, indicates that the user must check the checkbox before the form is submitted.`}]};export{x as checkboxDoc};