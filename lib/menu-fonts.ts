import { Cormorant_Garamond, Open_Sans, Playfair_Display } from "next/font/google";

// The typefaces of the printed menu boards.
export const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });
export const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-cormorant" });
export const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-opensans" });

export const menuFontVars = `${playfair.variable} ${cormorant.variable} ${openSans.variable}`;
