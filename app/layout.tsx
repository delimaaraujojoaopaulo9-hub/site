import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import ClientShell from '@/components/ClientShell';

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
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
