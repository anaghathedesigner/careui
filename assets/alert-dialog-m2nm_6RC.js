import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./button-DTwq4-az.js";import{Vi as i,_n as a,cn as o,dn as s,fn as c,gn as l,hn as u,ln as d,mn as f,pn as p,un as m}from"./index-Ck2hFZuL.js";var h=n(`bluetooth`,[[`path`,{d:`m7 7 10 10-5 5V2l5 5L7 17`,key:`1q5490`}]]),g=n(`circle-fading-plus`,[[`path`,{d:`M12 2a10 10 0 0 1 7.38 16.75`,key:`175t95`}],[`path`,{d:`M12 8v8`,key:`napkw2`}],[`path`,{d:`M16 12H8`,key:`1fr5h0`}],[`path`,{d:`M2.5 8.875a10 10 0 0 0-.5 3`,key:`1vce0s`}],[`path`,{d:`M2.83 16a10 10 0 0 0 2.43 3.4`,key:`o3fkw4`}],[`path`,{d:`M4.636 5.235a10 10 0 0 1 .891-.857`,key:`1szpfk`}],[`path`,{d:`M8.644 21.42a10 10 0 0 0 7.631-.38`,key:`9yhvd4`}]]),_=t(e(),1),v={id:`alert-dialog`,name:`Alert Dialog`,description:`A modal dialog that interrupts the user with important content and expects a response. The header has responsive padding, and the action footer has a muted background and top border without changing button variants.`,installation:{cli:`npx shadcn@latest add alert-dialog`,manual:`Install the following dependencies:

\`\`\`bash
npm install @base-ui/react
\`\`\`

Copy and paste the following code into your project:
components/ui/alert-dialog.tsx

Update the import paths to match your project setup.`},usage:`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,preview:{code:`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,component:_.createElement(o,{},_.createElement(a,{asChild:!0},_.createElement(r,{variant:`outline`},`Show Dialog`)),_.createElement(s,{},_.createElement(f,{},_.createElement(l,{},`Are you absolutely sure?`),_.createElement(c,{},`This action cannot be undone. This will permanently delete your account from our servers.`)),_.createElement(p,{},_.createElement(m,{},`Cancel`),_.createElement(d,{},`Continue`))))},examples:[{name:`Basic`,description:`A basic alert dialog with a title, description, and cancel and continue buttons.`,code:`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,preview:_.createElement(o,{},_.createElement(a,{asChild:!0},_.createElement(r,{variant:`outline`},`Show Dialog`)),_.createElement(s,{},_.createElement(f,{},_.createElement(l,{},`Are you absolutely sure?`),_.createElement(c,{},`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`)),_.createElement(p,{},_.createElement(m,{},`Cancel`),_.createElement(d,{},`Continue`))))},{name:`Small`,description:'Use the `size="sm"` prop to make the alert dialog smaller.',code:`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent size="sm">
    <AlertDialogHeader>
      <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
      <AlertDialogDescription>
        Do you want to allow the USB accessory to connect to this device?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Don't allow</AlertDialogCancel>
      <AlertDialogAction>Allow</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,preview:_.createElement(o,{},_.createElement(a,{asChild:!0},_.createElement(r,{variant:`outline`},`Show Dialog`)),_.createElement(s,{size:`sm`},_.createElement(f,{},_.createElement(l,{},`Allow accessory to connect?`),_.createElement(c,{},`Do you want to allow the USB accessory to connect to this device?`)),_.createElement(p,{},_.createElement(m,{},`Don't allow`),_.createElement(d,{},`Allow`))))},{name:`Media`,description:"Use the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.",code:`import { CircleFadingPlusIcon } from "lucide-react"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Share Project</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogMedia>
        <CircleFadingPlusIcon />
      </AlertDialogMedia>
      <AlertDialogTitle>Share this project?</AlertDialogTitle>
      <AlertDialogDescription>
        Anyone with the link will be able to view and edit this project.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Share</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,preview:_.createElement(o,{},_.createElement(a,{asChild:!0},_.createElement(r,{variant:`outline`},`Share Project`)),_.createElement(s,{},_.createElement(f,{},_.createElement(u,{},_.createElement(g,{})),_.createElement(l,{},`Share this project?`),_.createElement(c,{},`Anyone with the link will be able to view and edit this project.`)),_.createElement(p,{},_.createElement(m,{},`Cancel`),_.createElement(d,{},`Share`))))},{name:`Small with Media`,description:'Use the `size="sm"` prop to make the alert dialog smaller and the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.',code:`import { BluetoothIcon } from "lucide-react"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent size="sm">
    <AlertDialogHeader>
      <AlertDialogMedia>
        <BluetoothIcon />
      </AlertDialogMedia>
      <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
      <AlertDialogDescription>
        Do you want to allow the USB accessory to connect to this device?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Don't allow</AlertDialogCancel>
      <AlertDialogAction>Allow</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,preview:_.createElement(o,{},_.createElement(a,{asChild:!0},_.createElement(r,{variant:`outline`},`Show Dialog`)),_.createElement(s,{size:`sm`},_.createElement(f,{},_.createElement(u,{},_.createElement(h,{})),_.createElement(l,{},`Allow accessory to connect?`),_.createElement(c,{},`Do you want to allow the USB accessory to connect to this device?`)),_.createElement(p,{},_.createElement(m,{},`Don't allow`),_.createElement(d,{},`Allow`))))},{name:`Destructive`,description:"Use the `AlertDialogAction` component to add a destructive action button to the alert dialog.",code:`import { Trash2Icon } from "lucide-react"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Chat</Button>
  </AlertDialogTrigger>
  <AlertDialogContent size="sm">
    <AlertDialogHeader>
      <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
        <Trash2Icon />
      </AlertDialogMedia>
      <AlertDialogTitle>Delete chat?</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete this chat conversation.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,preview:_.createElement(o,{},_.createElement(a,{asChild:!0},_.createElement(r,{variant:`destructive`},`Delete Chat`)),_.createElement(s,{size:`sm`},_.createElement(f,{},_.createElement(u,{className:`bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive`},_.createElement(i,{})),_.createElement(l,{},`Delete chat?`),_.createElement(c,{},`This will permanently delete this chat conversation.`)),_.createElement(p,{},_.createElement(m,{variant:`outline`},`Cancel`),_.createElement(d,{variant:`destructive`},`Delete`))))}],props:[{name:`size`,type:`"default" | "sm"`,description:"Controls the size of the alert dialog. Apply on `AlertDialogContent`.",default:`"default"`},{name:`AlertDialogAction`,type:`React.ComponentProps<typeof Button>`,description:"Renders a plain button and does **not** close the dialog automatically on click (Base UI has no dedicated action primitive). Close it yourself, e.g. with a controlled `open`/`onOpenChange` pair on `AlertDialog`, or by calling your close handler in `onClick`. `AlertDialogCancel` still closes automatically."}]};export{v as alertDialogDoc};