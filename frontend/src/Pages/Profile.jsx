import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    bloodgroup: "",
    height: "",
    address: "",
    emergencyContact: "",
    disease: "",
    medicine: "",
  });

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/api/getprofile", {
        headers: {
          authorization: token,
        },
      });

      setUser(response.data.user);

      setFormData({
        bloodGroup: response.data.user.bloodgroup || "",
        height: response.data.user.height || "",
        address: response.data.user.address || "",
        emergencyContact: response.data.user.emergencyContact || "",
        disease: response.data.user.disease?.join(", ") || "",
        medicine: response.data.user.medicine?.join(", ") || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:3000/api/updateprofile",
        {
          bloodgroup: formData.bloodgroup,
          height: formData.height,
          address: formData.address,
          emergencyContact: formData.emergencyContact,
          disease: formData.disease
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
          medicine: formData.medicine
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        },
        {
          headers: {
            authorization: token,
          },
        },
      );

      alert("Profile Updated Successfully");

      setEditMode(false);

      getProfile();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "950px",
        margin: "40px auto",
        background: "#fff",
        padding: "35px",
        borderRadius: "15px",
        boxShadow: "0 5px 20px rgba(0,0,0,.15)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0D6EFD",
        }}
      >
        👤 My Profile
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <div style={{ width: "220px", textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            style={{
              width: "170px",
              borderRadius: "50%",
            }}
          />

          <h2>{user.username}</h2>

          <p>{user.userType}</p>
        </div>

        <div style={{ flex: 1 }}>
          <p>
            <b>Email:</b> {user.email}
          </p>

          <p>
            <b>Phone:</b> {user.phone}
          </p>

          <p>
            <b>Age:</b> {user.age}
          </p>

          <p>
            <b>Blood Group:</b> {user.bloodgroup || "Not Added"}
          </p>

          <p>
            <b>Height:</b> {user.height || "Not Added"}
          </p>

          <p>
            <b>Disease:</b>{" "}
            {user.disease.length ? user.disease.join(", ") : "None"}
          </p>

          <p>
            <b>Medicine:</b>{" "}
            {user.medicine.length ? user.medicine.join(", ") : "None"}
          </p>

          <p>
            <b>Address:</b> {user.address || "Not Added"}
          </p>

          <button
            onClick={() => setEditMode(!editMode)}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#0D6EFD",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {editMode ? "Close" : "Edit Profile"}
          </button>
        </div>
      </div>

      {editMode && (
        <div
          style={{
            marginTop: "40px",
            borderTop: "2px solid #eee",
            paddingTop: "25px",
          }}
        >
          <h2>Edit Profile</h2>

          <input
            name="bloodgroup"
            value={formData.bloodgroup}
            onChange={handleChange}
            placeholder="Blood Group"
            style={inputStyle}
          />

          <input
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Height"
            style={inputStyle}
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            style={inputStyle}
          />

          <input
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="Emergency Contact"
            style={inputStyle}
          />

          <input
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            placeholder="Disease (comma separated)"
            style={inputStyle}
          />

          <input
            name="medicine"
            value={formData.medicine}
            onChange={handleChange}
            placeholder="Medicine (comma separated)"
            style={inputStyle}
          />

          <button
            onClick={updateProfile}
            style={{
              padding: "12px 30px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxSizing: "border-box",
};

export default Profile;
