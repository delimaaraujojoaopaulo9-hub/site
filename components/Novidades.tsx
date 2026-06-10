'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const news = [
  {
    id: 'n1',
    name: 'Jaqueta Harrington Grafite',
    category: 'Outerwear',
    price: 890,
    image: '/images/city.webp',
    badge: 'Novo',
    description: 'Corte reto, tecido anti-vento e forro xadrez tonal.',
  },
  {
    id: 'n2',
    name: 'Calça Cargo Refinada',
    category: 'Casual',
    price: 640,
    image: '/images/geo.webp',
    badge: 'Novo',
    description: 'Releitura contemporânea do clássico cargo em sarja premium.',
  },
  {
    id: 'n3',
    name: 'Camisa Linho Off-White',
    category: 'Camisaria',
    price: 420,
    image: '/images/hud.webp',
    badge: 'Novo',
    description: 'Leveza e sofisticação para dias quentes e ocasiões especiais.',
  },
];

const fmt = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(v);

export default function Novidades() {
  return (
    <section id="novidades" className="bg-paper py-20 md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ash">Recém-chegados</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Novidades</h2>
          </div>
          <a href="#colecao" className="text-xs font-medium uppercase tracking-[0.2em] text-ash underline-offset-4 transition-colors hover:text-ink hover:underline">
            Ver todas →
          </a>
        </motion.div>

        {/* Layout editorial: item grande + dois menores */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Destaque principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="group relative md:row-span-2 lg:row-span-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-graphite lg:aspect-auto lg:h-full lg:min-h-[540px]">
              <Image
                src={news[0].image}
                alt={news[0].name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <span className="absolute left-4 top-4 bg-ink px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-paper">
                {news[0].badge}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-mist/60">{news[0].category}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-paper">{news[0].name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-mist/70">{news[0].description}</p>
                <p className="mt-3 text-sm font-medium text-paper">{fmt(news[0].price)}</p>
              </div>
            </div>
          </motion.div>

          {/* Dois menores */}
          {news.slice(1).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-graphite md:aspect-[3/2] lg:aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute left-4 top-4 bg-ink px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-paper">
                  {item.badge}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-mist/60">{item.category}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-paper">{item.name}</h3>
                  <p className="mt-2 text-sm font-medium text-paper">{fmt(item.price)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
