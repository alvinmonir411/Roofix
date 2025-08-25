import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Projects />
    </div>
  );
}
