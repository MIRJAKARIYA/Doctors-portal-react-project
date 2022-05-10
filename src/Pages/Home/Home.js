import React from "react";
import Footer from "../Shared/Footer";
import AnotherBanner from "./AnotherBanner";
import AppoinmenBanner from "./AppoinmenBanner";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";


const Home = () => {
  
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <AnotherBanner></AnotherBanner>
      <AppoinmenBanner></AppoinmenBanner>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
