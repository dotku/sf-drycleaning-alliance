'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Store {
  id: number;
  name: string;
  nameEn: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  rating: number;
  district: string;
}

const stores: Store[] = [
  {
    id: 7,
    name: '联合法式干洗',
    nameEn: 'Union French Cleaners',
    address: '1718 Union St, San Francisco, CA 94123',
    phone: '(415) 923-1212',
    hours: '周一至周六 8:00-18:00',
    services: ['干洗', '水洗熨烫', '专业印刷', '折叠服务'],
    rating: 4.9,
    district: 'Downtown',
  },
  {
    id: 1,
    name: '金山干洗中心',
    nameEn: 'Golden Gate Cleaners',
    address: '1234 Market St, San Francisco, CA 94102',
    phone: '(415) 555-0123',
    hours: '周一至周五 8:00-19:00, 周六 9:00-17:00',
    services: ['干洗', '水洗熨烫', '皮革护理', '改衣服务'],
    rating: 4.8,
    district: 'Downtown',
  },
  {
    id: 2,
    name: '湾区洗衣坊',
    nameEn: 'Bay Area Laundry',
    address: '567 Mission St, San Francisco, CA 94105',
    phone: '(415) 555-0456',
    hours: '周一至周六 7:30-20:00',
    services: ['干洗', '水洗熨烫', '家居清洁', '快速服务'],
    rating: 4.7,
    district: 'SOMA',
  },
  {
    id: 3,
    name: '唐人街干洗店',
    nameEn: 'Chinatown Dry Cleaners',
    address: '789 Stockton St, San Francisco, CA 94108',
    phone: '(415) 555-0789',
    hours: '周一至周日 8:00-18:30',
    services: ['干洗', '水洗熨烫', '婚纱礼服', '皮革护理'],
    rating: 4.9,
    district: 'Chinatown',
  },
  {
    id: 4,
    name: '日落区洗衣中心',
    nameEn: 'Sunset Cleaners',
    address: '2345 Judah St, San Francisco, CA 94122',
    phone: '(415) 555-1234',
    hours: '周一至周五 8:00-18:00, 周六 9:00-16:00',
    services: ['干洗', '水洗熨烫', '家居清洁'],
    rating: 4.6,
    district: 'Sunset',
  },
  {
    id: 5,
    name: '北滩洗衣店',
    nameEn: 'North Beach Laundry',
    address: '456 Columbus Ave, San Francisco, CA 94133',
    phone: '(415) 555-5678',
    hours: '周一至周六 7:00-19:00',
    services: ['干洗', '水洗熨烫', '改衣服务', '快速服务'],
    rating: 4.7,
    district: 'North Beach',
  },
  {
    id: 6,
    name: '列治文区干洗',
    nameEn: 'Richmond Dry Cleaning',
    address: '3456 Geary Blvd, San Francisco, CA 94118',
    phone: '(415) 555-9012',
    hours: '周一至周五 8:30-18:30, 周六 9:00-17:00',
    services: ['干洗', '水洗熨烫', '皮革护理', '家居清洁'],
    rating: 4.8,
    district: 'Richmond',
  },
];

const districts = ['全部', 'Downtown', 'SOMA', 'Chinatown', 'Sunset', 'North Beach', 'Richmond'];

export default function StoresPage() {
  const { t } = useLanguage();
  const [selectedDistrict, setSelectedDistrict] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStores = stores.filter(store => {
    const matchesDistrict = selectedDistrict === '全部' || store.district === selectedDistrict;
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('stores.title')}</h1>
          <p className="text-xl text-blue-100">
            {t('stores.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder={t('stores.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* District Filters */}
          <div className="flex flex-wrap gap-2">
            {districts.map(district => (
              <button
                key={district}
                onClick={() => setSelectedDistrict(district)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedDistrict === district
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {district === '全部' ? t('stores.all') : district}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-gray-600">
            {t('stores.found')} {filteredStores.length} {t('stores.stores')}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map(store => (
              <div
                key={store.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {store.name}
                      </h3>
                      <p className="text-sm text-gray-500">{store.nameEn}</p>
                    </div>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-semibold text-gray-900">{store.rating}</span>
                    </div>
                  </div>

                  {/* District Badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {store.district}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-start">
                      <span className="text-gray-400 mr-2">📍</span>
                      <span className="text-gray-700">{store.address}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">📞</span>
                      <a href={`tel:${store.phone}`} className="text-blue-600 hover:underline">
                        {store.phone}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-400 mr-2">🕐</span>
                      <span className="text-gray-700">{store.hours}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{t('stores.services')}</h4>
                    <div className="flex flex-wrap gap-1">
                      {store.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="bg-gray-50 px-6 py-3">
                  <a
                    href={`tel:${store.phone}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {t('stores.callNow')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('stores.noResults')}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
