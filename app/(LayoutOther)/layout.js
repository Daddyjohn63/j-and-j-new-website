import { Inter } from 'next/font/google';
import '../globals.css';
import '@/styles/custom.css';

import Header from '@/components/layout/header/Header';

import PageWrapper from '@/components/layout/PageWidthWrapper';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'TechWizard - Next js IT Solutions Services and Technology React Template',
  description: 'TechWizard - Next js IT Solutions Services and Technology React Template'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <main>
          <Header headerPrimary={false} />
          <PageWrapper>{children}</PageWrapper>
        </main>
      </body>
    </html>
  );
}
