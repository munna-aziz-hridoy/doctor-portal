import axios from "axios";
import { useEffect, useState } from "react";

const useAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((result) => setAppointment(result.data));
  }, []);
  return [appointment, setAppointment];
};

export default useAppointment;
