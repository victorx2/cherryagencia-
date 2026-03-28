import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import About from "./components/About";
import ValuesBenefits from "./components/ValuesBenefits";
import PhotographyGalleries from "./components/PhotographyGalleries";
import VideoShowcase from "./components/VideoShowcase";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cherry-red focus:text-white focus:rounded-lg"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ServicesGrid />
        <About />
        <ValuesBenefits />
        <PhotographyGalleries />
        <VideoShowcase />
      </main>
      <Footer />
    </>
  );
}

export default App;
