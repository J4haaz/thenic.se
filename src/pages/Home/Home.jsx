import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import PrayerTimings from '../../components/PrayerTimings/PrayerTimings';
import FacebookFeeds from '../../components/FacebookFeeds/FacebookFeeds';
import MissionSection from '../../components/MissionSection/MissionSection';
import DailyContent from '../../components/DailyContent/DailyContent';
import Gallery from '../../components/Gallery/Gallery';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <PrayerTimings />
      <FacebookFeeds />
      <MissionSection />
      <DailyContent />
      <Gallery />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
