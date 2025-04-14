'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowUpRight, Calendar, ChevronRight, Clock, Linkedin, Link as LinkIcon, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Demo post content - in a real app, you'd fetch this based on the slug
const postContent = {
  title: 'Building a Modern Portfolio with Next.js and Tailwind CSS',
  date: 'April 10, 2025',
  readTime: '5 min read',
  category: 'Web Development',
  coverImage: '/blog/portfolio.jpg',
  author: {
    name: 'Gian Akbar',
    avatar: '/fotofoto.jpeg',
    title: 'Full-stack Developer',
  },
  content: `
  <p class="text-lg mb-6">Creating a professional portfolio website is essential for any developer or designer looking to showcase their work. In this article, we'll explore how to build a modern portfolio using Next.js 14 and Tailwind CSS with dark mode support.</p>
  
  <h2 class="text-2xl font-bold mt-10 mb-4">Why Next.js and Tailwind CSS?</h2>
  <p class="mb-6">Next.js is a powerful React framework that enables features like server-side rendering and static site generation, making your portfolio fast and SEO-friendly. Tailwind CSS, on the other hand, is a utility-first CSS framework that allows for rapid development with consistent styling.</p>
  
  <h2 class="text-2xl font-bold mt-10 mb-4">Setting up the Project</h2>
  <p class="mb-6">First, let's create a new Next.js project with Tailwind CSS:</p>
  
  <div class="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 my-6 overflow-x-auto">
    <code class="text-sm">npx create-next-app my-portfolio --typescript --tailwind --app</code>
  </div>
  
  <p class="mb-6">This command creates a new Next.js project with TypeScript, Tailwind CSS, and the App Router already configured.</p>
  
  <h2 class="text-2xl font-bold mt-10 mb-4">Adding Dark Mode Support</h2>
  <p class="mb-6">Tailwind CSS makes it easy to add dark mode support to your portfolio. First, update your tailwind.config.js file:</p>
  
  <div class="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 my-6 overflow-x-auto">
    <pre><code class="text-sm">module.exports = {
  darkMode: 'class',
  // ...rest of your config
}</code></pre>
  </div>
  
  <h2 class="text-2xl font-bold mt-10 mb-4">Creating Page Layouts</h2>
  <p class="mb-6">Now, let's create the basic structure for our portfolio with different pages for projects, about, and contact.</p>
  
  <div class="bg-gradient-to-r from-purple-100 to-zinc-100 dark:from-purple-900/20 dark:to-zinc-800 rounded-lg p-6 my-10 border border-purple-200 dark:border-purple-900/50">
    <h3 class="text-xl font-bold mb-3">Pro Tip</h3>
    <p>Use a consistent design language across all pages of your portfolio to create a cohesive user experience. This includes spacing, typography, and color palette.</p>
  </div>
  
  <h2 class="text-2xl font-bold mt-10 mb-4">Adding Animations</h2>
  <p class="mb-6">To make your portfolio more engaging, consider adding subtle animations. GSAP is an excellent library for creating smooth animations.</p>
  
  <div class="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 my-6 overflow-x-auto">
    <pre><code class="text-sm">useEffect(() => {
  gsap.fromTo(
    '.hero-content',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    }
  );
}, []);</code></pre>
  </div>
  
  <h2 class="text-2xl font-bold mt-10 mb-4">Showcasing Projects</h2>
  <p class="mb-6">A great way to display your projects is using a grid layout with cards. This allows visitors to quickly see your work and click through to learn more about each project.</p>
  
  <p class="mb-6">In the next part of this series, we'll explore how to create a dynamic projects page with filtering options and detailed case studies.</p>
  `,
  relatedPosts: [
    {
      id: 2,
      title: 'The Power of Server Components in Next.js',
      excerpt: 'Exploring how Server Components can dramatically improve performance in your Next.js applications.',
      coverImage: '/blog/server-components.jpg',
      slug: 'power-of-server-components',
    },
    {
      id: 3,
      title: 'Creating Smooth Animations with GSAP',
      excerpt: 'A deep dive into using GSAP for creating engaging and performant animations on your website.',
      coverImage: '/blog/gsap.jpg',
      slug: 'smooth-animations-gsap',
    },
  ],
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);

  // In a real application, you would fetch the post based on the slug
  console.log('Current slug:', slug);

  // Handle share functionality
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : '';

  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    if (typeof window === 'undefined') return;

    const title = postContent.title;
    const url = shareUrl;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
        break;
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the header
    gsap.fromTo(
      '.blog-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Animate content elements
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2');
      const paragraphs = contentRef.current.querySelectorAll('p');
      const codeBlocks = contentRef.current.querySelectorAll('.bg-zinc-100');

      gsap.fromTo(
        headings,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        codeBlocks,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/blog" className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to all posts</span>
        </Link>
      </div>

      {/* Blog header */}
      <section className="blog-header pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">{postContent.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{postContent.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image src={postContent.author.avatar} alt={postContent.author.name} width={40} height={40} className="rounded-full" />
              <div>
                <div className="font-medium">{postContent.author.name}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{postContent.author.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{postContent.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{postContent.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full mb-10 rounded-xl overflow-hidden">
            <Image src={postContent.coverImage} alt={postContent.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:flex lg:gap-10">
          {/* Share sidebar for desktop */}
          <div className="hidden lg:block sticky top-32 h-max">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Share</span>
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button onClick={() => handleShare('copy')} className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors" aria-label="Copy link">
                <LinkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Article content */}
          <article className="lg:flex-1">
            <div
              ref={contentRef}
              className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-p:text-zinc-600 dark:prose-p:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: postContent.content }}
            />

            {/* Share buttons for mobile */}
            <div className="lg:hidden mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Share:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button onClick={() => handleShare('copy')} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors" aria-label="Copy link">
                  <LinkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Author bio */}
        <div className="mt-16 bg-zinc-50 dark:bg-zinc-900/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Image src={postContent.author.avatar} alt={postContent.author.name} width={80} height={80} className="rounded-full" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">{postContent.author.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-center md:text-left">
                Full-stack developer with a passion for building beautiful, user-friendly web applications. When not coding, you can find me exploring new technologies or enjoying a cup of coffee.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/about" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-500 font-medium hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                  <span>More about the author</span>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <section className="mt-16 py-16 bg-zinc-50 dark:bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Read Next</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {postContent.relatedPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.coverImage} alt={post.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" width={600} height={300} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors">{post.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center text-purple-600 dark:text-purple-500 font-medium mt-auto">
                      <span>Read article</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-full transition-all hover:shadow-md"
            >
              <span>View all articles</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
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
