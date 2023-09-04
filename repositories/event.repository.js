import EventSchema from "../schemas/event.schema.js";
import { connect } from "./mongo.db.js";

// MONGO_DB

async function createEvent(event) {
  try {
    const mongoose = await connect();
    const Event = mongoose.model("Event", EventSchema);
    event = new Event(event);
    await event.save();
  } catch (err) {
    throw err;
  }
}

async function getEventById(id) {
  try {
    const mongoose = await connect();
    const Event = mongoose.model("Event", EventSchema);
    const query = Event.findOne({ id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateEvent(id, updatedEvent) {
  try {
    const mongoose = await connect();
    const Event = mongoose.model("Event", EventSchema);
    await Event.findOneAndUpdate({ id }, updatedEvent);
  } catch (err) {
    throw err;
  }
}

async function deleteEvent(id) {
  try {
    const mongoose = await connect();
    const Event = mongoose.model("Event", EventSchema);
    await Event.deleteOne({ id });
  } catch (err) {
    throw err;
  }
}

async function getEvent() {
  try {
    const mongoose = await connect();
    const Event = mongoose.model("Event", EventSchema);
    const query = Event.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  getEvent,
};
