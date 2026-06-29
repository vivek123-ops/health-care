import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <>
      <div
        key={doctor.id}
        style={{
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,.15)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "#0D6EFD",
            height: "120px",
          }}
        ></div>

        <div
          style={{
            textAlign: "center",
            marginTop: "-55px",
          }}
        >
          <img
            src={doctor.profileImage}
            alt=""
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              border: "5px solid white",
              objectFit: "cover",
            }}
          />

          <h2>{doctor.username}</h2>

          <p
            style={{
              color: "#666",
              fontWeight: "bold",
            }}
          >
            {doctor.specialist}
          </p>
        </div>

        <div
          style={{
            padding: "20px",
          }}
        >
          <p>
            🏥 <b>Hospital:</b> {doctor.hospital}
          </p>

          <p>
            ⭐ <b>Experience:</b> {doctor.experience}
          </p>

          <p>
            💰 <b>Consultation Fee:</b> ₹{doctor.consultationFee}
          </p>

          <hr />

          <p>
            <b>Available Days</b>
          </p>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "15px",
            }}
          >
            {doctor.availableDays.map((day, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 14px",
                  background: "#0D6EFD",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                {day}
              </span>
            ))}
          </div>

          <p>
            <b>Available Time</b>
          </p>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            {doctor.availableTime.map((time, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 14px",
                  background: "green",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                {time}
              </span>
            ))}
          </div>
          <Link to={`/bookappointment/${doctor._id}`}>
            <button
              style={{
                width: "100%",
                padding: "14px",
                background: "#0D6EFD",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              📅 Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
