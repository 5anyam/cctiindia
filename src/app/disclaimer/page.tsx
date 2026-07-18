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

export default function DisclaimerPage() {
  return (
    <div style={{ background: '#F0F5FF', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(10,91,214,0.08)', border: '1.5px solid #dde8ff' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: BLUE, marginBottom: 8, letterSpacing: '-0.02em' }}>Disclaimer</h1>
        <p style={{ fontSize: 13, color: BODY, marginBottom: 40 }}>CCTI India · Air Cooler Manufacturer, Bawana, Delhi</p>

        <div style={{ background: `rgba(10,91,214,0.05)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 10, padding: '16px 20px', marginBottom: 36 }}>
          <p style={{ fontSize: 14, color: DARK, fontWeight: 600 }}>Please read the product specifications and installation instructions before using any air cooler. For safe operation, ensure correct electrical connections and proper water levels as described in the product manual.</p>
        </div>

        <Section title="1. General Disclaimer">
          <p>The information provided on the CCTI India website is for general informational purposes only. Product descriptions, specifications, capacities and use-case information are provided to help you choose the right air cooler and should be used as a guide.</p>
          <p style={{ marginTop: 12 }}>Cooling performance depends on room size, ventilation, humidity and ambient conditions. Evaporative air coolers work best in dry climates and with adequate cross-ventilation.</p>
        </Section>

        <Section title="2. Product & Manufacturing">
          <p>Co-Cooling Technology India (CCTI) is a brand of Agroson Electrical Industries and is the manufacturer of the air coolers listed on this website. We use ISI-certified components (motors, pumps and cooling pads) and test every unit before dispatch.</p>
          <p style={{ marginTop: 12 }}>CCTI India is not liable for any damage resulting from improper installation, incorrect voltage, use of non-genuine spare parts, or operation contrary to the product manual.</p>
        </Section>

        <Section title="3. Accuracy of Information">
          <p>While we strive to keep product information, pricing, and availability accurate, we do not warrant that all content on the website is error-free. Prices, specifications, and availability are subject to change without notice. Images on the website are for illustration purposes and may differ slightly from the actual product.</p>
        </Section>

        <Section title="4. Third-Party Links">
          <p>Our website may contain links to third-party websites for reference purposes. CCTI India does not endorse or take responsibility for the content or practices of any linked external sites.</p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>To the maximum extent permitted by law, CCTI India (Agroson Electrical Industries) shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of products purchased from us beyond the purchase value of the product.</p>
        </Section>

        <Section title="6. Contact">
          <p>If you have questions about this disclaimer, contact us:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>WhatsApp / Phone:</strong> +91 98999 55506 · +91 98100 37985</li>
            <li><strong>Address:</strong> D-327, Sector-5, DSIIDC Industrial Area, Bawana, New Delhi – 110039</li>
            <li>Or reach us via our <Link href="/contact" style={{ color: BLUE, fontWeight: 700 }}>Contact page</Link>.</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
