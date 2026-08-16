import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n";

import {
  NatureSection,
  NatureTitle,
  Slider,
  Slide,
  Loading,
  ErrorMessage,
} from "./NatureSlider.styled";

const API_KEY =
  import.meta.env.VITE_PIXABAY_API_KEY;

export default function NatureSlider() {
  const { language } = useLanguage();
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] =
    useState(2);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    const loadNatureImages = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=beautiful+nature&lang=${language === "uk" ? "en" : language}&image_type=photo&orientation=horizontal&per_page=7&safesearch=true`
        );

        if (!response.ok) {
          throw new Error(
            `HTTP error: ${response.status}`
          );
        }

        const data =
          await response.json();

        if (
          !Array.isArray(data.hits) ||
          data.hits.length === 0
        ) {
          throw new Error(
            "Nature images not found"
          );
        }

        setImages(
          data.hits.map((item) => ({
            id: item.id,
            url: item.webformatURL,
            largeUrl: item.largeImageURL,
            alt:
              item.tags ||
              "Beautiful nature",
          }))
        );
      } catch (error) {
        console.error(
          "Ошибка загрузки фотографий природы:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadNatureImages();
  }, [language]);

  useEffect(() => {
    if (images.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1
          ? 0
          : current + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images]);

  const getPosition = (index) => {
    let difference =
      index - activeIndex;

    if (
      difference >
      images.length / 2
    ) {
      difference -= images.length;
    }

    if (
      difference <
      -images.length / 2
    ) {
      difference += images.length;
    }

    return difference;
  };

  if (loading) {
    return (
      <NatureSection>
        <NatureTitle>
          Beautiful nature
        </NatureTitle>

        <Loading>
          Loading...
        </Loading>
      </NatureSection>
    );
  }

  if (error) {
    return (
      <NatureSection>
        <NatureTitle>
          Beautiful nature
        </NatureTitle>

        <ErrorMessage>
          Failed to load images.
        </ErrorMessage>
      </NatureSection>
    );
  }

  return (
    <NatureSection>
      <NatureTitle>
        Beautiful nature
      </NatureTitle>

      <Slider>
        {images.map((image, index) => {
          const position =
            getPosition(index);

          return (
            <Slide
              key={image.id}
              $position={position}
              onClick={() =>
                setActiveIndex(index)
              }
            >
              <img
                src={image.url}
                alt={image.alt}
              />
            </Slide>
          );
        })}
      </Slider>
    </NatureSection>
  );
}
