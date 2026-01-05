import { getArticles } from "@/lib/payload";
import ArticlesPageClient from './ArticlesPageClient';

export default async function ArticlesPage() {
  const articles = await getArticles();
  return <ArticlesPageClient articles={articles} />;
}
