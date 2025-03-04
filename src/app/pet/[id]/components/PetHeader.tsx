"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface PetHeaderProps {
  name: string;
  species: string;
  photo: string;
}

export default function PetHeader({ name, species, photo }: PetHeaderProps) {
  const t = useTranslations("species");
  const defaultImages = {
    cat: "/default-cat.jpg",
    dog: "/default-dog.jpg",
  };
  const [imgSrc, setImgSrc] = useState(
    photo || defaultImages[species as keyof typeof defaultImages]
  );

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-gray-600 capitalize">{t(species)}</p>
        <h1 className="text-3xl font-bold text-primary capitalize">{name}</h1>
      </div>
      <div className="w-full h-48 md:h-96 bg-primary/10 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover md:object-contain rounded-lg"
          onError={() =>
            setImgSrc(defaultImages[species as keyof typeof defaultImages])
          }
        />
      </div>
    </div>
  );
}
