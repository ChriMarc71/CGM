const { prisma } = require("../../../db/connectionToDB");
const getAllUsers = async (req, res) => {
  res.json(await prisma.utenti.findMany());
};
module.exports = { getAllUsers };
