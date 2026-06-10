import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper text-center">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-ash">Página não encontrada</span>
      <h1 className="mt-4 font-display text-6xl font-bold text-ink">404</h1>
      <p className="mt-4 text-sm text-ash">A página que você procura não existe ou foi movida.</p>
      <Link href="/" className="btn-primary mt-8">
        Voltar para a Home
      </Link>
    </div>
  );
}
