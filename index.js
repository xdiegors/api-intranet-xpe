import express from "express";
import cors from "cors";

import usersRouter from "./routes/user.route.js";
import loginRouter from "./routes/login.route.js";
import newsRouter from "./routes/news.route.js";
import foodRouter from "./routes/food.route.js";
import eventsRouter from "./routes/event.route.js";
import documentsRouter from "./routes/document.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/news", newsRouter);
app.use("/food", foodRouter);
app.use("/events", eventsRouter);
app.use("/documents", documentsRouter);

// app.use("/livro", livrosRouter);

app.listen(3000, () => {
  console.log("API iniciada com sucesso.");
});
