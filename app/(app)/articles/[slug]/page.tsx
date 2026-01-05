import { notFound } from 'next/navigation';
import { getArticleBySlug } from "@/lib/payload";
import ArticleDetailClient from './ArticleDetailClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
