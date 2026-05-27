'use client';

import React from 'react';

const BLUE = '#0A5BD6';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(11,30,61,0.88)', backdropFilter: 'blur(6px)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

        {/* CCTI India text logo */}
        <div style={{ background: 'rgba(10,91,214,0.15)', border: `1.5px solid rgba(10,91,214,0.35)`, borderRadius: 12, padding: '18px 28px', boxShadow: `0 0 40px rgba(10,91,214,0.2)`, textAlign: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: BLUE, letterSpacing: '-0.02em', lineHeight: 1 }}>CCTI</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 4 }}>India</div>
        </div>

        {/* Loading bar */}
        <div style={{ width: 120, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: '45%', background: BLUE, borderRadius: 99,
            animation: 'ccti-loading 1s infinite linear',
          }} />
        </div>

      </div>

      <style>{`
        @keyframes ccti-loading {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(360%); }
        }
      `}</style>
    </div>
  );
}
