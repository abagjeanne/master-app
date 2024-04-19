const mongoose = require("mongoose");
const InformationModel = require("../models/InformationModel");

const GetAllInformation = async (req, res) => {
  try {
    const result = await InformationModel.find({});

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const GetSpecificInformation = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json("No such info");
    }

    const result = await InformationModel.findById(id);

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const CreateInformation = async (req, res) => {
  try{
    const info = req.body;

    const result = await InformationModel.create({
      question: info.question,
      answer: info.answer,
    });
    res.status(201).json(result);

  }catch(err){
    res.status(500).json({message: err.message});
  }
};

const EditInformation = async (req, res) => {
  try {
    const { id } = req.params;
    const info = req.body;

    let update = {
      $set: {
        question: info.question,
        answer: info.answer,
      }
    };

    const result = await InformationModel.findByIdAndUpdate(id, update, { new: true });
    res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const DeleteInformation = async (req, res) => {
  try {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json("No info listed");
    }
  
    const info = await InformationModel.findById(id);
  
    if (!info) {
      return res.status(404).json({ message: "User not found" });
    }

    const result = await InformationModel.findByIdAndDelete(id);
  
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
  
};

module.exports = {
  GetAllInformation,
  GetSpecificInformation,
  CreateInformation,
  EditInformation,
  DeleteInformation,
};