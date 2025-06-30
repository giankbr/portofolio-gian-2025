import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { marked } from 'marked';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'public/content/projects', `${id}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  if (!data.title || !data.description) {
    notFound();
  }
  const project: Project = {
    id: data.id || Number(id),
    title: data.title,
    description: data.description,
    longDescription: content,
    tags: data.tags || [],
    image: data.image || '/placeholder.svg',
    github: data.github || '',
    demo: data.demo || '',
    featured: data.featured || false,
  };
  const htmlContent = marked.parse(content);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-500 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Image */}
        <div className="relative aspect-[16/9] w-full mb-10 rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
          <img src={project.image || '/placeholder.svg?height=400&width=800'} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Project Header */}
        <div className="mb-10 text-center">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">{project.title}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-4 justify-center mb-2">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 group">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div
          className="
            prose prose-zinc max-w-none dark:prose-invert
            prose-headings:font-extrabold
            prose-h1:text-3xl md:prose-h1:text-5xl prose-h1:mb-6 prose-h1:mt-10 prose-h1:text-center
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-purple-700 dark:prose-h2:text-purple-400 prose-h2:text-center
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
            prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-p:text-zinc-700 dark:prose-p:text-zinc-300
            prose-ul:pl-6 prose-li:mb-2 prose-li:marker:text-purple-500
            prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-800 prose-blockquote:border-l-purple-400 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-6
            prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-purple-600 dark:prose-code:text-purple-400
            prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-800 prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6
            bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-8 mb-12 mx-auto
          "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
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
                    href="https://www.linkedin.com/in/giannkbr"
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
