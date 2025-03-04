"use client";

import { useState, useEffect, useMemo } from "react";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { RegisterPetForm } from "@/interfaces/form";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function PetsTable() {
  const [pets, setPets] = useState<RegisterPetForm[]>([]);
  const router = useRouter();
  const t = useTranslations();
  const bd = useTranslations("breeds.dog");
  const bc = useTranslations("breeds.cat");
  const ts = useTranslations("species");

  const petRepository = useMemo(() => new FirestorePetRepository(), []);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = await petRepository.getAllPets();
        setPets(petsData);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    fetchPets();
  }, [petRepository]);

  const handleView = (id: string) => {
    router.push(`/admin/pet/show/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/pet/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const pet = pets.find((pet) => pet.id === id);
      if (pet) {
        await petRepository.updatePet(id, { ...pet, disabled: true });
        setPets(
          pets.map((pet) => (pet.id === id ? { ...pet, disabled: true } : pet))
        );
      }
    } catch (error) {
      console.error("Error disabling pet:", error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("admin.pets.table.name")}</TableCell>
            <TableCell>{t("admin.pets.table.species")}</TableCell>
            <TableCell>{t("admin.pets.table.breed")}</TableCell>
            <TableCell>{t("admin.pets.table.age")}</TableCell>
            <TableCell>{t("admin.pets.table.owner")}</TableCell>
            <TableCell>{t("admin.pets.table.phone")}</TableCell>
            <TableCell>{t("admin.pets.table.actions")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.map((pet) => (
            <TableRow key={pet.id}>
              <TableCell>{pet.petName}</TableCell>
              <TableCell>{ts(pet.species)}</TableCell>
              <TableCell>
                {pet.species === "dog" ? bd(pet.breed) : bc(pet.breed)}
              </TableCell>
              <TableCell>{pet.age}</TableCell>
              <TableCell>{pet.ownerName}</TableCell>
              <TableCell>{`${pet.countryCode} ${pet.phoneNumber}`}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleView(pet.id)}
                  color="primary"
                  title={t("admin.pets.actions.view")}
                >
                  <Visibility />
                </IconButton>
                <IconButton
                  onClick={() => handleEdit(pet.id)}
                  color="primary"
                  title={t("admin.pets.actions.edit")}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(pet.id)}
                  color="error"
                  title={t("admin.pets.actions.delete")}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
