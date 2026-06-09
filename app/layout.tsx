import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.lazaroalvesr.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Lázaro Alves R — Desenvolvedor Web",
    template: "%s | Lázaro Alves R",
  },
  description:
    "Desenvolvedor web especializado em React e Next.js. Crio sites profissionais, lojas virtuais e landing pages que aparecem no Google e convertem visitantes em clientes. Atendo empresas em Minas Gerais e todo o Brasil.",
  keywords: [
    "desenvolvedor web minas gerais",
    "criação de sites minas gerais",
    "desenvolvimento web react nextjs",
    "site profissional empresa",
    "loja virtual nextjs",
    "landing page conversão",
    "desenvolvedor freelancer brasil",
    "site para empresa",
    "criação de site profissional",
    "Lázaro Alves R",
  ],
  authors: [{ name: "Lázaro Alves R", url: BASE_URL }],
  creator: "Lázaro Alves R",
  publisher: "Lázaro Alves R",

  // Canonical
  alternates: {
    canonical: BASE_URL,
    languages: { "pt-BR": BASE_URL },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Lázaro Alves R — Desenvolvedor Web",
    title: "Lázaro Alves R — Sites que vendem de verdade",
    description:
      "Desenvolvedor web em React e Next.js. Sites rápidos, no topo do Google e que convertem visitantes em clientes reais.",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lázaro Alves R — Desenvolvedor Web",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Lázaro Alves R — Sites que vendem de verdade",
    description:
      "Desenvolvedor web em React e Next.js. Sites rápidos, no topo do Google e que convertem visitantes em clientes.",
    images: ["/og-image.jpg"],
    creator: "@lazaro_alves_r",
  },

  // Robots
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

  // Verificação Google Search Console (troque pelo seu código real)
  verification: {
    google: "COLE_SEU_CODIGO_GOOGLE_SEARCH_CONSOLE_AQUI",
  },

  // App / PWA básico
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
