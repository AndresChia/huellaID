import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "Descubre los servicios de identificación digital para mascotas de HuellaID: tags NFC, códigos QR y perfiles digitales completos.",
  openGraph: {
    title: "Nuestros Servicios | HuellaID",
    description:
      "Descubre los servicios de identificación digital para mascotas de HuellaID: tags NFC, códigos QR y perfiles digitales completos.",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestros Servicios | HuellaID",
    description:
      "Descubre los servicios de identificación digital para mascotas de HuellaID: tags NFC, códigos QR y perfiles digitales completos.",
    images: ["/services-twitter-image.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
