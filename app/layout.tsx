import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClientProviders } from "@/components/ClientProviders";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Beinsen | Planchas Transfer y Prensas Térmicas Industriales",
    template: "%s | Beinsen",
  },
  description: "Fabricante líder de planchas transfer y prensas térmicas industriales para sublimación, DTF y vinilo textil. Calidad certificada, presencia en 50+ países.",
  metadataBase: new URL("https://beinsen.com"),
  alternates: {
    languages: {
      es: "https://beinsen.com",
      en: "https://beinsen.com",
      pt: "https://beinsen.com",
      it: "https://beinsen.com",
      "x-default": "https://beinsen.com",
    },
  },
  openGraph: {
    siteName: "Beinsen",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/brand/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Beinsen — Fabricante de Planchas Transfer Industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@beinsen",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://beinsen.com/#organization",
  name: "Beinsen",
  url: "https://beinsen.com",
  logo: {
    "@type": "ImageObject",
    url: "https://beinsen.com/brand/logo.png",
    width: 300,
    height: 100,
  },
  image: "https://beinsen.com/brand/logo.png",
  description: "Fabricante líder de planchas transfer y prensas térmicas industriales para sublimación, DTF y vinilo textil. Presencia en más de 50 países.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Alto de las Atalayas, 18",
    addressLocality: "Cabezo de Torres",
    addressRegion: "Murcia",
    postalCode: "30110",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9887,
    longitude: -1.0742,
  },
  telephone: "+34968902300",
  email: "info@beinsen.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-968-902-300",
    contactType: "sales",
    email: "info@beinsen.com",
    availableLanguage: ["Spanish", "English", "Portuguese", "Italian"],
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 37.9887, longitude: -1.0742 },
    geoRadius: "50000000",
  },
  sameAs: [
    "https://www.linkedin.com/company/beinsen",
    "https://www.instagram.com/beinsen",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://beinsen.com/#website",
  url: "https://beinsen.com",
  name: "Beinsen",
  description: "Fabricante líder de planchas transfer y prensas térmicas industriales.",
  publisher: { "@id": "https://beinsen.com/#organization" },
  inLanguage: ["es", "en", "pt", "it"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://beinsen.com/planchas?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} min-h-screen flex flex-col pt-20 bg-background text-foreground`}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientProviders>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
