const express = require("express");
const jwt = require("jsonwebtoken");
const prisma = require("../db/connectionToDB");
const verifyToken = require("../middlewares/middlewares");
const router = express.Router();
const {
  register,
  login,
  resetPassword,
} = require("../controllers/authControllers");

router.post("/register", register);

router.get("/login", login);

router.get("/resetPassword", resetPassword);
module.exports = router;
