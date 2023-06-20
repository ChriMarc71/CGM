const { prisma } = require("../../../db/connectionToDB");
const register = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await prisma.auth.create({
    data: {
      Username: username,
      Password: password,
    },
  });
  res.send("Registrazione fatta");
};

module.exports = { register };
