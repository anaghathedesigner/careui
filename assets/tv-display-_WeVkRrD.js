import{i as e,l as t,r as n}from"./dist-DtVyZPdI.js";import{_ as r,b as i,g as a,h as o,m as s,v as c,y as l}from"./index-Ck2hFZuL.js";var u=t(e(),1),d=n();function f({value:e,stagger:t=.025,duration:n=.5}){let r=u.useMemo(()=>{if(typeof Intl<`u`&&`Segmenter`in Intl){let t=new Intl.Segmenter(void 0,{granularity:`grapheme`});return Array.from(t.segment(e),e=>e.segment)}return Array.from(e)},[e]);return(0,d.jsxs)(`span`,{className:`relative inline-block overflow-hidden align-baseline`,style:{height:`1em`,lineHeight:1},"aria-label":e,children:[(0,d.jsx)(`span`,{className:`inline-flex`,style:{lineHeight:1},children:r.map((r,i)=>(0,d.jsx)(`span`,{className:`inline-block tabular-nums`,style:{animation:`tv-rotating-text-in ${n}s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:`${i*t}s`,lineHeight:1},children:r===` `?`\xA0`:r},`${e}-${i}`))},e),(0,d.jsx)(`style`,{href:`tv-rotating-text-in`,precedence:`tv-display`,children:`@keyframes tv-rotating-text-in {
        0% { transform: translateY(100%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }`})]})}var p=[9e3,7500,11e3,6500];function m(e,t){let[n,r]=u.useState(0);return u.useEffect(()=>{let n=setInterval(()=>r(t=>(t+1)%e),t);return()=>clearInterval(n)},[e,t]),n}function h({doctor:e,specialty:t,room:n,sequence:r,intervalMs:o,nextLabel:s,roomLabel:u}){let p=m(r.length,o),h=r[p],g=[r[(p+1)%r.length],r[(p+2)%r.length],r[(p+3)%r.length]];return(0,d.jsxs)(l,{className:`relative overflow-hidden`,children:[(0,d.jsx)(a,{name:e,specialty:t}),(0,d.jsx)(c,{label:u,children:n}),(0,d.jsx)(i,{current:(0,d.jsx)(f,{value:h}),next:g,nextLabel:s,nextRestartKey:p}),(0,d.jsx)(`span`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 animate-[tv-display-glare_1.25s_ease-in-out_both]`,style:{background:`linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)`}},p),(0,d.jsx)(`style`,{href:`tv-display-glare`,precedence:`tv-display`,children:`@keyframes tv-display-glare {
        0% { transform: translateX(0); opacity: 0; }
        25% { opacity: 1; }
        75% { opacity: 1; }
        100% { transform: translateX(300%); opacity: 0; }
      }`})]})}function g({counter:e,sequence:t,intervalMs:n,counterLabel:r=`Counter`}){let a=m(t.length,n),o=t[a],s=[t[(a+1)%t.length],t[(a+2)%t.length],t[(a+3)%t.length]];return(0,d.jsxs)(l,{className:`relative overflow-hidden`,children:[(0,d.jsx)(c,{label:r,children:e}),(0,d.jsx)(i,{current:(0,d.jsx)(f,{value:o}),next:s,nextRestartKey:a}),(0,d.jsx)(`span`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 animate-[tv-display-glare_1.25s_ease-in-out_both]`,style:{background:`linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)`}},a)]})}var _=[{doctor:`Dr. Arjun Radhakrishnan`,specialty:`General`,room:`C 01`,current:`OP-025`,next:[`OP-026`,`OP-027`,`OP-024`]},{doctor:`Dr. Meera Das`,specialty:`Pediatrics`,room:`C 02`,current:`OP-009`,next:[`OP-010`,`OP-011`,`OP-012`]},{doctor:`Dr. Rahul Sen`,specialty:`Orthopedics`,room:`PR 01`,current:`OP-134`,next:[`OP-135`]},{doctor:`Dr. Neha Roy`,specialty:`ENT`,room:`E 01`,current:`OP-012`,next:[`OP-013`,`OP-014`]}];function v(e,t,n){return e.map((e,r)=>{let i=Array.from(new Set([e.current,...e.next])).filter(Boolean),a=i.length>1?i:[e.current];return u.createElement(h,{key:e.doctor,doctor:e.doctor,specialty:e.specialty,room:e.room,sequence:a,intervalMs:p[r%p.length],nextLabel:t,roomLabel:n})})}function y(e,t,n,i={doctor:`Doctor`,room:`Room`,token:`Token`}){return u.createElement(`div`,{className:n},u.createElement(s,{aspectRatio:e},u.createElement(r,null,u.createElement(`span`,null,i.doctor),u.createElement(`span`,null,i.room),u.createElement(`span`,null,i.token)),u.createElement(o,null,...v(t,i.next,i.room))))}function b(e,t,n,i={token:`Token`,counter:`Counter`}){return u.createElement(`div`,{className:n},u.createElement(s,{aspectRatio:e,"data-layout":`pharmacy`,className:`grid-cols-[auto_auto] @max-md:grid-cols-[minmax(0,1fr)] [&_[data-slot=tv-display-room]>div]:w-fit`},u.createElement(r,null,u.createElement(`span`,null,i.counter),u.createElement(`span`,null,i.token)),u.createElement(o,null,...t.map((e,t)=>{let n=Array.from(new Set([e.current,...e.next])).filter(Boolean),r=n.length>1?n:[e.current];return u.createElement(g,{key:e.counter,counter:e.counter,sequence:r,intervalMs:p[t%p.length],counterLabel:i.counter})}))))}var x={id:`tv-display`,name:`TV Display`,description:`Composable digital signage layout for TVs (queue boards, room rosters) with built-in aspect ratios.`,installation:{cli:`npx shadcn@latest add https://careui.ohc.network/registry/care-ui/tv-display/tv-display.json`,manual:`Copy the tv-display component source code into your project. Requires the aspect-ratio primitive.`},usage:`import {
  TVDisplay,
  TVDisplayBody,
  TVDisplayDoctor,
  TVDisplayHeader,
  TVDisplayRoom,
  TVDisplayRow,
  TVDisplayToken,
} from "@/components/ui/tv-display"

<TVDisplay aspectRatio="16/9">
  <TVDisplayHeader>
    <span>Doctor</span>
    <span>Room</span>
    <span>Token</span>
  </TVDisplayHeader>
  <TVDisplayBody>
    <TVDisplayRow>
      <TVDisplayDoctor name="Dr. Arjun Radhakrishnan" specialty="General" />
      <TVDisplayRoom>C 01</TVDisplayRoom>
      <TVDisplayToken current="OP-025" next={["OP-026", "OP-027"]} />
    </TVDisplayRow>
  </TVDisplayBody>
</TVDisplay>`,preview:{code:`import {
  TVDisplay,
  TVDisplayBody,
  TVDisplayDoctor,
  TVDisplayHeader,
  TVDisplayRoom,
  TVDisplayRow,
  TVDisplayToken,
} from "@/components/ui/tv-display"

export function TVDisplayDemo() {
  return (
    <div className="w-full max-w-4xl">
      <TVDisplay aspectRatio="16/9">
        <TVDisplayHeader>
          <span>Doctor</span>
          <span>Room</span>
          <span>Token</span>
        </TVDisplayHeader>
        <TVDisplayBody>
          <TVDisplayRow>
            <TVDisplayDoctor name="Dr. Arjun Radhakrishnan" specialty="General" />
            <TVDisplayRoom>C 01</TVDisplayRoom>
            <TVDisplayToken current="OP-025" next={["OP-026", "OP-027", "OP-024"]} />
          </TVDisplayRow>
          <TVDisplayRow>
            <TVDisplayDoctor name="Dr. Meera Das" specialty="Pediatrics" />
            <TVDisplayRoom>C 02</TVDisplayRoom>
            <TVDisplayToken current="OP-009" next={["OP-010", "OP-011", "OP-012"]} />
          </TVDisplayRow>
          <TVDisplayRow>
            <TVDisplayDoctor name="Dr. Rahul Sen" specialty="Orthopedics" />
            <TVDisplayRoom>PR 01</TVDisplayRoom>
            <TVDisplayToken current="OP-134" next={["OP-135"]} />
          </TVDisplayRow>
          <TVDisplayRow>
            <TVDisplayDoctor name="Dr. Neha Roy" specialty="ENT" />
            <TVDisplayRoom>E 01</TVDisplayRoom>
            <TVDisplayToken current="OP-012" next={["OP-013", "OP-014"]} />
          </TVDisplayRow>
        </TVDisplayBody>
      </TVDisplay>
    </div>
  )
}`,component:y(`16/9`,_.slice(0,3),`w-full max-w-4xl`)},examples:[{name:`Two doctors`,description:`Minimal board for small clinics with only two active doctors. Demonstrates how the layout absorbs longer token IDs (e.g. OP-20913) without breaking the row.`,code:`<TVDisplay aspectRatio="16/9">
  <TVDisplayHeader>
    <span>Doctor</span>
    <span>Room</span>
    <span>Token</span>
  </TVDisplayHeader>
  <TVDisplayBody>
    <TVDisplayRow>
      <TVDisplayDoctor name="Dr. Arjun Radhakrishnan" specialty="General" />
      <TVDisplayRoom>C 01</TVDisplayRoom>
      <TVDisplayToken current="OP-20913" next={["OP-20914", "OP-20915"]} />
    </TVDisplayRow>
    <TVDisplayRow>
      <TVDisplayDoctor name="Dr. Meera Das" specialty="Pediatrics" />
      <TVDisplayRoom>C 02</TVDisplayRoom>
      <TVDisplayToken current="OP-20908" next={["OP-20909", "OP-20910"]} />
    </TVDisplayRow>
  </TVDisplayBody>
</TVDisplay>`,preview:y(`16/9`,[{doctor:`Dr. Arjun Radhakrishnan`,specialty:`General`,room:`C 01`,current:`OP-20913`,next:[`OP-20914`,`OP-20915`,`OP-20916`]},{doctor:`Dr. Meera Das`,specialty:`Pediatrics`,room:`C 02`,current:`OP-20908`,next:[`OP-20909`,`OP-20910`,`OP-20911`]}],`w-full max-w-4xl`)},{name:`Compact density`,description:`Use density="compact" to fit more rows on the same canvas — ideal for busy clinics with many concurrent doctors.`,code:`<TVDisplay aspectRatio="16/9" density="compact">
  <TVDisplayHeader>
    <span>Doctor</span>
    <span>Room</span>
    <span>Token</span>
  </TVDisplayHeader>
  <TVDisplayBody>{/* many rows */}</TVDisplayBody>
</TVDisplay>`,preview:u.createElement(`div`,{className:`w-full max-w-4xl`},u.createElement(s,{aspectRatio:`16/9`,density:`compact`},u.createElement(r,null,u.createElement(`span`,null,`Doctor`),u.createElement(`span`,null,`Room`),u.createElement(`span`,null,`Token`)),u.createElement(o,null,...v(_))))},{name:`Ultrawide (21:9)`,description:`Use the ultrawide aspect ratio for cinematic signage displays mounted in lobbies.`,code:`<TVDisplay aspectRatio="21/9">
  <TVDisplayHeader>
    <span>Doctor</span>
    <span>Room</span>
    <span>Token</span>
  </TVDisplayHeader>
  <TVDisplayBody>{/* rows */}</TVDisplayBody>
</TVDisplay>`,preview:y(`21/9`,_.slice(0,3),`w-full max-w-5xl`)},{name:`Legacy (4:3)`,description:`A 4:3 layout for older displays still used in clinics.`,code:`<TVDisplay aspectRatio="4/3">{/* ... */}</TVDisplay>`,preview:y(`4/3`,_.slice(0,3),`w-full max-w-2xl`)},{name:`Portrait (9:16)`,description:`Vertical signage for narrow corridor or counter-mounted displays.`,code:`<TVDisplay aspectRatio="9/16" density="compact">{/* ... */}</TVDisplay>`,preview:u.createElement(`div`,{className:`w-full max-w-xs`},u.createElement(s,{aspectRatio:`9/16`,density:`compact`},u.createElement(r,null,u.createElement(`span`,null,`Doctor`),u.createElement(`span`,null,`Room`),u.createElement(`span`,null,`Token`)),u.createElement(o,null,...v(_.slice(0,3)))))},{name:`Malayalam (മലയാളം)`,description:`Localized signage with Malayalam labels and doctor names — the fluid columns adapt to the wider script.`,code:`<TVDisplay aspectRatio="16/9">
  <TVDisplayHeader>
    <span>ഡോക്ടർ</span>
    <span>മുറി</span>
    <span>ടോക്കൺ</span>
  </TVDisplayHeader>
  <TVDisplayBody>
    <TVDisplayRow>
      <TVDisplayDoctor name="ഡോ. അർജുൻ രാധാകൃഷ്ണൻ" specialty="ജനറൽ" />
      <TVDisplayRoom>C 01</TVDisplayRoom>
      <TVDisplayToken current="ഒപി-025" next={["ഒപി-026", "ഒപി-027"]} />
    </TVDisplayRow>
    {/* ... */}
  </TVDisplayBody>
</TVDisplay>`,preview:y(`16/9`,[{doctor:`ഡോ. അർജുൻ രാധാകൃഷ്ണൻ മേലേപ്പറമ്പിൽ`,specialty:`ജനറൽ`,room:`C 01`,current:`ഒപി-025`,next:[`ഒപി-026`,`ഒപി-027`,`ഒപി-024`]},{doctor:`ഡോ. മീര ദാസ്`,specialty:`ശിശുരോഗം`,room:`C 02`,current:`ഒപി-009`,next:[`ഒപി-010`,`ഒപി-011`,`ഒപി-012`]},{doctor:`ഡോ. രാഹുൽ സെൻ`,specialty:`അസ്ഥിരോഗം`,room:`PR 01`,current:`ഒപി-134`,next:[`ഒപി-135`]},{doctor:`ഡോ. നേഹ റോയ്`,specialty:`ചെവി-മൂക്ക്-തൊണ്ട`,room:`E 01`,current:`ഒപി-012`,next:[`ഒപി-013`,`ഒപി-014`]}],`w-full max-w-4xl`,{doctor:`ഡോക്ടർ`,room:`മുറി`,token:`ടോക്കൺ`,next:`അടുത്തത്:`})},{name:`Pharmacy / billing counter`,description:"Two-column layout for pharmacy or billing counters: counter code on the left, token on the right. Drops the doctor column entirely by overriding the grid tracks via `className` — the underlying subgrid in header and rows automatically follows.",code:`<TVDisplay
  aspectRatio="16/9"
  data-layout="pharmacy"
  className="grid-cols-[auto_auto]"
>
  <TVDisplayHeader>
    <span>Counter</span>
    <span>Token</span>
  </TVDisplayHeader>
  <TVDisplayBody>
    <TVDisplayRow>
      <TVDisplayRoom label="Counter">P 01</TVDisplayRoom>
      <TVDisplayToken current="RX-128" next={["RX-129", "RX-130", "RX-131"]} />
    </TVDisplayRow>
    <TVDisplayRow>
      <TVDisplayRoom label="Counter">P 02</TVDisplayRoom>
      <TVDisplayToken current="RX-045" next={["RX-046", "RX-047"]} />
    </TVDisplayRow>
    <TVDisplayRow>
      <TVDisplayRoom label="Counter">B 01</TVDisplayRoom>
      <TVDisplayToken current="BL-018" next={["BL-019", "BL-020"]} />
    </TVDisplayRow>
  </TVDisplayBody>
</TVDisplay>`,preview:b(`16/9`,[{counter:`P 01`,current:`RX-128`,next:[`RX-129`,`RX-130`,`RX-131`]},{counter:`P 02`,current:`RX-045`,next:[`RX-046`,`RX-047`]},{counter:`P 03`,current:`RX-211`,next:[`RX-212`]},{counter:`B 01`,current:`BL-018`,next:[`BL-019`,`BL-020`]}],`w-full max-w-4xl`)}],props:[{name:`aspectRatio`,type:`"16/9" | "21/9" | "4/3" | "9/16"`,description:`Aspect ratio of the TV canvas.`,default:`"16/9"`},{name:`density`,type:`"default" | "compact"`,description:`Controls row and header padding.`,default:`"default"`},{name:`TVDisplayDoctor.name`,type:`ReactNode`,description:`Primary doctor name shown on the left of each row.`},{name:`TVDisplayDoctor.specialty`,type:`ReactNode`,description:`Optional specialty / department label below the name.`},{name:`TVDisplayRoom.label`,type:`ReactNode`,description:`Label rendered above the room number on narrow (portrait) layouts. Hidden on wide layouts where the column header already covers it.`,default:`"Room"`},{name:`TVDisplayToken.current`,type:`ReactNode`,description:`Token currently being served.`},{name:`TVDisplayToken.next`,type:`ReactNode[]`,description:`Optional list of upcoming tokens shown after the current one.`},{name:`TVDisplayToken.nextLabel`,type:`ReactNode`,description:`Label shown before the upcoming tokens. Override for localization.`,default:`"Next:"`},{name:`TVDisplayToken.nextRestartKey`,type:`string | number`,description:`When this value changes, the upcoming-tokens marquee remounts and restarts from its initial hold. Pass the same key you use to drive the current-token rotation so the next-strip never overlaps the rotation transition.`}]};export{x as tvDisplayDoc};