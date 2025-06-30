'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Mock shorts data
const shortsData = [
  {
    id: 1,
    title: 'How to Create a Custom Hook in React',
    summary: 'A quick guide to building reusable custom hooks in React for managing form state.',
    coverImage: '/shorts/react-hook.jpg',
    date: 'April 12, 2025',
    readTime: '2 min',
    category: 'React',
    slug: 'custom-hook-react',
  },
  {
    id: 2,
    title: '5 CSS Tricks You Should Know',
    summary: 'Quick CSS techniques that will improve your styling workflow immediately.',
    coverImage: '/shorts/css-tricks.jpg',
    date: 'April 10, 2025',
    readTime: '3 min',
    category: 'CSS',
    slug: 'css-tricks',
  },
  {
    id: 3,
    title: 'Setting Up ESLint with Next.js',
    summary: 'The fastest way to configure ESLint in your Next.js project for better code quality.',
    coverImage: '/shorts/eslint.jpg',
    date: 'April 8, 2025',
    readTime: '2 min',
    category: 'Tools',
    slug: 'eslint-nextjs',
  },
  {
    id: 4,
    title: 'Understanding TypeScript Generics',
    summary: 'A beginner-friendly explanation of TypeScript generics with practical examples.',
    coverImage: '/shorts/typescript.jpg',
    date: 'April 5, 2025',
    readTime: '4 min',
    category: 'TypeScript',
    slug: 'typescript-generics',
  },
  {
    id: 5,
    title: 'Optimizing Images in Next.js',
    summary: 'Learn how to use Next.js Image component for better performance and user experience.',
    coverImage: '/shorts/nextjs-image.jpg',
    date: 'April 3, 2025',
    readTime: '3 min',
    category: 'Next.js',
    slug: 'nextjs-image-optimization',
  },
  {
    id: 6,
    title: 'Building a Dark Mode Toggle',
    summary: 'Step-by-step guide to implementing a dark mode toggle with Tailwind CSS and React.',
    coverImage: '/shorts/dark-mode.jpg',
    date: 'April 1, 2025',
    readTime: '3 min',
    category: 'UI/UX',
    slug: 'dark-mode-toggle',
  },
  {
    id: 7,
    title: 'Responsive Design Best Practices',
    summary: 'Quick tips for creating truly responsive websites that work on all devices.',
    coverImage: '/shorts/responsive.jpg',
    date: 'March 29, 2025',
    readTime: '2 min',
    category: 'CSS',
    slug: 'responsive-design-tips',
  },
  {
    id: 8,
    title: 'Async/Await Error Handling',
    summary: 'The cleanest ways to handle errors in async/await functions in JavaScript.',
    coverImage: '/shorts/async-await.jpg',
    date: 'March 27, 2025',
    readTime: '3 min',
    category: 'JavaScript',
    slug: 'async-await-errors',
  },
];

// Categories
const categories = ['All', 'React', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'UI/UX', 'Tools'];

export default function ShortsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const [featuredShort, setFeaturedShort] = useState(shortsData[0]);
  const shortsPerPage = 6;

  const filteredShorts = shortsData.filter((short) => activeCategory === 'All' || short.category === activeCategory);

  const totalPages = Math.ceil(filteredShorts.length / shortsPerPage);
  const currentShorts = filteredShorts.slice((currentPage - 1) * shortsPerPage, currentPage * shortsPerPage);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const openFeatured = (short: (typeof shortsData)[0]) => {
    setFeaturedShort(short);
    setIsFeaturedOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFeatured = () => {
    setIsFeaturedOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for shorts cards
    gsap.fromTo(
      '.short-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.shorts-grid',
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentShorts]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20">
      {/* Header */}
      <section className="py-12 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">Shorts</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Quick tips, snippets, and insights for busy developers.</p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Filter className="h-5 w-5 text-purple-600 dark:text-purple-500" />
              <span>Browse by category</span>
            </h2>

            {/* Slider controls */}
            <div className="flex gap-2">
              <button onClick={scrollLeft} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors" aria-label="Scroll left">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={scrollRight} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors" aria-label="Scroll right">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Horizontal scrollable categories */}
          <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-2" ref={sliderRef} style={{ scrollBehavior: 'smooth' }}>
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
      </section>

      {/* Shorts grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shorts-grid">
            {currentShorts.map((short) => (
              <div key={short.id} className="short-card cursor-pointer group" onClick={() => openFeatured(short)}>
                <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={short.coverImage} alt={short.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" width={600} height={300} />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">{short.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{short.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors">{short.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">{short.summary}</p>
                    <div className="flex items-center text-purple-600 dark:text-purple-500 font-medium mt-auto">
                      <span>Read short</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'
                      : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors'
                  }`}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentPage === index + 1
                        ? 'bg-purple-600 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'
                      : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors'
                  }`}
                  aria-label="Next page"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured short modal */}
      {isFeaturedOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-xl font-bold">{featuredShort.title}</h3>
              <button onClick={closeFeatured} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative h-64 sm:h-80">
              <Image src={featuredShort.coverImage} alt={featuredShort.title} className="object-cover" fill />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                <span className="inline-block bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">{featuredShort.category}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{featuredShort.readTime}</span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mb-6">{featuredShort.summary}</p>

              {/* Fictional content for the short */}
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>Here's a quick guide to solving this common development challenge. Follow these steps to implement the solution in your own projects.</p>

                <h4 className="text-xl font-bold mt-6 mb-4">Step 1: Understanding the Concept</h4>
                <p>First, let's understand what we're trying to achieve. The core concept involves...</p>

                <h4 className="text-xl font-bold mt-6 mb-4">Step 2: Implementation</h4>
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 my-6 overflow-x-auto">
                  <pre>
                    <code className="text-sm">
                      {`function exampleCode() {
  // This is a sample implementation
  const result = doSomething();
  return processResult(result);
}`}
                    </code>
                  </pre>
                </div>

                <h4 className="text-xl font-bold mt-6 mb-4">Step 3: Testing</h4>
                <p>After implementation, make sure to test your solution thoroughly with these test cases...</p>

                <div className="bg-gradient-to-r from-purple-100 to-zinc-100 dark:from-purple-900/20 dark:to-zinc-800 rounded-lg p-6 my-6 border border-purple-200 dark:border-purple-900/50">
                  <h5 className="text-lg font-bold mb-2">Pro Tip</h5>
                  <p className="m-0">Always consider edge cases when implementing this solution. It will save you debugging time later.</p>
                </div>

                <h4 className="text-xl font-bold mt-6 mb-4">Conclusion</h4>
                <p>With these simple steps, you've now learned how to implement this solution effectively in your projects.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <Link
                  href={`/shorts/${featuredShort.slug}`}
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all hover:shadow-lg"
                >
                  <span>View full article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white dark:bg-black mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 footer-content">
            <div>
              <div className="mb-6">
                <p className="text-2xl font-bold text-zinc-800 dark:text-white">Gian Akbar</p>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Full-stack Web Developer</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Gian Akbar. All rights reserved.</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Projects
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Gear
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/giankbr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/gianakbar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/gianakbr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="mailto:gian@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12 text-center">
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">Crafted with ❤️</p>
          </div>
        </div>
      </footer>

      {/* Additional custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
