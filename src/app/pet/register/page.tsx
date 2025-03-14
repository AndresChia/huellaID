"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RegisterPetForm } from "@/interfaces/form";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/services/cloudinary";
import {
  PetData,
  ContactInfo,
  MedicalInfo,
  VeterinaryInfo,
  TagRequest,
} from "./components";
import { defaultPet } from "@/utils/pet";

export default function PetRegister() {
  const c = useTranslations("common");
  const p = useTranslations("petRegister");
  const v = useTranslations("petRegister.validation");
  const router = useRouter();

  const validationSchema = Yup.object<RegisterPetForm>({
    petName: Yup.string().required(v("petName")),
    species: Yup.string().required(v("species")),
    breed: Yup.string().required(v("breed")),
    birthDate: Yup.string().required(v("birthDate")),
    age: Yup.number().required(v("age.required")).positive(v("age.positive")),
    weight: Yup.number()
      .required(v("weight.required"))
      .positive(v("weight.positive")),
    colorMarkings: Yup.string().required(v("colorMarkings")),
    photo: Yup.mixed().optional().nullable(),
    requireMedicalInfo: Yup.boolean(),
    allergies: Yup.array().when(["requireMedicalInfo", "showAllergies"], {
      is: (requireMedicalInfo: boolean, showAllergies: boolean) =>
        requireMedicalInfo && showAllergies,
      then: (schema) => schema.required(v("allergies")),
    }),
    medications: Yup.array().when(["requireMedicalInfo", "showMedications"], {
      is: (requireMedicalInfo: boolean, showMedications: boolean) =>
        requireMedicalInfo && showMedications,
      then: (schema) => schema.required(v("medications")),
    }),
    conditions: Yup.array().when(["requireMedicalInfo", "showConditions"], {
      is: (requireMedicalInfo: boolean, showConditions: boolean) =>
        requireMedicalInfo && showConditions,
      then: (schema) => schema.required(v("conditions")),
    }),
    vaccinations: Yup.array().when(["requireMedicalInfo", "showVaccinations"], {
      is: (requireMedicalInfo: boolean, showVaccinations: boolean) =>
        requireMedicalInfo && showVaccinations,
      then: (schema) => schema.min(1, v("vaccinations.min")),
    }),
    requireVeterinaryInfo: Yup.boolean(),
    veterinaryName: Yup.string().when("requireVeterinaryInfo", {
      is: true,
      then: (schema) => schema.required(v("veterinaryName")),
    }),
    veterinaryPhone: Yup.string().when("requireVeterinaryInfo", {
      is: true,
      then: (schema) => schema.required(v("veterinaryPhone")),
    }),
    veterinaryAddress: Yup.string().when("requireVeterinaryInfo", {
      is: true,
      then: (schema) => schema.required(v("veterinaryAddress")),
    }),
    ownerName: Yup.string().required(v("ownerName")),
    countryCode: Yup.string().required(v("countryCode")),
    phoneNumber: Yup.string().required(v("phoneNumber")),
    email: Yup.string().email(v("email.invalid")).required(v("email.required")),
    address: Yup.string().required(v("address")),
    requestTag: Yup.boolean(),
    tagType: Yup.string().when("requestTag", {
      is: true,
      then: (schema) => schema.required(v("tagType")),
    }),
  });

  const handleSubmit = async (
    values: RegisterPetForm,
    { setSubmitting, resetForm }: FormikHelpers<RegisterPetForm>
  ) => {
    try {
      const petRepository = new FirestorePetRepository();
      let photoUrl = "";

      if (values.photo instanceof File) {
        photoUrl = await uploadImage(values.photo);
      }

      const petData = {
        ...values,
        photo: photoUrl,
        vaccinations: values.vaccinations.map((vaccination) => ({
          name: vaccination.name,
          lastApplied: vaccination.lastApplied?.toString() || "",
        })),
      };

      const petId = await petRepository.savePet(petData as RegisterPetForm);
      console.log(petId);
      setSubmitting(false);
      resetForm();
      router.push(`/pet/${petId}`);
    } catch (error) {
      console.error("Error saving pet:", error);
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        {p("title")}
      </Typography>
      <Typography mb={4} color="text.secondary">
        {p("subtitle")}
      </Typography>

      <Formik<RegisterPetForm>
        initialValues={defaultPet}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={3}>
              <Box sx={{ borderTop: 1, pt: 3 }}>
                <PetData />
              </Box>

              <Box sx={{ borderTop: 1, pt: 3 }}>
                <ContactInfo />
              </Box>
              <Box sx={{ borderTop: 1, pt: 3 }}>
                <MedicalInfo />
              </Box>

              <Box sx={{ borderTop: 1, pt: 3 }}>
                <VeterinaryInfo />
              </Box>
              <Box sx={{ borderTop: 1, pt: 3 }}>
                <TagRequest />
              </Box>

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined">{c("cancel")}</Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {p("buttons.saveAndRequest")}
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
