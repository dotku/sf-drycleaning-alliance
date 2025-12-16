# 旧金山干洗店联盟 | SF Dry Cleaning Alliance

一个展示旧金山干洗店联盟信息的网站，提供会员店铺展示和加盟申请功能。

## 项目简介

这是一个使用 [Next.js](https://nextjs.org) 构建的现代化网站，旨在：

- 展示旧金山地区的优质干洗店信息
- 为顾客提供便捷的店铺查询功能
- 为干洗店提供加盟申请渠道

## 主要功能

### 1. 首页

- 联盟介绍与特色展示
- 服务项目介绍
- 吸引用户了解和加入

### 2. 会员店铺页面（/stores）

- 展示所有联盟成员店铺
- 按地区筛选功能
- 店铺搜索功能
- 显示店铺详细信息（地址、电话、营业时间、服务项目等）
- 一键拨打电话功能

### 3. 加盟申请页面（/franchise）

- 加盟优势介绍
- 加盟要求说明
- 在线申请表单
- 表单验证功能

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: Geist Sans & Geist Mono

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```text
sf-drycleaning-alliance/
├── app/
│   ├── page.tsx              # 首页
│   ├── layout.tsx            # 根布局
│   ├── stores/
│   │   └── page.tsx          # 会员店铺页面
│   ├── franchise/
│   │   └── page.tsx          # 加盟申请页面
│   └── globals.css           # 全局样式
├── components/
│   └── Navbar.tsx            # 导航栏组件
└── public/                   # 静态资源
```

## 特性

- 完全响应式设计，支持移动端和桌面端
- 现代化的 UI/UX 设计
- 快速的页面加载速度
- SEO 优化
- 中英文双语支持

## 未来改进计划

- [ ] 添加后端 API 支持
- [ ] 实现真实的表单提交功能
- [ ] 添加地图集成显示店铺位置
- [ ] 实现用户评价系统
- [ ] 添加多语言支持
- [ ] 优化 SEO 和性能

## 部署

推荐使用 [Vercel](https://vercel.com) 进行部署：

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

更多部署选项请查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 联系方式

如有任何问题或建议，欢迎联系我们。

---

基于 Next.js 构建 | 使用 TypeScript 和 Tailwind CSS
