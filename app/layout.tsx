import Analytics from '@/components/analytics';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import type React from 'react';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'Gian Akbar | Full-stack Web Developer',
  description: 'Portfolio of Gian Akbar, a Full-stack Web Developer at Morfotech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={urbanist.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
