import FoodService from "../services/food.service.js";

async function createFood(req, res, next) {
  try {
    let food = req.body;
    // if (!food.id || !food.content || !food.date) {
    //   throw new Error("Id, conteúdo e data são obrigatórios.");
    // }
    food = await FoodService.createFood(food);
    res.send(food);
    //logger.info(`POST /food - ${JSON.stringify(food)}`);
  } catch (err) {
    next(err);
  }
}

async function getAllFood(req, res, next) {
  try {
    res.send(await FoodService.getFood(req.query.autor_id));
    //logger.info("GET /food");
  } catch (err) {
    next(err);
  }
}

async function getFoodById(req, res, next) {
  try {
    res.send(await FoodService.getFoodById(req.params.id));
    //logger.info("GET /food");
  } catch (err) {
    next(err);
  }
}

async function deleteFood(req, res, next) {
  try {
    await FoodService.deleteFood(req.params.id);
    res.end();
    //logger.info("DELETE /food");
  } catch (err) {
    next(err);
  }
}

async function updateFood(req, res, next) {
  try {
    let food = req.body;
    // if (!food.id || !food.content || !food.date) {
    //   throw new Error("Id, conteúdo e data são obrigatórios.");
    // }
    food = await FoodService.updateFood(food.id, food);
    res.send(food);
    //logger.info(`PUT /food - ${JSON.stringify(food)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createFood,
  getAllFood,
  getFoodById,
  deleteFood,
  updateFood,
};
