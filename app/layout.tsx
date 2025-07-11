import type { Metadata } from "next";
import Header from '@/src/shared/ui/header/index'
import "./globals.css";

export const metadata: Metadata = {
  title: "Access AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
