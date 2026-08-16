import { FiUser, FiFeather } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { useLanguage } from "../../i18n";

import {
  HeaderWrapper,
  HeaderBackground,
  HeaderBlob,
  Logo,
  Navigation,
  NavLink,
  Actions,
  SignUpButton,
  ThemeButton,
  UserIcon,
  UserAvatar,
  LanguageSelect,
} from "./Header.styled";

export default function Header({
  user,
  avatar,
  onSignUp,
  onProfile,
  onTheme,
  themeColors,
}) {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <HeaderWrapper>
      <HeaderBackground>
        {themeColors?.map(
          (item, index) => (
            <HeaderBlob
              key={item.id}
              $color={item.color}
              $percentage={
                Number(
                  item.percentage || 0
                )
              }
              $index={index}
            />
          )
        )}
      </HeaderBackground>

      <Logo href="/">
        <img
          src={logo}
          alt="24 forecast"
        />
      </Logo>

      <Navigation>
        <NavLink href="#about">
          {t("whoWeAre")}
        </NavLink>

        <NavLink href="#contacts">
          {t("contacts")}
        </NavLink>

        <NavLink href="#menu">
          {t("menu")}
        </NavLink>
      </Navigation>

      <Actions>
        {!user && (
          <SignUpButton
            type="button"
            onClick={onSignUp}
          >
            {t("signUp")}
          </SignUpButton>
        )}

        <LanguageSelect value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label="Language">
          <option value="en">EN</option>
          <option value="uk">UA</option>
          <option value="es">ES</option>
          <option value="de">DE</option>
        </LanguageSelect>

        <ThemeButton
          type="button"
          onClick={onTheme}
          aria-label={t("customizeBackground")}
          title={t("customizeBackground")}
        >
          <FiFeather size={20} />
        </ThemeButton>

        <UserIcon
          onClick={onProfile}
          role="button"
          tabIndex={0}
          aria-label="Open profile"
        >
          {avatar ? (
            <UserAvatar
              src={avatar}
              alt="Profile"
            />
          ) : (
            <FiUser size={22} />
          )}
        </UserIcon>
      </Actions>
    </HeaderWrapper>
  );
}
