'use client';

import Navbar from '@/components/navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function PrivacyPolicyPage() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
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

    // Content section animation
    gsap.fromTo(
      '.policy-section',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: '.policy-content',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    // Last updated animation
    gsap.fromTo(
      '.last-updated',
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.last-updated',
          start: 'top 90%',
        },
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-20">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="hero-content text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">Privacy Policy</h1>
          <p className="hero-content text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            This Privacy Policy outlines how I collect, use, and protect your personal information when you visit my portfolio website.
          </p>
        </section>

        {/* Policy Content */}
        <div className="policy-content space-y-12 max-w-4xl">
          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Information Collection</h2>
            <div className="prose dark:prose-invert">
              <p>When you visit my portfolio website, I may collect certain information automatically, including:</p>
              <ul>
                <li>Your IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages you visit</li>
                <li>Time and date of your visit</li>
              </ul>
              <p>If you choose to contact me through the contact form, I collect the information you provide, such as:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Use of Information</h2>
            <div className="prose dark:prose-invert">
              <p>I use the collected information for the following purposes:</p>
              <ul>
                <li>To improve and optimize my website</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To respond to your inquiries</li>
                <li>To provide you with information about my services</li>
                <li>To prevent fraudulent activities</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Cookies and Tracking Technologies</h2>
            <div className="prose dark:prose-invert">
              <p>
                This website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help analyze website traffic and
                remember your preferences.
              </p>
              <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of this website.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Third-Party Services</h2>
            <div className="prose dark:prose-invert">
              <p>This website uses third-party services that may collect information about you:</p>
              <ul>
                <li>Google Analytics - for website traffic analysis</li>
                <li>Giscus - for comments functionality</li>
                <li>GitHub - for hosting code repositories</li>
                <li>Spotify API - for displaying music preferences</li>
              </ul>
              <p>Each of these services has its own privacy policy, and I encourage you to review them for more information.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Data Security</h2>
            <div className="prose dark:prose-invert">
              <p>
                I implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                the Internet or electronic storage is 100% secure, and I cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Your Rights</h2>
            <div className="prose dark:prose-invert">
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Request data portability</li>
              </ul>
              <p>To exercise these rights, please contact me through the contact form on this website.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Changes to This Privacy Policy</h2>
            <div className="prose dark:prose-invert">
              <p>
                I may update this Privacy Policy from time to time to reflect changes in legal requirements or my practices. I will notify you of any significant changes by posting the new Privacy
                Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Contact Information</h2>
            <div className="prose dark:prose-invert">
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact me through the
                <Link href="/contact" className="mx-1 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
                  contact page <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                on this website.
              </p>
            </div>
          </section>

          <p className="last-updated text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-800">Last Updated: September 4, 2025</p>
        </div>
      </main>

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
                    href="https://www.linkedin.com/in/giannkbr/"
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
    </>
  );
}
