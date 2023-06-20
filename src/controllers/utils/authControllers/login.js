const { prisma } = require("../../../db/connectionToDB");
const jwt = require("jsonwebtoken");
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
    const token = jwt.sign(
      { Id: founded[0].Id },
      "AlgernonAlgernonAlgernonAlgernon",
      {
        expiresIn: "4h",
        algorithm: "HS256",
      }
    );
    res.json({
      Token: token,
    });
  } else {
    res.send("Username o password sbagliati");
  }
};

module.exports = { login };
