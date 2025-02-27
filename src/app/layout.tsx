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
    default: "HuellaID - Identidad Digital Segura",
    template: "%s | HuellaID",
  },
  description:
    "HuellaID es tu solución integral para la gestión segura de identidad digital. Protege y verifica identidades de manera eficiente y confiable.",
  keywords: [
    "identidad digital",
    "verificación de identidad",
    "seguridad digital",
    "biometría",
    "autenticación",
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
    title: "HuellaID - Identidad Digital Segura",
    description:
      "Solución integral para la gestión y verificación de identidad digital",
    siteName: "HuellaID",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HuellaID Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HuellaID - Identidad Digital Segura",
    description:
      "Solución integral para la gestión y verificación de identidad digital",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
