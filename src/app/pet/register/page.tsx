"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RegisterPetForm } from "@/interfaces/form";
import { FirestorePetRepository } from "@/infrastructure/repositories/FirestorePetRepository";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  PetData,
  ContactInfo,
  MedicalInfo,
  VeterinaryInfo,
  TagRequest,
} from "./components";

const initialValues: RegisterPetForm = {
  petName: "",
  species: "",
  breed: "",
  age: "",
  weight: "",
  colorMarkings: "",
  photo: "",
  requireMedicalInfo: false,
  showAllergies: false,
  allergies: "",
  showMedications: false,
  medications: "",
  showConditions: false,
  conditions: "",
  showVaccinations: false,
  vaccinations: [],
  requireVeterinaryInfo: false,
  veterinaryName: "",
  veterinaryPhone: "",
  veterinaryAddress: "",
  ownerName: "",
  countryCode: "+57",
  phoneNumber: "",
  email: "",
  address: "",
  requestTag: false,
  tagType: "",
  activate: false,
};

export default function PetRegister() {
  const c = useTranslations("common");
  const p = useTranslations("petRegister");
  const v = useTranslations("petRegister.validation");
  const router = useRouter();

  const validationSchema = Yup.object<RegisterPetForm>({
    petName: Yup.string().required(v("petName")),
    species: Yup.string().required(v("species")),
    breed: Yup.string().required(v("breed")),
    age: Yup.number().required(v("age.required")).positive(v("age.positive")),
    weight: Yup.number()
      .required(v("weight.required"))
      .positive(v("weight.positive")),
    colorMarkings: Yup.string().required(v("colorMarkings")),
    photo: Yup.mixed().optional().nullable(),
    requireMedicalInfo: Yup.boolean(),
    allergies: Yup.string().when(["requireMedicalInfo", "showAllergies"], {
      is: (requireMedicalInfo: boolean, showAllergies: boolean) =>
        requireMedicalInfo && showAllergies,
      then: (schema) => schema.required(v("allergies")),
    }),
    medications: Yup.string().when(["requireMedicalInfo", "showMedications"], {
      is: (requireMedicalInfo: boolean, showMedications: boolean) =>
        requireMedicalInfo && showMedications,
      then: (schema) => schema.required(v("medications")),
    }),
    conditions: Yup.string().when(["requireMedicalInfo", "showConditions"], {
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
    debugger;
    try {
      const petRepository = new FirestorePetRepository();
      const petId = await petRepository.savePet(values);
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
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
            <h1 className="text-red-500">{JSON.stringify(errors)}</h1>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
