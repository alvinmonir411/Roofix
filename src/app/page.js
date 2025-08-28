import { ToastContainer } from "react-toastify";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs";
import Contact from "./Components/Contact";
import BlogSection from "./Components/BlogSection";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Testimonials />
      <WhyChooseUs />
      <BlogSection />
      <Contact />
    </div>
  );
}
