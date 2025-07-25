"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";

const ProductCard = ({ iconClass, iconBgClass = 'purpleBg', title, description, price, features, rating, reviews }) => {
  const bgColorMap = {
    purpleBg: "bg-[#5648E6]",
    orangeBg: "bg-[#F87A13]",
    greenBg: "bg-[#0EA565]",
    redBg: "bg-[#ED4565]",
    pinkBg: "bg-[#B751E0]",
    blueBg: "bg-[#0FACD9]"
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
      <div className={`p-2 w-16 h-16 rounded-xl inline-flex justify-center items-center ${bgColorMap[iconBgClass] || ''}`}>
        <i className={`${iconClass} text-white text-xl`}></i>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">{title}</h3>
      <p className="text-gray-500 text-base leading-snug">{description}</p>
      <div className="flex justify-between items-center my-2">
        <p className="text-indigo-600 text-xl font-bold">{price}</p>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <span className="text-yellow-400">★</span> {rating} ({reviews})
        </div>
      </div>
      <ul className="list-none p-0 mb-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 mb-1">
            <i className="fas fa-check text-emerald-500 mr-2 text-sm"></i>
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-indigo-600 text-white font-semibold text-sm py-2 px-4 rounded-md shadow w-full hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
        Learn More
      </button>
    </div>
  );
};

const products = [
  {
    iconClass: 'fas fa-robot',
    iconBgClass: 'purpleBg',
    title: 'Smart Chatbot Pro',
    description: 'Advanced AI chatbot with natural language processing and machine learning capabilities.',
    price: '$99/mo',
    features: ['Unlimited conversations', 'Multi-language support', 'Advanced analytics'],
    rating: 4.9,
    reviews: 120,
  },
  {
    iconClass: 'fas fa-microphone-alt',
    iconBgClass: 'orangeBg',
    title: 'Voice AI Assistant',
    description: 'Intelligent voice recognition system with real-time speech processing and response.',
    price: '$149/mo',
    features: ['Voice recognition', 'Text-to-speech', 'Custom voice models'],
    rating: 4.8,
    reviews: 89,
  },
  {
    iconClass: 'fas fa-chart-line',
    iconBgClass: 'greenBg',
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and insights for your AI chat performance and customer interactions.',
    price: '$79/mo',
    features: ['Real-time metrics', 'Custom reports', 'Data export'],
    rating: 4.7,
    reviews: 156,
  },
  {
    iconClass: 'fas fa-puzzle-piece',
    iconBgClass: 'pinkBg',
    title: 'Integration Suite',
    description: 'Seamlessly connect your AI chat solutions with popular business tools and platforms.',
    price: '$59/mo',
    features: ['100+ integrations', 'API access', 'Custom webhooks'],
    rating: 4.6,
    reviews: 94,
  },
  {
    iconClass: 'fas fa-shield-alt',
    iconBgClass: 'redBg',
    title: 'Security Pro',
    description: 'Enterprise-grade security features to protect your conversations and customer data.',
    price: '$199/mo',
    features: ['End-to-end encryption', 'GDPR compliance', 'Audit logs'],
    rating: 4.9,
    reviews: 67,
  },
  {
    iconClass: 'fas fa-mobile-alt',
    iconBgClass: 'blueBg',
    title: 'Mobile SDK',
    description: 'Native mobile SDK for iOS and Android to integrate AI chat into your mobile applications.',
    price: '$129/mo',
    features: ['iOS & Android', 'Native performance', 'Easy integration'],
    rating: 4.8,
    reviews: 112,
  },
];

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      pageNumbers.push(1);
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      if (start > 2) pageNumbers.push("...");
      for (let i = start; i <= end; i++) pageNumbers.push(i);
      if (end < totalPages - 1) pageNumbers.push("...");
      if (!pageNumbers.includes(totalPages)) pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      <section className="text-center bg-[#6633ff] pt-32 pb-12 relative z-[1]">
        <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">Our AI Products</h1>
        <p className="text-lg text-indigo-100 max-w-3xl mx-auto mb-8">
          Discover our comprehensive suite of AI-powered chat solutions designed to transform your customer experience.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center text-white font-semibold">
            <i className="fas fa-robot mr-2"></i>Smart AI
          </div>
          <div className="flex items-center text-white font-semibold">
            <i className="fas fa-shield-alt mr-2"></i>Secure
          </div>
          <div className="flex items-center text-white font-semibold">
            <i className="fas fa-rocket mr-2"></i>Fast Setup
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow px-8 py-5 w-full max-w-[1440px] mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mb-8">
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
            <select className="text-sm border border-gray-300 rounded px-4 py-2 text-gray-600 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Categories</option>
            </select>
          </div>
          <div>
            <select className="text-sm border border-gray-300 rounded px-4 py-2 text-gray-600 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Pricing</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          <select className="text-sm border border-gray-300 rounded px-4 py-2 text-gray-600 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option>Popular</option>
          </select>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {currentProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>

        <section className="flex justify-center items-center gap-2 mt-10 mb-16">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex justify-center items-center text-gray-500 bg-white rounded shadow ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          {getPageNumbers().map((num, i) => (
            num === '...'
              ? <span key={i} className="text-gray-500 px-1 w-10 text-center">...</span>
              : <button
                  key={num}
                  onClick={() => paginate(num)}
                  className={`w-10 h-10 rounded shadow text-sm font-medium ${currentPage === num ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  {num}
                </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex justify-center items-center text-gray-500 bg-white rounded shadow ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </section>
      </main>

      <section className="bg-indigo-600 text-white text-center px-8 py-16">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Start with our free trial and discover how AI can revolutionize your business communication.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
           <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                        Start Free Trial
                    </button>
                    <button className="bg-transparent text-white border-2 border-white font-semibold py-3 px-6 rounded-md hover:bg-white/10 transition-colors">
                        Schedule Demo
                    </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
