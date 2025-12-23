import { useRoute, useLocation } from "wouter";
import { articles } from "@/lib/content";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function ArticleDetail() {
  const [match, params] = useRoute("/articles/:slug");
  const [, setLocation] = useLocation();
  
  if (!match) return <NotFound />;
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return <NotFound />;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/articles")} 
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
          {/* Mock MDX rendering */}
          <p className="lead text-xl text-muted-foreground mb-8">
            {article.excerpt}
          </p>
          <p>{article.content}</p>
          <h3>Why this matters</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <blockquote>
            "Good design is obvious. Great design is transparent."
          </blockquote>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </motion.article>
    </div>
  );
}
