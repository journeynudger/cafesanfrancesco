import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz", "SOFT"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://cafesanfrancesco.com"),
  title: { default: `${site.name} · Italian kitchen on Harlem Ave, Chicago`, template: `%s · ${site.name}` },
  description: site.tagline,
  openGraph: { siteName: site.name, images: ["/images/focaccia-everything.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: "Italian",
  telephone: site.phone.tel,
  email: site.email,
  foundingDate: site.since,
  url: "https://cafesanfrancesco.com",
  menu: "https://cafesanfrancesco.com/menu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3815 N. Harlem Ave.",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  openingHours: "Mo-Su 08:00-22:00",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
