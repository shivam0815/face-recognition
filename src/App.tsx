import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import Security from "./pages/Security";
import Technology from "./pages/Technology";
import Partnership from "./pages/Partnership";
import Investors from "./pages/Investors";
import AntiMisuse from "./pages/AntiMisuse";

import Careers from "./pages/Careers";




import Problem from "./pages/Problem";
import NotSurveillance from "./pages/NotSurveillance";

import Ethics from "./pages/Ethics";
import Vision from "./pages/Vision";
import ScaleImpact from "./pages/ScaleImpact";
import GovernmentPolicy from "./pages/GovernmentPolicy";
import Roadmap from "./pages/Roadmap";
import Important from "./pages/Important";

// ...


export default function App() {
  const { pathname, hash } = useLocation();

  // Scroll handling (hash + page change)
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/security" element={<Security />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/investors" element={<Investors />} />
<Route path="/not-surveillance" element={<NotSurveillance />} />
<Route path="/anti-misuse" element={<AntiMisuse />} />
<Route path="/about" element={<About />} />
<Route path="/problem" element={<Problem />} />
<Route path="/technology" element={<Technology />} />
<Route path="/security" element={<Security />} />
<Route path="/ethics" element={<Ethics />} />
<Route path="/vision" element={<Vision />} />
<Route path="/scale-impact" element={<ScaleImpact />} />
<Route path="/government-policy" element={<GovernmentPolicy />} />
<Route path="/roadmap" element={<Roadmap />} />
<Route path="/important" element={<Important />} />
<Route path="/careers" element={<Careers />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
