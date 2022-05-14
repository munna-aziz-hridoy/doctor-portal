import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-[530px] md:min-h-[838px] bg-hero-bg bg-cover justify-center p-0">
      <div className="hero-content flex-col lg:flex-row-reverse gap-9">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <img src={chair} className="max-w-full rounded-lg shadow" alt="" />
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 flex justify-center lg:justify-end">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            className="flex justify-center bg-white rounded-xl p-5 w-fit shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
