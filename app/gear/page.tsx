'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Code, Coffee, ExternalLink, Laptop, Music, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SHEET_ID = '1zwlTGK4NzTvOO3odSSCMs8Gj9FPM7pn1dOK_S6oqwRc';
const SHEET_RANGE = 'Sheet1!A:D';

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

            <div className="space-y-12">
              <div className="gear-section">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                  <h2 className="text-3xl font-bold">Bucket List</h2>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 rounded-lg p-6 shadow-sm">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">Things I'm planning to get or accomplish. Check them off as I go!</p>
                  <ul className="space-y-4">
                    {/* <li>
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
                    </li> */}
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
                          Kerja remote sebagai full-stack developer
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
                          {/* <span className="text-sm text-zinc-500 dark:text-zinc-500">(disponsorin kantor)</span> */}
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
                    {/* <li>
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
                    </li> */}
                  </ul>
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
