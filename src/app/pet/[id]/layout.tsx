import { Metadata } from "next";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";

interface PetLayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PetLayoutProps): Promise<Metadata> {
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
        images: pet.photo ? [pet.photo] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: `${pet.petName} - HuellaID`,
        description: `Conoce a ${pet.petName} en HuellaID, la plataforma para mascotas`,
        images: pet.photo ? [pet.photo] : [],
      },
    };
  } catch {
    return {
      title: "Mascota - HuellaID",
      description: "Información detallada de la mascota en HuellaID",
    };
  }
}

export default function PetLayout({ children }: PetLayoutProps) {
  return <>{children}</>;
}
