import React from 'react';
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection';
import FacebookFeeds from './components/FacebookFeeds/FacebookFeeds';
import MissionSection from './components/MissionSection/MissionSection';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FacebookFeeds />
      <MissionSection />
    </div>
  );
}

export default App;
