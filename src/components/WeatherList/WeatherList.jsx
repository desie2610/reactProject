import { useEffect, useState } from "react";
import {
  FiRefreshCw,
  FiHeart,
  FiTrash2,
} from "react-icons/fi";

import {
  WeatherSection,
  WeatherListWrapper,
  WeatherCard,
  CardTop,
  City,
  Country,
  Time,
  ForecastButtons,
  ForecastButton,
  DateInfo,
  DateDivider,
  WeatherIcon,
  Temperature,
  CardActions,
  ActionButton,
  FavoriteButton,
  MoreButton,
  DeleteButton,
} from "./WeatherList.styled";

export default function WeatherList({
  cities,
  favorites,
  onRefresh,
  onFavorite,
  onDelete,
}) {
  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCityDate = (timezone) => {
    const utcTime =
      currentTime.getTime() +
      currentTime.getTimezoneOffset() * 60000;

    return new Date(utcTime + timezone * 1000);
  };

  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(
      2,
      "0"
    );

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formatWeekday = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
    });

  if (cities.length === 0) return null;

  return (
    <WeatherSection>
      <WeatherListWrapper>
        {cities.map((city) => {
          const cityDate = getCityDate(city.timezone);

          // Проверяем, есть ли город в избранном
          const isFavorite = favorites.some(
            (favorite) => favorite.id === city.id
          );

          return (
            <WeatherCard key={city.id}>
              <CardTop>
                <City>{city.name}</City>

                <Country>{city.country}</Country>
              </CardTop>

              <Time>
                {formatTime(cityDate)}
              </Time>

              <ForecastButtons>
                <ForecastButton type="button">
                  Hourly forecast
                </ForecastButton>

                <ForecastButton type="button">
                  Weekly forecast
                </ForecastButton>
              </ForecastButtons>

              <DateInfo>
                <span>
                  {formatDate(cityDate)}
                </span>

                <DateDivider />

                <span>
                  {formatWeekday(cityDate)}
                </span>
              </DateInfo>

              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                alt={city.description}
              />

              <Temperature>
                {Math.round(city.temperature)}°C
              </Temperature>

              <CardActions>
                <ActionButton
                  type="button"
                  onClick={() => onRefresh(city)}
                >
                  <FiRefreshCw />
                </ActionButton>

                <FavoriteButton
                  type="button"
                  $active={isFavorite}
                  onClick={() => onFavorite(city.id)}
                >
                  <FiHeart />
                </FavoriteButton>

                <MoreButton type="button">
                  See more
                </MoreButton>

                <DeleteButton
                  type="button"
                  onClick={() => onDelete(city.id)}
                >
                  <FiTrash2 />
                </DeleteButton>
              </CardActions>
            </WeatherCard>
          );
        })}
      </WeatherListWrapper>
    </WeatherSection>
  );
}