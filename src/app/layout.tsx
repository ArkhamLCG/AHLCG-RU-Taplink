import type { Metadata } from "next";
import { Cormorant_Garamond, Old_Standard_TT } from "next/font/google";
import { AppProvider } from "@/slices/app/ui";
import { getMenuData } from "@/slices/entities/menu/lib";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-old-standard-tt",
});

export const metadata: Metadata = {
  title: "Карточный ужас Аркхэма",
  description: "Сайт сообщества настольной игры",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#000000",
  colorScheme: "dark",
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = await getMenuData();

  return (
    <html
      lang="ru"
      className={`${cormorantGaramond.variable} ${oldStandardTT.variable}`}
      suppressHydrationWarning
    >
      <body>
        <AppProvider menuItems={menuItems}>{children}</AppProvider>
      </body>
    </html>
  );
}
