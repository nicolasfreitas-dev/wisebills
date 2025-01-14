import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SobraCash",
  description: "Aplicativo de gestão financeira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-bg-primary text-primary-text-color font-Mulish">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
