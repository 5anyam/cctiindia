"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// HERO BANNERS
// `type: 'photo'`   → full-bleed background photo + text overlay.
//                     Drop the file in /public/banners/.
// `type: 'product'` → branded gradient panel + transparent product PNG.
// Keep photos landscape (≈16:9 or wider) so the scrim/text sits nicely.
// `href` = where the banner + its CTA button links to.
// ─────────────────────────────────────────────────────────────
type Slide = {
  type: 'photo' | 'product';
  src: string;
  alt: string;
  href: string;
  eyebrow: string;
  title: string;      // "\n" = line break
  sub: string;
  cta: string;
  objectPosition?: string;   // photo focus point
  bg?: string;               // product-slide background
};

const SLIDES: Slide[] = [
  {
    type: 'photo',
    src: '/banners/src-mountain.jpg',
    alt: 'CCTI India — cooling as crisp as the mountains',
    href: '/shop',
    eyebrow: 'BREATHE FRESH · STAY COOL',
    title: 'Cooling as Crisp\nas the Mountains',
    sub: 'High-power air delivery with whisper-quiet comfort.',
    cta: 'Shop Coolers',
    objectPosition: 'center',
  },
  {
    type: 'photo',
    src: '/banners/src-lineup.png',
    alt: 'CCTI India — the complete range of air coolers',
    href: '/shop',
    eyebrow: 'THE COMPLETE RANGE',
    title: 'One Cooler for\nEvery Home',
    sub: 'Towers, blowers & desert coolers — factory direct.',
    cta: 'Explore Range',
    objectPosition: 'center',
  },
  {
    type: 'product',
    src: '/products/brezza-stealth-blue-tower-16.png',
    alt: 'CCTI India — Brezza Tower 16 Stealth Blue',
    href: '/shop',
    eyebrow: 'NEW ARRIVAL',
    title: 'Brezza Tower 16\nStealth Blue',
    sub: 'Bold looks, powerful cooling — built for Indian summers.',
    cta: 'Order Now',
    bg: 'radial-gradient(120% 140% at 78% 30%, #17407e 0%, #0B1E3D 60%)',
  },
];

// Container aspect ratio — banner never crops important content.
const BANNER_RATIO = '2000 / 808';

// Left-weighted dark scrim so overlay text stays readable on any photo.
const SCRIM =
  'linear-gradient(90deg, rgba(9,22,45,0.92) 0%, rgba(9,22,45,0.72) 32%, rgba(9,22,45,0.35) 55%, rgba(9,22,45,0) 78%)';

function SlideContent({ s }: { s: Slide }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 'clamp(6px, 1.1vw, 16px)',
        padding: '0 clamp(20px, 6vw, 90px)',
        maxWidth: 'min(640px, 62%)',
      }}
    >
      <span
        style={{
          color: '#7FB2FF',
          fontSize: 'clamp(9px, 1.15vw, 15px)',
          fontWeight: 700,
          letterSpacing: '0.18em',
        }}
      >
        {s.eyebrow}
      </span>
      <h2
        style={{
          color: '#fff',
          margin: 0,
          fontSize: 'clamp(20px, 4.4vw, 58px)',
          lineHeight: 1.05,
          fontWeight: 800,
          whiteSpace: 'pre-line',
          textShadow: '0 2px 18px rgba(0,0,0,0.35)',
        }}
      >
        {s.title}
      </h2>
      <p
        style={{
          color: 'rgba(255,255,255,0.9)',
          margin: 0,
          fontSize: 'clamp(11px, 1.5vw, 20px)',
          lineHeight: 1.4,
          maxWidth: '30ch',
        }}
      >
        {s.sub}
      </p>
      <span
        style={{
          marginTop: 'clamp(4px, 0.8vw, 12px)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#fff',
          color: '#0B1E3D',
          fontWeight: 800,
          fontSize: 'clamp(11px, 1.35vw, 17px)',
          padding: 'clamp(7px, 0.9vw, 14px) clamp(16px, 2vw, 32px)',
          borderRadius: 999,
          boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
        }}
      >
        {s.cta}
        <ChevronRight size={16} strokeWidth={2.5} />
      </span>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
    }, 4500);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const go = useCallback(
    (idx: number) => {
      setCurrent((idx + SLIDES.length) % SLIDES.length);
      resetTimer();
    },
    [resetTimer]
  );

  return (
    <section style={{ width: '100%', position: 'relative', overflow: 'hidden', background: '#0B1E3D' }}>
      {/* Slides strip */}
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.65s cubic-bezier(0.4,0,0.2,1)',
          transform: `translateX(-${current * 100}%)`,
          willChange: 'transform',
        }}
      >
        {SLIDES.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            aria-label={s.alt}
            style={{
              flex: '0 0 100%',
              width: '100%',
              position: 'relative',
              aspectRatio: BANNER_RATIO,
              display: 'block',
              background: s.type === 'product' ? s.bg : '#0B1E3D',
              overflow: 'hidden',
            }}
          >
            {s.type === 'photo' ? (
              <>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: s.objectPosition ?? 'center' }}
                  priority={i === 0}
                  sizes="100vw"
                />
                <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: SCRIM }} />
              </>
            ) : (
              // Product PNG anchored to the right, text on the left.
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'right center', padding: '4% 4% 4% 0' }}
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            )}
            <SlideContent s={s} />
          </Link>
        ))}
      </div>

      {/* Prev / Next arrows */}
      {(['prev', 'next'] as const).map((dir) => (
        <button
          key={dir}
          onClick={() => go(current + (dir === 'next' ? 1 : -1))}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = 'rgba(10,91,214,0.6)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)')
          }
          aria-label={dir}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            [dir === 'prev' ? 'left' : 'right']: 16,
            zIndex: 10,
            background: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.3)',
            color: '#fff',
            width: 40,
            height: 40,
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            transition: 'background 0.2s',
          }}
        >
          {dir === 'prev' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      ))}

      {/* Dot indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
          zIndex: 10,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? '#0A5BD6' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  );
}
