import React from "react";
import DoctorCard from "../Components/DoctorCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const getDoctors = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://health-care-3-0hjr.onrender.com/api/getdoctors",
        {
          headers: {
            authorization: token,
          },
        },
      );

      setDoctors(response.data.doctors);
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div
      style={{
        padding: "40px",
        background: "#F5F9FF",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0D6EFD",
          marginBottom: "40px",
        }}
      >
        👨‍⚕️ Our Doctors
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "30px",
        }}
      >
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
