'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FranchisePage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    businessYears: '',
    employees: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('franchise.form.success.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('franchise.form.success.message')}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('franchise.form.success.back')}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('franchise.title')}</h1>
          <p className="text-xl text-blue-100">
            {t('franchise.subtitle')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            加盟联盟的优势
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">品牌提升</h3>
              <p className="text-gray-600">
                加入联盟提升店铺品牌形象，增加客户信任度
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">在线曝光</h3>
              <p className="text-gray-600">
                在联盟官网展示，获得更多在线曝光机会
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">资源共享</h3>
              <p className="text-gray-600">
                与其他成员交流经验，共享行业资源
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">营销支持</h3>
              <p className="text-gray-600">
                统一营销推广，降低单店营销成本
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3">质量认证</h3>
              <p className="text-gray-600">
                获得联盟质量认证标识，提升竞争力
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">增加收益</h3>
              <p className="text-gray-600">
                通过联盟推荐获得更多客户，提升营业额
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            加盟要求
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <p className="text-gray-700">
                拥有合法营业执照，在旧金山地区正规经营的干洗店
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <p className="text-gray-700">
                至少1年以上的经营经验，有良好的服务口碑
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <p className="text-gray-700">
                具备专业的干洗设备和技术，确保服务质量
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <p className="text-gray-700">
                认同联盟的服务标准和经营理念
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <p className="text-gray-700">
                愿意积极参与联盟活动，共同维护联盟形象
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            加盟申请表
          </h2>
          <p className="text-center text-gray-600 mb-12">
            请填写以下信息，我们会尽快与您联系
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-2">
                  店铺名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="storeName"
                  name="storeName"
                  required
                  value={formData.storeName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="您的店铺名称"
                />
              </div>

              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                  负责人姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  required
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="您的姓名"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  电子邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  联系电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(415) 555-0123"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                店铺地址 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="完整的店铺地址"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessYears" className="block text-sm font-medium text-gray-700 mb-2">
                  经营年限 <span className="text-red-500">*</span>
                </label>
                <select
                  id="businessYears"
                  name="businessYears"
                  required
                  value={formData.businessYears}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  <option value="1-2">1-2年</option>
                  <option value="3-5">3-5年</option>
                  <option value="6-10">6-10年</option>
                  <option value="10+">10年以上</option>
                </select>
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                  员工人数 <span className="text-red-500">*</span>
                </label>
                <select
                  id="employees"
                  name="employees"
                  required
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  <option value="1-3">1-3人</option>
                  <option value="4-6">4-6人</option>
                  <option value="7-10">7-10人</option>
                  <option value="10+">10人以上</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                补充说明
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请简单介绍您的店铺特色或其他想告诉我们的信息..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                提交申请
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            提交申请表示您同意我们使用您的信息与您联系
          </p>
        </div>
      </section>
    </main>
  );
}
