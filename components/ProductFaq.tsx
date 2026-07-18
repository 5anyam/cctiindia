'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  productSlug: string;
  productName: string;
}

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';

const coolerFAQs: FAQ[] = [
  {
    question: 'How long can the cooler run continuously?',
    answer: 'CCTI India coolers are designed for extended operation. With a full tank, most models run 8–14 hours depending on tank size and water consumption rate. For continuous use, the water inlet pipe connection option allows uninterrupted operation.'
  },
  {
    question: 'What size cooler do I need for my room?',
    answer: 'As a general guideline: Personal coolers (15–25L) suit rooms up to 100 sq ft. Tower/window coolers (40–70L) suit rooms up to 300 sq ft. Large desert coolers (80–100L) suit rooms up to 500 sq ft. Industrial coolers (150L+) are for large halls or factory floors.'
  },
  {
    question: 'Does it work during a power cut?',
    answer: 'Most CCTI India coolers are inverter-compatible. You can connect them to a home inverter or UPS for uninterrupted cooling during power cuts. Industrial models support both single-phase and three-phase power.'
  },
  {
    question: 'How do I order? Is there a physical store?',
    answer: 'Simply WhatsApp us at +91 98999 55506 or call us. You can also visit our factory in Bawana Industrial Area, Delhi (Mon–Fri, 9 AM–7 PM). We accept online orders and ship pan-India.'
  },
  {
    question: 'Are spare parts available?',
    answer: 'Yes — pumps, motors, honeycomb cooling pads, and other spare parts are stocked at our Bawana facility and available for purchase separately. WhatsApp us with your model number for availability.'
  },
  {
    question: 'What is the warranty on your coolers?',
    answer: 'All CCTI India coolers come with manufacturer warranty covering the motor and pump. Warranty period varies by model — details are included in the product box. Contact us on WhatsApp for after-sales service.'
  },
  {
    question: 'Do you deliver outside Delhi?',
    answer: 'Yes, we deliver pan-India. Orders are well-packed and dispatched via reliable logistics partners. Delivery typically takes 3–7 business days depending on your location.'
  },
  {
    question: 'Can I get a bulk or institutional quote?',
    answer: 'Yes. We supply to dealers, contractors, housing societies, factories and institutions at wholesale rates. WhatsApp us at +91 98999 55506 with your requirements for a custom quote.'
  },
];

const ProductFAQ: React.FC<ProductFAQProps> = ({ productName }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ background: '#fff', borderRadius: 16, border: `1.5px solid #dde8ff`, overflow: 'hidden', boxShadow: '0 2px 12px rgba(10,91,214,0.06)' }}>
      <div style={{ padding: '20px 28px', borderBottom: `1px solid #dde8ff`, background: '#f0f5ff' }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: DARK }}>Common Questions About {productName}</h3>
        <p style={{ fontSize: 12, color: 'rgba(11,30,61,0.74)', marginTop: 4 }}>Can&apos;t find an answer? WhatsApp us at +91 98999 55506</p>
      </div>
      <div>
        {coolerFAQs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} style={{ borderBottom: index < coolerFAQs.length - 1 ? `1px solid #dde8ff` : 'none' }}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{ width: '100%', padding: '18px 24px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, background: isOpen ? '#f0f5ff' : 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
              >
                <div style={{ display: 'flex', gap: 12, flex: 1 }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: isOpen ? BLUE : 'rgba(10,91,214,0.1)', color: isOpen ? '#fff' : BLUE, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {index + 1}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: DARK, lineHeight: 1.5 }}>{faq.question}</span>
                </div>
                <ChevronDown style={{ width: 16, height: 16, color: BLUE, flexShrink: 0, transition: 'transform 0.25s', transform: isOpen ? 'rotate(180deg)' : 'none', marginTop: 4 }} />
              </button>
              {isOpen && (
                <div style={{ padding: '0 24px 20px 60px' }}>
                  <div style={{ background: 'rgba(10,91,214,0.05)', borderLeft: `3px solid ${BLUE}`, borderRadius: '0 8px 8px 0', padding: '14px 16px' }}>
                    <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.75)', lineHeight: 1.85 }}>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ padding: '20px 24px', background: '#f0f5ff', borderTop: `1px solid #dde8ff`, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.8)', marginBottom: 12 }}>Still have questions?</p>
        <a href="https://wa.me/919899955506" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#25D366', color: '#fff', padding: '10px 22px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
        >
          WhatsApp Us →
        </a>
      </div>
    </div>
  );
};

export default ProductFAQ;
