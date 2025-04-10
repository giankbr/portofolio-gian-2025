'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ProjectsPage() {
  const projectsRef = useRef(null);

  // Add animation with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.project-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-container',
          start: 'top 60%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/placeholder.svg?height=400&width=600',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: '/placeholder.svg?height=400&width=600',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS. Features a clean, modern design with smooth animations and dark mode support.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: '/placeholder.svg?height=400&width=600',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses the OpenWeatherMap API for data.',
      tags: ['React', 'API Integration', 'Chart.js'],
      image: '/placeholder.svg?height=400&width=600',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Projects</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mb-16">A collection of projects I've worked on, showcasing my skills and experience in web development.</p>

          <div className="space-y-24 projects-container" ref={projectsRef}>
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 project-item ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden aspect-video">
                  <img src={project.image || '/placeholder.svg'} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link href={project.github} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </Link>
                    <Link href={project.demo} className="flex items-center gap-2 text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 group">
                      <span>Live Demo</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
