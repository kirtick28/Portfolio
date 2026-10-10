import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white selection:bg-[#f72585] selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
