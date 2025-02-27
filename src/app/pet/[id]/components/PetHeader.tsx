import Image from "next/image";

interface PetHeaderProps {
  name: string;
  species: string;
}

export default function PetHeader({ name, species }: PetHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600">{species}</p>
        <h1 className="text-3xl font-bold text-primary">{name}</h1>
      </div>
      <div className="w-full h-48 md:h-96 bg-primary/10 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src="/images/pet-placeholder.png"
          alt={name}
          width={400}
          height={200}
          className="w-full h-full object-cover md:object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
