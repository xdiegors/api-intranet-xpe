import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.delete("/:id", UserController.deleteUser);
router.put("/", UserController.updateUser); //somente do proprio cliente

export default router;
