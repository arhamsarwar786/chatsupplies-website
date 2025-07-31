import Navbar from "../Components/Navbar";  
import Footer from "../Components/Footer";
import HeroSection from "./HeroSection";
import Optimization from "./Optimization";
import Personalization from "./Personalization";
import DynamicPricingOptimization from "./DynamicPricingOptimization";
import ProductRecommendationSystem from './ProductRecommendationSystem'
import Automated from "./Automated";
import Store from "./Store";

export default function ECommercePage() {

  return <>
<Navbar/>
<HeroSection/>
<Optimization/>
<Personalization/>
<DynamicPricingOptimization/>
<ProductRecommendationSystem/>
<Automated/>
<Store/>
<Footer/>
</>

}
