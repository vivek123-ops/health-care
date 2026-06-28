import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userType = null;

  try {
    if (token) {
      const decoded = jwtDecode(token);
      userType = decoded.userType;
    }
  } catch (error) {
    localStorage.removeItem("token");
    navigate("/login");
  }

  console.log(userType);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    navigate("/login");
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      background: "#ffffff",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      position: "sticky",
      top: "0",
      zIndex: "1000",
    },

    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#0D6EFD",
      textDecoration: "none",
    },

    menu: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
    },

    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "17px",
      fontWeight: "500",
    },

    right: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },

    loginBtn: {
      padding: "10px 20px",
      border: "2px solid #0D6EFD",
      borderRadius: "8px",
      background: "white",
      color: "#0D6EFD",
      cursor: "pointer",
      fontWeight: "600",
    },

    registerBtn: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      background: "#0D6EFD",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },

    logoutBtn: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      background: "#dc3545",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        ❤️ PulseCare
      </Link>

      {/* Menu */}
      <div style={styles.menu}>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        {token && userType === "user" && (
          <>
            <Link to="/doctor" style={styles.link}>
              Doctors
            </Link>

            <Link to="/appointment" style={styles.link}>
              Appointment
            </Link>

            <Link to="/emergency" style={styles.link}>
              Emergency
            </Link>

            <Link to="/profile" style={styles.link}>
              My Profile
            </Link>
          </>
        )}

        {token && userType === "doctor" && (
          <>
            <Link to="/doctorprofile" style={styles.link}>
              My Profile
            </Link>

            <Link to="/appointments" style={styles.link}>
              Appointments
            </Link>

            <Link to="/schedule" style={styles.link}>
              Schedule
            </Link>
          </>
        )}
      </div>

      {/* Right Side */}
      <div style={styles.right}>
        {token ? (
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button style={styles.loginBtn}>Login</button>
            </Link>

            <Link to="/register">
              <button style={styles.registerBtn}>Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
