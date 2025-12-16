'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UnicorePage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-rose-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-pink-200/50 backdrop-blur-sm rounded-full mb-6">
              <div className="text-5xl">💄</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pink-900">
              {t('unincore.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-800">
              {t('unincore.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-700">
              {t('unincore.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('unincore.about.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('unincore.about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('unincore.products.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🧴</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.products.skincare.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.products.skincare.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.products.healthcare.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.products.healthcare.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.products.living.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.products.living.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.products.brands.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.products.brands.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('unincore.services.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.services.shopping.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.services.shopping.description')}
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.services.subscription.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.services.subscription.description')}
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('unincore.services.support.title')}
              </h3>
              <p className="text-gray-600">
                {t('unincore.services.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('unincore.contact.title')}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-pink-600 mb-2">
                  {t('unincore.contact.address')}
                </h3>
                <p className="text-gray-700">333 City Blvd West, Suite 850</p>
                <p className="text-gray-700">Orange, CA 92868</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-pink-600 mb-2">
                  {t('unincore.contact.phone')}
                </h3>
                <a
                  href="tel:+14157229032"
                  className="text-pink-600 font-semibold hover:text-pink-800 text-lg"
                >
                  (415) 722-9032
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-pink-600 mb-2">
                  {t('unincore.contact.website')}
                </h3>
                <a
                  href="https://unincore.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold hover:text-pink-800"
                >
                  unincore.us
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-pink-600 mb-2">
                  {t('unincore.contact.email')}
                </h3>
                <a
                  href="mailto:unincore@unincore.com"
                  className="text-pink-600 font-semibold hover:text-pink-800"
                >
                  unincore@unincore.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14157229032"
                className="inline-flex items-center justify-center bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                <span className="mr-2">📞</span>
                {t('unincore.contact.callNow')}
              </a>
              <a
                href="https://unincore.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-pink-600"
              >
                <span className="mr-2">🌐</span>
                {t('unincore.contact.visitWebsite')}
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/${language}`}
              className="text-white hover:text-pink-200 transition-colors"
            >
              ← {language === 'zh' ? '返回首页' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
