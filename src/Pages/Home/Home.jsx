import React from "react";
import Banner from "./Banner/Banner";
import Treatment from "./Treatment/Treatment";
import Info from "./Info/Info";
import Services from "./Services/Services";
import HomeAppointment from "./HomeAppointment/HomeAppointment";
import HomeReview from "./HomeReview/HomeReview";
import HomeContact from "./HomeContact/HomeContact";

const Home = ({ Footer }) => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <Treatment />
      <HomeAppointment />
      <HomeReview />
      <HomeContact />
      <Footer />
    </>
  );
};

export default Home;
