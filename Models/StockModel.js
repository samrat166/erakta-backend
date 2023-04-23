const { Schema, model } = require("mongoose");

const stockSchema = new Schema(
  {
    bg: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = new model("StockModel", stockSchema);
