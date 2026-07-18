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
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 22 }}>◆ Our Story</span>
          <img
            src="/ccti-logo.png"
            alt="CCTI India — Co-Cooling Technology India"
            style={{ height: 'clamp(56px,9vw,96px)', width: 'auto', display: 'block', margin: '0 auto 22px', borderRadius: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
          />
          <h1 style={{ fontSize: 'clamp(40px,7vw,80px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 24, letterSpacing: '-0.02em' }}>
            ABOUT <span style={{ color: BLUE }}>US</span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto', lineHeight: 1.85 }}>
            Established in 1990 in Bawana, Delhi — Co-Cooling Technology India (CCTI), a brand of Agroson Electrical Industries, has spent over 36 years manufacturing quality air coolers that keep Indian homes, offices and factories cool.
          </p>
        </div>
      </section>

      <div className="about-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>

        {/* Company Intro */}
        <section className="about-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 88 }}>
          <div style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', padding: 40, position: 'relative', boxShadow: '0 4px 20px rgba(10,91,214,0.08)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.05) 1px, transparent 1px)`, backgroundSize: '32px 32px', pointerEvents: 'none' }} />
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <img src="/ccti-logo.png" alt="CCTI India — Co-Cooling Technology India" style={{ width: 'min(300px, 78%)', height: 'auto', display: 'block', margin: '0 auto' }} />
              <div style={{ width: 60, height: 3, background: BLUE, borderRadius: 2, margin: '22px auto 14px' }} />
              <div style={{ fontSize: 12, color: DARK, fontWeight: 600, letterSpacing: '0.05em' }}>Co-Cooling Technology India</div>
              <div style={{ fontSize: 11, color: 'rgba(11,30,61,0.75)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4 }}>Since 1990 · Bawana, Delhi</div>
            </div>
          </div>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 14 }}>◆ Who We Are</span>
            <h2 style={{ fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1, marginBottom: 22 }}>
              YOUR TRUSTED<br /><span style={{ color: BLUE }}>COOLER</span><br />MANUFACTURER
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(11,30,61,0.82)', lineHeight: 1.85, marginBottom: 20 }}>
              Co-Cooling Technology India (CCTI) is a brand of Agroson Electrical Industries, a cooler manufacturing company based at D-327, Sector-5, DSIIDC Industrial Area, Bawana, New Delhi. Founded in 1990, we have spent over 36 years designing and manufacturing air coolers built for Indian conditions — tough summers, dusty environments, and round-the-clock operation.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(11,30,61,0.82)', lineHeight: 1.85, marginBottom: 28 }}>
              We manufacture the <strong style={{ color: DARK }}>IcyChill, Fiesta, Brezza, Neo and Swish</strong> ranges — tower coolers, personal coolers, and double blower models. With our D2C initiative, we now sell directly to homes and businesses across India — cutting out middlemen so you get the best factory price.
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
            { num: '36+', label: 'Years Manufacturing' },
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
                <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.8)', lineHeight: 1.85 }}>{item.desc}</p>
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
              { icon: BadgeCheck, title: 'Established Since 1990', desc: 'Over 36 years of manufacturing experience. Our coolers are built to handle India\'s harshest summers reliably.' },
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
                <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.78)', lineHeight: 1.85 }}>{item.desc}</p>
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
              'IcyChill Tower 12" (50L)',
              'Fiesta Tower Double Blower (90L)',
              'Brezza Tower 16" Stealth Blue (90L)',
              'Brezza Tower 16" Aurora White (90L)',
              'Neo Double Blower (30L)',
              'Neo Plus Double Blower (50L)',
              'Swish 50 — Aurora White & Stealth Blue',
              'Swish 30 — Aurora White & Stealth Blue',
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
