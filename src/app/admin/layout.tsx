import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Administración",
  description:
    "Panel de administración de HuellaID para gestión de mascotas y usuarios registrados.",
  openGraph: {
    title: "Panel de Administración | HuellaID",
    description:
      "Panel de administración de HuellaID para gestión de mascotas y usuarios registrados.",
    images: [
      {
        url: "/admin-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Panel de Administración HuellaID",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panel de Administración | HuellaID",
    description:
      "Panel de administración de HuellaID para gestión de mascotas y usuarios registrados.",
    images: ["/admin-twitter-image.jpg"],
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
