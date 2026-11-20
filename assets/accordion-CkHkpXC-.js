import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{d as i,i as a,l as o,t as s}from"./useRenderElement-D6nBW7h_.js";import{a as c}from"./useOpenChangeComplete-DgOfjAjL.js";import{n as l,t as u}from"./useIsoLayoutEffect-CQhXJJTB.js";import{t as d}from"./useButton-Bp-Ce44L.js";import{t as f}from"./useBaseUiId-DsNnTfcW.js";import{t as p}from"./useControlled-DV2lkYyG.js";import{t as m}from"./DirectionContext-BrPz1pan.js";import{n as h}from"./useCompositeListItem-Dc6Oe-Ip.js";import{t as g}from"./CompositeList-lHmdWtEb.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./useCollapsiblePanel-IoeOd7QW.js";import{Cr as C,Er as w,Sa as T,Sr as E,Tr as D,br as O,ya as k}from"./index-Ck2hFZuL.js";var A=t(e(),1),j=A.createContext(void 0);function M(){let e=A.useContext(j);if(e===void 0)throw Error(i(10));return e}var N=n(),P={value:()=>null},F=A.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,hiddenUntilFound:a,keepMounted:o,loopFocus:c,onValueChange:u,multiple:d=!1,orientation:f=`vertical`,value:h,defaultValue:_,style:v,...y}=e,b=m(),x=A.useMemo(()=>{if(h===void 0)return _??[]},[h,_]),S=A.useRef([]),[C,w]=p({controlled:h,default:x,name:`Accordion`,state:`value`}),T=l((e,t,n)=>{if(!d){let t=C[0]===e?[]:[e];if(u?.(t,n),n.isCanceled)return;w(t)}else if(t){let t=C.slice();if(t.push(e),u?.(t,n),n.isCanceled)return;w(t)}else{let t=C.filter(t=>t!==e);if(u?.(t,n),n.isCanceled)return;w(t)}}),E=A.useMemo(()=>({value:C,disabled:i,orientation:f}),[C,i,f]),D=A.useMemo(()=>({disabled:i,handleValueChange:T,hiddenUntilFound:a??!1,keepMounted:o??!1,state:E,value:C}),[i,T,a,o,E,C]),O=s(`div`,e,{state:E,ref:t,props:[{dir:b},y],stateAttributesMapping:P});return(0,N.jsx)(j.Provider,{value:D,children:(0,N.jsx)(g,{elementsRef:S,children:O})})}),I=A.createContext(void 0);function L(){let e=A.useContext(I);if(e===void 0)throw Error(i(9));return e}var R=function(e){return e.index=`data-index`,e.disabled=`data-disabled`,e.open=`data-open`,e}({}),z={...y,index:e=>Number.isInteger(e)?{[R.index]:String(e)}:null,...c,value:()=>null},B=A.forwardRef(function(e,t){let{className:n,disabled:r=!1,onOpenChange:i,render:a,value:c,style:u,...d}=e,{ref:p,index:m}=h(),g=o(t,p),{disabled:_,handleValueChange:y,state:x,value:S}=M(),C=f(),w=c??C,T=r||_,E=A.useMemo(()=>{if(!S)return!1;for(let e=0;e<S.length;e+=1)if(S[e]===w)return!0;return!1},[S,w]),D=l((e,t)=>{i?.(e,t),!t.isCanceled&&y(w,e,t)}),O=b({open:E,onOpenChange:D,disabled:T}),k=A.useMemo(()=>({open:O.open,disabled:O.disabled,transitionStatus:O.transitionStatus}),[O.open,O.disabled,O.transitionStatus]),j=A.useMemo(()=>({...O,onOpenChange:D,state:k}),[O,k,D]),P=A.useMemo(()=>({...x,hidden:!E&&!O.mounted,index:m,disabled:T,open:E}),[O.mounted,T,m,E,x]),F=f(),[L,R]=A.useState(),B=A.useMemo(()=>({open:E,state:P,setTriggerId:R,triggerId:L??F}),[F,E,P,R,L]),V=s(`div`,e,{state:P,ref:g,props:d,stateAttributesMapping:z});return(0,N.jsx)(v.Provider,{value:j,children:(0,N.jsx)(I.Provider,{value:B,children:V})})}),V=A.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=L();return s(`h3`,e,{state:o,ref:t,props:a,stateAttributesMapping:z})}),H=A.forwardRef(function(e,t){let{disabled:n,className:r,id:i,render:a,nativeButton:o=!0,style:c,...l}=e,{panelId:f,open:p,handleTrigger:m,disabled:h}=_(),{getButtonProps:g,buttonRef:v}=d({disabled:n||h,focusableWhenDisabled:!0,native:o}),{state:y,setTriggerId:b,triggerId:S}=L();return u(()=>(i&&b(i),()=>{b(void 0)}),[i,b]),s(`button`,e,{state:y,ref:[t,v],props:[{"aria-controls":p?f:void 0,"aria-expanded":p,id:S,onClick:m},l,g],stateAttributesMapping:x})}),U=function(e){return e.accordionPanelHeight=`--accordion-panel-height`,e.accordionPanelWidth=`--accordion-panel-width`,e}({}),W=A.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:i,id:o,render:c,style:l,...d}=e,{hiddenUntilFound:f,keepMounted:p}=M(),{mounted:m,onOpenChange:h,open:g,panelId:v,setMounted:y,setOpen:b,setPanelIdState:x,transitionStatus:C}=_(),w=r??f,T=i??p;u(()=>{if(o)return x(o),()=>{x(void 0)}},[o,x]);let{height:E,props:D,ref:O,shouldPreventOpenAnimation:k,shouldRender:A,transitionStatus:j,width:N}=S({externalRef:t,hiddenUntilFound:w,id:o??v,keepMounted:T,mounted:m,onOpenChange:h,open:g,setMounted:y,setOpen:b,transitionStatus:C}),{state:P,triggerId:F}=L(),I={...P,transitionStatus:j},R=a(l,I),B=s(`div`,{...e,style:void 0},{state:I,ref:O,props:[D,{"aria-labelledby":F,role:`region`,style:{[U.accordionPanelHeight]:E===void 0?`auto`:`${E}px`,[U.accordionPanelWidth]:N===void 0?`auto`:`${N}px`}},d,R?{style:R}:void 0,k?{style:{animationName:`none`}}:void 0],stateAttributesMapping:z});return A?B:null});function G({className:e,...t}){return(0,N.jsx)(F,{"data-slot":`accordion`,className:r(`flex w-full flex-col`,e),...t})}function K({className:e,...t}){return(0,N.jsx)(B,{"data-slot":`accordion-item`,className:r(`not-last:border-b`,e),...t})}function q({className:e,children:t,...n}){return(0,N.jsx)(V,{className:`flex`,children:(0,N.jsxs)(H,{"data-slot":`accordion-trigger`,className:r(`group/accordion-trigger focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4`,e),...n,children:[t,(0,N.jsx)(T,{"data-slot":`accordion-trigger-icon`,className:`pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden`}),(0,N.jsx)(k,{"data-slot":`accordion-trigger-icon`,className:`pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline`})]})})}function J({className:e,children:t,...n}){return(0,N.jsx)(W,{"data-slot":`accordion-content`,className:`data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm`,...n,children:(0,N.jsx)(`div`,{className:r(`[&_a]:hover:text-foreground h-(--accordion-panel-height) pt-0 pb-4 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4`,e),children:t})})}var Y={id:`accordion`,name:`Accordion`,description:`A vertically stacked set of interactive headings that each reveal a section of content.`,installation:{cli:`npx shadcn@latest add accordion`,manual:`Copy and paste the accordion component source code into your project.`},usage:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,preview:{code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["shipping"]} className="max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,component:A.createElement(G,{defaultValue:[`shipping`],className:`max-w-lg`},A.createElement(K,{value:`shipping`},A.createElement(q,{},`What are your shipping options?`),A.createElement(J,{},`We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.`)),A.createElement(K,{value:`returns`},A.createElement(q,{},`What is your return policy?`),A.createElement(J,{},`Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.`)),A.createElement(K,{value:`support`},A.createElement(q,{},`How can I contact customer support?`),A.createElement(J,{},`Reach us via email, live chat, or phone. We respond within 24 hours during business days.`)))},examples:[{name:`Basic`,description:`A basic accordion that shows one item at a time. The first item is open by default.`,code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

export function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} className="max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,preview:A.createElement(G,{defaultValue:[`item-1`],className:`max-w-lg`},...[{value:`item-1`,trigger:`How do I reset my password?`,content:`Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.`},{value:`item-2`,trigger:`Can I change my subscription plan?`,content:`Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.`},{value:`item-3`,trigger:`What payment methods do you accept?`,content:`We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.`}].map(e=>A.createElement(K,{key:e.value,value:e.value},A.createElement(q,{},e.trigger),A.createElement(J,{},e.content))))},{name:`Multiple`,description:"Use the `multiple` prop to allow multiple items to be open at the same time.",code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "notifications",
    trigger: "Notification Settings",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "privacy",
    trigger: "Privacy & Security",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
]

