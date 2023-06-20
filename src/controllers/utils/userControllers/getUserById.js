const prisma = require("@prisma/client");
const getUserById = async (req, res) => {
  const user = await prisma.utenti.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.send(user);
};

module.exports = { getUserById };
