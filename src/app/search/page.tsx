'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  slug: string;
  url: string;
  image?: string;
  price?: string;
};

const CATALOG: Product[] = [
  { id: 1, name: 'IcyChill Tower 12"', slug: 'ccti-icychill-tower-12', url: '/product/ccti-icychill-tower-12', image: '/products/icychill-tower-12.png', price: '₹7,499' },
  { id: 2, name: 'Fiesta Tower Double Blower', slug: 'ccti-fiesta-tower-double-blower', url: '/product/ccti-fiesta-tower-double-blower', image: '/products/fiesta-tower-double-blower.png', price: '₹9,999' },
  { id: 3, name: 'Brezza Tower 16" Stealth Blue', slug: 'ccti-brezza-stealth-blue-tower-16', url: '/product/ccti-brezza-stealth-blue-tower-16', image: '/products/brezza-stealth-blue-tower-16.png', price: '₹10,999' },
  { id: 4, name: 'Brezza Tower 16" Aurora White', slug: 'ccti-brezza-aurora-white-tower-16', url: '/product/ccti-brezza-aurora-white-tower-16', image: '/products/brezza-aurora-white-tower-16.png', price: '₹10,999' },
  { id: 5, name: 'Neo Plus Double Blower', slug: 'ccti-neo-plus-double-blower', url: '/product/ccti-neo-plus-double-blower', image: '/products/neo-plus-double-blower.png', price: '₹5,999' },
  { id: 6, name: 'Neo Double Blower', slug: 'ccti-neo-double-blower', url: '/product/ccti-neo-double-blower', image: '/products/neo-double-blower.png', price: '₹3,499' },
  { id: 7, name: 'Swish 50 Aurora White', slug: 'ccti-swish-50-aurora-white', url: '/product/ccti-swish-50-aurora-white', image: '/products/swish-50-aurora-white.png', price: '₹5,499' },
  { id: 8, name: 'Swish 30 Aurora White', slug: 'ccti-swish-30-aurora-white', url: '/product/ccti-swish-30-aurora-white', image: '/products/swish-30-aurora-white.png', price: '₹3,999' },
  { id: 9, name: 'Swish 50 Stealth Blue', slug: 'ccti-swish-50-stealth-blue', url: '/product/ccti-swish-50-stealth-blue', image: '/products/swish-50-stealth-blue.png', price: '₹5,499' },
  { id: 10, name: 'Swish 30 Stealth Blue', slug: 'ccti-swish-30-stealth-blue', url: '/product/ccti-swish-30-stealth-blue', image: '/products/swish-30-stealth-blue.png', price: '₹3,999' },
];

function getQuery(): string {
  if (typeof window === 'undefined') return '';
  const p = new URLSearchParams(window.location.search);
  return p.get('q')?.trim() || '';
}

export default function SearchPage() {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    setQuery(getQuery());
    const onPop = () => setQuery(getQuery());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const results = useMemo(() => {
    if (!query) return CATALOG;
    const q = query.toLowerCase();
    return CATALOG.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <p className="text-gray-600 mb-6">
        Showing results for: <span className="font-semibold">{query || 'All products'}</span>
      </p>

      {results.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {results.map(p => (
            <article key={p.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <Link href={p.url} target="_blank" className="block">
                <div className="aspect-[4/3] bg-gray-100">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : null}
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{p.name}</h3>
                  {p.price && <div className="text-teal-600 font-semibold text-sm mt-1">{p.price}</div>}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
