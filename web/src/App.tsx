import { Atmosphere } from "./components/Atmosphere";
import { Benefits } from "./components/Benefits";
import { Essence } from "./components/Essence";
import { Footer } from "./components/Footer";
import { Galleries } from "./components/Galleries";
import { GrainOverlay } from "./components/GrainOverlay";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { Profile } from "./components/Profile";
import { PortfolioBento } from "./components/PortfolioBento";
import { Videos } from "./components/Videos";
import { WorkLinks } from "./components/WorkLinks";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Atmosphere />
      <GrainOverlay />
      <main id="main">
        <Hero />
        <Pillars />
        <WorkLinks />
        <Essence />
        <Benefits />
        <Profile />
        <PortfolioBento />
        <Galleries />
        <Videos />
      </main>
      <Footer />
    </>
  );
}
