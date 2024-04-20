const express = require("express");
const router = express.Router();
const upload = require("../config/Multer.js");

const {
  GetAllBlog,
  GetSpecificBlog,
  CreateBlog,
  EditBlog,
  DeleteBlog
} = require("../controllers/BlogController.js");

// Routes for Service
router.get("/", GetAllBlog);
router.get("/:id", GetSpecificBlog);
router.post("/create", upload.single("file"), CreateBlog);
router.patch("/edit/:id", upload.single("file"), EditBlog);
router.delete("/delete/:id", DeleteBlog);

module.exports = router;
