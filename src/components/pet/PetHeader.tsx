import Image from "next/image";
import { PetData } from "@/utils/pets";

interface PetHeaderProps {
  pet: PetData;
}

export default function PetHeader({ pet }: PetHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600">{pet.species}</p>
        <h1 className="text-3xl font-bold text-primary">{pet.name}</h1>
      </div>
      <div className="w-full h-48 md:h-96 bg-primary/10 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={pet.image}
          alt={pet.name}
          width={400}
          height={200}
          className="w-full h-full object-cover md:object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
