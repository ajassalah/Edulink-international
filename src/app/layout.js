import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edulink.edu.lk';
const siteName = 'EduLink International Campus';

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'EduLink International Campus | Globally Recognized Qualifications',
    template: `%s | ${siteName}`,
  },
  description: 'EduLink International Campus offers world-class education with diverse faculties in Computing, Management, Health, and Education. Join us to shape your future with globally recognized qualifications.',
  keywords: ['EduLink International Campus', 'Sri Lanka private campus', 'UK qualifications Sri Lanka', 'online diplomas', 'business management courses', 'computing courses', 'health and social care courses', 'education and training courses'],
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: siteUrl,
    siteName,
    title: 'EduLink International Campus | Globally Recognized Qualifications',
    description: 'Explore internationally recognized programs across Computing, Management, Health, and Education at EduLink International Campus.',
    images: [
      {
        url: '/images/hero-campus.png',
        width: 1200,
        height: 630,
        alt: 'EduLink International Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduLink International Campus | Globally Recognized Qualifications',
    description: 'Explore internationally recognized programs across Computing, Management, Health, and Education.',
    images: ['/images/hero-campus.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/Edulink%20Logo-02.png`,
    email: 'info@edulink.edu.lk',
    telephone: '0112589202',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 Glen Aber Road',
      addressLocality: 'Colombo',
      postalCode: '00400',
      addressCountry: 'LK',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
