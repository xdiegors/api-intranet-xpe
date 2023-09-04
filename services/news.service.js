import NewsRepository from "../repositories/news.repository.js";
// MONGO_DB

async function createNews(news) {
  return await NewsRepository.createNews(news);
}

async function deleteNews(news_id) {
  await NewsRepository.deleteNews(news_id);
}

async function updateNews(news, updatedNews) {
  return await NewsRepository.updateNews(news, updatedNews);
}

async function getNews() {
  return await NewsRepository.getNews();
}

async function getNewsById(id) {
  return await NewsRepository.getNewsById(id);
}

export default {
  createNews,
  getNews,
  deleteNews,
  updateNews,
  getNewsById,
};
