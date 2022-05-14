import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServicesCard from "../../../Components/ServicesCard/ServicesCard";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: fluoride,
      text: [
        "Fluoride Treatment",
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      ],
    },
    {
      _id: 2,
      img: cavity,
      text: [
        "Cavity Filling",
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      ],
    },
    {
      _id: 3,
      img: whitening,
      text: [
        "Teeth Whitening",
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      ],
    },
  ];

  return (
    <div className="w-[95%] max-w-[1440px] mx-auto my-32">
      <h3 className="text-primary uppercase font-semibold traking-wider text-center text-lg">
        our services
      </h3>
      <h2 className="text-4xl text-accent capitalize my-2 text-center">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24 gap-10 mt-20">
        {services.map((service) => (
          <ServicesCard
            key={service._id}
            img={service.img}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
