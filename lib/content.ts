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
  focacciaPhone: Phone;
  email: string;
  hours: { days: string; time: string }[];
  orderOnline: { label: string; url: string };
  nav: { label: string; href: string }[];
}

export interface Home {
  hero: { eyebrow: string; title: string; lede: string; image: Img };
  story: { title: string; paragraphs: string[]; image: Img };
  favorites: { title: string; items: { section: string; name: string; price: string }[] };
  catering: { title: string; paragraphs: string[]; note: string };
  reviews: { quote: string; name: string }[];
}

export interface MenuItem { name: string; description: string; price: string; advisory?: boolean }
export interface MenuSection { id: string; title: string; note?: string; items: MenuItem[] }
export interface Menu { advisory: string; plusNote: string; sections: MenuSection[] }

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
export const menu: Menu = menuData satisfies Menu;
export const focaccia: Focaccia = focacciaData satisfies Focaccia;
