const validator = require("email-validator");

function isVaildEmail(email){
    const isValidEmail = validator.validate(email)
    return isValidEmail
}
module.exports = isVaildEmail