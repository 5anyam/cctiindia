'use client';

import React from 'react';
import Link from 'next/link';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BODY = '#1c2740';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: DARK, borderLeft: `4px solid ${BLUE}`, paddingLeft: 14, marginBottom: 14 }}>{title}</h2>
      <div style={{ fontSize: 14, color: BODY, lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <div style={{ background: '#F0F5FF', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(10,91,214,0.08)', border: '1.5px solid #dde8ff' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: BLUE, marginBottom: 8, letterSpacing: '-0.02em' }}>Terms &amp; Conditions</h1>
        <p style={{ fontSize: 13, color: BODY, marginBottom: 40 }}>Last Updated: 1st January 2026 · CCTI India</p>

        <Section title="1. Agreement to Terms">
          <p>This website is owned and managed by <strong>Co-Cooling Technology India (CCTI)</strong>, a brand of Agroson Electrical Industries. By accessing or using this website, you agree to be legally bound by these Terms &amp; Conditions. These terms may be updated at any time without prior notice. Continued use of the site constitutes acceptance of the updated terms.</p>
        </Section>

        <Section title="2. Products & Pricing">
          <p>All prices listed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. Being the manufacturer, we offer direct factory pricing. We reserve the right to modify product prices at any time. Product descriptions, images, and specifications are provided in good faith and may vary slightly from the physical product.</p>
        </Section>

        <Section title="3. Order Placement & Confirmation">
          <p>Orders are placed via WhatsApp, phone or our website enquiry. An order is confirmed only once we acknowledge availability and price. We reserve the right to cancel any order in case of pricing errors, out-of-stock situations, or suspected fraudulent activity. For Cash on Delivery (COD) orders, we may make verification calls before dispatch.</p>
        </Section>

        <Section title="4. Delivery">
          <p>We endeavour to dispatch all orders within 24–48 hours of confirmation. Delivery timelines of 3–7 business days apply to most locations across India and are estimates only. CCTI India is not liable for delays caused by logistics partners, natural disasters, or circumstances beyond our control.</p>
        </Section>

        <Section title="5. Warranty">
          <p>Our air coolers carry a manufacturer&apos;s warranty on the motor and pump against manufacturing defects. Warranty does not cover physical damage, misuse, incorrect voltage, tampering, or normal wear of consumables such as cooling pads. Genuine spare parts — pumps, motors and honeycomb pads — are available from us. Contact us for warranty claims and service support.</p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>CCTI India (Agroson Electrical Industries) shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase value of the product in question.</p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>All content on this website — including text, images, logos, and design — is the intellectual property of Co-Cooling Technology India (CCTI) / Agroson Electrical Industries and may not be reproduced without written permission.</p>
        </Section>

        <Section title="8. Governing Law">
          <p>These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi.</p>
        </Section>

        <Section title="9. Contact">
          <ul style={{ paddingLeft: 20, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>WhatsApp / Phone:</strong> +91 98999 55506 · +91 98100 37985</li>
            <li><strong>Address:</strong> D-327, Sector-5, DSIIDC Industrial Area, Bawana, New Delhi – 110039</li>
            <li>Or reach us via our <Link href="/contact" style={{ color: BLUE, fontWeight: 700 }}>Contact page</Link>.</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
