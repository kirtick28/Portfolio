import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell min-h-screen">
      <Navigation />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
