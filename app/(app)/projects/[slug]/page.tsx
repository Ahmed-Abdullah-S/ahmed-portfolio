import { notFound } from 'next/navigation';
import { getProjectBySlug } from "@/lib/payload";
import ProjectDetailClient from './ProjectDetailClient';

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
