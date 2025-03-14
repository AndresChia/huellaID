/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const { id } = await params;
    const petRepository = new FirestorePetRepository();
    const pet = await petRepository.getPet(id);

    return {
      title: `${pet.petName}`,
      description: `Conoce a ${pet.petName} en HuellaID, la plataforma para mascotas`,
      openGraph: {
        title: `${pet.petName} - HuellaID`,
        description: `Conoce a ${pet.petName} en HuellaID, la plataforma para mascotas`,
        images: (pet.photo as string) ? [pet.photo as string] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: `${pet.petName} - HuellaID`,
        description: `Conoce a ${pet.petName} en HuellaID, la plataforma para mascotas`,
        images: (pet.photo as string) ? [pet.photo as string] : [],
      },
    };
  } catch {
    return {
      title: "Mascota - HuellaID",
      description: "Información detallada de la mascota en HuellaID",
    };
  }
}

export default function PetLayout({ children }: any) {
  return <>{children}</>;
}
