import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import RunningText from './components/RunningText';
import GifSection from './components/GifSection';
import PosterShowcase from './components/PosterShowcase';
import BrandShowcase from './components/BrandShowcase';
import SocialMedia from './components/SocialMedia';
import WebDevShowcase from './components/WebDevShowcase';
import UIUXShowcase from './components/UIUXShowcase';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Tools from './components/Tools';
import Inside from './components/Inside';
import BrandingCover from './components/BrandingCover';
import MentionShowcase from './components/MentionShowcase';
import MentionVisuals from './components/MentionVisuals';
import MentionWireframeSection from './components/MentionWireFrameSection';
import SPMB from './components/SPMB';
import InstagramGridShowcase from './components/StatsSection';
import AwardsSection from './components/AwardSection';

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

          {/* GRID OVERLAY */}
          <div
            className="fixed inset-0 pointer-events-none z-0 opacity-20"
            style={{
              backgroundImage: `
                                linear-gradient(to right, rgba(131, 21, 20, 0.15) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(131, 21, 20, 0.15) 1px, transparent 1px)
                            `,
              backgroundSize: '24px 24px',
            }}
          />

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

            {/* HANYA 2 RUNNING TEXT (POSTER & WORK) */}
            <About />
            {/*<RunningText text="poster" />*/}
            <Services />
            <Tools/>
            <Inside />
            <BrandingCover/>
            <MentionShowcase />
            <MentionVisuals/>
            <GifSection/>
            <InstagramGridShowcase/>
            <AwardsSection/>
            <SPMB/>
            <PosterShowcase />
            <SocialMedia />
            <WebDevShowcase />
            <UIUXShowcase />

            {/* NEW: Testimonials Section */}
            <Testimonials />

            <RunningText text="gallery" />
            <Gallery />

            {/* Contact & CV Section */}
            <section id="contact" className="py-20 bg-transparent">
              <div className="max-w-[1400px] mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#831514] mb-4">
                  get in touch
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  Got a project in mind or just want to say hi?
                  Drop a message or grab my CV.
                </p>

                <ContactForm />

                
              </div>
            </section>

            <Footer />
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