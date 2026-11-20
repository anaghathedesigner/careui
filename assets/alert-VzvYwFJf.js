import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{Ar as r,Bi as i,Jr as a,Or as o,Ta as s,_a as c,ga as l,jr as u,kr as d,sa as f}from"./index-Ck2hFZuL.js";import{a as p,t as m}from"./frame-D1cG9lxH.js";var h=t(e(),1),g={id:`alert`,name:`Alert`,description:`Displays a callout for user attention.`,installation:{cli:`npx shadcn@latest add alert`,manual:`Copy and paste the alert component source code into your project.`},usage:`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

<Alert>
  <InfoIcon />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
  <AlertAction>
    <Button variant="outline">Enable</Button>
  </AlertAction>
</Alert>`,preview:{code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We've added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
    </div>
  )
}`,component:h.createElement(`div`,{className:`grid w-full max-w-md items-start gap-4`},h.createElement(o,{},h.createElement(l),h.createElement(u,{},`Payment successful`),h.createElement(r,{},`Your payment of $29.99 has been processed. A receipt has been sent to your email address.`)),h.createElement(o,{},h.createElement(f),h.createElement(u,{},`New feature available`),h.createElement(r,{},`We've added dark mode support. You can enable it in your account settings.`)))},examples:[{name:`Basic`,description:`A basic alert with an icon, title and description.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{className:`max-w-md`},h.createElement(l),h.createElement(u,{},`Account updated successfully`),h.createElement(r,{},`Your profile information has been saved. Changes will be reflected immediately.`))},{name:`Destructive`,description:`Use variant="destructive" to create a destructive alert.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

export function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method
        and try again.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{variant:`destructive`,className:`max-w-md`},h.createElement(c),h.createElement(u,{},`Payment failed`),h.createElement(r,{},`Your payment could not be processed. Please check your payment method and try again.`))},{name:`Action`,description:`Use AlertAction to add a button or other action element to the alert.`,code:`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertActionExample() {
  return (
    <Alert className="max-w-md">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>
        Enable it under your profile settings to get started.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  )
}`,preview:h.createElement(o,{className:`max-w-md`},h.createElement(u,{},`Dark mode is now available`),h.createElement(r,{},`Enable it under your profile settings to get started.`),h.createElement(d,{},h.createElement(n,{size:`xs`,variant:`default`},`Enable`)))},{name:`Custom Colors`,description:`Customize the alert colors by adding custom classes such as bg-amber-50 dark:bg-amber-950 to the Alert component.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"

export function AlertColors() {
  return (
    <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to
        continue using the service.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{className:`max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50`},h.createElement(i),h.createElement(u,{},`Your subscription will expire in 3 days.`),h.createElement(r,{},`Renew now to avoid service interruption or upgrade to a paid plan to continue using the service.`))},{name:`Vertical Layout`,description:`Default layout with action buttons stacked below the content.`,code:`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { InfoIcon } from "lucide-react"

export function AlertVertical() {
  return (
    <Alert className="max-w-md">
      <InfoIcon />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the app is available. Update now to get the latest
        features and bug fixes.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">Update now</Button>
        <Button size="xs" variant="ghost">Dismiss</Button>
      </AlertAction>
    </Alert>
  )
}`,preview:h.createElement(o,{className:`max-w-md`},h.createElement(f),h.createElement(u,{},`Update available`),h.createElement(r,{},`A new version of the app is available. Update now to get the latest features and bug fixes.`),h.createElement(d,{},h.createElement(n,{size:`xs`,variant:`default`},`Update now`),h.createElement(n,{size:`xs`,variant:`ghost`},`Dismiss`)))},{name:`Horizontal Layout`,description:`Use layout="horizontal" to place action buttons inline to the right of the content.`,code:`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { InfoIcon } from "lucide-react"

export function AlertHorizontal() {
  return (
    <Alert layout="horizontal" className="max-w-xl">
      <InfoIcon />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the app is ready to install.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="ghost">Dismiss</Button>
        <Button size="xs" variant="default">Update now</Button>
      </AlertAction>
    </Alert>
  )
}`,preview:h.createElement(o,{layout:`horizontal`,className:`max-w-xl`},h.createElement(f),h.createElement(u,{},`Update available`),h.createElement(r,{},`A new version of the app is ready to install.`),h.createElement(d,{},h.createElement(n,{size:`xs`,variant:`ghost`},`Dismiss`),h.createElement(n,{size:`xs`,variant:`default`},`Update now`)))},{name:`In Frame`,description:`Embed an Alert inside a Frame panel by removing its border and shadow — the Frame provides the visual chrome.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Frame, FramePanel } from "@/components/ui/frame"
import { InfoIcon } from "lucide-react"

export function AlertInFrame() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert className="border-0 shadow-none rounded-none">
            <InfoIcon className="text-destructive" />
            <AlertTitle>System Update</AlertTitle>
            <AlertDescription>
              A new system update is available. Please restart your
              application to apply the changes.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}`,preview:h.createElement(`div`,{className:`mx-auto w-full max-w-lg`},h.createElement(m,{},h.createElement(p,{className:`overflow-hidden p-0!`},h.createElement(o,{className:`border-0 shadow-none rounded-none`},h.createElement(f,{className:`text-destructive`}),h.createElement(u,{},`System Update`),h.createElement(r,{},`A new system update is available. Please restart your application to apply the changes.`)))))},{name:`Stacked in Frame`,description:`Stack multiple alerts inside a Frame, separating them with a divider line — each alert removes its border and shadow so the Frame provides the visual chrome.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Frame, FramePanel } from "@/components/ui/frame"
