'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll animations.
 *
 *  • Card grids  → children fade up one after another (products appear slowly).
 *  • Headings/paragraphs → drift up and un-blur into place.
 *
 * Works on every page because it targets elements directly rather than
 * `<section>` wrappers (the shop grid, for example, isn't inside a section).
 *
 * Safety: nothing is hidden by CSS on its own — an element only animates once
 * it receives `.visible`. So if an observer never fires (fast scroll, no JS,
 * reduced motion) the content simply renders normally. Elements already in
 * view on load are skipped so there's no flash.
 */

const CARD_STEP = 0.16;   // seconds between consecutive cards
const TEXT_STEP = 0.15;   // seconds between consecutive text lines
const MAX_DELAY = 1.5;

// Text that gets its own reveal. Eyebrow labels ("◆ OUR STORY") and list
// items are included so whole blocks animate in, line by line.
// Spans are included only when they're an eyebrow label — in this codebase
// those are inline-styled and always start with the ◆ marker.
const TEXT_SELECTOR = 'h1, h2, h3, h4, h5, p, li, blockquote, .eyebrow, span';
// Used only to detect wrappers. Deliberately excludes `span` — a heading that
// contains a coloured <span> is still a leaf we want to animate.
const BLOCK_TEXT = 'h1, h2, h3, h4, h5, p, li, blockquote';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // `top < 0` catches elements the user scrolled straight past.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -5% 0px' }
    );

    const t = window.setTimeout(() => {
      const main = document.querySelector('main');
      if (!main) return;
      const fold = window.innerHeight * 0.9;
      const targets: HTMLElement[] = [];

      // 1) Card grids → stagger their children.
      main.querySelectorAll<HTMLElement>('*').forEach((el) => {
        if (el.dataset.revealDone) return;
        if (el.children.length < 2) return;
        if (getComputedStyle(el).display !== 'grid') return;
        el.dataset.revealDone = '1';
        if (el.getBoundingClientRect().top < fold) return; // already visible
        el.classList.add('stagger');
        Array.from(el.children).forEach((child, i) => {
          (child as HTMLElement).style.animationDelay = `${Math.min(i * CARD_STEP, MAX_DELAY)}s`;
        });
        targets.push(el);
      });

      // 2) Headings / paragraphs outside those grids → sequential text reveal.
      const seen = new Map<Element, number>();
      main.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
        if (el.dataset.revealDone) return;
        if (el.closest('.stagger')) return;
        const text = el.textContent?.trim();
        if (!text) return;                          // skip empty/decorative nodes
        // Only eyebrow-style spans qualify; ignore every other inline span.
        if (el.tagName === 'SPAN' && !text.startsWith('◆') && !el.classList.contains('eyebrow')) return;
        if (el.querySelector(BLOCK_TEXT)) return;    // skip wrappers, animate the leaf
        el.dataset.revealDone = '1';
        if (el.getBoundingClientRect().top < fold) return;
        const parent = el.parentElement ?? main;
        const i = seen.get(parent) ?? 0;
        seen.set(parent, i + 1);
        el.classList.add('text-in');
        el.style.animationDelay = `${Math.min(0.05 + i * TEXT_STEP, MAX_DELAY)}s`;
        targets.push(el);
      });

      targets.forEach((el) => io.observe(el));
    }, 90);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
