const { prisma } = require("../../../db/connectionToDB");
const resetPassword = async (req, res) => {
  await prisma.auth.update({
    where: { Username: req.body.token },
    data: { Password: req.body.password },
  });
  res.send("Password aggiornata");
};

module.exports = { resetPassword };
