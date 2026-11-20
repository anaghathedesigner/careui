import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./createLucideIcon-Cs4mMgfM.js";import{t as a}from"./check-CfIGZGct.js";import{n as o,t as s}from"./scissors-CFFrsJAd.js";import{t as c}from"./share-oVt0pgjc.js";import{t as l}from"./trash-DP0FVvLN.js";import{t as u}from"./useRenderElement-D6nBW7h_.js";import{h as ee}from"./popupTriggerMap-DQAAXoZz.js";import{k as te,r as ne,t as d}from"./createBaseUIEventDetails-GCOUSgfO.js";import{t as f}from"./useId-Ck4_hnhw.js";import{n as p}from"./useTimeout-BVc32Jtg.js";import{n as m,r as h}from"./shadowDom-CEmy_8Ko.js";import{N as re}from"./composite-BPaDiClV.js";import{t as g}from"./addEventListener-VyGXw_SB.js";import{t as _}from"./owner-NnnQFEU-.js";import{t as v}from"./Separator-DjhPVSio.js";import{_ as y,b,c as x,d as S,f as C,g as w,i as T,l as E,m as D,n as ie,p as O,r as k,s as A,t as j,u as M,v as N,x as P,y as F}from"./MenuSubmenuTrigger-BgXp3VQ0.js";import{Bn as I,ba as ae,pa as oe}from"./index-Ck2hFZuL.js";var se=i(`pencil`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]),L=t(e(),1),R=n();function ce(e){let[t,n]=L.useState({getBoundingClientRect(){return DOMRect.fromRect({width:0,height:0,x:0,y:0})}}),r=L.useRef(null),i=L.useRef(null),a=L.useRef(null),o=L.useRef(null),s=L.useRef(!0),c=L.useRef(null),l=f(),u=L.useMemo(()=>({anchor:t,setAnchor:n,actionsRef:a,backdropRef:r,internalBackdropRef:i,positionerRef:o,allowMouseUpTriggerRef:s,initialCursorPointRef:c,rootId:l}),[t,l]);return(0,R.jsx)(N.Provider,{value:u,children:(0,R.jsx)(b.Provider,{value:void 0,children:(0,R.jsx)(T,{...e})})})}var z=500,le=L.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{setAnchor:o,actionsRef:s,internalBackdropRef:c,backdropRef:l,positionerRef:f,allowMouseUpTriggerRef:v,initialCursorPointRef:y,rootId:b}=F(!1),{store:x}=P(!1),S=x.useState(`open`),C=x.useState(`disabled`),w=L.useRef(null),T=L.useRef(null),E=p(),D=p(),O=L.useRef(!1);function k(e,t,n){let r=n.type.startsWith(`touch`);y.current={x:e,y:t},o({getBoundingClientRect(){return DOMRect.fromRect({width:r?10:0,height:r?10:0,x:e,y:t})}}),O.current=!1,s.current?.setOpen(!0,d(te,n)),D.start(z,()=>{O.current=!0})}function A(e){if(C)return;v.current=!0,re(e),k(e.clientX,e.clientY,e.nativeEvent);let t=_(w.current);g(t,`mouseup`,e=>{if(v.current=!1,!O.current)return;D.clear(),O.current=!1;let t=h(e);m(f.current,t)||b&&t&&ie(t)===b||s.current?.setOpen(!1,d(ne,e))},{once:!0})}function j(e){if(!C&&(v.current=!1,e.touches.length===1)){e.stopPropagation();let t=e.touches[0];T.current={x:t.clientX,y:t.clientY},E.start(z,()=>{T.current&&k(T.current.x,T.current.y,e.nativeEvent)})}}function M(e){if(E.isStarted()&&T.current&&e.touches.length===1){let t=e.touches[0],n=Math.abs(t.clientX-T.current.x),r=Math.abs(t.clientY-T.current.y);(n>10||r>10)&&E.clear()}}function N(){E.clear(),T.current=null}return L.useEffect(()=>{function e(e){if(C)return;let t=h(e);(m(w.current,t)||m(c.current,t)||m(l.current,t))&&e.preventDefault()}let t=_(w.current);return g(t,`contextmenu`,e)},[l,C,c]),u(`div`,e,{state:{open:S},ref:[w,t],props:[{onContextMenu:A,onTouchStart:j,onTouchMove:M,onTouchEnd:N,onTouchCancel:N,style:{WebkitTouchCallout:`none`}},a],stateAttributesMapping:ee})});function B({...e}){return(0,R.jsx)(ce,{"data-slot":`context-menu`,...e})}function ue({className:e,...t}){return(0,R.jsx)(le,{"data-slot":`context-menu-trigger`,className:r(`select-none`,e),...t})}function V({...e}){return(0,R.jsx)(D,{"data-slot":`context-menu-group`,...e})}function H({...e}){return(0,R.jsx)(k,{"data-slot":`context-menu-sub`,...e})}function U({...e}){return(0,R.jsx)(E,{"data-slot":`context-menu-radio-group`,...e})}function W({className:e,align:t=`start`,alignOffset:n=4,side:i=`right`,sideOffset:a=0,...o}){return(0,R.jsx)(S,{children:(0,R.jsx)(M,{className:`isolate z-50 outline-none`,align:t,alignOffset:n,side:i,sideOffset:a,children:(0,R.jsx)(C,{"data-slot":`context-menu-content`,className:r(`bg-popover text-popover-foreground ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md p-1 shadow-md ring-1 duration-100 outline-none`,e),...o})})})}function G({className:e,inset:t,variant:n=`default`,...i}){return(0,R.jsx)(O,{"data-slot":`context-menu-item`,"data-inset":t,"data-variant":n,className:r(`group/context-menu-item focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...i})}function K({className:e,inset:t,children:n,...i}){return(0,R.jsxs)(j,{"data-slot":`context-menu-sub-trigger`,"data-inset":t,className:r(`focus:bg-accent focus:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...i,children:[n,(0,R.jsx)(ae,{className:`ml-auto`})]})}function q({className:e,...t}){return(0,R.jsx)(W,{"data-slot":`context-menu-sub-content`,className:r(`shadow-lg`,e),side:`right`,...t})}function J({className:e,children:t,checked:n,inset:i,...o}){return(0,R.jsxs)(y,{"data-slot":`context-menu-checkbox-item`,"data-inset":i,className:r(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...o,children:[(0,R.jsx)(`span`,{className:`pointer-events-none absolute right-2`,children:(0,R.jsx)(w,{children:(0,R.jsx)(a,{})})}),t]})}function Y({className:e,children:t,inset:n,...i}){return(0,R.jsxs)(x,{"data-slot":`context-menu-radio-item`,"data-inset":n,className:r(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...i,children:[(0,R.jsx)(`span`,{className:`pointer-events-none absolute right-2`,children:(0,R.jsx)(A,{children:(0,R.jsx)(a,{})})}),t]})}function X({className:e,inset:t,...n}){return(0,R.jsx)(I,{"data-slot":`context-menu-label`,"data-inset":t,className:r(`text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8`,e),...n})}function Z({className:e,...t}){return(0,R.jsx)(v,{"data-slot":`context-menu-separator`,className:r(`bg-border -mx-1 my-1 h-px`,e),...t})}function Q({className:e,...t}){return(0,R.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:r(`text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-xs tracking-widest`,e),...t})}var $=()=>L.createElement(ue,{className:`flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm`},L.createElement(`span`,{className:`hidden pointer-fine:inline-block`},`Right click here`),L.createElement(`span`,{className:`hidden pointer-coarse:inline-block`},`Long press here`)),de={id:`context-menu`,name:`Context Menu`,description:`Displays a menu of actions triggered by a right click.`,installation:{cli:`npx shadcn@latest add context-menu`,manual:`Install the following dependencies:

