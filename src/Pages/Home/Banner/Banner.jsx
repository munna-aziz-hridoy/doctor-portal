import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div className={`hero min-h-[838px]  justify-center p-2`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <img src={chair} className="max-w-full rounded-lg shadow" alt="" />
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-5xl font-bold text-accent">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary hover:bg-accent bg-gradient-to-r from-secondary to-primary text-white font-semibold uppercase tracking-wide">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
