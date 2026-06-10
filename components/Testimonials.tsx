'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Rafael Monteiro',
    role: 'Executivo — São Paulo',
    initials: 'RM',
    text: 'Comprei o blazer de alfaiataria para uma reunião importante e recebi elogios o dia inteiro. A qualidade do tecido e o caimento são excepcionais. Definitivamente é minha loja de referência para roupas de trabalho.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lucas Ferreira',
    role: 'Designer — Rio de Janeiro',
    initials: 'LF',
    text: 'Finalmente uma marca que entende que minimalismo não é mesmice. As peças têm personalidade própria, são versáteis e duráveis. Uso para trabalho e final de semana sem problema. Atendimento impecável também.',
    rating: 5,
  },
  {
    id: 3,
    name: 'André Costa',
    role: 'Arquiteto — Curitiba',
    initials: 'AC',
    text: 'Compro há dois anos e nunca me decepcionei. A paleta monocromática facilita muito a composição do look. Cada peça é pensada para combinar com todas as outras. Estilo sem esforço, exatamente como deve ser.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Bruno Alves',
    role: 'Advogado — Brasília',
    initials: 'BA',
    text: 'O sobretudo de lã é a melhor peça que já comprei em toda minha vida. Uso há três invernos e está impecável. Vale cada centavo. A entrega foi rápida e a embalagem premium deu ainda mais valor ao produto.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ash">
            Quem usa, aprova
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Depoimentos</h2>
        </motion.div>

        {/* Citação principal */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeOut' as const }}
              className="text-center"
            >
              {/* Aspas decorativas */}
              <span className="font-display text-8xl font-bold leading-none text-paper/10 select-none">
                "
              </span>
              <p className="mt-2 text-lg font-light leading-relaxed text-mist sm:text-xl">
                {t.text}
              </p>

              <div className="mt-10 flex flex-col items-center gap-3">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-steel">
                  <span className="text-xs font-semibold uppercase tracking-widest text-paper">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-paper">{t.name}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-ash">{t.role}</p>
                </div>
                {/* Estrelas */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-mist">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navegação */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Depoimento ${i + 1}`}
                className={`transition-all duration-300 ${
                  i === active
                    ? 'h-px w-10 bg-paper'
                    : 'h-px w-4 bg-paper/30 hover:bg-paper/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Números / prova social */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-px border border-paper/10 bg-paper/10 sm:grid-cols-4"
        >
          {[
            { n: '98%', label: 'Satisfação' },
            { n: '+3.000', label: 'Clientes' },
            { n: '4.9 ★', label: 'Avaliação média' },
            { n: '48h', label: 'Entrega express' },
          ].map(({ n, label }) => (
            <div key={label} className="flex flex-col items-center bg-ink px-6 py-10">
              <p className="font-display text-3xl font-bold text-paper">{n}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ash">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
