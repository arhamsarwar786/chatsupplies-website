import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";    // This is from Pic1
import FeaturedProducts from "./Component/FeaturedProducts"; // This is from Pic2
import ShopByCategory from './Component/ShopByCategory';    // This is from pic3
import WhyChooseUs from './Component/WhyChooseUs'; // This is from Pic 3, below ShopByCategory
import Testimonials from './Component/Testimonial'; // This is from Pic 4
import CallToAction from './Component/CallToAction'; // This is from Pic 4, below Testimonials
import Footer from './Component/Footer'; // This is from Pic 5



export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ShopByCategory />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}