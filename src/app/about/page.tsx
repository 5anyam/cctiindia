'use client';

import React from 'react';
import Link from 'next/link';
import { BadgeCheck, Truck, Wrench, Factory, ShieldCheck, Phone, Wind, MessageCircle } from 'lucide-react';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BG = '#F0F5FF';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '72px 32px', borderBottom: `4px solid ${BLUE}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: `radial-gradient(circle, rgba(10,91,214,0.18) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 18 }}>◆ Our Story</span>
          <h1 style={{ fontSize: 'clamp(56px,9vw,110px)', fontWeight: 900, color: '#fff', lineHeight: 0.9, marginBottom: 24, letterSpacing: '-0.02em' }}>
            ABOUT<br /><span style={{ color: BLUE }}>CCTI</span><br /><span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6em', letterSpacing: '0.02em' }}>INDIA</span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 540, margin: '0 auto', lineHeight: 1.85 }}>
            Established in 1998 in Bawana, Delhi — CCTI India has spent over 27 years manufacturing quality air coolers that keep Indian homes, offices and factories cool.
          </p>
        </div>
      </section>

      <div className="about-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>

        {/* Company Intro */}
        <section className="about-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 88 }}>
          <div style={{ background: DARK, border: `1.5px solid rgba(10,91,214,0.3)`, borderRadius: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', padding: 40, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.06) 1px, transparent 1px)`, backgroundSize: '32px 32px', pointerEvents: 'none' }} />
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 900, color: BLUE, letterSpacing: '-0.03em', lineHeight: 1 }}>CCTI</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 8 }}>India</div>
              <div style={{ width: 60, height: 3, background: BLUE, borderRadius: 2, margin: '16px auto' }} />
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Since 1998 · Bawana, Delhi</div>
            </div>
          </div>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 14 }}>◆ Who We Are</span>
            <h2 style={{ fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1, marginBottom: 22 }}>
              YOUR TRUSTED<br /><span style={{ color: BLUE }}>COOLER</span><br />MANUFACTURER
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(11,30,61,0.65)', lineHeight: 1.85, marginBottom: 20 }}>
              CCTI India is a cooler manufacturing company based in the Bawana Industrial Area, Delhi. Founded in 1998, we have spent over two decades designing and manufacturing air coolers that are built for Indian conditions — tough summers, dusty environments, and round-the-clock operation.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(11,30,61,0.65)', lineHeight: 1.85, marginBottom: 28 }}>
              We manufacture <strong style={{ color: DARK }}>desert coolers, tower coolers, personal coolers, window coolers and heavy-duty industrial coolers</strong>. With our D2C initiative, we now sell directly to homes and businesses across India — cutting out middlemen so you get the best price straight from the factory.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link href="/shop" style={{ background: BLUE, color: '#fff', padding: '12px 24px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s', boxShadow: `0 4px 14px rgba(10,91,214,0.3)` }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0944A8')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = BLUE)}
              >
                Our Products →
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: DARK, padding: '12px 24px', border: `2px solid #dde8ff`, borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = BLUE)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#dde8ff')}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: BLUE, borderRadius: 16, padding: '52px 48px', marginBottom: 88, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
          {[
            { num: '27+', label: 'Years Manufacturing' },
            { num: '50,000+', label: 'Coolers Sold' },
            { num: '6', label: 'Product Lines' },
            { num: '100%', label: 'Made in India' },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : 'none', paddingRight: i < 3 ? 24 : 0 }}>
              <div style={{ fontSize: 'clamp(40px,4vw,64px)', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</div>
              <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* Our factory section */}
        <section style={{ marginBottom: 88, background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ background: BG, borderBottom: `2px solid #dde8ff`, padding: '28px 36px' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 8 }}>◆ Our Facility</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
              BAWANA FACTORY<br /><span style={{ color: BLUE }}>DELHI</span>
            </h2>
          </div>
          <div className="factory-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {[
              { title: 'State-of-the-Art Facility', desc: 'Our Bawana manufacturing plant is equipped with modern machinery for precision cooler body fabrication, pump assembly and quality testing. Every cooler is assembled and tested before dispatch.' },
              { title: 'ISI Certified Components', desc: 'We use ISI-certified motors, pumps and cooling pads. Each component meets Bureau of Indian Standards requirements ensuring our coolers are safe, efficient and durable.' },
              { title: 'In-house R&D', desc: 'Our engineering team continuously works on improving cooler performance — from honeycomb pad efficiency to motor longevity and water-saving pump designs.' },
              { title: 'Bulk & Custom Orders', desc: 'We cater to bulk B2B orders for dealers, contractors, housing societies and industrial clients. Custom branding and OEM manufacturing is available on request.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '32px 28px', borderRight: i % 2 === 0 ? `1px solid #dde8ff` : 'none', borderBottom: i < 2 ? `1px solid #dde8ff` : 'none' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: DARK, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.6)', lineHeight: 1.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 12 }}>◆ Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>THE CCTI INDIA<br /><span style={{ color: BLUE }}>ADVANTAGE</span></h2>
          </div>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { icon: Factory, title: 'Direct from Factory', desc: 'We are the manufacturer. No distributor, no dealer markup — you pay the actual factory price.' },
              { icon: BadgeCheck, title: 'Established Since 1998', desc: 'Over 27 years of manufacturing experience. Our coolers are built to handle India\'s harshest summers reliably.' },
              { icon: Truck, title: 'Pan-India Delivery', desc: 'We ship coolers safely to every corner of India — well-packed, tracked, and delivered on time.' },
              { icon: Wrench, title: 'Spare Parts Available', desc: 'Pumps, motors, honeycomb pads — all spare parts stocked and supplied so your cooler lasts for years.' },
              { icon: Wind, title: 'Full Range', desc: 'Desert coolers, tower coolers, personal, window and industrial — we make the complete range under one roof.' },
              { icon: Phone, title: 'WhatsApp Support', desc: 'Quick answers on WhatsApp. Ask about a product, get a quote, or troubleshoot — we\'re always available.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 12, padding: '32px 28px', boxShadow: '0 2px 8px rgba(10,91,214,0.05)', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 24px rgba(10,91,214,0.12)'; el.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 2px 8px rgba(10,91,214,0.05)'; el.style.transform = 'none'; }}
              >
                <div style={{ width: 48, height: 48, background: `rgba(10,91,214,0.1)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <item.icon style={{ width: 22, height: 22, color: BLUE }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: DARK, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.55)', lineHeight: 1.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Range */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 12 }}>◆ What We Make</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>OUR PRODUCT<br /><span style={{ color: BLUE }}>RANGE</span></h2>
          </div>
          <div className="products-list-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              'Desert Air Coolers (40L–100L)',
              'Tower Air Coolers (35L–65L)',
              'Personal Coolers (15L–25L)',
              'Window Coolers (50L–80L)',
              'Industrial Coolers (150L–250L)',
              'Jumbo Desert Coolers (100L+)',
              'OEM / Bulk Manufacturing',
              'Spare Parts & Accessories',
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 10, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 6px rgba(10,91,214,0.05)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: BLUE, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: DARK }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: DARK, borderRadius: 20, padding: '72px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none', borderRadius: 20 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 18 }}>◆ Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(44px,6.5vw,80px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 20, letterSpacing: '-0.02em' }}>
              NEED A<br /><span style={{ color: BLUE }}>COOLER?</span><br />LET&apos;S TALK.
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.85 }}>
              WhatsApp us with your requirements — room size, cooler type, quantity — and we&apos;ll recommend the best model at the best factory price.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919899955506" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 4px 18px rgba(37,211,102,0.4)`, transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1da851')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#25D366')}
              >
                <MessageCircle size={15} /> WHATSAPP US →
              </a>
              <Link href="/shop"
                style={{ display: 'inline-block', color: '#fff', padding: '14px 32px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 10, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(10,91,214,0.5)`)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
              >
                VIEW PRODUCTS
              </Link>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-container { padding: 40px 16px !important; }
          .about-2col { grid-template-columns: 1fr !important; }
          .factory-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .products-list-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .products-list-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
