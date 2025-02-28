"use client";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTranslations } from "next-intl";
import { ContactForm } from "./components/ContactForm";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {t("navigation.contact")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <PhoneIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {t("contact.phone")}
            </h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <EmailIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {t("contact.email")}
            </h3>
            <p className="text-gray-600">contacto@huellaid.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <LocationOnIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {t("contact.location")}
            </h3>
            <p className="text-gray-600">Ciudad de México, México</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("contact.hours")}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <AccessTimeIcon className="text-primary" />
                <div>
                  <p className="font-semibold text-primary">
                    {t("contact.weekdays")}
                  </p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <AccessTimeIcon className="text-primary" />
                <div>
                  <p className="font-semibold text-primary">
                    {t("contact.weekends")}
                  </p>
                  <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t("contact.faq.title")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">
                    {t("contact.faq.q1")}
                  </h4>
                  <p className="text-gray-600 mt-1">{t("contact.faq.a1")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {t("contact.faq.q2")}
                  </h4>
                  <p className="text-gray-600 mt-1">{t("contact.faq.a2")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {t("contact.faq.q3")}
                  </h4>
                  <p className="text-gray-600 mt-1">{t("contact.faq.a3")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("actions.sendMessage")}
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
