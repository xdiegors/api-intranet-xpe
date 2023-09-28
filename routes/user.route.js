import express from "express";
import UserController from "../controllers/user.controller.js";
import verifyJWT from "../utils/autenticar.js";

const router = express.Router();

router.post("/", verifyJWT, UserController.createUser);
router.get("/", verifyJWT, UserController.getUsers);
router.get("/:id", verifyJWT, UserController.getUser);
router.delete("/:id", verifyJWT, UserController.deleteUser);
router.put("/", verifyJWT, UserController.updateUser); //somente do proprio cliente

export default router;
