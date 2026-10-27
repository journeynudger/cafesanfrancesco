import Image from "next/image";
import { site, menu, type getMenuBoards } from "@/lib/content";
import { menuFontVars } from "@/lib/menu-fonts";

type Board = ReturnType<typeof getMenuBoards>[number];

// One printed menu page: address bar, photo with the masthead, then one or two colored panels.
// The web menu stacks these; /print/menu lays each out on a letter-size sheet for the PDF.
export default function MenuBoard({ board, print = false, priority = false }: { board: Board; print?: boolean; priority?: boolean }) {
  const items = board.sections.flatMap((s) => s.items);
  const hasAdvisory = items.some((i) => i.advisory);
  const hasPlus = items.some((i) => i.price.endsWith("+"));
  const single = board.sections.length === 1;

  return (
    <article className={`board ${menuFontVars} ${print ? "board--print" : ""}`} aria-label={board.sections.map((s) => s.title).join(" and ")}>
      <p className="board__bar">
        {site.address.street.replace(/\.$/, "")} · {site.address.city} · {site.phone.display}
      </p>
      <div className="board__hero">
        {board.photos.map((p) => (
          <div key={p.src} className="board__photo">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority={priority}
              unoptimized={print}
              sizes={print ? "816px" : `(min-width: 1024px) ${Math.round(1024 / board.photos.length)}px, ${Math.round(100 / board.photos.length)}vw`}
              className="object-cover"
            />
          </div>
        ))}
        <div className="board__mast" aria-hidden="true">
          <span className="board__mast-sm">Cafe</span>
          <span className="board__mast-lg">San Francesco</span>
          <span className="board__mast-sm">Italiano</span>
        </div>
      </div>
      <div className={`board__panels ${single ? "" : "board__panels--split"}`}>
        {board.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className={`panel panel--${section.theme}`}>
            <h2 id={`${section.id}-title`} className="panel__title">
              {section.title}
            </h2>
            {section.note && <p className="panel__note">{section.note}</p>}
            <ul className={`panel__items ${single ? "panel__items--two" : ""}`}>
              {section.items.map((item) => (
                <li key={item.name} className="item">
                  <p className="item__head">
                    <span className="item__name">
                      {item.name}
                      {item.advisory && <span aria-label=", see consumer advisory"> *</span>}
                    </span>
                    <span className="item__price">{item.price}</span>
                  </p>
                  <p className="item__desc">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      {(hasAdvisory || hasPlus) && (
        <footer className={`board__foot panel--${board.sections[0].theme}`}>
          {hasPlus && <p>{menu.plusNote}</p>}
          {hasAdvisory && <p>{menu.advisory}</p>}
        </footer>
      )}
    </article>
  );
}
