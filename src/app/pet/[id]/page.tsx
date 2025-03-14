/* eslint-disable @typescript-eslint/no-explicit-any */
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { notFound } from "next/navigation";
import PetHeader from "@/app/pet/[id]/components/PetHeader";
import PetInfo from "@/app/pet/[id]/components/PetInfo";
import MedicalHistory from "@/app/pet/[id]/components/MedicalHistory";
import ActionButtons from "@/app/pet/[id]/components/ActionButtons";
import ModalActivation from "@/app/pet/[id]/components/ModalActivation";

export default async function PetPage({ params }: any) {
  try {
    const { id } = await params;
    const petRepository = new FirestorePetRepository();
    const pet = await petRepository.getPet(id);

    const headerProps = {
      name: pet.petName,
      species: pet.species,
      photo: pet.photo as string,
    };

    const infoProps = {
      age: pet.age,
      weight: pet.weight,
      breed: pet.breed,
      colorMarkings: pet.colorMarkings,
      species: pet.species,
    };

    const medicalProps = {
      allergies: pet.showAllergies ? pet.allergies : [],
      medications: pet.showMedications ? pet.medications : [],
      conditions: pet.showConditions ? pet.conditions : [],
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

    const actionButtonsProps = {
      phone: pet.phoneNumber,
      address: pet.address,
      countryCode: pet.countryCode,
    };

    const shouldShowMedicalHistory = (pet: any) => {
      return (
        (pet.showAllergies && pet.allergies?.length > 0) ||
        (pet.showMedications && pet.medications?.length > 0) ||
        (pet.showConditions && pet.conditions?.length > 0) ||
        (pet.showVaccinations && pet.vaccinations?.length > 0) ||
        (pet.requireVeterinaryInfo && pet.veterinaryName)
      );
    };

    return (
      <>
        <ModalActivation isOpen={pet.activate} />

        <main className="flex min-h-screen flex-col items-center bg-primary-light pb-4">
          <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-3xl">
            <PetHeader {...headerProps} />
            <div className="grid grid-cols-1 gap-8 mt-8">
              <div className="lg:col-span-1">
                <PetInfo {...infoProps} />
                <ActionButtons {...actionButtonsProps} />
              </div>
              <div className="lg:col-span-2">
                {shouldShowMedicalHistory(pet) && (
                  <MedicalHistory {...medicalProps} />
                )}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching pet:", error);
    notFound();
  }
}
