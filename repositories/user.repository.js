import UsersSchema from "../schemas/user.schema.js";
import { connect } from "./mongo.db.js";

// MONGO_DB

async function insertUser(user) {
  try {
    const mongoose = await connect();
    const User = mongoose.model("User", UsersSchema);
    user = new User(user);
    await user.save();
  } catch (err) {
    throw err;
  }
}

async function getUser(username) {
  try {
    const mongoose = await connect();
    const User = mongoose.model("User", UsersSchema);
    const query = User.findOne({ name: username });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateUser(username, updatedUser) {
  try {
    const mongoose = await connect();
    const User = mongoose.model("User", UsersSchema);
    await User.findOneAndUpdate({ name: username }, updatedUser);
  } catch (err) {
    throw err;
  }
}

async function deleteUser(username) {
  try {
    const mongoose = await connect();
    const User = mongoose.model("User", UsersSchema);
    await User.deleteOne({ name: username });
  } catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    const mongoose = await connect();
    const User = mongoose.model("User", UsersSchema);
    const query = User.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  insertUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
};
