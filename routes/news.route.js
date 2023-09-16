import express from "express";
import NewsController from "../controllers/news.controller.js";
import verifyJWT from "../utils/autenticar.js";

const router = express.Router();

// news
router.post("/", NewsController.createNews);
router.get("/:id", NewsController.getNewsById);
router.get("/", NewsController.getAllNews);

router.delete("/:id", NewsController.deleteNews);
router.put("/", NewsController.updateNews);

export default router;
