import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./refresh-cw-CmJjVdGU.js";import{t as r}from"./button-DTwq4-az.js";import{Cr as i,Er as a,Sr as o,Tr as s,br as c,c as l,d as u,f as d,ft as f,ht as p,l as m,p as h,u as g,ut as _,wr as v}from"./index-Ck2hFZuL.js";var y=t(e(),1),b={id:`input-otp`,name:`Input OTP`,description:`Accessible one-time password component with copy paste functionality.`,installation:{cli:`npx shadcn@latest add input-otp`,manual:`Install input-otp dependency and copy the input-otp component source code into your project.`},usage:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,preview:{code:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6} defaultValue="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,component:y.createElement(l,{maxLength:6,defaultValue:`123456`},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2}),y.createElement(u,{index:3}),y.createElement(u,{index:4}),y.createElement(u,{index:5})))},examples:[{name:`Pattern`,description:`Use the pattern prop to define a custom pattern for the OTP input.`,code:`import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"

export function InputOTPPattern() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="digits-only">Digits Only</FieldLabel>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}`,preview:y.createElement(_,{className:`w-fit`},y.createElement(p,{htmlFor:`digits-only`},`Digits Only`),y.createElement(l,{id:`digits-only`,maxLength:6,pattern:d},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2}),y.createElement(u,{index:3}),y.createElement(u,{index:4}),y.createElement(u,{index:5}))))},{name:`Separator`,description:`Use the InputOTPSeparator component to add a separator between input groups.`,code:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPWithSeparator() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,preview:y.createElement(l,{maxLength:6},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1})),y.createElement(g,{}),y.createElement(m,{},y.createElement(u,{index:2}),y.createElement(u,{index:3})),y.createElement(g,{}),y.createElement(m,{},y.createElement(u,{index:4}),y.createElement(u,{index:5})))},{name:`Disabled`,description:`Use the disabled prop to disable the input.`,code:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPDisabled() {
  return (
    <InputOTP id="disabled" maxLength={6} disabled value="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,preview:y.createElement(l,{maxLength:6,disabled:!0,value:`123456`},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2})),y.createElement(g,{}),y.createElement(m,{},y.createElement(u,{index:3}),y.createElement(u,{index:4}),y.createElement(u,{index:5})))},{name:`Controlled`,description:`Use the value and onChange props to control the input value.`,code:`"use client"

import * as React from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPControlled() {
  const [value, setValue] = React.useState("")

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  )
}`,preview:y.createElement(function(){let[e,t]=y.useState(``);return y.createElement(`div`,{className:`space-y-2`},y.createElement(l,{maxLength:6,value:e,onChange:e=>t(e)},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2}),y.createElement(u,{index:3}),y.createElement(u,{index:4}),y.createElement(u,{index:5}))),y.createElement(`div`,{className:`text-center text-sm`},e===``?`Enter your one-time password.`:`You entered: ${e}`))})},{name:`Invalid`,description:`Use aria-invalid on the slots to show an error state.`,code:`"use client"

import * as React from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPInvalid() {
  const [value, setValue] = React.useState("000000")

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid />
        <InputOTPSlot index={1} aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} aria-invalid />
        <InputOTPSlot index={3} aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} aria-invalid />
        <InputOTPSlot index={5} aria-invalid />
      </InputOTPGroup>
    </InputOTP>
  )
}`,preview:y.createElement(function(){let[e,t]=y.useState(`000000`);return y.createElement(l,{maxLength:6,value:e,onChange:e=>t(e)},y.createElement(m,{},y.createElement(u,{index:0,"aria-invalid":!0}),y.createElement(u,{index:1,"aria-invalid":!0})),y.createElement(g,{}),y.createElement(m,{},y.createElement(u,{index:2,"aria-invalid":!0}),y.createElement(u,{index:3,"aria-invalid":!0})),y.createElement(g,{}),y.createElement(m,{},y.createElement(u,{index:4,"aria-invalid":!0}),y.createElement(u,{index:5,"aria-invalid":!0})))})},{name:`Four Digits`,description:`A common pattern for PIN codes using REGEXP_ONLY_DIGITS.`,code:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"

export function InputOTPFourDigits() {
  return (
    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,preview:y.createElement(l,{maxLength:4,pattern:d},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2}),y.createElement(u,{index:3})))},{name:`Alphanumeric`,description:`Use REGEXP_ONLY_DIGITS_AND_CHARS to accept both letters and numbers.`,code:`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

