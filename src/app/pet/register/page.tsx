"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Stack,
  Typography,
  TextareaAutosize,
  Select,
  MenuItem,
  Switch,
  FormHelperText,
} from "@mui/material";
import { Formik, Form, Field, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { inputStyles, textAreaStyles } from "./styles";

interface FormValues {
  petName: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  colorMarkings: string;
  medicalInformation: string;
  ownerName: string;
  phoneNumber: string;
  email: string;
  address: string;
  requestQRTag: boolean;
  tagType: string;
}

const validationSchema = Yup.object({
  petName: Yup.string().required("Pet name is required"),
  species: Yup.string().required("Species is required"),
  breed: Yup.string().required("Breed is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive"),
  weight: Yup.number()
    .required("Weight is required")
    .positive("Weight must be positive"),
  colorMarkings: Yup.string().required("Color/Markings are required"),
  medicalInformation: Yup.string(),
  ownerName: Yup.string().required("Owner name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  requestQRTag: Yup.boolean(),
  tagType: Yup.string().when("requestQRTag", {
    is: true,
    then: (schema) => schema.required("Tag type is required"),
  }),
});

export default function PetRegister() {
  const initialValues = {
    petName: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    colorMarkings: "",
    medicalInformation: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    address: "",
    requestQRTag: false,
    tagType: "",
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      console.log(values);
      actions.setSubmitting(false);
    } catch {
      actions.setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Add New Pet
      </Typography>
      <Typography mb={4} color="text.secondary">
        Fill in your pet&apos;s details to create a profile and request a QR tag
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, errors, touched }) => (
          <Form>
            <Stack spacing={3}>
              <Field name="petName">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl error={!!(touched.petName && errors.petName)}>
                    <FormLabel>Pet Name</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter your pet's name"
                      error={!!(touched.petName && errors.petName)}
                      helperText={touched.petName && errors.petName}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="species">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl error={!!(touched.species && errors.species)}>
                    <FormLabel>Species</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Dog, Cat, Bird, etc."
                      error={!!(touched.species && errors.species)}
                      helperText={touched.species && errors.species}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="breed">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl error={!!(touched.breed && errors.breed)}>
                    <FormLabel>Breed</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter breed"
                      error={!!(touched.breed && errors.breed)}
                      helperText={touched.breed && errors.breed}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="age">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl error={!!(touched.age && errors.age)}>
                    <FormLabel>Age</FormLabel>
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      placeholder="Years"
                      error={!!(touched.age && errors.age)}
                      helperText={touched.age && errors.age}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="weight">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl error={!!(touched.weight && errors.weight)}>
                    <FormLabel>Weight</FormLabel>
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      placeholder="In kg"
                      error={!!(touched.weight && errors.weight)}
                      helperText={touched.weight && errors.weight}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="colorMarkings">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl
                    error={!!(touched.colorMarkings && errors.colorMarkings)}
                  >
                    <FormLabel>Color/Markings</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Describe your pet's appearance"
                      error={!!(touched.colorMarkings && errors.colorMarkings)}
                      helperText={touched.colorMarkings && errors.colorMarkings}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="medicalInformation">
                {({
                  field: { onChange, onBlur, name, value },
                }: FieldProps<string>) => (
                  <FormControl>
                    <FormLabel>Medical Information</FormLabel>
                    <TextareaAutosize
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      minRows={3}
                      placeholder="Allergies, conditions, medications"
                      style={{
                        width: "100%",
                        padding: "8px",
                        ...textAreaStyles,
                      }}
                    />
                  </FormControl>
                )}
              </Field>

              <Box sx={{ borderTop: 1, pt: 3 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={3}
                  color="primary"
                >
                  Contact Information
                </Typography>
              </Box>

              <Field name="ownerName">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl
                    error={!!(touched.ownerName && errors.ownerName)}
                  >
                    <FormLabel>Owner Name</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Your full name"
                      error={!!(touched.ownerName && errors.ownerName)}
                      helperText={touched.ownerName && errors.ownerName}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="phoneNumber">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl
                    error={!!(touched.phoneNumber && errors.phoneNumber)}
                  >
                    <FormLabel>Phone Number</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Your contact number"
                      error={!!(touched.phoneNumber && errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field }: FieldProps<FormValues>) => (
                  <FormControl error={!!(touched.email && errors.email)}>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      {...field}
                      type="email"
                      fullWidth
                      placeholder="Your email address"
                      error={!!(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="address">
                {({
                  field: { onChange, onBlur, name, value },
                }: FieldProps<string>) => (
                  <FormControl error={!!(touched.address && errors.address)}>
                    <FormLabel>Address</FormLabel>
                    <TextareaAutosize
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      minRows={3}
                      placeholder="Your home address"
                      style={{
                        width: "100%",
                        padding: "8px",
                        ...textAreaStyles,
                      }}
                    />
                    {touched.address && errors.address && (
                      <FormHelperText error>{errors.address}</FormHelperText>
                    )}
                  </FormControl>
                )}
              </Field>

              <Box sx={{ borderTop: 1, pt: 3 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={3}
                  color="primary"
                >
                  QR Tag Request
                </Typography>
              </Box>

              <Field name="requestQRTag">
                {({
                  field: { onChange, onBlur, name, value },
                }: FieldProps<boolean>) => (
                  <FormControl>
                    <Box display="flex" alignItems="center">
                      <FormLabel sx={{ mr: 2 }}>Request QR Tag</FormLabel>
                      <Switch
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                      />
                    </Box>
                  </FormControl>
                )}
              </Field>

              {values.requestQRTag && (
                <Field name="tagType">
                  {({
                    field: { onChange, onBlur, name, value },
                  }: FieldProps<string>) => (
                    <FormControl error={!!(touched.tagType && errors.tagType)}>
                      <FormLabel>Tag Type</FormLabel>
                      <Select
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        fullWidth
                        displayEmpty
                        sx={inputStyles}
                      >
                        <MenuItem value="">
                          Select the type of tag you prefer
                        </MenuItem>
                        <MenuItem value="basic">Basic Tag</MenuItem>
                        <MenuItem value="premium">Premium Tag</MenuItem>
                        <MenuItem value="deluxe">Deluxe Tag</MenuItem>
                      </Select>
                      {touched.tagType && errors.tagType && (
                        <FormHelperText error>{errors.tagType}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                </Field>
              )}

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined">Cancel</Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Save & Request Tag
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
