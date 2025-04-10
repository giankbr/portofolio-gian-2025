'use client';

import { GridBackground } from '@/components/grid-background';
import SpotifyTracks from '@/components/spotify-tracks';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Download, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  // Refs for animation targets
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const spotifyRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo('.hero-heading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.hero-subheading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-buttons > *', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, '-=0.4');

    // About section animations
    gsap.fromTo(
      '.about-content',
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
      }
    );

    // Spotify section animation
    gsap.fromTo(
      '.spotify-section',
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.spotify-section',
          start: 'top 75%',
        },
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      }
    );

    // Project card animations
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 70%',
        },
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

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-20 md:py-32 min-h-[400px]" ref={heroRef}>
          <GridBackground />
          <div className="relative z-10">
            <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tight mb-6 hero-heading">
              Building digital <span className="text-purple-500">experiences</span> that make a difference
            </h1>
            <p className="text-xl md:text-2xl font-outfit text-zinc-600 dark:text-zinc-400 max-w-3xl mb-10 hero-subheading">Full-stack Web Developer at Morfotech</p>
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
              <Button className="font-outfit bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-6 text-lg flex items-center gap-2 group">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="font-outfit rounded-full px-6 py-6 text-lg border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
          {/* Add gradient effect */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-96 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full opacity-50 z-0"></div>
        </div>

        {/* About Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 about-section" ref={aboutRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="about-content">
              <h2 className="text-3xl font-bold mb-4">Gian Akbar</h2>
              <div className="flex items-center gap-4 mb-6">
                <Link href="https://github.com" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 about-content">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                I'm Gian, Web developer, tech enthusiast, cat lover, and a coffee lover. I'm passionate about web development. I am excited to bring my knowledge and experience to a dynamic and
                fast-paced work environment, where I can continue to grow and learn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="about-content">
                  <h3 className="text-zinc-500 dark:text-zinc-500 text-sm mb-2">EXPERTISE</h3>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Responsive Design</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div className="about-content">
                  <h3 className="text-zinc-500 dark:text-zinc-500 text-sm mb-2">TECHNOLOGIES</h3>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>React / Next.js</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 spotify-section" ref={spotifyRef}>
          <h2 className="text-3xl font-bold mb-10">My Music</h2>
          <SpotifyTracks />
        </div>

        {/* Projects Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 projects-section" ref={projectsRef}>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-2 group">
              <span>View All</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group project-card">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-700">
                  <span className="text-lg">Project Image</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-purple-500 transition-colors">Project Title</h3>
              <p className="text-zinc-600 dark:text-zinc-400">A short description of the project and technologies used.</p>
            </div>

            {/* Project Card 2 */}
            <div className="group project-card">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-700">
                  <span className="text-lg">Project Image</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-purple-500 transition-colors">Project Title</h3>
              <p className="text-zinc-600 dark:text-zinc-400">A short description of the project and technologies used.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10" ref={footerRef}>
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
