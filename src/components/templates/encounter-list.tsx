import {
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  CircleDot,
  Flag,
  FolderOpen,
  MapPin,
  Plus,
  QrCode,
  Search,
  Stethoscope,
  Tags,
  UsersRound,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

type EncounterStatus =
  | "planned"
  | "in_progress"
  | "on_hold"
  | "discharged"
  | "completed"
  | "cancelled"
  | "discontinued"
  | "entered_in_error"
  | "unknown";
type EncounterPriority = "routine" | "urgent" | "asap";
type EncounterClass = "opd" | "ip" | "imp";
type SearchMode =
  | "CARE ID"
  | "Patient's name"
  | "Patient's phone number"
  | "Aadhaar"
  | "Medicity ID";

const FILTER_OPTIONS = [
  { key: "status", label: "Status", icon: CircleDot },
  { key: "priority", label: "Priority", icon: Flag },
  { key: "department", label: "Department", icon: Building2 },
  { key: "careTeam", label: "Care Team", icon: UsersRound },
  { key: "tags", label: "Tags", icon: Tags },
  { key: "date", label: "Date", icon: CalendarDays },
] as const;

type FilterKey = (typeof FILTER_OPTIONS)[number]["key"];

const SEARCH_MODES: SearchMode[] = [
  "CARE ID",
  "Patient's name",
  "Patient's phone number",
  "Aadhaar",
  "Medicity ID",
];

const DATE_PRESETS = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 3 weeks",
  "Last month",
  "Last 3 months",
  "Last 6 months",
  "Last year",
] as const;

interface EncounterFixture {
  id: string;
  patientId: string;
  patientName: string;
  gender: "Male" | "Female" | "Other";
  age: string;
  phoneNumber: string;
  externalIdentifier: string;
  status: EncounterStatus;
  priority: EncounterPriority;
  encounterClass: EncounterClass;
  doctor: string;
  location: string;
  periodStart: string;
  periodEnd?: string;
  tags: string[];
}

const ENCOUNTERS: EncounterFixture[] = [
  {
    id: "enc-1001",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "in_progress",
    priority: "urgent",
    encounterClass: "ip",
    doctor: "Dr. Kavya Menon",
    location: "Medical ICU",
    periodStart: "2026-10-28T09:10:00Z",
    periodEnd: "2026-11-05T12:30:00Z",
    tags: ["Ventilation", "Sepsis"],
  },
  {
    id: "enc-1002",
    patientId: "pat-002",
    patientName: "Abhishek",
    gender: "Female",
    age: "45y",
    phoneNumber: "9123456780",
    externalIdentifier: "UHID-010104",
    status: "planned",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Naveen Das",
    location: "General Medicine OP",
    periodStart: "2026-11-04T05:20:00Z",
    tags: ["Follow-up"],
  },
  {
    id: "enc-1003",
    patientId: "pat-003",
    patientName: "Abhi",
    gender: "Male",
    age: "72y",
    phoneNumber: "9988776655",
    externalIdentifier: "EXT-ALPHA-229",
    status: "completed",
    priority: "asap",
    encounterClass: "imp",
    doctor: "Dr. Priya Nair",
    location: "Emergency Ward",
    periodStart: "2026-10-30T14:00:00Z",
    periodEnd: "2026-10-30T20:15:00Z",
    tags: ["Stroke", "Thrombolysis", "Referred"],
  },
  {
    id: "enc-1004",
    patientId: "pat-004",
    patientName: "Abhijith P",
    gender: "Female",
    age: "31y",
    phoneNumber: "9000011122",
    externalIdentifier: "UHID-008445",
    status: "cancelled",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Arjun S",
    location: "Dermatology",
    periodStart: "2026-11-02T10:00:00Z",
    tags: [],
  },
  {
    id: "enc-1005",
    patientId: "pat-005",
    patientName: "Abhiram",
    gender: "Male",
    age: "58y",
    phoneNumber: "9012345678",
    externalIdentifier: "EXT-BETA-041",
    status: "in_progress",
    priority: "urgent",
    encounterClass: "ip",
    doctor: "Dr. Leena George",
    location: "Cardiac Unit",
    periodStart: "2026-11-01T07:45:00Z",
    tags: ["Post-op", "Telemetry"],
  },
  {
    id: "enc-1006",
    patientId: "pat-006",
    patientName: "Abhin",
    gender: "Female",
    age: "23y",
    phoneNumber: "9555511111",
    externalIdentifier: "UHID-010901",
    status: "planned",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Nisha Paul",
    location: "Pulmonology",
    periodStart: "2026-11-05T06:00:00Z",
    tags: ["Asthma"],
  },
  {
    id: "enc-1007",
    patientId: "pat-007",
    patientName: "Abhin.K.K",
    gender: "Male",
    age: "29y",
    phoneNumber: "9444477777",
    externalIdentifier: "UHID-011234",
    status: "planned",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Aleena James",
    location: "ENT OP",
    periodStart: "2026-11-05T08:30:00Z",
    tags: ["Sinusitis"],
  },
  {
    id: "enc-1008",
    patientId: "pat-008",
    patientName: "Akhil Raj",
    gender: "Male",
    age: "41y",
    phoneNumber: "9777712345",
    externalIdentifier: "UHID-011401",
    status: "completed",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Nimisha V",
    location: "Orthopedics",
    periodStart: "2026-10-29T10:10:00Z",
    periodEnd: "2026-10-29T13:20:00Z",
    tags: ["Fracture Review"],
  },
  {
    id: "enc-1009",
    patientId: "pat-009",
    patientName: "Anjali Menon",
    gender: "Female",
    age: "36y",
    phoneNumber: "9666612121",
    externalIdentifier: "UHID-011402",
    status: "planned",
    priority: "asap",
    encounterClass: "imp",
    doctor: "Dr. Rahul Iyer",
    location: "Observation Unit",
    periodStart: "2026-11-06T03:30:00Z",
    tags: ["Chest Pain"],
  },
  {
    id: "enc-1010",
    patientId: "pat-010",
    patientName: "Nikhil Das",
    gender: "Male",
    age: "52y",
    phoneNumber: "9888899990",
    externalIdentifier: "EXT-GAMMA-772",
    status: "in_progress",
    priority: "urgent",
    encounterClass: "ip",
    doctor: "Dr. Liza Mathew",
    location: "Neurology",
    periodStart: "2026-11-03T11:15:00Z",
    tags: ["Monitoring", "Medication Titration"],
  },
  {
    id: "enc-1011",
    patientId: "pat-011",
    patientName: "Sreya K",
    gender: "Female",
    age: "27y",
    phoneNumber: "9111198765",
    externalIdentifier: "UHID-011510",
    status: "cancelled",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Megha Susan",
    location: "ENT OP",
    periodStart: "2026-11-01T09:45:00Z",
    tags: [],
  },
  {
    id: "enc-1012",
    patientId: "pat-012",
    patientName: "Jacob John",
    gender: "Male",
    age: "39y",
    phoneNumber: "9333300012",
    externalIdentifier: "UHID-011612",
    status: "in_progress",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Riya Thomas",
    location: "Family Medicine",
    periodStart: "2026-11-06T08:10:00Z",
    tags: ["Follow-up"],
  },
  {
    id: "enc-1013",
    patientId: "pat-013",
    patientName: "Vimal Jacob",
    gender: "Male",
    age: "47y",
    phoneNumber: "9333300013",
    externalIdentifier: "UHID-011613",
    status: "planned",
    priority: "urgent",
    encounterClass: "ip",
    doctor: "Dr. Firoz Ali",
    location: "Cardiology",
    periodStart: "2026-11-06T10:25:00Z",
    tags: ["Telemetry"],
  },
  {
    id: "enc-1014",
    patientId: "pat-014",
    patientName: "John Jacob",
    gender: "Male",
    age: "33y",
    phoneNumber: "9333300014",
    externalIdentifier: "UHID-011614",
    status: "completed",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Deepa N",
    location: "General Medicine OP",
    periodStart: "2026-10-31T07:30:00Z",
    periodEnd: "2026-10-31T09:45:00Z",
    tags: ["Review"],
  },
  {
    id: "enc-1015",
    patientId: "pat-015",
    patientName: "Vipin Abhi",
    gender: "Male",
    age: "28y",
    phoneNumber: "9333300015",
    externalIdentifier: "UHID-011615",
    status: "planned",
    priority: "asap",
    encounterClass: "imp",
    doctor: "Dr. Minu George",
    location: "Emergency Ward",
    periodStart: "2026-11-06T12:00:00Z",
    tags: ["Triage"],
  },
  {
    id: "enc-1016",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "planned",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Rohan Mathew",
    location: "General Medicine OP",
    periodStart: "2026-09-05T08:30:00Z",
    tags: [],
  },
  {
    id: "enc-1018",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "on_hold",
    priority: "routine",
    encounterClass: "ip",
    doctor: "Dr. Sanjay Rao",
    location: "General Ward",
    periodStart: "2026-09-17T13:15:00Z",
    tags: ["Awaiting Review"],
  },
  {
    id: "enc-1019",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "discharged",
    priority: "routine",
    encounterClass: "ip",
    doctor: "Dr. Anu Thomas",
    location: "Surgical Ward",
    periodStart: "2026-10-01T09:00:00Z",
    periodEnd: "2026-10-04T11:00:00Z",
    tags: ["Discharge Summary"],
  },
  {
    id: "enc-1020",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "completed",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Latha Suresh",
    location: "Dermatology",
    periodStart: "2026-10-12T10:00:00Z",
    periodEnd: "2026-10-12T10:40:00Z",
    tags: [],
  },
  {
    id: "enc-1021",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "cancelled",
    priority: "routine",
    encounterClass: "opd",
    doctor: "Dr. Asha Menon",
    location: "ENT OP",
    periodStart: "2026-10-20T14:00:00Z",
    tags: [],
  },
  {
    id: "enc-1022",
    patientId: "pat-001",
    patientName: "Abhijith",
    gender: "Male",
    age: "64y",
    phoneNumber: "9876543210",
    externalIdentifier: "UHID-009812",
    status: "discontinued",
    priority: "urgent",
    encounterClass: "ip",
    doctor: "Dr. Vivek Pillai",
    location: "Cardiac Unit",
    periodStart: "2026-11-03T07:20:00Z",
    periodEnd: "2026-11-05T16:30:00Z",
    tags: ["Care Plan Closed"],
  },
];

