'use client';

import React from 'react';
import Image from 'next/image';

const GREEN = '#3DAA35';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(15,17,23,0.85)', backdropFilter: 'blur(6px)',
    }}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

        {/* Logo */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '12px 20px', boxShadow: `0 0 40px rgba(61,170,53,0.25)` }}>
          <Image
            src="/sachdeva-logo.jpeg"
            alt="Sachdeva Medline"
            width={160}
            height={52}
            style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
            priority
          />
        </div>

        {/* Loading bar */}
        <div style={{ width: 120, height: 3, background: 'rgba(255,255,255,0.12)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: '45%', background: GREEN, borderRadius: 99,
            animation: 'sm-loading 1s infinite linear',
          }} />
        </div>

      </div>

      <style>{`
        @keyframes sm-loading {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(360%); }
        }
      `}</style>
    </div>
  );
}
