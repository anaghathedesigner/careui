import{i as e,l as t}from"./dist-DtVyZPdI.js";import{At as n,Ft as r,It as i,Mt as a,Nt as o,Pt as s,at as c,ct as l,ht as u,it as d,jt as f,lt as p,nt as m,rt as h,ut as g}from"./index-Ck2hFZuL.js";var _=t(e(),1),v={id:`pagination`,name:`Pagination`,description:`Pagination with page navigation, next and previous links.`,installation:{cli:`npx shadcn@latest add pagination`,manual:`Copy and paste the pagination component source code into your project.`},usage:`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,preview:{code:`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,component:_.createElement(n,{},_.createElement(f,{},_.createElement(o,{},_.createElement(i,{href:`#`})),_.createElement(o,{},_.createElement(s,{href:`#`},`1`)),_.createElement(o,{},_.createElement(s,{href:`#`,isActive:!0},`2`)),_.createElement(o,{},_.createElement(s,{href:`#`},`3`)),_.createElement(o,{},_.createElement(a,{})),_.createElement(o,{},_.createElement(r,{href:`#`}))))},examples:[{name:`Simple`,description:`A simple pagination with only page numbers.`,code:`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`,preview:_.createElement(n,{},_.createElement(f,{},_.createElement(o,{},_.createElement(s,{href:`#`},`1`)),_.createElement(o,{},_.createElement(s,{href:`#`,isActive:!0},`2`)),_.createElement(o,{},_.createElement(s,{href:`#`},`3`)),_.createElement(o,{},_.createElement(s,{href:`#`},`4`)),_.createElement(o,{},_.createElement(s,{href:`#`},`5`))))},{name:`Icons Only`,description:`Use just the previous and next buttons without page numbers. This is useful for data tables with a rows per page selector.`,code:`<div className="flex items-center justify-between gap-4">
  <Field orientation="horizontal" className="w-fit">
    <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
    <Select defaultValue="25">
      <SelectTrigger className="w-20" id="select-rows-per-page">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="start">
        <SelectGroup>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Field>
  <Pagination className="mx-0 w-auto">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`,preview:_.createElement(`div`,{className:`flex items-center justify-between gap-4`},_.createElement(g,{orientation:`horizontal`,className:`w-fit`},_.createElement(u,{htmlFor:`select-rows-per-page`},`Rows per page`),_.createElement(m,{defaultValue:`25`},_.createElement(l,{className:`w-20`,id:`select-rows-per-page`},_.createElement(p,{})),_.createElement(h,{align:`start`},_.createElement(d,{},_.createElement(c,{value:`10`},`10`),_.createElement(c,{value:`25`},`25`),_.createElement(c,{value:`50`},`50`),_.createElement(c,{value:`100`},`100`))))),_.createElement(n,{className:`mx-0 w-auto`},_.createElement(f,{},_.createElement(o,{},_.createElement(i,{href:`#`})),_.createElement(o,{},_.createElement(r,{href:`#`})))))}],props:[{name:`href`,type:`string`,description:`The URL that the pagination item should navigate to.`},{name:`isActive`,type:`boolean`,description:`Whether this page is the currently active page.`,default:`false`},{name:`size`,type:`"default" | "sm" | "lg" | "icon"`,description:`The size of the pagination buttons.`,default:`"default"`}]};export{v as paginationDoc};