export function AccordionMultiple() {
  return (
    <Accordion multiple className="max-w-lg" defaultValue={["notifications"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,preview:A.createElement(G,{multiple:!0,className:`max-w-lg`,defaultValue:[`notifications`]},...[{value:`notifications`,trigger:`Notification Settings`,content:`Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.`},{value:`privacy`,trigger:`Privacy & Security`,content:`Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences.`},{value:`billing`,trigger:`Billing & Subscription`,content:`View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.`}].map(e=>A.createElement(K,{key:e.value,value:e.value},A.createElement(q,{},e.trigger),A.createElement(J,{},e.content))))},{name:`Disabled`,description:`Use the disabled prop on AccordionItem to disable individual items.`,code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDisabled() {
  return (
    <Accordion className="max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I access my account history?</AccordionTrigger>
        <AccordionContent>
          Yes, you can view your complete account history including all
          transactions, plan changes, and support tickets in the Account History
          section of your dashboard.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Premium feature information</AccordionTrigger>
        <AccordionContent>
          This section contains information about premium features. Upgrade your
          plan to access this content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I update my email address?</AccordionTrigger>
        <AccordionContent>
          You can update your email address in your account settings. You'll
          receive a verification email at your new address to confirm the change.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,preview:A.createElement(G,{className:`max-w-lg`},A.createElement(K,{value:`item-1`},A.createElement(q,{},`Can I access my account history?`),A.createElement(J,{},`Yes, you can view your complete account history including all transactions, plan changes, and support tickets in the Account History section of your dashboard.`)),A.createElement(K,{value:`item-2`,disabled:!0},A.createElement(q,{},`Premium feature information`),A.createElement(J,{},`This section contains information about premium features. Upgrade your plan to access this content.`)),A.createElement(K,{value:`item-3`},A.createElement(q,{},`How do I update my email address?`),A.createElement(J,{},`You can update your email address in your account settings. You'll receive a verification email at your new address to confirm the change.`)))},{name:`Borders`,description:`Add border to the Accordion and border-b last:border-b-0 to AccordionItem to add borders to the items.`,code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more.",
  },
]

export function AccordionBorders() {
  return (
    <Accordion className="max-w-lg rounded-lg border" defaultValue={["billing"]}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,preview:A.createElement(G,{className:`max-w-lg rounded-lg border`,defaultValue:[`billing`]},...[{value:`billing`,trigger:`How does billing work?`,content:`We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.`},{value:`security`,trigger:`Is my data secure?`,content:`Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits.`},{value:`integration`,trigger:`What integrations do you support?`,content:`We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more.`}].map(e=>A.createElement(K,{key:e.value,value:e.value,className:`border-b px-4 last:border-b-0`},A.createElement(q,{},e.trigger),A.createElement(J,{},e.content))))},{name:`Card`,description:`Wrap the Accordion in a Card component.`,code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items = [
  {
    value: "plans",
    trigger: "What subscription plans do you offer?",
    content:
      "We offer three subscription tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month).",
  },
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers.",
  },
  {
    value: "cancel",
    trigger: "How do I cancel my subscription?",
    content:
      "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period.",
  },
]

export function AccordionCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Subscription & Billing</CardTitle>
        <CardDescription>
          Common questions about your account, plans, payments and cancellations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["plans"]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}`,preview:A.createElement(O,{className:`w-full max-w-sm`},A.createElement(D,{},A.createElement(w,{},`Subscription & Billing`),A.createElement(C,{},`Common questions about your account, plans, payments and cancellations.`)),A.createElement(E,{},A.createElement(G,{defaultValue:[`plans`]},...[{value:`plans`,trigger:`What subscription plans do you offer?`,content:`We offer three subscription tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month).`},{value:`billing`,trigger:`How does billing work?`,content:`Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers.`},{value:`cancel`,trigger:`How do I cancel my subscription?`,content:`You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period.`}].map(e=>A.createElement(K,{key:e.value,value:e.value},A.createElement(q,{},e.trigger),A.createElement(J,{},e.content))))))}]};export{Y as accordionDoc};