const statusLabel: Record<EncounterStatus, string> = {
  planned: "Planned",
  in_progress: "In Progress",
  on_hold: "On Hold",
  discharged: "Discharged",
  completed: "Completed",
  cancelled: "Cancelled",
  discontinued: "Discontinued",
  entered_in_error: "Entered in Error",
  unknown: "Unknown",
};

const statusVariant: Record<
  EncounterStatus,
  "warning" | "info" | "success" | "destructive" | "neutral"
> = {
  planned: "info",
  in_progress: "warning",
  on_hold: "neutral",
  discharged: "success",
  completed: "success",
  cancelled: "destructive",
  discontinued: "neutral",
  entered_in_error: "destructive",
  unknown: "neutral",
};

const STATUS_DOT_CLASSES: Record<EncounterStatus, string> = {
  planned: "border-blue-300 bg-blue-50",
  in_progress: "border-amber-400 bg-amber-50",
  on_hold: "border-orange-400 bg-orange-50",
  discharged: "border-teal-400 bg-teal-50",
  completed: "border-green-400 bg-green-50",
  cancelled: "border-rose-400 bg-rose-50",
  discontinued: "border-red-400 bg-red-50",
  entered_in_error: "border-red-500 bg-red-50",
  unknown: "border-slate-300 bg-slate-50",
};

const ENCOUNTER_STATUSES: EncounterStatus[] = [
  "planned",
  "in_progress",
  "on_hold",
  "discharged",
  "completed",
  "cancelled",
  "discontinued",
  "entered_in_error",
  "unknown",
];

const ENCOUNTER_PRIORITIES: EncounterPriority[] = ["routine", "urgent", "asap"];

const ENCOUNTER_DEPARTMENTS = [
  ...new Set(ENCOUNTERS.map((encounter) => encounter.location)),
];

const ENCOUNTER_CARE_TEAMS = [
  ...new Set(ENCOUNTERS.map((encounter) => encounter.doctor)),
];

const ENCOUNTER_TAGS = [
  ...new Set(ENCOUNTERS.flatMap((encounter) => encounter.tags)),
];

const priorityLabel: Record<EncounterPriority, string> = {
  routine: "Routine",
  urgent: "Urgent",
  asap: "ASAP",
};

const priorityVariant: Record<
  EncounterPriority,
  "neutral" | "warning" | "destructive"
> = {
  routine: "neutral",
  urgent: "warning",
  asap: "destructive",
};

function getConsecutiveTriplets(value: string) {
  const source = value.trim().toLowerCase();
  const chunks: string[] = [];

  for (let index = 0; index <= source.length - 3; index += 1) {
    chunks.push(source.slice(index, index + 3));
  }

  return chunks;
}

function getHighlightTerm(name: string, query: string) {
  const normalizedName = name.toLowerCase();
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return "";
  if (normalizedName.includes(normalizedQuery)) return normalizedQuery;

  if (normalizedQuery.length < 3) {
    return normalizedName.includes(normalizedQuery) ? normalizedQuery : "";
  }

  const triplets = getConsecutiveTriplets(normalizedQuery);
  return triplets.find((triplet) => normalizedName.includes(triplet)) || "";
}

