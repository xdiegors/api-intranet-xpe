import FoodSchema from "../schemas/food.schema.js";
import { connect } from "./mongo.db.js";

// MONGO_DB

async function createFood(food) {
  try {
    const mongoose = await connect();
    const Food = mongoose.model("Food", FoodSchema);
    food = new Food(food);
    await food.save();
  } catch (err) {
    throw err;
  }
}

async function getFoodById(id) {
  try {
    const mongoose = await connect();
    const Food = mongoose.model("Food", FoodSchema);
    const query = Food.findOne({ id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateFood(id, updatedFood) {
  try {
    const mongoose = await connect();
    const Food = mongoose.model("Food", FoodSchema);
    await Food.findOneAndUpdate({ id }, updatedFood);
  } catch (err) {
    throw err;
  }
}

async function deleteFood(id) {
  try {
    const mongoose = await connect();
    const Food = mongoose.model("Food", FoodSchema);
    await Food.deleteOne({ id });
  } catch (err) {
    throw err;
  }
}

async function getFood() {
  try {
    const mongoose = await connect();
    const Food = mongoose.model("Food", FoodSchema);
    const query = Food.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createFood,
  getFoodById,
  updateFood,
  deleteFood,
  getFood,
};
