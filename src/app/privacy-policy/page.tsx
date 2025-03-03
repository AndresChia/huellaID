import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/shared/Breadcrumb/Breadcrumb";

export default function PrivacyPolicy() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: t("navigation.home"), href: "/" },
            { label: t("navigation.privacy"), href: "/privacy-policy" },
          ]}
        />
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 border border-gray-100">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              {t("privacy.title")}
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 text-dark-light">
            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.introduction.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-5">
                {t("privacy.introduction.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.dataCollection.title")}
              </h2>
              <ul className="list-none pl-5 space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3"></span>
                    <span>{t(`privacy.dataCollection.item${item}`)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.dataUse.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-5">
                {t("privacy.dataUse.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.dataSecurity.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-5">
                {t("privacy.dataSecurity.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.cookies.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-5">
                {t("privacy.cookies.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.thirdParty.title")}
              </h2>
              <p className="mb-4 leading-relaxed pl-5">
                {t("privacy.thirdParty.content")}
              </p>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.userRights.title")}
              </h2>
              <ul className="list-none pl-5 space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3"></span>
                    <span>{t(`privacy.userRights.item${item}`)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="transition-all duration-300 hover:transform hover:scale-[1.01] bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {t("privacy.contact.title")}
              </h2>
              <p className="leading-relaxed pl-5">
                {t("privacy.contact.content")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
