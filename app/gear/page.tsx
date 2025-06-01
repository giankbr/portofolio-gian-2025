'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Coffee, ExternalLink, Laptop, Music, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function GearPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    macbook: true,
    macmini: false,
    iphone: false,
    kawasaki: false,
    camera: false,
    travel: false,
    utang: false,
    bhsjepang: false,
    kerjaluarnegeri: false,
  });

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
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
                        <Link
                          href="https://open.spotify.com/user/21xxxupvfffmjuwajkr4wcu6a?si=eab92d9ee3d04c2f"
                          target="_blank"
                          className="text-purple-600 dark:text-purple-500 hover:underline flex items-center gap-1"
                        >
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

            <div className="space-y-12">
              <div className="gear-section">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                  <h2 className="text-3xl font-bold">Bucket List</h2>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 rounded-lg p-6 shadow-sm">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">Things I'm planning to get or accomplish. Check them off as I go!</p>
                  {/* <ul className="space-y-4">
                    <li>
                      <button onClick={() => toggleItem('utang')} className="w-full flex items-center gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                            checkedItems.utang ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.utang && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.utang ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>Lunasin utang</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => toggleItem('kerjaluarnegeri')} className="w-full flex items-center gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                            checkedItems.kerjaluarnegeri ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.kerjaluarnegeri && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.kerjaluarnegeri ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                          Kerja di luar negeri
                        </span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => toggleItem('macbook')} className="w-full flex items-start gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
                            checkedItems.macbook ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.macbook && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.macbook ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                          Macbook Pro M4 <br />
                          <span className="text-sm text-zinc-500 dark:text-zinc-500">(disponsorin kantor)</span>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => toggleItem('iphone')} className="w-full flex items-center gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                            checkedItems.iphone ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.iphone && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.iphone ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>iPhone 16e</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => toggleItem('kawasaki')} className="w-full flex items-center gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                            checkedItems.kawasaki ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.kawasaki && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.kawasaki ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                          Kawasaki W175 SE
                        </span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => toggleItem('camera')} className="w-full flex items-center gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                            checkedItems.camera ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.camera && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.camera ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                          Ricoh GR III or Fujifilm XT-3
                        </span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => toggleItem('travel')} className="w-full flex items-center gap-3 group">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                            checkedItems.travel ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700 group-hover:border-purple-500'
                          }`}
                        >
                          {checkedItems.travel && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-lg transition-colors ${checkedItems.travel ? 'line-through text-zinc-500 dark:text-zinc-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                          Travel to another country
                        </span>
                      </button>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="gear-section">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                  <h2 className="text-3xl font-bold">Music</h2>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6 bg-purple-100 dark:bg-purple-900/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                      <h3 className="text-xl font-medium">My Spotify</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">Music plays a big role in my productivity. Here's what I've been listening to lately.</p>
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
