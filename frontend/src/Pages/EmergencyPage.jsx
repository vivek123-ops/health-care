import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleEmergency = () => {
    if (!reason) {
      alert("Please select an emergency reason.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const token = localStorage.getItem("token");

        await axios.post(
          "http://localhost:3000/api/emergency",
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            emergencyType: reason,
          },
          {
            headers: {
              authorization: token,
            },
          },
        );

        navigate("/emergenceSuccess");
      },
      () => {
        alert("Please allow location access.");
      },
    );
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "60px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,.2)",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", color: "red" }}>🚨 Emergency SOS</h2>

      <label>
        <b>Select Emergency Reason</b>
      </label>

      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        <option value="">Select Reason</option>
        <option value="Accident">🚗 Accident</option>
        <option value="Heart Attack">❤️ Heart Attack</option>
        <option value="Fire">🔥 Fire</option>
        <option value="Pregnancy">🤰 Pregnancy Emergency</option>
        <option value="Bleeding">🩸 Heavy Bleeding</option>
        <option value="Breathing Problem">🫁 Breathing Problem</option>
        <option value="Other">⚠ Other</option>
      </select>

      <button
        onClick={handleEmergency}
        style={{
          width: "100%",
          padding: "15px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        🚨 Send Emergency
      </button>
    </div>
  );
};

export default Emergency;
