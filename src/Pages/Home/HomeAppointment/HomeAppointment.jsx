import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const HomeAppointment = () => {
  return (
    <div className="hero min-h-[500px] bg-white bg-appointment-bg bg-no-repeat bg-cover mb-48 mt-60">
      <div className="hero-content flex-col lg:flex-row p-0">
        <img
          src={doctor}
          className="max-w-[55%] mt-[-160px] hidden lg:block"
          alt=""
        />
        <div className="p-5">
          <h3 className="text-primary text-center lg:text-left uppercase font-semibold traking-wider text-lg my-8">
            appointment
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-100 capitalize text-center lg:text-left">
            Make an appointment Today
          </h1>
          <p className="py-6 my-5 text-slate-200 text-center lg:text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex lg:block justify-center items-center">
            <PrimaryButton>get appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
