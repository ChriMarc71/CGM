const { prisma } = require("../../../db/connectionToDB");
const {sendConfirmationEmail} = require("./confirmEmail.js");
const { makeid } = require("../../../utils/makeid.js");
const express = require("express");
const app2 = express()
const register = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  await prisma.auth.create({
    data: {
      Email: email,
      Username: username,
      Password: password,
      IsEnable:false
    },
  });

  const randomString = makeid(64);
  sendConfirmationEmail(email,randomString);
  app2.get("/"+randomString, async (req,res)=>{
    await prisma.auth.update({
      where:{
        Email:email
      },
      data:{
        IsEnable:true
      }
    })
    res.send("Registrazione confermata")
  });
  res.send("Registrazione fatta, controlla la posta in arrivo per la verifica dell'email");
}
app2.listen(3001)
module.exports = { register };
