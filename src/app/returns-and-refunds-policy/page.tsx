'use client';

import React from 'react';
import Link from 'next/link';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';
const BODY = '#1c2740';
const WARN = '#C23A05';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: DARK, borderLeft: `4px solid ${BLUE}`, paddingLeft: 14, marginBottom: 14 }}>{title}</h2>
      <div style={{ fontSize: 14, color: BODY, lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

export default function ReturnsRefundPolicyPage() {
  return (
    <div style={{ background: '#F0F5FF', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(10,91,214,0.08)', border: '1.5px solid #dde8ff' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: BLUE, marginBottom: 8, letterSpacing: '-0.02em' }}>Returns &amp; Refunds Policy</h1>
        <p style={{ fontSize: 13, color: BODY, marginBottom: 40 }}>Please read carefully · CCTI India</p>

        <div style={{ background: `rgba(10,91,214,0.06)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 10, padding: '16px 20px', marginBottom: 36 }}>
          <p style={{ fontSize: 14, color: DARK, fontWeight: 600 }}>Every air cooler is carefully inspected and tested before dispatch. If you receive a defective or incorrect product, please contact us within 7 days of delivery.</p>
        </div>

        <Section title="1. Acceptable Reasons for Returns">
          <p style={{ marginBottom: 10 }}>We accept returns only under the following circumstances:</p>
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong>Damaged / Broken Product:</strong> Visibly damaged unit or packaging upon delivery</li>
            <li><strong>Wrong Product Delivered:</strong> You received a different model than what was ordered</li>
            <li><strong>Manufacturing Defect:</strong> Cooler fails to function as described on first use</li>
            <li><strong>Incomplete Order:</strong> Missing accessories or components as listed in the box contents</li>
          </ul>
        </Section>

        <Section title="2. Non-Returnable Conditions">
          <div style={{ background: `rgba(194,58,5,0.05)`, border: `1.5px solid rgba(194,58,5,0.2)`, borderRadius: 8, padding: '14px 18px', marginBottom: 12 }}>
            <p style={{ fontSize: 13, color: WARN, fontWeight: 700, marginBottom: 8 }}>The following situations are NOT eligible for return or refund:</p>
            <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Products that have been used, modified, or tampered with</li>
              <li>Damage caused by improper use, voltage fluctuations, or accidents</li>
              <li>Returns requested after 7 days of delivery</li>
              <li>Change of mind after delivery</li>
              <li>Products without original packaging, accessories, and documentation</li>
            </ul>
          </div>
        </Section>

        <Section title="3. How to Initiate a Return">
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Contact us within <strong>7 days</strong> of delivery on WhatsApp / phone at <strong>+91 98100 37985</strong></li>
            <li>Share your order details, a description of the issue, and clear photographs of the product and packaging</li>
            <li>Our team will review and respond within 48 hours</li>
            <li>If approved, we will arrange a pickup or guide you on returning the item</li>
          </ol>
        </Section>

        <Section title="4. Refund Process">
          <p>Once the returned product is received and inspected:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Approved refunds are processed within <strong>7–10 business days</strong></li>
            <li>Refunds are credited to the original payment method (bank account, UPI, or card)</li>
            <li>Shipping charges are non-refundable unless the return is due to our error</li>
          </ul>
        </Section>

        <Section title="5. Warranty Claims">
          <p>Manufacturing defects on the motor and pump within the warranty period are handled directly by us as the manufacturer. Physical damage, misuse, and consumables such as cooling pads are not covered. Genuine spare parts are available. Please retain the warranty card and invoice included with your product.</p>
        </Section>

        <Section title="6. Contact for Returns">
          <ul style={{ paddingLeft: 20, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>WhatsApp / Phone:</strong> +91 98100 37985 · +91 99990 11801</li>
            <li><strong>Address:</strong> D-327, Sector-5, DSIIDC Industrial Area, Bawana, New Delhi – 110039</li>
            <li>Or reach us via our <Link href="/contact" style={{ color: BLUE, fontWeight: 700 }}>Contact page</Link>.</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
