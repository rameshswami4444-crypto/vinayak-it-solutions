import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Vinayak IT Solutions',
  description: 'Futuristic digital engineering, cloud acceleration, and premium software delivery.',
  keywords: ['Vinayak IT Solutions', 'software company', 'web development', 'cloud', 'automation'],
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
