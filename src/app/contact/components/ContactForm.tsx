import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { sendEmail, EmailData } from "@/services/emailService";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("validation.required")),
      email: Yup.string()
        .email(t("validation.invalidEmail"))
        .required(t("validation.required")),
      message: Yup.string()
        .min(10, t("validation.messageMin"))
        .required(t("validation.required")),
    }),
    onSubmit: async (values: ContactFormValues) => {
      setIsSubmitting(true);
      try {
        const emailData: EmailData = {
          subject: `Nuevo mensaje de contacto de ${values.name}`,
          text: `
            Nombre: ${values.name}
            Email: ${values.email}
            Mensaje: ${values.message}
          `,
          html: `
            <h3>Nuevo mensaje de contacto</h3>
            <p><strong>Nombre:</strong> ${values.name}</p>
            <p><strong>Email:</strong> ${values.email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${values.message}</p>
          `,
        };

        const result = await sendEmail(emailData);
        if (result.success) {
          setSubmitStatus({
            success: true,
            message: t("messages.emailSent"),
          });
          formik.resetForm();
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setSubmitStatus({
          success: false,
          message: t("messages.emailError"),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder={t("common.owner")}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            formik.touched.name && formik.errors.name
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder={t("common.email")}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder={t("common.message")}
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
        )}
      </div>

      {submitStatus.message && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.success ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p
            className={`text-sm ${
              submitStatus.success ? "text-green-700" : "text-red-700"
            }`}
          >
            {submitStatus.message}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-white py-2 px-4 rounded-md transition-colors duration-300 ${
          isSubmitting
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primary-dark"
        }`}
      >
        {isSubmitting ? t("actions.sending") : t("actions.sendMessage")}
      </button>
    </form>
  );
};
