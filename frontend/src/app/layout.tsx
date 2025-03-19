// src/app/layout.tsx
import type { Metadata } from "next";
import '../globals.css';
import Navbar from '../components/layout/navigation/navbar/Navbar';
import Footer from '../components/layout/footer/Footer';

export const metadata: Metadata = {
  title: "Mi Proyecto Escalable",
  description: "Una plantilla escalable para proyectos grandes con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <main className="min-h-screen flex flex-col items-center justify-center p-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}