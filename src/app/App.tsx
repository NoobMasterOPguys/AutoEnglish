import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { WhyChoose } from "./components/WhyChoose";
import { LearningJourney } from "./components/LearningJourney";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AIAssistant } from "./components/AIAssistant";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChoose />
      <LearningJourney />
      
      <Gallery />
      <Contact />
      <Footer />
      <AIAssistant />
    </div>
  );
}
