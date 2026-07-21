'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const BLUE = '#0A5BD6';

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: `4px solid ${BLUE}` }}>

      {/* Marquee belt */}
      <div style={{ overflow: 'hidden', borderBottom: `2px solid #dde8ff`, padding: '10px 0', background: '#F0F5FF' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-fwd 24s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {['CCTI INDIA', 'STAY COOL LIVE EASY', 'BAWANA DELHI', 'EST. 1990', 'CO-COOLING TECHNOLOGY INDIA', 'PAN-INDIA DELIVERY', 'MADE IN INDIA'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: '0 24px', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(10,30,61,0.35)' }}>
                  {t}
                  <span style={{ color: BLUE, fontSize: 6 }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 32px 36px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '40px 32px' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 16 }}>
              <Image src="/ccti-logo.png" alt="CCTI India" width={160} height={48} style={{ objectFit: 'contain', height: 48, width: 'auto' }} />
            </Link>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.04em', marginBottom: 2 }}>
              CO-COOLING TECHNOLOGY INDIA
            </p>
            <p style={{ fontSize: 11, fontWeight: 500, color: 'rgba(10,30,61,0.45)', letterSpacing: '0.03em', marginBottom: 12 }}>
              A brand of Agroson Electrical Industries
            </p>
            <p style={{ fontSize: 13, fontWeight: 400, color: 'rgba(10,30,61,0.55)', lineHeight: 1.85, marginBottom: 24, maxWidth: 260 }}>
              &ldquo;Stay Cool, Live Easy.&rdquo; — Manufacturing quality air coolers in Bawana, Delhi since 1990. Direct pricing, pan-India delivery.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { href: 'https://www.facebook.com/Aircoolercabinetnewdelhi', icon: <FaFacebookF size={13} /> },
                { href: '#', icon: <FaInstagram size={13} /> },
                { href: '#', icon: <FaYoutube size={13} /> },
                { href: 'https://wa.me/919810037985', icon: <FaWhatsapp size={13} /> },
              ].map(({ href, icon }, i) => (
                <Link key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, border: `1.5px solid #dde8ff`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(10,30,61,0.4)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE; e.currentTarget.style.background = '#F0F5FF'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#dde8ff'; e.currentTarget.style.color = 'rgba(10,30,61,0.4)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: 20, fontWeight: 700 }}>PRODUCTS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Desert Coolers', to: '/shop' },
                { name: 'Tower Coolers', to: '/shop' },
                { name: 'Personal Coolers', to: '/shop' },
                { name: 'Industrial Coolers', to: '/shop' },
                { name: 'Double Blower Coolers', to: '/shop' },
                { name: 'All Products', to: '/shop' },
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link href={to} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(10,30,61,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(10,30,61,0.55)')}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: 20, fontWeight: 700 }}>COMPANY</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'About Us', to: '/about' },
                { name: 'Contact', to: '/contact' },
                { name: 'Privacy Policy', to: '/privacy-policy' },
                { name: 'Terms & Conditions', to: '/terms-and-conditions' },
                { name: 'Disclaimer', to: '/disclaimer' },
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link href={to} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(10,30,61,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(10,30,61,0.55)')}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: 20, fontWeight: 700 }}>CONTACT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Phone / WhatsApp', val: '+91 98100 37985' },
                { label: 'Factory Address', val: 'D-327, Sector-5, DSIIDC\nIndustrial Area, Bawana\nNew Delhi – 110039' },
                { label: 'Business Hours', val: 'Mon – Fri: 9 AM – 7 PM' },
              ].map((item) => (
                <li key={item.label}>
                  <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: BLUE, display: 'block', marginBottom: 3, fontWeight: 600 }}>{item.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 400, color: 'rgba(10,30,61,0.6)', lineHeight: 1.75, whiteSpace: 'pre-line' }}>{item.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid #dde8ff`, background: '#F0F5FF', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(10,30,61,0.4)' }}>
          © {new Date().getFullYear()} CCTI India — Co-Cooling Technology India (A brand of Agroson Electrical Industries). All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: 'rgba(10,30,61,0.35)', letterSpacing: '0.04em' }}>
          Developed by{' '}
          <Link
            href="https://proshala.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: BLUE, textDecoration: 'none', fontWeight: 600, transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Proshala
          </Link>
        </p>
        <p style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: `rgba(10,91,214,0.5)`, fontWeight: 600 }}>
          AIR COOLER MANUFACTURER · SINCE 1990 · BAWANA, DELHI ◆
        </p>
      </div>

      <style>{`
        @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
