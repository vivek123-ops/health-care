import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
    phone: "",
    email: "",
    password: "",
    userType: "user",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  // backed code
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        userData,
      );
      alert(response.data.message);
      navigate("/verify", {
        state: userData,
      });
    } catch (error) {
      alert(error.response.data.message);
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
          background: "#fff",
          padding: "28px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#0D6EFD",
              color: "white",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
            }}
          >
            ❤️
          </div>

          <h2
            style={{
              marginTop: "12px",
              color: "#0D6EFD",
            }}
          >
            PulseCare
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            Create your healthcare account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="username"
            value={userData.username}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={userData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <select
            name="userType"
            value={userData.userType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="user">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              background: "#0D6EFD",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Create Account
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "18px",
            fontSize: "14px",
          }}
        >
          Already have an account?
          <Link to="/login">
            <span
              style={{
                color: "#0D6EFD",
                cursor: "pointer",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default Register;
