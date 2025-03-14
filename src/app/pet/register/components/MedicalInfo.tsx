import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";
import { Field, FieldProps } from "formik";
import { inputStyles } from "../styles";
import { useTranslations } from "next-intl";
import { Vaccination } from "@/interfaces/form";

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
                        {({ field, form }: FieldProps) => (
                          <FormControl fullWidth>
                            <Stack spacing={2}>
                              {(field.value as string[]).map(
                                (allergy: string, index: number) => (
                                  <Box key={index} display="flex" gap={2}>
                                    <TextField
                                      value={allergy}
                                      onChange={(e) => {
                                        const newAllergies = [
                                          ...(field.value as string[]),
                                        ];
                                        newAllergies[index] = e.target.value;
                                        form.setFieldValue(
                                          "allergies",
                                          newAllergies
                                        );
                                      }}
                                      fullWidth
                                      placeholder={p("placeholders.allergies")}
                                      sx={inputStyles}
                                    />
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => {
                                        const newAllergies = (
                                          field.value as string[]
                                        ).filter((_, i) => i !== index);
                                        form.setFieldValue(
                                          "allergies",
                                          newAllergies
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
                                  form.setFieldValue("allergies", [
                                    ...(field.value as string[]),
                                    "",
                                  ]);
                                }}
                              >
                                {p("buttons.addAllergy")}
                              </Button>
                            </Stack>
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
                        {({ field, form }: FieldProps) => (
                          <FormControl fullWidth>
                            <Stack spacing={2}>
                              {(field.value as string[]).map(
                                (medication: string, index: number) => (
                                  <Box key={index} display="flex" gap={2}>
                                    <TextField
                                      value={medication}
                                      onChange={(e) => {
                                        const newMedications = [
                                          ...(field.value as string[]),
                                        ];
                                        newMedications[index] = e.target.value;
                                        form.setFieldValue(
                                          "medications",
                                          newMedications
                                        );
                                      }}
                                      fullWidth
                                      placeholder={p(
                                        "placeholders.medications"
                                      )}
                                      sx={inputStyles}
                                    />
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => {
                                        const newMedications = (
                                          field.value as string[]
                                        ).filter((_, i) => i !== index);
                                        form.setFieldValue(
                                          "medications",
                                          newMedications
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
                                  form.setFieldValue("medications", [
                                    ...(field.value as string[]),
                                    "",
                                  ]);
                                }}
                              >
                                {p("buttons.addMedication")}
                              </Button>
                            </Stack>
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
                        {({ field, form }: FieldProps) => (
                          <FormControl fullWidth>
                            <Stack spacing={2}>
                              {(field.value as string[]).map(
                                (condition: string, index: number) => (
                                  <Box key={index} display="flex" gap={2}>
                                    <TextField
                                      value={condition}
                                      onChange={(e) => {
                                        const newConditions = [
                                          ...(field.value as string[]),
                                        ];
                                        newConditions[index] = e.target.value;
                                        form.setFieldValue(
                                          "conditions",
                                          newConditions
                                        );
                                      }}
                                      fullWidth
                                      placeholder={p("placeholders.conditions")}
                                      sx={inputStyles}
                                    />
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => {
                                        const newConditions = (
                                          field.value as string[]
                                        ).filter((_, i) => i !== index);
                                        form.setFieldValue(
                                          "conditions",
                                          newConditions
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
                                  form.setFieldValue("conditions", [
                                    ...(field.value as string[]),
                                    "",
                                  ]);
                                }}
                              >
                                {p("buttons.addCondition")}
                              </Button>
                            </Stack>
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
                              {(field.value as Vaccination[]).map(
                                (vaccination: Vaccination, index: number) => (
                                  <Box key={index} display="flex" gap={2}>
                                    <TextField
                                      value={vaccination.name}
                                      onChange={(e) => {
                                        const newVaccinations = [
                                          ...(field.value as Vaccination[]),
                                        ];
                                        newVaccinations[index] = {
                                          ...newVaccinations[index],
                                          name: e.target.value,
                                        };
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
                                    <DatePicker
                                      value={
                                        vaccination.lastApplied as Dayjs | null
                                      }
                                      onChange={(newValue: Dayjs | null) => {
                                        const newVaccinations = [
                                          ...(field.value as Vaccination[]),
                                        ];
                                        newVaccinations[index] = {
                                          ...newVaccinations[index],
                                          lastApplied: newValue,
                                        };
                                        form.setFieldValue(
                                          "vaccinations",
                                          newVaccinations
                                        );
                                      }}
                                      slotProps={{
                                        textField: {
                                          fullWidth: true,
                                          sx: inputStyles,
                                        },
                                      }}
                                    />
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() => {
                                        const newVaccinations = (
                                          field.value as Vaccination[]
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
                                    ...(field.value as Vaccination[]),
                                    { name: "", lastApplied: null },
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
