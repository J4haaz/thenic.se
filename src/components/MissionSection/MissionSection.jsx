import React from "react";
import "./MissionSection.css";

const MissionSection = () => {
  return (
    <div className="mission-section">
      <div className="mission-text">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-content">
          Based on the statement of God Almighty, “O people! We created you all from a male and a female, and we made you into nations and tribes so that you may know one another” (Surah Al Hujrat Ayah 13). The Islamic Center (NIC) plays a vital and holistic role in bringing the views of the different spectrums of Islamic society together by creating a common language of dialogue without violating the right Islamic rules.
        </p>
        <p className="mission-highlight">
          We need your support to start building the masjid this year
        </p>
        <p className="mission-donate">
          Please help us with your donations on our donation website
        </p>
        <button className="donate-button">DONATE NOW</button>
      </div>
      <img
        src="./../assets/images/masjid.png"
        alt="Community Gathering"
        className="mission-image"
      />
    </div>
  );
};

export default MissionSection;
