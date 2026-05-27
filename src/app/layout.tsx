import './styles/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnnouncementBar from '../../components/anouncement';
import { Suspense } from 'react';
import Whatsapp from '../../components/Whatsapp';
import Loading from './loading';

export const metadata = {
  title: 'CCTI India — Air Cooler Manufacturer Since 1998 | Bawana, Delhi',
  description: 'CCTI India is a leading air cooler manufacturer based in Bawana, Delhi, since 1998. We make desert coolers, tower coolers, personal coolers, window coolers and industrial coolers. Buy directly from the manufacturer.',
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
        <Whatsapp />
      </body>
    </html>
  );
}
