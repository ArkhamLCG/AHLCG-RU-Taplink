import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { EmotionProvider } from "@/slices/app/ui";
import "@/slices/shared/styles";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cormorantGaramond.variable}>
      <body>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
