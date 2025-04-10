'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gear', href: '/gear' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerHeight = isScrolled ? '73px' : '89px';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 border-b border-zinc-200 dark:border-zinc-800' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-zinc-800 dark:text-white font-bold text-xl">
            Gian Akbar <span className="text-purple-500">🐱</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm transition-colors',
                  pathname === link.href ? 'text-zinc-900 dark:text-white font-medium' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-zinc-800 dark:text-white p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden fixed inset-0 transition-all duration-400 ease-in-out',
          isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md' : 'bg-white dark:bg-black',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{
          top: headerHeight,
          height: `calc(100vh - ${headerHeight})`,
        }}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <nav className="flex flex-col p-6 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-xl font-medium py-4 px-4 border-b border-zinc-100 dark:border-zinc-800 transition-colors',
                  pathname === link.href ? 'text-purple-600 dark:text-purple-400 border-purple-500' : 'text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col items-center gap-4">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Let's connect</p>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/giankbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/gianakbar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:gian@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-8">© {new Date().getFullYear()} Gian Akbar</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
