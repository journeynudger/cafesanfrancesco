import type { Metadata } from "next";
import MenuBoard from "@/components/MenuBoard";
import { getMenuBoards } from "@/lib/content";

// The printable menu: one letter-size page per board. `npm run menu:pdf` prints this route
// to public/cafe-san-francesco-menu.pdf. Not linked from the site.
export const metadata: Metadata = {
  title: "Printable menu",
  robots: { index: false, follow: false },
};

export default function PrintMenuPage() {
  return (
    <main className="print-sheets">
      <h1 className="sr-only">Café San Francesco menu</h1>
      {getMenuBoards().map((board) => (
        <MenuBoard key={board.id} board={board} print priority />
      ))}
    </main>
  );
}
