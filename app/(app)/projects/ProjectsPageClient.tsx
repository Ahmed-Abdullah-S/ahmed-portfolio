'use client';

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/content";

const CATEGORIES = ["All", "Web", "Backend", "AI", "Open Source"];

export default function ProjectsPageClient({ projects: initialProjects }: { projects: Project[] }) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = initialProjects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-bold font-display"
        >
          {t("projects.title")}
        </motion.h1>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white/5 text-muted-foreground border-white/5 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}

