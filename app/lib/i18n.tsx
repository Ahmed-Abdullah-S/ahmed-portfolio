'use client';

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  translations: Record<string, string>;
}

const defaultTranslations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.articles": "Articles",
    "nav.profile": "Profile",
    "nav.contact": "Contact",
    "hero.role": "Junior Software Engineer",
    "hero.hello": "Hello, I'm",
    "hero.cta": "View My Work",
    "section.featured": "Featured Projects",
    "section.latest_articles": "Latest Articles",
    "contact.title": "Let's Work Together",
    "contact.desc": "Have a project in mind? Fill out the form below.",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message Sent!",
    "projects.title": "My Projects",
    "articles.title": "Writing",
    "profile.title": "About Me",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.projects": "المشاريع",
    "nav.articles": "المقالات",
    "nav.profile": "الملف الشخصي",
    "nav.contact": "تواصل معي",
    "hero.role": "مهندس برمجيات مبتدئ",
    "hero.hello": "مرحباً، أنا",
    "hero.cta": "شاهد أعمالي",
    "section.featured": "مشاريع مميزة",
    "section.latest_articles": "أحدث المقالات",
    "contact.title": "لنعمل معاً",
    "contact.desc": "لديك مشروع؟ املأ النموذج أدناه.",
    "contact.send": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.success": "تم الإرسال!",
    "projects.title": "مشاريعي",
    "articles.title": "كتاباتي",
    "profile.title": "عني",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Record<string, string>>(defaultTranslations.en);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    
    // Set default translations
    setTranslations(defaultTranslations[language]);
    
    // Fetch translations from Payload API
    fetch(`/api/translations?lang=${language}`)
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          // Merge Payload translations with defaults
          setTranslations({ ...defaultTranslations[language], ...data });
        }
      })
      .catch(err => {
        console.error('Error fetching translations:', err);
        // Keep default translations on error
      });
  }, [language]);

  const t = (key: string) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        dir: language === "ar" ? "rtl" : "ltr",
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
