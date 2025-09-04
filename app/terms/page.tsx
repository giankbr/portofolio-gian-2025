'use client';

import Navbar from '@/components/navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function TermsOfServicePage() {
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
      '.terms-section',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: '.terms-content',
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
          <h1 className="hero-content text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">Terms of Service</h1>
          <p className="hero-content text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Please read these Terms of Service carefully before using my portfolio website. By accessing or using this website, you agree to be bound by these terms.
          </p>
        </section>

        {/* Terms Content */}
        <div className="terms-content space-y-12 max-w-4xl">
          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">1. Acceptance of Terms</h2>
            <div className="prose dark:prose-invert">
              <p>
                By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not
                use this website.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">2. Intellectual Property Rights</h2>
            <div className="prose dark:prose-invert">
              <p>
                All content on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property
                of Gian Akbar or his content suppliers and is protected by international copyright laws.
              </p>
              <p>
                The compilation of all content on this site is the exclusive property of Gian Akbar and is protected by international copyright laws. All software used on this site is the property of
                Gian Akbar or his software suppliers and is protected by international copyright laws.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">3. Use License</h2>
            <div className="prose dark:prose-invert">
              <p>Permission is granted to temporarily view the materials on Gian Akbar&apos;s website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Gian Akbar&apos;s website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Gian Akbar at any time. Upon terminating your viewing of these materials or
                upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">4. Disclaimer</h2>
            <div className="prose dark:prose-invert">
              <p>The materials on Gian Akbar&apos;s website are provided &quot;as is&quot;. Gian Akbar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p>
                Further, Gian Akbar does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on his website or otherwise relating
                to such materials or on any sites linked to this site.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">5. Limitations</h2>
            <div className="prose dark:prose-invert">
              <p>
                In no event shall Gian Akbar or his suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on Gian Akbar&apos;s website, even if Gian Akbar or a Gian Akbar authorized representative has been notified orally or in writing of the possibility
                of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not
                apply to you.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">6. Links to Third-Party Websites</h2>
            <div className="prose dark:prose-invert">
              <p>
                This website may contain links to external websites that are not operated by Gian Akbar. Gian Akbar has no control over, and assumes no responsibility for, the content, privacy
                policies, or practices of any third-party websites or services. You further acknowledge and agree that Gian Akbar shall not be responsible or liable, directly or indirectly, for any
                damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or
                services.
              </p>
              <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">7. Revisions and Errata</h2>
            <div className="prose dark:prose-invert">
              <p>
                The materials appearing on Gian Akbar&apos;s website may include technical, typographical, or photographic errors. Gian Akbar does not warrant that any of the materials on his website are
                accurate, complete, or current. Gian Akbar may make changes to the materials contained on his website at any time without notice. Gian Akbar does not, however, make any commitment to
                update the materials.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">8. Governing Law</h2>
            <div className="prose dark:prose-invert">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Any disputes relating to these
                Terms shall be subject to the exclusive jurisdiction of the courts of Indonesia.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">9. Modifications to Terms of Service</h2>
            <div className="prose dark:prose-invert">
              <p>
                Gian Akbar may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service at the time
                of your visit.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">10. Contact Information</h2>
            <div className="prose dark:prose-invert">
              <p>
                If you have any questions or concerns about these Terms of Service, please contact me through the
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
