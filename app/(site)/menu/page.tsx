import type { Metadata } from "next";
import MenuBoard from "@/components/MenuBoard";
import { getMenuBoards, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu",
  description: "Appetizers, soups, salads, pasta, pizza, entrees, sandwiches, dessert and coffee at Café San Francesco on Harlem Ave, Chicago.",
};

const MENU_PDF = "/cafe-san-francesco-menu.pdf";

export default function MenuPage() {
  const boards = getMenuBoards();
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-12 pb-8 sm:px-6 md:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">Menu</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              Call ahead on{" "}
              <a href={`tel:${site.phone.tel}`} className="text-ink underline decoration-rule underline-offset-4 hover:decoration-red">
                {site.phone.display}
              </a>{" "}
              and your order will be ready when you arrive.
            </p>
          </div>
          <a
            href={MENU_PDF}
            download
            className="rounded-full border border-ink/25 px-6 py-3 font-medium transition-colors hover:border-ink"
          >
            Download menu (PDF)
          </a>
        </div>
      </section>

      <nav
        aria-label="Menu sections"
        className="sticky top-16 z-30 border-y border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85 sm:top-20"
      >
        <ul className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-2 py-2 [scrollbar-width:none] sm:px-4">
          {boards.flatMap((b) => b.sections).map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-full px-4 py-2 text-[15px] whitespace-nowrap hover:bg-paper-deep hover:text-red">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:gap-14 md:py-16">
        {boards.map((board, i) => (
          <MenuBoard key={board.id} board={board} priority={i === 0} />
        ))}
      </div>
    </>
  );
}
