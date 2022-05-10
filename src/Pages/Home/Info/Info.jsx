import React from "react";
import InfoCard from "../../../Components/Header/InfoCard/InfoCard";

import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="w-[95%] max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24 gap-10">
      <InfoCard
        img={clock}
        gradient
        text={["Opening Hours", "Lorem Ipsum is simply dummy text of the pri"]}
      />
      <InfoCard
        img={marker}
        text={["Visit our location", "Brooklyn, NY 10036, United States"]}
      />
      <InfoCard
        img={phone}
        gradient
        text={["Contact us now", "+000 123 456789"]}
      />
    </div>
  );
};

export default Info;
