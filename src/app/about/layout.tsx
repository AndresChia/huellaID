import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce más sobre HuellaID, nuestra misión, valores y el equipo detrás de la innovación en identificación de mascotas.",
  openGraph: {
    title: "Sobre Nosotros | HuellaID",
    description:
      "Conoce más sobre HuellaID, nuestra misión, valores y el equipo detrás de la innovación en identificación de mascotas.",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | HuellaID",
    description:
      "Conoce más sobre HuellaID, nuestra misión, valores y el equipo detrás de la innovación en identificación de mascotas.",
    images: ["/about-twitter-image.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