function getSearchValue(encounter: EncounterFixture, mode: SearchMode) {
  switch (mode) {
    case "CARE ID":
      return encounter.externalIdentifier;
    case "Patient's name":
      return encounter.patientName;
    case "Patient's phone number":
      return encounter.phoneNumber;
    case "Aadhaar":
      return `AAD-${encounter.patientId.toUpperCase()}`;
    case "Medicity ID":
      return `MED-${encounter.patientId.toUpperCase()}`;
  }
}

function renderHighlightedText(text: string, term: string) {
  if (!term) return text;

  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedTerm})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <mark
        key={`${part}-${index}`}
        className="text-foreground rounded px-0.5"
        style={{ backgroundColor: "#FFD76A" }}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function formatPeriod(start: string, end?: string) {
  const startDate = new Date(start);
  const startLabel = startDate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (!end) return startLabel;

  const endDate = new Date(end);
  const endLabel = endDate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${startLabel} - ${endLabel}`;
}

interface FixtureFilterProps {
  label: string;
  ariaLabel: string;
  className?: string;
  value: string | string[];
  options: string[];
  open: boolean;
  clearLabel: string;
  badgeVariant: "neutral" | "info" | "destructive";
  onOpenChange: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  onValuesChange?: (values: string[]) => void;
  onRemove: () => void;
}

function FixtureFilter({
  label,
  ariaLabel,
  className,
  value,
  options,
  open,
  clearLabel,
  badgeVariant,
  onOpenChange,
  onValueChange,
  onValuesChange,
  onRemove,
}: FixtureFilterProps) {
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];
  const isMultiSelect = Array.isArray(value);

  return (
    <motion.div layout className={className}>
      <DropdownMenu open={open} onOpenChange={onOpenChange}>
        <div
          className="border-input flex h-[34px] cursor-pointer items-center gap-1 rounded-md border px-1"
          onClick={(event) => {
            const target = event.target;
            if (target instanceof Element && target.closest("button")) return;
            onOpenChange(true);
          }}
        >
          <span className="text-foreground px-2 text-sm whitespace-nowrap">
            {label}
          </span>
          {selectedValues.length > 0 && (
            <span aria-hidden="true" className="bg-border h-5 w-px shrink-0" />
          )}
          {selectedValues.length > 0 && (
            <Badge variant={badgeVariant} size="sm" onClose={onRemove}>
              {selectedValues[0]}
            </Badge>
          )}
          {selectedValues.length > 1 && (
            <span className="text-muted-foreground px-1 text-xs whitespace-nowrap">
              +{selectedValues.length - 1} more
            </span>
          )}
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label={ariaLabel}
              className="focus-visible:ring-ring flex h-full shrink-0 items-center justify-center px-2 outline-none focus-visible:ring-2 focus-visible:ring-inset"
            >
              <ChevronDown className="text-muted-foreground size-3.5" />
            </button>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent
          align="start"
          side="bottom"
          sideOffset={4}
          className="min-w-48"
        >
          <DropdownMenuItem
            onClick={() => {
              if (isMultiSelect) {
                onValuesChange?.([]);
              } else {
                onValueChange?.("");
              }
            }}
            className="cursor-pointer"
          >
            {clearLabel}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {isMultiSelect
            ? options.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option}
                  checked={selectedValues.includes(option)}
                  onCheckedChange={(checked) =>
                    onValuesChange?.(
                      checked
                        ? [...selectedValues, option]
                        : selectedValues.filter((value) => value !== option)
                    )
                  }
                >
                  {option}
                </DropdownMenuCheckboxItem>
              ))
            : options.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => onValueChange?.(option)}
                  className="cursor-pointer"
                >
                  {option}
                </DropdownMenuItem>
              ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}

function FilterValueOption({
  checked,
  label,
  onCheckedChange,
  dotClassName,
}: {
  checked: boolean;
  label: string;
  onCheckedChange: (checked: boolean) => void;
  dotClassName?: string;
}) {
  return (
    <DropdownMenuCheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="cursor-pointer gap-2 px-2 pr-2 [&_[data-slot=dropdown-menu-checkbox-item-indicator]]:hidden"
    >
      <span
        aria-hidden="true"
        className={`flex size-4 shrink-0 items-center justify-center rounded-[3px] border ${
          checked
            ? "border-emerald-700 bg-emerald-700 text-white"
            : "border-border bg-background"
        }`}
      >
        {checked && <Check className="size-3" />}
      </span>
      {dotClassName && (
        <span
          aria-hidden="true"
          className={`size-3 shrink-0 rounded-full border ${dotClassName}`}
        />
      )}
      {label}
    </DropdownMenuCheckboxItem>
  );
}

function FilterRadioOption({
  checked,
  label,
  value,
}: {
  checked: boolean;
  label: string;
  value: string;
}) {
  return (
    <DropdownMenuRadioItem
      value={value}
      className="cursor-pointer gap-2 px-2 pr-2 [&_[data-slot=dropdown-menu-radio-item-indicator]]:hidden"
    >
      <span
        aria-hidden="true"
        className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
          checked ? "border-emerald-700 bg-background" : "border-border bg-background"
        }`}
      >
        {checked && <span className="size-2 rounded-full bg-emerald-700" />}
      </span>
      {label}
    </DropdownMenuRadioItem>
  );
}

