import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import Extra from "./Extra";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Extra></Extra>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
