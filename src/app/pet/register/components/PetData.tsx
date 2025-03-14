import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";
// Button,
import { Field, FieldProps } from "formik";
import { RegisterPetForm } from "@/interfaces/form";
import { BREEDS, SPECIES } from "@/constants/pets";
import { inputStyles } from "../styles";
import { useTranslations } from "next-intl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ChangeEvent, useRef } from "react";

export const PetData = () => {
  const c = useTranslations("common");
  const p = useTranslations("petRegister");
  const s = useTranslations("species");
  const dogBreeds = useTranslations("breeds.dog");
  const catBreeds = useTranslations("breeds.cat");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        {p("title")}
      </Typography>
      <Stack spacing={2}>
        <Field name="petName">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl
              error={!!(touched.petName && errors.petName)}
              fullWidth
            >
              <FormLabel>{c("petName")}</FormLabel>
              <TextField
                {...field}
                fullWidth
                placeholder={p("placeholders.petName")}
                error={!!(touched.petName && errors.petName)}
                helperText={
                  touched.petName && errors.petName
                    ? String(errors.petName)
                    : ""
                }
                sx={inputStyles}
              />
            </FormControl>
          )}
        </Field>
        <Field name="photo">
          {({
            field: { value },
            form: { setFieldValue, touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.photo && errors.photo)} fullWidth>
              <FormLabel>{c("photo")}</FormLabel>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue("photo", file);
                }}
              />
              <Button
                variant="outlined"
                onClick={() => fileInputRef.current?.click()}
                sx={{ mt: 1 }}
              >
                {value ? p("changePhoto") : p("uploadPhoto")}
              </Button>
              {value instanceof File && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {value.name}
                </Typography>
              )}
              {touched.photo && errors.photo && (
                <FormHelperText error>{String(errors.photo)}</FormHelperText>
              )}
            </FormControl>
          )}
        </Field>
        <Field name="species">
          {({ field, form }: FieldProps<RegisterPetForm>) => (
            <FormControl
              error={!!(form.touched.species && form.errors.species)}
              fullWidth
            >
              <FormLabel>{c("species")}</FormLabel>
              <Select
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  form.setFieldValue("breed", "");
                }}
                displayEmpty
                sx={inputStyles}
              >
                <MenuItem value="">{p("placeholders.species")}</MenuItem>
                {SPECIES.map((species) => (
                  <MenuItem key={species} value={species}>
                    {s(species)}
                  </MenuItem>
                ))}
              </Select>
              {form.touched.species && form.errors.species && (
                <FormHelperText>{String(form.errors.species)}</FormHelperText>
              )}
            </FormControl>
          )}
        </Field>
        <Field name="breed">
          {({
            field,
            form: { touched, errors, values },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.breed && errors.breed)} fullWidth>
              <FormLabel>{c("breed")}</FormLabel>
              <Select
                {...field}
                displayEmpty
                disabled={!values.species}
                sx={inputStyles}
              >
                <MenuItem value="">{p("placeholders.breed")}</MenuItem>
                {values.species &&
                  BREEDS[values.species as keyof typeof BREEDS].map((breed) => (
                    <MenuItem key={breed} value={breed}>
                      {values.species === "dog"
                        ? dogBreeds(breed)
                        : catBreeds(breed)}
                    </MenuItem>
                  ))}
              </Select>
              {touched.breed && errors.breed && (
                <FormHelperText>{String(errors.breed)}</FormHelperText>
              )}
            </FormControl>
          )}
        </Field>
        <Field name="birthDate">
          {({
            field,
            form: { touched, errors, setFieldValue },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl
              error={!!(touched.birthDate && errors.birthDate)}
              fullWidth
            >
              <FormLabel>{c("birthDate")}</FormLabel>
              <DatePicker
                value={field.value ? dayjs(String(field.value)) : null}
                onChange={(date) =>
                  setFieldValue("birthDate", date?.toISOString() || "")
                }
                sx={inputStyles}
              />
              {touched.birthDate && errors.birthDate && (
                <FormHelperText>{String(errors.birthDate)}</FormHelperText>
              )}
            </FormControl>
          )}
        </Field>
        <Field name="age">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.age && errors.age)} fullWidth>
              <FormLabel>{c("age")}</FormLabel>
              <TextField
                {...field}
                type="number"
                fullWidth
                placeholder={p("placeholders.age")}
                error={!!(touched.age && errors.age)}
                helperText={touched.age && errors.age ? String(errors.age) : ""}
                sx={inputStyles}
              />
            </FormControl>
          )}
        </Field>
        <Field name="weight">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.weight && errors.weight)} fullWidth>
              <FormLabel>{c("weight")}</FormLabel>
              <TextField
                {...field}
                type="number"
                fullWidth
                placeholder={p("placeholders.weight")}
                error={!!(touched.weight && errors.weight)}
                helperText={
                  touched.weight && errors.weight ? String(errors.weight) : ""
                }
                sx={inputStyles}
              />
            </FormControl>
          )}
        </Field>
        <Field name="colorMarkings">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl
              error={!!(touched.colorMarkings && errors.colorMarkings)}
              fullWidth
            >
              <FormLabel>{c("colorMarkings")}</FormLabel>
              <TextField
                {...field}
                fullWidth
                placeholder={p("placeholders.colorMarkings")}
                error={!!(touched.colorMarkings && errors.colorMarkings)}
                helperText={
                  touched.colorMarkings && errors.colorMarkings
                    ? String(errors.colorMarkings)
                    : ""
                }
                sx={inputStyles}
              />
            </FormControl>
          )}
        </Field>
      </Stack>
    </Box>
  );
};