\`\`\`bash
npm install @base-ui/react
\`\`\`

Copy and paste the following code into your project:
components/ui/context-menu.tsx

Update the import paths to match your project setup.`},usage:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,preview:{code:`import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem disabled>Forward<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Reload<ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem>Save Page...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,component:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{className:`w-48`},L.createElement(V,{},L.createElement(G,{},`Back`,L.createElement(Q,{},`⌘[`)),L.createElement(G,{disabled:!0},`Forward`,L.createElement(Q,{},`⌘]`)),L.createElement(G,{},`Reload`,L.createElement(Q,{},`⌘R`)),L.createElement(H,{},L.createElement(K,{},`More Tools`),L.createElement(q,{className:`w-44`},L.createElement(V,{},L.createElement(G,{},`Save Page...`),L.createElement(G,{},`Create Shortcut...`),L.createElement(G,{},`Name Window...`)),L.createElement(Z),L.createElement(V,{},L.createElement(G,{},`Developer Tools`)),L.createElement(Z),L.createElement(V,{},L.createElement(G,{variant:`destructive`},`Delete`))))),L.createElement(Z),L.createElement(V,{},L.createElement(J,{checked:!0},`Show Bookmarks`),L.createElement(J,{},`Show Full URLs`)),L.createElement(Z),L.createElement(V,{},L.createElement(U,{value:`pedro`},L.createElement(X,{},`People`),L.createElement(Y,{value:`pedro`},`Pedro Duarte`),L.createElement(Y,{value:`colm`},`Colm Tuite`)))))},examples:[{name:`Basic`,description:`A simple context menu with a few actions.`,code:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuBasic() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem disabled>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(G,{},`Back`),L.createElement(G,{disabled:!0},`Forward`),L.createElement(G,{},`Reload`))))},{name:`Submenu`,description:`Use ContextMenuSub to nest secondary actions.`,code:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Copy<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Cut<ContextMenuShortcut>⌘X</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuGroup>
              <ContextMenuItem>Save Page...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(G,{},`Copy`,L.createElement(Q,{},`⌘C`)),L.createElement(G,{},`Cut`,L.createElement(Q,{},`⌘X`))),L.createElement(H,{},L.createElement(K,{},`More Tools`),L.createElement(q,{},L.createElement(V,{},L.createElement(G,{},`Save Page...`),L.createElement(G,{},`Create Shortcut...`),L.createElement(G,{},`Name Window...`)),L.createElement(Z),L.createElement(V,{},L.createElement(G,{},`Developer Tools`)),L.createElement(Z),L.createElement(V,{},L.createElement(G,{variant:`destructive`},`Delete`))))))},{name:`Shortcuts`,description:`Add ContextMenuShortcut to show keyboard hints.`,code:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuShortcuts() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem disabled>Forward<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Reload<ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>Save<ContextMenuShortcut>⌘S</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Save As...<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(G,{},`Back`,L.createElement(Q,{},`⌘[`)),L.createElement(G,{disabled:!0},`Forward`,L.createElement(Q,{},`⌘]`)),L.createElement(G,{},`Reload`,L.createElement(Q,{},`⌘R`))),L.createElement(Z),L.createElement(V,{},L.createElement(G,{},`Save`,L.createElement(Q,{},`⌘S`)),L.createElement(G,{},`Save As...`,L.createElement(Q,{},`⇧⌘S`)))))},{name:`Groups`,description:`Group related actions and separate them with dividers.`,code:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuGroups() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem>New File<ContextMenuShortcut>⌘N</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Open File<ContextMenuShortcut>⌘O</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Save<ContextMenuShortcut>⌘S</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Edit</ContextMenuLabel>
          <ContextMenuItem>Undo<ContextMenuShortcut>⌘Z</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Redo<ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>Cut<ContextMenuShortcut>⌘X</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Copy<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Paste<ContextMenuShortcut>⌘V</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">Delete<ContextMenuShortcut>⌫</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(X,{},`File`),L.createElement(G,{},`New File`,L.createElement(Q,{},`⌘N`)),L.createElement(G,{},`Open File`,L.createElement(Q,{},`⌘O`)),L.createElement(G,{},`Save`,L.createElement(Q,{},`⌘S`))),L.createElement(Z),L.createElement(V,{},L.createElement(X,{},`Edit`),L.createElement(G,{},`Undo`,L.createElement(Q,{},`⌘Z`)),L.createElement(G,{},`Redo`,L.createElement(Q,{},`⇧⌘Z`))),L.createElement(Z),L.createElement(V,{},L.createElement(G,{},`Cut`,L.createElement(Q,{},`⌘X`)),L.createElement(G,{},`Copy`,L.createElement(Q,{},`⌘C`)),L.createElement(G,{},`Paste`,L.createElement(Q,{},`⌘V`))),L.createElement(Z),L.createElement(V,{},L.createElement(G,{variant:`destructive`},`Delete`,L.createElement(Q,{},`⌫`)))))},{name:`Icons`,description:`Combine icons with labels for quick scanning.`,code:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ClipboardPasteIcon, CopyIcon, ScissorsIcon, TrashIcon } from "lucide-react"

export function ContextMenuIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem><CopyIcon />Copy</ContextMenuItem>
          <ContextMenuItem><ScissorsIcon />Cut</ContextMenuItem>
          <ContextMenuItem><ClipboardPasteIcon />Paste</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive"><TrashIcon />Delete</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(G,{},L.createElement(oe,{}),`Copy`),L.createElement(G,{},L.createElement(s,{}),`Cut`),L.createElement(G,{},L.createElement(o,{}),`Paste`)),L.createElement(Z),L.createElement(V,{},L.createElement(G,{variant:`destructive`},L.createElement(l,{}),`Delete`))))},{name:`Checkboxes`,description:`Use ContextMenuCheckboxItem for toggles.`,code:`import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuCheckboxes() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuCheckboxItem defaultChecked>Show Bookmarks Bar</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem defaultChecked>Show Developer Tools</ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(J,{defaultChecked:!0},`Show Bookmarks Bar`),L.createElement(J,{},`Show Full URLs`),L.createElement(J,{defaultChecked:!0},`Show Developer Tools`))))},{name:`Radio`,description:`Use ContextMenuRadioItem for exclusive choices.`,code:`"use client"

import * as React from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuRadio() {
  const [user, setUser] = React.useState("pedro")
  const [theme, setTheme] = React.useState("light")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={user} onValueChange={setUser}>
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(()=>{let[e,t]=L.useState(`pedro`),[n,r]=L.useState(`light`);return L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(X,{},`People`),L.createElement(U,{value:e,onValueChange:t},L.createElement(Y,{value:`pedro`},`Pedro Duarte`),L.createElement(Y,{value:`colm`},`Colm Tuite`))),L.createElement(Z),L.createElement(V,{},L.createElement(X,{},`Theme`),L.createElement(U,{value:n,onValueChange:r},L.createElement(Y,{value:`light`},`Light`),L.createElement(Y,{value:`dark`},`Dark`),L.createElement(Y,{value:`system`},`System`)))))})},{name:`Destructive`,description:`Use variant="destructive" to style the menu item as destructive.`,code:`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react"

export function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem><PencilIcon />Edit</ContextMenuItem>
          <ContextMenuItem><ShareIcon />Share</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive"><TrashIcon />Delete</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,preview:L.createElement(B,{},L.createElement($,{}),L.createElement(W,{},L.createElement(V,{},L.createElement(G,{},L.createElement(se,{}),`Edit`),L.createElement(G,{},L.createElement(c,{}),`Share`)),L.createElement(Z),L.createElement(V,{},L.createElement(G,{variant:`destructive`},L.createElement(l,{}),`Delete`))))}],props:[{name:`className`,type:`string`,description:`Additional CSS classes to apply to the component.`},{name:`disabled`,type:`boolean`,description:`When true, prevents the user from interacting with the item.`,default:`false`},{name:`variant`,type:`"default" | "destructive"`,description:`Visual variant for the menu item.`,default:`"default"`},{name:`inset`,type:`boolean`,description:`When true, adds left padding to align with items that have an icon or indicator.`,default:`false`}]};export{de as contextMenuDoc};