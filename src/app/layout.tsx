import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import HeaderView from "@/views/HeaderView";
import FooterView from "@views/FooterView";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Ваши любимые аниме в одном месте",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#1f2330]">
          <HeaderView />
          <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            {children}
          </main>
          <FooterView />
        </main>
      </body>
    </html>
  );
}
