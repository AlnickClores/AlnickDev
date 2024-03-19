import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useIntersectionObserver from "./libs/intersectionObs";

function App() {
  useIntersectionObserver();
  return (
    <div className="App bg-[#02021b]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
