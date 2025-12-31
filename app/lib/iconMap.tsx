import { Layout, Database, Sparkles, Terminal, Code2, Cpu } from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Code2,
  Terminal,
  Database,
  Sparkles,
  Cpu,
};

export function getIcon(iconName: string) {
  return iconMap[iconName] || Layout; // Default to Layout if icon not found
}

