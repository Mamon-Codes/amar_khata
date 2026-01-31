import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import Benefits from './components/Benefits';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Screenshots />
          <Benefits />
          <DownloadCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
