import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./corner-down-left-LESxYacP.js";import{t as r}from"./search-Dl4KIBBW.js";import{t as i}from"./button-DTwq4-az.js";import{Fr as a,Ir as o,Nr as s,Pr as c,Qr as l,Zr as u,fi as d,li as f,ui as p}from"./index-Ck2hFZuL.js";import{t as m}from"./button-group-BC7IZZoH.js";var h=t(e(),1),g={id:`kbd`,name:`Kbd`,description:`Used to display textual user input from keyboard.`,installation:{cli:`npx shadcn@latest add kbd`,manual:`Copy and paste the kbd component source code into your project, then update imports to match your setup.`},usage:`import { Kbd } from "@/components/ui/kbd"

<Kbd>Ctrl</Kbd>`,preview:{code:`<div className="flex flex-col items-center gap-4">
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>⇧</Kbd>
    <Kbd>⌥</Kbd>
    <Kbd>⌃</Kbd>
  </KbdGroup>
  <KbdGroup>
    <Kbd>Ctrl</Kbd>
    <span>+</span>
    <Kbd>B</Kbd>
  </KbdGroup>
</div>`,component:h.createElement(`div`,{className:`flex flex-col items-center gap-4`},h.createElement(l,{},h.createElement(u,{},`⌘`),h.createElement(u,{},`⇧`),h.createElement(u,{},`⌥`),h.createElement(u,{},`⌃`)),h.createElement(l,{},h.createElement(u,{},`Ctrl`),h.createElement(`span`,{},`+`),h.createElement(u,{},`B`)))},examples:[{name:`Destructive`,description:`Use the destructive variant for keyboard hints on destructive actions in light and dark themes. The badge displays the shortcut; register the keyboard action separately.`,code:`<Button variant="destructive">
  Remove <Kbd variant="destructive">Shift + Enter</Kbd>
</Button>`,preview:h.createElement(i,{variant:`destructive`},`Remove `,h.createElement(u,{variant:`destructive`},`Shift + Enter`))},{name:`Primary`,description:`Use the primary variant for high-emphasis keyboard hints.`,code:`<Kbd variant="primary">⌘</Kbd>`,preview:h.createElement(u,{variant:`primary`},`⌘`)},{name:`Group`,description:`Use the KbdGroup component to group keyboard keys together.`,code:`<div className="flex flex-col items-center gap-4">
  <p className="text-muted-foreground text-sm">
    Use{" "}
    <KbdGroup>
      <Kbd>Ctrl + B</Kbd>
      <Kbd>Ctrl + K</Kbd>
    </KbdGroup>{" "}
    to open the command palette
  </p>
</div>`,preview:h.createElement(`div`,{className:`flex flex-col items-center gap-4`},h.createElement(`p`,{className:`text-muted-foreground text-sm`},`Use `,h.createElement(l,{},h.createElement(u,{},`Ctrl + B`),h.createElement(u,{},`Ctrl + K`)),` to open the command palette`))},{name:`Button`,description:`Use the Kbd component inside a Button to display a keyboard key inside a button.`,code:`import { CornerDownLeftIcon } from "lucide-react"

<Button variant="outline">
  Accept{" "}
  <Kbd className="translate-x-0.5">
    <CornerDownLeftIcon className="size-3" />
  </Kbd>
</Button>`,preview:h.createElement(i,{variant:`outline`},`Accept `,h.createElement(u,{className:`translate-x-0.5`},h.createElement(n,{className:`size-3`})))},{name:`Default Button`,description:`Use the primary Kbd variant inside a default Button variant.`,code:`<Button>
  Save{" "}
  <Kbd variant="primary" className="translate-x-0.5">⌘S</Kbd>
</Button>`,preview:h.createElement(i,{},`Save `,h.createElement(u,{variant:`primary`,className:`translate-x-0.5`},`⌘S`))},{name:`Tooltip`,description:`Use Kbd and KbdGroup inside tooltip content to show keyboard shortcuts.`,code:`<div className="flex flex-wrap gap-4">
  <ButtonGroup>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Save</Button>
      </TooltipTrigger>
      <TooltipContent className="pr-1.5">
        <div className="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Print</Button>
      </TooltipTrigger>
      <TooltipContent className="pr-1.5">
        <div className="flex items-center gap-2">
          Print Document{" "}
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
      </TooltipContent>
    </Tooltip>
  </ButtonGroup>
</div>`,preview:h.createElement(a,{},h.createElement(`div`,{className:`flex flex-wrap gap-4`},h.createElement(m,{},h.createElement(s,{},h.createElement(o,{asChild:!0},h.createElement(i,{variant:`outline`},`Save`)),h.createElement(c,{className:`pr-1.5`},h.createElement(`div`,{className:`flex items-center gap-2`},`Save Changes `,h.createElement(u,{},`S`)))),h.createElement(s,{},h.createElement(o,{asChild:!0},h.createElement(i,{variant:`outline`},`Print`)),h.createElement(c,{className:`pr-1.5`},h.createElement(`div`,{className:`flex items-center gap-2`},`Print Document `,h.createElement(l,{},h.createElement(u,{},`Ctrl`),h.createElement(u,{},`P`))))))))},{name:`Input Group`,description:`Use Kbd inside InputGroupAddon to display a keyboard key in an input group.`,code:`import { SearchIcon } from "lucide-react"

<div className="flex w-full max-w-xs flex-col gap-6">
  <InputGroup>
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroupAddon>
  </InputGroup>
</div>`,preview:h.createElement(`div`,{className:`flex w-full max-w-xs flex-col gap-6`},h.createElement(f,{},h.createElement(d,{placeholder:`Search...`}),h.createElement(p,{},h.createElement(r,{})),h.createElement(p,{align:`inline-end`},h.createElement(u,{},`⌘K`))))}],props:[{name:`Kbd.className`,type:`string`,description:`Additional classes for the keyboard key container.`,default:`""`},{name:`Kbd.variant`,type:`"default" | "primary"`,description:`Visual style variant for the keyboard key.`,default:`"default"`},{name:`KbdGroup.className`,type:`string`,description:`Additional classes for the grouped keyboard keys container.`,default:`""`}]};export{g as kbdDoc};