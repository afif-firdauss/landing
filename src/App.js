import CoreValueSection from "./components/CoreValueSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SpecialitySection from "./components/SpecialitySection";
import WhoWeAreSection from "./components/WhoWeAreSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <CoreValueSection />
      <SpecialitySection />
      <Footer />
    </div>
  );
}

export default App;
