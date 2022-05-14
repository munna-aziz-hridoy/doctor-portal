import React from "react";

const ServicesCard = ({ img, text }) => {
  return (
    <div className={`card shadow-lg px-6 py-10  from-secondary to-primary`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-center text-xl text-accent font-bold justify-center lg:justify-start">
          {text?.[0]}
        </h2>
        <p className="text-center text-accent">{text?.[1]}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
