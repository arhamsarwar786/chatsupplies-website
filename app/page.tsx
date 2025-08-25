import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

 
import Bubbles from './Home/Bubbles'
import Animated from './Home/Animated';
import WhyChoose from './Home/WhyChoose';
import PaymentPlan from './Home/PaymentPlan';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
export default function Home() {
  return (
    <>
    
    <Navbar/>
      <Animated/>
      <Bubbles/>
      <WhyChoose/>
      <PaymentPlan/>
      <Footer/>
    </>
  );
}