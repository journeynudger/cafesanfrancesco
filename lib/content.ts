import siteData from "@/content/site.json";
import homeData from "@/content/home.json";
import menuData from "@/content/menu.json";
import focacciaData from "@/content/focaccia.json";

export interface Img { src: string; width: number; height: number; alt: string }
export interface Phone { display: string; tel: string }

export interface Site {
  name: string;
  tagline: string;
  since: string;
  address: { street: string; city: string; mapUrl: string };
  phone: Phone;
  email: string;
  hours: { days: string; time: string }[];
  orderOnline: { label: string; url: string };
  nav: { label: string; href: string }[];
}

export interface Home {
  hero: { eyebrow: string; title: string; lede: string; image: Img };
  story: { title: string; paragraphs: string[]; image: Img };
  favorites: { title: string; items: { section: string; name: string }[] };
  catering: { title: string; paragraphs: string[]; note: string };
  reviews: { quote: string; name: string }[];
}

export type MenuTheme = "green" | "red" | "peach";
export interface MenuItem { name: string; description: string; price: string; advisory?: boolean }
export interface MenuSection { id: string; title: string; theme: MenuTheme; note?: string; items: MenuItem[] }
export interface MenuBoard { id: string; sections: string[]; photos: { src: string; alt: string }[] }
export interface Menu { advisory: string; plusNote: string; boards: MenuBoard[]; sections: MenuSection[] }

export interface Focaccia {
  title: string;
  lede: string;
  image: Img;
  items: { name: string; price: string; orderUrl: string; image: Img }[];
  facts: { title: string; text: string }[];
}

// `satisfies` makes a misspelled or missing key fail the type check.
export const site: Site = siteData satisfies Site;
export const home: Home = homeData satisfies Home;
export const menu: Menu = menuData as Menu;

// Each board with its sections resolved. A board naming a missing section fails the build.
export function getMenuBoards() {
  return menu.boards.map((board) => ({
    ...board,
    sections: board.sections.map((id) => {
      const section = menu.sections.find((s) => s.id === id);
      if (!section) throw new Error(`menu.json: board "${board.id}" names unknown section "${id}"`);
      if (!["green", "red", "peach"].includes(section.theme)) {
        throw new Error(`menu.json: section "${id}" has theme "${section.theme}"; use green, red or peach`);
      }
      return section;
    }),
  }));
}

// Price of a dish as the menu lists it, so the home page can never disagree with the menu.
export function getMenuPrice(sectionTitle: string, name: string): string {
  const item = menu.sections.find((s) => s.title === sectionTitle)?.items.find((i) => i.name === name);
  if (!item) throw new Error(`menu.json has no "${name}" under "${sectionTitle}"`);
  return item.price;
}
export const focaccia: Focaccia = focacciaData satisfies Focaccia;
