import Image from "next/image";
import Link from "next/link";
import { home, site, focaccia } from "@/lib/content";

export default function HomePage() {
  const { hero, story, favorites, catering, reviews } = home;
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pt-16 md:pb-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">{hero.eyebrow}</p>
          <h1 className="mt-5 font-serif text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{hero.lede}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-red px-7 py-3.5 font-medium text-paper transition-colors hover:bg-red-deep"
            >
              See the menu
            </Link>
            <a
              href={`tel:${site.phone.tel}`}
              className="rounded-full border border-ink/25 px-7 py-3.5 font-medium transition-colors hover:border-ink"
            >
              Call {site.phone.display}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[4/5]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Visit strip */}
      <section aria-label="Hours and location" className="border-y border-rule bg-paper-deep">
        <dl className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Open daily</dt>
            <dd className="mt-1.5 font-serif text-xl">{site.hours[0].time}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Find us</dt>
            <dd className="mt-1.5 font-serif text-xl">
              <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red">
                {site.address.street} {site.address.city}
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Order</dt>
            <dd className="mt-1.5 font-serif text-xl">
              <a href={`tel:${site.phone.tel}`} className="hover:text-red">{site.phone.display}</a>
              <span className="text-ink-soft"> · </span>
              <a href={site.orderOnline.url} target="_blank" rel="noopener noreferrer" className="hover:text-red">
                Grubhub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl md:order-2">
          <Image src={story.image.src} alt={story.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{story.title}</h2>
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Favorites */}
      <section className="bg-red text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">{favorites.title}</h2>
            <Link href="/menu" className="border-b border-paper/60 pb-1 font-medium hover:border-paper">
              The full menu
            </Link>
          </div>
          <ul className="mt-12 grid gap-x-16 gap-y-7 md:grid-cols-2">
            {favorites.items.map((item) => (
              <li key={item.name}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/80">{item.section}</p>
                <p className="mt-1 flex items-baseline gap-3 font-serif text-2xl">
                  <span>{item.name}</span>
                  <span aria-hidden="true" className="leader border-paper/40!" />
                  <span className="tabular-nums">{item.price}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Focaccia teaser */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image src={focaccia.image.src} alt={focaccia.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">Baked to order</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{focaccia.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{focaccia.lede}</p>
          <Link
            href="/focaccia"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-colors hover:bg-red"
          >
            Order focaccia
          </Link>
        </div>
      </section>

      {/* Catering */}
      <section className="border-y border-rule bg-paper-deep">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">Catering &amp; events</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{catering.title}</h2>
          {catering.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <p className="mt-6 font-serif text-lg italic">{catering.note}</p>
          <a
            href={`tel:${site.phone.tel}`}
            className="mt-9 inline-block rounded-full bg-red px-7 py-3.5 font-medium text-paper transition-colors hover:bg-red-deep"
          >
            Plan it with us · {site.phone.display}
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">What our guests say</h2>
        <ul className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.name} className="border-l-2 border-red pl-6">
              <figure>
                <blockquote className="font-serif text-xl leading-relaxed sm:text-2xl">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">{r.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
