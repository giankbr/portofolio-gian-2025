'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ChevronRight, Clock, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Mock blog data - Replace with actual data fetching
const blogPosts = [
  {
    id: 1,
    title: 'Building a Modern Portfolio with Next.js and Tailwind CSS',
    excerpt: 'Learn how to create a professional portfolio website using Next.js 14 and Tailwind CSS with dark mode support.',
    coverImage: '/blog/portfolio.jpg',
    date: 'April 10, 2025',
    readTime: '5 min read',
    category: 'Web Development',
    slug: 'building-portfolio-nextjs-tailwind',
  },
  {
    id: 2,
    title: 'The Power of Server Components in Next.js',
    excerpt: 'Exploring how Server Components can dramatically improve performance in your Next.js applications.',
    coverImage: '/blog/server-components.jpg',
    date: 'April 5, 2025',
    readTime: '7 min read',
    category: 'React',
    slug: 'power-of-server-components',
  },
  {
    id: 3,
    title: 'Creating Smooth Animations with GSAP',
    excerpt: 'A deep dive into using GSAP for creating engaging and performant animations on your website.',
    coverImage: '/blog/gsap.jpg',
    date: 'March 28, 2025',
    readTime: '6 min read',
    category: 'Animation',
    slug: 'smooth-animations-gsap',
  },
  {
    id: 4,
    title: 'Responsive Design Best Practices in 2025',
    excerpt: 'The latest techniques and approaches for building truly responsive websites that work across all devices.',
    coverImage: '/blog/responsive.jpg',
    date: 'March 20, 2025',
    readTime: '8 min read',
    category: 'CSS',
    slug: 'responsive-design-best-practices',
  },
  {
    id: 5,
    title: 'Getting Started with TypeScript in React Projects',
    excerpt: 'A beginner-friendly guide to adding TypeScript to your React applications for better type safety.',
    coverImage: '/blog/typescript.jpg',
    date: 'March 15, 2025',
    readTime: '10 min read',
    category: 'TypeScript',
    slug: 'typescript-react-guide',
  },
  {
    id: 6,
    title: 'Building Custom Hooks in React',
    excerpt: 'Learn how to create reusable custom hooks to share logic across your React components.',
    coverImage: '/blog/react-hooks.jpg',
    date: 'March 8, 2025',
    readTime: '6 min read',
    category: 'React',
    slug: 'building-custom-hooks',
  },
];

// Categories for filtering
const categories = ['All', 'Web Development', 'React', 'Animation', 'CSS', 'TypeScript'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by category
    const categoryMatch = activeCategory === 'All' || post.category === activeCategory;

    // Filter by search query
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Blog post cards animation
    gsap.fromTo(
      '.blog-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredPosts]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20">
      {/* Header */}
      <section className="py-12 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">Blog</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Thoughts, tutorials, and insights about web development, design, and technology.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center mb-8">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto gap-2 pb-2 w-full md:w-auto max-w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category ? 'bg-purple-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                  <article className="blog-card h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={post.coverImage} alt={post.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" width={600} height={300} />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
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
                <p className="text-xl text-zinc-500 dark:text-zinc-400">No blog posts found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Reduced bottom margin */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to the Newsletter</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Get the latest articles and updates delivered directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">Subscribe</button>
          </div>
        </div>
      </section>

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

            {/* Spacer for medium screens */}
            <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/shorts" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Gear
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
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
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
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
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
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
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:gian@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with divider and crafted message */}
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
