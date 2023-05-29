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
        desc="At ExBook, we are dedicated to bringing the joy of reading to book lovers around the world. Our mission is to provide a seamless and immersive online platform for book enthusiasts to explore, discover, and connect. With a team of passionate readers and technology enthusiasts, we strive to curate a diverse collection of books and create a welcoming community for literary discussions. Join us on this literary adventure as we celebrate the magic of books together."
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
