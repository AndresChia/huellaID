import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de HuellaID. Conoce cómo protegemos y manejamos tus datos personales y los de tu mascota.",
  openGraph: {
    title: "Política de Privacidad | HuellaID",
    description:
      "Política de privacidad de HuellaID. Conoce cómo protegemos y manejamos tus datos personales y los de tu mascota.",
    images: [
      {
        url: "/privacy-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Política de Privacidad HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | HuellaID",
    description:
      "Política de privacidad de HuellaID. Conoce cómo protegemos y manejamos tus datos personales y los de tu mascota.",
    images: ["/privacy-twitter-image.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
