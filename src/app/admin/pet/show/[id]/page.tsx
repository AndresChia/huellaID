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
                    src={pet.photo}
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
                    value={`https://huella-id.vercel.app/pet/${unwrappedParams.id}`}
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
                    href={`https://huella-id.vercel.app/pet/${unwrappedParams.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`https://huella-id.vercel.app/pet/${unwrappedParams.id}`}
                  </Link>
                </Box>
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.petName")}
              </Typography>
              <Typography variant="body1">{pet.petName}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.species")}
              </Typography>
              <Typography variant="body1">{ts(pet.species)}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.breed")}
              </Typography>
              <Typography variant="body1">
                {pet.species === "dog" ? bd(pet.breed) : bc(pet.breed)}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.age")}
              </Typography>
              <Typography variant="body1">{pet.age}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.weight")}
              </Typography>
              <Typography variant="body1">{pet.weight}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.colorMarkings")}
              </Typography>
              <Typography variant="body1">{pet.colorMarkings}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.ownerName")}
              </Typography>
              <Typography variant="body1">{pet.ownerName}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {t("common.phone")}
              </Typography>
              <Typography variant="body1">
                {`${pet.countryCode} ${pet.phoneNumber}`}
              </Typography>
            </Grid2>
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
