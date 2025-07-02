'use client';
import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

interface BlogPost {
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  slug: string;
}

const categories = ['All', 'Web Development', 'React', 'Animation', 'CSS', 'TypeScript'];

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
      // Category filter placeholder (implement if you add category in frontmatter)
      return matchesSearch;
    });
  }, [posts, search]);

  return (
    <>
      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center mb-8">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* Categories (non-functional, for UI only) */}
            <div className="flex overflow-x-auto gap-2 pb-2 w-full md:w-auto max-w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory ? 'bg-purple-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                  <article className="blog-card h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-zinc-100 dark:border-zinc-800">
                    <div className="relative h-52 overflow-hidden">
                      {post.coverImage && <img src={post.coverImage} alt={post.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-500 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-purple-600 dark:text-purple-500 font-medium">
                        <span>Read article</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-zinc-500 dark:text-zinc-400">No blog posts found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
