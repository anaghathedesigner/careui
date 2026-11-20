import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./input-BRwr7HbH.js";import{t as i}from"./textarea-s05ZOwWG.js";import{Br as a,Gr as o,Hr as s,Kr as c,Lt as l,Ur as u,Vr as d,Wr as f,ft as p,ht as m,mt as h,qr as g,ut as _,yr as v,zr as y}from"./index-Ck2hFZuL.js";var b=t(e(),1),x=[`top`,`right`,`bottom`,`left`],S=[`sm`,`md`,`lg`,`xl`,`full`],C=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,w=b.createElement(y,null,b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`},`Open Registration Form`)),b.createElement(s,{size:`md`},b.createElement(o,null,b.createElement(c,null,`Patient Registration`),b.createElement(u,null,`Fill in the details below. All fields marked with * are required.`)),b.createElement(a,null,b.createElement(h,null,b.createElement(_,null,b.createElement(m,{htmlFor:`lf-firstname`},`First name *`),b.createElement(r,{id:`lf-firstname`,placeholder:`John`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-lastname`},`Last name *`),b.createElement(r,{id:`lf-lastname`,placeholder:`Doe`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-dob`},`Date of birth *`),b.createElement(r,{id:`lf-dob`,type:`date`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-email`},`Email address *`),b.createElement(r,{id:`lf-email`,type:`email`,placeholder:`john@example.com`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-phone`},`Phone number`),b.createElement(r,{id:`lf-phone`,type:`tel`,placeholder:`+1 (555) 000-0000`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-age`},`Age`),b.createElement(r,{id:`lf-age`,type:`number`,placeholder:`30`,min:`0`,max:`120`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-address`},`Street address`),b.createElement(r,{id:`lf-address`,placeholder:`123 Main St`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-city`},`City`),b.createElement(r,{id:`lf-city`,placeholder:`San Francisco`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-zip`},`ZIP / Postal code`),b.createElement(r,{id:`lf-zip`,placeholder:`94103`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-ec-name`},`Emergency contact name`),b.createElement(r,{id:`lf-ec-name`,placeholder:`Jane Doe`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-ec-phone`},`Emergency contact phone`),b.createElement(r,{id:`lf-ec-phone`,type:`tel`,placeholder:`+1 (555) 000-0001`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-website`},`Personal website`),b.createElement(r,{id:`lf-website`,type:`url`,placeholder:`https://example.com`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-allergies`},`Known allergies`),b.createElement(i,{id:`lf-allergies`,placeholder:`List any known allergies…`,rows:3}),b.createElement(p,null,`Separate multiple entries with commas.`)),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-meds`},`Current medications`),b.createElement(i,{id:`lf-meds`,placeholder:`List any current medications…`,rows:3})),b.createElement(`div`,{className:`flex items-center gap-3 py-1`},b.createElement(l,{id:`lf-newsletter`}),b.createElement(`label`,{htmlFor:`lf-newsletter`,className:`text-sm cursor-pointer`},`Subscribe to health tips newsletter`)),b.createElement(`div`,{className:`flex items-center gap-3 py-1`},b.createElement(l,{id:`lf-terms`}),b.createElement(`label`,{htmlFor:`lf-terms`,className:`text-sm cursor-pointer`},`I agree to the terms and conditions *`)),b.createElement(`div`,{className:`flex items-center justify-between py-1`},b.createElement(`label`,{htmlFor:`lf-sms`,className:`text-sm cursor-pointer`},`Enable SMS appointment reminders`),b.createElement(v,{id:`lf-sms`})))),b.createElement(f,null,b.createElement(n,{type:`submit`},`Submit registration`),b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Cancel`))))),T={id:`sheet`,name:`Sheet`,description:`Extends the Dialog component to display content that complements the main content of the screen.`,installation:{cli:`npx shadcn@latest add sheet`,manual:`Install @base-ui/react and copy the sheet component source code.`},usage:`import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Always wrap scrollable content in <SheetBody>.
// SheetContent uses overflow:hidden + flex-col so that the header and footer
// stay pinned even when the mobile keyboard is open. SheetBody is the only
// element that scrolls.
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
    </SheetHeader>
    <SheetBody>
      {/* your form / content goes here */}
    </SheetBody>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Close</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,preview:{code:`import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent size="md">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sheet-demo-name">Full name</FieldLabel>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-demo-username">Username</FieldLabel>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
              <FieldDescription>This is your public display name.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-demo-email">Email</FieldLabel>
              <Input id="sheet-demo-email" type="email" defaultValue="pedro@example.com" />
              <FieldDescription>Used for notifications and account recovery.</FieldDescription>
            </Field>
          </FieldGroup>
        </SheetBody>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,component:b.createElement(y,{},b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`},`Open`)),b.createElement(s,{size:`md`},b.createElement(o,{},b.createElement(c,{},`Edit profile`),b.createElement(u,{},`Make changes to your profile here. Click save when you're done.`)),b.createElement(a,{},b.createElement(h,{},b.createElement(_,{},b.createElement(m,{htmlFor:`sheet-demo-name`},`Full name`),b.createElement(r,{id:`sheet-demo-name`,defaultValue:`Pedro Duarte`})),b.createElement(_,{},b.createElement(m,{htmlFor:`sheet-demo-username`},`Username`),b.createElement(r,{id:`sheet-demo-username`,defaultValue:`@peduarte`}),b.createElement(p,{},`This is your public display name.`)),b.createElement(_,{},b.createElement(m,{htmlFor:`sheet-demo-email`},`Email`),b.createElement(r,{id:`sheet-demo-email`,type:`email`,defaultValue:`pedro@example.com`}),b.createElement(p,{},`Used for notifications and account recovery.`)))),b.createElement(f,{},b.createElement(n,{type:`submit`},`Save changes`),b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Close`)))))},examples:[{name:`Side`,description:"Use the `side` prop on `SheetContent` to set the edge of the screen where the sheet appears. Values are `top`, `right`, `bottom`, or `left`.",code:`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

export function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:h-dvh data-[side=top]:h-dvh md:data-[side=bottom]:h-[70dvh] md:data-[side=top]:h-[70dvh]"
          >
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <SheetBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              ))}
            </SheetBody>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}`,preview:b.createElement(`div`,{className:`flex flex-wrap gap-2`},...x.map(e=>b.createElement(y,{key:e},b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`,className:`capitalize`},e)),b.createElement(s,{side:e,className:`data-[side=bottom]:h-dvh data-[side=top]:h-dvh md:data-[side=bottom]:h-[70dvh] md:data-[side=top]:h-[70dvh]`},b.createElement(o,{},b.createElement(c,{},`Edit profile`),b.createElement(u,{},`Make changes to your profile here. Click save when you're done.`)),b.createElement(a,null,b.createElement(h,null,b.createElement(_,null,b.createElement(m,{htmlFor:`lf-firstname`},`First name *`),b.createElement(r,{id:`lf-firstname`,placeholder:`John`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-lastname`},`Last name *`),b.createElement(r,{id:`lf-lastname`,placeholder:`Doe`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-dob`},`Date of birth *`),b.createElement(r,{id:`lf-dob`,type:`date`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-email`},`Email address *`),b.createElement(r,{id:`lf-email`,type:`email`,placeholder:`john@example.com`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-phone`},`Phone number`),b.createElement(r,{id:`lf-phone`,type:`tel`,placeholder:`+1 (555) 000-0000`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-age`},`Age`),b.createElement(r,{id:`lf-age`,type:`number`,placeholder:`30`,min:`0`,max:`120`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-address`},`Street address`),b.createElement(r,{id:`lf-address`,placeholder:`123 Main St`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-city`},`City`),b.createElement(r,{id:`lf-city`,placeholder:`San Francisco`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-zip`},`ZIP / Postal code`),b.createElement(r,{id:`lf-zip`,placeholder:`94103`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-ec-name`},`Emergency contact name`),b.createElement(r,{id:`lf-ec-name`,placeholder:`Jane Doe`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-ec-phone`},`Emergency contact phone`),b.createElement(r,{id:`lf-ec-phone`,type:`tel`,placeholder:`+1 (555) 000-0001`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-website`},`Personal website`),b.createElement(r,{id:`lf-website`,type:`url`,placeholder:`https://example.com`})),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-allergies`},`Known allergies`),b.createElement(i,{id:`lf-allergies`,placeholder:`List any known allergies…`,rows:3}),b.createElement(p,null,`Separate multiple entries with commas.`)),b.createElement(_,null,b.createElement(m,{htmlFor:`lf-meds`},`Current medications`),b.createElement(i,{id:`lf-meds`,placeholder:`List any current medications…`,rows:3})),b.createElement(`div`,{className:`flex items-center gap-3 py-1`},b.createElement(l,{id:`lf-newsletter`}),b.createElement(`label`,{htmlFor:`lf-newsletter`,className:`text-sm cursor-pointer`},`Subscribe to health tips newsletter`)),b.createElement(`div`,{className:`flex items-center gap-3 py-1`},b.createElement(l,{id:`lf-terms`}),b.createElement(`label`,{htmlFor:`lf-terms`,className:`text-sm cursor-pointer`},`I agree to the terms and conditions *`)),b.createElement(`div`,{className:`flex items-center justify-between py-1`},b.createElement(`label`,{htmlFor:`lf-sms`,className:`text-sm cursor-pointer`},`Enable SMS appointment reminders`),b.createElement(v,{id:`lf-sms`})))),b.createElement(f,{},b.createElement(n,{type:`submit`},`Save changes`),b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Cancel`)))))))},{name:`Sizes`,description:"Use the `size` prop on `SheetContent` to control the width on desktop. Available sizes: `sm` (384px), `md` (512px), `lg` (672px), `xl` (896px), `full`, `screen`.",code:`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIZES = ["sm", "md", "lg", "xl", "full"] as const

export function SheetSizes() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIZES.map((size) => (
        <Sheet key={size}>
          <SheetTrigger asChild>
            <Button variant="outline" className="uppercase">
              {size}
            </Button>
          </SheetTrigger>
          <SheetContent size={size}>
            <SheetHeader>
              <SheetTitle>Sheet — {size.toUpperCase()}</SheetTitle>
              <SheetDescription>
                This sheet uses <code>size=&quot;{size}&quot;</code>.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}`,preview:b.createElement(`div`,{className:`flex flex-wrap gap-2`},...S.map(e=>b.createElement(y,{key:e},b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`,className:`uppercase`},e)),b.createElement(s,{size:e},b.createElement(o,{},b.createElement(c,{},`Sheet — ${e.toUpperCase()}`),b.createElement(u,{},`This sheet uses size="${e}".`)),b.createElement(a,{},...Array.from({length:10},(e,t)=>b.createElement(`p`,{key:t,className:`mb-2 leading-relaxed`},C))),b.createElement(f,{},b.createElement(n,{type:`submit`},`Save changes`),b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Cancel`)))))))},{name:`Dismissible`,description:"Set `dismissible={true}` on `SheetContent` to allow closing the sheet by clicking outside. By default sheets are non-dismissible and can only be closed via the close button or the Escape key.",code:`import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function SheetDismissible() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open (dismissible)</Button>
      </SheetTrigger>
      <SheetContent dismissible={true} size="md">
        <SheetHeader>
          <SheetTitle>Patient Registration</SheetTitle>
          <SheetDescription>
            Click outside to close. All fields marked with * are required.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="dis-firstname">First name *</FieldLabel>
              <Input id="dis-firstname" placeholder="John" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-lastname">Last name *</FieldLabel>
              <Input id="dis-lastname" placeholder="Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-dob">Date of birth *</FieldLabel>
              <Input id="dis-dob" type="date" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-email">Email address *</FieldLabel>
              <Input id="dis-email" type="email" placeholder="john@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-phone">Phone number</FieldLabel>
              <Input id="dis-phone" type="tel" placeholder="+1 (555) 000-0000" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-age">Age</FieldLabel>
              <Input id="dis-age" type="number" placeholder="30" min="0" max="120" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-address">Street address</FieldLabel>
              <Input id="dis-address" placeholder="123 Main St" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-city">City</FieldLabel>
              <Input id="dis-city" placeholder="San Francisco" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-zip">ZIP / Postal code</FieldLabel>
              <Input id="dis-zip" placeholder="94103" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-ec-name">Emergency contact name</FieldLabel>
              <Input id="dis-ec-name" placeholder="Jane Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-ec-phone">Emergency contact phone</FieldLabel>
              <Input id="dis-ec-phone" type="tel" placeholder="+1 (555) 000-0001" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-allergies">Known allergies</FieldLabel>
              <Textarea id="dis-allergies" placeholder="List any known allergies…" rows={3} />
              <FieldDescription>Separate multiple entries with commas.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="dis-meds">Current medications</FieldLabel>
              <Textarea id="dis-meds" placeholder="List any current medications…" rows={3} />
            </Field>
            <div className="flex items-center gap-3 py-1">
              <Checkbox id="dis-terms" />
              <label htmlFor="dis-terms" className="text-sm cursor-pointer">
                I agree to the terms and conditions *
              </label>
            </div>
            <div className="flex items-center justify-between py-1">
              <label htmlFor="dis-sms" className="text-sm cursor-pointer">
                Enable SMS appointment reminders
              </label>
              <Switch id="dis-sms" />
            </div>
          </FieldGroup>
        </SheetBody>
        <SheetFooter>
          <Button type="submit">Submit registration</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,preview:b.createElement(y,{},b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`},`Open (dismissible)`)),b.createElement(s,{dismissible:!0,size:`md`},b.createElement(o,{},b.createElement(c,{},`Patient Registration`),b.createElement(u,{},`Click outside to close. All fields marked with * are required.`)),b.createElement(a,{},b.createElement(h,{},b.createElement(_,{},b.createElement(m,{htmlFor:`dis-firstname`},`First name *`),b.createElement(r,{id:`dis-firstname`,placeholder:`John`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-lastname`},`Last name *`),b.createElement(r,{id:`dis-lastname`,placeholder:`Doe`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-dob`},`Date of birth *`),b.createElement(r,{id:`dis-dob`,type:`date`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-email`},`Email address *`),b.createElement(r,{id:`dis-email`,type:`email`,placeholder:`john@example.com`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-phone`},`Phone number`),b.createElement(r,{id:`dis-phone`,type:`tel`,placeholder:`+1 (555) 000-0000`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-age`},`Age`),b.createElement(r,{id:`dis-age`,type:`number`,placeholder:`30`,min:`0`,max:`120`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-address`},`Street address`),b.createElement(r,{id:`dis-address`,placeholder:`123 Main St`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-city`},`City`),b.createElement(r,{id:`dis-city`,placeholder:`San Francisco`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-zip`},`ZIP / Postal code`),b.createElement(r,{id:`dis-zip`,placeholder:`94103`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-ec-name`},`Emergency contact name`),b.createElement(r,{id:`dis-ec-name`,placeholder:`Jane Doe`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-ec-phone`},`Emergency contact phone`),b.createElement(r,{id:`dis-ec-phone`,type:`tel`,placeholder:`+1 (555) 000-0001`})),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-allergies`},`Known allergies`),b.createElement(i,{id:`dis-allergies`,placeholder:`List any known allergies…`,rows:3}),b.createElement(p,{},`Separate multiple entries with commas.`)),b.createElement(_,{},b.createElement(m,{htmlFor:`dis-meds`},`Current medications`),b.createElement(i,{id:`dis-meds`,placeholder:`List any current medications…`,rows:3})),b.createElement(`div`,{className:`flex items-center gap-3 py-1`},b.createElement(l,{id:`dis-terms`}),b.createElement(`label`,{htmlFor:`dis-terms`,className:`text-sm cursor-pointer`},`I agree to the terms and conditions *`)),b.createElement(`div`,{className:`flex items-center justify-between py-1`},b.createElement(`label`,{htmlFor:`dis-sms`,className:`text-sm cursor-pointer`},`Enable SMS appointment reminders`),b.createElement(v,{id:`dis-sms`})),b.createElement(`div`,{className:`flex flex-row-reverse py-4 border-t bg-background gap-4 items-end`},b.createElement(n,{type:`submit`},`Submit registration`),b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Cancel`)))))))},{name:`Long Form`,description:"A sheet with a long scrollable form containing 16 fields of varied types — text, email, tel, number, date, url, textarea, checkbox, and switch. The header and footer remain pinned while only `SheetBody` scrolls, including when the mobile keyboard is open.",code:`import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function LongFormSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Registration Form</Button>
      </SheetTrigger>
      <SheetContent size="md">
        <SheetHeader>
          <SheetTitle>Patient Registration</SheetTitle>
          <SheetDescription>
            Fill in the details below. All fields marked with * are required.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="lf-firstname">First name *</FieldLabel>
              <Input id="lf-firstname" placeholder="John" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-lastname">Last name *</FieldLabel>
              <Input id="lf-lastname" placeholder="Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-dob">Date of birth *</FieldLabel>
              <Input id="lf-dob" type="date" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-email">Email address *</FieldLabel>
              <Input id="lf-email" type="email" placeholder="john@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-phone">Phone number</FieldLabel>
              <Input id="lf-phone" type="tel" placeholder="+1 (555) 000-0000" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-age">Age</FieldLabel>
              <Input id="lf-age" type="number" placeholder="30" min="0" max="120" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-address">Street address</FieldLabel>
              <Input id="lf-address" placeholder="123 Main St" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-city">City</FieldLabel>
              <Input id="lf-city" placeholder="San Francisco" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-zip">ZIP / Postal code</FieldLabel>
              <Input id="lf-zip" placeholder="94103" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-ec-name">Emergency contact name</FieldLabel>
              <Input id="lf-ec-name" placeholder="Jane Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-ec-phone">Emergency contact phone</FieldLabel>
              <Input id="lf-ec-phone" type="tel" placeholder="+1 (555) 000-0001" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-website">Personal website</FieldLabel>
              <Input id="lf-website" type="url" placeholder="https://example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-allergies">Known allergies</FieldLabel>
              <Textarea id="lf-allergies" placeholder="List any known allergies…" rows={3} />
              <FieldDescription>Separate multiple entries with commas.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="lf-meds">Current medications</FieldLabel>
              <Textarea id="lf-meds" placeholder="List any current medications…" rows={3} />
            </Field>
            <div className="flex items-center gap-3 py-1">
              <Checkbox id="lf-newsletter" />
              <label htmlFor="lf-newsletter" className="text-sm cursor-pointer">
                Subscribe to health tips newsletter
              </label>
            </div>
            <div className="flex items-center gap-3 py-1">
              <Checkbox id="lf-terms" />
              <label htmlFor="lf-terms" className="text-sm cursor-pointer">
                I agree to the terms and conditions *
              </label>
            </div>
            <div className="flex items-center justify-between py-1">
              <label htmlFor="lf-sms" className="text-sm cursor-pointer">
                Enable SMS appointment reminders
              </label>
              <Switch id="lf-sms" />
            </div>
          </FieldGroup>
        </SheetBody>
        <SheetFooter>
          <Button type="submit">Submit registration</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,preview:w},{name:`Non-modal`,description:"Set `modal={false}` on `Sheet` and `overlay={false}` on `SheetContent` to keep the page behind fully interactive — users can scroll, click, and type outside the sheet while it's open.",code:`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetNonModal() {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button variant="outline">Open non-modal sheet</Button>
      </SheetTrigger>
      <SheetContent overlay={false} size="md">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            The page behind remains scrollable and clickable while this panel is open.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Try interacting with the rest of the page — links, buttons, and
            scrollable areas all remain accessible because{" "}
            <code>modal=&#123;false&#125;</code> disables focus trapping and
            pointer-event blocking.
          </p>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,preview:b.createElement(y,{modal:!1},b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`},`Open non-modal sheet`)),b.createElement(s,{overlay:!1,size:`md`},b.createElement(o,{},b.createElement(c,{},`Filters`),b.createElement(u,{},`The page behind remains scrollable and clickable while this panel is open.`)),b.createElement(a,{},b.createElement(`p`,{className:`text-muted-foreground text-sm leading-relaxed`},`Try interacting with the rest of the page — links, buttons, and scrollable areas all remain accessible because `,b.createElement(`code`,{},`modal={false}`),` disables focus trapping and pointer-event blocking.`)),b.createElement(f,{},b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Close`)))))},{name:`Nested Sheets`,description:`Sheets can be nested — opening a sheet from inside another sheet stacks the second on top of the first. Each sheet keeps its own focus trap and dismiss behavior; closing the inner sheet returns focus to the trigger in the parent sheet.`,code:`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function NestedSheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent size="md">
        <SheetHeader>
          <SheetTitle>Nested Sheets</SheetTitle>
          <SheetDescription>
            Open another sheet from inside this one to stack them.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p className="text-muted-foreground mb-4 text-sm">
            Sheets compose naturally — drop a{" "}
            <code className="bg-muted rounded px-1 py-0.5 text-xs">Sheet</code>{" "}
            anywhere inside another sheet&apos;s body and it will open on top
            with its own overlay and focus trap.
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full">Open Nested Sheet</Button>
            </SheetTrigger>
            <SheetContent size="sm">
              <SheetHeader>
                <SheetTitle>This sheet is nested.</SheetTitle>
                <SheetDescription>
                  Closing this sheet returns focus to the trigger in the parent
                  sheet.
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,preview:b.createElement(y,null,b.createElement(g,{asChild:!0},b.createElement(n,{variant:`outline`},`Open Sheet`)),b.createElement(s,{size:`md`},b.createElement(o,null,b.createElement(c,null,`Nested Sheets`),b.createElement(u,null,`Open another sheet from inside this one to stack them.`)),b.createElement(a,null,b.createElement(`p`,{className:`text-muted-foreground mb-4 text-sm`},`Sheets compose naturally — drop a `,b.createElement(`code`,{className:`bg-muted rounded px-1 py-0.5 text-xs`},`Sheet`),` anywhere inside another sheet's body and it will open on top with its own overlay and focus trap.`),b.createElement(y,null,b.createElement(g,{asChild:!0},b.createElement(n,{className:`w-full`},`Open Nested Sheet`)),b.createElement(s,{size:`sm`},b.createElement(o,null,b.createElement(c,null,`This sheet is nested.`),b.createElement(u,null,`Closing this sheet returns focus to the trigger in the parent sheet.`)),b.createElement(f,null,b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Close`)))))),b.createElement(f,null,b.createElement(d,{asChild:!0},b.createElement(n,{variant:`outline`},`Close`)))))}]};export{T as sheetDoc};