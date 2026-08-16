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

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Weather News Server is running",
  });
});

app.get("/api/news", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const supportedLanguages = ["en", "es", "de"];
    const language = supportedLanguages.includes(req.query.lang)
      ? req.query.lang
      : "en";

    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        status: "error",
        message: "NEWS_API_KEY is not configured",
      });
    }

    const url =
      "https://newsapi.org/v2/everything" +
      "?q=pets%20OR%20animals" +
      `&language=${language}` +
      "&sortBy=publishedAt" +
      "&pageSize=4" +
      `&page=${page}` +
      `&apiKey=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      console.error("News API error:", data);

      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      status: "error",
      message: "Failed to load news",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
