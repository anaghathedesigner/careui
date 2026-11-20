import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./check-CfIGZGct.js";import{t as a}from"./circle-question-mark-BNaUCazB.js";import{t as o}from"./file-BPO4c3K7.js";import{t as s}from"./save-gWT68yOB.js";import{t as c}from"./settings-Bc2NTS1M.js";import{t as l}from"./trash-DP0FVvLN.js";import{a as u,c as d,i as f,o as p}from"./popupTriggerMap-DQAAXoZz.js";import{t as m}from"./useBaseUiId-DsNnTfcW.js";import{t as h}from"./Separator-DjhPVSio.js";import{_ as g,a as _,c as v,d as y,f as b,g as x,i as S,l as C,m as ee,o as te,p as w,r as T,s as E,t as D,u as O}from"./MenuSubmenuTrigger-BgXp3VQ0.js";import{ba as k,lr as A,ua as j,zn as M}from"./index-Ck2hFZuL.js";var N=function(e){return e.modal=`data-modal`,e.orientation=`data-orientation`,e.hasSubmenuOpen=`data-has-submenu-open`,e}({}),P=t(e(),1),F=n(),I={hasSubmenuOpen(e){return e?{[N.hasSubmenuOpen]:``}:null}},L=P.forwardRef(function(e,t){let{orientation:n=`horizontal`,loopFocus:r=!0,render:i,className:a,modal:o=!0,disabled:s=!1,id:c,style:l,...d}=e,[f,p]=P.useState(null),[h,g]=P.useState(!1),v=m(c),y={orientation:n,modal:o,hasSubmenuOpen:h},b=P.useRef(null),x=P.useRef(!1),S=P.useMemo(()=>({contentElement:f,setContentElement:p,setHasSubmenuOpen:g,hasSubmenuOpen:h,modal:o,disabled:s,orientation:n,allowMouseUpTriggerRef:x,rootId:v}),[f,h,o,s,n,v]);return(0,F.jsx)(_.Provider,{value:S,children:(0,F.jsx)(u,{children:(0,F.jsx)(R,{children:(0,F.jsx)(A,{render:i,className:a,style:l,state:y,stateAttributesMapping:I,refs:[t,p,b],props:[{role:`menubar`,id:v,"aria-orientation":n},d],orientation:n,loopFocus:r,enableHomeAndEndKeys:!0,highlightItemOnHover:h})})})})});function R(e){let t=p(),{events:n}=d(),r=te();return P.useEffect(()=>{function e(e){e.nodeId&&e.parentNodeId===t&&(e.open?r.hasSubmenuOpen||r.setHasSubmenuOpen(!0):e.reason!==`sibling-open`&&e.reason!==`list-navigation`&&r.setHasSubmenuOpen(!1))}return n.on(`menuopenchange`,e),()=>{n.off(`menuopenchange`,e)}},[n,t,r]),(0,F.jsx)(f,{id:t,children:e.children})}function z({className:e,...t}){return(0,F.jsx)(L,{"data-slot":`menubar`,className:r(`flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs`,e),...t})}function B({...e}){return(0,F.jsx)(S,{"data-slot":`menubar-menu`,...e})}function V({...e}){return(0,F.jsx)(ee,{"data-slot":`menubar-group`,...e})}function H({...e}){return(0,F.jsx)(y,{"data-slot":`menubar-portal`,...e})}function U({...e}){return(0,F.jsx)(C,{"data-slot":`menubar-radio-group`,...e})}function W({className:e,...t}){return(0,F.jsx)(M,{"data-slot":`menubar-trigger`,className:r(`hover:bg-muted aria-expanded:bg-muted flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none`,e),...t})}function G({className:e,align:t=`start`,alignOffset:n=-4,side:i=`bottom`,sideOffset:a=8,...o}){return(0,F.jsx)(H,{children:(0,F.jsx)(O,{className:`isolate z-50 outline-none`,align:t,alignOffset:n,side:i,sideOffset:a,children:(0,F.jsx)(b,{"data-slot":`menubar-content`,className:r(`bg-popover text-popover-foreground ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 z-50 min-w-36 origin-(--transform-origin) overflow-hidden rounded-md p-1 shadow-md ring-1 duration-100 outline-none`,e),...o})})})}function K({className:e,inset:t,variant:n=`default`,...i}){return(0,F.jsx)(w,{"data-slot":`menubar-item`,"data-inset":t,"data-variant":n,className:r(`group/menubar-item focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:*:[svg]:text-destructive! relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...i})}function q({className:e,children:t,checked:n,inset:a,...o}){return(0,F.jsxs)(g,{"data-slot":`menubar-checkbox-item`,"data-inset":a,className:r(`focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0`,e),checked:n,...o,children:[(0,F.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4`,children:(0,F.jsx)(x,{children:(0,F.jsx)(i,{})})}),t]})}function J({className:e,children:t,inset:n,...a}){return(0,F.jsxs)(v,{"data-slot":`menubar-radio-item`,"data-inset":n,className:r(`focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...a,children:[(0,F.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4`,children:(0,F.jsx)(E,{children:(0,F.jsx)(i,{})})}),t]})}function Y({className:e,...t}){return(0,F.jsx)(h,{"data-slot":`menubar-separator`,className:r(`bg-border -mx-1 my-1 h-px`,e),...t})}function X({className:e,...t}){return(0,F.jsx)(`span`,{"data-slot":`menubar-shortcut`,className:r(`text-muted-foreground group-focus/menubar-item:text-accent-foreground ml-auto text-xs tracking-widest`,e),...t})}function Z({...e}){return(0,F.jsx)(T,{"data-slot":`menubar-sub`,...e})}function Q({className:e,inset:t,children:n,...i}){return(0,F.jsxs)(D,{"data-slot":`menubar-sub-trigger`,"data-inset":t,className:r(`focus:bg-accent focus:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4`,e),...i,children:[n,(0,F.jsx)(k,{className:`ml-auto size-4`})]})}function $({className:e,align:t=`start`,alignOffset:n=-3,side:i=`right`,sideOffset:a=0,...o}){return(0,F.jsx)(G,{"data-slot":`menubar-sub-content`,className:r(`min-w-32 shadow-lg`,e),align:t,alignOffset:n,side:i,sideOffset:a,...o})}function ne(){let[e,t]=P.useState(`benoit`),[n,r]=P.useState(`system`);return P.createElement(z,{className:`w-72`},P.createElement(B,null,P.createElement(W,null,`Profiles`),P.createElement(G,null,P.createElement(U,{value:e,onValueChange:t},P.createElement(J,{value:`andy`},`Andy`),P.createElement(J,{value:`benoit`},`Benoit`),P.createElement(J,{value:`luis`},`Luis`)),P.createElement(Y,null),P.createElement(K,{inset:!0},`Edit...`),P.createElement(K,{inset:!0},`Add Profile...`))),P.createElement(B,null,P.createElement(W,null,`Theme`),P.createElement(G,null,P.createElement(U,{value:n,onValueChange:r},P.createElement(J,{value:`light`},`Light`),P.createElement(J,{value:`dark`},`Dark`),P.createElement(J,{value:`system`},`System`)))))}var re={id:`menubar`,name:`Menubar`,description:`A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.`,installation:{cli:`npx shadcn@latest add menubar`,manual:`Copy and paste the menubar component source code into your project.`},usage:`import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"`,preview:{code:`import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>Search the web</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-44">
          <MenubarGroup>
            <MenubarCheckboxItem>Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Full URLs</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Edit...</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,component:P.createElement(z,{className:`w-72`},P.createElement(B,null,P.createElement(W,null,`File`),P.createElement(G,null,P.createElement(V,null,P.createElement(K,null,`New Tab`,P.createElement(X,null,`⌘T`)),P.createElement(K,null,`New Window`,P.createElement(X,null,`⌘N`)),P.createElement(K,{disabled:!0},`New Incognito Window`)),P.createElement(Y,null),P.createElement(V,null,P.createElement(Z,null,P.createElement(Q,null,`Share`),P.createElement($,null,P.createElement(V,null,P.createElement(K,null,`Email link`),P.createElement(K,null,`Messages`),P.createElement(K,null,`Notes`))))),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,null,`Print...`,P.createElement(X,null,`⌘P`))))),P.createElement(B,null,P.createElement(W,null,`Edit`),P.createElement(G,null,P.createElement(V,null,P.createElement(K,null,`Undo`,P.createElement(X,null,`⌘Z`)),P.createElement(K,null,`Redo`,P.createElement(X,null,`⇧⌘Z`))),P.createElement(Y,null),P.createElement(V,null,P.createElement(Z,null,P.createElement(Q,null,`Find`),P.createElement($,null,P.createElement(V,null,P.createElement(K,null,`Search the web`)),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,null,`Find...`),P.createElement(K,null,`Find Next`),P.createElement(K,null,`Find Previous`))))),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,null,`Cut`),P.createElement(K,null,`Copy`),P.createElement(K,null,`Paste`)))),P.createElement(B,null,P.createElement(W,null,`View`),P.createElement(G,{className:`w-44`},P.createElement(V,null,P.createElement(q,null,`Bookmarks Bar`),P.createElement(q,{checked:!0},`Full URLs`)),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,{inset:!0},`Reload`,P.createElement(X,null,`⌘R`)),P.createElement(K,{disabled:!0,inset:!0},`Force Reload`,P.createElement(X,null,`⇧⌘R`))),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,{inset:!0},`Toggle Fullscreen`)),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,{inset:!0},`Hide Sidebar`)))),P.createElement(B,null,P.createElement(W,null,`Profiles`),P.createElement(G,null,P.createElement(U,{value:`benoit`},P.createElement(J,{value:`andy`},`Andy`),P.createElement(J,{value:`benoit`},`Benoit`),P.createElement(J,{value:`luis`},`Luis`)),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,{inset:!0},`Edit...`)),P.createElement(Y,null),P.createElement(V,null,P.createElement(K,{inset:!0},`Add Profile...`)))))},examples:[{name:`Checkbox`,description:`Use MenubarCheckboxItem for toggleable options.`,code:`import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCheckbox() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
          <MenubarCheckboxItem>Code</MenubarCheckboxItem>
          <MenubarCheckboxItem>Superscript</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,preview:P.createElement(z,{className:`w-72`},P.createElement(B,null,P.createElement(W,null,`View`),P.createElement(G,{className:`w-64`},P.createElement(q,null,`Always Show Bookmarks Bar`),P.createElement(q,{checked:!0},`Always Show Full URLs`),P.createElement(Y,null),P.createElement(K,{inset:!0},`Reload`,P.createElement(X,null,`⌘R`)),P.createElement(K,{disabled:!0,inset:!0},`Force Reload`,P.createElement(X,null,`⇧⌘R`)))),P.createElement(B,null,P.createElement(W,null,`Format`),P.createElement(G,null,P.createElement(q,{checked:!0},`Strikethrough`),P.createElement(q,null,`Code`),P.createElement(q,null,`Superscript`))))},{name:`Radio`,description:`Use MenubarRadioGroup and MenubarRadioItem for single-select options.`,code:`"use client"

import * as React from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarRadio() {
  const [user, setUser] = React.useState("benoit")
  const [theme, setTheme] = React.useState("system")

  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={user} onValueChange={setUser}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,preview:P.createElement(ne,null)},{name:`Submenu`,description:`Use MenubarSub, MenubarSubTrigger, and MenubarSubContent for nested menus.`,code:`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarSubmenu() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,preview:P.createElement(z,{className:`w-72`},P.createElement(B,null,P.createElement(W,null,`File`),P.createElement(G,null,P.createElement(Z,null,P.createElement(Q,null,`Share`),P.createElement($,null,P.createElement(K,null,`Email link`),P.createElement(K,null,`Messages`),P.createElement(K,null,`Notes`))),P.createElement(Y,null),P.createElement(K,null,`Print...`,P.createElement(X,null,`⌘P`)))),P.createElement(B,null,P.createElement(W,null,`Edit`),P.createElement(G,null,P.createElement(K,null,`Undo`,P.createElement(X,null,`⌘Z`)),P.createElement(K,null,`Redo`,P.createElement(X,null,`⇧⌘Z`)),P.createElement(Y,null),P.createElement(Z,null,P.createElement(Q,null,`Find`),P.createElement($,null,P.createElement(K,null,`Find...`),P.createElement(K,null,`Find Next`),P.createElement(K,null,`Find Previous`))),P.createElement(Y,null),P.createElement(K,null,`Cut`),P.createElement(K,null,`Copy`),P.createElement(K,null,`Paste`))))},{name:`With Icons`,description:`Menubar items with icons for visual clarity.`,code:`import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react"

export function MenubarIcons() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileIcon />
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <FolderIcon />
            Open Folder
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon />
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>More</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <SettingsIcon />
              Settings
            </MenubarItem>
            <MenubarItem>
              <HelpCircleIcon />
              Help
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <TrashIcon />
              Delete
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,preview:P.createElement(z,{className:`w-72`},P.createElement(B,null,P.createElement(W,null,`File`),P.createElement(G,null,P.createElement(K,null,P.createElement(o,null),`New File`,P.createElement(X,null,`⌘N`)),P.createElement(K,null,P.createElement(j,null),`Open Folder`),P.createElement(Y,null),P.createElement(K,null,P.createElement(s,null),`Save`,P.createElement(X,null,`⌘S`)))),P.createElement(B,null,P.createElement(W,null,`More`),P.createElement(G,null,P.createElement(V,null,P.createElement(K,null,P.createElement(c,null),`Settings`),P.createElement(K,null,P.createElement(a,null),`Help`),P.createElement(Y,null),P.createElement(K,{variant:`destructive`},P.createElement(l,null),`Delete`)))))}]};export{re as menubarDoc};