'use client';

import { GridBackground } from '@/components/grid-background';
import SpotifyTracks from '@/components/spotify-tracks';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronRight, Download, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HomeClient({ posts }: { posts: any[] }) {
  // Refs for animation targets
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const spotifyRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

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

    // Animate the code block
    if (codeBlockRef.current) {
      gsap.fromTo(
        codeBlockRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
          rotateY: -10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power3.out',
        }
      );

      // Lines of code animation
      const codeLines = codeBlockRef.current.querySelectorAll('.code-line');
      gsap.fromTo(
        codeLines,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.8,
          ease: 'power2.out',
        }
      );
    }

    // Animate the floating elements
    if (floatingElementsRef.current.length) {
      // Initial animation
      gsap.fromTo(
        floatingElementsRef.current,
        {
          y: 40,
          opacity: 0,
          rotation: 0,
        },
        {
          y: 0,
          opacity: 1,
          rotation: (i) => (i % 2 === 0 ? 12 : -12),
          duration: 1.2,
          stagger: 0.2,
          delay: 1,
          ease: 'elastic.out(1, 0.3)',
        }
      );

      // Continuous floating animation
      floatingElementsRef.current.forEach((el, i) => {
        const direction = i % 2 === 0 ? 1 : -1;

        gsap.to(el, {
          y: direction * 10,
          rotation: direction * (i % 2 === 0 ? 14 : -14),
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(codeBlockRef.current);
      if (codeBlockRef.current) {
        gsap.killTweensOf(codeBlockRef.current.querySelectorAll('.code-line'));
      }
      floatingElementsRef.current.forEach((el) => gsap.killTweensOf(el));
    };
  }, []);

  // Add floating element ref
  const addFloatingRef = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  const getRandomImage = () => `https://source.unsplash.com/600x300/?technology,web,random,${Math.floor(Math.random() * 10000)}`;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Redesigned Hero Section */}
        <div className="relative pt-20 pb-32 md:pt-28 md:pb-40 min-h-[600px]" ref={heroRef}>
          <GridBackground />

          {/* Left content column */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-6">
              {/* Status indicator */}
              <div className="mb-8 hero-buttons">
                <div className="inline-flex items-center gap-1.5 bg-emerald-600/10 dark:bg-emerald-500/10 border border-emerald-600/20 dark:border-emerald-500/20 px-3 py-1.5 rounded-full">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Available for Projects</span>
                </div>
              </div>

              {/* Main heading with improved typography */}
              <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 hero-heading leading-tight">
                Building <span className="text-purple-500">digital</span> experiences that{' '}
                <span className="relative">
                  matter
                  <svg className="absolute inset-x-0 bottom-1 w-full h-3 text-purple-500/30 dark:text-purple-500/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>

              {/* Enhanced subheading */}
              <div className="flex items-center gap-3 mb-8 hero-subheading">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-outfit text-zinc-700 dark:text-zinc-300">Full-stack Web Developer</p>
                  <p className="text-zinc-600 dark:text-zinc-400">at Morfotech</p>
                </div>
              </div>

              {/* CTA buttons with improved layout */}
              <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
                <Button className="font-outfit bg-purple-600 hover:bg-purple-700 text-white rounded-full px-7 py-6 text-lg flex items-center gap-2 group shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="font-outfit rounded-full px-7 py-6 text-lg border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-black/50 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right illustration/image column */}
            <div className="hidden md:block md:col-span-5 lg:col-span-6 relative hero-image">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative elements */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full filter blur-xl"></div>
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl"></div>

                {/* Hero image or abstract shape */}
                <div
                  ref={codeBlockRef}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-zinc-100 to-white dark:from-purple-500/20 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden flex items-center justify-center p-6 border border-zinc-200 dark:border-zinc-800 shadow-xl"
                >
                  <div className="relative w-full h-full">
                    {/* Code snippets illustration or profile image */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
                    <div className="absolute inset-4 p-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-inner border border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center mb-3">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="text-purple-600 dark:text-purple-400 code-line">
                          const <span className="text-blue-600 dark:text-blue-400">developer</span> = {`{`}
                        </div>
                        <div className="pl-4 code-line">
                          <span className="text-green-600 dark:text-green-400">name:</span> <span className="text-amber-600 dark:text-amber-400">'Gian Akbar'</span>,
                        </div>
                        <div className="pl-4 code-line">
                          <span className="text-green-600 dark:text-green-400">skills:</span> [<span className="text-amber-600 dark:text-amber-400">'Laravel'</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">'PHP'</span>, <span className="text-amber-600 dark:text-amber-400">'MySQL'</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">'Go'</span>, <span className="text-amber-600 dark:text-amber-400">'Next.js'</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">'MongoDB'</span>, <span className="text-amber-600 dark:text-amber-400">'Docker'</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">'JavaScript'</span>, <span className="text-amber-600 dark:text-amber-400">'Node.js'</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">'Nest.js'</span>, <span className="text-amber-600 dark:text-amber-400">'TypeScript'</span>],
                        </div>
                        <div className="pl-4 code-line">
                          <span className="text-green-600 dark:text-green-400">exploring:</span> [<span className="text-amber-600 dark:text-amber-400">'AI/ML'</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">'DevOps'</span>, <span className="text-amber-600 dark:text-amber-400">'System Design'</span> ],
                        </div>

                        {/* <div className="pl-4 code-line">
                          <span className="text-green-600 dark:text-green-400">passion:</span> <span className="text-amber-600 dark:text-amber-400">'Creating amazing web experiences'</span>
                        </div> */}
                        <div className="code-line">{`}`};</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  ref={addFloatingRef}
                  className="absolute -right-4 top-1/4 w-12 h-12 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center rotate-12"
                >
                  <span className="text-2xl">✨</span>
                </div>
                <div
                  ref={addFloatingRef}
                  className="absolute -left-2 bottom-1/3 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center -rotate-12"
                >
                  <span className="text-xl">🚀</span>
                </div>
                <div
                  ref={addFloatingRef}
                  className="absolute right-1/4 bottom-0 w-14 h-14 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center rotate-6 overflow-hidden"
                >
                  <span className="text-3xl">💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced background effects */}
          <div className="absolute top-1/3 -translate-y-1/2 right-0 w-1/2 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 blur-3xl rounded-full opacity-60 z-0"></div>
          <div className="absolute top-2/3 left-0 w-1/3 h-64 bg-gradient-to-r from-amber-500/10 to-yellow-500/5 dark:from-amber-500/10 dark:to-yellow-500/5 blur-3xl rounded-full opacity-60 z-0"></div>
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
                I'm Gian, Web developer, tech enthusiast, and a coffee lover. I'm passionate about web development. I am excited to bring my knowledge and experience to a dynamic and fast-paced work
                environment, where I can continue to grow and learn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="about-content">
                  <h3 className="text-zinc-500 dark:text-zinc-500 text-sm mb-2">EXPERTISE</h3>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>Backend Development</li>
                    <li>Frontend Development</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div className="about-content">
                  <h3 className="text-zinc-500 dark:text-zinc-500 text-sm mb-2">TECHNOLOGIES</h3>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>Nest.js</li>
                    <li>Express.js</li>
                    <li>Next.js</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                    <li>Docker</li>
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

        {/* Blog Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 blog-section" ref={projectsRef}>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-2 group">
              <span>View All</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.length > 0 ? (
              posts.slice(0, 6).map((post: any) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group blog-card">
                  <article className="blog-card h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
                    <div className="relative h-52 overflow-hidden">
                      <img src={post.coverImage || getRandomImage()} alt={post.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-purple-600 dark:text-purple-500 font-medium">
                        <span>Read article</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-zinc-500 dark:text-zinc-400">
                  No blog posts found. Add markdown files to <code>public/content/blog</code> to create posts.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-zinc-900/20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">Gian Akbar</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Full-stack Web Developer</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">Building modern web experiences with a focus on performance, accessibility, and beautiful design.</p>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm">© {new Date().getFullYear()} Gian Akbar. All rights reserved.</p>
            </div>
            <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    About
                  </Link>
                </li>
                {/* <li>
                  <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    Projects
                  </Link>
                </li> */}
                <li>
                  <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/shorts" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    Gear
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/giankbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/gianakbar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/gianakbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:gian@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-zinc-500 dark:text-zinc-500 text-sm mb-4 sm:mb-0">
              <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-zinc-500 dark:text-zinc-500 text-sm flex items-center">
              <span>Crafted with</span>
              <svg className="w-4 h-4 mx-1 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>in Jakarta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
