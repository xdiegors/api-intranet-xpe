import NewsSchema from "../schemas/news.schema.js";
import { connect } from "./mongo.db.js";

// MONGO_DB

async function createNews(news) {
  try {
    const mongoose = await connect();
    const News = mongoose.model("News", NewsSchema);
    news = new News(news);
    await news.save();
  } catch (err) {
    throw err;
  }
}

async function getNewsById(id) {
  try {
    const mongoose = await connect();
    const News = mongoose.model("News", NewsSchema);
    const query = News.findOne({ id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateNews(id, updatedNews) {
  try {
    const mongoose = await connect();
    const News = mongoose.model("News", NewsSchema);
    await News.findOneAndUpdate({ id }, updatedNews);
  } catch (err) {
    throw err;
  }
}

async function deleteNews(id) {
  try {
    const mongoose = await connect();
    const News = mongoose.model("News", NewsSchema);
    await News.deleteOne({ id });
  } catch (err) {
    throw err;
  }
}

async function getNews() {
  try {
    const mongoose = await connect();
    const News = mongoose.model("News", NewsSchema);
    const query = News.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
  getNews,
};
