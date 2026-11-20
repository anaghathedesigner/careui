import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{t as r}from"./input-BRwr7HbH.js";import{Cr as i,Dr as a,Er as o,Sr as s,Tr as c,br as l,bt as u,wr as d,xr as f}from"./index-Ck2hFZuL.js";var p=t(e(),1),m={id:`card`,name:`Card`,description:`Displays a card with header, content, footer, and action components.`,installation:{cli:`npx shadcn@latest add card`,manual:`Copy and paste the card component source code into your project.`},usage:`import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}`,preview:{code:`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Login to your account</CardTitle>
    <CardDescription>
      Enter your email below to login to your account
    </CardDescription>
    <CardAction>
      <Button variant="link">Sign Up</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <form>
      <div className="flex flex-col gap-4">
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button type="submit" className="w-full">
      Login
    </Button>
    <Button variant="outline" className="w-full">
      Login with Google
    </Button>
  </CardFooter>
</Card>`,component:p.createElement(l,{className:`w-full max-w-sm`},p.createElement(c,{},p.createElement(o,{},`Login to your account`),p.createElement(i,{},`Enter your email below to login to your account`),p.createElement(f,{},p.createElement(n,{variant:`link`},`Sign Up`))),p.createElement(s,{},p.createElement(`div`,{className:`flex flex-col gap-4`},p.createElement(`div`,{className:`grid gap-2`},p.createElement(u,{htmlFor:`email`},`Email`),p.createElement(r,{id:`email`,type:`email`,placeholder:`m@example.com`})),p.createElement(`div`,{className:`grid gap-2`},p.createElement(`div`,{className:`flex items-center`},p.createElement(u,{htmlFor:`password`},`Password`),p.createElement(`a`,{href:`#`,className:`ml-auto inline-block text-sm underline-offset-4 hover:underline`},`Forgot your password?`)),p.createElement(r,{id:`password`,type:`password`})))),p.createElement(d,{className:`flex-col gap-2`},p.createElement(n,{type:`submit`,className:`w-full`},`Login`),p.createElement(n,{variant:`outline`,className:`w-full`},`Login with Google`)))},examples:[{name:`Size`,description:'Use the `size="sm"` prop to set the size of the card to small. The small size variant uses smaller spacing.',code:`import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardSmall() {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>
          This card uses the small size variant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The card component supports a size prop that can be set to
          &quot;sm&quot; for a more compact appearance.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}`,preview:p.createElement(l,{size:`sm`,className:`mx-auto w-full max-w-sm`},p.createElement(c,{},p.createElement(o,{},`Small Card`),p.createElement(i,{},`This card uses the small size variant.`)),p.createElement(s,{},p.createElement(`p`,{},`The card component supports a size prop that can be set to "sm" for a more compact appearance.`)),p.createElement(d,{},p.createElement(n,{variant:`outline`,size:`sm`,className:`w-full`},`Action`)))},{name:`Image`,description:`Add an image before the card header to create a card with an image.`,code:`import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="neutral">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}`,preview:p.createElement(l,{className:`relative mx-auto w-full max-w-sm pt-0`},p.createElement(`div`,{className:`absolute inset-0 z-30 aspect-video bg-black/35`}),p.createElement(`img`,{src:`https://avatar.vercel.sh/shadcn1`,alt:`Event cover`,className:`relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40`}),p.createElement(c,{},p.createElement(f,{},p.createElement(a,{variant:`neutral`},`Featured`)),p.createElement(o,{},`Design systems meetup`),p.createElement(i,{},`A practical talk on component APIs, accessibility, and shipping faster.`)),p.createElement(d,{},p.createElement(n,{className:`w-full`},`View Event`)))}],props:[{name:`size`,type:`"default" | "sm"`,description:`Controls the spacing and padding of the card.`,default:`"default"`},{name:`className`,type:`string`,description:`Additional CSS classes to apply to the card.`}]};export{m as cardDoc};