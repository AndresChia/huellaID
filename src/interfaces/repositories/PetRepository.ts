import { RegisterPetForm } from "../form";

export interface PetRepository {
  savePet(pet: RegisterPetForm): Promise<string>;
  getPet(id: string): Promise<RegisterPetForm>;
  updatePet(id: string, pet: RegisterPetForm): Promise<void>;
  deletePet(id: string): Promise<void>;
  getAllPets(): Promise<RegisterPetForm[]>;
}
