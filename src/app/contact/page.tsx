'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BG = '#F0F5FF';
const WA_NUMBER = '919899955506';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '72px 32px', borderBottom: `4px solid ${BLUE}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: `radial-gradient(circle, rgba(10,91,214,0.18) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 18 }}>◆ We&apos;re Here to Help</span>
          <h1 style={{ fontSize: 'clamp(56px,9vw,110px)', fontWeight: 900, color: '#fff', lineHeight: 0.9, marginBottom: 24, letterSpacing: '-0.02em' }}>
            GET IN<br /><span style={{ color: BLUE }}>TOUCH.</span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto', lineHeight: 1.85 }}>
            Questions about our coolers, pricing, bulk orders, or need help choosing the right model? WhatsApp or call us — we reply fast.
          </p>
        </div>
      </section>

      <div className="contact-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>

        {/* WhatsApp highlight card */}
        <section style={{ background: DARK, borderRadius: 16, padding: '48px 40px', marginBottom: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 12 }}>◆ Fastest Response</span>
            <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 12 }}>
              CHAT ON<br /><span style={{ color: '#25D366' }}>WHATSAPP.</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 380, lineHeight: 1.75 }}>
              Tell us which cooler you need, your city, and quantity. We&apos;ll get back to you with the best factory price within minutes.
            </p>
          </div>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
            style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '18px 36px', borderRadius: 12, fontSize: 15, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 6px 24px rgba(37,211,102,0.4)', flexShrink: 0, transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#1da851'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#25D366'; el.style.transform = 'none'; }}
          >
            <MessageCircle size={20} />
            +91 98999 55506 →
          </a>
        </section>

        {/* Contact Cards */}
        <section className="contact-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 64 }}>
          {[
            { icon: <Phone size={22} />, title: 'CALL / WHATSAPP', sub: 'Mon – Sat · 9 AM – 7 PM', value: '+91 98999 55506', href: `tel:+${WA_NUMBER}`, dark: true },
            { icon: <MapPin size={22} />, title: 'FACTORY ADDRESS', sub: 'Bawana Industrial Area', value: 'Bawana Industrial Area,\nDelhi – 110039', href: null, dark: false },
            { icon: <Clock size={22} />, title: 'BUSINESS HOURS', sub: 'We respond on WhatsApp anytime', value: 'Mon – Sat: 9 AM – 7 PM\nSunday: Closed', href: null, dark: false },
          ].map((card, i) => (
            <div key={i} style={{ background: card.dark ? DARK : '#fff', border: `1.5px solid ${card.dark ? 'transparent' : '#dde8ff'}`, borderRadius: 16, padding: '36px 28px', textAlign: 'center', boxShadow: card.dark ? `0 6px 24px rgba(10,91,214,0.2)` : '0 2px 10px rgba(10,91,214,0.06)' }}>
              <div style={{ width: 56, height: 56, background: `rgba(10,91,214,${card.dark ? '0.15' : '0.1'})`, border: `1.5px solid rgba(10,91,214,0.25)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: BLUE }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.1em', color: card.dark ? '#7EB3FF' : DARK, marginBottom: 6 }}>{card.title}</h3>
              <p style={{ fontSize: 12, color: card.dark ? 'rgba(255,255,255,0.4)' : 'rgba(11,30,61,0.4)', marginBottom: 14 }}>{card.sub}</p>
              {card.href
                ? <a href={card.href} style={{ display: 'block', fontSize: 16, fontWeight: 700, color: BLUE, textDecoration: 'none' }}>{card.value}</a>
                : <address style={{ fontSize: 13, color: card.dark ? 'rgba(255,255,255,0.55)' : 'rgba(11,30,61,0.6)', fontStyle: 'normal', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{card.value}</address>
              }
            </div>
          ))}
        </section>

        {/* Info + Map */}
        <section className="contact-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 32, marginBottom: 64 }}>
          <div style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(10,91,214,0.06)' }}>
            <div style={{ padding: '18px 28px', borderBottom: `1px solid #dde8ff`, background: BG }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: DARK }}>Contact Information</h2>
              <p style={{ fontSize: 12, color: 'rgba(11,30,61,0.45)', marginTop: 4 }}>Reach us for product enquiries, bulk orders, pricing, and after-sales support.</p>
            </div>
            <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: <MessageCircle size={16} />, label: 'WhatsApp (Fastest)', content: '+91 98999 55506', link: `https://wa.me/${WA_NUMBER}`, isLink: true },
                { icon: <Phone size={16} />, label: 'Phone', content: '+91 98999 55506', link: `tel:+${WA_NUMBER}`, isLink: true },
                { icon: <MapPin size={16} />, label: 'Factory Address', content: 'Bawana Industrial Area,\nDelhi – 110039', link: null, isLink: false },
                { icon: <Clock size={16} />, label: 'Business Hours', content: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed', link: null, isLink: false },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 34, height: 34, background: `rgba(10,91,214,0.1)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: BLUE }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(11,30,61,0.35)', marginBottom: 5 }}>{item.label}</p>
                    {item.isLink && item.link
                      ? <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 700, color: BLUE, textDecoration: 'none' }}>{item.content}</a>
                      : <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.7)', lineHeight: 1.75, whiteSpace: 'pre-line' }}>{item.content}</p>
                    }
                  </div>
                </div>
              ))}

              <div style={{ background: BG, borderRadius: 12, padding: '20px 22px', border: `1px solid #dde8ff`, marginTop: 8 }}>
                <p style={{ fontSize: 12, color: 'rgba(11,30,61,0.55)', lineHeight: 1.75, marginBottom: 14 }}>
                  <strong style={{ color: DARK }}>Bulk & B2B Orders:</strong> We supply to dealers, distributors, housing societies, factories and contractors. Custom OEM manufacturing also available.
                </p>
                <a href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20a%20bulk%20order%20for%20CCTI%20India%20coolers.`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: BLUE, color: '#fff', padding: '10px 20px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
                >
                  <MessageCircle size={14} /> ENQUIRE FOR BULK
                </a>
              </div>
            </div>
          </div>

          <div style={{ background: DARK, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 28px', boxShadow: `0 4px 16px rgba(10,91,214,0.15)` }}>
            <div style={{ textAlign: 'center' }}>
              <MapPin size={40} style={{ color: BLUE, marginBottom: 16 }} />
              <h4 style={{ fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 8, letterSpacing: '-0.01em' }}>Bawana, Delhi</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>Bawana Industrial Area<br />Delhi – 110039</p>
              <div style={{ width: 40, height: 2, background: BLUE, borderRadius: 1, margin: '18px auto' }} />
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>Manufacturing Since 1998</p>
              <a href="https://maps.google.com?q=Bawana+Industrial+Area+Delhi+110039" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#7EB3FF', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1px solid rgba(10,91,214,0.4)`, paddingBottom: 2 }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 12 }}>◆ Quick Answers</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>COMMON<br /><span style={{ color: BLUE }}>QUESTIONS</span></h2>
          </div>
          <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { q: 'How do I order a cooler?', a: 'Simply WhatsApp us at +91 98999 55506 with the model you want, your city, and quantity. We\'ll confirm price and delivery details.' },
              { q: 'Do you deliver pan-India?', a: 'Yes — we deliver to all major cities and towns across India. Well-packed and shipped via reliable logistics partners.' },
              { q: 'Can I visit the factory?', a: 'Yes, our Bawana factory is open Mon–Sat from 9 AM to 7 PM. You can also place orders on the spot.' },
              { q: 'Do you take bulk / B2B orders?', a: 'Absolutely. We supply to dealers, contractors and institutions at wholesale rates. Contact us on WhatsApp for bulk pricing.' },
              { q: 'Are spare parts available?', a: 'Yes — pumps, motors, honeycomb pads and other spare parts are always in stock and can be shipped separately.' },
              { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfer, and cash on delivery for select orders. WhatsApp us to discuss payment terms.' },
            ].map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 12, padding: '24px 28px', boxShadow: '0 2px 8px rgba(10,91,214,0.05)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: DARK, marginBottom: 10, lineHeight: 1.3 }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.6)', lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: DARK, borderRadius: 20, padding: '72px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(10,91,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,214,0.07) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none', borderRadius: 20 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7EB3FF', display: 'block', marginBottom: 18 }}>◆ Ready to Order?</span>
            <h2 style={{ fontSize: 'clamp(44px,6.5vw,80px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 20, letterSpacing: '-0.02em' }}>
              WHATSAPP<br /><span style={{ color: '#25D366' }}>ANYTIME.</span><br />WE&apos;RE READY.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.85 }}>
              Our team is available Monday to Saturday, 9 AM to 7 PM to help you pick the right cooler and arrange fast delivery.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 4px 18px rgba(37,211,102,0.4)`, transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1da851')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#25D366')}
              >
                <MessageCircle size={15} /> +91 98999 55506 →
              </a>
              <a href={`tel:+${WA_NUMBER}`}
                style={{ display: 'inline-block', color: '#fff', padding: '14px 32px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 10, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(10,91,214,0.5)`)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
              >
                CALL US →
              </a>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 1024px) { .contact-info-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) {
          .contact-container { padding: 40px 16px !important; }
          .contact-cards { grid-template-columns: 1fr !important; }
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
