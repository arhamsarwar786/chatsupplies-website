import HeroSection from './HeroSection';
import OurCustomer from './OurCustomer';
import Footer from '../Components/Footer';
import Navbar from '../Components/navbar';
import Different from './Difference';
export default function Page() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Different/>
      <OurCustomer/>

      <Footer/>
    </div>
  );
}