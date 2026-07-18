'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticProduct } from '../../../lib/products-data';
import { Star, ChevronRight, MessageCircle } from 'lucide-react';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BG = '#F0F5FF';
const WA_NUMBER = '919899955506';

interface Props {
  products: StaticProduct[];
  initialCategory?: string;
}

// Marketing category order for the chips (matches homepage category cards).
const CATEGORY_ORDER = ['Tower Cooler', 'Personal Cooler', 'Desert Cooler', 'Window Cooler', 'Industrial Cooler'];

function ProductCard({ product }: { product: StaticProduct }) {
  const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 12, overflow: 'hidden', transition: 'transform 0.25s, box-shadow 0.25s', boxShadow: '0 2px 10px rgba(10,91,214,0.07)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(10,91,214,0.14)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(10,91,214,0.07)'; }}
    >
      <Link href={`/product/${product.slug}`} style={{ textDecoration: 'none' }}>
        <div style={{ position: 'relative', aspectRatio: '4/3', background: '#e8f0ff', overflow: 'hidden' }}>
          <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'contain', padding: '12px' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => { (e.target as HTMLImageElement).src = '/coming-soon.png'; }}
          />
          {product.badge && (
            <span style={{ position: 'absolute', top: 12, left: 12, background: BLUE, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', borderRadius: 4 }}>{product.badge}</span>
          )}
          {discount > 0 && (
            <span style={{ position: 'absolute', top: 12, right: 12, background: '#E8450A', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 4 }}>{discount}% OFF</span>
          )}
        </div>
        <div style={{ padding: '18px 20px 16px' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: 6, fontWeight: 600 }}>{product.category}</p>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 6, lineHeight: 1.2 }}>{product.name}</h3>
          <p style={{ fontSize: 12, color: 'rgba(11,30,61,0.75)', marginBottom: 10, lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.tagline}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(i => <Star key={i} style={{ width: 13, height: 13, fill: i <= Math.round(product.rating) ? '#FFB800' : '#dde8ff', color: i <= Math.round(product.rating) ? '#FFB800' : '#dde8ff' }} />)}
            </div>
            <span style={{ fontSize: 11, color: 'rgba(11,30,61,0.72)' }}>({product.reviewCount})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: DARK }}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.regularPrice > product.price && (
              <span style={{ fontSize: 13, color: 'rgba(11,30,61,0.72)', textDecoration: 'line-through' }}>₹{product.regularPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
        </div>
      </Link>
      <div style={{ padding: '0 20px 20px', display: 'flex', gap: 8 }}>
        <Link href={`/product/${product.slug}`}
          style={{ flex: 1, background: BLUE, color: '#fff', textAlign: 'center', padding: '10px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 8, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, transition: 'background 0.2s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0944A8')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = BLUE)}
        >
          DETAILS <ChevronRight size={13} />
        </Link>
        <a href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20price%20and%20delivery%20details.`}
          target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, background: '#25D366', color: '#fff', textAlign: 'center', padding: '10px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 8, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, transition: 'background 0.2s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1da851')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#25D366')}
        >
          <MessageCircle size={13} /> ENQUIRE
        </a>
      </div>
    </div>
  );
}

export default function ShopPageClient({ products, initialCategory = '' }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = useMemo(() => {
    const present = new Set(products.map((p) => p.category));
    // Ordered marketing list first, then any extras from data
    const ordered = CATEGORY_ORDER.filter((c) => present.has(c));
    const extras = [...present].filter((c) => !CATEGORY_ORDER.includes(c));
    return [...ordered, ...extras];
  }, [products]);
  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase()) && !p.category.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      return true;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '64px 32px', borderBottom: `4px solid ${BLUE}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: `radial-gradient(circle, rgba(10,91,214,0.18) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 16 }}>◆ Factory Direct</span>
          <h1 style={{ fontSize: 'clamp(56px,9vw,110px)', fontWeight: 900, color: '#fff', lineHeight: 0.9, marginBottom: 16, letterSpacing: '-0.02em' }}>
            ALL<br /><span style={{ color: BLUE }}>COOLERS.</span>
          </h1>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.85 }}>
            Desert coolers, tower coolers, personal coolers, window coolers and industrial coolers — manufactured at our Bawana, Delhi factory. Buy direct at factory prices.
          </p>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '12px 28px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 14px rgba(37,211,102,0.35)' }}
          >
            <MessageCircle size={15} /> WhatsApp for Best Price
          </a>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 32px' }}>

        {/* Category heading */}
        <h2 style={{ fontSize: 'clamp(22px,3.2vw,32px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, marginBottom: 4 }}>
          {selectedCategory ? `${selectedCategory}s` : 'All Coolers'}
        </h2>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(11,30,61,0.8)', marginBottom: 22 }}>
          {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Category chips */}
        <div className="cat-chips" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 22 }}>
          {[{ label: 'All Coolers', val: '' }, ...categories.map((c) => ({ label: `${c}s`, val: c }))].map((chip) => {
            const active = selectedCategory === chip.val;
            return (
              <button
                key={chip.val || 'all'}
                onClick={() => setSelectedCategory(chip.val)}
                style={{ padding: '9px 18px', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', cursor: 'pointer', fontFamily: 'inherit', border: `1.5px solid ${active ? BLUE : '#dde8ff'}`, background: active ? BLUE : '#fff', color: active ? '#fff' : DARK, transition: 'background 0.18s, color 0.18s, border-color 0.18s' }}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', maxWidth: 440, marginBottom: 32 }}>
          <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, color: 'rgba(11,30,61,0.78)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search coolers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '12px 16px 12px 40px', border: `1.5px solid #dde8ff`, background: '#fff', color: DARK, fontSize: 13, outline: 'none', boxSizing: 'border-box', borderRadius: 8, fontFamily: 'inherit' }}
            onFocus={e => (e.currentTarget.style.borderColor = BLUE)}
            onBlur={e => (e.currentTarget.style.borderColor = '#dde8ff')}
          />
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '72px 32px', background: '#fff', border: '1.5px solid #dde8ff', borderRadius: 16 }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 8 }}>
              {selectedCategory ? `${selectedCategory}s coming soon` : 'No coolers match your search'}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.7)', marginBottom: 24, maxWidth: 420, margin: '0 auto 24px', lineHeight: 1.7 }}>
              {selectedCategory
                ? `We're expanding our ${selectedCategory.toLowerCase()} range. WhatsApp us for current availability and factory pricing.`
                : 'Try a different search or browse all coolers.'}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, do you have ${selectedCategory || 'air coolers'} available?`)}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                <MessageCircle size={14} /> Enquire on WhatsApp
              </a>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory(''); }}
                style={{ background: BLUE, color: '#fff', padding: '12px 24px', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                View All Coolers
              </button>
            </div>
          </div>
        ) : (
          <div className="shop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ marginTop: 64, background: DARK, borderRadius: 16, padding: '48px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
              NEED A BULK QUOTE OR CUSTOM ORDER?
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 24, lineHeight: 1.75 }}>
              We supply dealers, distributors, contractors and factories across India. OEM manufacturing available.
            </p>
            <a href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20need%20a%20bulk%20quote%20for%20CCTI%20India%20coolers.`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 18px rgba(37,211,102,0.35)' }}
            >
              <MessageCircle size={15} /> WHATSAPP FOR BULK PRICING
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .shop-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .shop-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
