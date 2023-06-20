const prisma = require("@prisma/client");
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

  if (founded.length != 0) {
    const token = jwt.sign(founded[0].Id, "AlgernonAlgernonAlgernonAlgernon");
    res.json({
      Token: token,
    });
  } else {
    res.send("Username o password sbagliati");
  }
};

module.exports = { login };
