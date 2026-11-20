import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{Cr as r,Er as i,Sr as a,Tr as o,ar as s,br as c,cr as l,ma as u,or as d,sr as f}from"./index-Ck2hFZuL.js";var p=n(`app-window`,[[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}],[`path`,{d:`M10 4v4`,key:`pp8u80`}],[`path`,{d:`M2 8h20`,key:`d11cs7`}],[`path`,{d:`M6 4v4`,key:`1svtjw`}]]),m=t(e(),1);function h(){return m.createElement(s,{defaultValue:`overview`,className:`w-[400px]`},m.createElement(f,{},m.createElement(l,{value:`overview`},`Overview`),m.createElement(l,{value:`analytics`},`Analytics`),m.createElement(l,{value:`reports`},`Reports`),m.createElement(l,{value:`settings`},`Settings`)),m.createElement(d,{value:`overview`},m.createElement(c,{},m.createElement(o,{},m.createElement(i,{},`Overview`),m.createElement(r,{},`View your key metrics and recent project activity. Track progress across all your active projects.`)),m.createElement(a,{className:`text-sm text-muted-foreground`},`You have 12 active projects and 3 pending tasks.`))),m.createElement(d,{value:`analytics`},m.createElement(c,{},m.createElement(o,{},m.createElement(i,{},`Analytics`),m.createElement(r,{},`Track performance and user engagement metrics. Monitor trends and identify growth opportunities.`)),m.createElement(a,{className:`text-sm text-muted-foreground`},`Page views are up 25% compared to last month.`))),m.createElement(d,{value:`reports`},m.createElement(c,{},m.createElement(o,{},m.createElement(i,{},`Reports`),m.createElement(r,{},`Generate and download your detailed reports. Export data in multiple formats for analysis.`)),m.createElement(a,{className:`text-sm text-muted-foreground`},`You have 5 reports ready and available to export.`))),m.createElement(d,{value:`settings`},m.createElement(c,{},m.createElement(o,{},m.createElement(i,{},`Settings`),m.createElement(r,{},`Manage your account preferences and options. Customize your experience to fit your needs.`)),m.createElement(a,{className:`text-sm text-muted-foreground`},`Configure notifications, security, and themes.`))))}function g(){return m.createElement(s,{defaultValue:`medication`},m.createElement(f,{variant:`browser`},m.createElement(l,{value:`medication`},`Medication Request`),m.createElement(l,{value:`history`},`Patient Clinical History`)),m.createElement(d,{value:`medication`,className:`border border-border rounded-b-lg p-4 mt-0`},m.createElement(`p`,{className:`text-sm text-muted-foreground`},`Medication request details go here.`)),m.createElement(d,{value:`history`,className:`border border-border rounded-b-lg p-4 mt-0`},m.createElement(`p`,{className:`text-sm text-muted-foreground`},`Patient clinical history goes here.`)))}function _(){return m.createElement(s,{defaultValue:`overview`},m.createElement(f,{variant:`line`},m.createElement(l,{value:`overview`},`Overview`),m.createElement(l,{value:`analytics`},`Analytics`),m.createElement(l,{value:`reports`},`Reports`)))}function v(){return m.createElement(s,{defaultValue:`account`,orientation:`vertical`},m.createElement(f,{},m.createElement(l,{value:`account`},`Account`),m.createElement(l,{value:`password`},`Password`),m.createElement(l,{value:`notifications`},`Notifications`)))}function y(){return m.createElement(s,{defaultValue:`home`},m.createElement(f,{},m.createElement(l,{value:`home`},`Home`),m.createElement(l,{value:`settings`,disabled:!0},`Disabled`)))}function b(){return m.createElement(s,{defaultValue:`preview`},m.createElement(f,{},m.createElement(l,{value:`preview`},m.createElement(p),`Preview`),m.createElement(l,{value:`code`},m.createElement(u),`Code`)))}var x={id:`tabs`,name:`Tabs`,description:`A set of layered sections of content—known as tab panels—that are displayed one at a time.`,installation:{cli:`npx shadcn@latest add tabs`,manual:`Copy and paste the tabs component source code into your project.`},usage:`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="account" className="w-100">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,preview:{code:`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-100">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`,component:m.createElement(h)},examples:[{name:`Browser`,description:`Use the variant="browser" prop on TabsList for a browser-tab style that connects to content below.`,code:`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsBrowser() {
  return (
    <Tabs defaultValue="medication">
      <TabsList variant="browser">
        <TabsTrigger value="medication">Medication Request</TabsTrigger>
        <TabsTrigger value="history">Patient Clinical History</TabsTrigger>
      </TabsList>
      <TabsContent value="medication" className="border border-border rounded-b-lg p-4 mt-0">
        Medication request details go here.
      </TabsContent>
      <TabsContent value="history" className="border border-border rounded-b-lg p-4 mt-0">
        Patient clinical history goes here.
      </TabsContent>
    </Tabs>
  )
}`,preview:m.createElement(g)},{name:`Line`,description:`Use the variant="line" prop on TabsList for a line style.`,code:`import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsLine() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`,preview:m.createElement(_)},{name:`Vertical`,description:`Use orientation="vertical" for vertical tabs.`,code:`import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`,preview:m.createElement(v)},{name:`Disabled`,description:`Disable individual tabs using the disabled prop.`,code:`import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDisabled() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`,preview:m.createElement(y)},{name:`Icons`,description:`Add icons to tab triggers.`,code:`import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`,preview:m.createElement(b)}]};export{x as tabsDoc};