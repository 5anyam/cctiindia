"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// HERO BANNERS  —  split layout: brand text panel (left) + image (right).
// The image uses object-fit:contain so it is NEVER cropped; `mediaBg`
// fills the letterbox area and should match the artwork's edges.
// Drop new images in /public/banners/. `href` = link target.
// ─────────────────────────────────────────────────────────────
type Slide = {
  src: string;
  alt: string;
  href: string;
  eyebrow: string;
  title: string;      // "\n" = line break
  sub: string;
  cta: string;
  mediaBg: string;    // background behind the image (blends letterbox)
  imgPad?: string;    // optional padding around the image
};

const PANEL_BG = 'linear-gradient(135deg, #0B1E3D 0%, #0A5BD6 135%)';

const SLIDES: Slide[] = [
  {
    src: '/banners/src-mountain.png',
    alt: 'CCTI India — cooling as crisp as the mountains',
    href: '/shop',
    eyebrow: 'BREATHE FRESH · STAY COOL',
    title: 'Cooling as Crisp\nas the Mountains',
    sub: 'High-power air delivery with whisper-quiet comfort.',
    cta: 'Shop Coolers',
    mediaBg: 'linear-gradient(180deg, #20304d 0%, #0d1626 100%)',
  },
  {
    src: '/banners/src-lineup.png',
    alt: 'CCTI India — the complete range of air coolers',
    href: '/shop',
    eyebrow: 'THE COMPLETE RANGE',
    title: 'One Cooler for\nEvery Home',
    sub: 'Towers, blowers & desert coolers — factory direct.',
    cta: 'Explore Range',
    mediaBg: 'linear-gradient(180deg, #ffffff 0%, #e8f0fa 100%)',
  },
  {
    src: '/products/brezza-stealth-blue-tower-16.png',
    alt: 'CCTI India — Brezza Tower 16 Stealth Blue',
    href: '/shop',
    eyebrow: 'NEW ARRIVAL',
    title: 'Brezza Tower 16\nStealth Blue',
    sub: 'Bold looks, powerful cooling — built for Indian summers.',
    cta: 'Order Now',
    mediaBg: 'linear-gradient(135deg, #0B1E3D 0%, #17407e 120%)',
    imgPad: '5%',
  },
];

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
            className="hero-slide"
            style={{ flex: '0 0 100%', width: '100%', background: PANEL_BG }}
          >
            {/* Right: image */}
            <div className="hero-media" style={{ background: s.mediaBg }}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                style={{ objectFit: 'contain', objectPosition: 'center', padding: s.imgPad ?? 0 }}
                priority={i === 0}
                sizes="60vw"
              />
            </div>

            {/* Left: text panel */}
            <div className="hero-text">
              <span className="hero-eyebrow">{s.eyebrow}</span>
              <h2 className="hero-title">{s.title}</h2>
              <p className="hero-sub">{s.sub}</p>
              <span className="hero-cta">
                {s.cta}
                <ChevronRight size={16} strokeWidth={2.5} />
              </span>
            </div>
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
          className="hero-arrow"
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

      <style>{`
        .hero-slide {
          position: relative;
          display: block;
          aspect-ratio: 2000 / 760;
          overflow: hidden;
          text-decoration: none;
        }
        /* Right image panel */
        .hero-slide .hero-media {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 58%;
        }
        /* Left text panel */
        .hero-slide .hero-text {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 46%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: clamp(6px, 1vw, 16px);
          padding: 0 clamp(18px, 4vw, 64px);
        }
        .hero-eyebrow {
          color: #8FBEFF;
          font-size: clamp(9px, 1.05vw, 14px);
          font-weight: 700;
          letter-spacing: 0.16em;
        }
        .hero-title {
          color: #fff;
          margin: 0;
          font-size: clamp(19px, 3.6vw, 52px);
          line-height: 1.06;
          font-weight: 800;
          white-space: pre-line;
          text-shadow: 0 2px 16px rgba(0,0,0,0.3);
        }
        .hero-sub {
          color: rgba(255,255,255,0.9);
          margin: 0;
          font-size: clamp(10px, 1.35vw, 18px);
          line-height: 1.4;
          max-width: 26ch;
        }
        .hero-cta {
          margin-top: clamp(4px, 0.8vw, 12px);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #0B1E3D;
          font-weight: 800;
          font-size: clamp(10px, 1.2vw, 16px);
          padding: clamp(6px, 0.85vw, 13px) clamp(14px, 1.8vw, 30px);
          border-radius: 999px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          transition: transform 0.2s;
        }
        .hero-slide:hover .hero-cta { transform: translateY(-2px); }

        /* Mobile: stack image on top, centered text panel below */
        @media (max-width: 640px) {
          .hero-slide {
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
          }
          .hero-slide .hero-media {
            position: relative;
            inset: auto;
            width: 100%;
            height: auto;
            aspect-ratio: 4 / 3;
          }
          .hero-slide .hero-text {
            position: relative;
            inset: auto;
            width: 100%;
            height: auto;
            align-items: center;
            text-align: center;
            gap: 8px;
            padding: clamp(16px, 5vw, 26px) clamp(16px, 6vw, 32px) clamp(30px, 8vw, 40px);
          }
          .hero-eyebrow { font-size: clamp(10px, 3vw, 13px); }
          .hero-title { font-size: clamp(22px, 6.4vw, 34px); }
          .hero-sub { font-size: clamp(12px, 3.6vw, 16px); max-width: 40ch; }
          .hero-cta { font-size: clamp(12px, 3.6vw, 16px); }
          .hero-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
