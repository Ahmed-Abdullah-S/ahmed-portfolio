import Link from 'next/link';
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getArticles } from "@/lib/payload";
import ArticlesPageClient from './ArticlesPageClient';

export default async function ArticlesPage() {
  const articles = await getArticles();
  return <ArticlesPageClient articles={articles} />;
}
