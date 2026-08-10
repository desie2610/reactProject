import { useEffect, useRef, useState } from "react";

import {
  NewsSection,
  NewsTitle,
  NewsList,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsDescription,
  MoreButton,
} from "./News.styled";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const PAGE_SIZE = 4;

export default function News() {
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const [hasMore, setHasMore] = useState(true);

  const titleRef = useRef(null);

  const [isTitleVisible, setIsTitleVisible] =
    useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fetchNews = async (currentPage) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://newsapi.org/v2/everything?q=pets%20OR%20animals&language=en&sortBy=publishedAt&pageSize=${PAGE_SIZE}&page=${currentPage}&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        );
      }

      const data = await response.json();

      const validArticles = data.articles.filter(
        (article) =>
          article.title &&
          article.description &&
          article.urlToImage
      );

      setArticles(
        validArticles.slice(0, PAGE_SIZE)
      );

      setHasMore(
        validArticles.length >= PAGE_SIZE
      );
    } catch (error) {
      console.error(
        "Ошибка загрузки новостей:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;

    setPage(nextPage);

    fetchNews(nextPage);
  };

  return (
    <NewsSection>
      <NewsTitle
        ref={titleRef}
        $visible={isTitleVisible}
      >
        Interacting with our pets
      </NewsTitle>

      <NewsList>
        {articles.map((article, index) => (
          <NewsCard
            key={`${article.url}-${index}`}
            onClick={() =>
              window.open(
                article.url,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <NewsImage
              src={article.urlToImage}
              alt={article.title}
            />

            <NewsContent>
              <NewsDescription>
                {article.title}
              </NewsDescription>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsList>

      {hasMore && (
        <MoreButton
          type="button"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "See more"}
        </MoreButton>
      )}
    </NewsSection>
  );
}