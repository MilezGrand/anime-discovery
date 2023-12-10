import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
