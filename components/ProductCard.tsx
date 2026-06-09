'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/services/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value);

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-graphite">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-ink px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-paper">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-4 text-center transition-transform duration-300 group-hover:translate-y-0">
          <button className="text-xs font-medium uppercase tracking-[0.2em] text-paper">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-[11px] uppercase tracking-[0.2em] text-ash">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-ink">{product.name}</h3>
        <p className="text-sm text-graphite">{formatPrice(product.price)}</p>
      </div>
    </motion.article>
  );
}
