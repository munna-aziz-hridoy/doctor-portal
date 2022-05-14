import React from "react";

const ReviewCard = () => {
  return (
    <div className="card max-w-[24rem] bg-base-100 shadow-lg">
      <div className="card-body">
        <p className="text-accent">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className="card-actions justify-start items-center gap-5 my-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
            </div>
          </div>
          <div>
            <p className="text-accent font-semibold text-xl capitalize">
              Winson Herry
            </p>
            <span className="capitalize">california</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
