import express from "express";
import NewsController from "../controllers/news.controller.js";
import { autorizarAdmin, autorizarUser } from "../utils/autenticar.js";

const router = express.Router();

// news
router.post("/", autorizarAdmin(), NewsController.createNews);
router.get("/", NewsController.getAllNews);
router.get("/:id", NewsController.getNewsById);
router.delete("/:id", autorizarAdmin(), NewsController.deleteNews);
router.put("/", autorizarAdmin(), NewsController.updateNews);

export default router;
