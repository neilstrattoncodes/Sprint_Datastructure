//Mongoose Schema details

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sku: {
      type: Number,
      required: true,
    },
    platform: String,
    status: String,
  },
  { timestamps: true }
);

const Gamedb = mongoose.model("gamedb", schema);

module.exports = Gamedb;
