import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Hero from "../component/Hero";
import AdBanner from "../component/AdBanner";

const About = () => {
  return (
    <div>
      <Navbar />
      <Header heading="About Us" />
      <Hero
        imgsrc="https://bookland.dexignzone.com/react/demo/static/media/banner-media2.2097107a6e8c5f803b5b.png"
        title="About Us"
        desc="Welcome to ExBook, the ultimate destination for book lovers and learners worldwide. At ExBook, we are passionate about fostering a love for reading by providing a seamless and immersive online platform where readers can explore, discover, and connect.
Our mission is to curate a diverse collection of books, spanning various genres and interests, to cater to every kind of reader. Whether you're a lifelong learner, a casual reader, or someone seeking inspiration, ExBook is your go-to resource for knowledge and literary enrichment.
Driven by a team of passionate readers and technology enthusiasts, we aim to create not just a marketplace but a vibrant community. Here, book lovers can engage in meaningful discussions, share reviews, and celebrate the magic of storytelling together.
Join us on this exciting literary journey and experience the joy of reading with ExBook—your trusted companion in the world of books."
      />
      <Newsletter />
      <AdBanner />
      <Footer />
    </div>
  );
};

export default About;
