import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boucherie d'Aliénor - Viandes de Qualité & Savoir-Faire Artisanal",
  description: "Découvrez la Boucherie d'Aliénor, votre spécialiste en viandes de qualité. Bœuf, veau, agneau, porc, volailles et spécialités maison. Produits frais, locaux et conseils d'experts. Commandez en ligne ou venez nous rendre visite.",
  keywords: "boucherie, viande de qualité, bœuf, veau, agneau, porc, volailles, artisanal, local, frais, spécialités maison, conseil boucher, commande en ligne, livraison, Aliénor",
  authors: [{ name: "Boucherie d'Aliénor" }],
  creator: "Boucherie d'Aliénor",
  publisher: "Boucherie d'Aliénor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Boucherie d'Aliénor - Viandes de Qualité & Savoir-Faire Artisanal",
    description: "Votre boucherie artisanale de proximité. Viandes de qualité, produits frais et locaux, conseils d'experts.",
    url: "https://boucherie-alienor.fr",
    siteName: "Boucherie d'Aliénor",
    images: [
      {
        url: "/BoucherieAlieneorLogo.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Boucherie d'Aliénor",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boucherie d'Aliénor - Viandes de Qualité",
    description: "Votre boucherie artisanale de proximité. Viandes de qualité, produits frais et locaux.",
    images: ["/BoucherieAlieneorLogo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/BoucherieAlieneorLogo.jpg" />
        <link rel="canonical" href="https://boucherie-alienor.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7f1d1d" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
