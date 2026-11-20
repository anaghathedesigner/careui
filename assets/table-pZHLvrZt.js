import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./button-DTwq4-az.js";import{En as r,Nn as i,On as a,Rn as o,_r as s,da as c,dr as l,fr as u,gr as d,hr as f,mr as p,pr as m,vr as h,wn as g}from"./index-Ck2hFZuL.js";var _=t(e(),1),v=[{invoice:`INV001`,paymentStatus:`Paid`,totalAmount:`$250.00`,paymentMethod:`Credit Card`},{invoice:`INV002`,paymentStatus:`Pending`,totalAmount:`$150.00`,paymentMethod:`PayPal`},{invoice:`INV003`,paymentStatus:`Unpaid`,totalAmount:`$350.00`,paymentMethod:`Bank Transfer`},{invoice:`INV004`,paymentStatus:`Paid`,totalAmount:`$450.00`,paymentMethod:`Credit Card`},{invoice:`INV005`,paymentStatus:`Paid`,totalAmount:`$550.00`,paymentMethod:`PayPal`},{invoice:`INV006`,paymentStatus:`Pending`,totalAmount:`$200.00`,paymentMethod:`Bank Transfer`},{invoice:`INV007`,paymentStatus:`Unpaid`,totalAmount:`$300.00`,paymentMethod:`Credit Card`}];function y(){return _.createElement(l,{},_.createElement(m,{},`A list of your recent invoices.`),_.createElement(s,{},_.createElement(h,{},_.createElement(d,{className:`w-[100px]`},`Invoice`),_.createElement(d,{},`Status`),_.createElement(d,{},`Method`),_.createElement(d,{className:`text-right`},`Amount`))),_.createElement(u,{},...v.map(e=>_.createElement(h,{key:e.invoice},_.createElement(p,{className:`font-medium`},e.invoice),_.createElement(p,{},e.paymentStatus),_.createElement(p,{},e.paymentMethod),_.createElement(p,{className:`text-right`},e.totalAmount)))),_.createElement(f,{},_.createElement(h,{},_.createElement(p,{colSpan:3},`Total`),_.createElement(p,{className:`text-right`},`$2,500.00`))))}var b=[{name:`Wireless Mouse`,price:`$29.99`},{name:`Mechanical Keyboard`,price:`$129.99`},{name:`USB-C Hub`,price:`$49.99`}];function x(){let e=()=>_.createElement(g,{},_.createElement(o,{asChild:!0},_.createElement(n,{variant:`ghost`,size:`icon`,className:`size-8 shadow-sm`},_.createElement(c,{}),_.createElement(`span`,{className:`sr-only`},`Open menu`))),_.createElement(r,{align:`end`},_.createElement(a,{},`Edit`),_.createElement(a,{},`Duplicate`),_.createElement(i,{}),_.createElement(a,{className:`text-destructive`},`Delete`)));return _.createElement(l,{},_.createElement(s,{},_.createElement(h,{},_.createElement(d,{},`Product`),_.createElement(d,{},`Price`),_.createElement(d,{className:`text-right`},`Actions`))),_.createElement(u,{},...b.map(t=>_.createElement(h,{key:t.name},_.createElement(p,{className:`font-medium`},t.name),_.createElement(p,{},t.price),_.createElement(p,{className:`text-right`},e())))))}var S={id:`table`,name:`Table`,description:`A responsive table component.`,installation:{cli:`npx shadcn@latest add table`,manual:`Copy and paste the table component source code into your project.`},usage:`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`,preview:{code:`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-25">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,component:_.createElement(y)},examples:[{name:`Footer`,description:`Use the <TableFooter /> component to add a footer to the table.`,code:`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  { invoice: "INV001", paymentStatus: "Paid",    totalAmount: "$250.00", paymentMethod: "Credit Card"   },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal"        },
  { invoice: "INV003", paymentStatus: "Unpaid",  totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
]

export function TableFooterExample() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`,preview:_.createElement(y)},{name:`Actions`,description:`A table showing actions for each row using a <DropdownMenu /> component.`,code:`import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableActions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Wireless Mouse</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8 shadow-sm">
                  <MoreHorizontal />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,preview:_.createElement(x)}]};export{S as tableDoc};