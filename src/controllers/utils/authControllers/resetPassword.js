const prisma = require("@prisma/client");
const resetPassword = async (req, res) => {
  await prisma.auth.update({
    where: { Username: req.body.username },
    data: { Password: req.body.password },
  });
  res.send("Password aggiornata");
};

module.exports = { resetPassword };