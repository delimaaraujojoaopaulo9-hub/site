import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Product } from './types';

/**
 * Catálogo de fallback usado quando o Firebase ainda não está configurado.
 * Substitua/complete pela coleção real do Firestore em produção.
 */
const fallbackProducts: Product[] = [
  {
    id: '1',
    name: 'Blazer Alfaiataria Slim',
    category: 'Alfaiataria',
    price: 899,
    image: '/images/geo.webp',
    badge: 'Novo',
  },
  {
    id: '2',
    name: 'Camisa Oxford Preta',
    category: 'Camisaria',
    price: 349,
    image: '/images/hud.webp',
  },
  {
    id: '3',
    name: 'Calça Chino Grafite',
    category: 'Casual',
    price: 459,
    image: '/images/city.webp',
    badge: 'Best Seller',
  },
  {
    id: '4',
    name: 'Sobretudo Lã Premium',
    category: 'Inverno',
    price: 1290,
    image: '/images/geo.webp',
  },
  {
    id: '5',
    name: 'Tricô Gola Alta Cinza',
    category: 'Knitwear',
    price: 529,
    image: '/images/hud.webp',
  },
  {
    id: '6',
    name: 'Polo Piqué Branca',
    category: 'Casual',
    price: 279,
    image: '/images/city.webp',
    badge: 'Novo',
  },
];

/**
 * Busca os produtos do Firestore. Se a coleção estiver vazia ou o
 * Firebase não estiver configurado, retorna o catálogo de fallback.
 */
export async function getProducts(): Promise<Product[]> {
  if (!db) return fallbackProducts;

  try {
    const snapshot = await getDocs(collection(db, 'products'));
    if (snapshot.empty) return fallbackProducts;

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, 'id'>),
    }));
  } catch (error) {
    console.error('Erro ao buscar produtos do Firestore:', error);
    return fallbackProducts;
  }
}
