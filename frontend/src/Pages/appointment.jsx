import AppointmentCard from "../Components/AppointmentCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyAppointments = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:3000/api/myappointments",
        {
          headers: {
            authorization: token,
          },
        },
      );

      setAppointments(response.data.appointments);
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyAppointments();
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>
    );
  }

  if (appointments.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        No Appointments Found
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F9FF",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0D6EFD",
          marginBottom: "35px",
        }}
      >
        📅 My Appointments
      </h1>

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {appointments.map((item) => (
          <AppointmentCard
            key={item._id}
            appointment={item}
            getMyAppointments={getMyAppointments}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentPage;
