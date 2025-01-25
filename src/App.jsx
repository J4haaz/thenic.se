import React from 'react';
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection';
import FacebookFeeds from './components/FacebookFeeds/FacebookFeeds';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FacebookFeeds />
    </div>
  );
}

export default App;
