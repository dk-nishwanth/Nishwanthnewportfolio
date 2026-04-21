import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import { lazy, Suspense } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy load pages for code splitting
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DesignsPage = lazy(() => import("./pages/DesignsPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-shift-orange mx-auto mb-4"></div>
        <p className="text-shift-black/60 font-mono text-sm">Loading page...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative overflow-x-hidden">
        <LoadingScreen />
        
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-shift-orange z-[100] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            } />
            <Route path="/designs" element={
              <Suspense fallback={<PageLoader />}>
                <DesignsPage />
              </Suspense>
            } />
            <Route path="/skills" element={
              <Suspense fallback={<PageLoader />}>
                <SkillsPage />
              </Suspense>
            } />
            <Route path="/education" element={
              <Suspense fallback={<PageLoader />}>
                <EducationPage />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            } />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
      <SpeedInsights />
    </Router>
  );
}
