import type { Metadata } from "next";
import { menu, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu",
  description: "Appetizers, pasta, pizza, entrees, sandwiches, dessert and coffee at Café San Francesco on Harlem Ave, Chicago.",
};

export default function MenuPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 md:pt-16">
        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">Menu</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
          Call ahead on{" "}
          <a href={`tel:${site.phone.tel}`} className="text-ink underline decoration-rule underline-offset-4 hover:decoration-red">
            {site.phone.display}
          </a>{" "}
          and your order will be ready when you arrive.
        </p>
      </section>

      <nav
        aria-label="Menu sections"
        className="sticky top-16 z-30 border-y border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85 sm:top-20"
      >
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 py-2 [scrollbar-width:none] sm:px-4">
          {menu.sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-full px-4 py-2 text-[15px] whitespace-nowrap hover:bg-paper-deep hover:text-red">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {menu.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="border-b border-rule py-14 last:border-b-0 md:py-20">
            <div className="md:grid md:grid-cols-[16rem_1fr] md:gap-12">
              <div>
                <h2 id={`${section.id}-title`} className="font-serif text-4xl tracking-tight">
                  {section.title}
                </h2>
                {section.note && <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{section.note}</p>}
              </div>
              <ul className="mt-8 grid gap-x-12 gap-y-7 md:mt-1 lg:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <p className="flex items-baseline gap-3 font-serif text-xl">
                      <span>
                        {item.name}
                        {item.advisory && <span className="text-red" aria-label="see consumer advisory">*</span>}
                      </span>
                      <span aria-hidden="true" className="leader" />
                      <span className="tabular-nums">{item.price}</span>
                    </p>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-paper-deep p-6 text-sm leading-relaxed text-ink-soft sm:p-8">
          <p>{menu.plusNote}</p>
          <p className="mt-3">{menu.advisory}</p>
        </div>
      </section>
    </>
  );
}
