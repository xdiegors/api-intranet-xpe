import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: String,
  password: String,
});

export default UsersSchema;
