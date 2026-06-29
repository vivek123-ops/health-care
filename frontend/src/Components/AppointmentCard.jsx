import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppointmentCard = ({ appointment, getMyAppointments }) => {
  const navigate = useNavigate();
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#ffc107";
      case "Accepted":
        return "#28a745";
      case "Rejected":
        return "#dc3545";
      case "Completed":
        return "#0D6EFD";
      default:
        return "#6c757d";
    }
  };

  // cancel appointment
  const handleCancel = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:3000/api/cancelappointment/${id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        },
      );
      alert(response.data.message);
      getMyAppointments();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 5px 15px rgba(0,0,0,.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <img
          src={
            appointment.doctorId?.profileImage ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Doctor"
        />

        <div>
          <h2>{appointment.doctorId.username}</h2>

          <p>
            <b>Specialist:</b> {appointment.doctorId.specialist}
          </p>

          <p>
            <b>Hospital:</b> {appointment.doctorId.hospital}
          </p>

          <p>
            <b>Date:</b> {appointment.appointmentDate}
          </p>

          <p>
            <b>Time:</b> {appointment.appointmentTime}
          </p>

          <p>
            <b>Reason:</b> {appointment.reason}
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <span
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            background: getStatusColor(appointment.status),
            color: "white",
            fontWeight: "bold",
          }}
        >
          {appointment.status}
        </span>

        <br />
        <br />

        {appointment.status !== "Cancelled" &&
          appointment.status !== "Completed" && (
            <button
              onClick={() => handleCancel(appointment._id)}
              style={{
                padding: "10px 20px",
                background: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cancel Appointment
            </button>
          )}
      </div>
    </div>
  );
};

export default AppointmentCard;
