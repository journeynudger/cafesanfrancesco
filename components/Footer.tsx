import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-olive text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-2xl leading-tight">Café San Francesco</p>
          <p className="mt-3 text-sm text-cream/80">Since {site.since}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">Visit</h2>
          <p className="mt-3 leading-relaxed">
            <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {site.address.street}
              <br />
              {site.address.city}
              <span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">Hours</h2>
          {site.hours.map((h) => (
            <p key={h.days} className="mt-3 leading-relaxed">
              {h.days}
              <br />
              {h.time}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">Order</h2>
          <ul className="mt-3 space-y-1.5 leading-relaxed">
            <li>
              <a href={`tel:${site.phone.tel}`} className="hover:underline">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.orderOnline.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {site.orderOnline.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-6 text-sm text-cream/80 sm:px-6">
          <span>© {new Date().getFullYear()} Café San Francesco</span>
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/focaccia" className="hover:underline">Focaccia</Link>
        </div>
      </div>
    </footer>
  );
}
