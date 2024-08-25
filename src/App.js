import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import useIntersectionObserver from "./hooks/intersectionObs";

function App() {
  const [loading, setLoading] = useState(true);

  useIntersectionObserver(!loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App bg-[#02021b]">
      {loading ? (
        <Logo />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
