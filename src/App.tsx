import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <MetricsStrip />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
