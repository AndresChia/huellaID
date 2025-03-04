"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { RegisterPetForm } from "@/interfaces/form";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function AddPet() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterPetForm>({
    id: "",
    petName: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    colorMarkings: "",
    photo: "",
    requireMedicalInfo: false,
    showAllergies: false,
    allergies: [],
    showMedications: false,
    medications: [],
    showConditions: false,
    conditions: [],
    showVaccinations: false,
    vaccinations: [],
    requireVeterinaryInfo: false,
    veterinaryName: "",
    veterinaryPhone: "",
    veterinaryAddress: "",
    ownerName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    address: "",
    requestTag: false,
    tagType: "",
    activate: false,
    disabled: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const petRepository = new FirestorePetRepository();
    try {
      await petRepository.savePet(formData);
      router.push("/admin");
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Agregar Nueva Mascota
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre de la Mascota"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Especie"
                name="species"
                value={formData.species}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Raza"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Edad"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Peso"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Color/Marcas"
                name="colorMarkings"
                value={formData.colorMarkings}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre del Dueño"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Código País"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="Número de Teléfono"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Guardar Mascota
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
