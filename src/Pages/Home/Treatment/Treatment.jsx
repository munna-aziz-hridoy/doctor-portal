import React from "react";

import treatmentImg from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Treatment = () => {
  return (
    <div className="hero min-h-[730px]">
      <div className="hero-content flex-col lg:flex-row gap-28">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={treatmentImg}
            className="max-w-full rounded-lg shadow"
            alt=""
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-accent capitalize">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-accent">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>get treatment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
