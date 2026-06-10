'use client';

import { motion } from 'framer-motion';

const pillars = [
  { n: '01', title: 'Matéria-prima nobre', desc: 'Lã merino, linho egípcio, seda e algodão Pima selecionados de fornecedores certificados.' },
  { n: '02', title: 'Alfaiataria precisa', desc: 'Modelagem desenvolvida por alfaiates com décadas de experiência. Cada costura é revisada à mão.' },
  { n: '03', title: 'Design atemporal', desc: 'Paleta monocromática e silhuetas clássicas que resistem às tendências sazonais.' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-paper py-20 md:py-28">
      <div className="container-content">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Blocos visuais */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="relative h-[480px]"
          >
            <div className="absolute left-0 top-0 h-[380px] w-[72%] bg-graphite" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[62%] border-2 border-steel/30" />
            <div className="absolute bottom-10 left-8 border border-paper bg-paper p-6 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash">Desde</p>
              <p className="mt-1 font-display text-4xl font-bold text-ink">2014</p>
              <p className="mt-1 text-xs text-ash">Referência em moda masculina premium</p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ash">A Marca</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Elegância que<br />não precisa se anunciar.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ash">
              Nascemos da convicção de que o estilo masculino é construído sobre o essencial.
              Não seguimos tendências — criamos peças que atravessam décadas com a mesma pertinência.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Cada coleção parte da paleta monocromática: preto, branco e cinza.
              Cores que nunca envelhecem, que combinam com tudo e revelam o caráter de quem as veste.
            </p>

            <ul className="mt-10 space-y-6">
              {pillars.map((p) => (
                <li key={p.n} className="flex gap-5">
                  <span className="mt-0.5 shrink-0 font-display text-xs font-bold text-ink/25">{p.n}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">{p.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-ash">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
