import BootstrapInit from '@/helper/BootstrapInit';
import LoadPhosphorIcons from '@/helper/LoadPhosphorIcons';
import RouteScrollToTop from '@/helper/RouteScrollToTop';

import './font.css';
import './globals.scss';

import FooterThree from '@/components/FooterThree';
import HeaderOne from '@/components/HeaderOne';
import TopTicker from '@/components/TopTicker';

export const metadata = {
  title:
    'Navaneetha  Education Trust - LMS, Tutors, Education & Online Course NEXT JS Template',
  description:
    'Navaneetha  Education Trust is a comprehensive and modern NEXT JS template designed for online education platforms, learning management systems (LMS), tutors, educational institutions, and online courses. It’s the perfect solution for creating an engaging and interactive online learning experience for students, educators, and institutions. Whether you’re offering online courses, running a tutoring platform, or managing an educational website, Navaneetha  Education Trust provides the tools to help you succeed. This template is tailored to meet the needs of educators, administrators, and students, providing a seamless and engaging user experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        {/* TopTicker */}
        <TopTicker />

        {/* HeaderOne */}
        <HeaderOne />
        {children}
        <FooterThree />

        <RouteScrollToTop />
      </body>
    </html>
  );
}
