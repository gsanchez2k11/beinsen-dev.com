import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MagneticCursor } from "@/components/MagneticCursor";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Beinsen | Planchas Transfer Profesionales",
  description: "Fabricante líder de planchas transfer para personalización de prendas. Calidad, robustez y precisión para profesionales exigentes en sublimación, DTF y vinilo textil.",
  keywords: "planchas transfer, personalización, sublimación, DTF, vinilo textil, beinsen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col pt-20 bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <MagneticCursor />
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
