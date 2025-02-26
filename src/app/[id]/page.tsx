import PetHeader from "@/components/pet/PetHeader";
import PetInfo from "@/components/pet/PetInfo";
import ActionButtons from "@/components/pet/ActionButtons";
import MedicalHistory from "@/components/pet/MedicalHistory";
import { getPetData } from "@/utils/pets";

interface PageProps {
  params: { id: string };
}

export default async function PetPage({ params }: PageProps) {
  const { id } = await params;
  const pet = await getPetData(id);

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <PetHeader pet={pet} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1">
            <PetInfo pet={pet} />
            <ActionButtons />
          </div>
          <div className="lg:col-span-2">
            <MedicalHistory petId={pet.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
