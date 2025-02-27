export interface PetRegistrationForm {
  petName: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  colorMarkings: string;
  medicalInformation: string;
  ownerName: string;
  phoneNumber: string;
  email: string;
  address: string;
  requestTag: boolean;
  tagType: string;
}

export type TagType = "basic" | "premium" | "deluxe";
