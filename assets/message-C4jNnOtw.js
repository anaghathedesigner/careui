import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./createLucideIcon-Cs4mMgfM.js";import{t as a}from"./file-text-DINNd2TT.js";import{t as o}from"./refresh-ccw-Cv3osxFE.js";import{t as s}from"./button-DTwq4-az.js";import{bn as c,pa as l,vn as u}from"./index-Ck2hFZuL.js";import{a as d,c as f,i as p,n as m,r as h,s as g,t as _}from"./attachment-Cm8pK1fa.js";import{n as v,r as y,t as b}from"./bubble-C83E956I.js";var x=i(`thumbs-down`,[[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}],[`path`,{d:`M17 14V2`,key:`8ymqnk`}]]),S=i(`thumbs-up`,[[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}],[`path`,{d:`M7 10v12`,key:`1qc93n`}]]),C=t(e(),1),w=n();function T({className:e,...t}){return(0,w.jsx)(`div`,{"data-slot":`message-group`,className:r(`flex min-w-0 flex-col gap-2`,e),...t})}function E({className:e,align:t=`start`,...n}){return(0,w.jsx)(`div`,{"data-slot":`message`,"data-align":t,className:r(`group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse`,e),...n})}function D({className:e,...t}){return(0,w.jsx)(`div`,{"data-slot":`message-avatar`,className:r(`bg-muted flex w-fit min-w-8 shrink-0 items-center justify-center self-end overflow-hidden rounded-full group-has-data-[slot=message-footer]/message:-translate-y-8`,e),...t})}function O({className:e,...t}){return(0,w.jsx)(`div`,{"data-slot":`message-content`,className:r(`flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end`,e),...t})}function k({className:e,...t}){return(0,w.jsx)(`div`,{"data-slot":`message-header`,className:r(`text-muted-foreground flex max-w-full min-w-0 items-center px-3 text-xs font-medium group-has-data-[variant=ghost]/message:px-0`,e),...t})}function A({className:e,...t}){return(0,w.jsx)(`div`,{"data-slot":`message-footer`,className:r(`text-muted-foreground flex max-w-full min-w-0 items-center px-3 text-xs font-medium group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end`,e),...t})}var j=(e,...t)=>C.createElement(`div`,{className:e},...t),M=e=>C.createElement(u,null,C.createElement(c,null,e)),N={id:`message`,name:`Message`,description:`Displays a message in a conversation, with optional avatar, header, footer, and alignment.`,installation:{cli:`npx shadcn@latest add message`,manual:`Copy and paste the message component source code into your project.`},usage:`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"

export function MessageDemo() {
  return (
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  )
}`,preview:{code:`<div className="flex w-full max-w-sm flex-col gap-6 py-12">
  <Message align="end">
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>ME</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <Bubble>
        <BubbleContent>Deploying to prod real quick.</BubbleContent>
      </Bubble>
    </MessageContent>
  </Message>
  <Message>
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>R</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <Bubble variant="muted">
        <BubbleContent>It&apos;s 4:55 PM. On a Friday.</BubbleContent>
      </Bubble>
    </MessageContent>
  </Message>
  <Message align="end">
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>ME</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <Bubble>
        <BubbleContent>It&apos;s a one-line change.</BubbleContent>
      </Bubble>
      <MessageFooter>Delivered</MessageFooter>
    </MessageContent>
  </Message>
  <Message>
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>R</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>It&apos;s always a one-line change 😭.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>Alright, let me take a look.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </MessageContent>
  </Message>
</div>`,component:j(`flex w-full max-w-sm flex-col gap-6 py-12`,C.createElement(E,{align:`end`},C.createElement(D,null,M(`ME`)),C.createElement(O,null,C.createElement(b,null,C.createElement(v,null,`Deploying to prod real quick.`)))),C.createElement(E,null,C.createElement(D,null,M(`R`)),C.createElement(O,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`It's 4:55 PM. On a Friday.`)))),C.createElement(E,{align:`end`},C.createElement(D,null,M(`ME`)),C.createElement(O,null,C.createElement(b,null,C.createElement(v,null,`It's a one-line change.`)),C.createElement(A,null,`Delivered`))),C.createElement(E,null,C.createElement(D,null,M(`R`)),C.createElement(O,null,C.createElement(y,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`It's always a one-line change 😭.`)),C.createElement(b,{variant:`muted`},C.createElement(v,null,`Alright, let me take a look.`))))))},examples:[{name:`Avatar`,description:'Use `MessageAvatar` to render an avatar anchored to the bottom of the message. Set `align="end"` on `Message` to mirror the row.',code:`<div className="flex w-full max-w-sm flex-col gap-6 py-12">
  <Message>
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>R</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <Bubble variant="muted">
        <BubbleContent>The build failed during dependency installation.</BubbleContent>
      </Bubble>
    </MessageContent>
  </Message>
  <Message align="end">
    <MessageAvatar>
      <Avatar>
        <AvatarFallback>ME</AvatarFallback>
      </Avatar>
    </MessageAvatar>
    <MessageContent>
      <Bubble>
        <BubbleContent>Can you share the exact error?</BubbleContent>
      </Bubble>
    </MessageContent>
  </Message>
