'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, StaticProduct } from '../../lib/products-data';
import { Star, ShieldCheck, Truck, Check, ChevronRight, Factory, Wrench, BadgeCheck, Wind, Thermometer, MessageCircle } from 'lucide-react';
import HeroCarousel from '../../components/HeroCarousel';
import CallbackForm from '../../components/CallbackForm';

const BLUE = '#0A5BD6';
const BLUE_DARK = '#0944A8';
const DARK = '#0B1E3D';
const BG = '#F0F5FF';
const WA_NUMBER = '919899955506';


function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map((i) => (
        <Star key={i} style={{ width: 13, height: 13, fill: i <= Math.round(rating) ? '#FFB800' : '#dde8ff', color: i <= Math.round(rating) ? '#FFB800' : '#dde8ff' }} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: StaticProduct }) {
  const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);
  return (
    <Link
      href={`/product/${product.slug}`}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', border: `2px solid #dde8ff`, boxShadow: '0 2px 12px rgba(10,91,214,0.07)', borderRadius: 12, overflow: 'hidden', transition: 'transform 0.25s, box-shadow 0.25s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(10,91,214,0.16)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(10,91,214,0.07)'; }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#ffffff', overflow: 'hidden' }}>
        <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'contain', padding: '12px' }} sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => { (e.target as HTMLImageElement).src = '/coming-soon.png'; }}
        />
        {product.badge && (
          <span style={{ position: 'absolute', top: 12, left: 12, background: BLUE, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', borderRadius: 4 }}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span style={{ position: 'absolute', top: 12, right: 12, background: '#E8450A', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 4 }}>
            {discount}% OFF
          </span>
        )}
      </div>
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: 6, fontWeight: 600 }}>{product.category}</p>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 6, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{product.name}</h3>
        <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.78)', marginBottom: 12, lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.tagline}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: 11, color: 'rgba(11,30,61,0.72)' }}>({product.reviewCount} reviews)</span>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: DARK, letterSpacing: '-0.02em' }}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.regularPrice > product.price && (
              <span style={{ fontSize: 14, color: 'rgba(11,30,61,0.72)', textDecoration: 'line-through' }}>₹{product.regularPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <div style={{ background: BLUE, color: '#fff', textAlign: 'center', padding: '12px 16px', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BLUE_DARK)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = BLUE)}
          >
            VIEW DETAILS <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}


