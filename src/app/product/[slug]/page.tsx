import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductClient from './product-client';
import { PRODUCTS, getProductBySlug } from '../../../../lib/products-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | CCTI India',
      robots: { index: false, follow: false },
    };
  }

  const title = `${product.name} – ${product.tagline} | CCTI India`;
  const description = `Buy ${product.name} from CCTI India at ₹${product.price.toLocaleString('en-IN')}. ${product.tagline}. Factory direct price. Pan-India delivery. WhatsApp to order.`;
  const imageUrl = product.images[0];
  const canonical = `https://www.cctiindia.com/product/${product.slug}`;

  return {
    title,
    description,
    keywords: [product.name, product.category, 'air cooler', 'cooler manufacturer', 'CCTI India', 'Bawana Delhi', 'buy cooler online'],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
      siteName: 'CCTI India',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
    metadataBase: new URL('https://www.cctiindia.com'),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const canonical = `https://www.cctiindia.com/product/${product.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: `${product.tagline}. Manufactured by CCTI India, Bawana Delhi. Factory direct pricing. Pan-India delivery.`,
    image: product.images,
    url: canonical,
    sku: `CCTI-${product.id}`,
    brand: {
      '@type': 'Brand',
      name: 'CCTI India',
    },
    offers: {
      '@type': 'Offer',
      url: canonical,
      priceCurrency: 'INR',
      price: product.price.toString(),
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductClient product={product} />
    </>
  );
}
