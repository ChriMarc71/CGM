const { register } = require("../controllers/utils/authControllers/register.js");
const { login } = require("../controllers/utils/authControllers/login.js");
const { resetPassword } = require("../controllers/utils/authControllers/resetPassword.js");

module.exports = { register, login, resetPassword };
