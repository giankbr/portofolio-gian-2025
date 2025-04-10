'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Page animations
    gsap.fromTo(
      '.about-page-content',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );

    // Footer animation
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 about-page-content">About Me</h1>

        <div className="about-page-content prose dark:prose-invert max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full flex items-center justify-center text-zinc-700">
                  <span className="text-lg">Profile Image</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-zinc-500 text-sm mb-1">EMAIL</h3>
                  <p className="text-zinc-300">gian@example.com</p>
                </div>
                <div>
                  <h3 className="text-zinc-500 text-sm mb-1">LOCATION</h3>
                  <p className="text-zinc-300">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Background</h2>
                <p className="text-lg text-zinc-400 mb-4">
                  I'm Gian, a Full-stack Web Developer at Morfotech with a passion for creating elegant, efficient, and user-friendly web applications. With a strong foundation in both frontend and
                  backend technologies, I bring ideas to life through code.
                </p>
                <p className="text-lg text-zinc-400">
                  As a tech enthusiast, I'm constantly learning and exploring new technologies to stay at the cutting edge of web development. When I'm not coding, you can find me enjoying a cup of
                  coffee or spending time with my cat.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-purple-600 pl-6">
                    <h3 className="text-xl font-medium">Full-stack Web Developer</h3>
                    <p className="text-purple-500 mb-2">Morfotech • 2022 - Present</p>
                    <p className="text-zinc-400">
                      Developing and maintaining web applications using React, Next.js, and Node.js. Collaborating with designers and product managers to create seamless user experiences.
                    </p>
                  </div>

                  <div className="border-l-2 border-zinc-800 pl-6">
                    <h3 className="text-xl font-medium">Frontend Developer</h3>
                    <p className="text-zinc-500 mb-2">Previous Company • 2020 - 2022</p>
                    <p className="text-zinc-400">Built responsive user interfaces using modern JavaScript frameworks. Implemented design systems and component libraries.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-zinc-500 text-sm mb-2">FRONTEND</h3>
                    <ul className="space-y-1 text-zinc-300">
                      <li>React / Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>HTML5 / CSS3</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-500 text-sm mb-2">BACKEND</h3>
                    <ul className="space-y-1 text-zinc-300">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 mb-10">
                <Link href="/projects" className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 group">
                  <span>View my projects</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 mt-4" ref={footerRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 footer-content">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Gian Akbar. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center md:text-right text-zinc-500">Crafted with ❤️</div>
        </div>
      </footer>
    </div>
  );
}