function EncounterCard({
  encounter,
  searchText,
}: {
  encounter: EncounterFixture;
  searchText: string;
}) {
  const visibleTags = encounter.tags.slice(0, 2);
  const remainingTags = encounter.tags.length - visibleTags.length;
  const highlightTerm = getHighlightTerm(encounter.patientName, searchText);

  return (
    <Card className="h-full gap-0 overflow-hidden py-0">
      <CardHeader className="bg-muted/60 px-4 pt-3 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="text-foreground text-base font-semibold">
              {renderHighlightedText(encounter.patientName, highlightTerm)}
            </h3>
            <p className="text-muted-foreground text-xs">
              {encounter.age}, {encounter.gender}
            </p>
          </div>
          <Badge variant={statusVariant[encounter.status]} size="sm">
            {statusLabel[encounter.status]}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 px-4 py-3">
        <div className="text-muted-foreground flex items-center gap-1 text-xs">
          <Clock className="size-3" />
          <span>
            {formatPeriod(encounter.periodStart, encounter.periodEnd)}
          </span>
        </div>

        <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1">
            <Stethoscope className="size-3" />
            {encounter.doctor}
          </span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3" />
            {encounter.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          <Badge variant="neutral" size="sm">
            {encounter.encounterClass.toUpperCase()}
          </Badge>
          <Badge variant={priorityVariant[encounter.priority]} size="sm">
            {encounter.priority.toUpperCase()}
          </Badge>
        </div>

        {encounter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {visibleTags.map((tag) => (
              <Badge
                key={tag}
                variant="neutral"
                size="xs"
                className="uppercase"
              >
                {tag}
              </Badge>
            ))}
            {remainingTags > 0 && (
              <Badge variant="neutral" size="xs">
                +{remainingTags} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex justify-end gap-2 px-4 py-3">
        <Button variant="link" size="sm">
          Patient Home
        </Button>
        <Button variant="outline" size="sm">
          View Encounter
        </Button>
      </CardFooter>
    </Card>
  );
}

export function EncounterListTemplate() {
  const [searchText, setSearchText] = useState("");
  const [patientNameSuggestionsOpen, setPatientNameSuggestionsOpen] =
    useState(false);
  const [patientNameSearchInput, setPatientNameSearchInput] = useState("");
  const [patientNameSearch, setPatientNameSearch] = useState("");
  const [searchMode, setSearchMode] = useState<SearchMode>("CARE ID");
  const [selectedDateLabel, setSelectedDateLabel] = useState("Today");
  const [customDateOpen, setCustomDateOpen] = useState(false);
  const [customDateRange, setCustomDateRange] = useState<DateRange>();
  const [enabledFilters, setEnabledFilters] = useState<Set<FilterKey>>(
    () => new Set(["status", "priority", "date"])
  );
  const [selectedStatus, setSelectedStatus] = useState<EncounterStatus[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<
    EncounterPriority | ""
  >("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCareTeam, setSelectedCareTeam] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [addFilterMenuOpen, setAddFilterMenuOpen] = useState(false);
  const [openFilterSubMenu, setOpenFilterSubMenu] = useState<FilterKey | null>(
    null
  );
  const [appliedFiltersOpen, setAppliedFiltersOpen] = useState(false);
  const appliedFiltersTriggerRef = useRef<HTMLButtonElement>(null);
  const appliedFiltersPanelRef = useRef<HTMLDivElement>(null);
  const filterBySearchRef = useRef<HTMLDivElement>(null);
  const filterBySearchInputRef = useRef<HTMLInputElement>(null);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const [statusSearchText, setStatusSearchText] = useState("");
  const [priorityMenuOpen, setPriorityMenuOpen] = useState(false);
  const [dateMenuOpen, setDateMenuOpen] = useState(false);
  const [departmentMenuOpen, setDepartmentMenuOpen] = useState(false);
  const [careTeamMenuOpen, setCareTeamMenuOpen] = useState(false);
  const [tagsMenuOpen, setTagsMenuOpen] = useState(false);

  useEffect(() => {
    if (!appliedFiltersOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (
        appliedFiltersTriggerRef.current?.contains(event.target) ||
        appliedFiltersPanelRef.current?.contains(event.target)
      ) {
        return;
      }

      if (event.target instanceof Element) {
        const menuContent = event.target.closest<HTMLElement>(
          '[data-slot="dropdown-menu-content"]'
        );
        const menuTriggerId = menuContent?.getAttribute("aria-labelledby");
        const menuTrigger = menuTriggerId
          ? document.getElementById(menuTriggerId)
          : null;
        if (
          menuTrigger &&
          appliedFiltersPanelRef.current?.contains(menuTrigger)
        ) {
          return;
        }
      }

      setAppliedFiltersOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [appliedFiltersOpen]);

  const setFilterEnabled = (filter: FilterKey, enabled: boolean) => {
    const next = new Set(enabledFilters);
    if (enabled) {
      next.add(filter);
    } else {
      next.delete(filter);
    }
    setEnabledFilters(next);

    if (!enabled) {
      setAppliedFiltersOpen(false);
    }

    if (enabled) return;

    switch (filter) {
      case "status":
        setSelectedStatus([]);
        setStatusMenuOpen(false);
        break;
      case "priority":
        setSelectedPriority("");
        setPriorityMenuOpen(false);
        break;
      case "department":
        setSelectedDepartment("");
        setDepartmentMenuOpen(false);
        break;
      case "careTeam":
        setSelectedCareTeam("");
        setCareTeamMenuOpen(false);
        break;
      case "tags":
        setSelectedTags([]);
        setTagsMenuOpen(false);
        break;
      case "date":
        setSelectedDateLabel("Today");
        setCustomDateRange(undefined);
        break;
    }
  };

  const filteredEncounters = useMemo(() => {
    const normalized = searchText.trim().toLowerCase();
    const normalizedPatientName = patientNameSearch.trim().toLowerCase();
    let searchMatches = ENCOUNTERS;

    if (normalized && searchMode === "Patient's name") {
      const exactPatientIds = new Set(
        ENCOUNTERS.filter(
          (encounter) =>
            encounter.patientName.trim().toLowerCase() === normalized
        ).map((encounter) => encounter.patientId)
      );

      if (exactPatientIds.size > 0) {
        searchMatches = ENCOUNTERS.filter((encounter) =>
          exactPatientIds.has(encounter.patientId)
        );
      } else if (normalized.length < 3) {
        searchMatches = ENCOUNTERS.filter((encounter) =>
          encounter.patientName.toLowerCase().includes(normalized)
        );
      } else {
        const triplets = getConsecutiveTriplets(normalized);
        searchMatches = ENCOUNTERS.filter((encounter) => {
          const normalizedName = encounter.patientName.toLowerCase();
          return triplets.some((triplet) => normalizedName.includes(triplet));
        });
      }
    } else if (normalized) {
      searchMatches = ENCOUNTERS.filter((encounter) =>
        getSearchValue(encounter, searchMode).toLowerCase().includes(normalized)
      );
    }

    return searchMatches.filter(
      (encounter) =>
        (selectedStatus.length === 0 ||
          selectedStatus.includes(encounter.status)) &&
        (!selectedPriority || encounter.priority === selectedPriority) &&
        (!selectedDepartment || encounter.location === selectedDepartment) &&
        (!selectedCareTeam || encounter.doctor === selectedCareTeam) &&
        (selectedTags.length === 0 ||
          selectedTags.some((tag) => encounter.tags.includes(tag))) &&
        (!normalizedPatientName ||
          encounter.patientName.toLowerCase().includes(normalizedPatientName))
    );
  }, [
    patientNameSearch,
    searchMode,
    searchText,
    selectedCareTeam,
    selectedDepartment,
    selectedPriority,
    selectedStatus,
    selectedTags,
  ]);

  const patientNameSuggestions =
    searchMode === "Patient's name" && searchText.trim()
      ? [...new Set(ENCOUNTERS.map((encounter) => encounter.patientName))].filter(
          (name) =>
            name.toLowerCase().includes(searchText.trim().toLowerCase())
        )
      : [];

  const filterSummaryValues = [
    ...(enabledFilters.has("priority") && selectedPriority
      ? [priorityLabel[selectedPriority]]
      : []),
    ...(enabledFilters.has("status") && selectedStatus[0]
      ? [statusLabel[selectedStatus[0]]]
      : []),
    ...(enabledFilters.has("careTeam") && selectedCareTeam
      ? [selectedCareTeam]
      : []),
    ...(enabledFilters.has("department") && selectedDepartment
      ? [selectedDepartment]
      : []),
    ...(enabledFilters.has("tags") && selectedTags[0]
      ? [selectedTags[0]]
      : []),
    ...(enabledFilters.has("date") ? [selectedDateLabel] : []),
  ];
  const appliedFilterCount = filterSummaryValues.length;
  // True once any filter other than the always-on date filter has been applied via "Add filter".
  const hasAddedFilters =
    appliedFilterCount > (enabledFilters.has("date") ? 1 : 0);
  const filtersCollapsed = appliedFilterCount > 3;
  const visibleFilterSummary = filterSummaryValues.slice(0, 2);
  const filterSummary = [
    ...visibleFilterSummary,
    ...(appliedFilterCount > visibleFilterSummary.length
      ? [`+${appliedFilterCount - visibleFilterSummary.length}`]
      : []),
  ].join(" · ");

  useEffect(() => {
    if (appliedFilterCount <= 3) setAppliedFiltersOpen(false);
  }, [appliedFilterCount]);

  const clearAllFilters = () => {
    setSearchText("");
    setPatientNameSearchInput("");
    setPatientNameSearch("");
    setSearchMode("CARE ID");
    setSelectedDateLabel("Today");
    setCustomDateRange(undefined);
    setSelectedStatus([]);
    setSelectedPriority("");
    setStatusSearchText("");
    setSelectedDepartment("");
    setSelectedCareTeam("");
    setSelectedTags([]);
    setAddFilterMenuOpen(false);
    setOpenFilterSubMenu(null);
    setStatusMenuOpen(false);
    setPriorityMenuOpen(false);
    setDepartmentMenuOpen(false);
    setCareTeamMenuOpen(false);
    setTagsMenuOpen(false);
  };

  const renderFilterOptions = (filter: FilterKey) => {
    switch (filter) {
      case "status":
        return ENCOUNTER_STATUSES.map((status) => (
          <FilterValueOption
            key={status}
            checked={selectedStatus.includes(status)}
            label={statusLabel[status]}
            dotClassName={STATUS_DOT_CLASSES[status]}
            onCheckedChange={(checked) => {
              setFilterEnabled("status", true);
              setSelectedStatus((current) =>
                checked
                  ? current.includes(status)
                    ? current
                    : [...current, status]
                  : current.filter((value) => value !== status)
              );
            }}
          />
        ));
      case "priority":
        return (
          <DropdownMenuRadioGroup
            value={selectedPriority}
            onValueChange={(value) => {
              const priority = ENCOUNTER_PRIORITIES.find(
                (option) => option === value
              );
              if (!priority) return;
              setFilterEnabled("priority", true);
              setSelectedPriority(priority);
              setAddFilterMenuOpen(false);
              setOpenFilterSubMenu(null);
            }}
          >
            {ENCOUNTER_PRIORITIES.map((priority) => (
              <FilterRadioOption
                key={priority}
                value={priority}
                checked={selectedPriority === priority}
                label={priorityLabel[priority]}
              />
            ))}
          </DropdownMenuRadioGroup>
        );
      case "department":
        return (
          <DropdownMenuRadioGroup
            value={selectedDepartment}
            onValueChange={(value) => {
              const department = ENCOUNTER_DEPARTMENTS.find(
                (option) => option === value
              );
              if (!department) return;
              setFilterEnabled("department", true);
              setSelectedDepartment(department);
              setAddFilterMenuOpen(false);
              setOpenFilterSubMenu(null);
            }}
          >
            {ENCOUNTER_DEPARTMENTS.map((department) => (
              <FilterRadioOption
                key={department}
                value={department}
                checked={selectedDepartment === department}
                label={department}
              />
            ))}
          </DropdownMenuRadioGroup>
        );
      case "careTeam":
        return (
          <DropdownMenuRadioGroup
            value={selectedCareTeam}
            onValueChange={(value) => {
              const careTeam = ENCOUNTER_CARE_TEAMS.find(
                (option) => option === value
              );
              if (!careTeam) return;
              setFilterEnabled("careTeam", true);
              setSelectedCareTeam(careTeam);
              setAddFilterMenuOpen(false);
              setOpenFilterSubMenu(null);
            }}
          >
            {ENCOUNTER_CARE_TEAMS.map((careTeam) => (
              <FilterRadioOption
                key={careTeam}
                value={careTeam}
                checked={selectedCareTeam === careTeam}
                label={careTeam}
              />
            ))}
          </DropdownMenuRadioGroup>
        );
      case "tags":
        return ENCOUNTER_TAGS.map((tag) => (
          <FilterValueOption
            key={tag}
            checked={selectedTags.includes(tag)}
            label={tag}
            onCheckedChange={(checked) => {
              setFilterEnabled("tags", true);
              setSelectedTags((current) =>
                checked
                  ? current.includes(tag)
                    ? current
                    : [...current, tag]
                  : current.filter((value) => value !== tag)
              );
            }}
          />
        ));
      case "date":
        return (
          <>
            <DropdownMenuRadioGroup
              value={selectedDateLabel}
              onValueChange={(value) => {
                const preset = DATE_PRESETS.find((option) => option === value);
                if (!preset) return;
                setFilterEnabled("date", true);
                setSelectedDateLabel(preset);
                setAddFilterMenuOpen(false);
                setOpenFilterSubMenu(null);
              }}
            >
              {DATE_PRESETS.map((preset) => (
                <FilterRadioOption
                  key={preset}
                  value={preset}
                  checked={selectedDateLabel === preset}
                  label={preset}
                />
              ))}
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setFilterEnabled("date", true);
                setSelectedDateLabel("Custom date");
                setAddFilterMenuOpen(false);
                setOpenFilterSubMenu(null);
                setCustomDateOpen(true);
              }}
              className="cursor-pointer"
            >
              Custom date
            </DropdownMenuItem>
          </>
        );
    }
  };

  return (
    <motion.div layout className="space-y-4">
      <motion.div
        layout
        transition={{ layout: { duration: 0.2, ease: "easeOut" } }}
        className="border-border bg-card rounded-lg border shadow-xs"
      >
        <div className="flex flex-col gap-[18px] p-2 pt-4">
          <div className="flex flex-wrap items-start gap-2">
            <div
              className={`grid w-full min-w-0 grid-cols-1 gap-2 sm:w-auto sm:flex-1 sm:gap-y-1 ${
                searchMode === "CARE ID"
                  ? "sm:min-w-[min(100%,44rem)] sm:max-w-[768px]"
                  : "sm:max-w-[648px]"
              }`}
            >
              <div
                ref={filterBySearchRef}
                className="relative w-full min-w-0"
              >
              <div className="border-input bg-background flex h-10 w-full min-w-0 overflow-hidden rounded-md border shadow-xs">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={`border-input text-foreground hover:bg-muted/50 focus-visible:ring-ring flex h-full shrink-0 items-center justify-between border-r px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-inset ${
                      searchMode === "CARE ID" ? "w-32" : "w-[232px]"
                    }`}
                  >
                    {searchMode}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-48"
                  // Return focus to the search input so the caret sits after "ADM-"
                  finalFocus={filterBySearchInputRef}
                >
                  <DropdownMenuRadioGroup
                    value={searchMode}
                    onValueChange={(value) => {
                      const nextMode = value as SearchMode;
                      setSearchMode(nextMode);
                      if (
                        nextMode === "CARE ID" &&
                        !/^\d{0,3}$/.test(searchText)
                      ) {
                        setSearchText("");
                      }
                      setPatientNameSuggestionsOpen(
                        nextMode === "Patient's name" && Boolean(searchText.trim())
                      );
                    }}
                  >
                    {SEARCH_MODES.map((mode) => (
                      <DropdownMenuRadioItem
                        key={mode}
                        value={mode}
                        className="cursor-pointer"
                      >
                        {mode}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="relative flex min-w-0 flex-1 items-center">
                {searchMode !== "CARE ID" && (
                  <Search
                    className="text-muted-foreground pointer-events-none absolute left-3 size-4"
                    aria-hidden="true"
                  />
                )}
                {searchMode === "CARE ID" && (
                  <span
                    aria-hidden="true"
                    className={`text-foreground shrink-0 pl-3 text-base ${
                      searchText ? "" : "mr-1"
                    }`}
                  >
                    {searchText.length === 3 && /^\d{3}$/.test(searchText)
                      ? "ADM"
                      : "ADM-"}
                  </span>
                )}
                <Input
                  ref={filterBySearchInputRef}
                  value={searchText}
                  inputMode={searchMode === "CARE ID" ? "numeric" : undefined}
                  maxLength={searchMode === "CARE ID" ? 3 : undefined}
                  onChange={(event) => {
                    setSearchText(event.target.value);
                    setPatientNameSuggestionsOpen(true);
                  }}
                  onPaste={(event) => {
                    if (searchMode !== "CARE ID") return;
                    const pastedId = event.clipboardData
                      .getData("text")
                      .trim()
                      .match(/^ADM-?(\d{3})$/i);
                    if (pastedId) {
                      event.preventDefault();
                      setSearchText(pastedId[1]);
                    }
                  }}
                  onFocus={() => {
                    if (searchMode === "Patient's name") {
                      setPatientNameSuggestionsOpen(true);
                    }
                  }}
                  onBlur={(event) => {
                    const relatedTarget = event.relatedTarget;
                    if (
                      !(relatedTarget instanceof Node) ||
                      !filterBySearchRef.current?.contains(relatedTarget)
                    ) {
                      setPatientNameSuggestionsOpen(false);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setPatientNameSuggestionsOpen(false);
                    }
                  }}
                  placeholder={
                    searchMode === "CARE ID"
                      ? "Enter the numeric part of the CARE ID or paste the CARE ID"
                      : `Search ${searchMode}`
                  }
                  aria-label={`Search ${searchMode}`}
                  aria-invalid={
                    searchMode === "CARE ID" && !/^\d*$/.test(searchText)
                      ? true
                      : undefined
                  }
                  aria-describedby={
                    searchMode === "CARE ID"
                      ? "care-id-search-helper"
                      : undefined
                  }
                  className={`h-full min-w-0 flex-1 rounded-none border-0 bg-transparent py-0 pr-10 text-base shadow-none outline-none focus-visible:border-0 focus-visible:ring-0 md:h-full md:pr-10 md:text-base ${
                    searchMode === "CARE ID" ? "pl-0 md:pl-0" : "pl-10 md:pl-10"
                  }`}
                />
                {searchText && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    title="Clear search"
                    onClick={() => {
                      setSearchText("");
                      setPatientNameSuggestionsOpen(false);
                    }}
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute right-3 inline-flex size-7 items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                )}
              </div>
              </div>
              {patientNameSuggestionsOpen && patientNameSuggestions.length > 0 && (
                <div
                  role="group"
                  aria-label="Patient name suggestions"
                  className="border-border bg-popover text-popover-foreground absolute top-full left-0 z-40 mt-1 max-h-60 w-full overflow-y-auto rounded-md border p-1 shadow-md"
                >
                  {patientNameSuggestions.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        setSearchText(name);
                        setPatientNameSuggestionsOpen(false);
                      }}
                      className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex min-h-10 w-full items-center rounded-sm px-2 text-left text-sm outline-none"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
              </div>
              {searchMode === "CARE ID" && (
                <p
                  id="care-id-search-helper"
                  className="text-muted-foreground text-xs leading-4"
                >
                  Enter the numeric part of the CARE ID or Paste the CARE ID
                </p>
              )}
            </div>
            <Button
              variant="outline"
              size="xs"
              aria-label="Scan QR code"
              title="Scan QR code"
              className="h-10 gap-1.5 md:h-10"
            >
              <QrCode aria-hidden="true" className="size-3.5" />
              <span>Scan QR</span>
            </Button>
            <div className="relative flex h-10 w-full min-w-0 items-center sm:ml-auto sm:w-56">
              <Search
                className="text-foreground pointer-events-none absolute left-3 size-4"
                aria-hidden="true"
              />
              <Input
                value={patientNameSearchInput}
                onChange={(event) => {
                  const value = event.target.value.replace(/[^\p{L} ]/gu, "");
                  setPatientNameSearchInput(value);
                  if (!value.trim()) setPatientNameSearch("");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    setPatientNameSearch(patientNameSearchInput.trim());
                  }
                }}
                placeholder="Search by patient name"
                aria-label="Search by patient name"
                className="h-10 min-w-0 pr-9 pl-9 md:pr-9 md:pl-9"
              />
              {patientNameSearchInput && (
                <button
                  type="button"
                  aria-label="Clear patient name search"
                  title="Clear patient name search"
                  onClick={() => {
                    setPatientNameSearchInput("");
                    setPatientNameSearch("");
                  }}
                  className="text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute right-2 inline-flex size-7 items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <motion.div
            layout
            transition={{ layout: { duration: 0.2, ease: "easeOut" } }}
            className="relative flex flex-wrap items-center gap-4"
          >
            {enabledFilters.has("date") && (
              <motion.span
                layout
                className="text-sm font-semibold tracking-wide"
              >
                <span className="text-[#4B5563]">Date:</span>{" "}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="rounded-sm underline underline-offset-4 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {selectedDateLabel}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-48">
                    {DATE_PRESETS.map((preset) => (
                      <DropdownMenuItem
                        key={preset}
                        onClick={() => setSelectedDateLabel(preset)}
                        className="cursor-pointer"
                      >
                        {preset}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedDateLabel("Custom date");
                        setCustomDateOpen(true);
                      }}
                      className="cursor-pointer"
                    >
                      Custom date
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.span>
            )}

            {filtersCollapsed && (
              <button
                ref={appliedFiltersTriggerRef}
                type="button"
                aria-expanded={appliedFiltersOpen}
                aria-controls="applied-filters-panel"
                onClick={() => setAppliedFiltersOpen((open) => !open)}
                className="border-input bg-background focus-visible:ring-ring flex h-8 items-center gap-2 rounded-md border px-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <span className="font-semibold">
                  {appliedFilterCount} applied
                </span>
                <span className="text-muted-foreground max-w-52 truncate">
                  {filterSummary}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-3.5 shrink-0 transition-transform ${
                    appliedFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            <div
              ref={appliedFiltersPanelRef}
              id={filtersCollapsed ? "applied-filters-panel" : undefined}
              className={
                filtersCollapsed
                  ? appliedFiltersOpen
                    ? "border-border bg-popover text-popover-foreground absolute top-full left-0 z-30 mt-2 w-[min(580px,calc(100vw-2rem))] rounded-md border p-3 shadow-md"
                    : "hidden"
                  : "contents"
              }
            >
              {filtersCollapsed && (
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Applied filters</h3>
                  <button
                    type="button"
                    onClick={() => setAppliedFiltersOpen(false)}
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-sm text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    Close
                  </button>
                </div>
              )}
              <div
                className={
                  filtersCollapsed
                    ? "flex flex-wrap items-center gap-2"
                    : "contents"
                }
              >
                {filtersCollapsed && enabledFilters.has("date") && (
                  <motion.span
                    layout
                    className="text-sm font-semibold tracking-wide"
                  >
                    <span className="text-[#4B5563]">Date:</span>{" "}
                    <DropdownMenu
                      open={dateMenuOpen}
                      onOpenChange={setDateMenuOpen}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="rounded-sm underline underline-offset-4 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {selectedDateLabel}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="min-w-48">
                        {DATE_PRESETS.map((preset) => (
                          <DropdownMenuItem
                            key={preset}
                            onClick={() => setSelectedDateLabel(preset)}
                            className="cursor-pointer"
                          >
                            {preset}
                          </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedDateLabel("Custom date");
                            setCustomDateOpen(true);
                          }}
                          className="cursor-pointer"
                        >
                          Custom date
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.span>
                )}

                {enabledFilters.has("status") &&
                  selectedStatus.length > 0 && (
                  <motion.div
                    layout
                    className={filtersCollapsed ? "w-fit order-2" : undefined}
                  >
                    <DropdownMenu
                      open={statusMenuOpen}
                      onOpenChange={setStatusMenuOpen}
                    >
                      <div
                        className="border-input flex h-[34px] cursor-pointer items-center gap-1 rounded-md border px-1"
                        onClick={(event) => {
                          const target = event.target;
                          if (
                            target instanceof Element &&
                            target.closest("button")
                          )
                            return;
                          setStatusMenuOpen(true);
                        }}
                      >
                        <span className="text-foreground px-2 text-sm whitespace-nowrap">
                          Status
                        </span>
                        {selectedStatus.length > 0 && (
                          <span
                            aria-hidden="true"
                            className="bg-border h-5 w-px shrink-0"
                          />
                        )}
                        {selectedStatus.length > 0 ? (
                          <>
                            <Badge
                              variant={statusVariant[selectedStatus[0]]}
                              size="sm"
                              onClose={() =>
                                setSelectedStatus((current) => current.slice(1))
                              }
                            >
                              {statusLabel[selectedStatus[0]]}
                            </Badge>
                            {selectedStatus.length > 1 && (
                              <span className="text-muted-foreground px-1 text-xs whitespace-nowrap">
                                +{selectedStatus.length - 1} more
                              </span>
                            )}
                          </>
                        ) : null}
                        <DropdownMenuTrigger asChild>
                          <button
                            type="button"
                            aria-label="Status filter"
                            className="focus-visible:ring-ring flex h-full shrink-0 items-center justify-center px-2 outline-none focus-visible:ring-2 focus-visible:ring-inset"
                          >
                            <ChevronDown className="text-muted-foreground size-3.5" />
                          </button>
                        </DropdownMenuTrigger>
                      </div>
                      <DropdownMenuContent
                        align="start"
                        side="bottom"
                        sideOffset={4}
                        className="w-56 p-0"
                      >
                        <div className="border-border border-b p-2">
                          <Input
                            value={statusSearchText}
                            onChange={(event) =>
                              setStatusSearchText(event.target.value)
                            }
                            placeholder="Search Status..."
                            aria-label="Search statuses"
                            className="h-8 md:h-8"
                          />
                        </div>
                        <div className="max-h-80 overflow-y-auto p-1">
                          {ENCOUNTER_STATUSES.filter((status) =>
                            statusLabel[status]
                              .toLowerCase()
                              .includes(statusSearchText.trim().toLowerCase())
                          ).map((status) => {
                            const checked = selectedStatus.includes(status);

                            return (
                              <DropdownMenuCheckboxItem
                                key={status}
                                checked={checked}
                                onCheckedChange={(nextChecked) =>
                                  setSelectedStatus((current) =>
                                    nextChecked
                                      ? [...current, status]
                                      : current.filter(
                                          (value) => value !== status
                                        )
                                  )
                                }
                                className="gap-2 px-2 [&_[data-slot=dropdown-menu-checkbox-item-indicator]]:hidden"
                              >
                                <span
                                  aria-hidden="true"
                                  className={`flex size-4 shrink-0 items-center justify-center rounded-[3px] border ${
                                    checked
                                      ? "border-emerald-700 bg-emerald-700 text-white"
                                      : "border-border bg-background"
                                  }`}
                                >
                                  {checked && <Check className="size-3" />}
                                </span>
                                <span
                                  aria-hidden="true"
                                  className={`size-3 shrink-0 rounded-full border ${STATUS_DOT_CLASSES[status]}`}
                                />
                                <span>{statusLabel[status]}</span>
                              </DropdownMenuCheckboxItem>
                            );
                          })}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.div>
                )}

                {enabledFilters.has("priority") &&
                  Boolean(selectedPriority) && (
                  <motion.div
                    layout
                    className={filtersCollapsed ? "w-fit order-1" : undefined}
                  >
                    <DropdownMenu
                      open={priorityMenuOpen}
                      onOpenChange={setPriorityMenuOpen}
                    >
                      <div
                        className="border-input flex h-[34px] cursor-pointer items-center gap-1 rounded-md border px-1"
                        onClick={(event) => {
                          const target = event.target;
                          if (
                            target instanceof Element &&
                            target.closest("button")
                          )
                            return;
                          setPriorityMenuOpen(true);
                        }}
                      >
                        <span className="text-foreground px-2 text-sm whitespace-nowrap">
                          Priority
                        </span>
                        {selectedPriority && (
                          <span
                            aria-hidden="true"
                            className="bg-border h-5 w-px shrink-0"
                          />
                        )}
                        {selectedPriority && (
                          <Badge
                            variant={priorityVariant[selectedPriority]}
                            size="sm"
                            onClose={() => setSelectedPriority("")}
                          >
                            {priorityLabel[selectedPriority]}
                          </Badge>
                        )}
                        <DropdownMenuTrigger asChild>
                          <button
                            type="button"
                            aria-label="Priority filter"
                            className="focus-visible:ring-ring flex h-full shrink-0 items-center justify-center px-2 outline-none focus-visible:ring-2 focus-visible:ring-inset"
                          >
                            <ChevronDown className="text-muted-foreground size-3.5" />
                          </button>
                        </DropdownMenuTrigger>
                      </div>
                      <DropdownMenuContent align="start" className="min-w-36">
                        <DropdownMenuItem
                          onClick={() => setSelectedPriority("")}
                          className="cursor-pointer"
                        >
                          All priorities
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {ENCOUNTER_PRIORITIES.map((priority) => (
                          <DropdownMenuItem
                            key={priority}
                            onClick={() => setSelectedPriority(priority)}
                            className="cursor-pointer"
                          >
                            {priorityLabel[priority]}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.div>
                )}

                {enabledFilters.has("department") && selectedDepartment && (
                  <FixtureFilter
                    label="Department"
                    ariaLabel="Department filter"
                    className={filtersCollapsed ? "w-fit order-4" : undefined}
                    value={selectedDepartment}
                    options={ENCOUNTER_DEPARTMENTS}
                    open={departmentMenuOpen}
                    clearLabel="All departments"
                    badgeVariant="destructive"
                    onOpenChange={setDepartmentMenuOpen}
                    onValueChange={setSelectedDepartment}
                    onRemove={() => setFilterEnabled("department", false)}
                  />
                )}

                {enabledFilters.has("careTeam") && selectedCareTeam && (
                  <FixtureFilter
                    label="Care Team"
                    ariaLabel="Care Team filter"
                    className={filtersCollapsed ? "w-fit order-3" : undefined}
                    value={selectedCareTeam}
                    options={ENCOUNTER_CARE_TEAMS}
                    open={careTeamMenuOpen}
                    clearLabel="All care team members"
                    badgeVariant="info"
                    onOpenChange={setCareTeamMenuOpen}
                    onValueChange={setSelectedCareTeam}
                    onRemove={() => setFilterEnabled("careTeam", false)}
                  />
                )}

                {enabledFilters.has("tags") && selectedTags.length > 0 && (
                  <FixtureFilter
                    label="Tags"
                    ariaLabel="Tags filter"
                    className={filtersCollapsed ? "w-fit order-5" : undefined}
                    value={selectedTags}
                    options={ENCOUNTER_TAGS}
                    open={tagsMenuOpen}
                    clearLabel="All tags"
                    badgeVariant="neutral"
                    onOpenChange={setTagsMenuOpen}
                    onValuesChange={setSelectedTags}
                    onRemove={() => setFilterEnabled("tags", false)}
                  />
                )}

              </div>
            </div>

            <div className="flex items-center gap-2">
              {!hasAddedFilters && (
                <span aria-hidden="true" className="bg-border h-5 w-px shrink-0" />
              )}
            <DropdownMenu
              open={addFilterMenuOpen}
              onOpenChange={(open) => {
                setAddFilterMenuOpen(open);
                if (!open) setOpenFilterSubMenu(null);
              }}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="!text-foreground h-9 w-[121px] justify-start gap-2 !bg-transparent !shadow-none !inset-shadow-none md:h-9"
                >
                  <Plus aria-hidden="true" className="size-3.5" />
                  Add filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                side="bottom"
                sideOffset={4}
                className="min-w-52"
              >
                {FILTER_OPTIONS.map(({ key, label, icon: OptionIcon }) => {
                  return (
                    <DropdownMenuSub
                      key={key}
                      open={addFilterMenuOpen && openFilterSubMenu === key}
                      onOpenChange={(open) => {
                        if (open) {
                          setOpenFilterSubMenu(key);
                        } else {
                          setOpenFilterSubMenu((current) =>
                            current === key ? null : current
                          );
                        }
                      }}
                    >
                      <DropdownMenuSubTrigger
                        className="gap-2"
                        onClick={() => setOpenFilterSubMenu(key)}
                        onMouseEnter={() => setOpenFilterSubMenu(key)}
                      >
                        <OptionIcon
                          className="text-muted-foreground size-4"
                          aria-hidden="true"
                        />
                        {label}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="min-w-52">
                        {renderFilterOptions(key)}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            </div>

            {hasAddedFilters && (
              <motion.button
                layout
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ layout: { duration: 0.2, ease: "easeOut" } }}
                type="button"
                onClick={clearAllFilters}
                className="text-foreground focus-visible:ring-ring relative ml-auto flex h-10 items-center justify-center gap-1 pr-1.5 pl-3 text-sm font-semibold tracking-wide underline underline-offset-2 outline-none before:absolute before:top-1/2 before:left-0 before:h-5 before:w-px before:-translate-y-1/2 before:bg-border before:content-[''] focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <X aria-hidden="true" className="size-3.5" />
                Clear Filter
              </motion.button>
            )}
          </motion.div>
        </div>
      </motion.div>

      <Dialog open={customDateOpen} onOpenChange={setCustomDateOpen}>
        <DialogContent className="sm:max-w-fit">
          <DialogHeader>
            <DialogTitle>Custom date range</DialogTitle>
            <DialogDescription>
              Choose the start and end dates for this encounter list.
            </DialogDescription>
          </DialogHeader>
          <Calendar
            autoFocus
            mode="range"
            selected={customDateRange}
            onSelect={setCustomDateRange}
            className="mx-auto bg-transparent p-0"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setCustomDateOpen(false)}>
              Cancel
            </Button>
            <Button
              disabled={!customDateRange?.from || !customDateRange.to}
              onClick={() => {
                if (!customDateRange?.from || !customDateRange.to) return;

                const from = customDateRange.from;
                const to = customDateRange.to;
                setSelectedDateLabel(
                  from.toDateString() === to.toDateString()
                    ? format(from, "MMM d, yyyy")
                    : `${format(from, "MMM d")} - ${format(to, "MMM d, yyyy")}`
                );
                setCustomDateOpen(false);
              }}
            >
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <motion.div layout className="w-max">
        <Badge variant="violet" size="sm" className="w-max rounded-md">
          {filteredEncounters.length} Encounter
          {filteredEncounters.length === 1 ? "" : "s"}
        </Badge>
      </motion.div>

      <motion.div
        layout
        className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        {filteredEncounters.length === 0 ? (
          <Card className="col-span-full items-center justify-center border-dashed py-10 text-center">
            <div className="bg-muted mb-3 rounded-full p-3">
              <FolderOpen className="text-muted-foreground size-6" />
            </div>
            <h3 className="text-lg font-semibold">No encounters found</h3>
            <p className="text-muted-foreground text-sm">
              Try changing the search text or search mode.
            </p>
          </Card>
        ) : (
          filteredEncounters.map((encounter) => (
            <EncounterCard
              key={encounter.id}
              encounter={encounter}
              searchText={searchMode === "Patient's name" ? searchText : ""}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
}
