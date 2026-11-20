import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./input-BRwr7HbH.js";import{Ai as i,Fi as a,Mi as o,Ni as s,Oi as c,Pi as l,at as u,bt as d,ct as f,ji as p,ki as m,lt as h,mt as g,nt as _,rt as v,ut as y}from"./index-Ck2hFZuL.js";var b=t(e(),1),x=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,S={id:`dialog`,name:`Dialog`,description:`A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.`,installation:{cli:`npx shadcn@latest add dialog`,manual:`Install @base-ui/react and copy the dialog component source code.`},usage:`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,preview:{code:`import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}`,component:b.createElement(c,{},b.createElement(`form`,{},b.createElement(a,{asChild:!0},b.createElement(n,{variant:`outline`},`Open Dialog`)),b.createElement(i,{className:`sm:max-w-sm`},b.createElement(s,{},b.createElement(l,{},`Edit profile`),b.createElement(p,{},`Make changes to your profile here. Click save when you're done.`)),b.createElement(g,{},b.createElement(y,{},b.createElement(d,{htmlFor:`name-1`},`Name`),b.createElement(r,{id:`name-1`,name:`name`,defaultValue:`Pedro Duarte`})),b.createElement(y,{},b.createElement(d,{htmlFor:`username-1`},`Username`),b.createElement(r,{id:`username-1`,name:`username`,defaultValue:`@peduarte`}))),b.createElement(o,{},b.createElement(m,{asChild:!0},b.createElement(n,{variant:`outline`},`Cancel`)),b.createElement(n,{type:`submit`},`Save changes`)))))},examples:[{name:`Sticky Footer`,description:`Keep actions visible while the content scrolls.`,code:`import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sticky Footer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sticky Footer</DialogTitle>
          <DialogDescription>
            This dialog has a sticky footer that stays visible while the content
            scrolls.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,preview:b.createElement(c,{},b.createElement(a,{asChild:!0},b.createElement(n,{variant:`outline`},`Sticky Footer`)),b.createElement(i,{},b.createElement(s,{},b.createElement(l,{},`Sticky Footer`),b.createElement(p,{},`This dialog has a sticky footer that stays visible while the content scrolls.`)),b.createElement(`div`,{className:`-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4`},...Array.from({length:10},(e,t)=>b.createElement(`p`,{key:t,className:`mb-4 leading-normal`},x))),b.createElement(o,{},b.createElement(m,{asChild:!0},b.createElement(n,{variant:`outline`},`Close`)))))},{name:`Scrollable Content`,description:`Long content can scroll while the header stays in view.`,code:`import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable Content</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>
          <DialogDescription>
            This is a dialog with scrollable content.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}`,preview:b.createElement(c,{},b.createElement(a,{asChild:!0},b.createElement(n,{variant:`outline`},`Scrollable Content`)),b.createElement(i,{},b.createElement(s,{},b.createElement(l,{},`Scrollable Content`),b.createElement(p,{},`This is a dialog with scrollable content.`)),b.createElement(`div`,{className:`-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4`},...Array.from({length:10},(e,t)=>b.createElement(`p`,{key:t,className:`mb-4 leading-normal`},x)))))},{name:`Scrollable Content with Selects`,description:`Form fields with Select inside a scrollable dialog body. Their overlays open above the scroll container without clipping.`,code:`import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DialogScrollableWithSelects() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable with Selects</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Patient Details</DialogTitle>
          <DialogDescription>
            Fill in the details below. Scroll to see more fields.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-x-clip overflow-y-auto px-4">
          <FieldGroup>
            <Field>
              <Label>Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Priority</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Ward</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select ward" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="icu">ICU</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="outpatient">Outpatient</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Shift</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select shift" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Allergies</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select allergies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="penicillin">Penicillin</SelectItem>
                  <SelectItem value="sulfa">Sulfa Drugs</SelectItem>
                  <SelectItem value="nsaid">NSAIDs</SelectItem>
                  <SelectItem value="none">None Known</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Insurance Provider</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bc">Blue Cross</SelectItem>
                  <SelectItem value="aetna">Aetna</SelectItem>
                  <SelectItem value="united">United Health</SelectItem>
                  <SelectItem value="cigna">Cigna</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending Review</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,preview:b.createElement(c,{},b.createElement(a,{asChild:!0},b.createElement(n,{variant:`outline`},`Scrollable with Selects`)),b.createElement(i,{},b.createElement(s,{},b.createElement(l,{},`Patient Details`),b.createElement(p,{},`Fill in the details below. Scroll to see more fields.`)),b.createElement(`div`,{className:`-mx-4 no-scrollbar max-h-[50vh] overflow-x-clip overflow-y-auto px-4`},b.createElement(g,{},b.createElement(y,{},b.createElement(d,{},`Department`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select department`})),b.createElement(v,{},b.createElement(u,{value:`cardiology`},`Cardiology`),b.createElement(u,{value:`neurology`},`Neurology`),b.createElement(u,{value:`orthopedics`},`Orthopedics`),b.createElement(u,{value:`pediatrics`},`Pediatrics`)))),b.createElement(y,{},b.createElement(d,{},`Priority`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select priority`})),b.createElement(v,{},b.createElement(u,{value:`low`},`Low`),b.createElement(u,{value:`medium`},`Medium`),b.createElement(u,{value:`high`},`High`),b.createElement(u,{value:`critical`},`Critical`)))),b.createElement(y,{},b.createElement(d,{},`Ward`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select ward`})),b.createElement(v,{},b.createElement(u,{value:`icu`},`ICU`),b.createElement(u,{value:`general`},`General`),b.createElement(u,{value:`emergency`},`Emergency`),b.createElement(u,{value:`outpatient`},`Outpatient`)))),b.createElement(y,{},b.createElement(d,{},`Shift`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select shift`})),b.createElement(v,{},b.createElement(u,{value:`morning`},`Morning`),b.createElement(u,{value:`afternoon`},`Afternoon`),b.createElement(u,{value:`night`},`Night`)))),b.createElement(y,{},b.createElement(d,{},`Allergies`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select allergies`})),b.createElement(v,{},b.createElement(u,{value:`penicillin`},`Penicillin`),b.createElement(u,{value:`sulfa`},`Sulfa Drugs`),b.createElement(u,{value:`nsaid`},`NSAIDs`),b.createElement(u,{value:`none`},`None Known`)))),b.createElement(y,{},b.createElement(d,{},`Insurance Provider`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select provider`})),b.createElement(v,{},b.createElement(u,{value:`bc`},`Blue Cross`),b.createElement(u,{value:`aetna`},`Aetna`),b.createElement(u,{value:`united`},`United Health`),b.createElement(u,{value:`cigna`},`Cigna`)))),b.createElement(y,{},b.createElement(d,{},`Status`),b.createElement(_,{},b.createElement(f,{},b.createElement(h,{placeholder:`Select status`})),b.createElement(v,{},b.createElement(u,{value:`active`},`Active`),b.createElement(u,{value:`inactive`},`Inactive`),b.createElement(u,{value:`pending`},`Pending Review`)))))),b.createElement(o,{},b.createElement(m,{asChild:!0},b.createElement(n,{variant:`outline`},`Cancel`)),b.createElement(n,{},`Save`))))}],props:[{name:`open`,type:`boolean`,description:`The controlled open state of the dialog.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Event handler called when the open state changes.`},{name:`modal`,type:`boolean`,description:`The modality of the dialog.`,default:`true`}]};export{S as dialogDoc};