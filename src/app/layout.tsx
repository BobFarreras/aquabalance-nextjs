// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

// Importacions dels teus components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"; // NOU: Importem el Toaster
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

// NOU: SEO completat amb les dades del teu index.html
export const metadata: Metadata = {
  // Defineix la URL base per a les imatges i altres URL absolutes
  metadataBase: new URL('https://www.aquabalance.es'),

  title: "Aquabalance - Ionitzadors d'Aigua Kangen i Sistema ANESPA",
  description: "Transforma l'aigua que beus, millora la teva salut i la de la teva família amb la tecnologia Kangen i ANESPA.",
  
  // Open Graph (per a Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Aquabalance - Pura, Saludable, Vital',
    description: "Transforma l'aigua que beus, millora la teva salut i la de la teva família amb la tecnologia Kangen i ANESPA.",
    images: [
      {
        url: '/og-image.png', // L'arxiu ha d'estar a la carpeta 'public'
        width: 1200,
        height: 630,
        alt: 'Aquabalance - Aigua Kangen i ANESPA',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Aquabalance - Pura, Saludable, Vital',
    description: "Transforma l'aigua que beus, millora la teva salut i la de la teva família amb la tecnologia Kangen i ANESPA.",
    images: ['/og-image.png'], // L'arxiu ha d'estar a la carpeta 'public'
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-slate-800`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          
          {/* NOU: Afegim el Toaster aquí */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}