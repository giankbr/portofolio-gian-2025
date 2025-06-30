'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function HomeClient({ posts }: { posts: any[] }) {
  // Refs for animation targets
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const spotifyRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // (animation logic can be added here as needed)
  }, []);

  const addFloatingRef = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Bento */}
        <div className="bento-hero relative rounded-3xl bg-gradient-to-br from-purple-900 via-zinc-900 to-black shadow-xl p-10 md:p-16 mb-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
          <div className="flex-1 z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-primary">Gian Akbar</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-xl">
              Building digital experiences that <span className="text-primary font-semibold">matter</span>. Full-stack Web Developer at Morfotech.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-7 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg hover:scale-105 transition">
                Contact
              </a>
              <a href="/cv.pdf" className="px-7 py-4 rounded-full border border-zinc-700 text-zinc-200 font-semibold text-lg hover:bg-zinc-800 transition">
                Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-primary/30 to-zinc-800 border-4 border-primary/40 flex items-center justify-center shadow-2xl overflow-hidden">
              <img src="/profile.jpg" alt="Gian Akbar" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Skills/Tech Stack Bento */}
        <div className="bento-section grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bento-card bg-zinc-900 rounded-2xl p-8 shadow-lg border-t-4 border-primary flex flex-col items-center text-center">
            <span className="text-4xl mb-3">💻</span>
            <h3 className="text-xl font-bold text-primary mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="badge-skill">React</span>
              <span className="badge-skill">Next.js</span>
              <span className="badge-skill">TypeScript</span>
              <span className="badge-skill">Tailwind</span>
            </div>
          </div>
          <div className="bento-card bg-zinc-900 rounded-2xl p-8 shadow-lg border-t-4 border-blue-500 flex flex-col items-center text-center">
            <span className="text-4xl mb-3">🛠️</span>
            <h3 className="text-xl font-bold text-blue-400 mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="badge-skill">Node.js</span>
              <span className="badge-skill">Express</span>
              <span className="badge-skill">Laravel</span>
              <span className="badge-skill">PHP</span>
            </div>
          </div>
          <div className="bento-card bg-zinc-900 rounded-2xl p-8 shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center">
            <span className="text-4xl mb-3">🗄️</span>
            <h3 className="text-xl font-bold text-green-400 mb-2">Database</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="badge-skill">MongoDB</span>
              <span className="badge-skill">PostgreSQL</span>
              <span className="badge-skill">MySQL</span>
              <span className="badge-skill">Redis</span>
            </div>
          </div>
        </div>

        {/* About/Story Bento */}
        <div className="bento-card bg-zinc-900 rounded-2xl p-8 shadow-lg border-t-4 border-amber-400 mb-10">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">About Me</h2>
          <p className="text-zinc-300 text-lg mb-2">
            I'm Gian, a web developer, tech enthusiast, and coffee lover. Passionate about building impactful web experiences and always eager to learn new things.
          </p>
          <ul className="flex flex-wrap gap-3 text-zinc-400 text-sm">
            <li>☕ Coffee Addict</li>
            <li>🌏 Based in Jakarta</li>
            <li>🎸 Music Lover</li>
            <li>🚀 Always Learning</li>
          </ul>
        </div>

        {/* Blog Bento (replace Recent Projects) */}
        <div className="bento-card bg-zinc-900 rounded-2xl p-8 shadow-lg border-t-4 border-pink-500 mb-10">
          <h2 className="text-2xl font-bold text-pink-400 mb-6">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.slice(0, 3).map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="group block bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition shadow border border-zinc-700">
                <h3 className="text-lg font-bold text-pink-300 group-hover:text-pink-400 mb-2">{post.title}</h3>
                <p className="text-zinc-400 mb-2 line-clamp-2">{post.excerpt}</p>
                <span className="text-xs text-zinc-500">{post.date}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonial/Trusted By Bento */}
        <div className="bento-card bg-zinc-900 rounded-2xl p-8 shadow-lg border-t-4 border-cyan-400 mb-10 flex flex-col items-center text-center">
          <span className="text-3xl mb-3">⭐</span>
          <blockquote className="text-lg text-cyan-300 italic mb-2">“Gian is a highly skilled developer who delivers quality work and is a pleasure to collaborate with.”</blockquote>
          <span className="text-cyan-400 font-semibold">— Client/Colleague Name</span>
        </div>

        {/* Call to Action Bento */}
        <div className="bento-card bg-gradient-to-r from-primary to-pink-500 rounded-2xl p-10 shadow-xl flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-3">Let's Work Together!</h2>
          <p className="text-zinc-100 mb-6">Interested in collaborating or have a project in mind? Reach out and let's build something amazing.</p>
          <a href="#contact" className="px-8 py-4 rounded-full bg-white text-primary font-bold text-lg shadow-lg hover:scale-105 transition">
            Contact Me
          </a>
        </div>

        {/* Footer Bento */}
        <footer className="bento-footer bg-zinc-950 rounded-2xl p-6 text-center text-zinc-500 text-sm mt-10">&copy; {new Date().getFullYear()} Gian Akbar. All rights reserved.</footer>
      </div>
    </div>
  );
}
