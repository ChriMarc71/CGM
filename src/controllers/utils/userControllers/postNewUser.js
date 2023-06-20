const { prisma } = require("../../../db/connectionToDB");
const postNewUser = async (req, res) => {
  await prisma.utenti.create({
    data: {
      user: req.body.user,
      professione: req.body.professione,
    },
  });
  res.send("created");
};
module.exports = { postNewUser };
