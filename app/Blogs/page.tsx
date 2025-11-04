"use client"

import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';
import { useRouter } from 'next/navigation';

// --- Typescript Interface for Article Data ---
interface Article {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
}

// --- Mock Data ---
const ARTICLES: Article[] = [
  {
    id: 1,
    category: 'Advice',
    title: 'The 20 best looking chatbot UIs in 2025',
    author: 'Kendall Freeze',
    date: 'October 24, 2025',
    imageUrl: 'https://placehold.co/600x400/FFF3DA/303030?text=Medical+Response',
    imageAlt: 'Map with ambulance and helicopter icons',
  },
  {
    id: 2,
    category: 'Advice',
    title: 'How to build a chatbot with a knowledge base',
    author: 'Chris Bass',
    date: 'October 21, 2025',
    imageUrl: 'https://placehold.co/600x400/ADD8E6/303030?text=Digital+Signature',
    imageAlt: 'Man signing a document on a mobile phone',
  },
  {
    id: 3,
    category: 'PRODUCT',
    title: 'Sign documents anywhere: Meet ChatSupplies Sign Mobile',
    author: 'Chris Bass',
    date: 'October 21, 2025',
    imageUrl: 'https://placehold.co/600x400/90EE90/303030?text=Sign+Mobile',
    imageAlt: 'Two people interacting with a mobile document signing app',
  },
  {
    id: 4,
    category: 'ENTERPRISE',
    title: 'How Bowls NSW is modernizing a traditional sport with ChatSupplies Enterprise',
    author: 'Jessica Burnette-Lemon',
    date: 'October 14, 2025',
    imageUrl: 'https://placehold.co/600x400/FFA07A/303030?text=Bowls+NSW',
    imageAlt: 'Abstract image related to Bowls NSW',
  },
  {
    id: 5,
    category: 'EDUCATION',
    title: 'Turn behavior data into action: Digital tracking & AI-powered tools that help teachers teach',
    author: 'Solana Willis',
    date: 'October 14, 2025',
    imageUrl: 'https://placehold.co/600x400/C0C0C0/303030?text=Education+AI',
    imageAlt: 'Teacher using digital tools to analyze student behavior',
  },
  {
    id: 6,
    category: 'ENTERPRISE',
    title: 'How ChatSupplies reseller Vision-e helps customers drive more leads',
    author: 'Lainie Johnson',
    date: 'October 13, 2025',
    imageUrl: 'https://placehold.co/600x400/ADD8E6/303030?text=Vision-e+Leads',
    imageAlt: 'Woman smiling with Vision-e logo in the background',
  },
];

// --- Route mapping for each article ---
const getArticleRoute = (articleId: number): string => {
  const routeMap: { [key: number]: string } = {
    1: '/Blogs/chatbot',
    2: '/Blogs/knowledge-base',
    3: '/Blogs/sign-mobile',
    4: '/Blogs/bowls-nsw',
    5: '/Blogs/education-ai',
    6: '/Blogs/vision-e-leads',
  };
  
  return routeMap[articleId] || '/Blogs/default';
};

// --- Article Card Component ---
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const router = useRouter();

  const handleCardClick = () => {
    const route = getArticleRoute(article.id);
    router.push(route);
  };

  return (
    <div 
      className="
        bg-white
        rounded-xl
        shadow-lg
        hover:shadow-2xl
        transition
        duration-300
        ease-in-out
        transform
        hover:-translate-y-1
        overflow-hidden
        cursor-pointer
        border border-gray-100
      "
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="h-48 w-full">
        <img
          src={article.imageUrl}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Unavailable';
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs font-semibold uppercase text-blue-600 mb-2 tracking-wider">
          {article.category}
        </p>

        {/* Title */}
        <h2 className="text-xl font-extrabold text-gray-900 leading-tight mb-4 line-clamp-3">
          {article.title}
        </h2>

        {/* Meta (Author/Date) */}
        <p className="text-sm text-gray-500 font-medium">
          by {article.author} {article.date}
        </p>
      </div>
    </div>
  );
};

// --- Main Application Component ---
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen custom-gradient-bg font-sans p-4 sm:p-8 lg:p-12">
        <header className="mb-10 mt-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
            Latest Blogs
          </h1>
          <p className="text-lg text-white/90">
            Discover insights, case studies, and product updates.
          </p>
        </header>
        
        {/* Responsive Article Grid */}
        <div className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          sm:gap-10
        ">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {/* Optional Footer/Padding */}
        <div className="py-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;