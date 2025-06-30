import { Project } from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getAllProjectsFromMarkdown(): Project[] {
  const projectsDir = path.join(process.cwd(), 'public/content/projects');
  const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith('.md'));

  return files.map((file, idx) => {
    const filePath = path.join(projectsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    if (!data.title || !data.description) {
      throw new Error(`Project markdown file ${file} is missing required frontmatter fields.`);
    }
    return {
      id: data.id || idx + 1,
      title: data.title,
      description: data.description,
      longDescription: content,
      tags: data.tags || [],
      image: data.image || '/placeholder.svg',
      github: data.github || '',
      demo: data.demo || '',
      featured: data.featured || false,
    };
  });
}
