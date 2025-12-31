import { Layout, Database, Sparkles, Terminal, Code2, Cpu } from "lucide-react";

// Types
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "Web" | "Backend" | "AI" | "Open Source";
  image: string;
  tech: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

// Data
export const personalInfo = {
  name: "Ahmed Abdullah",
  role: "Junior Software Engineer",
  location: "Riyadh, Saudi Arabia",
  email: "ahmed@example.com",
  bio: "Passionate software engineer focused on building accessible, pixel-perfect web experiences that merge design with robust engineering.",
  availability: "Open for opportunities",
};

export const skills = [
  { name: "React / Next.js", level: 90, icon: Layout },
  { name: "TypeScript", level: 85, icon: Code2 },
  { name: "Node.js / Express", level: 80, icon: Terminal },
  { name: "FastAPI / Python", level: 75, icon: Database },
  { name: "PostgreSQL", level: 70, icon: Database },
  { name: "AI / ML", level: 65, icon: Sparkles },
  { name: "System Design", level: 60, icon: Cpu },
];

// Sample project (keep as static example)
export const sampleProject: Project = {
  id: "sample-1",
  slug: "sample-project",
  title: "Sample Project",
  description: "This is a sample project to demonstrate the portfolio structure. All other projects are managed through Payload CMS.",
  category: "Web",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  tech: ["React", "TypeScript", "Next.js"],
  featured: false,
};

export const experience: Experience[] = [
  {
    id: "1",
    role: "Junior Software Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Building and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    id: "2",
    role: "Frontend Developer Intern",
    company: "StartupXYZ",
    period: "2022 - 2023",
    description: "Developed responsive UI components and integrated REST APIs. Gained experience in modern JavaScript frameworks and version control.",
  },
];
