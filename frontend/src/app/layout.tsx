import type { Metadata } from "next";
import '../globals.css';

export const metadata: Metadata = {
  title: "Plantilla Básica",
  description: "Una plantilla básica para proyectos con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}