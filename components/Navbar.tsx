'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrolled } from '@/hooks/useScrolled';

const links = [
  { label: 'Coleção', href: '#colecao' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Novidades', href: '#novidades' },
  { label: 'Sobre', href: '#sobre' },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink/10 bg-paper/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className={`font-display text-xl font-bold uppercase tracking-brand transition-colors ${
            scrolled ? 'text-ink' : 'text-paper'
          }`}
        >
          ATELIÊ
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`relative text-xs font-medium uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full ${
                  scrolled ? 'text-ash hover:text-ink' : 'text-mist hover:text-paper'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#colecao"
            className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
              scrolled ? 'text-ash hover:text-ink' : 'text-mist hover:text-paper'
            }`}
          >
            Entrar
          </Link>
          <Link
            href="#colecao"
            className={`border px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
              scrolled
                ? 'border-ink bg-ink text-paper hover:bg-graphite'
                : 'border-paper text-paper hover:bg-paper hover:text-ink'
            }`}
          >
            Ver Coleção
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px w-6 transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-paper'} ${
                open && i === 0 ? 'translate-y-[7px] rotate-45'
                : open && i === 1 ? 'opacity-0 scale-x-0'
                : open && i === 2 ? '-translate-y-[7px] -rotate-45'
                : ''
              }`}
            />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink/10 bg-paper"
          >
            <ul className="container-content divide-y divide-ink/5 pb-4 pt-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="#colecao" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
                  Ver Coleção
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
