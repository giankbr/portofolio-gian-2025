'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Coffee, ExternalLink, Laptop, Music, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function GearPage() {
  // Add animation with GSAP
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

          {/* Computer / Office Section */}
          <div className="gear-section mb-20">
            <div className="flex items-center gap-3 mb-6">
              <Laptop className="w-6 h-6 text-purple-600 dark:text-purple-500" />
              <h2 className="text-3xl font-bold">Computer / Office</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Laptop (Office)</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Asus VivoBook 15</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Laptop (Personal)</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Macbook Pro 2017</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Monitor</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Xiaomi A2471 27"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Mouse</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Logitech M331 Silent</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                  <h3 className="text-xl font-medium">My Wishlist</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300">Macbook Pro M4</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300">MacMini M4</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300">iPhone 13 Mini 256GB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300">Kawasaki W175 SE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coding Tools Section */}
          <div className="gear-section mb-20">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-purple-600 dark:text-purple-500" />
              <h2 className="text-3xl font-bold">Coding</h2>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Code Editor</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Visual Studio Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">IDE</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Apache Netbeans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Database GUI</span>
                  <span className="text-zinc-600 dark:text-zinc-400">TablePlus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Database Management</span>
                  <span className="text-zinc-600 dark:text-zinc-400">DBngin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-36">Terminal</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Windows Terminal / zsh</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Other Software Section */}
          <div className="gear-section mb-20">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-6 h-6 text-purple-600 dark:text-purple-500" />
              <h2 className="text-3xl font-bold">Other Software</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-24">Music</span>
                    <Link
                      href="https://open.spotify.com/user/21xxxupvfffmjuwajkr4wcu6a?si=eab92d9ee3d04c2f"
                      target="_blank"
                      className="text-purple-600 dark:text-purple-500 hover:underline flex items-center gap-1"
                    >
                      Spotify <ExternalLink className="inline w-3 h-3" />
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-24">Notes</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Notion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-24">Project Management</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Jira</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-24">API Testing</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Postman</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium min-w-24">Version Control</span>
                    <Link href="https://github.com/giankbr" target="_blank" className="text-purple-600 dark:text-purple-500 hover:underline flex items-center gap-1">
                      Github <ExternalLink className="inline w-3 h-3" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden">
                <div className="p-6 bg-purple-100 dark:bg-purple-900/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                    <h3 className="text-xl font-medium">My Spotify</h3>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Music plays a big role in my productivity. Here's what I've been listening to lately.</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-center">
                    <Link
                      href="https://open.spotify.com/user/21xxxupvfffmjuwajkr4wcu6a?si=eab92d9ee3d04c2f"
                      target="_blank"
                      className="text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 flex items-center gap-2"
                    >
                      <span>View My Spotify Profile</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
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
              <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                Gear
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
