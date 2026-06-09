import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ATELIÊ — Moda Masculina Premium',
  description:
    'Loja premium de roupas masculinas. Peças atemporais, alfaiataria contemporânea e curadoria de estilo para o homem moderno.',
  keywords: ['moda masculina', 'roupas premium', 'alfaiataria', 'estilo', 'loja online'],
  openGraph: {
    title: 'ATELIÊ — Moda Masculina Premium',
    description: 'Peças atemporais para o homem moderno.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
