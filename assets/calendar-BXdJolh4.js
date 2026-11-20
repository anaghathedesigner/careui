import{i as e,l as t}from"./dist-DtVyZPdI.js";import{t as n}from"./createLucideIcon-Cs4mMgfM.js";import{t as r}from"./button-DTwq4-az.js";import{Hn as i,Sr as a,Un as o,Vn as s,br as c,er as l,fi as u,ht as d,li as f,mt as p,ui as m,ut as h,wr as g}from"./index-Ck2hFZuL.js";var _=n(`clock-2`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4-2`,key:`1r2kuh`}]]),v=t(e(),1);function y(){let[e,t]=v.useState(new Date);return v.createElement(s,{mode:`single`,selected:e,onSelect:t,className:`rounded-lg border`,captionLayout:`dropdown`})}function b(){let[e,t]=v.useState(void 0);return v.createElement(o,{selected:e,onSelect:t,className:`rounded-lg border`})}function x(){return v.createElement(s,{mode:`single`,className:`rounded-lg border`})}function S(){let[e,t]=v.useState({from:new Date(new Date().getFullYear(),0,12),to:l(new Date(new Date().getFullYear(),0,12),30)});return v.createElement(c,{className:`mx-auto w-fit p-0`},v.createElement(a,{className:`p-0`},v.createElement(s,{mode:`range`,defaultMonth:e?.from,selected:e,onSelect:t,numberOfMonths:2,disabled:e=>e>new Date||e<new Date(`1900-01-01`)})))}function C(){return v.createElement(s,{mode:`single`,captionLayout:`dropdown`,className:`rounded-lg border`})}function w(){let[e,t]=v.useState(new Date(new Date().getFullYear(),1,12)),[n,i]=v.useState(new Date(new Date().getFullYear(),new Date().getMonth(),1));return v.createElement(c,{className:`mx-auto w-fit max-w-75`,size:`sm`},v.createElement(a,{},v.createElement(s,{mode:`single`,selected:e,onSelect:t,month:n,onMonthChange:i,fixedWeeks:!0,className:`p-0 [--cell-size:--spacing(9.5)]`})),v.createElement(g,{className:`flex flex-wrap gap-2 border-t`},...[{label:`Today`,value:0},{label:`Tomorrow`,value:1},{label:`In 3 days`,value:3},{label:`In a week`,value:7},{label:`In 2 weeks`,value:14}].map(e=>v.createElement(r,{key:e.value,variant:`outline`,size:`sm`,className:`flex-1`,onClick:()=>{let n=l(new Date,e.value);t(n),i(new Date(n.getFullYear(),n.getMonth(),1))}},e.label))))}function T(){let[e,t]=v.useState(new Date(new Date().getFullYear(),new Date().getMonth(),12));return v.createElement(c,{size:`sm`,className:`mx-auto w-fit`},v.createElement(a,{},v.createElement(s,{mode:`single`,selected:e,onSelect:t,className:`p-0`})),v.createElement(g,{className:`bg-card border-t`},v.createElement(p,{},v.createElement(h,{},v.createElement(d,{htmlFor:`time-from`},`Start Time`),v.createElement(f,{},v.createElement(u,{id:`time-from`,type:`time`,step:`1`,defaultValue:`10:30:00`,className:`appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none`}),v.createElement(m,{},v.createElement(_,{className:`text-muted-foreground`})))),v.createElement(h,{},v.createElement(d,{htmlFor:`time-to`},`End Time`),v.createElement(f,{},v.createElement(u,{id:`time-to`,type:`time`,step:`1`,defaultValue:`12:30:00`,className:`appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none`}),v.createElement(m,{},v.createElement(_,{className:`text-muted-foreground`})))))))}function E(){let[e,t]=v.useState(new Date(new Date().getFullYear(),1,3)),n=Array.from({length:15},(e,t)=>new Date(new Date().getFullYear(),1,12+t));return v.createElement(c,{className:`mx-auto w-fit p-0`},v.createElement(a,{className:`p-0`},v.createElement(s,{mode:`single`,defaultMonth:e,selected:e,onSelect:t,disabled:n,modifiers:{booked:n},modifiersClassNames:{booked:`[&>button]:line-through opacity-100`}})))}function D(){let[e,t]=v.useState({from:new Date(new Date().getFullYear(),11,8),to:l(new Date(new Date().getFullYear(),11,8),10)});return v.createElement(c,{className:`mx-auto w-fit p-0`},v.createElement(a,{className:`p-0`},v.createElement(s,{mode:`range`,defaultMonth:e?.from,selected:e,onSelect:t,numberOfMonths:1,captionLayout:`dropdown`,className:`[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]`,formatters:{formatMonthDropdown:e=>e.toLocaleString(`default`,{month:`long`})},components:{DayButton:({children:e,modifiers:t,day:n,...r})=>{let a=n.date.getDay()===0||n.date.getDay()===6;return v.createElement(i,{day:n,modifiers:t,...r},e,t.outside?null:v.createElement(`span`,null,a?`$120`:`$100`))}}})))}function O(){let[e,t]=v.useState(new Date(new Date().getFullYear(),1,3));return v.createElement(c,{className:`mx-auto w-fit p-0`},v.createElement(a,{className:`p-0`},v.createElement(s,{mode:`single`,defaultMonth:e,selected:e,onSelect:t,showWeekNumber:!0})))}var k={id:`calendar`,name:`Calendar`,description:`A calendar component that allows users to select a date or a range of dates.`,installation:{cli:`npx shadcn@latest add calendar`,manual:`Install react-day-picker and date-fns, then copy and paste the calendar component source code into your project.`},usage:`import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)`,preview:{code:`import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
      captionLayout="dropdown"
    />
  )
}`,component:v.createElement(y)},examples:[{name:`Basic`,description:`A basic calendar component. We used className="rounded-lg border" to style the calendar.`,code:`import { Calendar } from "@/components/ui/calendar"

