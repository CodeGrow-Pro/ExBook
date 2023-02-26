import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Hero from "../component/Hero";

const About = () => {
  return (
    <div>
      <Navbar />
      <Header heading="About Us" />
      <Hero
        imgsrc="https://bookland.dexignzone.com/react/demo/static/media/banner-media2.2097107a6e8c5f803b5b.png"
        title="ExBook Is Best Choice For Learners"
        desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted"
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
