"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// ADD BANNER IMAGES HERE
// Drop banner files into /public/banners/ (JPG or PNG)
// Recommended size: 1920×720px (16:6 ratio)
// ─────────────────────────────────────────────────────────────
const BANNERS = [
  { src: '/banners/banner-1.jpg', alt: 'CCTI India — Premium Air Coolers' },
  { src: '/banners/banner-2.jpg', alt: 'Factory Direct — No Middlemen' },
  { src: '/banners/banner-3.jpg', alt: 'Made in India — Built for Indian Summers' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % BANNERS.length);
    }, 4000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const go = useCallback(
    (idx: number) => {
      setCurrent((idx + BANNERS.length) % BANNERS.length);
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
        {BANNERS.map((b, i) => (
          <div
            key={i}
            style={{ flex: '0 0 100%', width: '100%', aspectRatio: '16/6', position: 'relative', minHeight: 220 }}
          >
            <Image
              src={b.src}
              alt={b.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
          </div>
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
        {BANNERS.map((_, i) => (
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
