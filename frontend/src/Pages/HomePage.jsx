import React from "react";

const Home = () => {
  const styles = {
    page: {
      background: "#F5FAFF",
      fontFamily: "Arial, sans-serif",
    },

    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "70px 80px",
      minHeight: "90vh",
      background: "linear-gradient(to right,#EAF6FF,#ffffff)",
    },

    left: {
      width: "50%",
    },

    title: {
      fontSize: "55px",
      color: "#0F172A",
      marginBottom: "20px",
      lineHeight: "70px",
    },

    subtitle: {
      fontSize: "20px",
      color: "#555",
      lineHeight: "35px",
      marginBottom: "35px",
    },

    button: {
      padding: "15px 35px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "18px",
      marginRight: "20px",
    },

    section: {
      padding: "70px",
    },

    heading: {
      textAlign: "center",
      fontSize: "40px",
      color: "#0F172A",
      marginBottom: "40px",
    },

    cardContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "25px",
    },

    card: {
      width: "30%",
      background: "white",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0px 5px 15px rgba(0,0,0,.1)",
      textAlign: "center",
    },

    icon: {
      fontSize: "45px",
      marginBottom: "15px",
    },

    emergency: {
      background: "#DC3545",
      color: "white",
      textAlign: "center",
      padding: "70px",
    },

    footer: {
      background: "#0F172A",
      color: "white",
      padding: "40px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero */}

      <section style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.title}>
            Your Health,
            <br />
            Our Priority ❤️
          </h1>

          <p style={styles.subtitle}>
            PulseCare is an all-in-one healthcare platform where you can book
            doctor appointments, manage medical records, consult specialists,
            request emergency ambulance services, and securely maintain your
            complete health profile.
          </p>

          <button
            style={{
              ...styles.button,
              background: "#0D6EFD",
              color: "white",
            }}
          >
            Find Doctors
          </button>

          <button
            style={{
              ...styles.button,
              background: "#DC3545",
              color: "white",
            }}
          >
            🚑 Emergency SOS
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=700"
            alt="doctor"
            style={{
              width: "550px",
              borderRadius: "20px",
            }}
          />
        </div>
      </section>

      {/* Why PulseCare */}

      <section style={styles.section}>
        <h2 style={styles.heading}>Why Choose PulseCare?</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.icon}>🏥</div>

            <h3>Trusted Doctors</h3>

            <p>
              Connect with experienced and verified doctors from different
              specializations.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>📄</div>

            <h3>Medical Records</h3>

            <p>
              Keep prescriptions, reports and health history safe in one place.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🚑</div>

            <h3>Emergency Support</h3>

            <p>
              Instantly request ambulance services during medical emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Healthcare Services</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.icon}>👨‍⚕️</div>
            <h3>Doctor Consultation</h3>
            <p>Book appointments with specialists.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🩺</div>
            <h3>Health Profile</h3>
            <p>Maintain your complete medical profile.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💊</div>
            <h3>Medicine Reminder</h3>
            <p>Never miss your daily medicines.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>📋</div>
            <h3>Medical Reports</h3>
            <p>Upload and access reports anytime.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>❤️</div>
            <h3>Health Monitoring</h3>
            <p>Track your health information securely.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🤖</div>
            <h3>AI Assistant</h3>
            <p>Future AI-powered healthcare guidance.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}

      <section style={styles.section}>
        <h2 style={styles.heading}>How PulseCare Works</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h2>1️⃣</h2>
            <h3>Create Account</h3>
          </div>

          <div style={styles.card}>
            <h2>2️⃣</h2>
            <h3>Complete Health Profile</h3>
          </div>

          <div style={styles.card}>
            <h2>3️⃣</h2>
            <h3>Find a Doctor</h3>
          </div>

          <div style={styles.card}>
            <h2>4️⃣</h2>
            <h3>Book Appointment</h3>
          </div>

          <div style={styles.card}>
            <h2>5️⃣</h2>
            <h3>Consult & Stay Healthy</h3>
          </div>
        </div>
      </section>

      {/* Emergency */}

      <section style={styles.emergency}>
        <h1>🚑 Medical Emergency?</h1>

        <h3>
          Get quick access to ambulance services and emergency healthcare
          support.
        </h3>

        <button
          style={{
            marginTop: "30px",
            padding: "18px 40px",
            border: "none",
            borderRadius: "10px",
            background: "white",
            color: "#DC3545",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Request Ambulance
        </button>
      </section>

      {/* Statistics */}

      <section style={styles.section}>
        <h2 style={styles.heading}>PulseCare at a Glance</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h1>500+</h1>
            <p>Doctors</p>
          </div>

          <div style={styles.card}>
            <h1>5000+</h1>
            <p>Patients</p>
          </div>

          <div style={styles.card}>
            <h1>1000+</h1>
            <p>Appointments</p>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer style={styles.footer}>
        <h2>❤️ PulseCare</h2>

        <p>
          One Platform for Doctor Consultation, Emergency Services, Medical
          Records and Better Healthcare.
        </p>

        <p style={{ marginTop: "20px" }}>
          © 2026 PulseCare. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
