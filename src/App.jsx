import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import Profile from "./components/Profile/Profile";

import { GlobalStyle } from "./GlobalStyle";
import { AppWrapper } from "./App.styled";

export default function App() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Загружаем данные из localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("weatherUser");
    const savedAvatar = localStorage.getItem("weatherAvatar");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

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
    localStorage.setItem("weatherAvatar", newAvatar);

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

        <Hero />

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