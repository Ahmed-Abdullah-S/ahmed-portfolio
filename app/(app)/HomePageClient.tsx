'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Project, Article } from "@/lib/content";

interface HomePageClientProps {
  personalInfo: {
    name: string;
    role: string;
    bio: string;
    availability: string;
    profileImage: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
  };
  featuredProjects: Project[];
  articles: Article[];
}

export default function HomePageClient({ 
  personalInfo: initialPersonalInfo, 
  featuredProjects: initialFeaturedProjects, 
  articles: initialArticles 
}: HomePageClientProps) {
  const { t, language } = useLanguage();
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [featuredProjects, setFeaturedProjects] = useState(initialFeaturedProjects);
  const [articles, setArticles] = useState(initialArticles);

  // Update content when language changes
  useEffect(() => {
    async function updateContent() {
      try {
        const [personalInfoRes, projectsRes, articlesRes] = await Promise.all([
          fetch(`/api/personal-info?lang=${language}`),
          fetch(`/api/projects?lang=${language}`),
          fetch(`/api/articles?lang=${language}`),
        ]);

        const [newPersonalInfo, allProjects, allArticles] = await Promise.all([
          personalInfoRes.json(),
          projectsRes.json(),
          articlesRes.json(),
        ]);
        
        setPersonalInfo(newPersonalInfo);
        setFeaturedProjects(allProjects.filter((p: Project) => p.featured).slice(0, 3));
        setArticles(allArticles.slice(0, 2));
      } catch (error) {
        console.error('Error updating content:', error);
        // Keep existing content on error
      }
    }
    
    updateContent();
  }, [language]);

  const socialIcons = [
    { Icon: Github, href: personalInfo.socialLinks.github || "#" },
    { Icon: Linkedin, href: personalInfo.socialLinks.linkedin || "#" },
    { Icon: Twitter, href: personalInfo.socialLinks.twitter || "#" },
  ];

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 pt-10 md:pt-20">
        <div className="flex-1 text-center md:text-start space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            {personalInfo.availability}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            {t("hero.hello")} <br className="hidden md:block" />
            <span className="text-gradient-primary">{personalInfo.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            {personalInfo.role}. <br />
            {personalInfo.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                {t("hero.cta")} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm">
              Resume <Download className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center md:justify-start pt-4"
          >
            {socialIcons.map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors border border-white/5">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Hero Image / Abstract */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-3xl animate-pulse" />
            <div className="absolute inset-4 rounded-full border-2 border-white/5 backdrop-blur-sm overflow-hidden z-10">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-sm font-mono border border-white/10 animate-bounce delay-100 z-20">
              Next.js
            </div>
            <div className="absolute bottom-10 -left-10 glass px-4 py-2 rounded-xl text-sm font-mono border border-white/10 animate-bounce delay-700 z-20">
              TypeScript
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-display">{t("section.featured")}</h2>
            <Link href="/projects" className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Latest Articles */}
      {articles.length > 0 && (
        <section className="pb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-display">{t("section.latest_articles")}</h2>
            <Link href="/articles" className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/articles/${article.slug}`} className="block group">
                  <div className="glass-card p-6 rounded-2xl h-full border border-white/5 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
