import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import Profile from "./components/Profile/Profile";
import WeatherList from "./components/WeatherList/WeatherList";

import { GlobalStyle } from "./GlobalStyle";
import { AppWrapper } from "./App.styled";

export default function App() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [cities, setCities] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Загружаем данные из localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("weatherUser");
    const savedAvatar =
      localStorage.getItem("weatherAvatar");

    const savedFavorites =
      localStorage.getItem("weatherFavorites");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedAvatar) {
      setAvatar(savedAvatar);
    }

    if (savedFavorites) {
      const parsedFavorites =
        JSON.parse(savedFavorites);

      setFavorites(parsedFavorites);

      // После перезагрузки показываем только избранные города
      setCities(parsedFavorites);
    }

    setIsLoaded(true);
  }, []);

  // Сохраняем избранные города
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "weatherFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites, isLoaded]);

  // Регистрация
  const handleSignUp = (userData) => {
    localStorage.setItem(
      "weatherUser",
      JSON.stringify(userData)
    );

    setUser(userData);
    setIsModalOpen(false);

    toast.success("Account created successfully!");
  };

  // Изменение данных профиля
  const handleUserUpdate = (updatedUser) => {
    localStorage.setItem(
      "weatherUser",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    toast.success("Profile updated!");
  };

  // Изменение аватарки
  const handleAvatarChange = (newAvatar) => {
    localStorage.setItem(
      "weatherAvatar",
      newAvatar
    );

    setAvatar(newAvatar);

    toast.success("Avatar updated!");
  };

  // Выход
  const handleLogout = () => {
    localStorage.removeItem("weatherUser");
    localStorage.removeItem("weatherAvatar");

    setUser(null);
    setAvatar(null);

    setIsProfileOpen(false);

    toast.success("You have logged out.");
  };

  // Открытие регистрации
  const openSignUp = () => {
    setIsModalOpen(true);
  };

  // Закрытие регистрации
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Открытие профиля
  const openProfile = () => {
    if (user) {
      setIsProfileOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  // Закрытие профиля
  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  // Добавление города
  const handleCityAdd = (newCity) => {
    setCities((prevCities) => {
      const alreadyExists = prevCities.some(
        (city) => city.id === newCity.id
      );

      if (alreadyExists) {
        toast.info("This city is already added.");
        return prevCities;
      }

      toast.success(
        `${newCity.name} added successfully!`
      );

      return [...prevCities, newCity];
    });
  };

  // Удаление города
  const handleDeleteCity = (cityId) => {
    setCities((prevCities) =>
      prevCities.filter(
        (city) => city.id !== cityId
      )
    );

    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (city) => city.id !== cityId
      )
    );
  };

  // Добавление / удаление из избранного
  const handleFavorite = (cityId) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(
        (city) => city.id === cityId
      );

      // Если город уже в избранном — удаляем его
      if (isFavorite) {
        const updatedFavorites =
          prevFavorites.filter(
            (city) => city.id !== cityId
          );

        localStorage.setItem(
          "weatherFavorites",
          JSON.stringify(updatedFavorites)
        );

        return updatedFavorites;
      }

      // Находим город среди текущих карточек
      const city = cities.find(
        (city) => city.id === cityId
      );

      if (!city) {
        return prevFavorites;
      }

      // Добавляем полный объект города в избранное
      const updatedFavorites = [
        ...prevFavorites,
        city,
      ];

      localStorage.setItem(
        "weatherFavorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  // Обновление погоды
  const handleRefresh = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        );
      }

      const weather = await response.json();

      const updatedCity = {
        ...city,

        temperature: weather.main.temp,

        icon: weather.weather[0].icon,

        description:
          weather.weather[0].description,

        timezone: weather.timezone,
      };

      // Обновляем карточки
      setCities((prevCities) =>
        prevCities.map((item) =>
          item.id === city.id
            ? updatedCity
            : item
        )
      );

      // Если город избранный — обновляем его
      // и в localStorage
      setFavorites((prevFavorites) =>
        prevFavorites.map((item) =>
          item.id === city.id
            ? updatedCity
            : item
        )
      );

      toast.success("Weather updated!");
    } catch (error) {
      console.error(
        "Помилка оновлення погоди:",
        error
      );

      toast.error("Failed to update weather.");
    }
  };

  return (
    <>
      <GlobalStyle />

      <AppWrapper>
        <Header
          user={user}
          avatar={avatar}
          onSignUp={openSignUp}
          onProfile={openProfile}
        />

        <Hero onCityAdd={handleCityAdd} />

        <WeatherList
          cities={cities}
          favorites={favorites}
          onRefresh={handleRefresh}
          onFavorite={handleFavorite}
          onDelete={handleDeleteCity}
        />

        {isModalOpen && (
          <Modal
            onClose={closeModal}
            onSubmit={handleSignUp}
          />
        )}

        {isProfileOpen && user && (
          <Profile
            user={user}
            avatar={avatar}
            onClose={closeProfile}
            onUserUpdate={handleUserUpdate}
            onAvatarChange={handleAvatarChange}
            onLogout={handleLogout}
          />
        )}

        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
        />
      </AppWrapper>
    </>
  );
}