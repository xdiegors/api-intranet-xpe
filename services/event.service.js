import EventRepository from "../repositories/event.repository.js";
// MONGO_DB

async function createEvent(event) {
  return await EventRepository.createEvent(event);
}

async function deleteEvent(event_id) {
  await EventRepository.deleteEvent(event_id);
}

async function updateEvent(event, updatedEvent) {
  return await EventRepository.updateEvent(event, updatedEvent);
}

async function getEvent() {
  return await EventRepository.getEvent();
}

async function getEventById(id) {
  return await EventRepository.getEventById(id);
}

export default {
  createEvent,
  getEvent,
  deleteEvent,
  updateEvent,
  getEventById,
};
