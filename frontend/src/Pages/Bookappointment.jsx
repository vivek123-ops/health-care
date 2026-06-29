import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://health-care-3-0hjr.onrender.com/api/bookappointment",
        {
          doctorId,
          appointmentDate: appointment.appointmentDate,
          appointmentTime: appointment.appointmentTime,
          reason: appointment.reason,
        },
        {
          headers: {
            authorization: token,
          },
        },
      );

      alert(response.data.message);

      navigate("/appointment");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F9FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "#fff",
          borderRadius: "15px",
          padding: "35px",
          boxShadow: "0 5px 20px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0D6EFD",
            marginBottom: "30px",
          }}
        >
          📅 Book Appointment
        </h1>

        <form onSubmit={handleSubmit}>
          <label>Appointment Date</label>

          <input
            type="date"
            name="appointmentDate"
            value={appointment.appointmentDate}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Appointment Time</label>

          <input
            type="time"
            name="appointmentTime"
            value={appointment.appointmentTime}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Reason For Visit</label>

          <textarea
            rows="5"
            name="reason"
            value={appointment.reason}
            onChange={handleChange}
            placeholder="Describe your health problem..."
            style={{
              ...inputStyle,
              resize: "none",
            }}
            required
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "20px",
              background: "#0D6EFD",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "20px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "15px",
};

export default BookAppointment;