</div>`,preview:j(`flex w-full max-w-sm flex-col gap-6 py-12`,C.createElement(E,null,C.createElement(D,null,M(`R`)),C.createElement(O,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`The build failed during dependency installation.`)))),C.createElement(E,{align:`end`},C.createElement(D,null,M(`ME`)),C.createElement(O,null,C.createElement(b,null,C.createElement(v,null,`Can you share the exact error?`)))))},{name:`Group`,description:"Use `MessageGroup` to stack consecutive messages from the same sender. Render an empty `MessageAvatar` on earlier messages to keep them aligned.",code:`<div className="flex w-full max-w-sm flex-col gap-6 py-12">
  <MessageGroup>
    <Message>
      <MessageAvatar />
      <MessageContent>
        <Bubble variant="muted">
          <BubbleContent>I checked the registry addresses.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble variant="muted">
          <BubbleContent>
            The component and example JSON now live under the UI registry.
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </MessageGroup>
</div>`,preview:j(`flex w-full max-w-sm flex-col gap-6 py-12`,C.createElement(T,null,C.createElement(E,null,C.createElement(D,null),C.createElement(O,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`I checked the registry addresses.`)))),C.createElement(E,null,C.createElement(D,null,M(`CN`)),C.createElement(O,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`The component and example JSON now live under the UI registry.`))))))},{name:`Header and Footer`,description:"Use `MessageHeader` for a sender name above the message and `MessageFooter` for metadata such as delivery status below it.",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Message>
    <MessageContent>
      <MessageHeader>Olivia</MessageHeader>
      <Bubble variant="muted">
        <BubbleContent>I already checked the logs.</BubbleContent>
      </Bubble>
    </MessageContent>
  </Message>
  <Message align="end">
    <MessageContent>
      <Bubble>
        <BubbleContent>
          Send the report to the team. Ping @shadcn if you need help.
        </BubbleContent>
      </Bubble>
      <MessageFooter>
        Read <span className="font-normal">Yesterday</span>
      </MessageFooter>
    </MessageContent>
  </Message>
</div>`,preview:j(`flex w-full max-w-sm flex-col gap-8 py-12`,C.createElement(E,null,C.createElement(O,null,C.createElement(k,null,`Olivia`),C.createElement(b,{variant:`muted`},C.createElement(v,null,`I already checked the logs.`)))),C.createElement(E,{align:`end`},C.createElement(O,null,C.createElement(b,null,C.createElement(v,null,`Send the report to the team. Ping @shadcn if you need help.`)),C.createElement(A,null,`Read `,C.createElement(`span`,{className:`font-normal`},`Yesterday`)))))},{name:`Actions`,description:"Place message-level action buttons in `MessageFooter`, such as copy, retry, or feedback buttons.",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Message>
    <MessageContent>
      <Bubble variant="muted">
        <BubbleContent>
          The install failure is coming from the workspace package.
        </BubbleContent>
      </Bubble>
      <MessageFooter>
        <Button variant="ghost" size="icon" aria-label="Copy" title="Copy">
          <CopyIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Like" title="Like">
          <ThumbsUpIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Dislike" title="Dislike">
          <ThumbsDownIcon />
        </Button>
      </MessageFooter>
    </MessageContent>
  </Message>
  <Message align="end">
    <MessageContent>
      <Bubble>
        <BubbleContent>Okay drop me a link. Taking a look...</BubbleContent>
      </Bubble>
      <MessageFooter className="gap-2">
        <span className="font-normal text-destructive">Failed to send</span>
        <Button variant="ghost" size="icon-xs" title="Retry" aria-label="Retry">
          <RefreshCcwIcon />
        </Button>
      </MessageFooter>
    </MessageContent>
  </Message>
</div>`,preview:j(`flex w-full max-w-sm flex-col gap-8 py-12`,C.createElement(E,null,C.createElement(O,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`The install failure is coming from the workspace package.`)),C.createElement(A,null,C.createElement(s,{variant:`ghost`,size:`icon`,"aria-label":`Copy`,title:`Copy`},C.createElement(l)),C.createElement(s,{variant:`ghost`,size:`icon`,"aria-label":`Like`,title:`Like`},C.createElement(S)),C.createElement(s,{variant:`ghost`,size:`icon`,"aria-label":`Dislike`,title:`Dislike`},C.createElement(x))))),C.createElement(E,{align:`end`},C.createElement(O,null,C.createElement(b,null,C.createElement(v,null,`Okay drop me a link. Taking a look...`)),C.createElement(A,{className:`gap-2`},C.createElement(`span`,{className:`font-normal text-destructive`},`Failed to send`),C.createElement(s,{variant:`ghost`,size:`icon-xs`,title:`Retry`,"aria-label":`Retry`},C.createElement(o))))))},{name:`Attachment`,description:"Render `Attachment` inside `MessageContent` alongside a `Bubble` to display file or image attachments in a message.",code:`<div className="flex w-full max-w-sm flex-col gap-8 py-12">
  <Message>
    <MessageContent>
      <Bubble variant="muted">
        <BubbleContent>
          Done. Here&apos;s the PDF with the image added as the cover page.
        </BubbleContent>
      </Bubble>
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction
            type="button"
            title="Download"
            aria-label="Download"
            size="icon-sm"
            variant="secondary"
          >
            <DownloadIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </MessageContent>
  </Message>
</div>`,preview:j(`flex w-full max-w-sm flex-col gap-8 py-12`,C.createElement(E,null,C.createElement(O,null,C.createElement(b,{variant:`muted`},C.createElement(v,null,`Done. Here's the PDF with the image added as the cover page.`)),C.createElement(_,null,C.createElement(g,null,C.createElement(a)),C.createElement(p,null,C.createElement(f,null,`sales-dashboard.pdf`),C.createElement(d,null,`PDF · 2.4 MB`)),C.createElement(h,null,C.createElement(m,{title:`Download`,"aria-label":`Download`,size:`icon-sm`,variant:`secondary`},C.createElement(a)))))))}],props:[{name:`align`,type:`"start" | "end"`,default:`"start"`,description:"The alignment of the message row. Apply on Message. Use `end` for the current user's messages."}]};export{N as messageDoc};