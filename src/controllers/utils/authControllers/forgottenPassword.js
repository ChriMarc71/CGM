const transporter = require("../../../utils/transporter");
const { prisma } = require("../../../db/connectionToDB");

const forgottenPassword = async (req,res) =>{
  const email = req.body.email;
  const resetToken = await prisma.auth.findMany({
    select: {
      Token: true,
    },
    where: {
      Email:email,
    },
  });

    res.send("Email for password recovery sent!");

    transporter.sendMail({
    from: 'provaProgettoCGM@outlook.it', // sender address
    to: email, // list of receivers
    subject: "RESET PASSWORD",
    text: "Copy and paste the follwoing token | "+resetToken[0].Token, 
  }, function (error,info){
    if(error){
      console.log(error)
    }
  });
}

module.exports={forgottenPassword};