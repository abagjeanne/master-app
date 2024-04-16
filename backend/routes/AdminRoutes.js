const express = require("express");
const router = express.Router();

const {
    GetAllAdmin,
    GetSpecificAdmin,
    CreateAdmin,
    UpdateAdmin,
    DeleteAdmin
} = require("../controllers/AdminController.js");

// Routes for Service
router.get("/", GetAllAdmin);
router.get("/:id", GetSpecificAdmin);
router.post("/create", CreateAdmin);
router.patch("/edit/:id", UpdateAdmin);
router.delete("/delete/:id", DeleteAdmin);

module.exports = router;
