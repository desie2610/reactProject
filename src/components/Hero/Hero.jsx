import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import heroBg from "../../assets/weather.png";

import {
  HeroWrapper,
  HeroBackground,
  HeroContent,
  Title,
  Info,
  Description,
  Divider,
  DateBlock,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Hero.styled";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function Hero() {
  const [query, setQuery] = useState("");

  const searchLocation = async () => {
    const value = query.trim();

    if (!value) {
      console.log("Введіть назву місста для пошуку");
      return;
    }

    try {
     const response = await fetch(
  `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    value
  )}&limit=5&appid=${API_KEY}`
);;

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      console.log("Результати пошуку:", data);

      if (data.length === 0) {
        console.log("Місто не знайдено");
        return;
      }

      data.forEach((location, index) => {
        console.log(
          `${index + 1}. ${location.name}, ${location.country}`,
          {
            city: location.name,
            country: location.country,
            state: location.state || "Немає данних",
            latitude: location.lat,
            longitude: location.lon,
          }
        );
      });
    } catch (error) {
      console.error("Помилка пошуку:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchLocation();
  };

  return (
    <HeroWrapper>
      <HeroBackground
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <HeroContent>
        <Title>Weather dashboard</Title>

        <Info>
          <Description>
            Create your personal list of
            <br />
            favorite cities and always be
            <br />
            aware of the weather.
          </Description>

          <Divider />

          <DateBlock>
            October 2023
            <br />
            Friday, 13<sup>th</sup>
          </DateBlock>
        </Info>

        <SearchWrapper onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search location..."
          />

          <SearchButton type="submit">
            <FiSearch />
          </SearchButton>
        </SearchWrapper>
      </HeroContent>
    </HeroWrapper>
  );
}