export function InputOTPAlphanumeric() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,preview:y.createElement(l,{maxLength:6,pattern:h},y.createElement(m,{},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2})),y.createElement(g,{}),y.createElement(m,{},y.createElement(u,{index:3}),y.createElement(u,{index:4}),y.createElement(u,{index:5})))},{name:`Form`,description:`OTP input inside a verification card form.`,code:`import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { RefreshCwIcon } from "lucide-react"

export function InputOTPForm() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Verify your login</CardTitle>
        <CardDescription>
          Enter the verification code we sent to your email address:{" "}
          <span className="font-medium">m@example.com</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="otp-verification">
              Verification code
            </FieldLabel>
            <Button variant="outline" size="xs">
              <RefreshCwIcon />
              Resend Code
            </Button>
          </div>
          <InputOTP maxLength={6} id="otp-verification" required>
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator className="mx-2" />
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            <a href="#">I no longer have access to this email address.</a>
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter>
        <Field>
          <Button type="submit" className="w-full">
            Verify
          </Button>
          <div className="text-sm text-muted-foreground">
            Having trouble signing in?{" "}
            <a
              href="#"
              className="underline underline-offset-4 transition-colors hover:text-primary"
            >
              Contact support
            </a>
          </div>
        </Field>
      </CardFooter>
    </Card>
  )
}`,preview:y.createElement(c,{className:`mx-auto max-w-md`},y.createElement(s,{},y.createElement(a,{},`Verify your login`),y.createElement(i,{},`Enter the verification code we sent to your email address: `,y.createElement(`span`,{className:`font-medium`},`m@example.com`),`.`)),y.createElement(o,{},y.createElement(_,{},y.createElement(`div`,{className:`flex items-center justify-between`},y.createElement(p,{htmlFor:`otp-verification`},`Verification code`),y.createElement(r,{variant:`tertiary`,size:`xs`},y.createElement(n),`Resend Code`)),y.createElement(l,{maxLength:6,id:`otp-verification`},y.createElement(m,{className:`*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl`},y.createElement(u,{index:0}),y.createElement(u,{index:1}),y.createElement(u,{index:2})),y.createElement(g,{className:`mx-2`}),y.createElement(m,{className:`*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl`},y.createElement(u,{index:3}),y.createElement(u,{index:4}),y.createElement(u,{index:5}))),y.createElement(f,{},y.createElement(`a`,{href:`#`},`I no longer have access to this email address.`)))),y.createElement(v,{},y.createElement(_,{},y.createElement(r,{type:`submit`,className:`w-full`},`Verify`),y.createElement(`div`,{className:`text-sm text-muted-foreground`},`Having trouble signing in? `,y.createElement(`a`,{href:`#`,className:`underline underline-offset-4 transition-colors hover:text-primary`},`Contact support`)))))}],props:[{name:`maxLength`,type:`number`,description:`Maximum number of characters.`,default:`6`},{name:`value`,type:`string`,description:`The controlled value of the OTP input.`},{name:`onChange`,type:`(value: string) => void`,description:`Event handler called when the value changes.`},{name:`disabled`,type:`boolean`,description:`Whether the OTP input is disabled.`,default:`false`},{name:`pattern`,type:`RegExp`,description:`Pattern to validate each character.`}]};export{b as inputOtpDoc};