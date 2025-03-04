import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  Switch,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { Field, FieldProps } from "formik";
import { useTranslations } from "next-intl";

export const TagRequest = () => {
  const p = useTranslations("petRegister");

  const tagTypes = [
    {
      value: "basic",
      label: p("tagRequest.basic"),
      price: "29.900",
      features: [
        p("tagRequest.features.basic.nfcTag"),
        p("tagRequest.features.basic.profile"),
        p("tagRequest.features.basic.support"),
        p("tagRequest.features.basic.notifications"),
        p("tagRequest.features.basic.registration"),
      ],
    },
    {
      value: "premium",
      label: p("tagRequest.premium"),
      price: "39.900",
      features: [
        p("tagRequest.features.premium.nfcTag"),
        p("tagRequest.features.premium.profile"),
        p("tagRequest.features.premium.support"),
        p("tagRequest.features.premium.notifications"),
        p("tagRequest.features.premium.medical"),
      ],
    },
    {
      value: "deluxe",
      label: p("tagRequest.deluxe"),
      price: "49.900",
      features: [
        p("tagRequest.features.deluxe.nfcTag"),
        p("tagRequest.features.deluxe.profile"),
        p("tagRequest.features.deluxe.support"),
        p("tagRequest.features.deluxe.notifications"),
        p("tagRequest.features.deluxe.medical"),
        p("tagRequest.features.deluxe.design"),
        p("tagRequest.features.deluxe.warranty"),
      ],
    },
  ];

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
                  field: { onChange, name, value: selectedType },
                  form: { touched, errors },
                }: FieldProps<string>) => (
                  <FormControl error={!!(touched.tagType && errors.tagType)}>
                    <FormLabel>{p("tagRequest.type")}</FormLabel>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      {tagTypes.map((type) => (
                        <Grid item xs={12} md={4} key={type.value}>
                          <Paper
                            elevation={selectedType === type.value ? 3 : 1}
                            sx={{
                              p: 2,
                              cursor: "pointer",
                              border: selectedType === type.value ? 2 : 1,
                              borderColor:
                                selectedType === type.value
                                  ? "primary.main"
                                  : "grey.300",
                              "&:hover": {
                                borderColor: "primary.main",
                              },
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                            onClick={() =>
                              onChange({ target: { name, value: type.value } })
                            }
                          >
                            <Typography variant="h6" fontWeight="bold" mb={1}>
                              {type.label}
                            </Typography>
                            <Typography variant="h5" color="primary" mb={2}>
                              ${type.price} COP
                            </Typography>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                              {type.features.map((feature, index) => (
                                <Typography
                                  key={index}
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  • {feature}
                                </Typography>
                              ))}
                            </Stack>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
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
