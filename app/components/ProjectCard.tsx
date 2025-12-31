'use client';

import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <Badge className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur border-white/10 hover:bg-black/70">
              {project.category}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col relative z-20">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
              {project.title}
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

