'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface ProductReviewsProps {
  productId: number;
  productName: string;
}

const BLUE = '#0A5BD6';
const DARK = '#0B1E3D';

const sampleReviews = [
  { name: 'Rajesh Kumar', city: 'Delhi', rating: 5, text: 'Excellent cooler! Been using it for two summers now. Very powerful airflow and the honeycomb pads cool the room quickly. Factory direct price is much better than market.', verified: true },
  { name: 'Sunita Sharma', city: 'Gurgaon', rating: 5, text: 'Ordered via WhatsApp and delivery was fast. The cooler is well-built, motor is quiet, and water tank is large enough to last all night. Highly recommend CCTI India.', verified: true },
  { name: 'Mohit Agarwal', city: 'Noida', rating: 4, text: 'Good quality desert cooler. Cooling is effective for our living room. Good packaging and on-time delivery. Will order again for the bedroom.', verified: true },
  { name: 'Priya Mehra', city: 'Faridabad', rating: 5, text: 'Best decision to buy directly from manufacturer. Same product as what dealers sell but at a much lower price. Customer service on WhatsApp is very responsive.', verified: true },
  { name: 'Vikram Singh', city: 'Rohtak', rating: 4, text: 'The industrial cooler I ordered for my workshop is a beast! Covers the entire floor area easily. Build quality is solid — exactly what I expected from a direct manufacturer.', verified: true },
];

const ProductReviews: React.FC<ProductReviewsProps> = ({ productName }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? sampleReviews : sampleReviews.slice(0, 3);

  const avgRating = (sampleReviews.reduce((sum, r) => sum + r.rating, 0) / sampleReviews.length).toFixed(1);

  return (
    <div>
      {/* Rating summary */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 32, background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 14, padding: '24px 28px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 56, fontWeight: 900, color: DARK, lineHeight: 1 }}>{avgRating}</div>
          <div style={{ display: 'flex', gap: 3, justifyContent: 'center', marginTop: 6 }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} style={{ width: 16, height: 16, fill: '#FFB800', color: '#FFB800' }} />
            ))}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(11,30,61,0.72)', marginTop: 6 }}>{sampleReviews.length} verified reviews</div>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          {[5,4,3,2,1].map(star => {
            const count = sampleReviews.filter(r => r.rating === star).length;
            const pct = (count / sampleReviews.length) * 100;
            return (
              <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: 'rgba(11,30,61,0.8)', width: 12 }}>{star}</span>
                <Star style={{ width: 12, height: 12, fill: '#FFB800', color: '#FFB800' }} />
                <div style={{ flex: 1, height: 8, background: '#dde8ff', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: BLUE, borderRadius: 4, transition: 'width 0.5s' }} />
                </div>
                <span style={{ fontSize: 11, color: 'rgba(11,30,61,0.72)', width: 16 }}>{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {displayedReviews.map((review, i) => (
          <div key={i} style={{ background: '#fff', border: `1.5px solid #dde8ff`, borderRadius: 12, padding: '20px 22px', boxShadow: '0 2px 8px rgba(10,91,214,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, background: `rgba(10,91,214,0.1)`, border: `1.5px solid rgba(10,91,214,0.2)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 16, fontWeight: 900, color: BLUE }}>{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{review.name}</p>
                  <p style={{ fontSize: 11, color: 'rgba(11,30,61,0.72)' }}>{review.city}</p>
                </div>
              </div>
              {review.verified && (
                <span style={{ fontSize: 10, fontWeight: 700, color: BLUE, background: 'rgba(10,91,214,0.08)', padding: '3px 8px', borderRadius: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Verified</span>
              )}
            </div>
            <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
              {[1,2,3,4,5].map(s => (
                <Star key={s} style={{ width: 14, height: 14, fill: s <= review.rating ? '#FFB800' : '#dde8ff', color: s <= review.rating ? '#FFB800' : '#dde8ff' }} />
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.7)', lineHeight: 1.75 }}>{review.text}</p>
          </div>
        ))}
      </div>

      {sampleReviews.length > 3 && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{ background: 'transparent', border: `1.5px solid #dde8ff`, color: DARK, padding: '10px 24px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = BLUE; (e.currentTarget as HTMLElement).style.color = BLUE; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#dde8ff'; (e.currentTarget as HTMLElement).style.color = DARK; }}
          >
            {showAll ? 'SHOW LESS' : `SHOW ALL ${sampleReviews.length} REVIEWS`}
          </button>
        </div>
      )}

      {/* Write review prompt */}
      <div style={{ marginTop: 24, background: '#f0f5ff', borderRadius: 12, padding: '20px 24px', border: `1.5px solid #dde8ff`, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'rgba(11,30,61,0.8)', marginBottom: 10 }}>
          Bought a {productName}? Share your experience!
        </p>
        <a href="https://wa.me/919810037985?text=Hi%2C%20I%20would%20like%20to%20share%20my%20review%20for%20my%20CCTI%20India%20cooler."
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#25D366', color: '#fff', padding: '10px 20px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
        >
          Share Feedback on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductReviews;
