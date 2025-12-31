'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Project } from "@/lib/content";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button 
          variant="ghost" 
          onClick={() => router.push("/projects")} 
          className="group text-muted-foreground hover:text-white -ml-4"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
          <Badge className="mb-4 bg-primary text-white border-0">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-2">{project.title}</h1>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description} 
              <br /><br />
              This project was conceived to solve key challenges in the domain. 
              We leveraged modern architecture to ensure scalability and performance. 
              The user interface was designed with a focus on accessibility and responsiveness, 
              ensuring a seamless experience across all devices.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.tech.map(tech => (
                <div key={tech} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <div className="space-y-3">
              {project.link && (
                <Button className="w-full justify-between" size="lg" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center"><Globe className="mr-2 w-4 h-4" /> Live Demo</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" className="w-full justify-between border-white/10 hover:bg-white/10" size="lg" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center"><Github className="mr-2 w-4 h-4" /> Source Code</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

