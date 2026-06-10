'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/services/types';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section id="colecao" className="bg-graphite/5 py-20 md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ash">
            Seleção
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Produtos em Destaque
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ash">
            Curadoria minimalista em preto, branco e cinza para o homem moderno.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a href="#colecao" className="btn-outline">
            Ver coleção completa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
