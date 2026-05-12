import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const headingFont = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
});

const bodyFont = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Vinayak IT Solutions',
    template: '%s | Vinayak IT Solutions',
  },
  description:
    'Professional website development, marketing, and business support services for growing companies.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
