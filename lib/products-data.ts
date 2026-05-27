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
    slug: 'ccti-desert-air-cooler-80l',
    name: 'CCTI Desert Cooler 80L',
    shortName: 'Desert Cooler 80L',
    tagline: '80-litre heavy-duty desert cooler — ideal for large rooms up to 400 sq ft',
    price: 8999,
    regularPrice: 10999,
    images: ['/products/desert-cooler-80l.jpg', '/products/desert-cooler-80l-2.jpg'],
    benefits: [
      'Powerful 3-speed motor with 4500 m³/hr air delivery for large rooms',
      'Honeycomb cooling pads for maximum evaporation efficiency',
      '80-litre tank capacity — runs all day without frequent refills',
      'Auto-fill water level indicator with overflow protection',
      'Castor wheels for easy movement across rooms',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '80 Litres', benefit: 'Runs 10–12 hours without refill' },
      { name: 'Air Delivery', value: '4500 m³/hr', benefit: 'Cools rooms up to 400 sq ft' },
      { name: 'Motor Power', value: '185W', benefit: 'Energy-efficient, low electricity bills' },
      { name: 'Cooling Pad', value: 'Honeycomb', benefit: 'Superior evaporative cooling' },
      { name: 'Speed Settings', value: '3-Speed', benefit: 'Customise airflow as needed' },
    ],
    howToUse:
      'Fill the water tank via the top inlet until the indicator shows full. Connect to a standard 230V socket. Select the desired fan speed. For maximum cooling, place near a window or opening. Clean the honeycomb pads every 2–3 weeks with plain water.',
    category: 'Desert Cooler',
    badge: 'Best Seller',
    rating: 4.8,
    reviewCount: 312,
    capsules: 0,
  },
  {
    id: 2,
    slug: 'ccti-tower-cooler-55l',
    name: 'CCTI Tower Cooler 55L',
    shortName: 'Tower Cooler 55L',
    tagline: 'Slim tower design, 55L tank — powerful cooling for mid-size rooms',
    price: 7499,
    regularPrice: 8999,
    images: ['/products/tower-cooler-55l.jpg', '/products/tower-cooler-55l-2.jpg'],
    benefits: [
      'Vertical tower design — ideal for tight spaces and modern homes',
      '55-litre tank with 3-side honeycomb pads for 360° airflow',
      'Remote control & auto-louver swing for uniform air distribution',
      'Ice chamber for extra cooling during peak summer days',
      'Low noise operation — under 52 dB for bedroom and office use',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '55 Litres', benefit: '8–10 hours of uninterrupted cooling' },
      { name: 'Air Delivery', value: '3200 m³/hr', benefit: 'Cools rooms up to 250 sq ft' },
      { name: 'Motor Power', value: '150W', benefit: 'Highly energy-efficient' },
      { name: 'Control', value: 'Remote + Manual', benefit: 'Convenient full-feature remote' },
      { name: 'Noise Level', value: '≤52 dB', benefit: 'Quiet enough for bedroom use' },
    ],
    howToUse:
      'Fill water tank and add ice cubes in the ice chamber for extra cooling. Use the remote to select fan speed and swing mode. Point the louvers toward the centre of the room for best results. Clean pads monthly and drain the tank if unused for extended periods.',
    category: 'Tower Cooler',
    badge: 'Most Popular',
    rating: 4.7,
    reviewCount: 198,
    capsules: 0,
  },
  {
    id: 3,
    slug: 'ccti-personal-cooler-20l',
    name: 'CCTI Personal Cooler 20L',
    shortName: 'Personal Cooler 20L',
    tagline: 'Compact 20L personal cooler — perfect for study rooms and small offices',
    price: 3999,
    regularPrice: 4999,
    images: ['/products/personal-cooler-20l.jpg', '/products/personal-cooler-20l-2.jpg'],
    benefits: [
      'Lightweight and portable — weighs just 5 kg with built-in carry handle',
      '20-litre tank provides 6–8 hours of continuous cooling',
      'USB-compatible charging port and inbuilt LED mood light',
      'Dust filter to keep air clean and allergen-free',
      'Easy-fill top lid and transparent water level window',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '20 Litres', benefit: '6–8 hours of cooling' },
      { name: 'Air Delivery', value: '900 m³/hr', benefit: 'Best for 80–100 sq ft spaces' },
      { name: 'Motor Power', value: '75W', benefit: 'Ultra low power consumption' },
      { name: 'Weight', value: '5 kg', benefit: 'Easy to carry and move' },
      { name: 'Extras', value: 'USB + LED', benefit: 'Multi-functional convenience' },
    ],
    howToUse:
      'Fill the tank via the top lid. Place the cooler near a window for fresh air intake. Connect to a 230V socket or USB power bank. Select speed and enjoy cool air. Empty the tank if not using for 2+ days to prevent algae build-up.',
    category: 'Personal Cooler',
    badge: 'Compact Pick',
    rating: 4.6,
    reviewCount: 145,
    capsules: 0,
  },
  {
    id: 4,
    slug: 'ccti-window-cooler-70l',
    name: 'CCTI Window Cooler 70L',
    shortName: 'Window Cooler 70L',
    tagline: 'Classic window-fit cooler — 70L capacity, powerful airflow for large halls',
    price: 7999,
    regularPrice: 9499,
    images: ['/products/window-cooler-70l.jpg', '/products/window-cooler-70l-2.jpg'],
    benefits: [
      'Fits standard window openings — no extra installation hardware needed',
      '70-litre tank with direct water connection option for continuous use',
      'Heavy-duty pump with 3-pad evaporation system for maximum output',
      'Reversible installation — can also be used as a floor cooler',
      'Rust-proof HDPE body with 5-year frame warranty',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '70 Litres', benefit: '10–12 hours continuous use' },
      { name: 'Air Delivery', value: '4200 m³/hr', benefit: 'Cools up to 350 sq ft' },
      { name: 'Motor Power', value: '165W', benefit: 'Efficient large-space cooling' },
      { name: 'Body Material', value: 'HDPE Plastic', benefit: 'Rust-proof, durable for years' },
      { name: 'Installation', value: 'Window / Floor', benefit: 'Flexible use options' },
    ],
    howToUse:
      'Mount in the window frame using the provided hardware. Fill tank or connect a direct water pipe via the inlet valve. Switch on and adjust speed and louver direction as needed. Service the pump and pads every season for optimal performance.',
    category: 'Window Cooler',
    badge: 'Heavy Duty',
    rating: 4.7,
    reviewCount: 89,
    capsules: 0,
  },
  {
    id: 5,
    slug: 'ccti-industrial-air-cooler-200l',
    name: 'CCTI Industrial Cooler 200L',
    shortName: 'Industrial Cooler 200L',
    tagline: '200-litre industrial-grade cooler — built for factories, warehouses & large halls',
    price: 24999,
    regularPrice: 28999,
    images: ['/products/industrial-cooler-200l.jpg', '/products/industrial-cooler-200l-2.jpg'],
    benefits: [
      'Industrial-grade motor delivering 18,000 m³/hr air throw — covers 2000 sq ft',
      '200-litre stainless steel tank with direct water connection support',
      'Powder-coated steel body with heavy-duty locking castor wheels',
      'Three-phase power compatible — ideal for factory and workshop environments',
      'Low maintenance design — replaceable pads and serviceable pump',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '200 Litres', benefit: 'Long uninterrupted run time' },
      { name: 'Air Delivery', value: '18,000 m³/hr', benefit: 'Covers up to 2000 sq ft' },
      { name: 'Motor Power', value: '750W', benefit: 'Built for heavy-duty industrial use' },
      { name: 'Body', value: 'Powder-coated Steel', benefit: 'Withstands tough environments' },
      { name: 'Power Input', value: 'Single / 3-phase', benefit: 'Flexible power supply options' },
    ],
    howToUse:
      'Install on a flat, level surface with 60 cm clearance on all sides for airflow. Connect to industrial power supply. Fill tank or connect direct water supply via the float valve. Start on low speed first, then increase as needed. Schedule monthly maintenance for pads and pump.',
    category: 'Industrial Cooler',
    badge: 'Industrial Grade',
    rating: 4.9,
    reviewCount: 57,
    capsules: 0,
  },
  {
    id: 6,
    slug: 'ccti-desert-cooler-100l-jumbo',
    name: 'CCTI Jumbo Cooler 100L',
    shortName: 'Jumbo Cooler 100L',
    tagline: '100-litre jumbo desert cooler — maximum power for large halls and open areas',
    price: 11499,
    regularPrice: 13999,
    images: ['/products/jumbo-cooler-100l.jpg', '/products/jumbo-cooler-100l-2.jpg'],
    benefits: [
      'Jumbo 100-litre tank — cool for 12–14 hours non-stop',
      'High-speed motor with 6000 m³/hr air delivery for open halls',
      'Four-side honeycomb cooling pads with inverter-compatible motor',
      'Auto water level shutoff to prevent dry-running damage',
      'Heavy-duty 4-wheel castor base with locking mechanism',
    ],
    ingredients: [
      { name: 'Tank Capacity', value: '100 Litres', benefit: '12–14 hours without refill' },
      { name: 'Air Delivery', value: '6000 m³/hr', benefit: 'Cools up to 500 sq ft open area' },
      { name: 'Motor Power', value: '200W', benefit: 'Inverter-compatible for uninterrupted use' },
      { name: 'Cooling Pad', value: '4-side Honeycomb', benefit: 'Maximum evaporation surface' },
      { name: 'Warranty', value: '2 Years', benefit: 'Covered pump, motor, and body' },
    ],
    howToUse:
      'Fill the jumbo tank from the top or via the side inlet pipe. Place in the centre of the hall or near the main air opening. Set to high speed for rapid cooling, then reduce to medium for sustained comfort. Drain and clean the tank before storing at end of season.',
    category: 'Desert Cooler',
    badge: 'Jumbo Size',
    rating: 4.8,
    reviewCount: 103,
    capsules: 0,
  },
];

export function getProductBySlug(slug: string): StaticProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
