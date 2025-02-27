import Image from "next/image";

export default function About() {
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
      title: "Pet Safety First",
      description:
        "Every feature we develop is designed with your pet's wellbeing as the top priority.",
      icon: "🛡️",
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our technology to provide the best possible service for pet owners.",
      icon: "💡",
    },
    {
      title: "Accessibility",
      description:
        "Making pet information accessible to everyone who needs it, when they need it.",
      icon: "🌐",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light">
      <div className="w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Connecting pet owners with essential information through innovative
            technology
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div className="bg-[#F8F7FF] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  Our Purpose
                </h3>
                <h4 className="text-lg font-medium text-black mb-2">
                  Making Pet Care Smarter
                </h4>
                <p className="text-gray-600">
                  At Pet QR Scanner, we're dedicated to improving the lives of
                  pets and their owners by providing instant access to critical
                  pet information. Our QR-based technology ensures that your
                  pet's medical history, dietary needs, and emergency contacts
                  are always just a scan away.
                </p>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Story</h2>
          <div className="bg-[#F8F7FF] p-6 rounded-lg">
            <h4 className="text-lg font-medium text-black mb-2">
              From Challenge to Solution
            </h4>
            <p className="text-gray-600 mb-4">
              Founded in 2023, Pet QR Scanner was born from a personal
              experience when our founder's dog went missing and was found
              without any identification. This sparked the idea to create a
              modern, technology-driven solution that goes beyond traditional
              pet tags, providing comprehensive information accessible to anyone
              with a smartphone.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark">
              Our Timeline
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Our Team
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
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Our Values
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
          <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
