import express from "express";
import EventController from "../controllers/event.controller.js";
import verifyJWT from "../utils/autenticar.js";

const router = express.Router();

// event
router.post("/", verifyJWT, EventController.createEvent);
router.get("/", EventController.getAllEvent);
router.get("/:id", EventController.getEventById);
router.delete("/:id", verifyJWT, EventController.deleteEvent);
router.put("/", verifyJWT, EventController.updateEvent);

export default router;
