const express = require("express");
const prisma = require("../db/connectionToDB.js");
const router = express.Router();
let bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  bodyParser.raw({ inflate: true, limit: "100kb", type: "application/json" })
);
router.use(bodyParser.json({ type: "application/*+json" }));
const {
  getUserById,
  putUserById,
  deleteUserById,
  getAllUsers,
  postNewUser,
} = require("../controllers/userControllers.js");
router.route("/:id").get(getUserById).put(putUserById).delete(deleteUserById);
router.get("/", getAllUsers);
router.post("/", postNewUser);
module.exports = router;
