import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/Breadcrumb/Breadcrumb";

export default function TermsAndConditions() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: t("navigation.home"), href: "/" },
            { label: t("navigation.terms"), href: "/terms-and-conditions" },
          ]}
        />
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 mt-8 border border-gray-100">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            {t("terms.title")}
          </h1>

          <div className="space-y-8 text-dark-light">
            <section className="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">1</span>
                </span>
                {t("terms.acceptance.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-11">
                {t("terms.acceptance.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">2</span>
                </span>
                {t("terms.services.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-11">
                {t("terms.services.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">3</span>
                </span>
                {t("terms.userObligations.title")}
              </h2>
              <ul className="list-none pl-11 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {t("terms.userObligations.item1")}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {t("terms.userObligations.item2")}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {t("terms.userObligations.item3")}
                </li>
              </ul>
            </section>

            <section className="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">4</span>
                </span>
                {t("terms.limitations.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-11">
                {t("terms.limitations.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">5</span>
                </span>
                {t("terms.modifications.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-11">
                {t("terms.modifications.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary text-sm">6</span>
                </span>
                {t("terms.contact.title")}
              </h2>
              <p className="leading-relaxed pl-11">
                {t("terms.contact.content")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
