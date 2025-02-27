/* eslint-disable @typescript-eslint/no-explicit-any */
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { notFound } from "next/navigation";
import PetHeader from "@/app/pet/[id]/components/PetHeader";
import PetInfo from "@/app/pet/[id]/components/PetInfo";
import MedicalHistory from "@/app/pet/[id]/components/MedicalHistory";
import ActionButtons from "@/app/pet/[id]/components/ActionButtons";

export default async function PetPage({ params }: any) {
  try {
    const petRepository = new FirestorePetRepository();
    const pet = await petRepository.getPet(params.id);

    const headerProps = {
      name: pet.petName,
      species: pet.species,
    };

    const infoProps = {
      age: pet.age,
      weight: pet.weight,
      breed: pet.breed,
      colorMarkings: pet.colorMarkings,
    };

    const medicalProps = {
      allergies: pet.showAllergies ? [pet.allergies || ""] : [],
      medications: pet.showMedications ? [pet.medications || ""] : [],
      conditions: pet.showConditions ? [pet.conditions || ""] : [],
      vaccinations: pet.vaccinations || [],
      requireVeterinaryInfo: pet.requireVeterinaryInfo,
      showAllergies: pet.showAllergies,
      showConditions: pet.showConditions,
      showMedications: pet.showMedications,
      showVaccinations: pet.showVaccinations,
      veterinaryContact: {
        name: pet.veterinaryName || "",
        phone: pet.veterinaryPhone || "",
        address: pet.veterinaryAddress || "",
      },
    };

    return (
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <PetHeader {...headerProps} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-1">
              <PetInfo {...infoProps} />
              <ActionButtons />
            </div>
            <div className="lg:col-span-2">
              <MedicalHistory {...medicalProps} />
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching pet:", error);
    notFound();
  }
}
