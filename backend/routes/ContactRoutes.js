const express = require("express");
const router = express.Router();
const authToken = require("../utils/authToken");

const {
  GetAllContactWithAuth,
  GetSpecificContactWithAuth,
  CreateContact,
  EditInfoWithAuth,
  DeleteInfoWithAuth,
} = require("../controllers/ContactController.js");

// Routes for Service
router.post("/create", CreateContact);
router.use(authToken);
router.get("/", GetAllContactWithAuth);
router.get("/:id", GetSpecificContactWithAuth);
router.patch("/edit/:id", EditInfoWithAuth);
router.delete("/delete/:id", DeleteInfoWithAuth);

module.exports = router;
