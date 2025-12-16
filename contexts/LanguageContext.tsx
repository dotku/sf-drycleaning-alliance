'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Initialize language from URL path
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const pathLang = window.location.pathname.split('/')[1];
      return (pathLang === 'en' || pathLang === 'zh') ? pathLang : 'zh';
    }
    return 'zh';
  });

  // Update language when URL path changes
  useEffect(() => {
    const pathLang = params?.lang as string;
    if (pathLang === 'en' || pathLang === 'zh') {
      setLanguageState(pathLang);
    }
  }, [params]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Replace language in current path
    const currentPath = pathname || '';
    const pathSegments = currentPath.split('/').filter(Boolean);

    // Replace first segment (language) or add it
    if (pathSegments[0] === 'zh' || pathSegments[0] === 'en') {
      pathSegments[0] = lang;
    } else {
      pathSegments.unshift(lang);
    }

    const newPath = '/' + pathSegments.join('/');
    router.push(newPath);
  };

  const t = (key: string): string => {
    const translations = require(`@/locales/${language}.json`);
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
