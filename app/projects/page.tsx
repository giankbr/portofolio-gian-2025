import { getAllProjectsFromMarkdown } from '@/lib/server-utils';
import ProjectsPageClient from './ProjectsPageClient';

export default function ProjectsPage() {
  const projects = getAllProjectsFromMarkdown();
  return <ProjectsPageClient projects={projects} />;
}
