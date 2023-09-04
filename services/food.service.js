import FoodRepository from "../repositories/food.repository.js";
// MONGO_DB

async function createFood(food) {
  return await FoodRepository.createFood(food);
}

async function deleteFood(food_id) {
  await FoodRepository.deleteFood(food_id);
}

async function updateFood(food, updatedFood) {
  return await FoodRepository.updateFood(food, updatedFood);
}

async function getFood() {
  return await FoodRepository.getFood();
}

async function getFoodById(id) {
  return await FoodRepository.getFoodById(id);
}

export default {
  createFood,
  getFood,
  deleteFood,
  updateFood,
  getFoodById,
};
