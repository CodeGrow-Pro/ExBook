import React from "react";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Main from "../component/Main";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        imgsrc="https://bookland.dexignzone.com/react/demo/static/media/banner-media3.23487455a35fbb0c6504.png"
        title="Think and Grow Rich"
        toptext = "Best Management"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero quo dignissimos 
                    ratione incidunt sequi? Beatae explicabo voluptatibus a
                    met veniam deserunt aliquid, magni facilis quidem possimus ratione soluta facere culpa."
        name1="Napoleon Hill "
        name2="Business & Strategy"
      />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
