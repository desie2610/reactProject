import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    whoWeAre: "Who we are", contacts: "Contacts", menu: "Menu", signUp: "Sign up",
    customizeBackground: "Customize background", weatherDashboard: "Weather dashboard",
    heroDescription: "Create your personal list of favorite cities and always be aware of the weather.",
    searchLocation: "Search location...", hourlyForecast: "Hourly forecast", weeklyForecast: "Weekly forecast",
    seeMore: "See more", address: "Address", contactUs: "Contact us", aboutUs: "About us",
    allRightsReserved: "All rights reserved.", customizeTitle: "Customize background",
    customizeDescription: "Choose a color or enter your own HEX code.", addColor: "Add color",
    reset: "Reset", apply: "Apply", total: "Total:", default: "Default",
    username: "Username", password: "Password", email: "E-Mail", alreadyHaveAccount: "Already have an account?", logIn: "Log In",
  },
  uk: {
    whoWeAre: "Про нас", contacts: "Контакти", menu: "Меню", signUp: "Реєстрація",
    customizeBackground: "Налаштувати фон", weatherDashboard: "Панель погоди",
    heroDescription: "Створюйте власний список улюблених міст і завжди знайте погоду.",
    searchLocation: "Пошук міста...", hourlyForecast: "Погодинний прогноз", weeklyForecast: "Прогноз на тиждень",
    seeMore: "Детальніше", address: "Адреса", contactUs: "Зв’язатися", aboutUs: "Про нас",
    allRightsReserved: "Усі права захищені.", customizeTitle: "Налаштувати фон",
    customizeDescription: "Виберіть колір або введіть свій HEX-код.", addColor: "Додати колір",
    reset: "Скинути", apply: "Застосувати", total: "Разом:", default: "За замовчуванням",
    username: "Ім’я користувача", password: "Пароль", email: "Ел. пошта", alreadyHaveAccount: "Вже маєте акаунт?", logIn: "Увійти",
  },
  es: {
    whoWeAre: "Quiénes somos", contacts: "Contacto", menu: "Menú", signUp: "Registrarse",
    customizeBackground: "Personalizar fondo", weatherDashboard: "Panel del tiempo",
    heroDescription: "Crea tu lista de ciudades favoritas y consulta siempre el tiempo.",
    searchLocation: "Buscar ciudad...", hourlyForecast: "Previsión por horas", weeklyForecast: "Previsión semanal",
    seeMore: "Ver más", address: "Dirección", contactUs: "Contáctanos", aboutUs: "Sobre nosotros",
    allRightsReserved: "Todos los derechos reservados.", customizeTitle: "Personalizar fondo",
    customizeDescription: "Elige un color o introduce tu código HEX.", addColor: "Añadir color",
    reset: "Restablecer", apply: "Aplicar", total: "Total:", default: "Predeterminado",
    username: "Usuario", password: "Contraseña", email: "Correo electrónico", alreadyHaveAccount: "¿Ya tienes cuenta?", logIn: "Iniciar sesión",
  },
  de: {
    whoWeAre: "Über uns", contacts: "Kontakt", menu: "Menü", signUp: "Registrieren",
    customizeBackground: "Hintergrund anpassen", weatherDashboard: "Wetterübersicht",
    heroDescription: "Erstelle deine Liste mit Lieblingsstädten und behalte das Wetter im Blick.",
    searchLocation: "Ort suchen...", hourlyForecast: "Stündliche Vorhersage", weeklyForecast: "Wochenvorhersage",
    seeMore: "Mehr sehen", address: "Adresse", contactUs: "Kontakt", aboutUs: "Über uns",
    allRightsReserved: "Alle Rechte vorbehalten.", customizeTitle: "Hintergrund anpassen",
    customizeDescription: "Wähle eine Farbe oder gib deinen HEX-Code ein.", addColor: "Farbe hinzufügen",
    reset: "Zurücksetzen", apply: "Anwenden", total: "Gesamt:", default: "Standard",
    username: "Benutzername", password: "Passwort", email: "E-Mail", alreadyHaveAccount: "Bereits ein Konto?", logIn: "Anmelden",
  },
};

const LanguageContext = createContext(null);

export const languageLocales = { en: "en-US", uk: "uk-UA", es: "es-ES", de: "de-DE" };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("weatherLanguage") || "en");

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem("weatherLanguage", nextLanguage);
  };

  const t = (key) => translations[language]?.[key] || translations.en[key] || key;

  return <LanguageContext.Provider value={{ language, changeLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
