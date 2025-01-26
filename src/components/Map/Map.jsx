import React from "react";
import "./Map.css";

const Location = () => {
  return (
    <div className="location-section">
      <h2 className="location-title">OUR LOCATION</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.4500260383333!2d22.18392417811426!3d65.60197032547974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f5d08d236de55%3A0x84fdf8fd4f3a1bd7!2sHerts%C3%B6n!5e0!3m2!1sen!2sse!4v1697999696252!5m2!1sen!2sse"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google-map"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;