function MarqueeBelt() {
  const row1 = ['STAY COOL', 'LIVE EASY', 'MADE IN INDIA', 'BAWANA DELHI'];
  const row2 = ['ICYCHILL', 'FIESTA', 'BREZZA', 'NEO', 'SWISH', 'TOWER AIR COOLERS', 'PERSONAL AIR COOLERS'];
  return (
    <div style={{ borderTop: `3px solid ${DARK}`, borderBottom: `3px solid ${DARK}` }}>
      <div style={{ overflow: 'hidden', borderBottom: `2px solid ${DARK}`, background: BLUE, padding: '10px 0' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-fwd 20s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {row1.map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '0 22px', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
                  {t} <span style={{ fontSize: 12 }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div style={{ overflow: 'hidden', background: DARK, padding: '10px 0' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-rev 16s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {row2.map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '0 22px', fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#7EB3FF' }}>
                  {t} <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>▶</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoriesSection() {
  const cats = [
    { name: 'Desert Air Coolers', sub: '40L – 100L · Large Rooms', icon: Wind, href: '/shop?cat=Desert+Cooler' },
    { name: 'Tower Air Coolers', sub: '35L – 65L · Modern Homes', icon: Thermometer, href: '/shop?cat=Tower+Cooler' },
    { name: 'Personal Air Coolers', sub: '15L – 25L · Small Spaces', icon: Wind, href: '/shop?cat=Personal+Cooler' },
    { name: 'Window Air Coolers', sub: '50L – 80L · Window Fit', icon: Wind, href: '/shop?cat=Window+Cooler' },
    { name: 'Industrial Air Coolers', sub: '150L – 250L · Factories', icon: Factory, href: '/shop?cat=Industrial+Cooler' },
  ];
  return (
    <section style={{ padding: '64px 0 56px', background: '#fff', borderBottom: `2px solid #dde8ff` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 10 }}>◆ Product Range</span>
          <h2 style={{ fontSize: 'clamp(32px,4.5vw,60px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
            AIR COOLERS FOR<br /><span style={{ color: BLUE }}>EVERY NEED.</span>
          </h2>
        </div>
        <div className="cats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {cats.map((cat, i) => (
            <Link key={i} href={cat.href}
              style={{ textDecoration: 'none', background: BG, border: `1.5px solid #dde8ff`, borderRadius: 12, padding: '28px 20px', textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = `0 8px 24px rgba(10,91,214,0.12)`; el.style.borderColor = BLUE; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = 'none'; el.style.borderColor = '#dde8ff'; }}
            >
              <div style={{ width: 52, height: 52, background: `rgba(10,91,214,0.1)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <cat.icon style={{ width: 22, height: 22, color: BLUE }} />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 6 }}>{cat.name}</h3>
              <p style={{ fontSize: 11, color: 'rgba(11,30,61,0.75)', lineHeight: 1.5 }}>{cat.sub}</p>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .cats-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 560px) { .cats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

function ProductsSection() {
  const ref = useReveal(0.1);
  return (
    <section style={{ padding: '80px 0', background: BG }} id="products">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div ref={ref} className="reveal" style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 10 }}>◆ Our Air Coolers</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
              QUALITY AIR COOLERS<br />
              <span style={{ color: BLUE }}>DIRECT PRICING.</span>
            </h2>
            <Link href="/shop" style={{ background: DARK, color: '#fff', padding: '12px 26px', borderRadius: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BLUE)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = DARK)}
            >
              VIEW ALL →
            </Link>
          </div>
        </div>
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PRODUCTS.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const ref = useReveal(0.15);
  const stats = [
    { num: '47+', label: 'Years Manufacturing' },
    { num: '50,000+', label: 'Coolers Made / Year' },
    { num: '6', label: 'Cooler Categories' },
    { num: '100%', label: 'Made in India' },
  ];
  return (
    <section style={{ background: BLUE, borderTop: `3px solid ${DARK}`, borderBottom: `3px solid ${DARK}`, padding: '48px 40px' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
        {stats.map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 && <div style={{ width: 1, height: 52, background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />}
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'clamp(44px,5vw,72px)', fontWeight: 900, color: '#fff', display: 'block', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</span>
              <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: 6, fontWeight: 500 }}>{s.label}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

const whyItems = [
  { icon: Factory, title: 'Direct from Manufacturer', desc: 'We are the manufacturer — no middlemen, no markup. You get wholesale pricing direct from our Bawana, Delhi facility.', num: '01' },
  { icon: BadgeCheck, title: 'Decades of Experience', desc: 'Over 47 years of manufacturing experience. We know what Indian summers demand and build our air coolers to last.', num: '02' },
  { icon: Truck, title: 'Pan-India Delivery', desc: 'We ship across India. Order from us directly and get your air cooler delivered safely to your doorstep.', num: '03' },
  { icon: Wrench, title: 'Spare Parts & Service', desc: 'Pump, motor, pads — all spare parts available. Our service team supports you long after purchase.', num: '04' },
  { icon: Wind, title: 'Full Product Range', desc: 'From compact personal air coolers to heavy-duty industrial units — we manufacture the complete spectrum.', num: '05' },
  { icon: ShieldCheck, title: 'Made in India Quality', desc: 'ISI-certified components, rigorous quality checks at every stage. Built to survive Indian summers, year after year.', num: '06' },
];

function WhySection() {
  return (
    <section style={{ background: '#fff', borderBottom: `3px solid ${DARK}` }} id="why">
      <div style={{ borderBottom: `2px solid #dde8ff`, padding: '52px 40px', background: `linear-gradient(135deg,#e8f0ff,#f0f5ff)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 10 }}>◆ The CCTI India Difference</span>
          <h2 style={{ fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
            TRUSTED BY<br /><span style={{ color: BLUE }}>THOUSANDS.</span>
          </h2>
        </div>
        <Link href="/contact" style={{ background: DARK, color: '#fff', padding: '14px 30px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BLUE)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = DARK)}
        >
          CONTACT US →
        </Link>
      </div>
      <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {whyItems.map((item, i) => (
          <div key={i}
            style={{ padding: '40px 32px', borderRight: (i + 1) % 3 !== 0 ? `2px solid #dde8ff` : 'none', borderBottom: i < 3 ? `2px solid #dde8ff` : 'none', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'background 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BG)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#fff')}
          >
            <span style={{ position: 'absolute', top: -8, right: 16, fontSize: 80, fontWeight: 900, color: `rgba(10,91,214,0.05)`, lineHeight: 1, pointerEvents: 'none' }}>{item.num}</span>
            <div style={{ width: 44, height: 44, background: `rgba(10,91,214,0.1)`, border: `1.5px solid rgba(10,91,214,0.25)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <item.icon style={{ width: 20, height: 20, color: BLUE }} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', color: DARK, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(11,30,61,0.78)', lineHeight: 1.85 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowToOrderSection() {
  return (
    <section className="how-section" style={{ padding: '80px 48px', background: BG, borderBottom: `2px solid #dde8ff` }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Simple Process</span>
          <h2 style={{ fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
            ORDER IN<br /><span style={{ color: BLUE }}>3 EASY STEPS.</span>
          </h2>
        </div>
        <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `2px solid #dde8ff`, borderRadius: 12, overflow: 'hidden' }}>
          {[
            { step: '01', title: 'Browse Coolers', desc: 'Explore our full range of desert, tower, personal, window and industrial coolers.' },
            { step: '02', title: 'WhatsApp Us', desc: 'Tell us the model you want. We confirm availability and give you the best D2C price.' },
            { step: '03', title: 'Doorstep Delivery', desc: 'Pay and relax — we pack and ship your cooler anywhere in India, safely and fast.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '36px 26px', textAlign: 'center', borderRight: i < 2 ? `2px solid #dde8ff` : 'none', background: '#fff' }}>
              <div style={{ width: 52, height: 52, background: BLUE, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: `0 4px 12px rgba(10,91,214,0.3)` }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#fff' }}>{item.step}</span>
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 10 }}>{item.title}</h4>
              <p style={{ fontSize: 12, color: 'rgba(11,30,61,0.78)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: DARK, padding: '80px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -100, right: -100, width: 480, height: 480, background: `radial-gradient(circle, rgba(10,91,214,0.15) 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `rgba(10,91,214,0.15)`, border: `1.5px solid rgba(10,91,214,0.35)`, color: '#7EB3FF', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', padding: '6px 14px', borderRadius: 4, marginBottom: 24 }}>
          ◆ Buy Direct · Best Price · Factory to Doorstep
        </div>
        <h2 style={{ fontSize: 'clamp(44px,6.5vw,88px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 20, letterSpacing: '-0.025em' }}>
          READY TO<br /><span style={{ color: BLUE }}>ORDER?</span><br />WHATSAPP.
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.75 }}>
          Chat with us on WhatsApp — tell us which cooler you need and we&apos;ll give you the best factory price with doorstep delivery across India.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 40 }}>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '15px 32px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 4px 18px rgba(37,211,102,0.4)`, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = `0 8px 28px rgba(37,211,102,0.5)`; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = `0 4px 18px rgba(37,211,102,0.4)`; }}
          >
            <MessageCircle size={15} /> WHATSAPP NOW →
          </a>
          <Link href="/shop" style={{ color: '#fff', padding: '15px 32px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(10,91,214,0.6)`)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
          >
            VIEW ALL COOLERS
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
          {['Factory Direct Price', 'Pan-India Shipping', 'ISI Certified', 'Made in India'].map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
              <Check style={{ width: 12, height: 12, color: BLUE }} /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, overflow: 'hidden' }}>
      <HeroCarousel />
      <MarqueeBelt />
      <CategoriesSection />
      <ProductsSection />
      <StatsBar />
      <WhySection />
      <HowToOrderSection />

      {/* Get a Callback — lead capture */}
      <section style={{ padding: '76px 24px', background: '#fff', borderBottom: `2px solid #dde8ff` }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: BLUE, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Book a Cooler</span>
            <h2 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
              REQUEST A<br /><span style={{ color: BLUE }}>CALLBACK.</span>
            </h2>
          </div>
          <CallbackForm />
        </div>
      </section>

      <CTASection />

      <style>{`
        @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .how-section { padding: 48px 20px !important; }
          .how-grid { grid-template-columns: 1fr !important; }
          .how-grid > div { border-right: none !important; border-bottom: 2px solid #dde8ff !important; }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .why-grid > div { border-right: none !important; }
        }
      `}</style>
    </div>
  );
}
