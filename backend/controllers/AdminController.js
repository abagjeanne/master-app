const mongoose = require("mongoose");
const AdminModel = require("../models/AdminModel");

const GetAllAdmin = async (req, res) => {
  try {
    const result = await AdminModel.find({});

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetSpecificAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const result = await AdminModel.findById(id);

    if (!result) {
        return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const CreateAdmin = async (req, res) => {
  try {
    const admin = req.body;

    const result = await AdminModel.create({
      userName: admin.userName,
      passWord: admin.passWord
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const UpdateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const result = await UserModel.findByIdAndUpdate(
      freelancer._id,
      {
        $set: {
          firstName: freelancer.firstName,
          surName: freelancer.surName,
          userName: freelancer.userName,
          eMail: freelancer.eMail,
          passWord: freelancer.passWord,
          contactNum: freelancer.contactNum,
          region: freelancer.region,
          province: freelancer.province,
          city: freelancer.city,
          profilePic: freelancerProfile.hasOwnProperty("id") ? freelancerProfile : freelancer.profilePic,
          userInfo: freelancer.userInfo,
        },
      }, 
    {new: true}
    );

    res.status(201).json(result);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const DeleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json("No admin listed");
    }
  
    const admin = await AdminModel.findById(id);
  
    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the admin document from the database
    const result = await AdminModel.findByIdAndDelete(id);
  
    res.status(200).json(result);
  } catch (err) {
    res.send(err.message);
  }
  
};

module.exports = {
    GetAllAdmin,
    GetSpecificAdmin,
    CreateAdmin,
    UpdateAdmin,
    DeleteAdmin
};