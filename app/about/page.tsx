'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Briefcase, Code, Database, ExternalLink, GitBranch, GitCommit, Globe, GraduationCap, Laptop, Palette, Server, User, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const footerRef = useRef(null);

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

    // Skills badges animation
    gsap.fromTo(
      '.skill-badge',
      { scale: 0.8, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
        },
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.4,
        ease: 'back.out(1.7)',
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

    // GitHub stats animation
    gsap.fromTo(
      '.github-item',
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '#github-activity',
          start: 'top 70%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power3.out',
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
      {/* Hero Section */}
      <section className="py-12 lg:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column - Image with decorative elements */}
            <div className="lg:col-span-5 relative hero-content">
              <div className="relative z-10">
                <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden group">
                  {/* Main image with shadow instead of colored border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-2xl shadow-lg"></div>
                  <div className="absolute inset-1 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-inner">
                    <Image src="/profile.jpg" alt="Gian Akbar" width={500} height={500} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" priority />
                  </div>
                </div>

                {/* Decorative shadow elements */}
                <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-500/10 dark:bg-zinc-400/5 rounded-full blur-2xl"></div>
                <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 bg-zinc-500/10 dark:bg-zinc-400/5 rounded-full blur-xl"></div>

                {/* Additional drop shadow for the entire image container */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-30 -z-10"></div>
              </div>

              {/* Contact card - Fixed positioning */}
              <div className="mt-8 bg-zinc-50 dark:bg-zinc-900/80 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-600 dark:text-purple-500" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">EMAIL</h4>
                    <a href="mailto:vakbarrr@gmail.com" className="text-zinc-800 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-500 transition-colors">
                      vakbarrr@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">LOCATION</h4>
                    <p className="text-zinc-800 dark:text-zinc-300">Jakarta, Indonesia</p>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href="https://github.com/giankbr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/giannkbr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/gianakbr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Text content */}
            <div className="lg:col-span-7 hero-content">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">About Me</h1>
              <div className="space-y-6">
                <p className="text-xl text-zinc-700 dark:text-zinc-300">
                  I'm Gian, a <span className="font-semibold text-purple-600 dark:text-purple-500">Full-stack Web Developer</span> with a passion for creating elegant, efficient, and user-friendly web
                  applications. With a strong foundation in both frontend and backend technologies, I bring ideas to life through code.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  As a tech enthusiast, I'm constantly learning and exploring new technologies to stay at the cutting edge of web development. When I'm not coding, you can find me enjoying a cup of
                  coffee.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href="/projects" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all hover:shadow-lg group">
                    <span>View my projects</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-full transition-all hover:shadow-lg"
                  >
                    <span>Get in touch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Visual design with icons */}
      <section className="py-16 bg-zinc-50/50 dark:bg-zinc-900/20 skills-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Skillset</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">I've worked with a wide range of technologies across the full stack, focusing on modern web development.</p>
          </div>

          {/* Skills grid with icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Frontend */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-4">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Frontend Dev</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>React / Next.js</p>
                  <p>TypeScript</p>
                  <p>Tailwind CSS</p>
                  <p>HTML5 / CSS3</p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4">
                  <Server className="w-8 h-8 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Backend Dev</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>Node.js</p>
                  <p>Express</p>
                  <p>Laravel</p>
                  <p>PHP</p>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4">
                  <Database className="w-8 h-8 text-green-600 dark:text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Databases</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>MongoDB</p>
                  <p>PostgreSQL</p>
                  <p>MySQL</p>
                  <p>Redis</p>
                </div>
              </div>
            </div>

            {/* Design */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-lg mb-4">
                  <Palette className="w-8 h-8 text-pink-600 dark:text-pink-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Design Tools</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>Figma</p>
                  <p>Adobe XD</p>
                  <p>Photoshop</p>
                  <p>Illustrator</p>
                </div>
              </div>
            </div>

            {/* Dev Tools */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-4">
                  <Laptop className="w-8 h-8 text-orange-600 dark:text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Dev Tools</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>Git/GitHub</p>
                  <p>VS Code</p>
                  <p>Postman</p>
                  <p>Docker</p>
                </div>
              </div>
            </div>

            {/* Web Services */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg mb-4">
                  <Globe className="w-8 h-8 text-cyan-600 dark:text-cyan-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Web Services</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>AWS</p>
                  <p>Firebase</p>
                  <p>Vercel</p>
                  <p>Netlify</p>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg mb-4">
                  <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Performance</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>Lighthouse</p>
                  <p>WebVitals</p>
                  <p>SEO</p>
                  <p>Accessibility</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="skill-badge bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg mb-4">
                  <User className="w-8 h-8 text-indigo-600 dark:text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Soft Skills</h3>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>Communication</p>
                  <p>Problem Solving</p>
                  <p>Collaboration</p>
                  <p>Time Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - Modern Design */}
      <section className="py-16 timeline-container">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experience Timeline</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">My professional journey from education to where I am today.</p>
          </div>

          <div className="relative border-l-2 border-purple-600 dark:border-purple-500 ml-4 md:ml-6 pl-8 md:pl-12 space-y-10">
            {/* Current Job */}
            <div className="timeline-item relative">
              <div className="absolute -left-[26px] md:-left-[30px] p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Full-Stack Web Developer</h3>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Current</span>
                    <time className="ml-3 text-sm text-purple-600 dark:text-purple-500 font-medium">Jul 2024 - Present</time>
                  </div>
                </div>

                <p className="text-lg text-purple-600 dark:text-purple-500 mb-3">Morfotech</p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  My main focus is on building web applications with Laravel, Express and React JS. I'm assigned to develop the company's client web applications.
                </p>
              </div>
            </div>

            {/* Previous Job */}
            <div className="timeline-item relative">
              <div className="absolute -left-[26px] md:-left-[30px] p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Full-Stack Web Developer</h3>
                  <time className="mt-2 md:mt-0 text-sm text-purple-600 dark:text-purple-500 font-medium">Dec 2023 - Aug 2024</time>
                </div>

                <p className="text-lg text-purple-600 dark:text-purple-500 mb-3">Esha Parama Technology</p>
                <p className="text-zinc-600 dark:text-zinc-400">My main focus was on building web applications with Java and PHP. I was assigned to develop the company's internal web applications.</p>
              </div>
            </div>

            {/* Previous Job */}
            <div className="timeline-item relative">
              <div className="absolute -left-[26px] md:-left-[30px] p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Full-Stack Web Developer</h3>
                  <time className="mt-2 md:mt-0 text-sm text-purple-600 dark:text-purple-500 font-medium">Aug 2022 - Dec 2023</time>
                </div>

                <p className="text-lg text-purple-600 dark:text-purple-500 mb-3">Notch</p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  My main focus was on building web applications with PHP, Bootstrap and jQuery. I also worked on the maintenance of the company's client websites.
                </p>
              </div>
            </div>

            {/* Education Milestone */}
            <div className="timeline-item relative">
              <div className="absolute -left-[26px] md:-left-[30px] p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Graduation from School</h3>
                  <time className="mt-2 md:mt-0 text-sm text-purple-600 dark:text-purple-500 font-medium">Oct 2022</time>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400">I finished my school and was ready to work full-time.</p>
              </div>
            </div>

            {/* Internship */}
            <div className="timeline-item relative">
              <div className="absolute -left-[26px] md:-left-[30px] p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <time className="mt-2 md:mt-0 text-sm text-purple-600 dark:text-purple-500 font-medium">Jan 2022 - Jun 2022</time>
                </div>

                <p className="text-lg text-purple-600 dark:text-purple-500 mb-3">Telkom Indonesia - Internship</p>
                <p className="text-zinc-600 dark:text-zinc-400">I handled the development of the company's internal web applications using Node.js.</p>
              </div>
            </div>

            {/* Internship */}
            <div className="timeline-item relative">
              <div className="absolute -left-[26px] md:-left-[30px] p-2 bg-white dark:bg-black rounded-full border-2 border-purple-600">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <time className="mt-2 md:mt-0 text-sm text-purple-600 dark:text-purple-500 font-medium">Feb 2021 - Aug 2021</time>
                </div>

                <p className="text-lg text-purple-600 dark:text-purple-500 mb-3">PERUM Bulog - Internship</p>
                <p className="text-zinc-600 dark:text-zinc-400">At Perum Bulog, I was responsible for internal web applications using PHP, Bootstrap and jQuery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section - Redesigned */}
      <section className="py-16 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900/40" id="github-activity">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GitBranch className="w-7 h-7 text-purple-600 dark:text-purple-500" />
              <h2 className="text-4xl font-bold">GitHub Activity</h2>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Here's a snapshot of my coding activity on GitHub. I'm constantly building, learning, and contributing to open-source projects.
            </p>
          </div>

          {/* Main stats with grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* GitHub Stats Card - Spans 2 columns on larger screens */}
            <div className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 github-item">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                Contribution Stats
              </h3>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=giankbr&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
                  alt="GitHub Stats"
                  className="w-full dark:hidden"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api?username=giankbr&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
                  alt="GitHub Stats"
                  className="w-full hidden dark:block"
                />
              </div>
            </div>

            {/* Languages Card - Single column */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 github-item">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                Top Languages
              </h3>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=giankbr&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
                  alt="Top Languages"
                  className="w-full dark:hidden"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=giankbr&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
                  alt="Top Languages"
                  className="w-full hidden dark:block"
                />
              </div>
            </div>
          </div>

          {/* CTA Button with improved styling */}
          <div className="text-center github-item">
            <a
              href="https://github.com/giankbr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all hover:shadow-lg group"
            >
              <span>View My GitHub Profile</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
                  <a href="mailto:vakbarrr@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
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
