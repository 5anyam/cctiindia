'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

const BLUE = '#0A5BD6';

const navItems = [
  { name: 'Home', to: '/' },
  {
    name: 'Products',
    to: '/shop',
    submenu: [
      { name: 'Desert Coolers', to: '/shop' },
      { name: 'Tower Coolers', to: '/shop' },
      { name: 'Personal Coolers', to: '/shop' },
      { name: 'Window Coolers', to: '/shop' },
      { name: 'Industrial Coolers', to: '/shop' },
      { name: 'All Products', to: '/shop' },
    ],
  },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export default function Header() {
  const location = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopSubmenuOpen, setShopSubmenuOpen] = useState(false);
  const [mobileShopSubmenuOpen, setMobileShopSubmenuOpen] = useState(false);
  const shopMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shopMenuRef.current && !shopMenuRef.current.contains(event.target as Node)) {
        setShopSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── DESKTOP HEADER ── */}
      <header style={{ borderBottom: `2px solid #dde8ff`, background: '#ffffff', position: 'sticky', top: 0, zIndex: 500, boxShadow: '0 2px 12px rgba(10,91,214,0.07)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <Image src="/ccti-logo.png" alt="CCTI India" width={148} height={44} priority style={{ objectFit: 'contain', height: 44, width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }} className="logo-text-block">
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: BLUE, textTransform: 'uppercase' }}>CO-COOLING TECHNOLOGY INDIA</span>
                <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(10,30,61,0.45)', textTransform: 'uppercase' }}>A Brand of Agroson Electrical Industries</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
              {navItems.map((item) => (
                <div key={item.name} style={{ position: 'relative' }} ref={item.name === 'Products' ? shopMenuRef : undefined}>
                  {item.submenu ? (
                    <div
                      onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setShopSubmenuOpen(true); }}
                      onMouseLeave={() => { timeoutRef.current = setTimeout(() => setShopSubmenuOpen(false), 200); }}
                    >
                      <button
                        style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 14px', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: location.startsWith(item.to) ? BLUE : '#1A1A1A', background: 'transparent', border: 'none', cursor: 'pointer', borderBottom: location.startsWith(item.to) ? `2px solid ${BLUE}` : '2px solid transparent', transition: 'color 0.2s, border-color 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = BLUE; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = location.startsWith(item.to) ? BLUE : '#1A1A1A'; }}
                      >
                        {item.name}
                        <BiChevronDown style={{ transition: 'transform 0.2s', transform: shopSubmenuOpen ? 'rotate(180deg)' : 'none' }} />
                      </button>
                      {shopSubmenuOpen && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 8, zIndex: 100 }}>
                          <div style={{ background: '#ffffff', border: `1.5px solid #dde8ff`, boxShadow: '0 8px 24px rgba(10,91,214,0.12)', minWidth: 200, borderRadius: 10, overflow: 'hidden' }}>
                            {item.submenu.map((sub) => (
                              <Link key={sub.name} href={sub.to}
                                style={{ display: 'block', padding: '11px 18px', fontSize: 13, fontWeight: 500, color: '#1A1A1A', textDecoration: 'none', borderBottom: '1px solid rgba(10,91,214,0.08)', borderLeft: '3px solid transparent', transition: 'background 0.15s, color 0.15s' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f0f5ff'; (e.currentTarget as HTMLElement).style.color = BLUE; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#1A1A1A'; }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.to}
                      style={{ display: 'block', padding: '6px 14px', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', color: location === item.to ? BLUE : '#1A1A1A', borderBottom: location === item.to ? `2px solid ${BLUE}` : '2px solid transparent', transition: 'color 0.2s, border-color 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = BLUE; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = location === item.to ? BLUE : '#1A1A1A'; }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: WhatsApp CTA + Mobile toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <a href="https://wa.me/919899955506" target="_blank" rel="noopener noreferrer"
                className="wa-btn"
                style={{ background: '#25D366', color: '#fff', padding: '9px 18px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, boxShadow: '0 3px 10px rgba(37,211,102,0.3)', transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1da851')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#25D366')}
              >
                WhatsApp
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="mobile-menu-btn"
                style={{ background: BLUE, color: '#fff', border: 'none', borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center' }}
              >
                <FiMenu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div onClick={() => setMobileMenuOpen(false)}
        style={{ position: 'fixed', inset: 0, background: 'rgba(11,30,61,0.5)', zIndex: 600, opacity: mobileMenuOpen ? 1 : 0, visibility: mobileMenuOpen ? 'visible' : 'hidden', transition: 'opacity 0.3s' }}
      />
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '82%', maxWidth: 340, background: '#fff', zIndex: 700, borderLeft: `2px solid #dde8ff`, transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.32s cubic-bezier(.16,1,.3,1)', display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 24px rgba(10,91,214,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `2px solid #dde8ff`, background: '#f0f5ff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Image src="/ccti-logo.png" alt="CCTI India" width={120} height={36} style={{ objectFit: 'contain', height: 36, width: 'auto' }} />
            <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: BLUE, textTransform: 'uppercase' }}>CO-COOLING TECHNOLOGY INDIA</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} style={{ background: BLUE, border: 'none', color: '#fff', width: 34, height: 34, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FiX size={17} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {navItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div style={{ borderBottom: `1px solid #dde8ff` }}>
                  <button onClick={() => setMobileShopSubmenuOpen(!mobileShopSubmenuOpen)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', fontSize: 16, fontWeight: 600, color: '#1A1A1A', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    {item.name}
                    <BiChevronDown style={{ transition: 'transform 0.2s', transform: mobileShopSubmenuOpen ? 'rotate(180deg)' : 'none', color: BLUE }} />
                  </button>
                  {mobileShopSubmenuOpen && (
                    <div style={{ paddingLeft: 20, paddingBottom: 8 }}>
                      {item.submenu.map((sub) => (
                        <Link key={sub.name} href={sub.to} onClick={() => setMobileMenuOpen(false)}
                          style={{ display: 'block', padding: '9px 16px', fontSize: 13, fontWeight: 500, color: '#555', textDecoration: 'none', borderLeft: `2px solid #dde8ff`, marginBottom: 4 }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.to} onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '14px 20px', fontSize: 16, fontWeight: 600, color: location === item.to ? BLUE : '#1A1A1A', textDecoration: 'none', borderBottom: `1px solid #dde8ff`, borderLeft: location === item.to ? `3px solid ${BLUE}` : '3px solid transparent' }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: 20, borderTop: `2px solid #dde8ff`, background: '#f0f5ff' }}>
          <a href="https://wa.me/919899955506" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}
            style={{ display: 'block', padding: '14px 16px', textAlign: 'center', fontSize: 15, fontWeight: 700, color: '#fff', textDecoration: 'none', background: '#25D366', borderRadius: 8 }}
          >
            WhatsApp Us →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .wa-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .logo-text-block { display: none !important; }
        }
      `}</style>
    </>
  );
}