export function CalendarBasic() {
  return <Calendar mode="single" className="rounded-lg border" />
}`,preview:v.createElement(x)},{name:`Range Calendar`,description:`Use the mode="range" prop to enable range selection.`,code:`import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
        />
      </CardContent>
    </Card>
  )
}`,preview:v.createElement(S)},{name:`Month and Year Selector`,description:`Use captionLayout="dropdown" to show month and year dropdowns.`,code:`import { Calendar } from "@/components/ui/calendar"

export function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}`,preview:v.createElement(C)},{name:`Presets`,description:`A calendar with quick-select date presets.`,code:`import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { addDays } from "date-fns"

export function CalendarWithPresets() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12)
  )
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="mx-auto w-fit max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className="p-0 [--cell-size:--spacing(9.5)]"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "In 3 days", value: 3 },
          { label: "In a week", value: 7 },
          { label: "In 2 weeks", value: 14 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
              setCurrentMonth(
                new Date(newDate.getFullYear(), newDate.getMonth(), 1)
              )
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}`,preview:v.createElement(w)},{name:`Date and Time Picker`,description:`A calendar combined with time inputs.`,code:`import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Clock2Icon } from "lucide-react"

export function CalendarWithTime() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <Card size="sm" className="mx-auto w-fit">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="bg-card border-t">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-from"
                type="time"
                step="1"
                defaultValue="10:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <Clock2Icon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="time-to">End Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-to"
                type="time"
                step="1"
                defaultValue="12:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <Clock2Icon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}`,preview:v.createElement(T)},{name:`Booked Dates`,description:`Disable and visually mark booked dates using modifiers.`,code:`import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function CalendarBookedDates() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          disabled={bookedDates}
          modifiers={{ booked: bookedDates }}
          modifiersClassNames={{
            booked: "[&>button]:line-through opacity-100",
          }}
        />
      </CardContent>
    </Card>
  )
}`,preview:v.createElement(E)},{name:`Custom Cell Size`,description:`Customize the size of calendar cells using the --cell-size CSS variable. Supports responsive breakpoint-specific values. This example also demonstrates a custom DayButton to show pricing per day.`,code:`import * as React from "react"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function CalendarCustomCellSize() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
          formatters={{
            formatMonthDropdown: (date) =>
              date.toLocaleString("default", { month: "long" }),
          }}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend =
                day.date.getDay() === 0 || day.date.getDay() === 6

              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  {children}
                  {!modifiers.outside && (
                    <span>{isWeekend ? "$120" : "$100"}</span>
                  )}
                </CalendarDayButton>
              )
            },
          }}
        />
      </CardContent>
    </Card>
  )
}`,preview:v.createElement(D)},{name:`Week Numbers`,description:`Use showWeekNumber to show week numbers.`,code:`import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function CalendarWeekNumbers() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}`,preview:v.createElement(O)},{name:`With Date Input`,description:`A calendar combined with a segmented date input. Click a segment (DD, MM, YYYY) or use Tab to cycle between them, type digits to fill, and the calendar navigates and selects automatically.`,code:`import * as React from "react"
import { CalendarWithInput } from "@/components/ui/calendar"

export function CalendarWithInputExample() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <CalendarWithInput
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}`,preview:v.createElement(b)}]};export{k as calendarDoc};