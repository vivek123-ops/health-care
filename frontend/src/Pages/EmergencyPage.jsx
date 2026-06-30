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

    if (!navigator.geolocation) {
      alert("Geolocation is not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const token = localStorage.getItem("token");

          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
          console.log("Reason:", reason);

          const response = await axios.post(
            "https://health-care-3-0hjr.onrender.com/api/emergency",
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

          console.log("Response:", response.data);

          alert(response.data.message);

          navigate("/emergenceSuccess");
        } catch (error) {
          console.log("Axios Error:", error);

          if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Data:", error.response.data);

            alert(error.response.data.message);
          } else if (error.request) {
            console.log("No Response:", error.request);

            alert("Backend server is not responding.");
          } else {
            console.log("Error:", error.message);

            alert(error.message);
          }
        }
      },
      (error) => {
        console.log("Location Error:", error);

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
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "red",
          marginBottom: "20px",
        }}
      >
        🚨 Emergency SOS
      </h2>

      <label>
        <b>Select Emergency Reason</b>
      </label>

      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          marginBottom: "25px",
          borderRadius: "8px",
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
