import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./react-dom-B6HHu0c4.js";import{t as a}from"./check-CfIGZGct.js";import{t as o}from"./search-Dl4KIBBW.js";import{t as s}from"./x-CgxuUKeI.js";import{t as c}from"./button-DTwq4-az.js";import{$r as l,A as u,B as d,Ca as f,Ci as p,Dn as m,Ea as h,En as g,F as _,Fr as v,H as y,I as b,Ir as x,Jr as S,L as C,M as ee,N as te,Nn as w,Nr as T,On as E,P as D,Pr as O,Qi as k,R as A,Ri as j,Rn as M,Ta as N,Ti as ne,V as re,Zi as P,Zr as F,ai as ie,ar as ae,bn as I,ca as oe,cr as L,da as R,ei as se,fa as ce,fi as le,gi as ue,hi as de,ia as fe,ii as pe,j as z,ja as B,k as me,kn as he,li as ge,na as _e,ni as ve,or as V,qi as ye,ri as be,sr as xe,ti as Se,ui as H,va as U,vi as Ce,vn as W,wa as we,wi as Te,wn as G,xi as Ee,yi as De,z as Oe,zi as ke}from"./index-Ck2hFZuL.js";var K=t(e(),1),Ae=t(i(),1),q=n(),J=[{label:null,items:[{title:`Home`,icon:oe,isActive:!0}]},{label:`Patient Management`,items:[{title:`Search Patient`,icon:o},{title:`Appointments`,icon:f},{title:`Queues`,icon:j}]},{label:`Encounters & Locations`,items:[{title:`All Encounters`,icon:B},{title:`Search by Location`,icon:_e}]},{label:`Services`,items:[{title:`Services`,icon:k},{title:`Resource`,icon:we}]},{label:`Administration`,items:[{title:`Users`,icon:ke},{title:`Billing`,icon:ce},{title:`Settings`,icon:ye}]}],Y=[`Care Facility`,`City Hospital`,`Rural Clinic`],X=[`All Encounters`,`Inpatient`,`Ambulatory`,`Emergency`,`Observation`,`Virtual`,`Outpatient`,`Home Health`],Z=`careui-main-dashboard-default-encounter`;function je(){if(typeof window>`u`)return X[0];let e=window.localStorage.getItem(Z);return X.includes(e)?e:X[0]}var Q={name:`Prabha Narendran`,role:`Nurse`,initials:`PN`};function Me(){let[e,t]=K.useState(Y[0]);return(0,q.jsxs)(G,{children:[(0,q.jsx)(M,{asChild:!0,children:(0,q.jsxs)(c,{variant:`outline`,size:`sm`,className:`gap-2 font-normal shadow-sm`,children:[e,(0,q.jsx)(U,{className:`h-3.5 w-3.5 opacity-60`})]})}),(0,q.jsx)(g,{align:`start`,className:`min-w-44`,children:Y.map(n=>(0,q.jsxs)(E,{onClick:()=>t(n),className:`gap-2`,children:[n===e?(0,q.jsx)(a,{className:`text-primary h-4 w-4`}):(0,q.jsx)(`span`,{className:`inline-block h-4 w-4`}),n]},n))})]})}function Ne(){let{isMobile:e,setOpenMobile:t}=d(),[n,r]=K.useState(`home`),[i,a]=K.useState(je),[o,s]=K.useState(i),[l,u]=K.useState(i),[f,m]=K.useState(!1),[h,_]=K.useState(!1),[v,x]=K.useState(!1),T=e=>{_(e),x(e)},D=()=>{e&&window.setTimeout(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur(),t(!1),document.querySelector(`[aria-label="Close sidebar"]`)?.click()},300)},O=e=>{s(e),r(`encounters`),_(!1),x(!1),D()},k=()=>{u(i),m(!0)},j=e=>{u(e),a(e),s(e),r(`encounters`),window.localStorage.setItem(Z,e),_(!1),x(!1),D()},N=e=>(0,q.jsx)(q.Fragment,{children:f?(0,q.jsx)(re,{value:l,className:`gap-0`,onValueChange:e=>j(e),children:X.map(e=>{let t=`organism-default-${e.toLowerCase().replaceAll(` `,`-`)}`;return(0,q.jsxs)(`label`,{htmlFor:t,className:`hover:bg-accent flex min-h-10 cursor-pointer items-center gap-2 rounded-sm px-2 text-sm`,children:[(0,q.jsx)(y,{id:t,value:e}),e]},e)})}):(0,q.jsxs)(q.Fragment,{children:[e?(0,q.jsx)(`div`,{children:X.map(e=>(0,q.jsx)(c,{variant:`ghost`,className:`focus:bg-accent focus:text-accent-foreground flex min-h-11 w-full justify-start rounded-sm px-2.5 py-1.5 text-sm font-normal no-underline`,onClick:()=>O(e),children:e},e))}):X.map(e=>(0,q.jsx)(E,{onClick:()=>O(e),children:e},e)),e?(0,q.jsxs)(c,{variant:`ghost`,className:`focus:bg-accent focus:text-accent-foreground border-border mt-2 flex min-h-11 w-full justify-between rounded-sm border-t px-2.5 py-1.5 text-sm font-normal no-underline`,onClick:k,children:[`Set Default`,(0,q.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(w,{}),(0,q.jsxs)(E,{closeOnClick:!1,onClick:k,children:[`Set Default`,(0,q.jsx)(`span`,{className:`ml-auto`,"aria-hidden":`true`,children:`→`})]})]})]})});return(0,q.jsx)(q.Fragment,{children:J.map((t,r)=>(0,q.jsxs)(K.Fragment,{children:[r>0&&(0,q.jsx)(S,{variant:`inset`,className:`mx-3 w-auto`}),(0,q.jsxs)(ee,{className:r>0?`pt-0`:void 0,children:[t.label&&(0,q.jsx)(te,{className:`text-[10px] font-semibold tracking-wider uppercase`,children:t.label}),(0,q.jsx)(b,{children:t.items.map(r=>t.label!==`Encounters & Locations`||r.title!==`All Encounters`?(0,q.jsx)(A,{children:(0,q.jsxs)(C,{isActive:!!r.isActive&&n===`home`,tooltip:r.title,children:[(0,q.jsx)(r.icon,{}),(0,q.jsx)(`span`,{children:r.title})]})},r.title):(0,q.jsxs)(A,{className:`group/encounter flex items-center gap-1`,children:[(0,q.jsxs)(C,{isActive:n===`encounters`,tooltip:o,className:`min-w-0 flex-1`,children:[(0,q.jsx)(r.icon,{}),(0,q.jsx)(`span`,{className:`truncate`,children:o})]}),e?(0,q.jsxs)(de,{showSwipeHandle:!0,open:v,onOpenChange:T,children:[v&&(0,Ae.createPortal)((0,q.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none fixed inset-0 z-60 h-dvh w-dvw bg-black/25 backdrop-blur-sm`}),document.body),(0,q.jsx)(ne,{asChild:!0,children:(0,q.jsx)(c,{variant:`ghost`,size:`icon`,className:`text-muted-foreground hover:text-foreground size-8 shrink-0`,"aria-label":`Choose default encounter type`,onPointerDown:()=>m(!1),onClick:()=>m(!1),children:(0,q.jsx)(R,{})})}),(0,q.jsx)(p,{}),(0,q.jsxs)(Ce,{className:`h-auto w-dvw max-w-none`,children:[(0,q.jsxs)(Ee,{children:[(0,q.jsx)(Te,{children:f?`Set default encounter`:`Encounter Types`}),(0,q.jsx)(De,{children:f?`Choose the encounter type to show as your default.`:`Choose an encounter type to view.`})]}),(0,q.jsx)(ue,{className:`px-2`,children:N(!0)})]})]}):(0,q.jsxs)(G,{open:h,onOpenChange:T,children:[(0,q.jsx)(M,{asChild:!0,children:(0,q.jsx)(c,{variant:`ghost`,size:`icon`,className:`text-muted-foreground hover:text-foreground size-8 shrink-0`,"aria-label":`Choose default encounter type`,onPointerDown:()=>m(!1),onClick:()=>m(!1),children:(0,q.jsx)(R,{})})}),(0,q.jsx)(g,{side:`right`,align:`start`,className:`min-w-56`,children:N(!1)})]})]},r.title))})]})]},r))})}function Pe({onMenuOpenChange:e}){let{isMobile:t}=d();return(0,q.jsx)(b,{children:(0,q.jsx)(A,{children:(0,q.jsxs)(G,{onOpenChange:e,children:[(0,q.jsx)(M,{asChild:!0,children:(0,q.jsxs)(C,{size:`lg`,className:`data-[state=open]:bg-sidebar-accent bg-strong-background/60 data-[state=open]:text-sidebar-accent-foreground shadow-sm`,children:[(0,q.jsx)(W,{className:`h-8 w-8 rounded-lg`,children:(0,q.jsx)(I,{className:`rounded-lg bg-green-100 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200`,children:Q.initials})}),(0,q.jsxs)(`div`,{className:`grid flex-1 text-left text-sm leading-tight`,children:[(0,q.jsx)(`span`,{className:`truncate font-medium`,children:Q.name}),(0,q.jsx)(`span`,{className:`text-muted-foreground truncate text-xs`,children:Q.role})]}),(0,q.jsx)(U,{className:`ml-auto size-4 opacity-60`})]})}),(0,q.jsxs)(g,{className:`w-(--anchor-width) min-w-56 rounded-lg`,side:t?`bottom`:`right`,align:`end`,sideOffset:4,children:[(0,q.jsx)(m,{children:(0,q.jsx)(he,{className:`p-0 font-normal`,children:(0,q.jsxs)(`div`,{className:`flex items-center gap-2 px-1 py-1.5 text-left text-sm`,children:[(0,q.jsx)(W,{className:`h-8 w-8 rounded-lg`,children:(0,q.jsx)(I,{className:`rounded-lg bg-green-100 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200`,children:Q.initials})}),(0,q.jsxs)(`div`,{className:`grid flex-1 text-left text-sm leading-tight`,children:[(0,q.jsx)(`span`,{className:`truncate font-medium`,children:Q.name}),(0,q.jsx)(`span`,{className:`text-muted-foreground truncate text-xs`,children:Q.role})]})]})})}),(0,q.jsx)(w,{}),(0,q.jsxs)(E,{children:[(0,q.jsx)(h,{className:`mr-2 h-4 w-4`}),`Account`]}),(0,q.jsxs)(E,{children:[(0,q.jsx)(N,{className:`mr-2 h-4 w-4`}),`Notifications`]}),(0,q.jsx)(w,{}),(0,q.jsxs)(E,{children:[(0,q.jsx)(fe,{className:`mr-2 h-4 w-4`}),`Log out`]})]})]})})})}function $({pinned:e,onMenuOpenChange:t}){let{isMobile:n,setOpenMobile:i}=d(),a=e||n;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(D,{className:r(`overflow-hidden border-b`,a?`border-border min-h-14 py-2`:`max-h-0 border-transparent py-0`),children:(0,q.jsxs)(`div`,{className:r(`flex items-center gap-2 px-2 transition-[opacity,transform] duration-150 ease-linear`,a?`translate-y-0 opacity-100`:`-translate-y-2 opacity-0`),children:[(0,q.jsx)(`img`,{src:`/Care-logo-in-light.svg`,alt:`Care`,className:`h-9 w-auto dark:hidden`}),(0,q.jsx)(`img`,{src:`/Care-logo-in-dark.svg`,alt:`Care`,className:`hidden h-9 w-auto dark:block`}),n&&(0,q.jsxs)(c,{variant:`ghost`,size:`icon`,className:`ml-auto`,onClick:()=>i(!1),children:[(0,q.jsx)(s,{className:`h-4 w-4`}),(0,q.jsx)(`span`,{className:`sr-only`,children:`Close sidebar`})]})]})}),(0,q.jsx)(u,{children:(0,q.jsx)(Ne,{})}),(0,q.jsx)(z,{className:`border-t`,children:(0,q.jsx)(Pe,{onMenuOpenChange:t})})]})}function Fe(){let[e,t]=K.useState(!1);return K.useEffect(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key===`k`&&(e.preventDefault(),t(e=>!e))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(c,{variant:`ghost`,size:`icon`,className:`md:hidden`,onClick:()=>t(!0),children:[(0,q.jsx)(o,{className:`h-4 w-4`}),(0,q.jsx)(`span`,{className:`sr-only`,children:`Search`})]}),(0,q.jsxs)(ge,{className:`hidden w-52 cursor-pointer text-sm md:flex md:h-9`,onClick:()=>t(!0),children:[(0,q.jsx)(le,{placeholder:`Search`,readOnly:!0,className:`cursor-pointer text-sm`}),(0,q.jsx)(H,{children:(0,q.jsx)(o,{className:`text-muted-foreground`})}),(0,q.jsx)(H,{align:`inline-end`,children:(0,q.jsx)(F,{children:`⌘K`})})]}),(0,q.jsx)(se,{open:e,onOpenChange:t,children:(0,q.jsxs)(l,{children:[(0,q.jsx)(be,{placeholder:`Search...`}),(0,q.jsxs)(ie,{children:[(0,q.jsx)(Se,{children:`No results found.`}),J.map((e,n)=>(0,q.jsx)(ve,{heading:e.label??`Quick Access`,children:e.items.map(e=>(0,q.jsxs)(pe,{value:e.title,onSelect:()=>t(!1),children:[(0,q.jsx)(e.icon,{className:`mr-2 h-4 w-4`}),e.title]},e.title))},n))]})]})})]})}function Ie({onDesktopToggle:e,onMouseEnter:t,onMouseLeave:n}){let{isMobile:r,state:i,setOpenMobile:a}=d(),o=(0,q.jsxs)(c,{variant:`ghost`,size:`icon`,className:`group relative -ml-1 h-7 w-7 px-0 after:absolute after:-inset-3 after:content-['']`,onMouseEnter:t,onMouseLeave:n,onClick:()=>{r?a(!0):e()},children:[!r&&i===`expanded`?(0,q.jsx)(P,{className:`h-4 w-4`}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`img`,{src:`/brand-assets/uploads/Care-Logos/SVG/Care-Icon-on-light.svg`,alt:``,"aria-hidden":`true`,className:`size-6 object-contain transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0 dark:hidden`}),(0,q.jsx)(`img`,{src:`/brand-assets/uploads/Care-Logos/SVG/Care-Icon-on-dark.svg`,alt:``,"aria-hidden":`true`,className:`hidden size-6 object-contain transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0 dark:block`}),(0,q.jsx)(P,{className:`absolute size-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100`})]}),(0,q.jsx)(`span`,{className:`sr-only`,children:`Toggle Sidebar`})]});return r?o:(0,q.jsxs)(T,{children:[(0,q.jsx)(x,{asChild:!0,children:o}),(0,q.jsxs)(O,{side:`left`,className:`flex items-center gap-1.5`,children:[`Toggle sidebar`,(0,q.jsx)(F,{children:`⌘B`})]})]})}function Le({fullPage:e=!1}){let[t,n]=K.useState(!0),[i,a]=K.useState(!1),[o,s]=K.useState(!1),[l,u]=K.useState(!1),d=K.useRef(null),f=K.useRef(null),p=K.useRef(!1),m=K.useCallback(()=>{clearTimeout(d.current??void 0),clearTimeout(f.current??void 0),d.current=null,f.current=null},[]),h=K.useCallback(()=>{clearTimeout(f.current??void 0),f.current=setTimeout(()=>s(!0),210)},[]),g=K.useCallback(()=>{!t&&!p.current&&(m(),d.current=setTimeout(()=>{a(!1),h()},300))},[t,m,h]),y=i&&!t,b=K.useCallback(()=>{m(),t||(s(!0),a(!0))},[t,m]),x=K.useCallback(()=>{m(),y?(u(!0),s(!1),n(!0),a(!1),setTimeout(()=>u(!1),200)):t?(s(!1),n(!1),a(!1),h()):(n(!0),a(!1))},[y,t,m,h]);return K.useEffect(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key===`b`&&(e.preventDefault(),x())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[x]),(0,q.jsx)(v,{children:(0,q.jsx)(`div`,{style:{height:e?`100vh`:`400px`,transform:e?void 0:`translateZ(0)`,overflow:`hidden`},className:r(!e&&`rounded-lg border`,`**:data-[slot=sidebar-container]:h-full!`,l?`**:data-[slot=sidebar-container]:transition-[left,right,width,top,height,box-shadow,background-color,border-radius]!`:`**:data-[slot=sidebar-container]:transition-[left,right,width]!`,`**:data-[slot=sidebar-container]:duration-100!`,`**:data-[slot=sidebar-gap]:duration-100!`,l&&`**:data-[slot=sidebar-inset]:transition-[margin]!`,l&&`**:data-[slot=sidebar-inset]:duration-100!`,y&&`**:data-[slot=sidebar-inset]:ml-2!`,y&&`**:data-[slot=sidebar-gap]:w-0!`,o&&!t&&[`**:data-[slot=sidebar-container]:top-14!`,`**:data-[slot=sidebar-container]:h-[calc(100%-3.5rem)]!`],y&&[`**:data-[slot=sidebar-container]:bg-sidebar`,`**:data-[slot=sidebar-container]:border-t`,`**:data-[slot=sidebar-container]:rounded-r-md`,`**:data-[slot=sidebar-container]:shadow-xl`]),children:(0,q.jsxs)(Oe,{open:t||i,onOpenChange:e=>{e?(s(!1),n(!0),a(!1)):(s(!1),n(!1),a(!1),h())},className:`h-full min-h-0!`,style:{"--sidebar-width":`15rem`,height:`100%`},children:[(0,q.jsx)(me,{variant:`inset`,collapsible:`offcanvas`,className:y?`border-r!`:void 0,onMouseEnter:m,onMouseLeave:g,children:(0,q.jsx)($,{pinned:t,onMenuOpenChange:e=>{p.current=e,e?m():g()}})}),(0,q.jsxs)(_,{className:`overflow-hidden`,children:[(0,q.jsxs)(`header`,{className:`flex h-14 shrink-0 items-center gap-3 border-b px-4`,children:[(0,q.jsx)(Ie,{onDesktopToggle:x,onMouseEnter:b,onMouseLeave:g}),(0,q.jsx)(S,{orientation:`vertical`}),(0,q.jsx)(Me,{}),(0,q.jsxs)(`div`,{className:`ml-auto flex items-center md:gap-2`,children:[(0,q.jsx)(Fe,{}),(0,q.jsx)(c,{variant:`ghost`,size:`icon`,children:(0,q.jsx)(N,{className:`h-4 w-4`})})]})]}),(0,q.jsxs)(`div`,{className:`flex flex-1 flex-col gap-4 overflow-y-auto p-4`,children:[(0,q.jsx)(`div`,{className:`to-primary-100 dark:to-primary-950/20 flex items-center justify-between rounded-xl border border-sky-100 bg-linear-to-r from-sky-50 p-5 dark:border-sky-900/20 dark:from-sky-950/20`,children:(0,q.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,q.jsxs)(`h1`,{className:`text-soft-foreground text-base font-normal md:text-xl`,children:[`Good Morning,`,` `,(0,q.jsx)(`span`,{className:`text-foreground font-semibold`,children:`Prabha Narendran`}),` `,`👋`]}),(0,q.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Welcome back!`})]})}),(0,q.jsxs)(ae,{defaultValue:`overview`,children:[(0,q.jsxs)(xe,{variant:`line`,className:`border-border w-full border-b`,children:[(0,q.jsx)(L,{value:`overview`,children:`Overview`}),(0,q.jsx)(L,{value:`analytics`,children:`Analytics`}),(0,q.jsx)(L,{value:`reports`,children:`Reports`})]}),(0,q.jsxs)(V,{value:`overview`,className:`flex flex-col gap-4`,children:[(0,q.jsxs)(`div`,{className:`grid auto-rows-min gap-4 md:grid-cols-3`,children:[(0,q.jsx)(`div`,{className:`bg-muted/50 aspect-video rounded-xl`}),(0,q.jsx)(`div`,{className:`bg-muted/50 aspect-video rounded-xl`}),(0,q.jsx)(`div`,{className:`bg-muted/50 aspect-video rounded-xl`})]}),(0,q.jsx)(`div`,{className:`bg-muted/50 min-h-24 rounded-xl`})]}),(0,q.jsx)(V,{value:`analytics`,children:(0,q.jsx)(`div`,{className:`bg-muted/50 min-h-24 rounded-xl`})}),(0,q.jsx)(V,{value:`reports`,children:(0,q.jsx)(`div`,{className:`bg-muted/50 min-h-24 rounded-xl`})})]})]})]})]})})})}var Re={id:`sidebar`,name:`Sidebar`,description:`A composable, themeable and customizable sidebar component.`,installation:{cli:`npx shadcn@latest add sidebar`,manual:`Install @base-ui/react and copy the sidebar component source code into your project.`},usage:`import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}`,preview:{code:`"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-sm"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--anchor-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Teams
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <team.logo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add team
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ElementType
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: React.ElementType
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <SidebarMenuAction showOnHover className="shadow-sm">
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Folder className="text-muted-foreground" />
                    <span>View Project</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Forward className="text-muted-foreground" />
                    <span>Share Project</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Trash2 className="text-muted-foreground" />
                    <span>Delete Project</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-sm"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--anchor-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}`,component:K.createElement(Le)},examples:[],props:[{name:`defaultOpen`,type:`boolean`,description:`Default open state of the sidebar (SidebarProvider).`},{name:`open`,type:`boolean`,description:`Controlled open state of the sidebar (SidebarProvider).`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Callback when open state changes (SidebarProvider).`},{name:`side`,type:`"left" | "right"`,description:`The side of the sidebar.`,default:`"left"`},{name:`variant`,type:`"sidebar" | "floating" | "inset"`,description:`The visual variant of the sidebar.`,default:`"sidebar"`},{name:`collapsible`,type:`"offcanvas" | "icon" | "none"`,description:`Collapsible behaviour: offcanvas slides in/out, icon collapses to icons, none is always visible.`,default:`"offcanvas"`},{name:`state`,type:`"expanded" | "collapsed"`,description:`The current state of the sidebar (useSidebar).`},{name:`setOpen`,type:`(open: boolean) => void`,description:`Sets the open state of the sidebar (useSidebar).`},{name:`openMobile`,type:`boolean`,description:`Whether the sidebar is open on mobile (useSidebar).`},{name:`setOpenMobile`,type:`(open: boolean) => void`,description:`Sets the open state of the sidebar on mobile (useSidebar).`},{name:`isMobile`,type:`boolean`,description:`Whether the sidebar is in mobile mode (useSidebar).`},{name:`toggleSidebar`,type:`() => void`,description:`Toggles the sidebar open/closed on desktop and mobile (useSidebar).`}]};export{Re as sidebarDoc};