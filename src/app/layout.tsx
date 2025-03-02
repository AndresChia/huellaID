import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import MUIThemeProvider from "@/components/providers/MUIThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huellaid.com"),
  title: {
    default: "HuellaID - Identificación Digital para Mascotas",
    template: "%s | HuellaID",
  },
  description:
    "HuellaID ofrece identificación digital segura para mascotas mediante tags NFC y códigos QR. Protege a tu mascota y accede a su información vital al instante.",
  keywords: [
    "identificación mascotas",
    "tag NFC mascotas",
    "código QR mascota",
    "perfil digital mascota",
    "placa identificación mascota",
    "mascota perdida",
    "registro mascota",
    "historial mascota",
    "identificación digital",
    "seguridad mascota",
  ],
  authors: [{ name: "HuellaID Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://huellaid.com",
    title: "HuellaID - Identificación Digital para Mascotas",
    description:
      "Sistema innovador de identificación para mascotas con tecnología NFC y QR. Acceso instantáneo a información vital de tu mascota.",
    siteName: "HuellaID",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HuellaID - Identificación Digital para Mascotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HuellaID - Identificación Digital para Mascotas",
    description:
      "Sistema innovador de identificación para mascotas con tecnología NFC y QR. Acceso instantáneo a información vital de tu mascota.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <MUIThemeProvider>
        <NextIntlClientProvider messages={messages}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
          >
            <Header />
            {children}
            <Footer />
          </body>
        </NextIntlClientProvider>
      </MUIThemeProvider>
    </html>
  );
}
