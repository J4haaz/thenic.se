import React from "react";
import "./Gallery.css";

const images = [
  "/assets/images/image17.png",
  "/assets/images/image16.png",
  "/assets/images/image15.png",
  "/assets/images/image14.png",
  "/assets/images/image13.png",
  "/assets/images/image12.png",
  "/assets/images/image11.png",
  "/assets/images/image10.png",
  "/assets/images/image9.png",
  "/assets/images/image8.png",
  "/assets/images/image7.png",
  "/assets/images/image6.png",
  "/assets/images/image5.png",
  "/assets/images/image4.png",
  "/assets/images/image3.png",
  "/assets/images/image2.png",
  "/assets/images/image1.png"
];

const Gallery = () => {
    return (
      <div className="gallery-section">
        <div className="content-wrapper">
          <div className="highlight-section">
            <div className="highlight">
              <img
                src="/assets/images/separator.png"
                alt="Separator"
                className="separator"
              />
              <h2 className="highlight-title">Quranic Verse Of The Day</h2>
              <p className="highlight-text">Surah Al-Isra, Verse 37</p>
              <p className="highlight-arabic">ولا تمشِ فِي الأرضِ مَرَحًا إنكَ لَن تَخْرَقَ الأرضَ وَلَن تَبلُغَ الجِبَالَ طولاً
              </p>
              <p className="highlight-translation">
                And do not walk on the earth arrogantly. Surely you can neither crack the earth nor stretch to the height of the mountains.
              </p>
            </div>
            <div className="highlight">
              <img
                src="/assets/images/separator.png"
                alt="Separator"
                className="separator"
              />
              <h2 className="highlight-title">Hadith Of The Day</h2>
              <p className="highlight-text">
                A man came to the Prophet and asked, "O Allah's Apostle! Which charity is the most superior in reward?" He replied, "The charity which you practice while you are healthy, niggardly and afraid of poverty and wish to become wealthy. Do not delay it to the time of approaching death and then say, 'Give so much to such and such, and so much to such and such.' And it has already belonged to such and such (as it is too late)."
              </p>
              <p className="highlight-source">Sahih Bukhari</p>
            </div>
          </div>
          <h2 className="gallery-title">GALLERY</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Gallery;
