import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con HuellaID. Estamos aquí para ayudarte con cualquier consulta sobre identificación digital de mascotas.",
  openGraph: {
    title: "Contacto | HuellaID",
    description:
      "Ponte en contacto con HuellaID. Estamos aquí para ayudarte con cualquier consulta sobre identificación digital de mascotas.",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | HuellaID",
    description:
      "Ponte en contacto con HuellaID. Estamos aquí para ayudarte con cualquier consulta sobre identificación digital de mascotas.",
    images: ["/contact-twitter-image.jpg"],
  },
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
