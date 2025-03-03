import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de HuellaID. Información importante sobre el uso de nuestros servicios de identificación digital para mascotas.",
  openGraph: {
    title: "Términos y Condiciones | HuellaID",
    description:
      "Términos y condiciones de uso de HuellaID. Información importante sobre el uso de nuestros servicios de identificación digital para mascotas.",
    images: [
      {
        url: "/terms-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | HuellaID",
    description:
      "Términos y condiciones de uso de HuellaID. Información importante sobre el uso de nuestros servicios de identificación digital para mascotas.",
    images: ["/terms-twitter-image.jpg"],
  },
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
