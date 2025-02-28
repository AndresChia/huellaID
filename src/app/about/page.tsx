import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const teamMembers = [
    {
      name: "Maria Rodriguez",
      role: "Founder & CEO",
      description:
        "Veterinarian with 15 years of experience and passionate advocate for pet welfare technology.",
      image: "/team/maria.jpg",
    },
    {
      name: "David Chen",
      role: "CTO",
      description:
        "Software engineer specializing in mobile applications and IOT technology integration.",
      image: "/team/david.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Veterinary Relations",
      description:
        "Connecting our platform with veterinary clinics to ensure seamless information sharing.",
      image: "/team/sarah.jpg",
    },
  ];

  const values = [
    {
      title: t("values.petSafety.title"),
      description: t("values.petSafety.description"),
      icon: "🛡️",
    },
    {
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
      icon: "💡",
    },
    {
      title: t("values.accessibility.title"),
      description: t("values.accessibility.description"),
      icon: "🌐",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light">
      <div className="w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{t("title")}</h1>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
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
                <h4 className="text-lg font-medium text-black mb-2">
                  {t("mission.purpose.subtitle")}
                </h4>
                <p className="text-gray-600">
                  {t("mission.purpose.description")}
                </p>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark">
                  {t("mission.purpose.button")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("story.title")}
          </h2>
          <div className="bg-[#F8F7FF] p-6 rounded-lg">
            <h4 className="text-lg font-medium text-black mb-2">
              {t("story.subtitle")}
            </h4>
            <p className="text-gray-600 mb-4">{t("story.description")}</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark">
              {t("story.button")}
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            {t("team.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="text-center mt-4">
                  <button className="text-primary hover:underline">
                    {t("team.connect")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            {t("values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4 text-primary">{value.icon}</div>
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
          <p className="text-gray-600 mb-6">{t("contact.subtitle")}</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder={t("contact.form.namePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder={t("contact.form.emailPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark"
            >
              {t("contact.form.button")}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
