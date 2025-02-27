export interface PetData {
  id: string;
  name: string;
  species: string;
  age: number;
  description: string;
  image: string;
  owner: string;
  phone: string;
  address: string;
}

export interface PetInfoProps {
  pet: PetData;
}

export interface PetHeaderProps {
  pet: PetData;
}
