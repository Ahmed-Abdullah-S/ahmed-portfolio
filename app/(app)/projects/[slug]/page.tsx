import { notFound } from 'next/navigation';
import { getProjectBySlug } from "@/lib/payload";
import ProjectDetailClient from './ProjectDetailClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
