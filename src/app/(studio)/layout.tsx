import type { Metadata } from "next";
import "../globals.css";

// Metadata tanımı
export const metadata: Metadata = {
  title: "Studio | Admin Panel",
  description: "Content Management System for Blog",
};

// Root Layout bileşeni
export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-svh bg-black">{children}</body>
    </html>
  );
}
