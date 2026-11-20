import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./check-CfIGZGct.js";import{t as i}from"./file-text-DINNd2TT.js";import{t as a}from"./refresh-cw-CmJjVdGU.js";import{t as o}from"./x-CgxuUKeI.js";import{Ai as s,Fi as c,Ni as l,Oi as u,Pi as d,ha as f,ji as p,pa as m}from"./index-Ck2hFZuL.js";import{a as h,c as g,i as _,l as v,n as y,o as b,r as x,s as S,t as C}from"./attachment-Cm8pK1fa.js";import{n as w}from"./spinner-CNEvLfBE.js";var T=n(`file-code`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}]]),E=n(`file-exclamation-point`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),D=n(`file-search`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`circle`,{cx:`11.5`,cy:`14.5`,r:`2.5`,key:`1bq0ko`}],[`path`,{d:`M13.3 16.3 15 18`,key:`2quom7`}]]),O=n(`table`,[[`path`,{d:`M12 3v18`,key:`108xh3`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}]]),k=t(e(),1),A=(e,...t)=>k.createElement(`div`,{className:e},...t),j=[{name:`workspace.png`,meta:`PNG · 820 KB`,src:`https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80`,alt:`Workspace`},{name:`desk-reference.jpg`,meta:`JPG · 1.1 MB`,src:`https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80`,alt:`Desk`},{name:`office-reference.jpg`,meta:`JPG · 940 KB`,src:`https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80`,alt:`Office`}],M={id:`attachment`,name:`Attachment`,description:`Displays a file or image attachment with media, metadata, upload state, and actions. Use in chat composers, message threads, and upload lists.`,installation:{cli:`npx shadcn@latest add attachment`,manual:`Install the button component, then copy the attachment component source into your project.`},usage:`import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { FileTextIcon, XIcon } from "lucide-react"

