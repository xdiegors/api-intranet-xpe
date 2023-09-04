import express from "express";
import FoodController from "../controllers/food.controller.js";
import { autorizarAdmin, autorizarUser } from "../utils/autenticar.js";

const router = express.Router();

// food
router.post("/", autorizarAdmin(), FoodController.createFood);
router.get("/", FoodController.getAllFood);
router.get("/:id", FoodController.getFoodById);
router.delete("/:id", autorizarAdmin(), FoodController.deleteFood);
router.put("/", autorizarAdmin(), FoodController.updateFood);

export default router;
