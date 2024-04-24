const mongoose = require('mongoose');
const AdminModel = require('../models/AdminModel');
const jwt = require('jsonwebtoken')

const LoginUser = async (req, res) => {
  try {
    const { userName, passWord } = req.body;

    const user = await AdminModel.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches (plain text comparison)
    if (user.passWord !== passWord) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If username and password match, send a success response
    res.status(200).json({ message: 'Login successful', token: generateToken(user._id) });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '30m'})
} 

module.exports = {
  LoginUser,
};
