'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Coffee, ExternalLink, Laptop } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const SHEET_ID = '1zwlTGK4NzTvOO3odSSCMs8Gj9FPM7pn1dOK_S6oqwRc';
const SHEET_RANGE = 'Sheet1!A:D';

export default function GearPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.gear-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gear-container',
          start: 'top 60%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gear-container">
        <div className="py-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">My Gear</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mb-16">Here's what tech I'm currently using for coding. Most have been accumulated over the past few years.</p>

          <div className="space-y-12">
            <div className="gear-section">
              <div className="flex items-center gap-3 mb-6">
                <Laptop className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                <h2 className="text-3xl font-bold">Computer / Office</h2>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Laptop (Office)</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Macbook Pro M4</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Laptop (Personal)</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Macbook Pro 2017</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Monitor</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Xiaomi A2471 27"</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Mouse</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Logitech M331 Silent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Keyboard</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Royal Kludge RK 75</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Desk</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Beli ditok0pedia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gear-section">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                <h2 className="text-3xl font-bold">Coding</h2>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Code Editor</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Visual Studio Code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">IDE</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Apache Netbeans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Terminal</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Windows Terminal / zsh</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Database GUI</span>
                      <span className="text-zinc-600 dark:text-zinc-400">TablePlus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">API Testing</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Postman</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Git Client</span>
                      <span className="text-zinc-600 dark:text-zinc-400">GitHub Desktop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gear-section">
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                <h2 className="text-3xl font-bold">Other Software</h2>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Music</span>
                      <Link href="https://open.spotify.com/user/21xxxupvfffmjuwajkr4wcu6a" target="_blank" className="text-purple-600 dark:text-purple-500 hover:underline flex items-center gap-1">
                        Spotify <ExternalLink className="inline w-3 h-3" />
                      </Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Notes</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Notion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Project Management</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Jira</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Design</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Figma</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Calendar</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Google Calendar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-28">Version Control</span>
                      <Link href="https://github.com/giankbr" target="_blank" className="text-purple-600 dark:text-purple-500 hover:underline flex items-center gap-1">
                        Github <ExternalLink className="inline w-3 h-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
    </div>
  );
}
