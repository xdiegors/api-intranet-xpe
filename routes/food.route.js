import express from "express";
import FoodController from "../controllers/food.controller.js";

const router = express.Router();

// food
router.post("/", FoodController.createFood);
router.get("/", FoodController.getAllFood);
router.get("/:id", FoodController.getFoodById);
router.delete("/:id", FoodController.deleteFood);
router.put("/", FoodController.updateFood);

export default router;
