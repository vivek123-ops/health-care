import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorProfile = () => {
  const [user, setUser] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    specialist: "",
    education: "",
    experience: "",
    hospital: "",
    consultationFee: "",
    availableDays: "",
    availableTime: "",
  });

  // ✅ Profile fetch function
  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://health-care-3-0hjr.onrender.com/api/getprofile",
        {
          headers: {
            authorization: token,
          },
        },
      );

      setUser(response.data.user);

      setFormData({
        specialist: response.data.user.specialist || "",
        education: response.data.user.education || "",
        experience: response.data.user.experience || "",
        hospital: response.data.user.hospital || "",
        consultationFee: response.data.user.consultationFee || "",
        availableDays: response.data.user.availableDays?.join(", ") || "",
        availableTime: response.data.user.availableTime?.join(", ") || "",
      });
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  // ✅ Input change function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ YAHAN ADD KARO
  const updateDoctorProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "https://health-care-3-0hjr.onrender.com/api/updateprofile",
        {
          specialist: formData.specialist,
          education: formData.education,
          experience: formData.experience,
          hospital: formData.hospital,
          consultationFee: Number(formData.consultationFee),
          availableDays: formData.availableDays
            .split(",")
            .map((day) => day.trim())
            .filter(Boolean),
          availableTime: formData.availableTime
            .split(",")
            .map((time) => time.trim())
            .filter(Boolean),
        },
        {
          headers: {
            authorization: token,
          },
        },
      );

      alert("Doctor Profile Updated Successfully");

      setEditMode(false);

      getProfile();
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  if (!user) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading...
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        background: "#fff",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0D6EFD",
          marginBottom: "30px",
        }}
      >
        👨‍⚕️ Doctor Profile
      </h1>

      <div
        style={{
          display: "flex",
          gap: "35px",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            width: "280px",
            textAlign: "center",
          }}
        >
          <img
            src={
              user.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt=""
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #0D6EFD",
            }}
          />

          <h2>{user.username}</h2>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
            }}
          >
            {user.specialist || "Doctor"}
          </p>

          <button
            onClick={() => setEditMode(true)}
            style={{
              marginTop: "20px",
              padding: "12px 30px",
              border: "none",
              borderRadius: "8px",
              background: "#0D6EFD",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </button>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              background: "#F8FAFC",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <h2
              style={{
                color: "#0D6EFD",
              }}
            >
              Personal Information
            </h2>

            <hr />

            <p>
              <b>Email :</b> {user.email}
            </p>

            <p>
              <b>Phone :</b> {user.phone}
            </p>

            <p>
              <b>Age :</b> {user.age}
            </p>

            <p>
              <b>Address :</b> {user.address || "Not Added"}
            </p>
          </div>
          <div
            style={{
              background: "#F8FAFC",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <h2
              style={{
                color: "#0D6EFD",
              }}
            >
              Professional Information
            </h2>

            <hr />

            <p>
              <b>Specialization :</b> {user.specialist || "Not Added"}
            </p>

            <p>
              <b>Education :</b> {user.education || "Not Added"}
            </p>

            <p>
              <b>Experience :</b> {user.experience || "Not Added"}
            </p>

            <p>
              <b>Hospital :</b> {user.hospital || "Not Added"}
            </p>

            <p>
              <b>Consultation Fee :</b> ₹{user.consultationFee || 0}
            </p>
          </div>
          <div
            style={{
              background: "#F8FAFC",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                color: "#0D6EFD",
              }}
            >
              Availability
            </h2>

            <hr />

            <p>
              <b>Available Days :</b>
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {user.availableDays?.length > 0 ? (
                user.availableDays.map((day, index) => (
                  <span
                    key={index}
                    style={{
                      padding: "8px 15px",
                      background: "#0D6EFD",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    {day}
                  </span>
                ))
              ) : (
                <p>Not Added</p>
              )}
            </div>

            <br />

            <p>
              <b>Available Time :</b>
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {user.availableTime?.length > 0 ? (
                user.availableTime.map((time, index) => (
                  <span
                    key={index}
                    style={{
                      padding: "8px 15px",
                      background: "green",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    {time}
                  </span>
                ))
              ) : (
                <p>Not Added</p>
              )}
            </div>
          </div>
          {editMode && (
            <div
              style={{
                marginTop: "30px",
                padding: "25px",
                background: "#F8FAFC",
                borderRadius: "10px",
              }}
            >
              <h2>Edit Doctor Profile</h2>

              <input
                type="text"
                name="specialist"
                placeholder="Specialization"
                value={formData.specialist}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="hospital"
                placeholder="Hospital"
                value={formData.hospital}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="number"
                name="consultationFee"
                placeholder="Consultation Fee"
                value={formData.consultationFee}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="availableDays"
                placeholder="Monday, Tuesday, Wednesday"
                value={formData.availableDays}
                onChange={handleChange}
                style={inputStyle}
              />

              <input
                type="text"
                name="availableTime"
                placeholder="10:00 AM - 5:00 PM"
                value={formData.availableTime}
                onChange={handleChange}
                style={inputStyle}
              />

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={updateDoctorProfile}
                  style={{
                    padding: "12px 25px",
                    background: "#0D6EFD",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setEditMode(false)}
                  style={{
                    padding: "12px 25px",
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxSizing: "border-box",
  fontSize: "15px",
};

export default DoctorProfile;
