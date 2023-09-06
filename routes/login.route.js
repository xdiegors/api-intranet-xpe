import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
//authentication
router.post("/", (req, res, next) => {
  //esse teste abaixo deve ser feito no seu banco de dados
  if (req.body.user === "diego" && req.body.password === "123") {
    //auth ok
    const id = 1; //esse id viria do banco de dados
    const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: 300, // expires in 5min
    });
    return res.json({ auth: true, token: token });
  }

  res.status(500).json({ message: "Login inválido!" });
});

router.post("/logout", function (req, res) {
  res.json({ auth: false, token: null });
});

export default router;
