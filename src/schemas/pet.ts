import * as Yup from "yup";

type FileValue = File | string | null | undefined;

export const registerPetSchema = Yup.object().shape({
  petName: Yup.string().required("common:required"),
  species: Yup.string().required("common:required"),
  breed: Yup.string().required("common:required"),
  birthDate: Yup.string().required("common:required"),
  age: Yup.number()
    .required("common:required")
    .min(0, "common:minValue")
    .max(30, "common:maxValue"),
  weight: Yup.number()
    .required("common:required")
    .min(0, "common:minValue")
    .max(100, "common:maxValue"),
  colorMarkings: Yup.string().required("common:required"),
  photo: Yup.mixed()
    .test("fileSize", "common:maxFileSize", (value: FileValue) => {
      if (!value || typeof value === "string") return true;
      return value.size <= 5000000; // 5MB
    })
    .test("fileType", "common:invalidFileType", (value: FileValue) => {
      if (!value || typeof value === "string") return true;
      return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }),
});
