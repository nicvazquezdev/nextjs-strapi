# NextJS Strapi - Monorepo

A full-stack application showcasing the most innovative technologies of the moment, built with Next.js (frontend) and Strapi (CMS/backend).

## 🚀 Project Overview

This project is a web application that displays the latest emerging technologies with detailed information, images, and categorizations. The application is divided into two main parts:

- **Frontend**: Next.js 15 application with App Router, TypeScript, and Tailwind CSS
- **CMS/Backend**: Strapi 5 as headless CMS for content management

## 📁 Project Structure

```
nextjs-strapi/
├── frontend/          # Next.js Application
│   ├── app/          # Next.js 15 App Router
│   ├── components/   # Reusable React components
│   ├── lib/          # Services, utilities and types
│   └── public/       # Static assets
├── cms/              # Strapi Backend
│   ├── src/          # CMS source code
│   ├── config/       # Strapi configuration
│   └── public/       # Uploads and public assets
└── README.md         # This file
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Static typing
- **Tailwind CSS 4** - Utility-first CSS framework
- **GraphQL** - Query language for APIs

### Backend/CMS

- **Strapi 5** - Headless CMS
- **TypeScript** - Static typing
- **SQLite** - Database (development)
- **GraphQL Plugin** - GraphQL API

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 6.0.0

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-strapi
   ```

2. **Install dependencies**

   ```bash
   # Install workspace dependencies
   npm install

   # Or install individually
   cd frontend && npm install
   cd ../cms && npm install
   ```

3. **Configure environment variables**

   ```bash
   # Frontend (.env.local in frontend/)
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

   # CMS (.env in cms/)
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   ```

### Development

**Run both services with one command:**

```bash
npm run dev
```

This will start both CMS (port 1337) and Frontend (port 3000) simultaneously.

**Or run services individually:**

```bash
# CMS only
npm run dev:cms

# Frontend only
npm run dev:frontend
```

### Development URLs

- **Frontend**: http://localhost:3000
- **CMS Admin**: http://localhost:1337/admin
- **Strapi API**: http://localhost:1337/api
- **GraphQL Playground**: http://localhost:1337/graphql

## 📝 Available Scripts

### Workspace Root

- `npm run dev` - Run frontend and CMS simultaneously
- `npm run dev:frontend` - Run frontend only
- `npm run dev:cms` - Run CMS only
- `npm run build` - Build both applications
- `npm run start` - Start both applications in production
- `npm run lint` - Run linting across workspace

### Frontend (`frontend/`)

- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint linting

### CMS (`cms/`)

- `npm run dev` - Strapi development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run strapi` - Strapi CLI

## 🏗️ Architecture

### Frontend

The frontend application follows Clean Architecture principles with:

- **Modular components** organized by domain and function
- **Service Layer** for business logic
- **Error Boundaries** for robust error handling
- **Strict TypeScript** for type safety
- **Performance optimization** with ISR and image optimization

See [ARCHITECTURE.md](./frontend/ARCHITECTURE.md) for detailed documentation.

### Backend/CMS

Strapi configured as headless CMS with:

- **Custom Content Types** for technologies
- **GraphQL API** for flexible queries
- **Image uploads** with multiple formats
- **TypeScript** for robust development

## 📊 Key Features

### Frontend

- ✅ **Responsive Design** - Mobile-first adaptive design
- ✅ **Optimized Performance** - ISR, lazy loading, image optimization
- ✅ **SEO Friendly** - Dynamic meta tags, structured data
- ✅ **Error Handling** - Graceful boundaries and fallbacks
- ✅ **Type Safety** - Strict TypeScript throughout codebase
- ✅ **Modern UI** - Modular components with Tailwind CSS

### Backend

- ✅ **Headless CMS** - API-first approach
- ✅ **GraphQL** - Flexible and efficient queries
- ✅ **Media Management** - Image upload and management
- ✅ **Type-safe** - TypeScript in backend
- ✅ **Admin Panel** - Intuitive management interface

## 🚀 Deployment

### Frontend (Vercel - Recommended)

```bash
# In frontend/ directory
npm run build
```

### CMS (Heroku/Railway/VPS)

```bash
# In cms/ directory
npm run build
npm run start
```

### Production Variables

- Configure `NEXT_PUBLIC_STRAPI_URL` with production CMS URL
- Configure production database in Strapi
- Configure storage for uploads (AWS S3, Cloudinary, etc.)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Automated testing (Jest, Testing Library)
- [ ] CI/CD pipeline
- [ ] Internationalization (i18n)
- [ ] PWA capabilities
- [ ] Monitoring and analytics
- [ ] Advanced caching with Redis

## 📄 License

This project is under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: React, Next.js, TypeScript
- **Backend Development**: Strapi, GraphQL, Node.js
- **UI/UX**: Tailwind CSS, Responsive Design

---

**Note**: This project was developed as part of a technical challenge, demonstrating skills in modern full-stack development with industry best practices.
