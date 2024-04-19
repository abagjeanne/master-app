const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InformationSchema = new Schema({
  question: {
    type: String,
    default: "",
    required: true
  },
  answer: {
    type: String,
    default: "",
    required: true
  },
});

module.exports = mongoose.model("information", InformationSchema);