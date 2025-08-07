import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


 
import Bubbles from './Home/Bubbles'
import Animated from './Home/Animated';
import WhyChoose from './Home/WhyChoose';
export default function Home() {
  return (
    <>
     
      
      <Animated/>
      <Bubbles/>
      <WhyChoose/>
      
    </>
  );
}