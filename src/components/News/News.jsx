import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  NewsSection,
  NewsContainer,
  NewsContent,
  NewsLabel,
  NewsTitle,
  NewsText,
  NewsButton,
  NewsImageWrapper,
  NewsImage,
} from "./News.styled";

const API_URL = "https://reactproject-gsav.onrender.com/api/news";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Анимация при появлении секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Загрузка новостей
  const loadNews = async (pageNumber = 1) => {
    try {
      if (pageNumber === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setError(false);

      const response = await fetch(
        `${API_URL}?page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (
        data.status !== "ok" ||
        !data.articles ||
        data.articles.length === 0
      ) {
        throw new Error("Новости закончились");
      }

      setArticles((previousArticles) => [
        ...previousArticles,
        ...data.articles,
      ]);

      setPage(pageNumber);
    } catch (error) {
      console.error("Ошибка загрузки новостей:", error);
      setError(true);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Первая загрузка
  useEffect(() => {
    loadNews(1);
  }, []);

  // Следующая новость
  const handleNext = async () => {
    const nextIndex = currentIndex + 1;

    // Если следующая новость уже загружена
    if (nextIndex < articles.length) {
      setCurrentIndex(nextIndex);
      return;
    }

    // Если дошли до конца загруженных новостей
    if (!loadingMore) {
      await loadNews(page + 1);

      setCurrentIndex(nextIndex);
    }
  };

  const currentArticle = articles[currentIndex];

  return (
    <NewsSection ref={sectionRef}>
      <NewsContainer>
        <NewsContent className={isVisible ? "visible" : ""}>
          <NewsLabel>NEWS</NewsLabel>

          {loading ? (
            <>
              <NewsTitle>Loading...</NewsTitle>

              <NewsText>
                Please wait while we load the latest news.
              </NewsText>
            </>
          ) : error && !currentArticle ? (
            <>
              <NewsTitle>Something went wrong</NewsTitle>

              <NewsText>
                We couldn't load the latest news.
              </NewsText>
            </>
          ) : (
            <>
              <NewsTitle>
                {currentArticle?.title || "News"}
              </NewsTitle>

              <NewsText>
                {currentArticle?.description ||
                  "Read the latest news and interesting stories."}
              </NewsText>

              <NewsButton
                type="button"
                onClick={handleNext}
                disabled={loadingMore}
              >
                {loadingMore ? "Loading..." : "See more"}

                <FiArrowRight />
              </NewsButton>
            </>
          )}
        </NewsContent>

        <NewsImageWrapper
          className={isVisible ? "visible" : ""}
        >
          {currentArticle?.urlToImage && (
            <NewsImage
              key={currentArticle.urlToImage}
              src={currentArticle.urlToImage}
              alt={currentArticle.title || "News"}
            />
          )}
        </NewsImageWrapper>
      </NewsContainer>
    </NewsSection>
  );
}

/asdasdasdasd/