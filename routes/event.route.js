import express from "express";
import EventController from "../controllers/event.controller.js";
import { autorizarAdmin, autorizarUser } from "../utils/autenticar.js";

const router = express.Router();

// event
router.post("/", autorizarAdmin(), EventController.createEvent);
router.get("/", EventController.getAllEvent);
router.get("/:id", EventController.getEventById);
router.delete("/:id", autorizarAdmin(), EventController.deleteEvent);
router.put("/", autorizarAdmin(), EventController.updateEvent);

export default router;
