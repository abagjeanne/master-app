const express = require("express");
const router = express.Router();
const authToken = require("../utils/authToken");

const {
  GetAllInfo,
  GetSpecificInfo,
  CreateInfoWithAuth,
  EditInfoWithAuth,
  DeleteInfoWithAuth,
} = require("../controllers/InformationController.js");

// Routes for Service
router.get("/", GetAllInfo);
router.get("/:id", GetSpecificInfo);
router.use(authToken);
router.post("/create", CreateInfoWithAuth);
router.patch("/edit/:id", EditInfoWithAuth);
router.delete("/delete/:id", DeleteInfoWithAuth);

module.exports = router;
