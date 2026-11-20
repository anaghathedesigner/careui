import{i as e,l as t}from"./dist-DtVyZPdI.js";import{at as n,bt as r,ct as i,it as a,lt as o,nt as s,ot as c,rt as l,st as u}from"./index-Ck2hFZuL.js";var d=t(e(),1),f={id:`select`,name:`Select`,description:`Displays a list of options for the user to pick from—triggered by a button.`,installation:{cli:`npx shadcn@latest add select`,manual:`Copy and paste the select component source code into your project.`},usage:`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`,preview:{code:`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="select-preview-theme">Theme</Label>
  <Select defaultValue="system">
    <SelectTrigger id="select-preview-theme">
      <SelectValue placeholder="Select a theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</div>`,component:d.createElement(`div`,{className:`grid w-full max-w-sm items-center gap-1.5`},d.createElement(r,{htmlFor:`select-preview-theme`},`Theme`),d.createElement(s,{defaultValue:`system`},d.createElement(i,{id:`select-preview-theme`},d.createElement(o,{placeholder:`Select a theme`})),d.createElement(l,{},d.createElement(n,{value:`light`},`Light`),d.createElement(n,{value:`dark`},`Dark`),d.createElement(n,{value:`system`},`System`))))},examples:[{name:`Scrollable`,description:`A select component with a scrollable list of options.`,code:`<Select>
  <SelectTrigger className="w-70">
    <SelectValue placeholder="Select a timezone..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
      <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
      <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe & Africa</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
      <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
      <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
      <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
      <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,preview:d.createElement(s,{},d.createElement(i,{className:`w-70`},d.createElement(o,{placeholder:`Select a timezone...`})),d.createElement(l,{},d.createElement(a,{},d.createElement(c,{},`North America`),d.createElement(n,{value:`est`},`Eastern Standard Time (EST)`),d.createElement(n,{value:`cst`},`Central Standard Time (CST)`),d.createElement(n,{value:`mst`},`Mountain Standard Time (MST)`),d.createElement(n,{value:`pst`},`Pacific Standard Time (PST)`),d.createElement(n,{value:`akst`},`Alaska Standard Time (AKST)`),d.createElement(n,{value:`hst`},`Hawaii Standard Time (HST)`)),d.createElement(u),d.createElement(a,{},d.createElement(c,{},`Europe & Africa`),d.createElement(n,{value:`gmt`},`Greenwich Mean Time (GMT)`),d.createElement(n,{value:`cet`},`Central European Time (CET)`),d.createElement(n,{value:`eet`},`Eastern European Time (EET)`),d.createElement(n,{value:`west`},`Western European Summer Time (WEST)`),d.createElement(n,{value:`cat`},`Central Africa Time (CAT)`),d.createElement(n,{value:`eat`},`East Africa Time (EAT)`))))},{name:`With Form`,description:`A select component integrated with form controls.`,code:`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="framework">Framework</Label>
  <Select>
    <SelectTrigger id="framework">
      <SelectValue placeholder="Select a framework" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="next">Next.js</SelectItem>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="astro">Astro</SelectItem>
      <SelectItem value="nuxt">Nuxt.js</SelectItem>
    </SelectContent>
  </Select>
</div>`,preview:d.createElement(`div`,{className:`grid w-full max-w-sm items-center gap-1.5`},d.createElement(r,{htmlFor:`framework`},`Framework`),d.createElement(s,{},d.createElement(i,{id:`framework`},d.createElement(o,{placeholder:`Select a framework`})),d.createElement(l,{},d.createElement(n,{value:`next`},`Next.js`),d.createElement(n,{value:`react`},`React`),d.createElement(n,{value:`astro`},`Astro`),d.createElement(n,{value:`nuxt`},`Nuxt.js`))))}],props:[{name:`value`,type:`string`,description:`The controlled value of the select.`},{name:`defaultValue`,type:`string`,description:`The default value of the select when initially rendered.`},{name:`onValueChange`,type:`(value: string) => void`,description:`Event handler called when the value changes.`},{name:`disabled`,type:`boolean`,description:`When true, prevents the user from interacting with the select.`,default:`false`},{name:`required`,type:`boolean`,description:`When true, indicates that the user must select a value before submitting the owning form.`,default:`false`},{name:`name`,type:`string`,description:`The name of the select, submitted with its owning form as part of a name/value pair.`},{name:`size`,type:`"default" | "sm"`,description:`Controls the size of SelectTrigger.`,default:`"default"`}]};export{f as selectDoc};