"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { RegisterPetForm } from "@/interfaces/form";
import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { defaultPet } from "@/utils/pet";
import { useTranslations } from "next-intl";
export default function AddPet() {
  const router = useRouter();
  const t = useTranslations();
  const [formData, setFormData] = useState<RegisterPetForm>(defaultPet);

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
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="text-primary"
        >
          {t("admin.pets.add.title")}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Nombre de la Mascota"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Especie"
                name="species"
                value={formData.species}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Raza"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Edad"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Peso"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Color/Marcas"
                name="colorMarkings"
                value={formData.colorMarkings}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Nombre del Dueño"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Código País"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 8 }}>
              <TextField
                fullWidth
                label="Número de Teléfono"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                {t("admin.pets.add.save")}
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Container>
  );
}
