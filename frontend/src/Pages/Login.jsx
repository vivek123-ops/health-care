import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // backend app
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://health-care-3-0hjr.onrender.com/api/login",
        loginData,
      );

      console.log(response.data);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      navigate("/");

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
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
          width: "420px",
          background: "white",
          padding: "35px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1
            style={{
              color: "#0D6EFD",
              marginBottom: "10px",
            }}
          >
            ❤️ PulseCare
          </h1>

          <h2>Welcome Back</h2>

          <p style={{ color: "#666" }}>
            Login to access your healthcare dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 25px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#0D6EFD",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <span
            style={{
              color: "#0D6EFD",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </span>

          <span>
            New User?{" "}
            <Link to="/register">
              <span
                style={{
                  color: "#0D6EFD",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Register
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
