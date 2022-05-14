import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = ({ Footer }) => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </>
  );
};

export default Appointment;
