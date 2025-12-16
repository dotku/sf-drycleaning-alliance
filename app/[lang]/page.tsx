'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${language}/stores`}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('home.hero.browseStores')}
              </Link>
              <Link
                href={`/${language}/franchise`}
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-colors border-2 border-white"
              >
                {t('home.hero.applyFranchise')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('home.features.quality.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.quality.description')}
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('home.features.coverage.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.coverage.description')}
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('home.features.standard.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.standard.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
              {t('home.sponsor.featured')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t('home.sponsor.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.sponsor.subtitle')}
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Union French Cleaners */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 hover:border-blue-300 transition-all flex flex-col">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-200/50 backdrop-blur-sm rounded-full mb-4">
                  <div className="text-4xl">🧺</div>
                </div>
                <div className="text-blue-900 font-bold text-xl">
                  {language === 'zh' ? '联合法式干洗' : 'Union French Cleaners'}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-bold mb-3">
                  {language === 'zh' ? '联盟赞助商' : 'Alliance Sponsor'}
                </div>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">📍</span>
                    <div>
                      <p className="text-gray-700 font-medium">1718 Union St</p>
                      <p className="text-gray-600">San Francisco, CA 94123</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">📞</span>
                    <a
                      href="tel:+14159231212"
                      className="text-blue-600 font-semibold hover:text-blue-700 text-lg"
                    >
                      (415) 923-1212
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href="tel:+14159231212"
                    className="inline-flex items-center justify-center bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-sm"
                  >
                    <span className="mr-2">📞</span>
                    {t('home.sponsor.callNow')}
                  </a>
                  <Link
                    href={`/${language}/stores`}
                    className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors border border-blue-200"
                  >
                    {t('home.sponsor.visitStore')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Unincore */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-pink-200 hover:border-pink-300 transition-all flex flex-col">
              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-200/50 backdrop-blur-sm rounded-full mb-4">
                  <div className="text-4xl">💄</div>
                </div>
                <div className="text-pink-900 font-bold text-xl">
                  {language === 'zh' ? '优妮恩蔻' : 'Unincore'}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="uppercase tracking-wide text-sm text-pink-600 font-bold mb-3">
                  {language === 'zh' ? '项目赞助商' : 'Project Sponsor'}
                </div>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <span className="text-pink-500 mr-3 text-xl">📍</span>
                    <div>
                      <p className="text-gray-700 font-medium">333 City Blvd West, Suite 850</p>
                      <p className="text-gray-600">Orange, CA 92868</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pink-500 mr-3 text-xl">📞</span>
                    <a
                      href="tel:+14157229032"
                      className="text-pink-600 font-semibold hover:text-pink-700 text-lg"
                    >
                      (415) 722-9032
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-pink-500 mr-3 text-xl">🌐</span>
                    <div>
                      <a
                        href="https://unincore.us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 font-semibold hover:text-pink-700 text-lg"
                      >
                        unincore.us
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-pink-500 mr-3 text-xl">✨</span>
                    <div>
                      <p className="text-gray-700">
                        {language === 'zh'
                          ? '美妆保健产品零售商'
                          : 'Beauty and health products retailer'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href="tel:+14157229032"
                    className="inline-flex items-center justify-center bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-500 transition-colors shadow-sm"
                  >
                    <span className="mr-2">📞</span>
                    {t('home.sponsor.callNow')}
                  </a>
                  <Link
                    href={`/${language}/unincore`}
                    className="inline-flex items-center justify-center bg-pink-50 text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-100 transition-colors border border-pink-200"
                  >
                    {t('home.sponsor.visitStore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">👔</div>
              <h4 className="font-semibold text-lg mb-2">{t('home.services.dryCleaning.title')}</h4>
              <p className="text-gray-600 text-sm">{t('home.services.dryCleaning.description')}</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">👕</div>
              <h4 className="font-semibold text-lg mb-2">{t('home.services.washing.title')}</h4>
              <p className="text-gray-600 text-sm">{t('home.services.washing.description')}</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🧥</div>
              <h4 className="font-semibold text-lg mb-2">{t('home.services.leather.title')}</h4>
              <p className="text-gray-600 text-sm">{t('home.services.leather.description')}</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">🛏️</div>
              <h4 className="font-semibold text-lg mb-2">{t('home.services.home.title')}</h4>
              <p className="text-gray-600 text-sm">{t('home.services.home.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('home.cta.description')}
          </p>
          <Link
            href={`/${language}/franchise`}
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
