/*
const transporter = require("../../../utils/transporter")

async function sendPasswordEmail(email){
  const info = await transporter.sendMail({
    from: 'provaProgettoCGM@outlook.it', // sender address
    to: email, // list of receivers
    subject: "RESET PASSWORD",
    text: "Click here to change password", 
    html: "<a href='http://localhost:8080/auth/resetPassword'>Cliccami<a/>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports={sendPasswordEmail}*/