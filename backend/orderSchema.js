const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Order", orderSchema);
