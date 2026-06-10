'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Alfaiataria', count: 42, image: '/images/geo.webp', href: '#colecao' },
  { name: 'Camisaria', count: 38, image: '/images/hud.webp', href: '#colecao' },
  { name: 'Casual', count: 56, image: '/images/city.webp', href: '#colecao' },
];

export default function Categories() {
  return (
    <section id="categorias" className="bg-paper py-20 md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ash">
              Explore
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Categorias
            </h2>
          </div>
          <Link
            href="#colecao"
            className="text-xs font-medium uppercase tracking-[0.2em] text-ash underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Ver tudo →
          </Link>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={cat.href}
                className="group relative block aspect-[4/5] overflow-hidden bg-graphite"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

                {/* Número do canto */}
                <span className="absolute right-4 top-4 font-display text-7xl font-bold leading-none text-paper/10 transition-colors duration-300 group-hover:text-paper/20">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-mist/60">
                    {cat.count} peças
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-paper">
                    {cat.name}
                  </h3>
                  <span className="mt-3 inline-block border-b border-paper/0 pb-px text-xs uppercase tracking-[0.2em] text-mist transition-all duration-300 group-hover:border-mist">
                    Explorar →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
