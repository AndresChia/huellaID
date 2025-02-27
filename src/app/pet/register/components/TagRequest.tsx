import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Field, FieldProps } from "formik";
import { RegisterPetForm } from "@/interfaces/form";
import { inputStyles } from "../styles";
import { useTranslations } from "next-intl";

export const TagRequest = () => {
  const p = useTranslations("petRegister");

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        {p("tagRequest.title")}
        <Field name="requestTag">
          {({
            field: { onChange, onBlur, name, value },
            form: {},
          }: FieldProps<boolean>) => (
            <FormControl>
              <Switch
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
              />
            </FormControl>
          )}
        </Field>
      </Typography>
      <Field name="requestTag">
        {({ field: { value } }: FieldProps<boolean>) =>
          value && (
            <Stack spacing={3}>
              <Field name="tagType">
                {({
                  field: { onChange, onBlur, name, value },
                  form: { touched, errors },
                }: FieldProps<RegisterPetForm>) => (
                  <FormControl error={!!(touched.tagType && errors.tagType)}>
                    <FormLabel>{p("tagRequest.type")}</FormLabel>
                    <Select
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      fullWidth
                      displayEmpty
                      sx={inputStyles}
                    >
                      <MenuItem value="">{p("tagRequest.selectType")}</MenuItem>
                      <MenuItem value="basic">{p("tagRequest.basic")}</MenuItem>
                      <MenuItem value="premium">
                        {p("tagRequest.premium")}
                      </MenuItem>
                      <MenuItem value="deluxe">
                        {p("tagRequest.deluxe")}
                      </MenuItem>
                    </Select>
                    {touched.tagType && errors.tagType && (
                      <FormHelperText error>
                        {errors.tagType ? String(errors.tagType) : ""}
                      </FormHelperText>
                    )}
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
