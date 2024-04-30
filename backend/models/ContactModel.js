const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  company: {
    type: String,
    default: "",
    required: true
  },
  sender: {
    type: String,
    default: "",
    required: true
  },
  cTitle: {
    type: String,
    default: "",
    required: true
  },
  cContent: {
    type: String,
    default: "",
    required: true
  }
});

module.exports = mongoose.model("contact", ContactSchema);