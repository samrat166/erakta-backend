const { Schema, model } = require("mongoose");

const donorSchema = new Schema(
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
    dateOfBirth: {
      type: String,
      required: [true, "Date Of Birth Is Required"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone Num Is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email Is Required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address Is Required"],
      trim: true,
    },
    allergies: {
      type: String,
      trim: true,
      default: "No",
    },
    cardiac: {
      type: String,
      trim: true,
      default: "No",
    },
    bleeding: {
      type: String,
      trim: true,
      default: "No",
    },
    hhh: {
      type: String,
      trim: true,
      default: "No",
    },
  },
  { timestamps: true }
);

module.exports = new model("DonationModel", donorSchema);
