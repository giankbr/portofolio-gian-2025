'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Page animations
    gsap.fromTo(
      '.about-page-content',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );

    // Timeline animations
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
        },
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    // Footer animation
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 about-page-content">About Me</h1>

        <div className="about-page-content prose dark:prose-invert max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              {/* Profile image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-md">
                <Image src="/profile.jpg" alt="Gian Akbar" width={400} height={400} className="w-full h-full object-cover" priority />
              </div>

              {/* Contact information */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">EMAIL</h3>
                  <p className="text-zinc-800 dark:text-zinc-300">gian@example.com</p>
                </div>
                <div>
                  <h3 className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">LOCATION</h3>
                  <p className="text-zinc-800 dark:text-zinc-300">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Background</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                  I'm Gian, a Full-stack Web Developer with a passion for creating elegant, efficient, and user-friendly web applications. With a strong foundation in both frontend and backend
                  technologies, I bring ideas to life through code.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  As a tech enthusiast, I'm constantly learning and exploring new technologies to stay at the cutting edge of web development. When I'm not coding, you can find me enjoying a cup of
                  coffee or spending time with my cat.
                </p>
              </div>

              {/* Experience Timeline Section */}
              <div className="timeline-container">
                <h2 className="text-3xl font-bold mb-8">Experience Timeline</h2>

                <div className="relative border-l-2 border-purple-600 pl-8 space-y-10">
                  {/* Current Job */}
                  <div className="timeline-item relative">
                    <span className="absolute -left-14 p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </span>
                    <time className="text-sm text-purple-600 dark:text-purple-500 font-medium mb-1 block">Jul 2024 - Present</time>
                    <h3 className="text-xl font-medium">Full-Stack Web Developer</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-500 mb-2">Morfotech</p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      My main focus is on building web applications with Laravel, Express and React JS. I'm assigned to develop the company's client web applications.
                    </p>
                  </div>

                  {/* Previous Job */}
                  <div className="timeline-item relative">
                    <span className="absolute -left-14 p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </span>
                    <time className="text-sm text-purple-600 dark:text-purple-500 font-medium mb-1 block">Dec 2023 - Aug 2024</time>
                    <h3 className="text-xl font-medium">Full-Stack Web Developer</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-500 mb-2">Esha Parama Technology</p>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                      My main focus was on building web applications with Java and PHP. I was assigned to develop the company's internal web applications.
                    </p>
                  </div>

                  {/* Previous Job */}
                  <div className="timeline-item relative">
                    <span className="absolute -left-14 p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </span>
                    <time className="text-sm text-purple-600 dark:text-purple-500 font-medium mb-1 block">Aug 2022 - Dec 2023</time>
                    <h3 className="text-xl font-medium">Full-Stack Web Developer</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-500 mb-2">Notch</p>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                      My main focus was on building web applications with PHP, Bootstrap and jQuery. I also worked on the maintenance of the company's client websites.
                    </p>
                  </div>

                  {/* Education Milestone */}
                  <div className="timeline-item relative">
                    <span className="absolute -left-14 p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                      <GraduationCap className="w-5 h-5 text-purple-600" />
                    </span>
                    <time className="text-sm text-purple-600 dark:text-purple-500 font-medium mb-1 block">Oct 2022</time>
                    <h3 className="text-xl font-medium">Graduation from School</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">I finished my school and was ready to work full-time.</p>
                  </div>

                  {/* Internship */}
                  <div className="timeline-item relative">
                    <span className="absolute -left-14 p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </span>
                    <time className="text-sm text-purple-600 dark:text-purple-500 font-medium mb-1 block">Jan 2022 - Jun 2022</time>
                    <h3 className="text-xl font-medium">Software Engineer</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-500 mb-2">Telkom Indonesia - Internship</p>
                    <p className="text-zinc-600 dark:text-zinc-400">I handled the development of the company's internal web applications using Node.js.</p>
                  </div>

                  {/* Internship */}
                  <div className="timeline-item relative">
                    <span className="absolute -left-14 p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </span>
                    <time className="text-sm text-purple-600 dark:text-purple-500 font-medium mb-1 block">Feb 2021 - Aug 2021</time>
                    <h3 className="text-xl font-medium">Web Developer</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-500 mb-2">PERUM Bulog - Internship</p>
                    <p className="text-zinc-600 dark:text-zinc-400">At Perum Bulog, I was responsible for internal web applications using PHP, Bootstrap and jQuery.</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">FRONTEND</h3>
                    <ul className="space-y-1 text-zinc-800 dark:text-zinc-300">
                      <li>React / Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>HTML5 / CSS3</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">BACKEND</h3>
                    <ul className="space-y-1 text-zinc-800 dark:text-zinc-300">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 mb-10">
                <Link href="/projects" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 group">
                  <span>View my projects</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 mt-16" ref={footerRef}>
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
