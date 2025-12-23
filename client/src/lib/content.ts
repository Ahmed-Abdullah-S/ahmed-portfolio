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
  content: string; // Simplification: Markdown content string
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
  { name: "AI Integration", level: 65, icon: Sparkles },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "Junior Software Engineer",
    company: "Tech Solutions Co.",
    period: "2023 - Present",
    description: "Developing scalable frontend architectures and integrating AI-powered features into legacy systems.",
  },
  {
    id: "2",
    role: "Frontend Intern",
    company: "Creative Digital Agency",
    period: "2022 - 2023",
    description: "Assisted in building responsive landing pages and implemented design systems using Tailwind CSS.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-dashboard",
    title: "Nexus Dashboard",
    description: "A comprehensive e-commerce analytics dashboard with real-time data visualization.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // Data viz
    tech: ["React", "Recharts", "Tailwind", "Supabase"],
    featured: true,
  },
  {
    id: "2",
    slug: "ai-chatbot",
    title: "Nova AI Assistant",
    description: "Context-aware customer support chatbot built with LangChain and OpenAI.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80", // AI abstract
    tech: ["Python", "FastAPI", "OpenAI", "Redis"],
    featured: true,
  },
  {
    id: "3",
    slug: "task-api",
    title: "TaskFlow API",
    description: "High-performance REST API for project management tools with real-time WebSocket updates.",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80", // Code screen
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    featured: false,
  },
  {
    id: "4",
    slug: "portfolio-v1",
    title: "Portfolio V1",
    description: "My previous portfolio site focused on brutalist design aesthetics.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80", // Web design
    tech: ["HTML/SCSS", "JavaScript", "GSAP"],
    featured: false,
  },
  {
    id: "5",
    slug: "open-ui-lib",
    title: "Glass UI Kit",
    description: "An open-source React component library for glassmorphism effects.",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1558655146-d09347e0d7a8?w=800&q=80", // Glassy abstract
    tech: ["React", "Storybook", "NPM"],
    featured: true,
  },
  {
    id: "6",
    slug: "smart-home",
    title: "Smart Home Hub",
    description: "IoT dashboard for controlling smart devices via MQTT protocol.",
    category: "Web",
    image: "https://images.unsplash.com/photo-1558002038-109177ec8002?w=800&q=80", // Smart home
    tech: ["Vue.js", "MQTT", "Node-RED"],
    featured: false,
  },
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "mastering-glassmorphism",
    title: "Mastering Glassmorphism in 2024",
    excerpt: "How to create stunning glass effects without sacrificing accessibility or performance.",
    date: "Oct 15, 2024",
    readTime: "5 min read",
    tags: ["Design", "CSS", "Tutorial"],
    content: "Glassmorphism has taken over the web design world...",
  },
  {
    id: "2",
    slug: "react-server-components",
    title: "Why I Love React Server Components",
    excerpt: "A deep dive into how RSCs changed my mental model of web development.",
    date: "Sep 28, 2024",
    readTime: "8 min read",
    tags: ["React", "Performance"],
    content: "Server components represent a paradigm shift...",
  },
  {
    id: "3",
    slug: "fastapi-vs-express",
    title: "FastAPI vs Express: A Junior's Perspective",
    excerpt: "Comparing the developer experience of Python's rising star vs Node's veteran.",
    date: "Aug 10, 2024",
    readTime: "6 min read",
    tags: ["Backend", "Python", "Node.js"],
    content: "Having used both extensively in production...",
  },
];
