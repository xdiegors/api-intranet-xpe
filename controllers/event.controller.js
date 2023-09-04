import EventService from "../services/event.service.js";

async function createEvent(req, res, next) {
  try {
    let event = req.body;
    // if (!event.id || !event.content || !event.date) {
    //   throw new Error("Id, conteúdo e data são obrigatórios.");
    // }
    event = await EventService.createEvent(event);
    res.send(event);
    //logger.info(`POST /event - ${JSON.stringify(event)}`);
  } catch (err) {
    next(err);
  }
}

async function getAllEvent(req, res, next) {
  try {
    res.send(await EventService.getEvent(req.query.autor_id));
    //logger.info("GET /event");
  } catch (err) {
    next(err);
  }
}

async function getEventById(req, res, next) {
  try {
    res.send(await EventService.getEventById(req.params.id));
    //logger.info("GET /event");
  } catch (err) {
    next(err);
  }
}

async function deleteEvent(req, res, next) {
  try {
    await EventService.deleteEvent(req.params.id);
    res.end();
    //logger.info("DELETE /event");
  } catch (err) {
    next(err);
  }
}

async function updateEvent(req, res, next) {
  try {
    let event = req.body;
    // if (!event.id || !event.content || !event.date) {
    //   throw new Error("Id, conteúdo e data são obrigatórios.");
    // }
    event = await EventService.updateEvent(event.id, event);
    res.send(event);
    //logger.info(`PUT /event - ${JSON.stringify(event)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createEvent,
  getAllEvent,
  getEventById,
  deleteEvent,
  updateEvent,
};
