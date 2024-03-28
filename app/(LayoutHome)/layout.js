import { Inter } from 'next/font/google';
import '../globals.css';
import '@/styles/custom.css';
import MarginWidthWrapper from '@/components/layout/MarginWidthWrapper';
import PageWidthWrapper from '@/components/layout/PageWidthWrapper';
import Header from '@/components/layout/header/Header';
import Image from 'next/image';
// import SectionShapeBottom from '@/public/assets/images/home/section-shape-bottom.png';
// import SectionShapeTop from '@/public/assets/images/home/section-shape-top.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main>
          <Header headerPrimary={true} />
          {/* <div className="relative overflow-hidden">
            <Image
              src={SectionShapeTop}
              alt="Shape"
              className="absolute top-[330px] right-0 -z-10"
            />
            {children}
            <Image
              src={SectionShapeBottom}
              alt="Shape"
              className="absolute bottom-0 left-0 -z-10"
            />
          </div> */}
          {/* <HeaderMobile /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
