const { prisma } = require("../../../db/connectionToDB");
const deleteUserById = async (req, res) => {
  await prisma.utenti.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.send("deleted");
};
module.exports = { deleteUserById };
