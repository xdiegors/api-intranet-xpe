import express from "express";
import DocumentController from "../controllers/document.controller.js";
import { autorizarAdmin, autorizarUser } from "../utils/autenticar.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

// document
router.post(
  "/",
  autorizarAdmin(),
  upload.single("file"),
  DocumentController.createDocument
);
router.get("/", DocumentController.getAllDocument);
router.get("/:id", DocumentController.getDocumentById);
router.delete("/:id", autorizarAdmin(), DocumentController.deleteDocument);
router.put("/", autorizarAdmin(), DocumentController.updateDocument);

export default router;
