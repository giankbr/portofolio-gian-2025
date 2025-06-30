'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Linkedin, Link as LinkIcon, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef, FC, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt?: string;
  content: string;
  category?: string;
  readTime?: string;
  author?: {
    name: string;
    avatar: string;
    title: string;
  };
  relatedPosts?: any[];
}

const markdownComponents = {
  h1: ({ node: _, ...props }: ComponentPropsWithoutRef<'h1'> & { node?: any }) => <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-6" {...props} />,
  h2: ({ node: _, ...props }: ComponentPropsWithoutRef<'h2'> & { node?: any }) => <h2 className="text-2xl font-bold mt-10 mb-4" {...props} />,
  h3: ({ node: _, ...props }: ComponentPropsWithoutRef<'h3'> & { node?: any }) => <h3 className="text-xl font-bold mt-8 mb-3" {...props} />,
  p: ({ node: _, ...props }: ComponentPropsWithoutRef<'p'> & { node?: any }) => <p className="text-lg mb-6" {...props} />,
  ul: ({ node: _, ...props }: ComponentPropsWithoutRef<'ul'> & { node?: any }) => <ul className="list-disc pl-6 mb-6" {...props} />,
  ol: ({ node: _, ...props }: ComponentPropsWithoutRef<'ol'> & { node?: any }) => <ol className="list-decimal pl-6 mb-6" {...props} />,
  li: ({ node: _, ...props }: ComponentPropsWithoutRef<'li'> & { node?: any }) => <li className="mb-2" {...props} />,
  code: ({ node: _, ...props }: ComponentPropsWithoutRef<'code'> & { node?: any }) => (
    <code className="bg-zinc-100 dark:bg-zinc-800 rounded px-1.5 py-0.5 text-sm text-purple-600 dark:text-purple-400" {...props} />
  ),
  pre: ({ node: _, ...props }: ComponentPropsWithoutRef<'pre'> & { node?: any }) => <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 my-6 overflow-x-auto" {...props} />,
  blockquote: ({ node: _, ...props }: ComponentPropsWithoutRef<'blockquote'> & { node?: any }) => (
    <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 dark:text-zinc-400 my-6" {...props} />
  ),
  a: ({ node: _, ...props }: ComponentPropsWithoutRef<'a'> & { node?: any }) => <a className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800" {...props} />,
  hr: ({ node: _, ...props }: ComponentPropsWithoutRef<'hr'> & { node?: any }) => <hr className="my-8 border-zinc-200 dark:border-zinc-700" {...props} />,
  img: ({ node: _, ...props }: ComponentPropsWithoutRef<'img'> & { node?: any }) => <img className="rounded-lg my-6" {...props} />,
  strong: ({ node: _, ...props }: ComponentPropsWithoutRef<'strong'> & { node?: any }) => <strong className="font-semibold" {...props} />,
};

const BlogDetailClient: FC<{ post: BlogPost }> = ({ post }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Share handler
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.slug}` : '';
  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    if (typeof window === 'undefined') return;
    const title = post.title;
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Author, date, title */}
        <div className="flex flex-row items-center gap-4 mb-8">
          <Image src={post.author?.avatar || '/fotofoto.jpeg'} alt={post.author?.name || 'Author'} width={56} height={56} className="rounded-full object-cover flex-shrink-0" />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex-1">
                <h2 className="font-bold text-lg text-zinc-800 dark:text-white">{post.author?.name || 'Gian Akbar'}</h2>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm">{post.author?.title || 'Full-stack Developer'}</div>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white leading-tight">{post.title}</h1>
        {/* Share buttons for mobile */}
        <div className="flex lg:hidden items-center gap-3 mb-6 justify-center">
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
        {post.coverImage && (
          <div className="w-full mb-8">
            <img src={post.coverImage} alt={post.title} className="w-full max-h-80 object-cover rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800" />
          </div>
        )}
        <div className="flex flex-row gap-0">
          {/* Share sidebar for desktop */}
          <div className="hidden lg:flex flex-col items-center gap-4 sticky top-32 h-max mr-8 pt-2">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Share</span>
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
          {/* Article content */}
          <article className="flex-1 w-full">
            <div ref={contentRef} className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
              <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
            </div>
          </article>
        </div>
        {/* Footer */}
        <footer className="bg-white dark:bg-zinc-900/20 border-t border-zinc-200 dark:border-zinc-800 mt-24">
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
                  <li>
                    <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                      Projects
                    </Link>
                  </li>
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
    </div>
  );
};

export default BlogDetailClient;
