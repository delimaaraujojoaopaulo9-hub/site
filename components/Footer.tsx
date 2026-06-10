import Link from 'next/link';

const columns = [
  {
    title: 'Loja',
    links: [
      { label: 'Novidades', href: '#novidades' },
      { label: 'Alfaiataria', href: '#colecao' },
      { label: 'Camisaria', href: '#colecao' },
      { label: 'Casual', href: '#colecao' },
      { label: 'Knitwear', href: '#colecao' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Contato', href: '#' },
      { label: 'Trocas e Devoluções', href: '#' },
      { label: 'Entregas', href: '#' },
      { label: 'Guia de Tamanhos', href: '#' },
    ],
  },
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre a Marca', href: '#sobre' },
      { label: 'Sustentabilidade', href: '#' },
      { label: 'Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Newsletter */}
      <div className="border-b border-paper/10">
        <div className="container-content py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold">Fique por dentro.</h3>
              <p className="mt-1 text-sm text-ash">Novidades e lançamentos exclusivos no seu e-mail.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-sm gap-0"
            >
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 border border-paper/20 bg-transparent px-4 py-3 text-xs text-paper placeholder:text-ash/60 outline-none focus:border-paper/50"
              />
              <button
                type="submit"
                className="bg-paper px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-mist"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-content py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl font-bold uppercase tracking-brand">ATELIÊ</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              Moda masculina premium. Peças atemporais para o homem moderno, do casual ao formal.
            </p>
            <div className="mt-6 flex gap-4">
              {['IG', 'FB', 'TK'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-paper/15 text-[10px] font-semibold uppercase text-ash transition-colors hover:border-paper hover:text-paper"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-mist">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ash transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row">
          <p className="text-xs text-ash">
            © {new Date().getFullYear()} ATELIÊ. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-ash">
            <span>Pagamento seguro</span>
            <span className="mx-2 text-paper/20">·</span>
            {['Visa', 'Mastercard', 'Pix'].map((p) => (
              <span key={p} className="rounded border border-paper/15 px-2 py-0.5 text-[10px] font-medium text-mist">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
