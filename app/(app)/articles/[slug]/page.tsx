import { notFound } from 'next/navigation';
import { getArticleBySlug } from "@/lib/payload";
import ArticleDetailClient from './ArticleDetailClient';

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
