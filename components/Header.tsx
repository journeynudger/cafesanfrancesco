"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:h-20 sm:px-6">
        <Link href="/" className="mr-auto font-serif text-lg leading-none tracking-tight sm:text-2xl" aria-label={`${site.name}, home`}>
          Café San Francesco
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4 text-[15px] sm:gap-7">
          {site.nav.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`py-2 underline-offset-[6px] decoration-2 hover:text-red ${current ? "text-red underline" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${site.phone.tel}`}
            className="hidden rounded-full bg-red px-5 py-2.5 font-medium text-paper transition-colors hover:bg-red-deep sm:inline-block"
          >
            Call {site.phone.display}
          </a>
        </nav>
      </div>
    </header>
  );
}
