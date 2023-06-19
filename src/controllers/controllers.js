const prisma = require("./../db/connectionToDB.js");
const getUserById = async (req, res) => {
  const user = await prisma.utenti.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.send(user);
};
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
const deleteUserById = async (req, res) => {
  await prisma.utenti.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.send("deleted");
};
const getAllUsers = async (req, res) => {
  res.send(await prisma.utenti.findMany());
};
const postNewUser = async (req, res) => {
  await prisma.utenti.create({
    data: {
      user: req.body.user,
      professione: req.body.professione,
    },
  });
  res.send("created");
};

module.exports = {
  getUserById,
  putUserById,
  deleteUserById,
  getAllUsers,
  postNewUser,
};
