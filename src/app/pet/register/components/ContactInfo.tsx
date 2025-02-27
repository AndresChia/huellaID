import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Field, FieldProps } from "formik";
import { RegisterPetForm } from "@/interfaces/form";
import { COUNTRY_CODES } from "@/constants/pets";
import { inputStyles, textAreaStyles } from "../styles";
import { useTranslations } from "next-intl";

export const ContactInfo = () => {
  const c = useTranslations("common");
  const p = useTranslations("petRegister");

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        {p("contactInfo")}
      </Typography>

      <Stack spacing={3}>
        <Field name="ownerName">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.ownerName && errors.ownerName)}>
              <FormLabel>{c("ownerName")}</FormLabel>
              <TextField
                {...field}
                fullWidth
                placeholder={p("placeholders.ownerName")}
                error={!!(touched.ownerName && errors.ownerName)}
                helperText={
                  touched.ownerName && errors.ownerName
                    ? String(errors.ownerName)
                    : ""
                }
                sx={inputStyles}
              />
            </FormControl>
          )}
        </Field>

        <Stack direction="row" spacing={2}>
          <Field name="countryCode">
            {({ field }: FieldProps<RegisterPetForm>) => (
              <FormControl sx={{ minWidth: 120 }}>
                <FormLabel>{c("countryCode")}</FormLabel>
                <Select {...field} sx={inputStyles}>
                  {COUNTRY_CODES.map(({ code, country }) => (
                    <MenuItem key={code} value={code}>
                      {code} ({country})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Field>

          <Field name="phoneNumber">
            {({
              field,
              form: { touched, errors },
            }: FieldProps<RegisterPetForm>) => (
              <FormControl
                error={!!(touched.phoneNumber && errors.phoneNumber)}
                fullWidth
              >
                <FormLabel>{c("phone")}</FormLabel>
                <TextField
                  {...field}
                  fullWidth
                  placeholder={p("placeholders.phone")}
                  error={!!(touched.phoneNumber && errors.phoneNumber)}
                  helperText={
                    touched.phoneNumber && errors.phoneNumber
                      ? String(errors.phoneNumber)
                      : ""
                  }
                  sx={inputStyles}
                />
              </FormControl>
            )}
          </Field>
        </Stack>

        <Field name="email">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.email && errors.email)}>
              <FormLabel>{c("email")}</FormLabel>
              <TextField
                {...field}
                type="email"
                fullWidth
                placeholder={p("placeholders.email")}
                error={!!(touched.email && errors.email)}
                helperText={
                  touched.email && errors.email ? String(errors.email) : ""
                }
                sx={inputStyles}
              />
            </FormControl>
          )}
        </Field>

        <Field name="address">
          {({
            field,
            form: { touched, errors },
          }: FieldProps<RegisterPetForm>) => (
            <FormControl error={!!(touched.address && errors.address)}>
              <FormLabel>{c("address")}</FormLabel>
              <TextareaAutosize
                {...field}
                value={(field.value ?? "") as unknown as string}
                minRows={3}
                placeholder={p("placeholders.address")}
                style={{
                  width: "100%",
                  padding: "8px",
                  ...textAreaStyles,
                }}
              />
              {touched.address && errors.address && (
                <Box
                  component="span"
                  sx={{ color: "error.main", fontSize: "0.75rem", mt: 1 }}
                >
                  {errors.address ? String(errors.address) : ""}
                </Box>
              )}
            </FormControl>
          )}
        </Field>
      </Stack>
    </Box>
  );
};
