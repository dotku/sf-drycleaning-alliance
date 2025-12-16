'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${language}`} className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">🧺</span>
              <span className="ml-2 text-xl font-semibold text-gray-800">
                {t('nav.title')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${language}`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              href={`/${language}/stores`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.stores')}
            </Link>
            <Link
              href={`/${language}/franchise`}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              {t('nav.franchise')}
            </Link>
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="ml-2 px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href={`/${language}`}
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href={`/${language}/stores`}
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.stores')}
            </Link>
            <Link
              href={`/${language}/franchise`}
              className="block py-2 text-blue-600 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.franchise')}
            </Link>
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
