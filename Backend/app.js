const express = require("express");
const mongoose = require("mongoose");
const Auth = require("./routers/AuthRouter");
const cors = require("cors");
const user = require("./routers/userRouter");
const Doctor = require("./routers/DoctorRouter");

const app = express();
app.use(cors());
app.use(express.json());

// all router
app.use("/api", Auth);
app.use("/api", user);
app.use("/api", Doctor);

const server = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://vivekshrivastav325_db_user:loGV4tpz4450ilmg@cluster0.fxwuxys.mongodb.net/PulseCare?appName=Cluster0",
    );
    console.log("database is connected");
    app.listen("3000", (req, res) => {
      console.log("server is started");
    });
  } catch (error) {
    console.log("error from serverStart", error);
  }
};

server();
