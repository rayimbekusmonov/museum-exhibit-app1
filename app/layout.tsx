import type { Metadata, Viewport } from "next";
import { Amiri, Newsreader, Noto_Naskh_Arabic, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const amiri = Amiri({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap"
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-noto-naskh",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Museum Exhibit Guide",
  description:
    "Scan the QR code beside any exhibit to open its story, in Uzbek, English or Arabic."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0E1116"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          amiri.variable,
          newsreader.variable,
          notoNaskh.variable,
          jetbrains.variable,
          "min-h-screen"
        ].join(" ")}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
