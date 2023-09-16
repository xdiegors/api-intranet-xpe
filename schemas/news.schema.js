import * as mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  content: String,
  date: Date,
});

export default NewsSchema;
