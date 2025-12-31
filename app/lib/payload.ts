import { getPayload } from 'payload';
import config from '@payload-config';

export async function getPayloadClient() {
  const payloadConfig = await config;
  return await getPayload({ config: payloadConfig });
}

function getImageUrl(image: any): string {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (typeof image === 'object') {
    // Payload media object - construct URL
    if (image.url) return image.url;
    if (image.filename) {
      // Construct URL from filename (assuming media is served from /media)
      return `/media/${image.filename}`;
    }
  }
  return '';
}

export async function getTranslations(language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'translations',
      where: {},
      limit: 1000,
    });

    const translations: Record<string, string> = {};
    result.docs.forEach((trans: any) => {
      translations[trans.key] = language === 'ar' ? trans.ar : trans.en;
    });

    return translations;
  } catch (error) {
    console.error('Error fetching translations:', error);
    // Return default translations if Payload fails
    return getDefaultTranslations(language);
  }
}

function getDefaultTranslations(language: 'en' | 'ar'): Record<string, string> {
  const defaults = {
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
  return defaults[language];
}

export async function getPersonalInfo(language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'personal-info',
      limit: 1,
    });

    if (result.docs.length === 0) {
      return getDefaultPersonalInfo(language);
    }

    const info = result.docs[0];
    const isAr = language === 'ar';
    
    return {
      name: (isAr && info.nameAr) ? info.nameAr : (info.name || "Ahmed Abdullah"),
      role: (isAr && info.roleAr) ? info.roleAr : (info.role || "Junior Software Engineer"),
      location: (isAr && info.locationAr) ? info.locationAr : (info.location || "Riyadh, Saudi Arabia"),
      email: info.email || "ahmed@example.com",
      bio: (isAr && info.bioAr) ? info.bioAr : (info.bio || ""),
      availability: (isAr && info.availabilityAr) ? info.availabilityAr : (info.availability || "Open for opportunities"),
      profileImage: getImageUrl(info.profileImage) || "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80",
      socialLinks: {
        github: info.socialLinks?.github || "#",
        linkedin: info.socialLinks?.linkedin || "#",
        twitter: info.socialLinks?.twitter || "#",
        website: info.socialLinks?.website || undefined,
      },
    };
  } catch (error) {
    console.error('Error fetching personal info:', error);
    return getDefaultPersonalInfo(language);
  }
}

function getDefaultPersonalInfo(language: 'en' | 'ar') {
  const defaults = {
    en: {
      name: "Ahmed Abdullah",
      role: "Junior Software Engineer",
      location: "Riyadh, Saudi Arabia",
      email: "ahmed@example.com",
      bio: "Passionate software engineer focused on building accessible, pixel-perfect web experiences that merge design with robust engineering.",
      availability: "Open for opportunities",
      profileImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80",
      socialLinks: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: undefined,
      },
    },
    ar: {
      name: "أحمد عبدالله",
      role: "مهندس برمجيات مبتدئ",
      location: "الرياض، المملكة العربية السعودية",
      email: "ahmed@example.com",
      bio: "مهندس برمجيات شغوف يركز على بناء تجارب ويب متاحة ومثالية تجمع بين التصميم والهندسة القوية.",
      availability: "متاح للفرص",
      profileImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80",
      socialLinks: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: undefined,
      },
    },
  };
  return defaults[language];
}

export async function getSkills() {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'skills',
      where: {},
      limit: 100,
      sort: 'order',
    });

    return result.docs.map((skill: any) => ({
      id: skill.id.toString(),
      name: skill.name,
      level: skill.level,
      icon: skill.icon,
      order: skill.order || 0,
    }));
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export async function getExperience(language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'experience',
      where: {},
      limit: 100,
      sort: '-order',
    });

    return result.docs.map((exp: any) => ({
      id: exp.id.toString(),
      role: exp.role,
      company: exp.company,
      period: exp.period,
      description: exp.description,
      order: exp.order || 0,
    }));
  } catch (error) {
    console.error('Error fetching experience:', error);
    return [];
  }
}

export async function getProjects(language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'projects',
      where: {},
      limit: 100,
      sort: '-createdAt',
    });

    const isAr = language === 'ar';
    
    return result.docs.map((project: any) => ({
      id: project.id.toString(),
      slug: project.slug,
      title: (isAr && project.titleAr) ? project.titleAr : project.title,
      description: (isAr && project.descriptionAr) ? project.descriptionAr : project.description,
      category: project.category,
      image: getImageUrl(project.image),
      tech: project.tech?.map((t: any) => t.technology || t) || [],
      link: project.link || undefined,
      github: project.github || undefined,
      featured: project.featured || false,
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getArticles(language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'articles',
      where: {},
      limit: 100,
      sort: '-date',
    });

    const isAr = language === 'ar';
    
    return result.docs.map((article: any) => ({
      id: article.id.toString(),
      slug: article.slug,
      title: (isAr && article.titleAr) ? article.titleAr : article.title,
      excerpt: (isAr && article.excerptAr) ? article.excerptAr : article.excerpt,
      date: article.date ? new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }) : '',
      readTime: (isAr && article.readTimeAr) ? article.readTimeAr : (article.readTime || '5 min read'),
      tags: article.tags?.map((t: any) => t.tag || t) || [],
      content: (isAr && article.contentAr) ? article.contentAr : article.content,
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string, language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });

    if (result.docs.length === 0) return null;

    const project = result.docs[0];
    const isAr = language === 'ar';
    
    return {
      id: project.id.toString(),
      slug: project.slug,
      title: (isAr && project.titleAr) ? project.titleAr : project.title,
      description: (isAr && project.descriptionAr) ? project.descriptionAr : project.description,
      category: project.category,
      image: getImageUrl(project.image),
      tech: project.tech?.map((t: any) => t.technology || t) || [],
      link: project.link || undefined,
      github: project.github || undefined,
      featured: project.featured || false,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function getArticleBySlug(slug: string, language: 'en' | 'ar' = 'en') {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'articles',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });

    if (result.docs.length === 0) return null;

    const article = result.docs[0];
    const isAr = language === 'ar';
    
    return {
      id: article.id.toString(),
      slug: article.slug,
      title: (isAr && article.titleAr) ? article.titleAr : article.title,
      excerpt: (isAr && article.excerptAr) ? article.excerptAr : article.excerpt,
      date: article.date ? new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }) : '',
      readTime: (isAr && article.readTimeAr) ? article.readTimeAr : (article.readTime || '5 min read'),
      tags: article.tags?.map((t: any) => t.tag || t) || [],
      content: (isAr && article.contentAr) ? article.contentAr : article.content,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}
