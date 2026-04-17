import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200">
      <Navigation />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
