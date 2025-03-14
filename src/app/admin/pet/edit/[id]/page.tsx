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
  Grid2,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useTranslations } from "next-intl";
import { defaultPet } from "@/utils/pet";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import dayjs from "dayjs";
import { BREEDS } from "@/constants/pets";

export default function EditPet({ params }: any) {
  const router = useRouter();
  const t = useTranslations();
  const ts = useTranslations("species");
  const bd = useTranslations("breeds.dog");
  const bc = useTranslations("breeds.cat");
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

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleDateChange = (date: dayjs.Dayjs | null, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: date ? date.format("YYYY-MM-DD") : "",
    }));
  };

  const handleVaccinationChange = (
    index: number,
    field: string,
    value: any
  ) => {
    setFormData((prev) => {
      const newVaccinations = [...prev.vaccinations];
      newVaccinations[index] = {
        ...newVaccinations[index],
        [field]: value,
      };
      return { ...prev, vaccinations: newVaccinations };
    });
  };

  const addVaccination = () => {
    setFormData((prev) => ({
      ...prev,
      vaccinations: [...prev.vaccinations, { name: "", lastApplied: null }],
    }));
  };

  const removeVaccination = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      vaccinations: prev.vaccinations.filter((_, i) => i !== index),
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
    <Container maxWidth="md">
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
          <Grid2 container spacing={3}>
            {/* Sección de Información Básica */}
            <Grid2 size={12}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mt: 2 }}
              >
                {t("common.basicInfo")}
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label={t("common.petName")}
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>{t("common.species")}</InputLabel>
                    <Select
                      name="species"
                      value={formData.species}
                      onChange={handleChange}
                      label={t("common.species")}
                    >
                      <MenuItem value="dog">{ts("dog")}</MenuItem>
                      <MenuItem value="cat">{ts("cat")}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>{t("common.breed")}</InputLabel>
                    <Select
                      name="breed"
                      value={formData.breed}
                      onChange={handleChange}
                      label={t("common.breed")}
                    >
                      {formData.species &&
                        BREEDS[formData.species as keyof typeof BREEDS].map(
                          (breed) => (
                            <MenuItem key={breed} value={breed}>
                              {formData.species === "dog"
                                ? bd(breed)
                                : bc(breed)}
                            </MenuItem>
                          )
                        )}
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <DatePicker
                    label={t("common.birthDate")}
                    value={dayjs(formData.birthDate)}
                    onChange={(date) => handleDateChange(date, "birthDate")}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="number"
                    label={t("common.age")}
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="number"
                    label={t("common.weight")}
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label={t("common.colorMarkings")}
                    name="colorMarkings"
                    value={formData.colorMarkings}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
              </Grid2>
            </Grid2>

            {/* Sección de Información del Propietario */}
            <Grid2 size={12}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mt: 3 }}
              >
                {t("common.ownerInfo")}
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <TextField
                    fullWidth
                    label={t("common.ownerName")}
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label={t("common.countryCode")}
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 8 }}>
                  <TextField
                    fullWidth
                    label={t("common.phone")}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label={t("common.email")}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    fullWidth
                    label={t("common.address")}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Grid2>
              </Grid2>
            </Grid2>

            {/* Sección de Información Médica */}
            <Grid2 size={12}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mt: 3 }}
              >
                {t("common.medicalInfo")}
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <FormControlLabel
                    className="text-primary"
                    control={
                      <Switch
                        checked={formData.requireMedicalInfo}
                        onChange={handleChange}
                        name="requireMedicalInfo"
                      />
                    }
                    label={t("common.requireMedicalInfo")}
                  />
                </Grid2>

                {formData.requireMedicalInfo && (
                  <>
                    <Grid2 size={12}>
                      <FormControlLabel
                        className="text-primary"
                        control={
                          <Switch
                            checked={formData.showAllergies}
                            onChange={handleChange}
                            name="showAllergies"
                          />
                        }
                        label={t("common.showAllergies")}
                      />
                      {formData.showAllergies && (
                        <TextField
                          fullWidth
                          multiline
                          rows={2}
                          label={t("common.allergies")}
                          name="allergies"
                          value={formData.allergies.join(", ")}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              allergies: e.target.value
                                .split(",")
                                .map((item) => item.trim()),
                            }))
                          }
                        />
                      )}
                    </Grid2>

                    <Grid2 size={12}>
                      <FormControlLabel
                        className="text-primary"
                        control={
                          <Switch
                            checked={formData.showMedications}
                            onChange={handleChange}
                            name="showMedications"
                          />
                        }
                        label={t("common.showMedications")}
                      />
                      {formData.showMedications && (
                        <TextField
                          fullWidth
                          multiline
                          rows={2}
                          label={t("common.medications")}
                          name="medications"
                          value={formData.medications.join(", ")}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              medications: e.target.value
                                .split(",")
                                .map((item) => item.trim()),
                            }))
                          }
                        />
                      )}
                    </Grid2>

                    <Grid2 size={12}>
                      <FormControlLabel
                        className="text-primary"
                        control={
                          <Switch
                            checked={formData.showConditions}
                            onChange={handleChange}
                            name="showConditions"
                          />
                        }
                        label={t("common.showConditions")}
                      />
                      {formData.showConditions && (
                        <TextField
                          fullWidth
                          multiline
                          rows={2}
                          label={t("common.conditions")}
                          name="conditions"
                          value={formData.conditions.join(", ")}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              conditions: e.target.value
                                .split(",")
                                .map((item) => item.trim()),
                            }))
                          }
                        />
                      )}
                    </Grid2>

                    <Grid2 size={12}>
                      <FormControlLabel
                        className="text-primary"
                        control={
                          <Switch
                            checked={formData.showVaccinations}
                            onChange={handleChange}
                            name="showVaccinations"
                          />
                        }
                        label={t("common.showVaccinations")}
                      />
                      {formData.showVaccinations && (
                        <Box sx={{ mt: 2 }}>
                          {formData.vaccinations.map((vaccination, index) => (
                            <Grid2
                              container
                              spacing={2}
                              key={index}
                              sx={{ mb: 2 }}
                            >
                              <Grid2 size={{ xs: 12, sm: 5 }}>
                                <TextField
                                  fullWidth
                                  label={t("common.vaccinationName")}
                                  value={vaccination.name}
                                  onChange={(e) =>
                                    handleVaccinationChange(
                                      index,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                />
                              </Grid2>
                              <Grid2 size={{ xs: 12, sm: 5 }}>
                                <DatePicker
                                  label={t("common.lastApplied")}
                                  value={dayjs(vaccination.lastApplied)}
                                  onChange={(date) =>
                                    handleVaccinationChange(
                                      index,
                                      "lastApplied",
                                      date
                                    )
                                  }
                                  slotProps={{ textField: { fullWidth: true } }}
                                />
                              </Grid2>
                              <Grid2 size={{ xs: 12, sm: 2 }}>
                                <IconButton
                                  onClick={() => removeVaccination(index)}
                                  color="error"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Grid2>
                            </Grid2>
                          ))}
                          <Button
                            startIcon={<AddIcon />}
                            onClick={addVaccination}
                            variant="outlined"
                            sx={{ mt: 1 }}
                          >
                            {t("petRegister.buttons.addVaccination")}
                          </Button>
                        </Box>
                      )}
                    </Grid2>
                  </>
                )}
              </Grid2>
            </Grid2>

            {/* Sección de Información Veterinaria */}
            <Grid2 size={12}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mt: 3 }}
              >
                {t("common.veterinaryInfo")}
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <FormControlLabel
                    className="text-primary"
                    control={
                      <Switch
                        checked={formData.requireVeterinaryInfo}
                        onChange={handleChange}
                        name="requireVeterinaryInfo"
                      />
                    }
                    label={t("common.requireVeterinaryInfo")}
                  />
                </Grid2>

                {formData.requireVeterinaryInfo && (
                  <>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t("common.veterinaryName")}
                        name="veterinaryName"
                        value={formData.veterinaryName}
                        onChange={handleChange}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label={t("common.veterinaryPhone")}
                        name="veterinaryPhone"
                        value={formData.veterinaryPhone}
                        onChange={handleChange}
                      />
                    </Grid2>
                    <Grid2 size={12}>
                      <TextField
                        fullWidth
                        label={t("common.veterinaryAddress")}
                        name="veterinaryAddress"
                        value={formData.veterinaryAddress}
                        onChange={handleChange}
                      />
                    </Grid2>
                  </>
                )}
              </Grid2>
            </Grid2>

            {/* Sección de Tag */}
            <Grid2 size={12}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mt: 3 }}
              >
                {t("common.requestTag")}
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <FormControlLabel
                    className="text-primary"
                    control={
                      <Switch
                        checked={formData.requestTag}
                        onChange={handleChange}
                        name="requestTag"
                      />
                    }
                    label={t("common.requestTag")}
                  />
                </Grid2>
                {formData.requestTag && (
                  <Grid2 size={12}>
                    <FormControl fullWidth>
                      <InputLabel>{t("common.tagType")}</InputLabel>
                      <Select
                        name="tagType"
                        value={formData.tagType}
                        onChange={handleChange}
                        label={t("common.tagType")}
                      >
                        <MenuItem value="basic">
                          {t("petRegister.tagRequest.basic")}
                        </MenuItem>
                        <MenuItem value="premium">
                          {t("petRegister.tagRequest.premium")}
                        </MenuItem>
                        <MenuItem value="deluxe">
                          {t("petRegister.tagRequest.deluxe")}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid2>
                )}
              </Grid2>
            </Grid2>

            {/* Sección de Control de Registro */}
            <Grid2 size={12}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mt: 3 }}
              >
                {t("common.registrationControl")}
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <Box sx={{ mb: 2 }}>
                    <FormControlLabel
                      className="text-primary"
                      control={
                        <Switch
                          checked={formData.activate}
                          onChange={handleChange}
                          name="activate"
                        />
                      }
                      label={t("common.activate")}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                    >
                      {t("common.activateDescription")}
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={12}>
                  <Box>
                    <FormControlLabel
                      className="text-primary"
                      control={
                        <Switch
                          checked={formData.disabled}
                          onChange={handleChange}
                          name="disabled"
                        />
                      }
                      label={t("common.disabled")}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                    >
                      {t("common.disabledDescription")}
                    </Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Grid2>

            <Grid2 size={12}>
              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {t("admin.pets.details.update")}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => router.push("/admin")}
                >
                  {t("common.cancel")}
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Container>
  );
}
