const transporter = require("../../../utils/transporter");


const forgottenPassword = async () =>{
  const email = req.body.email;
  const resetToken = await prisma.auth.findMany({
    select: {
      Token: true,
    },
    where: {
      Email:email,
    },
  });
  const info = await transporter.sendMail({
    from: 'provaProgettoCGM@outlook.it', // sender address
    to: email, // list of receivers
    subject: "RESET PASSWORD",
    text: "Copy and paste the follwoing token | "+Token, 
  });
}

module.exports={forgottenPassword};