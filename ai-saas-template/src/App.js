
// Component imports
import FAQ from './components/FAQ';
import FeaturesGrid from './components/FeaturesGrid';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import ProblemSolution from './components/ProblemSolution';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProblemSolution />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
