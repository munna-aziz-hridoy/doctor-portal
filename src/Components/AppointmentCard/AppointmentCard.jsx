import React from "react";

const AppointmentCard = ({ appointment, setService }) => {
  const { name, slots } = appointment;
  return (
    <div className="card w-[95%] bg-base-100 shadow-xl">
      <div className="card-body items-center gap-5">
        <h2 className="card-title text-primary capitalize font-semibold text-xl">
          {name}
        </h2>
        <p>
          {slots.length ? (
            <span>{slots?.[0]}</span>
          ) : (
            <span className="text-red-300  font-medium">
              No slots Available
            </span>
          )}
        </p>
        <p className="text-xs">
          {slots.length ? slots.length : "0"} SPACE{slots.length > 1 ? "S" : ""}{" "}
          AVAILABLE
        </p>
        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            onClick={() => setService(appointment)}
            className={`btn btn-primary hover:bg-accent  from-secondary to-primary text-white font-semibold uppercase tracking-wider ${
              slots.length ? "bg-gradient-to-r" : "btn-disabled bg-gray-300"
            }`}
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
