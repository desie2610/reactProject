import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/news", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const url =
      `https://newsapi.org/v2/everything` +
      `?q=pets%20OR%20animals` +
      `&language=en` +
      `&sortBy=publishedAt` +
      `&pageSize=4` +
      `&page=${page}` +
      `&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("News API error:", error);

    res.status(500).json({
      status: "error",
      message: "Failed to load news",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});