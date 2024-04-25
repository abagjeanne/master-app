const mongoose = require("mongoose");
const InformationModel = require("../models/InformationModel");

const GetAllInfo = async (req, res) => {
  try {
    const result = await InformationModel.find({});

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const GetSpecificInfo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json("No such Information");
    }

    const result = await InformationModel.findById(id);

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const CreateInfo = async (req, res) => {
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

const EditInfo = async (req, res) => {
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

const DeleteInfo = async (req, res) => {
  try {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json("No Information listed");
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

const CreateInfoWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await CreateInfo(req, res);
  });
};
const EditInfoWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await EditInfo(req, res);
  });
};
const DeleteInfoWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await DeleteInfo(req, res);
  });
};

module.exports = {
  GetAllInfo,
  GetSpecificInfo,
  CreateInfoWithAuth,
  EditInfoWithAuth,
  DeleteInfoWithAuth,
};