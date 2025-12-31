'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Article } from "@/lib/content";

export default function ArticleDetailClient({ article }: { article: Article }) {
  const router = useRouter();

  // Render content - if it's a string, use it directly, otherwise it might be Lexical JSON
  const renderContent = () => {
    if (typeof article.content === 'string') {
      // If it's HTML string, render it
      if (article.content.includes('<')) {
        return <div dangerouslySetInnerHTML={{ __html: article.content }} />;
      }
      // If it's plain text, render as paragraphs
      return <p>{article.content}</p>;
    }
    // For Lexical JSON, we'd need a Lexical renderer, but for now show a message
    return <p className="text-muted-foreground">Content is being loaded...</p>;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button 
          variant="ghost" 
          onClick={() => router.push("/articles")} 
          className="group text-muted-foreground hover:text-white -ml-4"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Articles
        </Button>
      </motion.div>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <header className="mb-10 space-y-6">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight text-white">
            {article.title}
          </h1>

          <div className="flex gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <Separator className="bg-white/10 mb-10" />

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-img:rounded-2xl">
          <p className="lead text-xl text-muted-foreground mb-8">
            {article.excerpt}
          </p>
          {renderContent()}
        </div>
      </motion.article>
    </div>
  );
}
