import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';

const sfPro = localFont({
  src: [
    {
      path: '../fonts/SFProDisplay-Light.woff2',
      weight: '300',
    },
    {
      path: '../fonts/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/SFProDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
    {
      path: '../fonts/SFProDisplay-Bold.woff2',
      weight: '700',
    },
    {
      path: '../fonts/SFProDisplay-Heavy.woff2',
      weight: '800',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Haardik H',
  description:
    "Hey, I'm Haardik 👋! A 24 year old software engineer currently living in Canada, on a pursuit for learning. Currently helping run LearnWeb3, a free platform to help upskill developer students.",
  icons: '/haardik.jpeg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sfPro.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
            <Navbar />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
