"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useTranslations } from "next-intl";
import { ContactForm } from "./components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="min-h-screen bg-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{t("title")}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <WhatsAppIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {t("phone")}
            </h3>
            <Link
              href={`https://wa.me/${t("whatsapp.number").replace(/\D/g, "")}`}
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("whatsapp.number")}
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <LocationOnIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {t("locations.title")}
            </h3>
            <p className="text-gray-600">{t("locations.cities")}</p>
            <div className="flex items-center justify-center mt-2 text-gray-600">
              <LocalShippingIcon className="mr-2" />
              <p>{t("locations.shipping")}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <AccessTimeIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {t("hours")}
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-primary">{t("weekdays")}</p>
                <p className="text-gray-600">{t("whatsapp.weekdays")}</p>
              </div>
              <div>
                <p className="font-semibold text-primary">{t("weekends")}</p>
                <p className="text-gray-600">{t("whatsapp.weekends")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("faq.title")}
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary">{t("faq.q1")}</h4>
                <p className="text-gray-600 mt-2">{t("faq.a1")}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">{t("faq.q2")}</h4>
                <p className="text-gray-600 mt-2">{t("faq.a2")}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">{t("faq.q3")}</h4>
                <p className="text-gray-600 mt-2">{t("faq.a3")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("form.submit")}
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
