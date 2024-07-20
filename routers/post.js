const express = require("express");
const router = express.Router();
const { createPost } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/upload").post(isAuthenticated, createPost);

module.exports = router;
