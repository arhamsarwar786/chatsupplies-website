import HeroSection from "../Components/Reusable Pages/Automated";
import Optimization from "../Components/Reusable Pages/Optimization";
import Personalization from "../Components/Reusable Pages/Personalization";
import DynamicPricingOptimization from "../Components/Reusable Pages/DynamicPricingOptimization";
import ProductRecommendationSystem from "../Components/Reusable Pages/ProductRecommendationSystem";
import Automated from "../Components/Reusable Pages/Automated";
import Store from "../Components/Reusable Pages/Store";
import Footer from "../Components/Footer";

export const  servicePages = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    Components: [
      <HeroSection key="hero" />,
      <Personalization key="personalization" />,
      <Automated key="automated" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "ppc-advertising",
    title: "PPC Advertising",
    Components: [
      <HeroSection key="hero" />,
      <DynamicPricingOptimization key="pricing" />,
      <Optimization key="optimization" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "e-commerce-optimization",
    title: "E-commerce Optimization",
    Components: [
      <HeroSection key="hero" />,
      <Optimization key="optimization" />,
      <Store key="store" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    Components: [
      <HeroSection key="hero" />,
      <Automated key="automated" />,
      <ProductRecommendationSystem key="product" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "crm-erp-solutions",
    title: "CRM & ERP Solutions",
    Components: [
      <HeroSection key="hero" />,
      <Personalization key="personalization" />,
      <Automated key="automated" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "customer-engagement",
    title: "Customer Engagement",
    Components: [
      <HeroSection key="hero" />,
      <ProductRecommendationSystem key="product" />,
      <Personalization key="personalization" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    Components: [
      <HeroSection key="hero" />,
      <Optimization key="optimization" />,
      <DynamicPricingOptimization key="pricing" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "smart-web-design",
    title: "Smart Web Design",
    Components: [
      <HeroSection key="hero" />,
      <Personalization key="personalization" />,
      <Store key="store" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    Components: [
      <HeroSection key="hero" />,
      <Optimization key="optimization" />,
      <Automated key="automated" />,
      <Footer key="footer" />,
    ],
  },
  {
    slug: "digital-infrastructure",
    title: "Digital Infrastructure",
    Components: [
      <HeroSection key="hero" />,
      <Store key="store" />,
      <DynamicPricingOptimization key="pricing" />,
      <Footer key="footer" />,
    ],
  },
];
