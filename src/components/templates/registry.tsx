import React from "react";

import { DentalChartTemplate } from "./dental-chart";
import { EncounterListTemplate } from "./encounter-list";
import { MedicationRequestTemplate } from "./medication-request";

export interface TemplateDef {
  /** Stable id used as the URL hash, e.g. `template-medication-request`. */
  id: string;
  title: string;
  description: string;
  showDescription?: boolean;
  showSource?: boolean;
  /** Path to the source file in the repo. */
  source: string;
  component: React.ComponentType;
}

export const TEMPLATES: TemplateDef[] = [
  {
    id: "template-encounter-list",
    title: "Encounter List",
    description:
      "A standalone Encounter page copy with static fixture data, local search behavior, and no backend or authentication dependencies.",
    showDescription: false,
    showSource: false,
    source: "src/components/templates/encounter-list.tsx",
    component: EncounterListTemplate,
  },
  {
    id: "template-dental-chart",
    title: "Dental Chart",
    description:
      "An interactive odontogram for recording tooth and surface findings across visits, dentitions, and treatment statuses.",
    source: "src/components/templates/dental-chart.tsx",
    component: DentalChartTemplate,
  },
  {
    id: "template-medication-request",
    title: "Medication Request",
    description:
      "An editable prescription grid built on the Data Table organism. Supports tapering doses, per-row notes, instructions, templates, and medication history.",
    source: "src/components/templates/medication-request.tsx",
    component: MedicationRequestTemplate,
  },
];

export function getTemplateById(id: string) {
  return TEMPLATES.find((template) => template.id === id);
}
