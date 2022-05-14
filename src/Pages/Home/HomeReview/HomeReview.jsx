import React from "react";
import qoute from "../../../assets/icons/quote.svg";
import ReviewCard from "../../../Components/ReviewCard/ReviewCard";

const HomeReview = () => {
  const arr = [1, 2, 3];

  return (
    <div className="w-[93%] max-w-[1440px] mx-auto my-32">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-primary text-center lg:text-left uppercase font-semibold traking-wider text-lg my-8">
            testimonial
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-accent capitalize text-center lg:text-left">
            What Our Patients Says
          </h1>
        </div>
        <div className="flex justify-end">
          <img src={qoute} alt="" className="w-[100px] md:w-[190px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24 mt-20 justify-items-center gap-5">
        {arr.map((count) => (
          <ReviewCard key={count} />
        ))}
      </div>
    </div>
  );
};

export default HomeReview;
