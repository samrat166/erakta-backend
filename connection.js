const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://samrat:tarmas91011@cluster0.mv2go.mongodb.net/BloodBank_Db",
  (err) => {
    if (!err) {
      console.log("connected to database 😂");
    } else {
      console.log(err);
    }
  }
);
