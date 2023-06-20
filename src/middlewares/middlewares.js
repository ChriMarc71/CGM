const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  jwt.verify(
    req.headers["authorization"],
    "AlgernonAlgernonAlgernonAlgernon",
    (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    }
  );
}

module.exports = { verifyToken };
