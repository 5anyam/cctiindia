'use client';

import React, { useState } from 'react';
import { Phone, Check } from 'lucide-react';

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';

// ─────────────────────────────────────────────────────────────
// LEAD CAPTURE → GOOGLE SHEETS
// Deploy the Apps Script in /google-sheets-callback.gs as a Web App
// ("Anyone" access), then paste its /exec URL below OR set
// NEXT_PUBLIC_SHEETS_WEBAPP_URL in .env.local
// ─────────────────────────────────────────────────────────────
const SHEETS_WEBAPP_URL =
  process.env.NEXT_PUBLIC_SHEETS_WEBAPP_URL ||
  'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

const CATEGORIES = ['Tower Cooler', 'Personal Cooler', 'Desert Cooler', 'Window Cooler', 'Industrial Cooler', 'Not sure yet'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function CallbackForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', city: '', interest: '' });
  const [error, setError] = useState('');

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) return setError('Please enter your name.');
    if (!/^[0-9]{10}$/.test(form.phone.replace(/\D/g, '').slice(-10))) return setError('Please enter a valid 10-digit phone number.');

    setStatus('submitting');
    try {
      const payload = new URLSearchParams({
        name: form.name.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        interest: form.interest,
        source: typeof window !== 'undefined' ? window.location.pathname : '',
        submittedAt: new Date().toISOString(),
      });
      // Apps Script web apps don't return CORS headers → use no-cors.
      // The row is still written; the response is opaque so we treat a
      // non-throwing fetch as success.
      await fetch(SHEETS_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      setStatus('success');
      setForm({ name: '', phone: '', city: '', interest: '' });
    } catch {
      setStatus('error');
      setError('Something went wrong. Please WhatsApp us instead.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px', border: '1.5px solid #dde8ff', background: '#fff',
    color: DARK, fontSize: 14, outline: 'none', boxSizing: 'border-box', borderRadius: 10, fontFamily: 'inherit',
  };

  if (status === 'success') {
    return (
      <div style={{ background: '#fff', border: '1.5px solid #dde8ff', borderRadius: 16, padding: '44px 32px', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, background: 'rgba(37,211,102,0.12)', border: '1.5px solid #25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
          <Check style={{ width: 26, height: 26, color: '#1da851' }} />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 8 }}>Thank you! We&apos;ll call you back.</h3>
        <p style={{ fontSize: 14, color: '#1c2740', lineHeight: 1.7 }}>Our team will reach out shortly with the best factory price. For a faster response, WhatsApp us at +91 98999 55506.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1.5px solid #dde8ff', borderRadius: 16, padding: compact ? '28px 24px' : '36px 32px', boxShadow: '0 4px 20px rgba(10,91,214,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <div style={{ width: 38, height: 38, background: 'rgba(10,91,214,0.1)', border: '1.5px solid rgba(10,91,214,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Phone style={{ width: 18, height: 18, color: BLUE }} />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: DARK, letterSpacing: '-0.01em' }}>Get a Callback</h3>
      </div>
      <p style={{ fontSize: 13, color: '#1c2740', marginBottom: 20, lineHeight: 1.6 }}>
        Leave your details and we&apos;ll call you back with the best factory price and delivery options.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <input style={inputStyle} type="text" placeholder="Your name *" value={form.name} onChange={update('name')} />
        <input style={inputStyle} type="tel" placeholder="Phone number *" value={form.phone} onChange={update('phone')} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 12, marginBottom: 16 }}>
        <input style={inputStyle} type="text" placeholder="City" value={form.city} onChange={update('city')} />
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.interest} onChange={update('interest')}>
          <option value="">Interested in… (optional)</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {error && <p style={{ fontSize: 13, color: '#C23A05', fontWeight: 600, marginBottom: 12 }}>{error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{ width: '100%', padding: '15px 20px', background: status === 'submitting' ? '#6b93d6' : BLUE, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: status === 'submitting' ? 'default' : 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(10,91,214,0.3)', transition: 'background 0.2s' }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Request Callback →'}
      </button>
      <p style={{ fontSize: 11, color: '#1c2740', textAlign: 'center', marginTop: 12, opacity: 0.8 }}>
        We respect your privacy. Your details are used only to contact you about your enquiry.
      </p>
    </form>
  );
}
