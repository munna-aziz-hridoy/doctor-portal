import React from "react";

const InfoCard = ({ img, gradient, text }) => {
  return (
    <div
      className={`card lg:card-side shadow-xl px-6 py-10 ${
        gradient ? "bg-gradient-to-r" : "bg-accent"
      } from-secondary to-primary`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-slate-100 font-bold justify-center lg:justify-start">
          {text?.[0]}
        </h2>
        <p className="text-center lg:text-left text-slate-200">{text?.[1]}</p>
      </div>
    </div>
  );
};

export default InfoCard;
