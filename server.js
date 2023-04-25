const express = require("express");
require("./connection");
const app = express();
const logger = require("morgan");
const cors = require("cors");
//Initializing dotenv
require("dotenv").config();
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    msg: "Home Page",
  });
});

const DonorRoute = require("./Routes/DonorRoute");
const FeedbackRoute = require("./Routes/FeedbackRoute");
const HospitalRoute = require("./Routes/BloodCampRoute");
const requestRoute = require("./Routes/RequestRoute");
const stockRoute = require("./Routes/StockRoute");

app.use("/api/v1", DonorRoute);
app.use("/api/v1", HospitalRoute);
app.use("/api/v1", FeedbackRoute);
app.use("/api/v1", requestRoute);
app.use("/api/v1", stockRoute);

app.listen(4000, () => {
  console.log("Server Is Listening At 4000");
});
