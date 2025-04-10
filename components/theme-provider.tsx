'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="gian-portfolio-theme" // Add this to ensure consistent storage key
      disableTransitionOnChange={false} // Smooth transitions
    >
      {children}
    </NextThemesProvider>
  );
}
