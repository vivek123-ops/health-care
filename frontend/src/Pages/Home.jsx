import React from "react";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(to right,#e8f5ff,#ffffff)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 80px",
      }}
    >
      {/* Left Section */}
      <div style={{ width: "50%" }}>
        <h1
          style={{
            fontSize: "55px",
            color: "#0f172a",
            marginBottom: "20px",
          }}
        >
          Your Health,
          <br />
          <span style={{ color: "#0d6efd" }}>Our Priority ❤️</span>
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            lineHeight: "35px",
            marginBottom: "35px",
          }}
        >
          Book appointments with trusted doctors, manage your health records,
          request emergency ambulance services and access healthcare from one
          platform.
        </p>

        <button
          style={{
            padding: "15px 35px",
            background: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            marginRight: "20px",
          }}
        >
          Find Doctor
        </button>

        <button
          style={{
            padding: "15px 35px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🚑 Emergency
        </button>
      </div>

      {/* Right Section */}
      <div
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700"
          alt="Doctor"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
