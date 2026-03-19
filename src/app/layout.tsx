import type { Metadata } from "next";
import { Inter, Playfair_Display, Amiri, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-playfair" });
const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-amiri" });
const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-urdu" });

export const metadata: Metadata = {
  title: "Eid Mubarak — Celebrate Eid ul Fitr 2026",
  description: "A complete Eid ul Fitr Celebration Website featuring wishes, duas, fashion, and guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${amiri.variable} ${urdu.variable} antialiased font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
