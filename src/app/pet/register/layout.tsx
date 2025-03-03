import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrar Mascota",
  description:
    "Registra a tu mascota en HuellaID y obtén su identificación digital. Protege a tu compañero con tecnología NFC y QR.",
  openGraph: {
    title: "Registrar Mascota | HuellaID",
    description:
      "Registra a tu mascota en HuellaID y obtén su identificación digital. Protege a tu compañero con tecnología NFC y QR.",
    images: [
      {
        url: "/register-pet-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Registro de Mascota HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registrar Mascota | HuellaID",
    description:
      "Registra a tu mascota en HuellaID y obtén su identificación digital. Protege a tu compañero con tecnología NFC y QR.",
    images: ["/register-pet-twitter-image.jpg"],
  },
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
