const mongoose = require("mongoose");
const ContactModel = require("../models/ContactModel");
const requireAuth = require("../utils/authToken");

const GetAllContact = async (req, res) => {
  try {
    const result = await ContactModel.find({});

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const GetSpecificContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json("No such Information");
    }

    const result = await ContactModel.findById(id);

    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
};

const CreateContact = async (req, res) => {
  try {
    const contact = req.body;

    const result = await ContactModel.create({
      company: contact.company,
      sender: contact.sender,
      cTitle: contact.cTitle,
      cContent: contact.cContent,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const EditContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = req.body;

    let update = {
      $set: {
        company: contact.company,
        sender: contact.sender,
        cTitle: contact.cTitle,
        cContent: contact.cContent,
      },
    };

    const result = await ContactModel.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const DeleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json("No Contact listed");
    }

    const contact = await ContactModel.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "User not found" });
    }

    const result = await ContactModel.findByIdAndDelete(id);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetAllContactWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await GetAllContact(req, res);
  });
};
const GetSpecificContactWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await GetSpecificContact(req, res);
  });
};
const EditInfoWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await EditContact(req, res);
  });
};
const DeleteInfoWithAuth = (req, res) => {
  requireAuth(req, res, async () => {
    await DeleteContact(req, res);
  });
};

module.exports = {
  GetAllContactWithAuth,
  GetSpecificContactWithAuth,
  CreateContact,
  EditInfoWithAuth,
  DeleteInfoWithAuth,
};
