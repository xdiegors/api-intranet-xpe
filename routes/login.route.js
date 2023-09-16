import express from "express";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/user.repository.js";

const router = express.Router();

// Get users from your UserRepository
async function getUsers() {
  return await UserRepository.getUsers();
}

// Authentication route
router.post("/", async (req, res, next) => {
  try {
    // Fetch users from the database or wherever you store them
    const users = await getUsers();

    // Find a user with matching name and password
    const user = users.find(
      (u) => u.name === req.body.name && u.password === req.body.password
    );

    if (user) {
      // Authentication successful
      const id = user._id; // Use the actual user's ID
      const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: 3000, // expires in 5 minutes
      });
      return res.json({ auth: true, token: token });
    }

    // No matching user found
    res.status(401).json({ message: "Login inválido!" });
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Erro durante a autenticação" });
  }
});

router.post("/logout", function (req, res) {
  res.json({ auth: false, token: null });
});

export default router;
