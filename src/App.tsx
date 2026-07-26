import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Services } from "./components/AboutServices";
import Portfolio from "./components/Portfolio";
import { Benefits, Certifications, Process, Resume, Testimonials } from "./components/Trust";
import { Contact, FAQ, FinalCTA, Schedule } from "./components/Engage";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  // Read the class the inline script in index.html already applied, so the
  // first render matches the DOM and there is no theme flash.
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false,
  );
  const mounted = useRef(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    // Don't overwrite storage on the very first render — only on user action.
    if (mounted.current) localStorage.setItem("alc-theme", dark ? "dark" : "light");
    mounted.current = true;
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-navy-950 antialiased selection:bg-emerald-100 dark:bg-[#070f1c] dark:text-white">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Benefits />
        <Process />
        <Certifications />
        <Testimonials />
        <Resume />
        <Schedule />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
