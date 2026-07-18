'use client';

import React from 'react';
import Link from 'next/link';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BODY = '#1c2740'; // dark slate — no light grey

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: DARK, borderLeft: `4px solid ${BLUE}`, paddingLeft: 14, marginBottom: 14 }}>{title}</h2>
      <div style={{ fontSize: 14, color: BODY, lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: '#F0F5FF', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(10,91,214,0.08)', border: '1.5px solid #dde8ff' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: BLUE, marginBottom: 8, letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: BODY, marginBottom: 40 }}>Effective Date: 1st January 2026 · CCTI India</p>

        <Section title="1. Introduction">
          <p>Co-Cooling Technology India (CCTI), a brand of Agroson Electrical Industries (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you browse, access, or purchase our air coolers through our website or WhatsApp.</p>
          <p style={{ marginTop: 12 }}>We do not publish, sell, or rent customer details to third parties for marketing purposes without explicit consent. By accessing or using our website, you agree to the terms of this Privacy Policy.</p>
        </Section>

        <Section title="2. Information We Collect">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Name, contact details (phone, email), shipping &amp; billing address</li>
            <li>Order details and product preferences</li>
            <li>Payment information (processed via secure third-party services — we do not store card details)</li>
            <li>Device and browser information collected via cookies</li>
            <li>Messages you send us (enquiry forms, WhatsApp, calls, emails)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>To process and fulfil your air cooler orders</li>
            <li>To contact you regarding your order status, price quotes or delivery</li>
            <li>To provide after-sale support, spare parts and service assistance</li>
            <li>To improve our website and product range</li>
            <li>To send offers and updates (with your consent — you can opt out at any time)</li>
          </ul>
        </Section>

        <Section title="4. Information Sharing">
          <p>We may share your information with:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Delivery and logistics partners (to ship your cooler)</li>
            <li>Payment gateway providers (under strict confidentiality agreements)</li>
            <li>Law enforcement or regulatory authorities, when required by law</li>
          </ul>
          <p style={{ marginTop: 12 }}>We do not sell or rent your personal data to third parties.</p>
        </Section>

        <Section title="5. Cookies">
          <p>We use cookies to improve your browsing experience and analyse site traffic. You can disable cookies through your browser settings, though some features of the site may not function correctly without them.</p>
        </Section>

        <Section title="6. Children's Privacy">
          <p>Our website is not intended for use by minors under 18 years of age. We do not knowingly collect personal information from children.</p>
        </Section>

        <Section title="7. Data Security">
          <p>We employ SSL encryption and follow IT Act 2000 standards to protect your personal data. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="8. Your Rights">
          <p>You may request access to, correction of, or deletion of your personal data by contacting us on WhatsApp at <strong>+91 98999 55506</strong> or via our <Link href="/contact" style={{ color: BLUE, fontWeight: 700 }}>Contact page</Link>. We will respond within 30 days.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. Continued use of the website constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="10. Contact Us">
          <p>For privacy-related queries, contact us at:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>WhatsApp / Phone:</strong> +91 98999 55506 · +91 98100 37985</li>
            <li><strong>Address:</strong> D-327, Sector-5, DSIIDC Industrial Area, Bawana, New Delhi – 110039</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
