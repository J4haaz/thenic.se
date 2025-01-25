import React, { useState } from "react";
import "./FacebookFeeds.css";

const FacebookFeeds = () => {
  const [selectedFeed, setSelectedFeed] = useState(null);

  const feeds = [
    {
      id: 1,
      title: "",
      image: "./../assets/images/post1.png",
      content: `
      المركز الإسلامي في نوربوتن يدعوكم لحضور أمسية ثقافية يقدمها ويديرها:
      الدكتور أحمد الرجال
      حيث سيتم يتم فيها عرض ومناقشة كتاب:
      قد أكون مخطئاً وحكم أخرى من الحياة للكاتب السويدي
      Björn Natthiko Lindeblad
      المكان: Järvstigen 14, 97453 Luleå
      التاريخ:
      السبت 18 كانون الثاني/ يناير.
      الساعة الخامسة مساءً.
      الدعوة عامة للرجال والنساء.`
    },
    {
      id: 2,
      title: "",
      image: "./../assets/images/post2.png",
      content: `
      اجتماع تعريفي حول مشروع المسجد في لوليو.
      المركز الإسلامي في نوربوتن بالتعاون مع الحزب الاشتراكي الديمقراطي في لوليو يدعوكم لحضور اجتماع يتم فيه التعريف والمناقشة حول مشروع بناء مسجد لوليو.
      كل من لديه الاهتمام أو الرغبة في معرفة المزيد عن مشروع المسجد مرحب به لحضور هذا الاجتماع.
      معاً سنناقش عدة أمور من بينها:
      - ماهي آخر مستجدات المشروع.
      - كيف سيؤثر ذلك على سكان هيرتشون.
      - ماهو الجدول الزمني لإتمام المشروع. جمعية S في منطقة هيرتشون ستقدم ضيافة فيكا ونتمنى حضور أكبر عدد ممكن. الدعوة عامة للجميع وأهلاً وسهلاً بكم.
      مكان الاجتماع:
      Aktivitetshuset Kubben
      Domherregränd 5
      Luleå ( i Hertsön)
      التاريخ:
      25 januari 2025
      Klockan: 13.00-15.00`,
    },
  ];

  const handleFeedClick = (feed) => {
    setSelectedFeed(feed);
  };

  const closeFeed = () => {
    setSelectedFeed(null);
  };

  return (
    <div className="facebook-feeds-container">
      {/* Prayer Timings Section */}
      <div className="prayer-timings">
        <img src="/assets/images/PrayerTimings.svg" alt="Prayer Timings" className="prayer-image" />
      </div>

      {/* Facebook Feeds Section */}
      <div className="facebook-feeds">
        <h2 className="facebook-feeds-title">FACEBOOK FEEDS</h2>
        <div className="feeds-list">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="feed-card"
              onClick={() => handleFeedClick(feed)}
            >
              <img src={feed.image} alt={feed.title} className="feed-image" />
              <h3 className="feed-title">{feed.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Details Overlay */}
      {selectedFeed && (
        <div className="feed-overlay">
          <div className="feed-details">
            <button className="close-button" onClick={closeFeed}>
              &times;
            </button>
            <img
              src={selectedFeed.image}
              alt={selectedFeed.title}
              className="feed-details-image"
            />
            <h3 className="feed-details-title">{selectedFeed.title}</h3>
            <p className="feed-details-content">{selectedFeed.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacebookFeeds;
