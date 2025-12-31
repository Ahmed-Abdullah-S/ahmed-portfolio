import { getProjects } from "@/lib/payload";
import ProjectsPageClient from "./ProjectsPageClient";

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return <ProjectsPageClient projects={projects} />;
}
