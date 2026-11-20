import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{$t as r,Gt as i,Jt as a,Kt as o,Qt as s,Wt as c,Xt as l,Yt as u,Zt as d,an as f,en as p,in as m,nn as h,qt as g,rn as _,tn as v}from"./index-Ck2hFZuL.js";var y=t(e(),1),b=[`Next.js`,`SvelteKit`,`Nuxt.js`,`Remix`,`Astro`],x=e=>e;function S(){return y.createElement(`div`,{className:`w-full max-w-xs`},y.createElement(c,{items:b},y.createElement(s,{placeholder:`Select a framework`}),y.createElement(u,{},y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e,value:e},e))))))}function C(){let[e,t]=y.useState([b[0]]),n=f();return y.createElement(`div`,{className:`w-full max-w-xs`},y.createElement(c,{items:b,multiple:!0,autoHighlight:!0,value:e,onValueChange:t},y.createElement(o,{ref:n},y.createElement(m,{},x(e=>y.createElement(y.Fragment,null,...e.map(e=>y.createElement(i,{key:e},e)),y.createElement(g,{}))))),y.createElement(u,{anchor:n},y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e,value:e},e))))))}var w=[{value:`Americas`,items:[`(GMT-5) New York`,`(GMT-8) Los Angeles`,`(GMT-6) Chicago`]},{value:`Europe`,items:[`(GMT+0) London`,`(GMT+1) Paris`,`(GMT+1) Berlin`]},{value:`Asia/Pacific`,items:[`(GMT+9) Tokyo`,`(GMT+8) Shanghai`,`(GMT+8) Singapore`]}];function T(){return y.createElement(`div`,{className:`w-full max-w-xs`},y.createElement(c,{items:w},y.createElement(s,{placeholder:`Select a timezone`}),y.createElement(u,{},y.createElement(l,{},`No timezones found.`),y.createElement(v,{},x((e,t)=>y.createElement(d,{key:e.value,items:e.items},y.createElement(p,{},e.value),y.createElement(a,{children:x(e=>y.createElement(r,{key:e,value:e},e))}),t<w.length-1?y.createElement(h,{}):null))))))}function E(){let e=[{code:``,value:``,continent:``,label:`Select country`},{code:`ar`,value:`argentina`,label:`Argentina`,continent:`South America`},{code:`au`,value:`australia`,label:`Australia`,continent:`Oceania`},{code:`br`,value:`brazil`,label:`Brazil`,continent:`South America`},{code:`ca`,value:`canada`,label:`Canada`,continent:`North America`},{code:`fr`,value:`france`,label:`France`,continent:`Europe`},{code:`jp`,value:`japan`,label:`Japan`,continent:`Asia`},{code:`us`,value:`united-states`,label:`United States`,continent:`North America`}];return y.createElement(c,{items:e,defaultValue:e[0]},y.createElement(_,{render:y.createElement(n,{variant:`outline`,className:`w-64 justify-between font-normal`})},y.createElement(m,{})),y.createElement(u,{},y.createElement(s,{showTrigger:!1,placeholder:`Search`}),y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e.code,value:e},e.label)))))}var D={id:`combobox`,name:`Combobox`,description:`Autocomplete input with a list of suggestions, supporting single and multiple selection, grouping, chips, and custom items.`,installation:{cli:`npx shadcn@latest add combobox`,manual:`Install @base-ui/react, then copy and paste the combobox component source code into your project.`},usage:`import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function ComboboxDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,props:[{name:`collisionBoundary`,type:`"clipping-ancestors" | Element | Element[] | Rect`,description:`Sets the area used to position ComboboxContent. Use document.documentElement when the combobox is inside a clipped or scrolling container.`,default:`"clipping-ancestors"`},{name:`collisionAvoidance`,type:`CollisionAvoidance`,description:`Controls whether ComboboxContent flips or shifts when it reaches its collision boundary.`,default:`{ side: "flip", align: "flip", fallbackAxisSide: "none" }`},{name:`ComboboxItem.showIndicator`,type:`boolean`,description:`Shows the default checkmark for selected options. Disable it when the item already contains a selection indicator such as a Checkbox.`,default:`true`},{name:`ComboboxList.showScrollbar`,type:`boolean`,description:`Shows the native scrollbar when the list content overflows. Defaults to hidden for existing Combobox lists.`,default:`false`}],preview:{code:`<Combobox items={frameworks}>
  <ComboboxInput placeholder="Select a framework" />
  <ComboboxContent>
    <ComboboxEmpty>No items found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,component:y.createElement(S)},examples:[{name:`With Clear Button`,description:`Use the showClear prop to show a clear button inside the input.`,code:`<Combobox items={frameworks} defaultValue={frameworks[0]}>
  <ComboboxInput placeholder="Select a framework" showClear />
  <ComboboxContent>
    <ComboboxEmpty>No items found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,preview:y.createElement(`div`,{className:`w-full max-w-xs`},y.createElement(c,{items:b,defaultValue:b[0]},y.createElement(s,{placeholder:`Select a framework`,showClear:!0}),y.createElement(u,{},y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e,value:e},e))))))},{name:`Multiple Selection`,description:`Use multiple with ComboboxChips for multi-select behavior.`,code:`import * as React from "react"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function ComboboxMultiple() {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      items={frameworks}
      defaultValue={[frameworks[0]]}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,preview:y.createElement(C)},{name:`Groups`,description:`Use ComboboxGroup and ComboboxSeparator to group items under labeled sections.`,code:`import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox"

const timezones = [
  { value: "Americas", items: ["(GMT-5) New York", "(GMT-8) Los Angeles"] },
  { value: "Europe", items: ["(GMT+0) London", "(GMT+1) Paris"] },
  { value: "Asia/Pacific", items: ["(GMT+9) Tokyo", "(GMT+8) Shanghai"] },
]

export function ComboboxWithGroups() {
  return (
    <Combobox items={timezones}>
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < timezones.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,preview:y.createElement(T)},{name:`Popup / Trigger`,description:`Trigger the combobox from a button using ComboboxTrigger. Place ComboboxInput inside ComboboxContent.`,code:`import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"

export function ComboboxPopup() {
  return (
    <Combobox items={countries} defaultValue={countries[0]}>
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            className="w-64 justify-between font-normal"
          />
        }
      >
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search" />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.code} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,preview:y.createElement(E)},{name:`Custom Items`,description:`Use itemToStringValue when your items are objects to control filtering and display.`,code:`import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

type Framework = { label: string; value: string }

const frameworks: Framework[] = [
  { label: "Next.js", value: "next" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt", value: "nuxt" },
]

export function ComboboxCustomItems() {
  return (
    <Combobox
      items={frameworks}
      itemToStringValue={(framework) => framework.label}
    >
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(framework) => (
            <ComboboxItem key={framework.value} value={framework}>
              {framework.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,preview:y.createElement(c,{items:[{label:`Next.js`,value:`next`},{label:`SvelteKit`,value:`sveltekit`},{label:`Nuxt`,value:`nuxt`},{label:`Remix`,value:`remix`},{label:`Astro`,value:`astro`}],itemToStringValue:e=>e.label,className:`w-full max-w-xs`},y.createElement(s,{placeholder:`Select a framework`}),y.createElement(u,{},y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e.value,value:e},e.label)))))},{name:`Disabled`,description:`Use the disabled prop to disable the combobox.`,code:`<Combobox items={frameworks}>
  <ComboboxInput placeholder="Select a framework" disabled />
  <ComboboxContent>
    <ComboboxEmpty>No items found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,preview:y.createElement(`div`,{className:`w-full max-w-xs`},y.createElement(c,{items:b},y.createElement(s,{placeholder:`Select a framework`,disabled:!0}),y.createElement(u,{},y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e,value:e},e))))))},{name:`Auto Highlight`,description:`Use the autoHighlight prop to automatically highlight the first item on filter.`,code:`<Combobox items={frameworks} autoHighlight>
  <ComboboxInput placeholder="Select a framework" />
  <ComboboxContent>
    <ComboboxEmpty>No items found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,preview:y.createElement(`div`,{className:`w-full max-w-xs`},y.createElement(c,{items:b,autoHighlight:!0},y.createElement(s,{placeholder:`Select a framework`}),y.createElement(u,{},y.createElement(l,{},`No items found.`),y.createElement(v,{},x(e=>y.createElement(r,{key:e,value:e},e))))))}]};export{D as comboboxDoc};