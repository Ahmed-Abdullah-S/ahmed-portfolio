'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, FileText, User, Mail, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  const links = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/projects", label: t("nav.projects"), icon: Briefcase },
    { href: "/articles", label: t("nav.articles"), icon: FileText },
    { href: "/profile", label: t("nav.profile"), icon: User },
    { href: "/contact", label: t("nav.contact"), icon: Mail },
  ];

  const toggleLang = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <>
      {/* Desktop Top Nav */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 px-6 py-4 items-center justify-between glass border-b border-white/5"
      >
        <Link href="/" className="text-xl font-bold font-display tracking-tight hover:text-primary transition-colors">
          ahmed<span className="text-primary">.dev</span>
        </Link>

        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isActive ? "text-white" : "text-muted-foreground hover:text-white"
              )}>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <Button variant="ghost" size="icon" onClick={toggleLang} className="rounded-full hover:bg-white/10">
          <Globe className="w-5 h-5 text-muted-foreground" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 pb-safe"
      >
        <div className="flex justify-around items-center p-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-xl transition-colors min-w-[64px]",
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-white"
              )}>
                <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
                <span className="text-[10px] font-medium">{link.label}</span>
              </Link>
            );
          })}
          <button onClick={toggleLang} className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-white">
            <Globe className="w-5 h-5" />
            <span className="text-[10px] font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </motion.nav>
    </>
  );
}

