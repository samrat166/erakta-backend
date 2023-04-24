const { Schema, model } = require("mongoose");

const bloodCampSchema = new Schema(
  {
    address: {
      type: String,
      required: [true, "Address Is Required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description Is Required"],
      trim: true,
    },
    cName: {
      type: String,
      required: [true, "cName Is Required"],
      trim: true,
    },

    sDate: {
      type: String,
      required: [true, "sDate Is Required"],
      trim: true,
    },
    sTime: {
      type: String,
      required: [true, "eDate Is Required"],
      trim: true,
    },
    donorRegistered: [{ name: String, contactNumber: String }],
  },
  { timestamps: true }
);

module.exports = new model("HospitalModel", bloodCampSchema);
