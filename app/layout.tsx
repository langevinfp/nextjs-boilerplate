// Update file: /Users/tylercheves/Local Github Repos/nextjs-boilerplate/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Langevin Forest Products",
  description: "Langevin Forest Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`} // Added bg-white for better contrast
      >
        <Header />
        {/* Changed main to grow and push footer down */}
        <main className="pt-[72px] flex-grow">{children}</main>
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
