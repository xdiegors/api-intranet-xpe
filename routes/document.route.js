import express from "express";
import DocumentController from "../controllers/document.controller.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

// document
router.post("/", upload.single("file"), DocumentController.createDocument);
router.get("/", DocumentController.getAllDocument);
router.get("/:id", DocumentController.getDocumentById);
router.delete("/:id", DocumentController.deleteDocument);
router.put("/", DocumentController.updateDocument);

export default router;
