'use client';

import { Project } from '@/types/project';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function ProjectsPageClient({ projects }: { projects: Project[] }) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [projects]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredProjects = useMemo(() => (selectedTag ? projects.filter((p) => p.tags.includes(selectedTag)) : projects), [projects, selectedTag]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 flex flex-col justify-between">
      <main className="flex-1">
        <section className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-12 page-header">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Projects</h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
                  A collection of projects I've worked on, showcasing my skills and experience in web development. Each project demonstrates different aspects of modern web development.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-500">
                  <span>{filteredProjects.length} Projects</span>
                  <span>•</span>
                  <span>Full-stack Development</span>
                  <span>•</span>
                  <span>Open Source</span>
                </div>
              </div>
            </div>

            {/* Filter UI */}
            <div className="mb-10 flex flex-wrap gap-3 items-center">
              <button
                className={`px-4 py-2 rounded-full border ${selectedTag === null ? 'bg-purple-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'} transition`}
                onClick={() => setSelectedTag(null)}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full border ${selectedTag === tag ? 'bg-purple-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'} transition`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid" ref={projectsRef}>
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group shadow-lg rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full min-h-[370px]"
                  >
                    <Link href={`/projects/${project.id}`} className="block flex-1">
                      <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-t-xl overflow-hidden mb-0 group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                        {project.image && project.image !== '/placeholder.svg' ? (
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex flex-col items-center justify-center w-full h-full text-zinc-400">
                            <span className="text-4xl">🖼️</span>
                            <span className="text-xs mt-2">No Image</span>
                          </div>
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        {/* Featured badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">Featured</span>
                          </div>
                        )}
                        {/* View project overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white dark:bg-zinc-900 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                            <span className="text-sm font-medium">View Project</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col gap-2">
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">{project.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2 mb-2">{project.description}</p>
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-md">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 text-xs rounded-md">+{project.tags.length - 3}</span>}
                        </div>
                      </div>
                    </Link>
                    {/* Action Links */}
                    <div className="flex items-center gap-4 px-5 pb-4 pt-2 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
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
