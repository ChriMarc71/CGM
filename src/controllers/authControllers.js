const prisma = require("./../db/connectionToDB.js");

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

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password; //const {username,password} = req.body
  const founded = await prisma.auth.findMany({
    select: {
      Id: true,
    },
    where: {
      Username: username,
      Password: password,
    },
  });

  console.log(founded);
  if (founded.length != 0) {
    const token = jwt.sign(founded[0].Id, "AlgernonAlgernonAlgernonAlgernon");
    res.json({
      Token: token,
    });
  } else {
    res.send("Username o password sbagliati");
  }
};

const resetPassword = async (req, res) => {
  await prisma.auth.update({
    where: { Username: req.body.username },
    data: { Password: req.body.password },
  });
  res.send("Password aggiornata");
};

module.exports = { register, login, resetPassword };
