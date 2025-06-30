import BlogDetailClient from '@/components/BlogDetailClient';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

const getRandomImage = () => `https://source.unsplash.com/800x400/?technology,code,web,random,${Math.floor(Math.random() * 10000)}`;

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), 'public/content/blog', `${slug}.md`);
  let post = null;
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    post = {
      slug,
      title: data.title || slug,
      date: data.date || '',
      coverImage: data.coverImage || getRandomImage(),
      excerpt: data.excerpt || '',
      content,
      category: data.category || '',
      readTime: data.readTime || '',
      author: {
        name: 'Gian Akbar',
        avatar: '/fotofoto.jpeg',
        title: 'Full-stack Developer',
      },
      relatedPosts: [], // bisa diisi nanti
    };
  } catch {
    return <div>404 - Blog Not Found</div>;
  }
  return <BlogDetailClient post={post} />;
}
