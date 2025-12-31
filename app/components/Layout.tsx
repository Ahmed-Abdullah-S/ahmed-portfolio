'use client';

import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { useLanguage } from "@/lib/i18n";

export function Layout({ children }: { children: ReactNode }) {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen relative overflow-hidden text-foreground">
      {/* Dynamic Background */}
      <div className="bg-noise" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-24 md:pb-12 max-w-6xl min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  );
}

