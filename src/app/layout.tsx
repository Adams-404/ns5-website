import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ContentWrapper from "@/components/ContentWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NS5 | 5 Unicorns. 5 Sectors. 5 Years.",
  description: "Northern Nigeria's first unicorn factory — building the institutions that make staying the obvious choice.",
  keywords: ["NS5", "NorthStar Five", "Northern Nigeria", "Startups", "Unicorn", "Venture Building"],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${cormorant.variable} ${outfit.variable} ${spaceMono.variable} font-body bg-navy-primary text-foreground min-h-full flex flex-col`}
      >
        <Preloader />
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </body>
    </html>
  );
}
