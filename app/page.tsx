import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


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
      <HeroSection />          {/* Corresponds to Pic 1 */}
      <FeaturedProducts />     {/* Corresponds to Pic 2 */}
      <ShopByCategory />       {/* Corresponds to Pic 3 (top half) */}
      <WhyChooseUs />          {/* Corresponds to Pic 3 (bottom half) */}
      <Testimonials />         {/* Corresponds to Pic 4 (top half) */}
      <CallToAction />         {/* Corresponds to Pic 4 (bottom half - "Ready to Transform Your Business?") */}
      <Footer />               {/* Corresponds to Pic 5 */}
    </>
  );
}