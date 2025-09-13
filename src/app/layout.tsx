import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Карточный ужас Аркхэма",
  description: "Сайт сообщества настольной игры",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
