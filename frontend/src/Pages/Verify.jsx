import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const userData = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/verify", {
        ...userData,
        providedOtp: otp,
      });

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#EAF6FF,#FFFFFF)",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,.15)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#0D6EFD",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "30px",
          }}
        >
          🔐
        </div>

        <h2
          style={{
            marginTop: "15px",
            color: "#0D6EFD",
          }}
        >
          Verify OTP
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "14px",
            marginBottom: "25px",
          }}
        >
          Enter the 6-digit OTP sent to your registered email.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            style={{
              width: "100%",
              padding: "12px",
              textAlign: "center",
              fontSize: "20px",
              letterSpacing: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              outline: "none",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#0D6EFD",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Verify OTP
          </button>
        </form>

        <p
          style={{
            marginTop: "18px",
            fontSize: "14px",
          }}
        >
          Didn't receive OTP?
          <span
            style={{
              color: "#0D6EFD",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
};

export default Verify;
