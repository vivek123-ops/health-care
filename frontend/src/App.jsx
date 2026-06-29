import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Verify from "./Pages/Verify";
import Profile from "./Pages/Profile";
import DoctorProfile from "./Pages/DoctorProfile";
import Doctors from "./Pages/DoctorPage";
import BookAppointment from "./Pages/Bookappointment";
import AppointmentPage from "./Pages/appointment";
import Emergency from "./Pages/EmergencyPage";
import EmergencySuccess from "./Pages/ConfirmPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/emergenceSuccess" element={<EmergencySuccess />} />
        <Route
          path="/bookappointment/:doctorId"
          element={<BookAppointment />}
        />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />
      </Routes>
    </>
  );
};

export default App;
