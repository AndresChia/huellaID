"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { RegisterPetForm } from "@/interfaces/form";
import {
  Box,
  Button,
  Container,
  Grid2,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Loading from "./loading";
import { QRCodeSVG } from "qrcode.react";

export default function ShowPet({ params }: any) {
  const router = useRouter();
  const t = useTranslations();
  const [pet, setPet] = useState<RegisterPetForm | null>(null);
  const ts = useTranslations("species");
  const bd = useTranslations("breeds.dog");
  const bc = useTranslations("breeds.cat");
  const unwrappedParams: any = use(params);

  useEffect(() => {
    const fetchPet = async () => {
      const petRepository = new FirestorePetRepository();
      try {
        const pet = await petRepository.getPet(unwrappedParams.id);
        if (pet) {
          setPet(pet);
        }
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    };
    fetchPet();
  }, [unwrappedParams.id]);

  if (!pet) {
    return <Loading />;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="text-primary"
        >
          {t("admin.pets.details.title")}
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Grid2 container spacing={3}>
            <Grid2
              container
              spacing={3}
              sx={{ mb: 3, width: "100%" }}
              component="div"
            >
              {pet.photo && (
                <Grid2
                  container
                  size={{ xs: 12, md: 6 }}
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                  }}
                >
                  <Image
                    width={200}
                    height={200}
                    src={pet.photo as string}
                    alt={pet.petName}
                    className="rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                </Grid2>
              )}
              <Grid2
                container
                size={{ xs: 12, md: 6 }}
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <QRCodeSVG
                    value={`${process.env.NEXT_PUBLIC_HUENDA_ID_URL}/pet/${unwrappedParams.id}`}
                    size={200}
                    level="H"
                    imageSettings={{
                      src: "/icon.png",
                      height: 50,
                      width: 60,
                      excavate: true,
                    }}
                  />
                  <Link
                    href={`${process.env.NEXT_PUBLIC_HUENDA_ID_URL}/pet/${unwrappedParams.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${process.env.NEXT_PUBLIC_HUENDA_ID_URL}/pet/${unwrappedParams.id}`}
                  </Link>
                </Box>
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                {t("common.basicInfo")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.petName")}
                  </Typography>
                  <Typography variant="body1">{pet.petName}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.species")}
                  </Typography>
                  <Typography variant="body1">{ts(pet.species)}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.breed")}
                  </Typography>
                  <Typography variant="body1">
                    {pet.species === "dog" ? bd(pet.breed) : bc(pet.breed)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.age")}
                  </Typography>
                  <Typography variant="body1">{pet.age}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.weight")}
                  </Typography>
                  <Typography variant="body1">{pet.weight}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.colorMarkings")}
                  </Typography>
                  <Typography variant="body1">{pet.colorMarkings}</Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                {t("common.ownerInfo")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.ownerName")}
                  </Typography>
                  <Typography variant="body1">{pet.ownerName}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.phone")}
                  </Typography>
                  <Typography variant="body1">
                    {`${pet.countryCode} ${pet.phoneNumber}`}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.email")}
                  </Typography>
                  <Typography variant="body1">{pet.email}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("common.address")}
                  </Typography>
                  <Typography variant="body1">{pet.address}</Typography>
                </Box>
              </Box>
            </Grid2>
            {pet.requireMedicalInfo && (
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
                  {pet.showAllergies && pet.allergies.length > 0 && (
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle1" color="text.secondary">
                        {t("common.allergies")}
                      </Typography>
                      <Typography variant="body1">
                        {pet.allergies.join(", ")}
                      </Typography>
                    </Grid2>
                  )}
                  {pet.showMedications && pet.medications.length > 0 && (
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle1" color="text.secondary">
                        {t("common.medications")}
                      </Typography>
                      <Typography variant="body1">
                        {pet.medications.join(", ")}
                      </Typography>
                    </Grid2>
                  )}
                  {pet.showConditions && pet.conditions.length > 0 && (
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle1" color="text.secondary">
                        {t("common.conditions")}
                      </Typography>
                      <Typography variant="body1">
                        {pet.conditions.join(", ")}
                      </Typography>
                    </Grid2>
                  )}
                  {pet.showVaccinations && pet.vaccinations.length > 0 && (
                    <Grid2 size={12}>
                      <Typography variant="subtitle1" color="text.secondary">
                        {t("common.vaccinations")}
                      </Typography>
                      {pet.vaccinations.map((vaccination, index) => (
                        <Typography key={index} variant="body1">
                          {`${vaccination.name}: ${vaccination.lastApplied}`}
                        </Typography>
                      ))}
                    </Grid2>
                  )}
                </Grid2>
              </Grid2>
            )}
            {pet.requireVeterinaryInfo && (
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
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle1" color="text.secondary">
                      {t("common.veterinaryName")}
                    </Typography>
                    <Typography variant="body1">
                      {pet.veterinaryName}
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle1" color="text.secondary">
                      {t("common.veterinaryPhone")}
                    </Typography>
                    <Typography variant="body1">
                      {pet.veterinaryPhone}
                    </Typography>
                  </Grid2>
                  <Grid2 size={12}>
                    <Typography variant="subtitle1" color="text.secondary">
                      {t("common.veterinaryAddress")}
                    </Typography>
                    <Typography variant="body1">
                      {pet.veterinaryAddress}
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            )}
          </Grid2>
        </Paper>
        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push(`/admin/pet/edit/${params.id}`)}
          >
            {t("admin.pets.actions.edit")}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => router.push("/admin")}
          >
            {t("admin.pets.actions.back")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
