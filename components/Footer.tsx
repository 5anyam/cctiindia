'use client';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: `4px solid ${BLUE}` }}>

      {/* Marquee belt */}
      <div style={{ overflow: 'hidden', borderBottom: '2px solid rgba(255,255,255,0.06)', padding: '12px 0' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-fwd 24s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {['CCTI INDIA', 'COOLER MANUFACTURER', 'BAWANA DELHI', 'EST. 1998', 'FACTORY DIRECT', 'PAN-INDIA DELIVERY', 'MADE IN INDIA'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: '0 24px', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                  {t}
                  <span style={{ color: BLUE, fontSize: 6 }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 32px 40px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '40px 32px' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <div style={{ background: BLUE, borderRadius: 8, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 900, color: '#fff' }}>CC</span>
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>CCTI India</div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 2 }}>Cooler Manufacturer</div>
                </div>
              </div>
            </Link>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: 24, maxWidth: 260 }}>
              Manufacturing quality air coolers in Bawana, Delhi since 1998. Desert coolers, tower coolers, personal coolers, window coolers and industrial coolers — direct from factory to your doorstep.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { href: '#', icon: <FaFacebookF size={13} /> },
                { href: '#', icon: <FaInstagram size={13} /> },
                { href: '#', icon: <FaYoutube size={13} /> },
                { href: 'https://wa.me/919899955506', icon: <FaWhatsapp size={13} /> },
              ].map(({ href, icon }, i) => (
                <Link key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
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
                { name: 'Window Coolers', to: '/shop' },
                { name: 'Industrial Coolers', to: '/shop' },
                { name: 'All Products', to: '/shop' },
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link href={to} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#7EB3FF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
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
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link href={to} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#7EB3FF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
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
                { label: 'Phone / WhatsApp', val: '+91 98999 55506' },
                { label: 'Factory Address', val: 'Bawana Industrial Area,\nDelhi – 110039' },
                { label: 'Website', val: 'cctiindia.com' },
                { label: 'Business Hours', val: 'Mon – Sat: 9 AM – 7 PM' },
              ].map((item) => (
                <li key={item.label}>
                  <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: `rgba(10,91,214,0.6)`, display: 'block', marginBottom: 2 }}>{item.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} CCTI India. All rights reserved.
        </p>
        <p style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: `rgba(10,91,214,0.45)` }}>
          COOLER MANUFACTURER · SINCE 1998 · BAWANA, DELHI ◆
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
