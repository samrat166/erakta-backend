const { Schema, model } = require("mongoose");

const requestSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required"],
      trim: true,
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood Group Of Birth Is Required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address Of Birth Is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email Is Required"],
      trim: true,
    },
    requestAmount: {
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "pending",
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = new model("RequestModel", requestSchema);
