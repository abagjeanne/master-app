const express = require("express");
const router = express.Router();
const authToken = require('../utils/authToken')

const {
    GetAllInformation,
    GetSpecificInformation,
    CreateInformation,
    EditInformation,
    DeleteInformation,
} = require("../controllers/InformationController.js");

// Routes for Service
router.get("/", GetAllInformation);
router.get("/:id", GetSpecificInformation);
router.use(authToken)
router.post("/create", CreateInformation);
router.patch("/edit/:id", EditInformation);
router.delete("/delete/:id", DeleteInformation);

module.exports = router;
