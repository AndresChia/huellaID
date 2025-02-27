import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Field, FieldProps } from "formik";
import { inputStyles, textAreaStyles } from "../styles";
import { useTranslations } from "next-intl";

export const MedicalInfo = () => {
  const c = useTranslations("common");
  const p = useTranslations("petRegister");

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        {c("medicalInformation")}
        <FormControl>
          <Box display="flex" alignItems="center" gap={2}>
            <Field name="requireMedicalInfo">
              {({ field }: FieldProps<boolean>) => (
                <Switch {...field} checked={field.value} />
              )}
            </Field>
          </Box>
        </FormControl>
      </Typography>

      <Field name="requireMedicalInfo">
        {({ field: { value } }: FieldProps<boolean>) =>
          value && (
            <Stack spacing={2}>
              <Box>
                <FormControl>
                  <Box display="flex" alignItems="center" gap={2}>
                    <FormLabel>{c("allergies")}</FormLabel>
                    <Field name="showAllergies">
                      {({ field }: FieldProps<boolean>) => (
                        <Switch {...field} checked={field.value} />
                      )}
                    </Field>
                  </Box>
                </FormControl>
                <Field name="showAllergies">
                  {({ field: { value: showAllergies } }: FieldProps<boolean>) =>
                    showAllergies && (
                      <Field name="allergies">
                        {({ field }: FieldProps<string>) => (
                          <FormControl fullWidth sx={{ mt: 2 }}>
                            <TextareaAutosize
                              {...field}
                              minRows={3}
                              placeholder={p("placeholders.allergies")}
                              style={{
                                width: "100%",
                                padding: "8px",
                                ...textAreaStyles,
                              }}
                            />
                          </FormControl>
                        )}
                      </Field>
                    )
                  }
                </Field>
              </Box>

              <Box>
                <FormControl>
                  <Box display="flex" alignItems="center" gap={2}>
                    <FormLabel>{c("medications")}</FormLabel>
                    <Field name="showMedications">
                      {({ field }: FieldProps<boolean>) => (
                        <Switch {...field} checked={field.value} />
                      )}
                    </Field>
                  </Box>
                </FormControl>
                <Field name="showMedications">
                  {({
                    field: { value: showMedications },
                  }: FieldProps<boolean>) =>
                    showMedications && (
                      <Field name="medications">
                        {({ field }: FieldProps<string>) => (
                          <FormControl fullWidth sx={{ mt: 2 }}>
                            <TextareaAutosize
                              {...field}
                              minRows={3}
                              placeholder={p("placeholders.medications")}
                              style={{
                                width: "100%",
                                padding: "8px",
                                ...textAreaStyles,
                              }}
                            />
                          </FormControl>
                        )}
                      </Field>
                    )
                  }
                </Field>
              </Box>

              <Box>
                <FormControl>
                  <Box display="flex" alignItems="center" gap={2}>
                    <FormLabel>{c("conditions")}</FormLabel>
                    <Field name="showConditions">
                      {({ field }: FieldProps<boolean>) => (
                        <Switch {...field} checked={field.value} />
                      )}
                    </Field>
                  </Box>
                </FormControl>
                <Field name="showConditions">
                  {({
                    field: { value: showConditions },
                  }: FieldProps<boolean>) =>
                    showConditions && (
                      <Field name="conditions">
                        {({ field }: FieldProps<string>) => (
                          <FormControl fullWidth sx={{ mt: 2 }}>
                            <TextareaAutosize
                              {...field}
                              minRows={3}
                              placeholder={p("placeholders.conditions")}
                              style={{
                                width: "100%",
                                padding: "8px",
                                ...textAreaStyles,
                              }}
                            />
                          </FormControl>
                        )}
                      </Field>
                    )
                  }
                </Field>
              </Box>

              <Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <FormLabel>{c("vaccinations")}</FormLabel>
                    <Field name="showVaccinations">
                      {({ field }: FieldProps<boolean>) => (
                        <Switch {...field} checked={field.value} />
                      )}
                    </Field>
                  </Box>
                </Box>

                <Field name="showVaccinations">
                  {({ field: { value } }: FieldProps<boolean>) =>
                    value && (
                      <Field name="vaccinations">
                        {({ field, form }: FieldProps) => (
                          <FormControl fullWidth>
                            <Stack spacing={2}>
                              {(field.value as string[]).map(
                                (vaccination: string, index: number) => (
                                  <Box key={index} display="flex" gap={2}>
                                    <TextField
                                      value={vaccination}
                                      onChange={(e) => {
                                        const newVaccinations = [
                                          ...(field.value as string[]),
                                        ];
                                        newVaccinations[index] = e.target.value;
                                        form.setFieldValue(
                                          "vaccinations",
                                          newVaccinations
                                        );
                                      }}
                                      fullWidth
                                      placeholder={p(
                                        "placeholders.vaccination"
                                      )}
                                      sx={inputStyles}
                                    />
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => {
                                        const newVaccinations = (
                                          field.value as string[]
                                        ).filter((_, i) => i !== index);
                                        form.setFieldValue(
                                          "vaccinations",
                                          newVaccinations
                                        );
                                      }}
                                    >
                                      {c("remove")}
                                    </Button>
                                  </Box>
                                )
                              )}
                              <Button
                                variant="outlined"
                                onClick={() => {
                                  form.setFieldValue("vaccinations", [
                                    ...(field.value as string[]),
                                    "",
                                  ]);
                                }}
                              >
                                {p("buttons.addVaccination")}
                              </Button>
                            </Stack>
                          </FormControl>
                        )}
                      </Field>
                    )
                  }
                </Field>
              </Box>
            </Stack>
          )
        }
      </Field>
    </Box>
  );
};
