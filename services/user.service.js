import UserRepository from "../repositories/user.repository.js";

async function createUser(user) {
  return await UserRepository.insertUser(user);
}

async function getUsers() {
  return await UserRepository.getUsers();
}

async function getUser(id) {
  return await UserRepository.getUser(id);
}

async function deleteUser(id) {
  await UserRepository.deleteUser(id);
}

async function updateUser(user, updatedUser) {
  return await UserRepository.updateUser(user, updatedUser);
}

export default {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
