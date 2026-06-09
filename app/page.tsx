import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/services/productService';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />

      {/* Coleção */}
      <section id="produtos" className="container-content py-20 md:py-28">
        <div className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-ash">
            Curadoria
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Coleção em Destaque
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-ash">
            Peças selecionadas em uma paleta atemporal de preto, branco e cinza.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Sobre a marca */}
      <section id="sobre" className="bg-graphite text-paper">
        <div className="container-content grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-ash">
              A Marca
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Elegância sem esforço
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Nascemos da convicção de que o estilo masculino é construído sobre
              o essencial. Cada peça é pensada para durar — no guarda-roupa e no
              tempo. Tecidos nobres, modelagem precisa e acabamento impecável.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Inspirados na sofisticação atemporal das grandes casas de moda,
              traduzimos a alfaiataria em um vestir contemporâneo e versátil.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-[3/4] bg-ink" />
            <div className="aspect-[3/4] translate-y-6 bg-steel" />
            <div className="aspect-[3/4] bg-ash/40" />
          </div>
        </div>
      </section>
    </>
  );
}
