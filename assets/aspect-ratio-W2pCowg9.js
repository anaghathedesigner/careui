import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";var i=t(e(),1),a=n();function o({ratio:e,className:t,...n}){return(0,a.jsx)(`div`,{"data-slot":`aspect-ratio`,style:{"--ratio":e},className:r(`relative aspect-(--ratio)`,t),...n})}var s={id:`aspect-ratio`,name:`Aspect Ratio`,description:`Displays content within a desired ratio.`,installation:{cli:`npx shadcn@latest add aspect-ratio`,manual:`Copy and paste the aspect-ratio component source code into your project.`},usage:`import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>`,preview:{code:`<div className="w-full max-w-sm">
  <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
    <img
      src="https://avatar.vercel.sh/shadcn1"
      alt="Photo"
      className="w-full h-full rounded-lg object-cover grayscale"
    />
  </AspectRatio>
</div>`,component:i.createElement(`div`,{className:`w-full max-w-sm`},i.createElement(o,{ratio:16/9,className:`rounded-lg bg-muted`},i.createElement(`img`,{src:`https://avatar.vercel.sh/shadcn1`,alt:`Photo`,className:`w-full h-full rounded-lg object-cover grayscale`})))},examples:[{name:`Square`,description:"A square aspect ratio component using the `ratio={1 / 1}` prop. This is useful for displaying images in a square format.",code:`<div className="w-full max-w-48">
  <AspectRatio ratio={1 / 1} className="rounded-lg bg-muted">
    <img
      src="https://avatar.vercel.sh/shadcn1"
      alt="Photo"
      className="w-full h-full rounded-lg object-cover grayscale"
    />
  </AspectRatio>
</div>`,preview:i.createElement(`div`,{className:`w-full max-w-48`},i.createElement(o,{ratio:1,className:`rounded-lg bg-muted`},i.createElement(`img`,{src:`https://avatar.vercel.sh/shadcn1`,alt:`Photo`,className:`w-full h-full rounded-lg object-cover grayscale`})))},{name:`Portrait`,description:"A portrait aspect ratio component using the `ratio={9 / 16}` prop. This is useful for displaying images in a portrait format.",code:`<div className="w-full max-w-40">
  <AspectRatio ratio={9 / 16} className="rounded-lg bg-muted">
    <img
      src="https://avatar.vercel.sh/shadcn1"
      alt="Photo"
      className="w-full h-full rounded-lg object-cover grayscale"
    />
  </AspectRatio>
</div>`,preview:i.createElement(`div`,{className:`w-full max-w-40`},i.createElement(o,{ratio:9/16,className:`rounded-lg bg-muted`},i.createElement(`img`,{src:`https://avatar.vercel.sh/shadcn1`,alt:`Photo`,className:`w-full h-full rounded-lg object-cover grayscale`})))}],props:[{name:`ratio`,type:`number`,description:`The desired aspect ratio (e.g. 16/9, 1/1, 9/16).`,default:void 0},{name:`className`,type:`string`,description:`Additional CSS classes to apply to the aspect ratio container.`,default:void 0}]};export{s as aspectRatioDoc};