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

const stripe = require("stripe")(
  "sk_test_51MhSpASAgnHLmb5Prn2xcb0w9jGIPzH7n6slVkUTIFP8vd9CLqWecclP2YpLsYwyDhOxBboqwcPByRLj2Ff6wsYg00XTYHaXKb"
);

app.get("/", (req, res) => {
  res.json({
    status: "Success",
    msg: "Home Page",
  });
});

const DonorRoute = require("./Routes/DonorRoute");
const ContactRoute = require("./Routes/ContactRoute");
const FeedbackRoute = require("./Routes/FeedbackRoute");
const HospitalRoute = require("./Routes/BloodCampRoute");
const requestRoute = require("./Routes/RequestRoute");
const stockRoute = require("./Routes/StockRoute");

app.use("/api/v1", DonorRoute);
app.use("/api/v1", ContactRoute);
app.use("/api/v1", HospitalRoute);
app.use("/api/v1", FeedbackRoute);
app.use("/api/v1", requestRoute);
app.use("/api/v1", stockRoute);

app.post("/payment-complete", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    automatic_payment_methods: { enabled: true },
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

app.listen(4000, () => {
  console.log("Server Is Listening At 4000");
});
