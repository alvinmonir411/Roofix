import { ToastContainer } from "react-toastify";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <WhyChooseUs />
      <Pricing />
    </div>
  );
}
