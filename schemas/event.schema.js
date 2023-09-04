import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema({
  name: String,
  date: Date,
});

export default EventsSchema;
