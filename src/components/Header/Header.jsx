import { FiUser, FiFeather } from "react-icons/fi";
import logo from "../../assets/logo.png";

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
} from "./Header.styled";

export default function Header({
  user,
  avatar,
  onSignUp,
  onProfile,
  onTheme,
  themeColors,
}) {

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
          Who we are
        </NavLink>

        <NavLink href="#contacts">
          Contacts
        </NavLink>

        <NavLink href="#menu">
          Menu
        </NavLink>
      </Navigation>

      <Actions>
        {!user && (
          <SignUpButton
            type="button"
            onClick={onSignUp}
          >
            Sign up
          </SignUpButton>
        )}

        <ThemeButton
          type="button"
          onClick={onTheme}
          aria-label="Customize background"
          title="Customize background"
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
/88888888888888/
