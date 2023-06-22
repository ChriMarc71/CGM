const { prisma } = require("../../../db/connectionToDB");
const putUserById = async (req, res) => {
  await prisma.utenti.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      user: req.body.user,
      professione: req.body.professione,
    },
  });
  res.send("updated");
};
module.exports = { putUserById };
