import { Dayjs } from "dayjs";

export interface RegisterPetForm {
  id: string;
  petName: string;
  species: string;
  breed: string;
  birthDate: string;
  age: number;
  weight: number;
  colorMarkings: string;
  photo: File | string;
  requireMedicalInfo: boolean;
  showAllergies: boolean;
  allergies: string[];
  showMedications: boolean;
  medications: string[];
  showConditions: boolean;
  conditions: string[];
  showVaccinations: boolean;
  vaccinations: Vaccination[];
  requireVeterinaryInfo: boolean;
  veterinaryName: string;
  veterinaryPhone: string;
  veterinaryAddress: string;
  ownerName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  address: string;
  requestTag: boolean;
  tagType: string;
  activate: boolean;
  disabled: boolean;
}

export interface Vaccination {
  name: string;
  lastApplied: Dayjs | null | string;
}
