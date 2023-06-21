const transporter = require("../../../utils/transporter")

const sendConfirmationEmail =  async (email,randomString)=>{
  await transporter.sendMail({
    from: 'provaProgettoCGM@outlook.it', // sender address
    to: email, // list of receivers
    subject: "CONFIRM EMAIL",
    text: "Click here to confirm the email, and you will redirict on the login page", 
    html: "<a href='http://localhost:3001/"+randomString+"'>Cliccami<a/>", // html body
  }, function (error,info){
    if(error){
      console.log(error)
    }else{
      console.log("email inviata")
    }
  });
}

module.exports={sendConfirmationEmail};