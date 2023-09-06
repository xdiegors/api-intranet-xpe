import express from "express";
import EventController from "../controllers/event.controller.js";

const router = express.Router();

// event
router.post("/", EventController.createEvent);
router.get("/", EventController.getAllEvent);
router.get("/:id", EventController.getEventById);
router.delete("/:id", EventController.deleteEvent);
router.put("/", EventController.updateEvent);

export default router;
