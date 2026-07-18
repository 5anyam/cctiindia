import './styles/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnnouncementBar from '../../components/anouncement';
import { Suspense } from 'react';
import Whatsapp from '../../components/Whatsapp';
import ScrollReveal from '../../components/ScrollReveal';
import Loading from './loading';

export const metadata = {
  title: 'CCTI India — Air Cooler Manufacturer Since 1990 | Bawana, Delhi',
  description: 'CCTI India (Co-Cooling Technology India) — A brand of Agroson Electrical Industries. Leading air cooler manufacturer in Bawana, Delhi since 1990. IcyChill, Fiesta, Brezza, Neo & Swish tower and personal air coolers — buy directly from the manufacturer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden overflow-y-scroll antialiased">
        <div className="flex flex-col min-h-screen">
          <AnnouncementBar />
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
        <ScrollReveal />
        <Whatsapp />
      </body>
    </html>
  );
}
