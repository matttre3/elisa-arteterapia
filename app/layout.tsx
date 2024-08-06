import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Elisa Daolio - Arteterapeuta Milano",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <div className="container mx-auto pl-5 pr-5 sm:pl-0 sm:pr-0">
          {children}
        </div>
      </body>
    </html>
  );
}
