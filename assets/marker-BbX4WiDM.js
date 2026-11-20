import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./file-text-DINNd2TT.js";import{t as i}from"./search-Dl4KIBBW.js";import{n as a}from"./spinner-CNEvLfBE.js";import{n as o,r as s,t as c}from"./marker-Duns2Jli.js";var l=n(`book-open-check`,[[`path`,{d:`M12 21V7`,key:`gj6g52`}],[`path`,{d:`m16 12 2 2 4-4`,key:`mdajum`}],[`path`,{d:`M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3`,key:`8arnkb`}]]),u=n(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),d=t(e(),1),f=(e,...t)=>d.createElement(`div`,{className:e},...t),p={id:`marker`,name:`Marker`,description:`Displays an inline status, system note, bordered row, or labeled separator in a conversation.`,installation:{cli:`npx shadcn@latest add marker`,manual:`Copy and paste the marker component source code into your project.`},usage:`import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { CheckIcon } from "lucide-react"

export function MarkerDemo() {
  return (
    <Marker>
      <MarkerIcon>
        <CheckIcon />
      </MarkerIcon>
      <MarkerContent>Explored 4 files</MarkerContent>
    </Marker>
  )
}`,preview:{code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Marker>
    <MarkerIcon>
      <GitBranchIcon />
    </MarkerIcon>
    <MarkerContent>Switched to a new branch</MarkerContent>
  </Marker>
  <Marker role="status">
    <MarkerIcon>
      <Spinner />
    </MarkerIcon>
    <MarkerContent className="shimmer">Thinking...</MarkerContent>
  </Marker>
  <Marker variant="separator">
    <MarkerContent>Conversation compacted</MarkerContent>
  </Marker>
  <Marker>
    <MarkerIcon>
      <SearchIcon />
    </MarkerIcon>
    <MarkerContent>Explored 4 files</MarkerContent>
  </Marker>
</div>`,component:f(`flex w-full max-w-sm flex-col gap-8 py-12`,d.createElement(c,null,d.createElement(s,null,d.createElement(u)),d.createElement(o,null,`Switched to a new branch`)),d.createElement(c,{role:`status`},d.createElement(s,null,d.createElement(a)),d.createElement(o,{className:`shimmer`},`Thinking...`)),d.createElement(c,{variant:`separator`},d.createElement(o,null,`Conversation compacted`)),d.createElement(c,null,d.createElement(s,null,d.createElement(i)),d.createElement(o,null,`Explored 4 files`)))},examples:[{name:`Variants`,description:"Three variants: `default` (inline note), `separator` (centered label with divider lines), and `border` (row with a bottom border).",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Marker>
    <MarkerContent>A default marker for inline notes.</MarkerContent>
  </Marker>
  <Marker variant="separator">
    <MarkerContent>A separator marker</MarkerContent>
  </Marker>
  <Marker variant="border">
    <MarkerContent>A border marker for row boundaries.</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-8 py-12`,d.createElement(c,null,d.createElement(o,null,`A default marker for inline notes.`)),d.createElement(c,{variant:`separator`},d.createElement(o,null,`A separator marker`)),d.createElement(c,{variant:`border`},d.createElement(o,null,`A border marker for row boundaries.`)))},{name:`With Icon`,description:"Use `MarkerIcon` to render a decorative icon alongside the content. Use `flex-col` to stack the icon above.",code:`<div className="flex w-full max-w-sm flex-col gap-12 py-12">
  <Marker>
    <MarkerIcon>
      <GitBranchIcon />
    </MarkerIcon>
    <MarkerContent>Switched to a new branch</MarkerContent>
  </Marker>
  <Marker variant="separator">
    <MarkerIcon>
      <SearchIcon />
    </MarkerIcon>
    <MarkerContent>Explored 4 files</MarkerContent>
  </Marker>
  <Marker className="flex-col">
    <MarkerIcon>
      <BookOpenCheck />
    </MarkerIcon>
    <MarkerContent>Syncing completed</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-12 py-12`,d.createElement(c,null,d.createElement(s,null,d.createElement(u)),d.createElement(o,null,`Switched to a new branch`)),d.createElement(c,{variant:`separator`},d.createElement(s,null,d.createElement(i)),d.createElement(o,null,`Explored 4 files`)),d.createElement(c,{className:`flex-col`},d.createElement(s,null,d.createElement(l)),d.createElement(o,null,`Syncing completed`)))},{name:`Status`,description:'Set `role="status"` and include a `Spinner` for in-progress markers so updates are announced by assistive tech.',code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Marker role="status">
    <MarkerIcon>
      <Spinner />
    </MarkerIcon>
    <MarkerContent>Compacting conversation</MarkerContent>
  </Marker>
  <Marker variant="separator" role="status">
    <MarkerIcon>
      <Spinner />
    </MarkerIcon>
    <MarkerContent>Running tests</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-8 py-12`,d.createElement(c,{role:`status`},d.createElement(s,null,d.createElement(a)),d.createElement(o,null,`Compacting conversation`)),d.createElement(c,{variant:`separator`,role:`status`},d.createElement(s,null,d.createElement(a)),d.createElement(o,null,`Running tests`)))},{name:`Shimmer`,description:"Add the `shimmer` utility class to `MarkerContent` for an animated streaming-text effect.",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Marker role="status">
    <MarkerContent className="shimmer">Thinking...</MarkerContent>
  </Marker>
  <Marker variant="separator" role="status">
    <MarkerContent className="shimmer">Reading 4 files</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-8 py-12`,d.createElement(c,{role:`status`},d.createElement(o,{className:`shimmer`},`Thinking...`)),d.createElement(c,{variant:`separator`,role:`status`},d.createElement(o,{className:`shimmer`},`Reading 4 files`)))},{name:`Separator`,description:"Use the `separator` variant for labeled dividers such as dates or section breaks in a conversation.",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Marker variant="separator">
    <MarkerContent>Today</MarkerContent>
  </Marker>
  <Marker variant="separator">
    <MarkerContent>Worked for 42s</MarkerContent>
  </Marker>
  <Marker variant="separator">
    <MarkerContent>Conversation compacted</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-8 py-12`,d.createElement(c,{variant:`separator`},d.createElement(o,null,`Today`)),d.createElement(c,{variant:`separator`},d.createElement(o,null,`Worked for 42s`)),d.createElement(c,{variant:`separator`},d.createElement(o,null,`Conversation compacted`)))},{name:`Border`,description:"Use the `border` variant for status rows that should separate from the next row with a bottom border.",code:`<div className="flex w-full max-w-sm flex-col gap-3 py-12">
  <Marker variant="border">
    <MarkerIcon>
      <GitBranchIcon />
    </MarkerIcon>
    <MarkerContent>Switched to release-candidate</MarkerContent>
  </Marker>
  <Marker variant="border">
    <MarkerIcon>
      <SearchIcon />
    </MarkerIcon>
    <MarkerContent>Reviewed 8 related files</MarkerContent>
  </Marker>
  <Marker variant="border">
    <MarkerIcon>
      <FileTextIcon />
    </MarkerIcon>
    <MarkerContent>Opened implementation notes</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-3 py-12`,d.createElement(c,{variant:`border`},d.createElement(s,null,d.createElement(u)),d.createElement(o,null,`Switched to release-candidate`)),d.createElement(c,{variant:`border`},d.createElement(s,null,d.createElement(i)),d.createElement(o,null,`Reviewed 8 related files`)),d.createElement(c,{variant:`border`},d.createElement(s,null,d.createElement(r)),d.createElement(o,null,`Opened implementation notes`)))},{name:`Links and Buttons`,description:"Turn a marker into a link or button with the `render` prop on `Marker`. The accessible name comes from the marker text.",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Marker render={<a href="#links-and-buttons" />}>
    <MarkerIcon>
      <GitBranchIcon />
    </MarkerIcon>
    <MarkerContent>View the pull request</MarkerContent>
  </Marker>
  <Marker
    render={
      <button
        type="button"
        className="transition-colors hover:text-foreground"
      />
    }
  >
    <MarkerIcon>
      <SearchIcon />
    </MarkerIcon>
    <MarkerContent>Revert this change</MarkerContent>
  </Marker>
</div>`,preview:f(`flex w-full max-w-sm flex-col gap-8 py-12`,d.createElement(c,{render:d.createElement(`a`,{href:`#links-and-buttons`})},d.createElement(s,null,d.createElement(u)),d.createElement(o,null,`View the pull request`)),d.createElement(c,{render:d.createElement(`button`,{type:`button`,className:`transition-colors hover:text-foreground`})},d.createElement(s,null,d.createElement(i)),d.createElement(o,null,`Revert this change`)))}],props:[{name:`variant`,type:`"default" | "border" | "separator"`,default:`"default"`,description:`The marker layout. Apply on Marker.`},{name:`render`,type:`ReactElement | function`,default:`-`,description:`Render Marker as a different element, such as a link or button.`}]};export{p as markerDoc};