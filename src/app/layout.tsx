import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import MobileNavbar from "@/components/MobileNavbar";

export const metadata: Metadata = {
  title: "Wisebills",
  description: "Aplicativo de gestão financeira",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <html lang="pt-br">
          <body className="bg-primary text-white font-Mulish">
              <Header />
              {children}
              <MobileNavbar />
          </body>
      </html>
  );
}
 