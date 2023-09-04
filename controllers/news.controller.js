import NewsService from "../services/news.service.js";

async function createNews(req, res, next) {
  try {
    let news = req.body;
    if (!news.content || !news.date) {
      throw new Error("Id, conteúdo e data são obrigatórios.");
    }
    news = await NewsService.createNews(news);
    res.send(news);
    //logger.info(`POST /news - ${JSON.stringify(news)}`);
  } catch (err) {
    next(err);
  }
}

async function getAllNews(req, res, next) {
  try {
    res.send(await NewsService.getNews(req.query.autor_id));
    //logger.info("GET /news");
  } catch (err) {
    next(err);
  }
}

async function getNewsById(req, res, next) {
  try {
    res.send(await NewsService.getNewsById(req.params.id));
    //logger.info("GET /news");
  } catch (err) {
    next(err);
  }
}

async function deleteNews(req, res, next) {
  try {
    await NewsService.deleteNews(req.params.id);
    res.end();
    //logger.info("DELETE /news");
  } catch (err) {
    next(err);
  }
}

async function updateNews(req, res, next) {
  try {
    let news = req.body;
    if (!news.id || !news.content || !news.date) {
      throw new Error("Id, conteúdo e data são obrigatórios.");
    }
    news = await NewsService.updateNews(news.id, news);
    res.send(news);
    //logger.info(`PUT /news - ${JSON.stringify(news)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createNews,
  getAllNews,
  getNewsById,
  deleteNews,
  updateNews,
};
