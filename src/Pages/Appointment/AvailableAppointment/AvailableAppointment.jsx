import React, { useState } from "react";
import { format } from "date-fns";
import useAppointment from "../../../hooks/useAppointment";

import AppointmentCard from "../../../Components/AppointmentCard/AppointmentCard";
import BookingModal from "../../../Components/BookingModal/BookingModal";

const AvailableAppointment = ({ date }) => {
  const [appointment] = useAppointment();
  const [service, setService] = useState(null);

  const selectedDate = <span>{format(date, "PPP")}</span>;
  return (
    <div className="w-[93%] max-w-[1440px] mx-auto my-32">
      <h2 className="text-primary font-medium text-2xl text-center">
        Availabe Appointment on {selectedDate}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-20 gap-x-4 gap-y-8">
        {/* card */}

        {appointment.map((item) => (
          <AppointmentCard
            key={item._id}
            appointment={item}
            setService={setService}
          />
        ))}
      </div>
      {service ? (
        <BookingModal service={service} date={date} setService={setService} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AvailableAppointment;
