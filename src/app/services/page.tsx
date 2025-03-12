import QrCodeIcon from "@mui/icons-material/QrCode";
import NfcIcon from "@mui/icons-material/Nfc";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("items.nfc.title"),
      description: t("items.nfc.description"),
      icon: <NfcIcon fontSize="large" className="text-primary" />,
    },
    {
      title: t("items.qr.title"),
      description: t("items.qr.description"),
      icon: <QrCodeIcon fontSize="large" className="text-primary" />,
    },
    {
      title: t("items.profile.title"),
      description: t("items.profile.description"),
      icon: <CloudSyncIcon fontSize="large" className="text-primary" />,
    },
    {
      title: t("items.support.title"),
      description: t("items.support.description"),
      icon: <SupportAgentIcon fontSize="large" className="text-primary" />,
    },
  ];

  const benefits = [
    {
      title: t("benefits.items.technology.title"),
      description: t("benefits.items.technology.description"),
    },
    {
      title: t("benefits.items.eco.title"),
      description: t("benefits.items.eco.description"),
    },
    {
      title: t("benefits.items.social.title"),
      description: t("benefits.items.social.description"),
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-12">{t("hero.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="relative text-4xl">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t("benefits.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {t("adoption.title")}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {t("adoption.description")}
          </p>
          <div className="text-center">
            <Link
              href="/pet/register"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
            >
              {t("adoption.cta")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
