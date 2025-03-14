/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { RegisterPetForm } from "@/interfaces/form";
import { PetRepository } from "@/interfaces/repositories/PetRepository";

export class FirestorePetRepository implements PetRepository {
  private readonly collectionName = "pets";

  async savePet(pet: RegisterPetForm): Promise<string> {
    const petsRef = collection(db, this.collectionName);
    const newPetRef = doc(petsRef);
    const petId = newPetRef.id;

    const petData = {
      ...pet,
      id: petId,
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
    await updateDoc(petRef, pet as any);
  }

  async deletePet(id: string): Promise<void> {
    await deleteDoc(doc(db, this.collectionName, id));
  }

  async getAllPets(): Promise<RegisterPetForm[]> {
    const querySnapshot = await getDocs(collection(db, this.collectionName));
    return querySnapshot.docs.map((doc) => doc.data() as RegisterPetForm);
  }
}
