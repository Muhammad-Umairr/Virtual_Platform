import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import Price from "./components/Price";
import Testimonails from "./components/Testimonails";
import WorkFlow from "./components/WorkFlow";

export default function App() {
  return (
   <div>
  <Navbar/>
  <div className="mx-auto max-w-7xl pt-20 px-6">
  <HeroSection/>
  <FeatureSection/>
  <WorkFlow/>
  <Price/>
  <Testimonails/>
  <Footer/>
  </div>

   </div>
  );
}
