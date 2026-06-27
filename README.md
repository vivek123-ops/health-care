# ❤️ PulseCare - Healthcare Management System

## 📌 Overview

PulseCare is a full-stack Healthcare Management System built using the MERN Stack. It provides a secure platform where patients can register, manage their medical profile, search for doctors, and book appointments. Doctors can manage their profiles and appointments, while administrators can monitor the entire system.

The goal of this project is to simplify healthcare management by providing an easy-to-use digital platform for patients and healthcare providers.

---

# 🚀 Features

## 🔐 Authentication

* User Registration
* Email OTP Verification
* Secure Login using JWT Authentication
* Password Encryption using BCrypt
* Protected Routes
* Logout Functionality

---

## 👤 Patient Module

* Create Account
* Login
* View Profile
* Update Medical Information
* Blood Group
* Diseases
* Medicines
* Height
* Address
* Emergency Contact

---

## 👨‍⚕️ Doctor Module

* Doctor Registration
* Doctor Profile
* Specialist Information
* Hospital Details
* Consultation Fee
* Available Days
* Available Time Slots

---

## 📅 Appointment Module

* Search Doctors
* Book Appointment
* Appointment Status

  * Pending
  * Accepted
  * Rejected
  * Completed
  * Cancelled

---

## 🔎 Doctor Search

Search doctors by specialization such as:

* Cardiologist
* Neurologist
* Dermatologist
* Orthopedic
* Dentist
* Pediatrician

---

## 🛡️ Security

* JWT Authentication
* Password Hashing using BCrypt
* Protected APIs
* MongoDB Validation
* Secure REST APIs

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Inline CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JWT
* BCrypt
* Nodemailer (OTP Verification)

---

# 📂 Project Structure

```
PulseCare
│
├── frontend
│   ├── Components
│   ├── Pages
│   ├── App.jsx
│   └── main.jsx
│
├── backend
│   ├── controller
│   ├── middleware
│   ├── module
│   ├── routers
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/PulseCare.git
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000

MONGODB_URI=Your MongoDB URI

JWT_SECRET=Your Secret Key

EMAIL=your_email@gmail.com

EMAIL_PASSWORD=your_app_password
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| POST   | /api/register | Register User |
| POST   | /api/verify   | Verify OTP    |
| POST   | /api/login    | Login User    |

---

## Profile

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/getprofile    | Get User Profile |
| PUT    | /api/updateprofile | Update Profile   |

---

## Appointment

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| POST   | /api/bookappointment | Book Appointment          |
| GET    | /api/myappointments  | Get Patient Appointments  |
| PATCH  | /api/update-status   | Update Appointment Status |

---

# 🎯 Future Enhancements

* Doctor Dashboard
* Admin Dashboard
* Video Consultation
* Medicine Delivery
* Ambulance Booking
* Hospital Recommendation
* Payment Gateway Integration
* Medical Reports Upload
* AI Health Assistant
* Notifications
* Dark Mode
* Cloud Image Upload
* Responsive Mobile UI

---




# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

---

# 👨‍💻 Author

**Vivek Shrivastav**

B.Tech Computer Science Engineering

MERN Stack Developer

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.
