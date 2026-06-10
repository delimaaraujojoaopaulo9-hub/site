export const dynamic = 'force-dynamic';

import nextDynamic from 'next/dynamic';
import { getProducts } from '@/services/productService';

const Hero = nextDynamic(() => import('@/components/Hero'), { ssr: false });
const Categories = nextDynamic(() => import('@/components/Categories'), { ssr: false });
const FeaturedProducts = nextDynamic(() => import('@/components/FeaturedProducts'), { ssr: false });
const Novidades = nextDynamic(() => import('@/components/Novidades'), { ssr: false });
const About = nextDynamic(() => import('@/components/About'), { ssr: false });
const Testimonials = nextDynamic(() => import('@/components/Testimonials'), { ssr: false });

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts products={featured} />
      <Novidades />
      <About />
      <Testimonials />
    </>
  );
}
