import { MAX_FILE_SIZE } from "@/utils/configuration";
import * as Yup from "yup";

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
  photo: Yup.mixed<File>()
    .test("fileSize", "common:maxFileSize", function (value) {
      if (!value || typeof value === "string") return true;
      return value.size <= MAX_FILE_SIZE;
    })
    .test("fileType", "common:invalidFileType", function (value) {
      if (!value || typeof value === "string") return true;
      return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }),
});
