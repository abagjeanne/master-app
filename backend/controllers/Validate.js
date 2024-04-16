const mongoose = require('mongoose');
const AdminModel = require('../models/AdminModel');

const LoginUser = async (req, res) => {
  try {
    const { userName, passWord } = req.body;

    // Find the user by username
    const user = await AdminModel.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches (plain text comparison)
    if (user.passWord !== passWord) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If username and password match, send a success response
    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  LoginUser,
};
