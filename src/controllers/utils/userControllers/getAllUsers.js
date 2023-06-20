const prisma = require("@prisma/client");
const getAllUsers = async (req, res) => {
  res.json(await prisma.utenti.findMany());
};
module.exports = { getAllUsers };
