import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

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

// Header, footer and skip link shared by every public page (and the 404).
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
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
    </div>
  );
}
