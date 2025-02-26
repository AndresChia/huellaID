interface PetData {
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

export const getPetData = (id: string) => {
  return {
    id,
    name: "Luna",
    species: "Perro",
    age: 3,
    description:
      "Luna es una perra muy cariñosa y juguetona. Le encanta correr y jugar con pelotas.",
    image:
      "https://cdn.pixabay.com/photo/2019/04/17/20/18/golden-retriever-4135265_1280.jpg",
    owner: "Juan Pérez",
    phone: "+34 912 345 678",
    address: "Calle Principal 123, Madrid",
  };
};

export type { PetData };
