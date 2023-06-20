const {
  deleteUserById,
} = require("../controllers/utils/userControllers/deleteUserById.js");
const {
  getUserById,
} = require("../controllers/utils/userControllers/getUserById.js");
const {
  putUserById,
} = require("../controllers/utils/userControllers/putUserById.js");
const {
  postNewUser,
} = require("../controllers/utils/userControllers/postNewUser.js");
const {
  getAllUsers,
} = require("../controllers/utils/userControllers/getAllUsers.js");
module.exports = {
  getUserById,
  putUserById,
  deleteUserById,
  getAllUsers,
  postNewUser,
};
