const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  sender: {
    type: String,
    default: "",
    required: true
  },
  company: {
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
  },
  dateCreated:{
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("contact", ContactSchema);