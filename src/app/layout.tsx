import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { WhatsappButton } from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laxmi Modular Kitchen & Interior",
  description: "Modular Kitchen and interior services in Bilaspur Chhattisgarh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-1 mx-auto w-full">
          {children}
          <WhatsappButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
