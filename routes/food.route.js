import express from "express";
import FoodController from "../controllers/food.controller.js";
import verifyJWT from "../utils/autenticar.js";

const router = express.Router();

// food
router.post("/", verifyJWT, FoodController.createFood);
router.get("/", FoodController.getAllFood);
router.get("/:id", FoodController.getFoodById);
router.delete("/:id", verifyJWT, FoodController.deleteFood);
router.put("/", verifyJWT, FoodController.updateFood);

export default router;
