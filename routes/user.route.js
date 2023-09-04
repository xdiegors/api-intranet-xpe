import express from "express";
import UserController from "../controllers/user.controller.js";
import { autorizarAdmin, autorizarUser } from "../utils/autenticar.js";

const router = express.Router();

router.post("/", autorizarAdmin(), UserController.createUser);
router.get("/", autorizarAdmin(), UserController.getUsers);
router.get("/:id", autorizarAdmin(), UserController.getUser);
router.delete("/:id", autorizarAdmin(), UserController.deleteUser);
router.put("/", UserController.updateUser); //somente do proprio cliente

export default router;
