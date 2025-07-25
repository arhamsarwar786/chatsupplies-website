import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


import HeroSection from "./Home/HeroSection";    
import FeaturedProducts from "./Home/FeaturedProducts"; 
import Subscription from './Home/Subscription';
import ShopByCategory from './Home/ShopByCategory';   
import WhyChooseUs from './Home/WhyChooseUs'; 
import Testimonials from './Home/Testimonial'; 
import CallToAction from './Home/CallToAction'; 
import Footer from './Components/Footer'; 


export default function Home() {
  return (
    <>
     
      <HeroSection />
      <FeaturedProducts />
      <Subscription />
      <ShopByCategory />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}