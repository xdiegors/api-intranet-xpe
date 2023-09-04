import UserService from "../services/user.service.js";

async function createUser(req, res, next) {
  try {
    let user = req.body;
    if (!user.name || !user.password) {
      throw new Error("Nome e senha são obrigatórios.");
    }
    user = await UserService.createUser(user);
    res.send(user);
  } catch (err) {
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    res.send(await UserService.getUsers());
    //exceto o campo de senha, que não deve ser retornado neste endpoint
    //logger.info("GET /user");
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  try {
    res.send(await UserService.getUser(req.params.id));
    //exceto o campo de senha, que não deve ser retornado neste endpoint
    //logger.info("GET /user");
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    await UserService.deleteUser(req.params.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    let user = req.body;
    if (!user.name || !user.password) {
      throw new Error("Nome e senha são obrigatórios.");
    }
    user = await UserService.updateUser(user.name, user);
    res.send(user);
  } catch (err) {
    next(err);
  }
}

export default {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
