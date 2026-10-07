import type { Metadata, Viewport } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-onest",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ꜰx || ꜱɪʟᴇɴᴛ.Ss",
  description:
    "A quiet way to trade gold — and a community built around it. Learning, analysis and signals for XAUUSD traders. Founded by Eang Dara, Phnom Penh.",
  openGraph: {
    title: "ꜰx || ꜱɪʟᴇɴᴛ.Ss — Gold trading community",
    description:
      "ICT / MSNR for XAUUSD. Verified payouts across 8 prop firms. Join the free Telegram room.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${onest.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
