import ShopPageClient from './shopPageClient';
import { PRODUCTS } from '../../../lib/products-data';

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;
  return <ShopPageClient products={PRODUCTS} initialCategory={cat ?? ''} />;
}
