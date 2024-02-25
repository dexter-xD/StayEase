import React from "react";
import Hero from "../components/Hero";
import TopList from "../components/TopList";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopList />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
