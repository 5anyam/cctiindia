'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll animation: fades + lifts each page section into view as
 * the user scrolls. Sections already visible on load (e.g. the hero) are left
 * untouched to avoid flashes. Respects prefers-reduced-motion. No per-page
 * markup needed — it auto-tags `main section` elements.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );

    // Let the new route's DOM settle, then tag below-the-fold sections.
    const t = window.setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>('main section');
      sections.forEach((el) => {
        if (el.classList.contains('reveal')) return; // already handled elsewhere
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) return; // in view already — leave visible
        el.classList.add('reveal');
        io.observe(el);
      });
    }, 80);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
