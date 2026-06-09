'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-paper">
      {/* Fundo com gradiente sutil preto/grafite */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-graphite to-steel" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="container-content relative z-10 py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-mist"
        >
          Coleção Outono / Inverno 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Vestir bem é<br />
          <span className="italic text-mist">uma atitude.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
        >
          Alfaiataria contemporânea e peças atemporais para o homem moderno.
          Curadoria minimalista em preto, branco e cinza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="#produtos"
            className="inline-flex items-center justify-center bg-paper px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-mist"
          >
            Ver Coleção
          </Link>
          <Link
            href="#sobre"
            className="inline-flex items-center justify-center border border-paper/40 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            A Marca
          </Link>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-10 w-px bg-paper/50"
        />
      </motion.div>
    </section>
  );
}
