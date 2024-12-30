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
        title="Think and Grow Rich"
        toptext="Best Management"
        desc="Welcome to ExBook, your one-stop destination for all your book needs. Explore our vast collection of books, spanning various genres and authors. Immerse yourself in captivating blog posts, insightful reviews, and engaging author interviews. Join our passionate community of book enthusiasts and embark on a literary journey like no other.."
        name1="Napoleon Hill "
        name2="Business & Strategy"
      />
      <Main />
      <Newsletter />
      <AdBanner />
      <Footer />
    </div>
  );
};

export default Home;
