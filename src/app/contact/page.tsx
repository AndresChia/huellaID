import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-primary p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">
                {t("navigation.contact")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>contacto@huellaid.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                {t("actions.sendMessage")}
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t("common.owner")}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("common.email")}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t("common.message")}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
                >
                  {t("actions.sendMessage")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
