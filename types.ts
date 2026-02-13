export type VisitType = string; // Supporting A1, B1, B1 cip, etc.

export interface ProtocolDetail {
  code: VisitType;
  title: string;
  description: string;
  exams: string[];
}

export interface Sport {
  id: string;
  name: string;
  category: string;
  visitType: VisitType;
  validityYears: number;
  minAgeM: number | null; // null means no limit or not specified
  maxAgeM: number | null; // null means 's.l.' (senza limiti)
  minAgeF: number | null;
  maxAgeF: number | null;
  ageType: string; // e.g. 'Anagrafica', 'Solare', 'Sportiva'
  seasonPeriod?: string;
  notes?: string;
}