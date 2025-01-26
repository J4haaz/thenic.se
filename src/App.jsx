import React from 'react';
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection';
import FacebookFeeds from './components/FacebookFeeds/FacebookFeeds';
import MissionSection from './components/MissionSection/MissionSection';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Map/Map';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FacebookFeeds />
      <MissionSection />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
