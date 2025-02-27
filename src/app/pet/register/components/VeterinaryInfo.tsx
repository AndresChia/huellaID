import {
  Box,
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

export const VeterinaryInfo = () => {
  const c = useTranslations("common");
  const p = useTranslations("petRegister");

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        {p("veterinaryInfo")}
        <FormControl>
          <Box display="flex" alignItems="center" gap={2}>
            <Field name="requireVeterinaryInfo">
              {({ field }: FieldProps<boolean>) => (
                <Switch {...field} checked={field.value} />
              )}
            </Field>
          </Box>
        </FormControl>
      </Typography>

      <Field name="requireVeterinaryInfo">
        {({ field: { value } }: FieldProps<boolean>) =>
          value && (
            <Stack spacing={3}>
              <Field name="veterinaryName">
                {({ field }: FieldProps) => (
                  <FormControl>
                    <FormLabel>{c("veterinaryName")}</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder={p("placeholders.veterinaryName")}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="veterinaryPhone">
                {({ field }: FieldProps) => (
                  <FormControl>
                    <FormLabel>{c("veterinaryPhone")}</FormLabel>
                    <TextField
                      {...field}
                      fullWidth
                      placeholder={p("placeholders.veterinaryPhone")}
                      sx={inputStyles}
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="veterinaryAddress">
                {({ field }: FieldProps) => (
                  <FormControl>
                    <FormLabel>{c("veterinaryAddress")}</FormLabel>
                    <TextareaAutosize
                      {...field}
                      minRows={3}
                      placeholder={p("placeholders.veterinaryAddress")}
                      style={{
                        width: "100%",
                        padding: "8px",
                        ...textAreaStyles,
                      }}
                    />
                  </FormControl>
                )}
              </Field>
            </Stack>
          )
        }
      </Field>
    </Box>
  );
};
