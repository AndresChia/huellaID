import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-primary-light py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl font-bold text-dark mb-6">
                  {t("home.hero.title")}{" "}
                  <span className="text-primary">{t("navigation.logo")}</span>
                </h1>
                <p className="text-lg text-dark-light mb-8">
                  {t("home.hero.description")}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/pet/register"
                    className="bg-secondary-dark text-white px-6 py-3 rounded-lg hover:bg-quaternary-dark transition-colors"
                  >
                    {t("actions.registerPet")}
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1554079500-a359614b7666?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mascota_collar"
                  className="rounded-lg shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              {t("home.features.title")} {t("navigation.logo")}?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t("home.features.search.title")}
                </h3>
                <p className="text-dark-light">
                  {t("home.features.search.description")}
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FavoriteIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t("home.features.community.title")}
                </h3>
                <p className="text-dark-light ">
                  {t("home.features.community.description")}
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SecurityIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t("home.features.security.title")}
                </h3>
                <p className="text-dark-light">
                  {t("home.features.security.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
