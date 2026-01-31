// layout.tsx dosyanın güncel hali böyle olmalı:

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// Script importunu şimdilik kullanmayacağımız için silebilirsin

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Otonom Sistemler Kulübü",
  description: "Geleceği birlikte kodluyoruz. Teknoloji ve inovasyon odaklı öğrenci kulübü.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* 1. SİLİNDİ: Netlify Identity Widget Scripti */}
        <Navbar />
        {children}
        <Footer />
        {/* 2. SİLİNDİ: netlify-identity-redirect Scripti */}
        {/* Bu script sonsuz döngüye girip bağlantıyı koparıyor */}
      </body>
    </html>
  );
}