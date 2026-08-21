import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';
import About from './components/About';
import Work from './components/Work';
import GifSection from './components/GifSection';
import BrandShowcase from './components/BrandShowcase';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import Services from './components/Services';
import Tools from './components/Tools';
import Inside from './components/Inside';
import BrandingCover from './components/BrandingCover';
import MentionShowcase from './components/MentionShowcase';
import MentionVisuals from './components/MentionVisuals';
import MentionWireframeSection from './components/MentionWireFrameSection';
import AwardsSection from './components/AwardSection';
import AppsShowcase from './components/AppsShowcase';
import B from './components/B';
import ProjectHighlights from './components/ProjectHighlights';
import Showreel from './components/Showreel';

// Main Content Component
function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <div className="grain-overlay min-h-screen bg-transparent relative z-0">

          {/* SVG Filter */}
          <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
            <defs>
              <filter id="roughen">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>

          {/* CONTENT */}
          <div className="relative z-10"> 
            <Hero />

            <About />
            <Services />
            <Tools/>
            <Inside />
            <BrandingCover/>
            <MentionShowcase />
            <MentionVisuals/>
            <GifSection/>
            <AwardsSection/>
            <AppsShowcase/>
            
            <ProjectHighlights />
            <Showreel />
          </div>
        </div>
      )}
    </>
  );
}

// Router Wrapper
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;