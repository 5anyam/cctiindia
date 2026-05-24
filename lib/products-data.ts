export interface ProductIngredient {
  name: string;
  dose: string;
  benefit: string;
}

export interface StaticProduct {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  regularPrice: number;
  images: string[];
  benefits: string[];
  ingredients: ProductIngredient[];
  howToUse: string;
  category: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  capsules: number;
}

export const PRODUCTS: StaticProduct[] = [
  {
    id: 1,
    slug: 'longfian-jay-5-5-litres-medical-grade-oxygen-concentrator',
    name: 'Longfian Jay-5',
    shortName: 'Longfian Jay-5',
    tagline: '5 LPM medical-grade oxygen concentrator — reliable, quiet & 24/7 capable',
    price: 24900,
    regularPrice: 24900,
    images: [
      'https://sachdevamedline.com/wp-content/uploads/2023/12/lj5-1.webp',
      'https://sachdevamedline.com/wp-content/uploads/2023/12/lj5-2.webp',
    ],
    benefits: [
      'Delivers 93±3% pure medical-grade oxygen at up to 5 litres per minute',
      'Ultra-quiet operation — under 45 dB, safe for bedroom use',
      'Built-in safety alarms for low purity, power failure & over-temperature',
      'Continuous 24/7 operation without service interruption',
      'Compact, lightweight design — easy to move between rooms',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '1–5 LPM', benefit: 'Adjustable for mild to moderate therapy' },
      { name: 'Oxygen Purity', dose: '93±3%', benefit: 'Medical-grade oxygen output' },
      { name: 'Noise Level', dose: '≤45 dB', benefit: 'Silent enough for bedroom use' },
      { name: 'Power Supply', dose: '110V / 220V', benefit: 'Works on standard Indian power' },
      { name: 'Consumption', dose: '280W', benefit: 'Energy-efficient round-the-clock use' },
    ],
    howToUse:
      'Place on a flat surface with at least 20 cm clearance on all sides. Connect the nasal cannula or mask. Set the prescribed flow rate using the dial. Use as directed by your physician. Clean the external filter every 2 weeks with mild soap and allow to dry completely before reinserting.',
    category: 'Oxygen Concentrator',
    badge: 'Best Seller',
    rating: 4.8,
    reviewCount: 214,
    capsules: 0,
  },
  {
    id: 2,
    slug: 'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator',
    name: 'Longfian Jay-5AW',
    shortName: 'Longfian Jay-5AW',
    tagline: '5 LPM concentrator with built-in wheels & humidifier — mobility meets comfort',
    price: 24900,
    regularPrice: 24900,
    images: [
      'https://sachdevamedline.com/wp-content/uploads/2023/12/j1.webp',
      'https://sachdevamedline.com/wp-content/uploads/2023/12/j2.webp',
    ],
    benefits: [
      'Integrated trolley wheels and handle for easy room-to-room movement',
      '5 LPM medical-grade oxygen at 93±3% consistent purity',
      'Built-in humidifier bottle for comfortable, moisture-rich therapy',
      'Minimal noise output — designed for home and recovery environments',
      'Safety alarms for oxygen purity drop and power fault',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '1–5 LPM', benefit: 'Ideal for home & recovery use' },
      { name: 'Oxygen Purity', dose: '93±3%', benefit: 'Medical-grade output at all flow rates' },
      { name: 'Mobility', dose: 'Wheels + Handle', benefit: 'Move easily across rooms without lifting' },
      { name: 'Humidifier', dose: 'Built-in', benefit: 'Prevents dryness and nasal irritation' },
      { name: 'Design', dose: 'Compact', benefit: 'Lightweight and space-efficient' },
    ],
    howToUse:
      'Fill the humidifier bottle with distilled water to the marked fill line. Connect nasal cannula or mask to the outlet port. Set the flow rate as prescribed. Use the wheel handle to move between rooms. Clean the filter every 2 weeks — wash gently and allow to fully dry before reinserting.',
    category: 'Oxygen Concentrator',
    badge: 'Most Convenient',
    rating: 4.7,
    reviewCount: 156,
    capsules: 0,
  },
  {
    id: 3,
    slug: 'patient-recliner-bed',
    name: 'Patient Recliner Bed',
    shortName: 'Recliner Bed',
    tagline: 'Motorised recliner bed — maximum comfort for home patient care',
    price: 16499,
    regularPrice: 16499,
    images: [
      'https://sachdevamedline.com/wp-content/uploads/2023/12/bed-1.webp',
      'https://sachdevamedline.com/wp-content/uploads/2023/12/bed-2.webp',
    ],
    benefits: [
      'Motorised backrest adjustable up to 80° with wireless remote control',
      'Transforms any standard bed into a full recliner in under 5 minutes',
      'Heavy-duty imported motor with durable powder-coated steel frame',
      'Weight capacity up to 150 kg — suitable for most adult patients',
      'Compatible with inverters — works during power cuts',
    ],
    ingredients: [
      { name: 'Backrest Angle', dose: '0°–80°', benefit: 'Multiple comfortable resting positions' },
      { name: 'Load Capacity', dose: '150 kg', benefit: 'Suitable for most adult patients' },
      { name: 'Control', dose: 'Wireless Remote', benefit: 'Easy operation by patient or caregiver' },
      { name: 'Frame', dose: 'Steel + Epoxy', benefit: 'Rust-proof, long-lasting build' },
      { name: 'Setup Time', dose: '< 5 mins', benefit: 'No tools needed for assembly' },
    ],
    howToUse:
      'Place the recliner mechanism on your existing bed frame. Assemble using the included guide — no tools required, takes under 5 minutes. Plug into a standard 220V socket (also compatible with inverter). Use the wireless remote to raise or lower the backrest as needed. Keep the motor area dry and clean monthly.',
    category: 'Patient Beds',
    badge: 'Trending',
    rating: 4.6,
    reviewCount: 87,
    capsules: 0,
  },
];

export function getProductBySlug(slug: string): StaticProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
