import type { Metadata } from "next";
import Image from "next/image";
import { focaccia, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Focaccia",
  description: focaccia.lede,
};

export default function FocacciaPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-6 md:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">Baked to order</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">{focaccia.title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{focaccia.lede}</p>
      </section>

      <section aria-label="Order focaccia" className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2">
        {focaccia.items.map((item, i) => (
          <article key={item.name} className="overflow-hidden rounded-2xl bg-white/60 ring-1 ring-rule">
            <div className="relative aspect-[16/10]">
              <Image src={item.image.src} alt={item.image.alt} fill priority={i === 0} sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-7">
              <div>
                <h2 className="font-serif text-2xl">{item.name}</h2>
                <p className="mt-1 text-lg tabular-nums text-ink-soft">{item.price}</p>
              </div>
              <a
                href={item.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-red px-6 py-3 font-medium text-paper transition-colors hover:bg-red-deep"
              >
                Order online<span className="sr-only">: {item.name} (opens Square in a new tab)</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <ul className="grid gap-8 border-y border-rule py-10 sm:grid-cols-3">
          {focaccia.facts.map((f) => (
            <li key={f.title}>
              <h2 className="font-serif text-2xl">{f.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{f.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <p className="text-lg text-ink-soft">Rather call? We&rsquo;ll have it ready.</p>
          <a
            href={`tel:${site.phone.tel}`}
            className="mt-4 inline-block font-serif text-3xl underline decoration-rule underline-offset-8 hover:decoration-red sm:text-4xl"
          >
            {site.phone.display}
          </a>
        </div>
      </section>
    </>
  );
}
