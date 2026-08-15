import { FiUser, FiFeather } from "react-icons/fi";
import logo from "../../assets/logo.png";

import {
  HeaderWrapper,
  Logo,
  Navigation,
  NavLink,
  Actions,
  SignUpButton,
  UserIcon,
  UserAvatar,
  ThemeButton,
} from "./Header.styled";

export default function Header({
  user,
  avatar,
  onSignUp,
  onProfile,
  onTheme,
}) {
  return (
    <HeaderWrapper>
      <Logo href="/">
        <img src={logo} alt="24 forecast" />
      </Logo>

      <Navigation>
        <NavLink href="#about">Who we are</NavLink>
        <NavLink href="#contacts">Contacts</NavLink>
        <NavLink href="#menu">Menu</NavLink>
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