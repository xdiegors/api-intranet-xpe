import * as mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  id: Number,
  content: String,
  date: Date,
});

export default NewsSchema;
