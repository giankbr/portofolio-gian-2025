import HomeClient from '@/components/HomeClient';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

// Directory for blog markdown files
const BLOG_DIR = path.join(process.cwd(), 'public/content/blog');

// BlogPost type for markdown frontmatter
interface BlogPost {
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  slug: string;
}

// Helper to get all blog posts
async function getBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.md'))
      .map(async (filename) => {
        const filePath = path.join(BLOG_DIR, filename);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        return {
          slug: path.basename(filename, '.md'),
          title: data.title || filename.replace(/\.md$/, ''),
          date: data.date || '',
          coverImage: data.coverImage || '',
          excerpt: data.excerpt || content.slice(0, 160) + '...',
        };
      })
  );
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function Home() {
  const posts = await getBlogPosts();
  return <HomeClient posts={posts} />;
}
