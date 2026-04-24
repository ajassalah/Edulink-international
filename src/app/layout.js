import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'EduLink International Campus | Empowering Global Graduates',
  description: 'EduLink International Campus offers world-class education with diverse faculties in Computing, Management, Health, and Education. Join us to shape your future with globally recognized qualifications.',
  keywords: 'education, university, college, business school, computing, management, health, international campus',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
