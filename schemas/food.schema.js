import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  dish1: String,
  dish2: String,
  garnish1: String,
  garnish2: String,
  date: Date,
});

export default FoodSchema;
