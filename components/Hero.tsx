'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-graphite to-steel" />

      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      {/* Detalhe de luz */}
      <div className="pointer-events-none absolute right-0 top-0 h-[70vh] w-[45vw] opacity-10 [background:radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.6),transparent_60%)]" />

      {/* Linha decorativa vertical */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' as const }}
        style={{ transformOrigin: 'top' }}
        className="absolute left-[calc(50%-1px)] top-0 hidden h-32 w-px bg-gradient-to-b from-paper/20 to-transparent md:block"
      />

      <div className="container-content relative z-10 pb-20 pt-40">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Coluna de texto */}
          <div>
            <motion.div {...fadeUp(0.1)} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-mist/40" />
              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-mist/70">
                Coleção Outono / Inverno 2026
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl font-bold leading-[1.05] text-paper sm:text-6xl lg:text-[5.5rem]"
            >
              Vestir bem<br />
              é uma<br />
              <em className="not-italic text-mist">atitude.</em>
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="mt-7 max-w-md text-base leading-relaxed text-mist/70">
              Alfaiataria contemporânea para o homem que cuida da própria imagem.
              Peças atemporais, tecidos nobres e corte impecável — do casual ao formal.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#colecao"
                className="inline-flex items-center gap-2 bg-paper px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-mist"
              >
                Ver Coleção
                <span className="text-lg leading-none">→</span>
              </Link>
              <Link
                href="#categorias"
                className="inline-flex items-center gap-2 border border-paper/25 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-paper/80 transition-colors hover:border-paper hover:text-paper"
              >
                Explorar
              </Link>
            </motion.div>

            {/* Números */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-14 flex flex-wrap gap-10 border-t border-paper/10 pt-10"
            >
              {[
                { n: '10+', label: 'Anos no mercado' },
                { n: '3 mil', label: 'Clientes ativos' },
                { n: '200+', label: 'Peças exclusivas' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-paper">{n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-mist/60">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Coluna visual — blocos decorativos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' as const }}
            className="relative hidden md:block"
          >
            <div className="relative h-[580px]">
              <div className="absolute right-0 top-0 h-[420px] w-[72%] bg-steel/60" />
              <div className="absolute bottom-0 left-0 h-[360px] w-[60%] border border-paper/10" />
              <div className="absolute bottom-10 right-10 h-[200px] w-[35%] bg-paper/5 backdrop-blur-sm" />
              {/* Badge flutuante */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute left-6 top-16 border border-paper/10 bg-ink/80 p-5 backdrop-blur-sm"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-mist/60">Nova peça</p>
                <p className="mt-1 font-display text-sm font-semibold text-paper">Blazer Linho</p>
                <p className="mt-0.5 text-xs text-ash">R$ 1.290</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-[10px] uppercase tracking-[0.25em] text-mist/40"
        >
          scroll
        </motion.span>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ transformOrigin: 'top' }}
          className="relative h-14 w-px bg-paper/10"
        >
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute top-0 h-4 w-px bg-paper/50"
          />
        </motion.div>
      </div>
    </section>
  );
}