export function AttachmentDemo() {
  return (
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove sales-dashboard.pdf">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  )
}`,preview:{code:`<div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
  <AttachmentGroup>
    {images.map((image) => (
      <Attachment key={image.name} orientation="vertical">
        <AttachmentMedia variant="image">
          <img src={image.src} alt={image.alt} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{image.name}</AttachmentTitle>
          <AttachmentDescription>{image.meta}</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    ))}
  </AttachmentGroup>
  <Attachment state="uploading" className="w-full">
    <AttachmentMedia><Spinner /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
      <AttachmentDescription>Uploading · 64%</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Cancel upload"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment className="w-full">
    <AttachmentMedia><FileCodeIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>message-renderer.tsx</AttachmentTitle>
      <AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove message-renderer.tsx"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
</div>`,component:A(`mx-auto flex w-full max-w-sm flex-col gap-3 py-12`,k.createElement(b,null,...j.map(e=>k.createElement(C,{key:e.name,orientation:`vertical`},k.createElement(S,{variant:`image`},k.createElement(`img`,{src:e.src,alt:e.alt})),k.createElement(_,null,k.createElement(g,null,e.name),k.createElement(h,null,e.meta))))),k.createElement(C,{state:`uploading`,className:`w-full`},k.createElement(S,null,k.createElement(w)),k.createElement(_,null,k.createElement(g,null,`sales-dashboard.pdf`),k.createElement(h,null,`Uploading · 64%`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Cancel upload`},k.createElement(o)))),k.createElement(C,{className:`w-full`},k.createElement(S,null,k.createElement(T)),k.createElement(_,null,k.createElement(g,null,`message-renderer.tsx`),k.createElement(h,null,`TypeScript · 12 KB`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Remove message-renderer.tsx`},k.createElement(o)))))},examples:[{name:`Image`,description:'Set `variant="image"` on `AttachmentMedia` and render an `<img>` inside it. Use `orientation="vertical"` to stack media above content. Add `AttachmentTrigger` to make the card open a link.',code:`<AttachmentGroup className="w-full">
  {images.map((image) => (
    <Attachment key={image.name} orientation="vertical">
      <AttachmentMedia variant="image">
        <img src={image.src} alt={image.alt} />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>{image.name}</AttachmentTitle>
        <AttachmentDescription>{image.meta}</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label={\`Remove \${image.name}\`}>
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
      <AttachmentTrigger
        render={
          <a href={image.src} target="_blank" rel="noreferrer" aria-label={\`Open \${image.name}\`} />
        }
      />
    </Attachment>
  ))}
</AttachmentGroup>`,preview:k.createElement(b,{className:`w-full max-w-sm`},...j.map(e=>k.createElement(C,{key:e.name,orientation:`vertical`},k.createElement(S,{variant:`image`},k.createElement(`img`,{src:e.src,alt:e.alt})),k.createElement(_,null,k.createElement(g,null,e.name),k.createElement(h,null,e.meta)),k.createElement(x,null,k.createElement(y,{"aria-label":`Remove ${e.name}`},k.createElement(o))),k.createElement(v,{render:k.createElement(`a`,{href:e.src,target:`_blank`,rel:`noreferrer`,"aria-label":`Open ${e.name}`})}))))},{name:`States`,description:"Set `state` to reflect the upload lifecycle. `uploading` and `processing` shimmer the title; `error` switches to a destructive treatment.",code:`<div className="mx-auto flex w-full max-w-sm flex-col gap-2 py-12">
  <Attachment state="idle" className="w-full">
    <AttachmentMedia><ClockIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>selected-file.pdf</AttachmentTitle>
      <AttachmentDescription>Ready to upload</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove selected-file.pdf"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment state="uploading" className="w-full">
    <AttachmentMedia><Spinner /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>design-system.zip</AttachmentTitle>
      <AttachmentDescription>Uploading · 64%</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Cancel upload"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment state="processing" className="w-full">
    <AttachmentMedia><FileTextIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>market-research.pdf</AttachmentTitle>
      <AttachmentDescription>Processing document</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove market-research.pdf"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment state="error" className="w-full">
    <AttachmentMedia><FileWarningIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
      <AttachmentDescription>Upload failed. Try again.</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Retry upload"><RefreshCwIcon /></AttachmentAction>
      <AttachmentAction aria-label="Remove financial-model.xlsx"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment state="done" className="w-full">
    <AttachmentMedia><CheckIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>uploaded-report.pdf</AttachmentTitle>
      <AttachmentDescription>Uploaded · 1.8 MB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove uploaded-report.pdf"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
</div>`,preview:A(`mx-auto flex w-full max-w-sm flex-col gap-2 py-12`,k.createElement(C,{state:`idle`,className:`w-full`},k.createElement(S,null,k.createElement(f)),k.createElement(_,null,k.createElement(g,null,`selected-file.pdf`),k.createElement(h,null,`Ready to upload`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Remove selected-file.pdf`},k.createElement(o)))),k.createElement(C,{state:`uploading`,className:`w-full`},k.createElement(S,null,k.createElement(w)),k.createElement(_,null,k.createElement(g,null,`design-system.zip`),k.createElement(h,null,`Uploading · 64%`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Cancel upload`},k.createElement(o)))),k.createElement(C,{state:`processing`,className:`w-full`},k.createElement(S,null,k.createElement(i)),k.createElement(_,null,k.createElement(g,null,`market-research.pdf`),k.createElement(h,null,`Processing document`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Remove market-research.pdf`},k.createElement(o)))),k.createElement(C,{state:`error`,className:`w-full`},k.createElement(S,null,k.createElement(E)),k.createElement(_,null,k.createElement(g,null,`financial-model.xlsx`),k.createElement(h,null,`Upload failed. Try again.`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Retry upload`},k.createElement(a)),k.createElement(y,{"aria-label":`Remove financial-model.xlsx`},k.createElement(o)))),k.createElement(C,{state:`done`,className:`w-full`},k.createElement(S,null,k.createElement(r)),k.createElement(_,null,k.createElement(g,null,`uploaded-report.pdf`),k.createElement(h,null,`Uploaded · 1.8 MB`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Remove uploaded-report.pdf`},k.createElement(o)))))},{name:`Sizes`,description:"Three sizes: `default`, `sm`, and `xs`.",code:`<div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
  <Attachment size="default" className="w-full">
    <AttachmentMedia><FileTextIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>Default attachment</AttachmentTitle>
      <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
  <Attachment size="sm" className="w-full">
    <AttachmentMedia><FileTextIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>Small attachment</AttachmentTitle>
      <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
  <Attachment size="xs" className="w-full">
    <AttachmentMedia><FileTextIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>Extra small attachment</AttachmentTitle>
    </AttachmentContent>
  </Attachment>
</div>`,preview:A(`mx-auto flex w-full max-w-sm flex-col gap-3 py-12`,k.createElement(C,{size:`default`,className:`w-full`},k.createElement(S,null,k.createElement(i)),k.createElement(_,null,k.createElement(g,null,`Default attachment`),k.createElement(h,null,`PDF · 2.4 MB`))),k.createElement(C,{size:`sm`,className:`w-full`},k.createElement(S,null,k.createElement(i)),k.createElement(_,null,k.createElement(g,null,`Small attachment`),k.createElement(h,null,`PDF · 2.4 MB`))),k.createElement(C,{size:`xs`,className:`w-full`},k.createElement(S,null,k.createElement(i)),k.createElement(_,null,k.createElement(g,null,`Extra small attachment`))))},{name:`Group`,description:"Wrap attachments in `AttachmentGroup` for a horizontally scrollable, snapping row with an edge fade. Mix file icons and image thumbnails.",code:`<AttachmentGroup className="w-full">
  <Attachment className="w-64">
    <AttachmentMedia><FileTextIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>briefing-notes.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 1.4 MB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove briefing-notes.pdf"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment className="w-64">
    <AttachmentMedia variant="image">
      <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80" alt="workspace" />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>workspace.png</AttachmentTitle>
      <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove workspace.png"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment className="w-64">
    <AttachmentMedia><TableIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>customers.csv</AttachmentTitle>
      <AttachmentDescription>CSV · 18 KB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove customers.csv"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
  <Attachment className="w-64">
    <AttachmentMedia><FileCodeIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>renderer.tsx</AttachmentTitle>
      <AttachmentDescription>TSX · 12 KB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove renderer.tsx"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
</AttachmentGroup>`,preview:k.createElement(b,{className:`w-full max-w-sm`},...[{icon:i,name:`briefing-notes.pdf`,meta:`PDF · 1.4 MB`},{src:`https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80`,name:`workspace.png`,meta:`PNG · 820 KB`},{icon:O,name:`customers.csv`,meta:`CSV · 18 KB`},{icon:T,name:`renderer.tsx`,meta:`TSX · 12 KB`}].map(({icon:e,src:t,name:n,meta:r})=>k.createElement(C,{key:n,className:`w-64`},t?k.createElement(S,{variant:`image`},k.createElement(`img`,{src:t,alt:n})):k.createElement(S,null,e?k.createElement(e):null),k.createElement(_,null,k.createElement(g,null,n),k.createElement(h,null,r)),k.createElement(x,null,k.createElement(y,{"aria-label":`Remove ${n}`},k.createElement(o))))))},{name:`Trigger`,description:"Add an `AttachmentTrigger` to make the whole card open a link or dialog. It fills the card behind the actions so they stay independently clickable.",code:`<Dialog>
  <Attachment className="w-full">
    <AttachmentMedia><FileSearchIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>research-summary.pdf</AttachmentTitle>
      <AttachmentDescription>Open preview dialog</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Copy link"><CopyIcon /></AttachmentAction>
      <AttachmentAction aria-label="Remove research-summary.pdf"><XIcon /></AttachmentAction>
    </AttachmentActions>
    <DialogTrigger
      render={<AttachmentTrigger aria-label="Preview research-summary.pdf" />}
    />
  </Attachment>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>research-summary.pdf</DialogTitle>
      <DialogDescription>
        The trigger fills the card and opens the dialog, while actions stay independently clickable.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,preview:k.createElement(u,null,k.createElement(C,{className:`w-full max-w-sm`},k.createElement(S,null,k.createElement(D)),k.createElement(_,null,k.createElement(g,null,`research-summary.pdf`),k.createElement(h,null,`Open preview dialog`)),k.createElement(x,null,k.createElement(y,{"aria-label":`Copy link`},k.createElement(m)),k.createElement(y,{"aria-label":`Remove research-summary.pdf`},k.createElement(o))),k.createElement(c,{render:k.createElement(v,{"aria-label":`Preview research-summary.pdf`})})),k.createElement(s,{className:`sm:max-w-md`},k.createElement(l,null,k.createElement(d,null,`research-summary.pdf`),k.createElement(p,null,`The trigger fills the card and opens the dialog, while actions stay independently clickable.`))))}],props:[{name:`state`,type:`"idle" | "uploading" | "processing" | "error" | "done"`,default:`"done"`,description:`The upload state on Attachment. Drives styling and the shimmer on the title.`},{name:`size`,type:`"default" | "sm" | "xs"`,default:`"default"`,description:`The attachment size. Apply on Attachment.`},{name:`orientation`,type:`"horizontal" | "vertical"`,default:`"horizontal"`,description:`Lay the media beside or above the content. Apply on Attachment.`},{name:`variant`,type:`"icon" | "image"`,default:`"icon"`,description:`Whether AttachmentMedia holds an icon or an <img>. Apply on AttachmentMedia.`},{name:`AttachmentAction size`,type:`Button["size"]`,default:`"icon-xs"`,description:`The button size for AttachmentAction.`},{name:`AttachmentTrigger render`,type:`ReactElement | function`,default:`-`,description:`Render AttachmentTrigger as a different element, such as a link or DialogTrigger.`}]};export{M as attachmentDoc};