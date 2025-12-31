'use client';

import Link from 'next/link';
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Article } from "@/lib/content";

export default function ArticlesPageClient({ articles }: { articles: Article[] }) {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold font-display"
      >
        {t("articles.title")}
      </motion.h1>

      <div className="grid gap-8">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/articles/${article.slug}`} className="block group">
              <article className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-9xl font-bold font-display">{i + 1}</span>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    <div className="flex gap-2">
                      {article.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-xs text-primary/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

