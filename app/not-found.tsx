import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
    <section className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
      <h1 className="font-serif text-5xl tracking-tight">This page isn&rsquo;t on the menu</h1>
      <p className="mt-5 text-lg text-ink-soft">The page you were looking for has moved or no longer exists.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-red px-7 py-3.5 font-medium text-paper hover:bg-red-deep">
          Home
        </Link>
        <Link href="/menu" className="rounded-full border border-ink/25 px-7 py-3.5 font-medium hover:border-ink">
          Menu
        </Link>
      </div>
    </section>
    </SiteChrome>
  );
}
