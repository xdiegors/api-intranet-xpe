import * as mongoose from "mongoose";

const File = new mongoose.Schema({
  name: String,
  date: Date,
});

export default File;
