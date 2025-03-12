import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const teamMembers = [
    {
      name: t("team.members.andres.name"),
      role: t("team.members.andres.role"),
      description: t("team.members.andres.description"),
      image: "/team/andres.jpg",
    },
  ];

  const values = [
    {
      title: t("values.items.petWelfare.title"),
      description: t("values.items.petWelfare.description"),
      icon: "🐾",
    },
    {
      title: t("values.items.innovation.title"),
      description: t("values.items.innovation.description"),
      icon: "💡",
    },
    {
      title: t("values.items.ecological.title"),
      description: t("values.items.ecological.description"),
      icon: "🌱",
    },
    {
      title: t("values.items.social.title"),
      description: t("values.items.social.description"),
      icon: "❤️",
    },
    {
      title: t("values.items.security.title"),
      description: t("values.items.security.description"),
      icon: "🔒",
    },
    {
      title: t("values.items.transparency.title"),
      description: t("values.items.transparency.description"),
      icon: "🌟",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light">
      <div className="w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("hero.description")}</p>
        </div>

        <section className="bg-white rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("mission.title")}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div className="bg-[#F8F7FF] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {t("mission.purpose.title")}
                </h3>
                <p className="text-gray-600">
                  {t("mission.purpose.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("story.title")}
          </h2>
          <div className="bg-[#F8F7FF] p-6 rounded-lg">
            <p className="text-gray-600 mb-4">{t("story.description")}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            {t("team.title")}
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            {t("team.description")}
          </p>
          <div className="grid grid-cols-1 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-primary">
                  {member.name}
                </h3>
                <p className="text-black text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            {t("values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-gray-600 mb-6">{t("contact.description")}</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.name.label")}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder={t("contact.form.name.placeholder")}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.email.label")}
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder={t("contact.form.email.placeholder")}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.message.label")}
              </label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder={t("contact.form.message.placeholder")}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark"
            >
              {t("contact.form.submit")}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
