const mongoose = require("mongoose");
const InformationrmationModel = require("../models/InformationrmationModel");

const GetAllInfo = async (req, res) => {
  try {
    const result = await InformationrmationModel.find({});

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

    const result = await InformationrmationModel.findById(id);

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const CreateInfo = async (req, res) => {
  try{
    const Information = req.body;

    const result = await InformationrmationModel.create({
      question: Information.question,
      answer: Information.answer,
    });
    res.status(201).json(result);

  }catch(err){
    res.status(500).json({message: err.message});
  }
};

const EditInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const Information = req.body;

    let update = {
      $set: {
        question: Information.question,
        answer: Information.answer,
      }
    };

    const result = await InformationrmationModel.findByIdAndUpdate(id, update, { new: true });
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
  
    const Information = await InformationrmationModel.findById(id);
  
    if (!Information) {
      return res.status(404).json({ message: "User not found" });
    }

    const result = await InformationrmationModel.findByIdAndDelete(id);
  
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