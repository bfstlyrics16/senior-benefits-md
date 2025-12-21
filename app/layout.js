import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Senior Benefit Solutions",
  description:
    "Medicare information and resources for seniors in the greater Baltimore, MD area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hero.png" type="image/png" />
      </head>
      <body className={`${inter.className} theme-sbs`}>{children}</body>
    </html>
  );
}
