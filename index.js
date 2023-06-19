let express = require("express");
const app = express();
const userRouter = require("./src/routes/utenti.js");
const authRouter = require("./src/routes/auth.js");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/user", userRouter);
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Benvenuto");
});

app.listen(8080);
