import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artisane - AI Business Co-Founder untuk Pengrajin",
  description:
    "Platform AI yang membantu pengrajin lokal Indonesia dengan smart pricing dan brand identity. Transformasi UMKM menjadi brand profesional.",
  keywords: ["UMKM", "AI", "branding", "pricing", "kerajinan", "Indonesia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#FDFBF7] text-[#1A1A1A] antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
