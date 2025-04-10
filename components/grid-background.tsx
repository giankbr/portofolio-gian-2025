'use client';

import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export function GridBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP animation effect
  useEffect(() => {
    if (!mounted || !gridRef.current) return;

    gsap.fromTo(
      gridRef.current,
      {
        opacity: 0,
        backgroundPosition: '0 10px',
      },
      {
        opacity: 1,
        backgroundPosition: '0 0',
        duration: 1.2,
        ease: 'power2.out',
      }
    );

    return () => {
      gsap.killTweensOf(gridRef.current);
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="absolute inset-0" />;
  }

  const isDark = resolvedTheme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines with wider spacing */}
      <div
        ref={gridRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px', // Increased spacing from 25px to 50px
          backgroundPosition: '0 0',
        }}
      />
    </div>
  );
}
