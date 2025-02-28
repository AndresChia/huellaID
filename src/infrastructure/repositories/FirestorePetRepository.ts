import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../firebase/config";
import { RegisterPetForm } from "@/interfaces/form";
import { PetRepository } from "@/interfaces/repositories/PetRepository";

export class FirestorePetRepository implements PetRepository {
  private readonly collectionName = "pets";
  private readonly storage = getStorage();

  async savePet(pet: RegisterPetForm): Promise<string> {
    const petsRef = collection(db, this.collectionName);
    const newPetRef = doc(petsRef);
    const petId = newPetRef.id;

    let photoUrl = "";
    if (pet.photo) {
      const storageRef = ref(this.storage, `pets/${petId}/photo`);
      await uploadBytes(storageRef, pet.photo);
      photoUrl = await getDownloadURL(storageRef);
    }

    const petData = {
      ...pet,
      photo: photoUrl,
    };

    await setDoc(newPetRef, petData);
    return petId;
  }

  async getPet(id: string): Promise<RegisterPetForm> {
    const petDoc = await getDoc(doc(db, this.collectionName, id));
    if (!petDoc.exists()) {
      throw new Error("Pet not found");
    }
    return petDoc.data() as RegisterPetForm;
  }

  async updatePet(id: string, pet: RegisterPetForm): Promise<void> {
    const petRef = doc(db, this.collectionName, id);
    let photoUrl = "";

    if (pet.photo instanceof File) {
      const storageRef = ref(this.storage, `pets/${id}/photo`);
      await uploadBytes(storageRef, pet.photo);
      photoUrl = await getDownloadURL(storageRef);
    }

    const petData = {
      ...pet,
      photo: photoUrl || pet.photo,
    };

    await updateDoc(petRef, petData);
  }

  async deletePet(id: string): Promise<void> {
    await deleteDoc(doc(db, this.collectionName, id));
  }

  async getAllPets(): Promise<RegisterPetForm[]> {
    const querySnapshot = await getDocs(collection(db, this.collectionName));
    return querySnapshot.docs.map((doc) => doc.data() as RegisterPetForm);
  }
}
