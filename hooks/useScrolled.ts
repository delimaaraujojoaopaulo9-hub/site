'use client';

import { useEffect, useState } from 'react';

/**
 * Retorna `true` quando a página é rolada além do threshold informado.
 * Útil para alterar o estilo da Navbar ao rolar.
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
