import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorEffects from './components/CursorEffects';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 cursor-none">
      <CursorEffects />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;