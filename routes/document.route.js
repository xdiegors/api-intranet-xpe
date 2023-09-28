import express from "express";
import DocumentController from "../controllers/document.controller.js";
import multer from "multer";

const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
});

const router = express.Router();

// document
router.post("/", upload.single("file"), DocumentController.createDocument);
router.get("/", DocumentController.getAllDocument);
router.get("/:id", DocumentController.getDocumentById);
router.delete("/:name", DocumentController.deleteDocument);
router.put("/", DocumentController.updateDocument);

export default router;
