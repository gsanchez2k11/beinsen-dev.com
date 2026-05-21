import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClientProviders } from "@/components/ClientProviders";
import { Analytics } from "@/components/Analytics";
import { SITE_URL } from "@/lib/site";

// Popup que aparece a los 6 s — se difiere para no impactar TBT inicial.
// (ssr:false no es válido en Server Components; el componente ya gestiona
// el primer render con sessionStorage en useEffect.)
const WarrantyPopup = dynamic(
  () => import("@/components/WarrantyPopup").then(m => ({ default: m.WarrantyPopup }))
);

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Beinsen | Planchas Transfer y Prensas Térmicas Industriales",
    template: "%s | Beinsen",
  },
  description: "Fabricante líder de planchas transfer y prensas térmicas industriales para sublimación, DTF y vinilo textil. Calidad certificada, presencia en 50+ países.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Beinsen",
    locale: "es_ES",
    type: "website",
    // images se generan dinámicamente vía app/opengraph-image.tsx
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
  "@id": `${SITE_URL}/#organization`,
  name: "Beinsen",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/logo.png`,
    width: 300,
    height: 100,
  },
  image: `${SITE_URL}/brand/logo.png`,
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
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Beinsen",
  description: "Fabricante líder de planchas transfer y prensas térmicas industriales.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["es", "en", "pt", "it"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/planchas?q={search_term_string}`,
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
            <WarrantyPopup />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
