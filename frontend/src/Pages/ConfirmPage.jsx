import React from "react";
import { Link } from "react-router-dom";

const EmergencySuccess = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f8ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#fff",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            margin: "auto",
            borderRadius: "50%",
            background: "#22c55e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "45px",
            color: "#fff",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            marginTop: "20px",
            color: "#dc2626",
          }}
        >
          Emergency Alert Sent
        </h1>

        <p
          style={{
            color: "#666",
            marginTop: "10px",
          }}
        >
          Your emergency request has been sent successfully.
          <br />
          Your emergency contact has been notified.
        </p>

        <div
          style={{
            marginTop: "30px",
            textAlign: "left",
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <p>✅ Emergency Request Created</p>

          <p>📍 Live Location Shared</p>

          <p>📧 Emergency Email Sent</p>

          <p>🕒 Help request generated successfully</p>
        </div>

        <div
          style={{
            marginTop: "25px",
            background: "#fff4e5",
            borderLeft: "5px solid orange",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <b>Safety Tips</b>

          <ul>
            <li>Stay calm.</li>
            <li>Keep your phone nearby.</li>
            <li>Wait for your emergency contact.</li>
            <li>If possible, stay at your current location.</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <Link
            to="/"
            style={{
              flex: 1,
              textDecoration: "none",
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "14px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              🏠 Home
            </button>
          </Link>

          <button
            onClick={() => window.open("https://www.google.com/maps", "_blank")}
            style={{
              flex: 1,
              padding: "14px",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            📍 Open Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencySuccess;
