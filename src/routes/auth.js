const express = require("express");
const jwt = require("jsonwebtoken");
const prisma = require("../db/connectionToDB");
const verifyToken = require("../middlewares/middlewares");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.post("/register", authControllers.register());

router.get("/login", authControllers.login());

router.get("/resetPassword", authControllers.resetPassword());
module.exports = router;
