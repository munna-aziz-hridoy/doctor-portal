import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reviews from "./Pages/Reviews/Reviews";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home Footer={Footer} />} />
        <Route path="/about" element={<About Footer={Footer} />} />
        <Route path="/appointment" element={<Appointment Footer={Footer} />} />
        <Route path="/reviews" element={<Reviews Footer={Footer} />} />
        <Route path="/contact" element={<Contact Footer={Footer} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
