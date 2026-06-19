'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  Star, ShieldCheck, Truck, Check,
  ChevronRight, Package, Wind, MessageCircle
} from 'lucide-react';
import { StaticProduct, PRODUCTS } from '../../../../lib/products-data';

const ProductReviews = dynamic(() => import('../../../../components/ProductReviews'), { ssr: false });
const ProductFAQ = dynamic(() => import('../../../../components/ProductFaq'), { ssr: false });

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BG = '#F0F5FF';
const WA_NUMBER = '919899955506';

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map((i) => (
        <Star key={i} style={{ width: 14, height: 14, fill: i <= Math.round(rating) ? '#FFB800' : '#dde8ff', color: i <= Math.round(rating) ? '#FFB800' : '#dde8ff' }} />
      ))}
    </div>
  );
}

function ImageGallery({ images }: { images: string[] }) {
  const [main, setMain] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#ffffff', overflow: 'hidden', border: `2px solid #dde8ff`, borderRadius: 12, boxShadow: '0 4px 20px rgba(10,91,214,0.1)' }}>
        <Image
          src={images[main]}
          alt="Product"
          fill
          style={{ objectFit: 'contain', padding: 16, transition: 'opacity 0.3s' }}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          onError={(e) => { (e.target as HTMLImageElement).src = '/coming-soon.png'; }}
        />
      </div>
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setMain(i)}
              style={{ position: 'relative', flexShrink: 0, width: 72, height: 72, border: `2px solid ${i === main ? BLUE : '#dde8ff'}`, borderRadius: 8, overflow: 'hidden', opacity: i === main ? 1 : 0.6, cursor: 'pointer', background: '#ffffff', padding: 0, transition: 'opacity 0.2s, border-color 0.2s' }}
            >
              <Image src={src} alt="" fill style={{ objectFit: 'contain', padding: 6 }} sizes="72px"
                onError={(e) => { (e.target as HTMLImageElement).src = '/coming-soon.png'; }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const TABS = ['Features', 'Specifications', 'Installation & Use', 'Delivery'];

function Tabs({ product }: { product: StaticProduct }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ marginTop: 40, borderTop: `2px solid #dde8ff` }}>
      <div style={{ display: 'flex', borderBottom: `2px solid #dde8ff`, overflowX: 'auto' }}>
        {TABS.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{ padding: '12px 20px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', cursor: 'pointer', background: i === active ? BLUE : 'transparent', color: i === active ? '#fff' : 'rgba(11,30,61,0.45)', border: 'none', borderRadius: i === active ? '6px 6px 0 0' : 0, transition: 'background 0.2s, color 0.2s', fontFamily: 'inherit' }}
          >
            {t}
          </button>
        ))}
      </div>
      <div style={{ paddingTop: 24, paddingBottom: 8 }}>
        {active === 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {product.benefits.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 20, height: 20, background: `rgba(10,91,214,0.1)`, border: `1.5px solid ${BLUE}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Check style={{ width: 10, height: 10, color: BLUE }} />
                </span>
                <span style={{ fontSize: 13, color: DARK, lineHeight: 1.65 }}>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {active === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {product.ingredients.map((spec, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 16px', background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 8 }}>
                <div style={{ minWidth: 100, flexShrink: 0 }}>
                  <p style={{ fontSize: 15, fontWeight: 800, color: BLUE, lineHeight: 1.1 }}>{spec.value}</p>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 13, color: DARK, marginBottom: 3 }}>{spec.name}</p>
                  <p style={{ fontSize: 12, color: 'rgba(11,30,61,0.5)' }}>{spec.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {active === 2 && (
          <div>
            <div style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 8, padding: '16px 20px', marginBottom: 12 }}>
              <p style={{ fontSize: 13, color: DARK, lineHeight: 1.8 }}>{product.howToUse}</p>
            </div>
            <div style={{ padding: '12px 16px', background: `rgba(10,91,214,0.06)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 8 }}>
              <p style={{ fontSize: 12, color: BLUE, fontWeight: 600 }}>
                For best cooling: place the cooler near a window or ventilated opening. Ensure proper water level before use.
              </p>
            </div>
          </div>
        )}
        {active === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: Package, label: 'Dispatch', value: 'Within 24–48 hours of order confirmation' },
              { icon: Truck, label: 'Delivery', value: '3–7 business days, pan-India' },
              { icon: ShieldCheck, label: 'Warranty', value: 'Manufacturer warranty on motor and pump' },
              { icon: Wind, label: 'After-Sale', value: 'Spare parts available — pumps, pads, motors' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 16px', background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 8 }}>
                <item.icon style={{ width: 16, height: 16, color: BLUE, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(11,30,61,0.4)', fontWeight: 600, marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 12, color: DARK, fontWeight: 600 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RelatedCard({ product }: { product: StaticProduct }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 12, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(10,91,214,0.06)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(10,91,214,0.14)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(10,91,214,0.06)'; }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#e8f0ff', overflow: 'hidden' }}>
        <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'contain', padding: 12 }} sizes="300px"
          onError={(e) => { (e.target as HTMLImageElement).src = '/coming-soon.png'; }}
        />
      </div>
      <div style={{ padding: '14px 16px' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, marginBottom: 4 }}>{product.category}</p>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 8, lineHeight: 1.2 }}>{product.name}</h4>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: DARK }}>₹{product.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductClient({ product }: { product: StaticProduct }) {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  const waMessage = `Hi, I am interested in ${product.name} (₹${product.price.toLocaleString('en-IN')}). Please share availability and delivery details.`;

  return (
    <div style={{ minHeight: '100vh', background: BG, paddingBottom: 80 }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid #dde8ff`, background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '10px 32px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(11,30,61,0.4)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => (e.currentTarget.style.color = BLUE)} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(11,30,61,0.4)')}>Home</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <Link href="/shop" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => (e.currentTarget.style.color = BLUE)} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(11,30,61,0.4)')}>Coolers</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <span style={{ color: DARK }}>{product.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Main layout */}
      <div className="product-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px' }}>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 64px' }}>

          {/* LEFT: Images */}
          <div className="product-image-sticky" style={{ position: 'sticky', top: 24, alignSelf: 'start' }}>
            <ImageGallery images={product.images} />
          </div>

          {/* RIGHT: Info */}
          <div>
            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              <span style={{ background: `rgba(10,91,214,0.1)`, color: BLUE, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '5px 12px', border: `1.5px solid rgba(10,91,214,0.3)`, borderRadius: 4 }}>
                {product.category}
              </span>
              {product.badge && (
                <span style={{ background: BLUE, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4 }}>
                  {product.badge}
                </span>
              )}
              {discount > 0 && (
                <span style={{ background: '#E8450A', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 10px', borderRadius: 4 }}>
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Name */}
            <h1 style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1.05, marginBottom: 14 }}>
              {product.name}
            </h1>

            {/* Rating */}
            <button
              onClick={() => reviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <StarRating rating={product.rating} />
              <span style={{ fontSize: 12, color: 'rgba(11,30,61,0.5)', borderBottom: '1px solid rgba(11,30,61,0.2)' }}>
                {product.rating.toFixed(1)} ({product.reviewCount} Reviews)
              </span>
            </button>

            {/* Tagline */}
            <p style={{ fontSize: 14, color: 'rgba(11,30,61,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{product.tagline}</p>

            {/* Key benefits */}
            <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {product.benefits.slice(0, 4).map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ width: 18, height: 18, background: `rgba(10,91,214,0.1)`, border: `1.5px solid ${BLUE}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Check style={{ width: 9, height: 9, color: BLUE }} />
                  </span>
                  <span style={{ fontSize: 13, color: DARK, lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: `2px solid #dde8ff` }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: DARK, lineHeight: 1, letterSpacing: '-0.02em' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.regularPrice > product.price && (
                <span style={{ fontSize: 16, color: 'rgba(11,30,61,0.35)', textDecoration: 'line-through' }}>₹{product.regularPrice.toLocaleString('en-IN')}</span>
              )}
              <span style={{ fontSize: 13, color: BLUE, fontWeight: 600 }}>Factory Price</span>
            </div>

            {/* WhatsApp CTA Buttons */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: 1, padding: '14px 20px', background: '#25D366', color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.15s, box-shadow 0.15s', fontFamily: 'inherit', boxShadow: `0 4px 14px rgba(37,211,102,0.35)`, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1da851'; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px rgba(37,211,102,0.45)`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#25D366'; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px rgba(37,211,102,0.35)`; }}
              >
                <MessageCircle style={{ width: 15, height: 15 }} />
                ORDER ON WHATSAPP
              </a>
              <a
                href={`tel:+${WA_NUMBER}`}
                style={{ flex: '0 0 auto', padding: '14px 20px', background: '#fff', color: DARK, border: `2px solid #dde8ff`, borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'border-color 0.15s', fontFamily: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = BLUE; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#dde8ff'; }}
              >
                CALL US
              </a>
            </div>

            {/* Delivery note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: DARK, marginBottom: 20, padding: '10px 14px', background: `rgba(10,91,214,0.06)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 8 }}>
              <Truck style={{ width: 15, height: 15, color: BLUE, flexShrink: 0 }} />
              <span><strong>Pan-India delivery</strong> · Dispatched within 24–48 hours · Factory packed</span>
            </div>

            {/* Trust Grid */}
            <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: ShieldCheck, title: 'Manufacturer Direct', sub: 'Factory to your doorstep' },
                { icon: Wind, title: 'Spare Parts Available', sub: 'Pumps, pads, motors in stock' },
                { icon: Package, title: 'Manufacturer Warranty', sub: 'On motor and pump' },
                { icon: Truck, title: 'Pan-India Delivery', sub: '3–7 business days' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 12px', background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 8 }}>
                  <item.icon style={{ width: 14, height: 14, color: BLUE, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: DARK, marginBottom: 1 }}>{item.title}</p>
                    <p style={{ fontSize: 11, color: 'rgba(11,30,61,0.45)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Tabs product={product} />
          </div>
        </div>

        {/* Reviews */}
        <div ref={reviewsRef} style={{ marginTop: 80, scrollMarginTop: 96 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Customer Feedback</span>
            <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
              WHAT CUSTOMERS<br /><span style={{ color: BLUE }}>ARE SAYING.</span>
            </h2>
          </div>
          <ProductReviews productId={product.id} productName={product.name} />
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Got Questions?</span>
            <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
              FREQUENTLY ASKED<br /><span style={{ color: BLUE }}>QUESTIONS.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ProductFAQ productSlug={product.slug} productName={product.name} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 80 }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ You May Also Like</span>
              <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
                MORE<br /><span style={{ color: BLUE }}>COOLERS.</span>
              </h2>
            </div>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 900, margin: '0 auto' }}>
              {relatedProducts.map((p) => <RelatedCard key={p.id} product={p} />)}
            </div>
          </div>
        )}

        {/* Bottom WhatsApp CTA */}
        <div style={{ marginTop: 64, background: DARK, borderRadius: 16, padding: '40px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
              READY TO ORDER?
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 24, lineHeight: 1.75 }}>
              WhatsApp us your order — tell us the model, quantity and delivery city. We&apos;ll confirm price and ship fast.
            </p>
            <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 18px rgba(37,211,102,0.35)' }}
            >
              <MessageCircle size={15} /> ORDER ON WHATSAPP →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="mobile-cta-outer" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: `2px solid #dde8ff`, padding: '10px 12px', zIndex: 500, boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', display: 'none' }}>
        <div style={{ display: 'flex', gap: 8, maxWidth: 600, margin: '0 auto' }}>
          <a href={`tel:+${WA_NUMBER}`}
            style={{ flex: '0 0 auto', padding: '13px 14px', background: '#fff', color: DARK, border: `2px solid #dde8ff`, borderRadius: 10, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            CALL
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`}
            target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, background: '#25D366', color: '#fff', padding: '13px 12px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: 'inherit', boxShadow: `0 4px 14px rgba(37,211,102,0.3)`, textDecoration: 'none' }}
          >
            <MessageCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              ORDER ON WHATSAPP — ₹{product.price.toLocaleString('en-IN')}
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-cta-outer { display: block !important; }
          .product-container { padding: 16px 14px 100px !important; }
          .product-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .product-image-sticky { position: relative !important; top: auto !important; }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .related-grid { grid-template-columns: 1fr !important; }
          .product-container { padding: 12px 12px 100px !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
