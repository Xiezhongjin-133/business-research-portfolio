import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import TransitionOne from './sections/TransitionOne';
import Problem from './sections/Problem';
import Industry from './sections/Industry';
import Deli from './sections/Deli';
import Benchmark from './sections/Benchmark';
import Theory from './sections/Theory';
import ResearchLibrary from './sections/ResearchLibrary';
import DataCenter from './sections/DataCenter';
import OurView from './sections/OurView';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      <div id="hero">
        <Hero />
      </div>

      <TransitionOne />

      <div id="problem">
        <Problem />
      </div>

      <div id="industry">
        <Industry />
      </div>

      <div id="deli">
        <Deli />
      </div>

      <div id="benchmark">
        <Benchmark />
      </div>

      <div id="theory">
        <Theory />
      </div>

      <div id="library">
        <ResearchLibrary />
      </div>

      <div id="data">
        <DataCenter />
      </div>

      <div id="view">
        <OurView />
      </div>

      <Footer />
    </div>
  );
}

export default App;
