import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import {
  NewsSection,
  NewsContainer,
  NewsContent,
  NewsLabel,
  NewsTitle,
  NewsText,
  NewsButtons,
  NewsButton,
  NewsImageWrapper,
  NewsSideImage,
  NewsImage,
} from "./News.styled";

const API_URL = "https://reactproject-gsav.onrender.com/api/news";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

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
        !Array.isArray(data.articles) ||
        data.articles.length === 0
      ) {
        throw new Error("Новости не найдены");
      }

      setArticles((previousArticles) => {
        const existingUrls = new Set(
          previousArticles.map((article) => article.url)
        );

        const newArticles = data.articles.filter(
          (article) =>
            article.url && !existingUrls.has(article.url)
        );

        return [...previousArticles, ...newArticles];
      });

      setPage(pageNumber);
    } catch (error) {
      console.error("Ошибка загрузки новостей:", error);

      if (pageNumber === 1) {
        setError(true);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Предзагрузка ближайших изображений
  useEffect(() => {
    const imagesToPreload = articles.slice(
      Math.max(0, currentIndex - 1),
      currentIndex + 3
    );

    imagesToPreload.forEach((article) => {
      if (!article?.urlToImage) return;

      const image = new Image();
      image.src = article.urlToImage;
    });
  }, [articles, currentIndex]);

  // Первая загрузка
  useEffect(() => {
    loadNews(1);
  }, []);

  // Следующая новость
  const handleNext = async () => {
    if (loadingMore) return;

    const nextIndex = currentIndex + 1;

    // Если следующая новость уже загружена
    if (nextIndex < articles.length) {
      setCurrentIndex(nextIndex);
      return;
    }

    // Дошли до конца загруженных новостей
    const nextPage = page + 1;

    try {
      setLoadingMore(true);

      const response = await fetch(
        `${API_URL}?page=${nextPage}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (
        data.status !== "ok" ||
        !Array.isArray(data.articles) ||
        data.articles.length === 0
      ) {
        console.log("Більше новин немає.");
        return;
      }

      const existingUrls = new Set(
        articles.map((article) => article.url)
      );

      const newArticles = data.articles.filter(
        (article) =>
          article.url && !existingUrls.has(article.url)
      );

      if (newArticles.length === 0) {
        console.log("Нових унікальних новин немає.");
        return;
      }

      const newStartIndex = articles.length;

      setArticles((previousArticles) => [
        ...previousArticles,
        ...newArticles,
      ]);

      setPage(nextPage);

      // Переходимо на першу новину нової сторінки
      setCurrentIndex(newStartIndex);

      // Одразу передзавантажуємо нові зображення
      newArticles.slice(0, 3).forEach((article) => {
        if (!article?.urlToImage) return;

        const image = new Image();
        image.src = article.urlToImage;
      });
    } catch (error) {
      console.error(
        "Помилка завантаження наступної сторінки:",
        error
      );
    } finally {
      setLoadingMore(false);
    }
  };

  // Предыдущая новость
  const handlePrevious = () => {
    if (loadingMore) return;

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentArticle = articles[currentIndex];

  const previousArticle =
    currentIndex > 0
      ? articles[currentIndex - 1]
      : null;

  const nextArticle =
    currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  return (
    <NewsSection ref={sectionRef}>
      <NewsContainer>
        <NewsContent
          className={isVisible ? "visible" : ""}
        >
          <NewsLabel>NEWS</NewsLabel>

          {loading ? (
            <>
              <NewsTitle>Loading...</NewsTitle>

              <NewsText>
                Please wait while we load the latest
                news.
              </NewsText>
            </>
          ) : error ? (
            <>
              <NewsTitle>
                Something went wrong
              </NewsTitle>

              <NewsText>
                We couldn't load the latest news.
              </NewsText>

              <NewsButton
                type="button"
                onClick={() => loadNews(1)}
              >
                Try again
                <FiArrowRight />
              </NewsButton>
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

              <NewsButtons>
                <NewsButton
                  type="button"
                  onClick={handlePrevious}
                  disabled={
                    loadingMore ||
                    currentIndex === 0
                  }
                >
                  <FiArrowLeft />
                  Back
                </NewsButton>

                <NewsButton
                  type="button"
                  onClick={handleNext}
                  disabled={loadingMore}
                >
                  {loadingMore
                    ? "Loading..."
                    : "See more"}

                  <FiArrowRight />
                </NewsButton>
              </NewsButtons>
            </>
          )}
        </NewsContent>

        <NewsImageWrapper
          className={isVisible ? "visible" : ""}
        >
          {previousArticle?.urlToImage && (
            <NewsSideImage
              className="previous"
              src={previousArticle.urlToImage}
              alt={
                previousArticle.title ||
                "Previous news"
              }
            />
          )}

          {nextArticle?.urlToImage && (
            <NewsSideImage
              className="next"
              src={nextArticle.urlToImage}
              alt={
                nextArticle.title ||
                "Next news"
              }
            />
          )}

          {currentArticle?.urlToImage && (
            <NewsImage
              key={currentArticle.urlToImage}
              src={currentArticle.urlToImage}
              alt={
                currentArticle.title || "News"
              }
              onLoad={(event) => {
                event.currentTarget.classList.add(
                  "loaded"
                );
              }}
            />
          )}
        </NewsImageWrapper>
      </NewsContainer>
    </NewsSection>
  );
}