import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;