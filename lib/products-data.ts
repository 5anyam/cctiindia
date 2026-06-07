export interface ProductSpec {
  name: string;
  value: string;
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
  ingredients: ProductSpec[];
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
    slug: 'ccti-icychill-tower-12',
    name: 'IcyChill Tower 12"',
    shortName: 'IcyChill Tower',
    tagline: 'Breathe Fresh, Stay Cool — 50L tower cooler with 300mm fan blade & honeycomb pads',
    price: 7499,
    regularPrice: 8999,
    images: ['/products/icychill-tower-12.png', '/products/icychill-tower-12-2.png'],
    benefits: [
      '50-litre tank capacity — runs all day without frequent refills',
      'Large honeycomb pad area for better evaporative cooling',
      'Easy to manoeuvre with bigger 60mm dia wheels',
      'Water drain outlet for easy cleaning of tank',
      'Fan blade size 300mm for powerful airflow',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '50 Litres', benefit: 'Long uninterrupted cooling' },
      { name: 'Fan Blade', value: '300mm', benefit: 'High airflow for large rooms' },
      { name: 'Wheel Size', value: '60mm dia', benefit: 'Easy to move across rooms' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Superior evaporative efficiency' },
      { name: 'Drain Outlet', value: 'Yes', benefit: 'Hassle-free tank cleaning' },
    ],
    howToUse:
      'Fill the 50L tank via the top inlet. Connect to a standard 230V socket. Select desired fan speed. Place near a window or door for best results. Clean honeycomb pads every 2–3 weeks. Use the drain outlet to empty and rinse the tank regularly.',
    category: 'Tower Cooler',
    badge: 'Best Seller',
    rating: 4.8,
    reviewCount: 284,
    capsules: 0,
  },
  {
    id: 2,
    slug: 'ccti-fiesta-tower-double-blower',
    name: 'Fiesta Tower Double Blower',
    shortName: 'Fiesta Tower',
    tagline: 'Chill Out, Naturally — 90L double blower tower cooler for large rooms',
    price: 9999,
    regularPrice: 12499,
    images: ['/products/fiesta-tower-double-blower.png', '/products/fiesta-tower-double-blower-2.png'],
    benefits: [
      'Powerful double blower for significantly better air flow',
      '90-litre tank capacity — ideal for large rooms and halls',
      'Exclusive wheel design with lock function for stable placement',
      'Easy to manoeuvre with bigger 80mm dia wheels',
      'Large honeycomb pad area with water drain outlet',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '90 Litres', benefit: 'Runs all day without refill' },
      { name: 'Blower', value: 'Double Blower', benefit: 'Stronger, wider air throw' },
      { name: 'Wheel Size', value: '80mm dia + Lock', benefit: 'Stable & easy to move' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Maximum evaporation surface' },
      { name: 'Drain Outlet', value: 'Yes', benefit: 'Easy tank maintenance' },
    ],
    howToUse:
      'Fill the 90L tank. Place the cooler in the centre of the room or near an air inlet. Lock the wheels once positioned. Switch on and select fan speed. The double blower ensures uniform air distribution. Drain and clean the tank weekly during heavy use.',
    category: 'Tower Cooler',
    badge: 'Most Popular',
    rating: 4.8,
    reviewCount: 197,
    capsules: 0,
  },
  {
    id: 3,
    slug: 'ccti-brezza-stealth-blue-tower-16',
    name: 'Brezza Tower 16" Stealth Blue',
    shortName: 'Brezza Stealth Blue',
    tagline: 'Eco-Friendly Breeze, Just for You — 90L premium tower cooler with 400mm fan',
    price: 10999,
    regularPrice: 13499,
    images: ['/products/brezza-stealth-blue-tower-16.png', '/products/brezza-stealth-blue-tower-16-2.png'],
    benefits: [
      '90-litre tank capacity — long uninterrupted cooling sessions',
      'Large 400mm fan blade for powerful, wide air delivery',
      'Exclusive wheel design with lock function',
      'Easy to manoeuvre with bigger 80mm dia wheels',
      'Large honeycomb pad area with water drain outlet',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '90 Litres', benefit: 'Full day operation without refill' },
      { name: 'Fan Blade', value: '400mm', benefit: 'Powerful airflow for large spaces' },
      { name: 'Wheel Size', value: '80mm dia + Lock', benefit: 'Stable positioning' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Eco-friendly evaporative cooling' },
      { name: 'Colour', value: 'Stealth Blue', benefit: 'Modern, premium look' },
    ],
    howToUse:
      'Fill the 90L tank and position the cooler facing the room. Lock wheels once placed. Run on high speed initially, then reduce to medium for sustained comfort. The 400mm blade delivers powerful airflow over a wide area. Clean pads monthly.',
    category: 'Tower Cooler',
    badge: 'Premium',
    rating: 4.7,
    reviewCount: 143,
    capsules: 0,
  },
  {
    id: 4,
    slug: 'ccti-brezza-aurora-white-tower-16',
    name: 'Brezza Tower 16" Aurora White',
    shortName: 'Brezza Aurora White',
    tagline: 'Cool Air, Warm Smiles — 90L premium tower cooler in elegant Aurora White',
    price: 10999,
    regularPrice: 13499,
    images: ['/products/brezza-aurora-white-tower-16.png', '/products/brezza-aurora-white-tower-16-2.png'],
    benefits: [
      '90-litre tank capacity — ideal for large bedrooms and living rooms',
      'Large 400mm fan blade for powerful, wide air delivery',
      'Exclusive wheel design with lock function for stable use',
      'Easy to manoeuvre with bigger 80mm dia wheels',
      'Large honeycomb pad area with water drain outlet for easy cleaning',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '90 Litres', benefit: 'All-day cooling without refill' },
      { name: 'Fan Blade', value: '400mm', benefit: 'Wide, powerful airflow' },
      { name: 'Wheel Size', value: '80mm dia + Lock', benefit: 'Secure and mobile' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'High-efficiency cooling' },
      { name: 'Colour', value: 'Aurora White', benefit: 'Elegant look for any room' },
    ],
    howToUse:
      'Fill the 90L tank via the top inlet. Lock wheels once positioned. Select your preferred fan speed. The 400mm fan delivers cool air across the full room. Drain and clean weekly during peak summer use.',
    category: 'Tower Cooler',
    badge: 'New Arrival',
    rating: 4.7,
    reviewCount: 98,
    capsules: 0,
  },
  {
    id: 5,
    slug: 'ccti-neo-plus-double-blower',
    name: 'Neo Plus Double Blower',
    shortName: 'Neo Plus',
    tagline: 'Maximum Cooling, Minimum Energy — 50L double blower personal cooler',
    price: 5999,
    regularPrice: 7499,
    images: ['/products/neo-plus-double-blower.png', '/products/neo-plus-double-blower-2.png'],
    benefits: [
      '50-litre tank capacity for extended cooling',
      'Powerful double blower for better air circulation',
      'Easy to manoeuvre with bigger 60mm dia wheels',
      'Honeycomb pad for efficient evaporative cooling',
      'Water drain outlet for easy tank cleaning',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '50 Litres', benefit: 'Long cooling without refill' },
      { name: 'Blower', value: 'Double Blower', benefit: 'Better air throw and coverage' },
      { name: 'Wheel Size', value: '60mm dia', benefit: 'Portable and easy to shift' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Energy-efficient cooling' },
      { name: 'Drain Outlet', value: 'Yes', benefit: 'Easy maintenance' },
    ],
    howToUse:
      'Fill the 50L tank. Place near a window or door for best results. The double blower ensures wider air distribution across the room. Use the drain outlet to empty the tank when not in use for extended periods. Clean pads every 2 weeks.',
    category: 'Personal Cooler',
    badge: 'Best Value',
    rating: 4.6,
    reviewCount: 176,
    capsules: 0,
  },
  {
    id: 6,
    slug: 'ccti-swish-50-aurora-white',
    name: 'Swish 50 Aurora White',
    shortName: 'Swish 50',
    tagline: 'Beat the Heat, Effortlessly — 50L personal cooler with 300mm fan blade',
    price: 5499,
    regularPrice: 6999,
    images: ['/products/swish-50-aurora-white.png', '/products/swish-50-aurora-white-2.png'],
    benefits: [
      '50-litre tank capacity — runs all day with minimal refills',
      'Fan blade size 300mm for strong, efficient airflow',
      'Large honeycomb pad area for better cooling performance',
      'Water drain outlet for easy and hygienic tank cleaning',
      'Optional 60mm wheels for easy movement',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '50 Litres', benefit: 'Extended cooling sessions' },
      { name: 'Fan Blade', value: '300mm', benefit: 'Powerful personal cooling' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Efficient evaporative performance' },
      { name: 'Drain Outlet', value: 'Yes', benefit: 'Easy cleaning' },
      { name: 'Colour', value: 'Aurora White', benefit: 'Clean, modern look' },
    ],
    howToUse:
      'Fill the 50L tank via the top lid. Place near a window or in a ventilated area. Select desired fan speed. The 300mm blade delivers focused, powerful airflow. Use the drain outlet to empty and rinse the tank every week.',
    category: 'Personal Cooler',
    badge: 'Compact Pick',
    rating: 4.6,
    reviewCount: 134,
    capsules: 0,
  },
  {
    id: 7,
    slug: 'ccti-swish-30-stealth-blue',
    name: 'Swish 30 Stealth Blue',
    shortName: 'Swish 30',
    tagline: 'Chill with the Best — compact 30L personal cooler with honeycomb pad',
    price: 3999,
    regularPrice: 4999,
    images: ['/products/swish-30-stealth-blue.png', '/products/swish-30-stealth-blue.png'],
    benefits: [
      '30-litre compact tank — ideal for bedrooms and small offices',
      'Honeycomb pad for efficient evaporative cooling',
      'Lightweight design — easy to carry from room to room',
      'Optional wheels for flexibility',
      'Low power consumption — economical to run',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '30 Litres', benefit: 'Perfect for small spaces' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Efficient cooling performance' },
      { name: 'Wheels', value: 'Optional', benefit: 'Portable and lightweight' },
      { name: 'Colour', value: 'Stealth Blue', benefit: 'Bold, stylish design' },
      { name: 'Use Case', value: 'Personal / Bedroom', benefit: 'Compact, focused cooling' },
    ],
    howToUse:
      'Fill the 30L tank. Place the cooler near a window or air inlet for best cross-ventilation. Select fan speed as needed. Being compact, it can easily be moved between rooms. Drain the tank if unused for more than a day.',
    category: 'Personal Cooler',
    badge: 'Compact',
    rating: 4.5,
    reviewCount: 112,
    capsules: 0,
  },
  {
    id: 8,
    slug: 'ccti-neo-double-blower',
    name: 'Neo Double Blower',
    shortName: 'Neo',
    tagline: 'Eco-Friendly Breeze, Just for You — 30L double blower personal cooler',
    price: 3499,
    regularPrice: 4499,
    images: ['/products/neo-double-blower.png', '/products/neo-double-blower-2.png'],
    benefits: [
      '30-litre tank — compact and easy to use anywhere',
      'Double blower design for better air coverage',
      'Honeycomb pad for eco-friendly evaporative cooling',
      'Optional wheels for easy portability',
      'Energy-efficient — ideal for personal and office use',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '30 Litres', benefit: 'Compact and easy to fill' },
      { name: 'Blower', value: 'Double Blower', benefit: 'Better air distribution' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Eco-friendly cooling' },
      { name: 'Wheels', value: 'Optional', benefit: 'Portable design' },
      { name: 'Power', value: 'Low Consumption', benefit: 'Budget-friendly to run' },
    ],
    howToUse:
      'Fill the 30L tank via the top inlet. Position near a ventilated area. The double blower circulates air efficiently even in compact spaces. Clean pads fortnightly and drain the tank when not in use.',
    category: 'Personal Cooler',
    badge: 'Eco Friendly',
    rating: 4.5,
    reviewCount: 89,
    capsules: 0,
  },
];

export function getProductBySlug(slug: string): StaticProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
