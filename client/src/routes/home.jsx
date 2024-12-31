import React from "react";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Main from "../component/Main";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import AdBanner from "../component/AdBanner";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Hero
        imgsrc="https://bookland.dexignzone.com/react/demo/static/media/banner-media3.23487455a35fbb0c6504.png"
        title="Your Gateway to the World of Books!"
        toptext="Welcome to ExBook"
        desc="Discover a treasure trove of literary gems at ExBook, where books meet passion. Whether you're looking to buy or rent, we offer an extensive collection of classic masterpieces and contemporary bestsellers to satisfy every reader's curiosity...."
        name1=""
        name2=""
      />
      <Main />
      <Newsletter />
      <AdBanner />
      <Footer />
    </div>
  );
};

export default Home;