import { Separator } from "@/components/ui/separator"
import { AlertCircleIcon, CheckCircle2Icon, AlertTriangleIcon } from "lucide-react"

export function AlertStackedInFrame() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert className="border-0 shadow-none rounded-none">
            <CheckCircle2Icon />
            <AlertTitle>Deployment successful</AlertTitle>
            <AlertDescription>
              Your changes are live and propagating across all regions.
            </AlertDescription>
          </Alert>
          <Separator />
          <Alert className="border-0 shadow-none rounded-none">
            <AlertTriangleIcon />
            <AlertTitle>Subscription expiring soon</AlertTitle>
            <AlertDescription>
              Your plan renews in 3 days. Update your billing info to avoid interruption.
            </AlertDescription>
          </Alert>
          <Separator />
          <Alert className="border-0 shadow-none rounded-none" variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              Your payment could not be processed. Please check your payment method.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}`,preview:h.createElement(`div`,{className:`mx-auto w-full max-w-lg`},h.createElement(m,{},h.createElement(p,{className:`overflow-hidden p-0!`},h.createElement(o,{className:`border-0 shadow-none rounded-none`},h.createElement(l),h.createElement(u,{},`Deployment successful`),h.createElement(r,{},`Your changes are live and propagating across all regions.`)),h.createElement(a),h.createElement(o,{className:`border-0 shadow-none rounded-none`},h.createElement(i),h.createElement(u,{},`Subscription expiring soon`),h.createElement(r,{},`Your plan renews in 3 days. Update your billing info to avoid interruption.`)),h.createElement(a),h.createElement(o,{variant:`destructive`,className:`border-0 shadow-none rounded-none`},h.createElement(c),h.createElement(u,{},`Payment failed`),h.createElement(r,{},`Your payment could not be processed. Please check your payment method.`)))))},{name:`Invert in Frame`,description:`Use variant="invert" inside a Frame for a high-contrast banner — remove the alert's border and shadow so the Frame provides the visual chrome.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Frame, FramePanel } from "@/components/ui/frame"
import { BellIcon } from "lucide-react"

export function AlertInvertInFrame() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Frame>
        <FramePanel className="overflow-hidden p-0!">
          <Alert variant="invert" className="border-0 shadow-none rounded-none">
            <BellIcon />
            <AlertTitle>New message received</AlertTitle>
            <AlertDescription>
              You have an unread message from your team.
            </AlertDescription>
          </Alert>
        </FramePanel>
      </Frame>
    </div>
  )
}`,preview:h.createElement(`div`,{className:`mx-auto w-full max-w-lg`},h.createElement(m,{},h.createElement(p,{className:`overflow-hidden p-0!`},h.createElement(o,{variant:`invert`,className:`border-0 shadow-none rounded-none`},h.createElement(s),h.createElement(u,{},`New message received`),h.createElement(r,{},`You have an unread message from your team.`)))))},{name:`Info`,description:`Use variant="info" for informational messages and notices.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export function AlertInfo() {
  return (
    <Alert variant="info" className="max-w-md">
      <InfoIcon />
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>
        The service will be unavailable on Sunday from 2–4 AM UTC.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{variant:`info`,className:`max-w-md`},h.createElement(f),h.createElement(u,{},`Scheduled maintenance`),h.createElement(r,{},`The service will be unavailable on Sunday from 2–4 AM UTC.`))},{name:`Success`,description:`Use variant="success" to confirm a successful action.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function AlertSuccess() {
  return (
    <Alert variant="success" className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Deployment successful</AlertTitle>
      <AlertDescription>
        Your changes are live. It may take a few minutes to propagate.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{variant:`success`,className:`max-w-md`},h.createElement(l),h.createElement(u,{},`Deployment successful`),h.createElement(r,{},`Your changes are live. It may take a few minutes to propagate.`))},{name:`Warning`,description:`Use variant="warning" to highlight a potential issue or risk.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"

export function AlertWarning() {
  return (
    <Alert variant="warning" className="max-w-md">
      <AlertTriangleIcon />
      <AlertTitle>Subscription expiring soon</AlertTitle>
      <AlertDescription>
        Your plan renews in 3 days. Update your billing info to avoid
        interruption.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{variant:`warning`,className:`max-w-md`},h.createElement(i),h.createElement(u,{},`Subscription expiring soon`),h.createElement(r,{},`Your plan renews in 3 days. Update your billing info to avoid interruption.`))},{name:`Invert`,description:`Use variant="invert" for a high-contrast alert with an inverted foreground/background.`,code:`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BellIcon } from "lucide-react"

export function AlertInvert() {
  return (
    <Alert variant="invert" className="max-w-md">
      <BellIcon />
      <AlertTitle>New message received</AlertTitle>
      <AlertDescription>
        You have an unread message from your team.
      </AlertDescription>
    </Alert>
  )
}`,preview:h.createElement(o,{variant:`invert`,className:`max-w-md`},h.createElement(s),h.createElement(u,{},`New message received`),h.createElement(r,{},`You have an unread message from your team.`))}]};export{g as alertDoc};