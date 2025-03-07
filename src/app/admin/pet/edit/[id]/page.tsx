/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, use } from "react";
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
import { useTranslations } from "next-intl";
import { defaultPet } from "@/utils/pet";
export default function EditPet({ params }: any) {
  const router = useRouter();
  const t = useTranslations();
  const unwrappedParams: any = use(params);
  const [formData, setFormData] = useState<RegisterPetForm>(defaultPet);

  useEffect(() => {
    const fetchPet = async () => {
      const petRepository = new FirestorePetRepository();
      try {
        const pet = await petRepository.getPet(unwrappedParams.id);
        if (pet) {
          setFormData(pet);
        }
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    };
    fetchPet();
  }, [unwrappedParams.id]);

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
      await petRepository.updatePet(unwrappedParams.id, formData);
      router.push("/admin");
    } catch (error) {
      console.error("Error updating pet:", error);
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
          {t("admin.pets.details.edit")}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.petName")}
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.species")}
                name="species"
                value={formData.species}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.breed")}
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.age")}
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.weight")}
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.colorMarkings")}
                name="colorMarkings"
                value={formData.colorMarkings}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("common.ownerName")}
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label={t("common.countryCode")}
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label={t("common.phone")}
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
                {t("admin.pets.details.update")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
