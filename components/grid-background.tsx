'use client';

import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export function GridBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP animation effect
  useEffect(() => {
    if (!mounted || !gridRef.current) return;

    // Grid lines animation
    gsap.fromTo(
      gridRef.current,
      {
        opacity: 0,
        backgroundPosition: '0 10px',
      },
      {
        opacity: 0.7,
        backgroundPosition: '0 0',
        duration: 1.2,
        ease: 'power2.out',
      }
    );

    // Animate grid dots if they exist
    if (dotsRef.current) {
      const dots = dotsRef.current.querySelectorAll('.grid-dot');
      gsap.fromTo(
        dots,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: {
            amount: 0.8,
            grid: [20, 20],
            from: 'center',
          },
          ease: 'power3.out',
        }
      );
    }

    // Create a subtle breathing animation for the grid
    gsap.to(gridRef.current, {
      opacity: 0.5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      gsap.killTweensOf(gridRef.current);
      if (dotsRef.current) {
        gsap.killTweensOf(dotsRef.current.querySelectorAll('.grid-dot'));
      }
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="absolute inset-0" />;
  }

  const isDark = resolvedTheme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
  const dotColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)';

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

      {/* Interactive dots at intersections */}
      <div ref={dotsRef} className="absolute inset-0 w-full h-full">
        {/* The dots will be generated via JS in a separate effect */}
        {Array.from({ length: 12 }).map((_, i) =>
          Array.from({ length: 12 }).map((_, j) => (
            <div
              key={`${i}-${j}`}
              className="grid-dot absolute rounded-full"
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: dotColor,
                left: `${i * 50 + 50}px`,
                top: `${j * 50 + 50}px`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))
        )}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/30 dark:to-black/30 opacity-90" />
    </div>
  );
}
