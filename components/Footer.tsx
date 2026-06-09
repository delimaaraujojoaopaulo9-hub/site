import Link from 'next/link';

const columns = [
  {
    title: 'Loja',
    links: ['Novidades', 'Alfaiataria', 'Camisaria', 'Casual', 'Knitwear'],
  },
  {
    title: 'Atendimento',
    links: ['Contato', 'Trocas e Devoluções', 'Entregas', 'Guia de Tamanhos'],
  },
  {
    title: 'Institucional',
    links: ['Sobre a Marca', 'Sustentabilidade', 'Política de Privacidade', 'Termos'],
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink text-paper">
      <div className="container-content py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl font-bold uppercase tracking-brand">
              ATELIÊ
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              Moda masculina premium. Peças atemporais para o homem moderno.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-ash transition-colors hover:text-paper"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-steel/40 pt-8 sm:flex-row">
          <p className="text-xs text-ash">
            © {new Date().getFullYear()} ATELIÊ. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'TikTok'].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-xs uppercase tracking-[0.15em] text-ash transition-colors hover:text-paper"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
