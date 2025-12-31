import { getProjects, getArticles, getPersonalInfo } from "@/lib/payload";
import HomePageClient from "./HomePageClient";

export default async function HomePage() {
  // Default to English for server-side rendering
  // Language will be handled client-side
  const [payloadProjects, payloadArticles, personalInfo] = await Promise.all([
    getProjects('en'),
    getArticles('en'),
    getPersonalInfo('en'),
  ]);
  
  const featuredProjects = payloadProjects.filter(p => p.featured).slice(0, 3);
  const latestArticles = payloadArticles.slice(0, 2);

  return (
    <HomePageClient 
      personalInfo={personalInfo}
      featuredProjects={featuredProjects}
      articles={latestArticles}
    />
  );
}
