import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[530px] md:min-h-[838px] bg-hero-bg bg-cover justify-center p-2">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <img src={chair} className="max-w-full rounded-lg shadow" alt="" />
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-accent">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
