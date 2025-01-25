import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import FacebookFeeds from '../../components/FacebookFeeds/FacebookFeeds'
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <FacebookFeeds />
    </div>
  );
};

export default Home;
