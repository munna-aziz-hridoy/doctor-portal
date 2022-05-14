import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";

const BookingModal = ({ service, date, setService }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { name, slots } = service;

  const handleBooking = (data) => {
    const inputData = { service: name, bookingDate: date, ...data };
    console.log(inputData);
    reset();
    setService(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-lg">
            Booking for: <span className="text-primary font-bold">{name}</span>
          </h3>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="flex flex-col gap-5 pt-10"
          >
            <input
              value={format(date, "PPP")}
              disabled
              className="input input-bordered input-accent w-full h-10"
            />

            <select
              {...register("timeSlot", { required: true })}
              className="select select-accent w-full"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.timeSlot ? (
              <p className="text-red-300 text-xs p-0 m-0">
                Please Enter Your time slot
              </p>
            ) : (
              ""
            )}
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Full name"
              className="input input-bordered input-accent w-full h-10"
            />
            {errors.name ? (
              <p className="text-red-300 text-xs p-0 m-0">
                Please Enter Your name
              </p>
            ) : (
              ""
            )}
            <input
              {...register("phone", { required: true })}
              type="text"
              placeholder="Phone number"
              className="input input-bordered input-accent w-full h-10"
            />
            {errors.phone ? (
              <p className="text-red-300 text-xs p-0 m-0">
                Please Enter Your Phone
              </p>
            ) : (
              ""
            )}
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input input-bordered input-accent w-full h-10"
            />
            {errors.email ? (
              <p className="text-red-300 text-xs p-0 m-0">
                Please Enter Your Email
              </p>
            ) : (
              ""
            )}
            <input
              type="submit"
              value="Submit"
              className="text-white bg-accent w-full h-11 rounded-lg mt-8 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
