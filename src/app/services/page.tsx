import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Consulta Veterinaria",
      description: "Atención médica profesional para tu mascota",
      icon: "/icons/veterinary.svg",
    },
    {
      title: "Peluquería",
      description: "Servicios de aseo y estética para mascotas",
      icon: "/icons/grooming.svg",
    },
    {
      title: "Vacunación",
      description: "Programa completo de vacunación preventiva",
      icon: "/icons/vaccine.svg",
    },
    {
      title: "Cirugía",
      description: "Procedimientos quirúrgicos con equipo especializado",
      icon: "/icons/surgery.svg",
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Ofrecemos una amplia gama de servicios veterinarios para el cuidado
            integral de tu mascota
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Experiencia
              </h3>
              <p className="text-gray-600">
                Equipo de profesionales altamente calificados con años de
                experiencia
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Atención 24/7
              </h3>
              <p className="text-gray-600">
                Disponibilidad permanente para emergencias veterinarias
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Tecnología
              </h3>
              <p className="text-gray-600">
                Equipamiento moderno para diagnósticos precisos y tratamientos
                efectivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
