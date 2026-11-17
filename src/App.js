import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import NotFound from "./components/NotFound";
import Preloader from "./components/site/Preloader";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import About from "./components/site/About";
import Work from "./components/site/Work";
import Services from "./components/site/Services";
import Reel from "./components/site/Reel";
import Contact from "./components/site/Contact";
import ScrollIndicator from "./components/site/ScrollIndicator";
import ProjectsPage from "./components/site/ProjectsPage";
import ProjectDetail from "./components/site/ProjectDetail";
import PageLine from "./components/site/PageLine";
import { scrollToTarget, useSmoothScroll } from "./lib/smoothScroll";
import { PageTransitionProvider } from "./lib/pageTransition";

function Home() {
  // Datang dari halaman lain dengan link seperti "/#work": scroll ke section itu
  // setelah konten selesai dirender.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === "#top") return;
    const t = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) scrollToTarget(el, { immediate: true });
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      <Header />
      <ScrollIndicator />
      <main>
        <Hero />
        {/* Garis meliuk berjalan di belakang semua section dari About sampai Reel */}
        <div className="relative">
          <PageLine />
          <div className="relative">
            <About />
            <Services />
            <Work />
            <Reel />
          </div>
        </div>
      </main>
      <Contact />
    </MotionConfig>
  );
}

// key = id: pindah dari satu project ke project lain memasang ulang halaman
// (animasi judul & progress "Next project" mulai dari awal).
function ProjectDetailRoute() {
  const { id } = useParams();
  return <ProjectDetail key={id} />;
}

function App() {
  useSmoothScroll();
  return (
    <Router>
      {/* Transisi antar halaman (panel menyapu dari kanan) */}
      <PageTransitionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransitionProvider>
    </Router>
  );
}

export default App;
