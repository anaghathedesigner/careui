import{i as e,l as t,r as n}from"./dist-DtVyZPdI.js";import{$ as r,G as i,J as a,K as o,Q as s,X as c,Y as l,Z as u,et as d,q as f,tt as p}from"./index-Ck2hFZuL.js";var m=t(e(),1),h=n(),g=[{heading:`H1 PageTitle`,use:`Page entry`,default:`— (mt-0)`,tight:`— (mt-0)`},{heading:`H2 SectionTitle`,use:`New section under H1`,default:`mt-8`,tight:`mt-6`},{heading:`H3 SubsectionTitle`,use:`Card / dialog / subsection title`,default:`mt-6`,tight:`mt-4`},{heading:`H4 GroupTitle`,use:`Field group inside a card or form`,default:`mt-5`,tight:`mt-3`},{heading:`H5 DenseTitle`,use:`Side-panel row, list-item title`,default:`mt-4`,tight:`mt-3`},{heading:`H6 EyebrowTitle`,use:`Table column, row-group label`,default:`mt-4`,tight:`mt-3`}],_=[{after:`After H1 PageTitle`,default:`mt-2`,tight:`mt-1`},{after:`After H2 SectionTitle`,default:`mt-2`,tight:`mt-1`},{after:`After H3 SubsectionTitle`,default:`mt-1`,tight:`mt-1`},{after:`After H4 GroupTitle`,default:`mt-1`,tight:`mt-1`},{after:`After H5 DenseTitle`,default:`mt-1`,tight:`mt-1`},{after:`After H6 EyebrowTitle`,default:`mt-1`,tight:`mt-1`},{after:`Sibling <p> after another <p>`,default:`mt-3`,tight:`mt-2`},{after:`Sibling list items / cards (parent)`,default:`space-y-4`,tight:`space-y-2`}];function v({caption:e,headers:t,rows:n}){return(0,h.jsxs)(`div`,{className:`border-border overflow-hidden rounded-md border`,children:[(0,h.jsx)(`div`,{className:`bg-muted/40 border-border text-foreground border-b px-3 py-2 text-xs font-semibold`,children:e}),(0,h.jsxs)(`table`,{className:`w-full border-collapse text-left text-xs`,children:[(0,h.jsx)(`thead`,{className:`bg-muted/20`,children:(0,h.jsx)(`tr`,{children:t.map((e,t)=>(0,h.jsx)(`th`,{className:`text-muted-foreground px-3 py-2 font-medium `+(t===0?``:`font-mono`),children:e},e))})}),(0,h.jsx)(`tbody`,{children:n.map((e,t)=>(0,h.jsx)(`tr`,{className:`border-border border-t`,children:e.map((e,t)=>(0,h.jsx)(`td`,{className:`text-foreground px-3 py-2 `+(t===0?``:`font-mono text-xs`),children:e},t))},t))})]})]})}function y(){return(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(v,{caption:`Table A · Top margin for a heading (depends only on the heading's level)`,headers:[`Heading`,`Typical use`,`Default (≥sm)`,`Tight / Mobile`],rows:g.map(e=>[e.heading,e.use,e.default,e.tight])}),(0,h.jsx)(v,{caption:`Table B · Top margin for body text or siblings`,headers:[`After`,`Default (≥sm)`,`Tight / Mobile`],rows:_.map(e=>[e.after,e.default,e.tight])}),(0,h.jsxs)(`div`,{className:`text-muted-foreground space-y-3 text-xs leading-5`,children:[(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`strong`,{className:`text-foreground`,children:`How to read.`}),` Pick the heading's top margin from Table A — it is constant per level, the element directly above does not change it. Body text sits close to its heading (Table B); the breathing room comes from the heading's own top margin, not from a gap below it.`]}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`strong`,{className:`text-foreground`,children:`Mobile rule (HMIS).`}),` Use the `,(0,h.jsx)(`span`,{className:`font-mono`,children:`Tight / Mobile`}),` column as the base class, and step up with `,(0,h.jsx)(`span`,{className:`font-mono`,children:`sm:`}),` `,`(≥640\xA0px) for the default rhythm — e.g.`,` `,(0,h.jsx)(`span`,{className:`font-mono`,children:`mt-6 sm:mt-8`}),` on a SectionTitle. Cards, dialogs, sheets, popovers, and side panels stay on the Tight column at every breakpoint.`]}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(`strong`,{className:`text-foreground`,children:`Heading sizes on mobile.`}),` `,`The Care UI app scale tops out at 30\xA0px (H1) and is already mobile-safe — no responsive shrinking required. If a long patient name on a very narrow viewport wraps to three lines, drop`,` `,(0,h.jsx)(`span`,{className:`font-mono`,children:`text-balance`}),` with`,` `,(0,h.jsx)(`span`,{className:`font-mono`,children:`[text-wrap:pretty]`}),` or omit it on that one heading.`]})]})]})}var b={id:`typography`,name:`Typography`,description:`App-shell heading components (h1–h6) tuned for clinical UI density. Use these in product surfaces — patient records, encounter forms, dashboards, dialogs — so data stays above the fold and hierarchy is carried by weight and rhythm.`,installation:{cli:`npx shadcn@latest add https://careui.ohc.network/r/typography.json`,manual:`Copy src/components/ui/typography.tsx into your project. No external dependencies.`},usage:`import {
  PageTitle,
  SectionTitle,
  SubsectionTitle,
  GroupTitle,
  DenseTitle,
  EyebrowTitle,
} from "@/components/ui/typography"

export function PatientHeader() {
  return (
    <header>
      <EyebrowTitle className="text-muted-foreground">
        Patient · MRN-00231
      </EyebrowTitle>
      <PageTitle className="mt-1">Rao, Anitha — admitted 16 May</PageTitle>
    </header>
  )
}`,preview:{code:`<div className="space-y-3">
  <PageTitle>Page title</PageTitle>
  <SectionTitle>Section title</SectionTitle>
  <SubsectionTitle>Subsection title</SubsectionTitle>
  <GroupTitle>Group title</GroupTitle>
  <DenseTitle>Dense title</DenseTitle>
  <EyebrowTitle>Eyebrow title</EyebrowTitle>
</div>`,component:m.createElement(`div`,{className:`space-y-3 text-foreground`},m.createElement(s,null,`Page title`),m.createElement(r,null,`Section title`),m.createElement(p,null,`Subsection title`),m.createElement(f,null,`Group title`),m.createElement(i,null,`Dense title`),m.createElement(o,null,`Eyebrow title`))},examples:[{name:`Patient header`,description:`Eyebrow + page title + meta — the canonical pattern at the top of a patient record.`,code:`<header>
  <EyebrowTitle className="text-muted-foreground">
    Patient · MRN-00231
  </EyebrowTitle>
  <PageTitle className="mt-1">
    Rao, Anitha — admitted 16 May
  </PageTitle>
  <p className="text-muted-foreground mt-2 text-sm">
    Female · 47 yrs · Ward 4B · Bed 12 · Dr. Mehta
  </p>
</header>`,preview:m.createElement(`header`,null,m.createElement(o,{className:`text-muted-foreground`},`Patient · MRN-00231`),m.createElement(s,{className:`mt-1`},`Rao, Anitha — admitted 16 May`),m.createElement(`p`,{className:`text-muted-foreground mt-2 text-sm`},`Female · 47 yrs · Ward 4B · Bed 12 · Dr. Mehta`))},{name:`Card title with body`,description:`SubsectionTitle is the default card / panel title in the app scale.`,code:`<div className="rounded-lg border p-5">
  <SubsectionTitle>Active medications</SubsectionTitle>
  <p className="text-foreground mt-1 text-sm leading-6">
    Atorvastatin 20 mg, Metoprolol 25 mg, Aspirin 75 mg.
  </p>
</div>`,preview:m.createElement(`div`,{className:`rounded-lg border p-5`},m.createElement(p,null,`Active medications`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm leading-6`},`Atorvastatin 20 mg, Metoprolol 25 mg, Aspirin 75 mg.`))},{name:`Card with group sub-heading`,description:`Card title + body + a GroupTitle subsection. Spacing is applied per heading so the same components work flush in tight surfaces too.`,code:`<div className="rounded-lg border p-5">
  <SubsectionTitle>Active medications</SubsectionTitle>
  <p className="text-foreground mt-1 text-sm leading-6">
    Atorvastatin 20 mg, Metoprolol 25 mg, Aspirin 75 mg.
  </p>
  <GroupTitle className="mt-6">Dosage notes</GroupTitle>
  <p className="text-foreground mt-1 text-sm leading-6">
    Hold metoprolol if heart rate falls below 55 bpm.
  </p>
</div>`,preview:m.createElement(`div`,{className:`rounded-lg border p-5`},m.createElement(p,null,`Active medications`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm leading-6`},`Atorvastatin 20 mg, Metoprolol 25 mg, Aspirin 75 mg.`),m.createElement(f,{className:`mt-6`},`Dosage notes`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm leading-6`},`Hold metoprolol if heart rate falls below 55 bpm.`))},{name:`Dialog title`,description:`SubsectionTitle is the right level for dialog and sheet titles. Pair with a muted description below.`,code:`<div className="rounded-lg border p-5 max-w-sm">
  <SubsectionTitle>Confirm discharge?</SubsectionTitle>
  <p className="text-muted-foreground mt-1 text-sm leading-6">
    This will close the encounter and notify the on-call physician.
    Pending orders must be reviewed first.
  </p>
</div>`,preview:m.createElement(`div`,{className:`rounded-lg border p-5 max-w-sm`},m.createElement(p,null,`Confirm discharge?`),m.createElement(`p`,{className:`text-muted-foreground mt-1 text-sm leading-6`},`This will close the encounter and notify the on-call physician. Pending orders must be reviewed first.`))},{name:`Form section header`,description:`GroupTitle introduces a group of fields inside a longer form.`,code:`<form className="space-y-2">
  <GroupTitle>Emergency contact</GroupTitle>
  <p className="text-muted-foreground text-sm">
    We will reach this person if we cannot reach the patient.
  </p>
  {/* fields go here */}
</form>`,preview:m.createElement(`form`,{className:`space-y-2`},m.createElement(f,null,`Emergency contact`),m.createElement(`p`,{className:`text-muted-foreground text-sm`},`We will reach this person if we cannot reach the patient.`),m.createElement(`div`,{className:`text-muted-foreground/70 mt-3 rounded-md border border-dashed p-4 text-xs`},`form fields go here`))},{name:`Dense side-panel labels`,description:`DenseTitle pairs with compact body text in side panels and tight list rows. Use mt-4 between rows, mt-1 from heading to its line.`,code:`<div className="rounded-lg border p-5 max-w-xs">
  <DenseTitle>Allergies</DenseTitle>
  <p className="text-foreground mt-1 text-sm leading-6">
    Penicillin (rash, 2019).
  </p>
  <DenseTitle className="mt-4">Next of kin</DenseTitle>
  <p className="text-foreground mt-1 text-sm leading-6">
    Suresh Rao (spouse) · +91 98765 43210
  </p>
</div>`,preview:m.createElement(`div`,{className:`rounded-lg border p-5 max-w-xs`},m.createElement(i,null,`Allergies`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm leading-6`},`Penicillin (rash, 2019).`),m.createElement(i,{className:`mt-4`},`Next of kin`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm leading-6`},`Suresh Rao (spouse) · +91 98765 43210`))},{name:`Eyebrow as section divider`,description:`EyebrowTitle paired with text-muted-foreground works as a small categorical label above lists, cards, or table groups.`,code:`<div>
  <EyebrowTitle className="text-muted-foreground">
    Last reviewed
  </EyebrowTitle>
  <p className="text-foreground mt-1 text-sm">
    Dr. Mehta · 14 minutes ago
  </p>
</div>`,preview:m.createElement(`div`,null,m.createElement(o,{className:`text-muted-foreground`},`Last reviewed`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm`},`Dr. Mehta · 14 minutes ago`))},{name:`Status colour override`,description:`Pass className to recolour for state — never rely on colour alone (pair with an icon or text suffix).`,code:`<div className="space-y-2">
  <DenseTitle className="text-destructive">
    Critical · Action required
  </DenseTitle>
  <DenseTitle className="text-amber-600 dark:text-amber-400">
    Pending review
  </DenseTitle>
  <DenseTitle className="text-emerald-600 dark:text-emerald-400">
    Cleared
  </DenseTitle>
</div>`,preview:m.createElement(`div`,{className:`space-y-2`},m.createElement(i,{className:`text-destructive`},`Critical · Action required`),m.createElement(i,{className:`text-amber-600 dark:text-amber-400`},`Pending review`),m.createElement(i,{className:`text-emerald-600 dark:text-emerald-400`},`Cleared`))},{name:`Full clinical surface`,description:"All six levels in their intended cascade with the recommended HMIS-density rhythm applied per heading. Uses the responsive `mt-N sm:mt-M` pattern: Tight values on mobile, default on ≥sm.",code:`<article>
  <EyebrowTitle className="text-muted-foreground">
    Encounter · 4421
  </EyebrowTitle>
  <PageTitle className="mt-1">Inpatient admission summary</PageTitle>

  <SectionTitle className="mt-6 sm:mt-8">Active orders</SectionTitle>
  <p className="text-foreground mt-1 text-sm leading-6">
    Three medications and two investigations are active.
  </p>

  <SubsectionTitle className="mt-4 sm:mt-6">Medications</SubsectionTitle>
  <GroupTitle className="mt-3 sm:mt-5">Dosage notes</GroupTitle>
  <DenseTitle className="mt-3 sm:mt-4">Allergies</DenseTitle>
  <EyebrowTitle className="mt-3 sm:mt-4">Last reviewed</EyebrowTitle>
</article>`,preview:m.createElement(`article`,null,m.createElement(o,{className:`text-muted-foreground`},`Encounter · 4421`),m.createElement(s,{className:`mt-1`},`Inpatient admission summary`),m.createElement(r,{className:`mt-6 sm:mt-8`},`Active orders`),m.createElement(`p`,{className:`text-foreground mt-1 text-sm leading-6`},`Three medications and two investigations are active.`),m.createElement(p,{className:`mt-4 sm:mt-6`},`Medications`),m.createElement(f,{className:`mt-3 sm:mt-5`},`Dosage notes`),m.createElement(i,{className:`mt-3 sm:mt-4`},`Allergies`),m.createElement(o,{className:`mt-3 sm:mt-4`},`Last reviewed`))},{name:`Spacing reference`,description:`Two lookup tables that cover every common heading→heading and heading→body combination. Tuned for HMIS density — stacked dashboard panels, encounter forms, side panels. The top margin of a heading depends only on the heading itself, not on what came above it, so the matrix collapses cleanly.`,code:`// Mobile-first: Tight values as the base, sm: steps up for ≥640px.
// Cards / dialogs / popovers / side panels stay tight at every breakpoint.

<PageTitle>Encounter · 4421</PageTitle>
<p className="text-muted-foreground mt-2 text-sm">Inpatient · ward 4B</p>

<SectionTitle className="mt-6 sm:mt-8">Active orders</SectionTitle>
<p className="text-foreground mt-1 text-sm leading-6">
  Three medications and two investigations are active.
</p>

<SubsectionTitle className="mt-4 sm:mt-6">Medications</SubsectionTitle>
<p className="text-foreground mt-1 text-sm leading-6">
  Atorvastatin 20 mg, Metoprolol 25 mg, Aspirin 75 mg.
</p>

<GroupTitle className="mt-3 sm:mt-5">Dosage notes</GroupTitle>
<p className="text-foreground mt-1 text-sm leading-6">
  Hold metoprolol if heart rate falls below 55 bpm.
</p>

<DenseTitle className="mt-3 sm:mt-4">Allergies</DenseTitle>
<p className="text-foreground mt-1 text-sm leading-6">
  Penicillin (rash, 2019).
</p>`,preview:m.createElement(y)},{name:`Text utilities (Lead, Large, Small, Muted, InlineCode)`,description:`Body-scale helpers named after the shadcn Typography conventions and sized for the compressed app scale. Use these for everything that is not a heading — intro paragraphs, form labels, helper text, inline values — so weight, size, and colour stay consistent across the product. Aligned with Apple HIG: no Thin/Light weights, body at 16 px with comfortable leading.`,code:`<div className="space-y-3">
  <Lead>Three medications and two investigations are active.</Lead>
  <Large>Confirm discharge?</Large>
  <p className="text-foreground text-sm leading-6">
    Pending orders must be reviewed before closing the encounter.
  </p>
  <Muted>Last updated 14 minutes ago by Dr. Mehta.</Muted>
  <div className="flex items-center gap-2">
    <Small>MRN</Small>
    <InlineCode>00231</InlineCode>
  </div>
</div>`,preview:m.createElement(`div`,{className:`space-y-3`},m.createElement(c,null,`Three medications and two investigations are active.`),m.createElement(l,null,`Confirm discharge?`),m.createElement(`p`,{className:`text-foreground text-sm leading-6`},`Pending orders must be reviewed before closing the encounter.`),m.createElement(u,null,`Last updated 14 minutes ago by Dr. Mehta.`),m.createElement(`div`,{className:`flex items-center gap-2`},m.createElement(d,null,`MRN`),m.createElement(a,null,`00231`)))},{name:`When to use which level`,description:`Match the component to the structural role, not the visual size. Pick the smallest level that still expresses the hierarchy.`,items:[{title:`PageTitle (h1)`,description:`One per page. The name of the thing on screen — “Patients”, “Encounter #4421”, “Rao, Anitha — admitted 16 May”.`},{title:`SectionTitle (h2)`,description:`Major panels under the page title — “Active orders”, “Vitals”, “Lab results”. Usually 2–4 per page.`},{title:`SubsectionTitle (h3)`,description:`Card titles, dialog titles, and groups inside a section — “Medications”, “Confirm discharge?”.`},{title:`GroupTitle (h4)`,description:`Subsections inside a card or form — “Dosage notes”, “Emergency contact”.`},{title:`DenseTitle (h5)`,description:`Compact in-list / side-panel labels — “Allergies”, “Next of kin”.`},{title:`EyebrowTitle (h6)`,description:`Tiny categorical label above a heading or table column — “Patient · MRN-00231”, “Last reviewed”. Pair with text-muted-foreground.`},{title:`Lead`,description:`One-sentence sub-title or intro paragraph under a PageTitle / SectionTitle. Muted by default so it does not compete with the heading above.`},{title:`Large`,description:`Strong-emphasis body — dialog questions (“Confirm discharge?”), prominent inline labels. Apple’s “Headline” style: body-sized, semibold.`},{title:`Small`,description:`Form labels, table column captions, dense meta text. Renders <small> with leading-none so it sits flush in tight layouts.`},{title:`Muted`,description:`Secondary / helper text under a field or below a value. Pairs with any heading.`},{title:`InlineCode`,description:`Inline identifiers — MRN, lab codes, route names. Monospaced with a subtle background so it scans as a value, not prose.`}]},{name:`Do`,description:`Rules that keep hierarchy unambiguous and information dense.`,items:[{title:`Use one PageTitle per page`,description:`Multiple h1s break screen-reader navigation. If you need a second prominent title, it should be a SectionTitle.`},{title:`Cascade — never skip levels`,description:`PageTitle → SectionTitle → SubsectionTitle → GroupTitle → DenseTitle → EyebrowTitle. Skipping levels visually is also skipping them semantically.`},{title:`Lean on weight, not size`,description:`If two adjacent headings feel ambiguous, the answer is usually the next level down, not a bigger size.`},{title:`Apply spacing per heading`,description:"Headings have no top-margin by default — apply `mt-*` per heading so the same components work flush in dialogs, generous on pages, and tight in side panels. See the Spacing reference example."},{title:`Use sentence case`,description:`“Active medications”, not “Active Medications”. Sentence case scans faster and translates cleanly.`}]},{name:`Don't`,description:`Common mistakes to avoid.`,items:[{title:`Don't use these on marketing pages`,description:`The compressed scale will feel undersized on landing pages, sign-in, and empty states. Use the larger shadcn docs scale (text-4xl font-extrabold lg:text-5xl) for those surfaces.`},{title:`Don't restyle a heading to look like a different level`,description:`If a SubsectionTitle needs to be the size of a PageTitle, the page hierarchy is wrong — fix the structure, not the size.`},{title:`Don't override the calibrated weight`,description:"PageTitle is `font-bold`, SectionTitle/SubsectionTitle are `font-semibold`, GroupTitle/DenseTitle/EyebrowTitle are `font-medium`. Bumping every heading to `font-bold` collapses the hierarchy."},{title:`Don't use a heading inside running prose`,description:`For body text, use a <p> with text-base leading-7 (or text-sm leading-6 for dense surfaces). Headings are structural, not decorative.`},{title:`Don't wrap clinical values in a heading`,description:`“BP 138/86 mmHg” is data, not a heading. Use font-semibold tabular-nums on a value element instead.`},{title:`Don't rely on weight or colour alone for state`,description:`If a heading represents a status (e.g. urgent), pair it with an icon, badge, or text suffix.`}]}],props:[{name:`className`,type:`string`,description:`Merged with the base heading classes. Use to set colour, top-margin, or extend tracking.`},{name:`children`,type:`React.ReactNode`,description:`The heading text.`},{name:`...props`,type:`React.HTMLAttributes<HTMLHeadingElement>`,description:`All native heading attributes (id, aria-*, onClick, etc.) are forwarded to the rendered h1–h6 element.`}]};export{b as typographyDoc};