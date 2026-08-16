import styled, { keyframes, css } from "styled-components";

const headerBlobMoveOne = keyframes`
  0% {
    transform:
      translate(-15%, -10%)
      scale(1);
  }

  50% {
    transform:
      translate(25%, 8%)
      scale(1.25);
  }

  100% {
    transform:
      translate(-15%, -10%)
      scale(1);
  }
`;

const headerBlobMoveTwo = keyframes`
  0% {
    transform:
      translate(12%, 0)
      scale(1);
  }

  50% {
    transform:
      translate(-25%, -8%)
      scale(1.2);
  }

  100% {
    transform:
      translate(12%, 0)
      scale(1);
  }
`;

export const HeaderWrapper = styled.header`
  position: fixed;

  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;
  height: 82px;

  display: flex;
  align-items: center;

  padding: 0 64px;

  overflow: hidden;

  background: transparent;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.35);

  box-sizing: border-box;

  backdrop-filter: blur(20px);

  isolation: isolate;

  & > *:not(:first-child) {
    position: relative;
    z-index: 2;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  pointer-events: none;

  z-index: 0;

  background: rgba(
    255,
    255,
    255,
    0.12
  );
`;

export const HeaderBlob = styled.div`
  position: absolute;

  width: ${({ $percentage }) =>
    Math.max(
      420,
      420 + $percentage * 2
    )}px;

  height: ${({ $percentage }) =>
    Math.max(
      420,
      420 + $percentage * 2
    )}px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      ${({ $color }) => $color} 0%,
      ${({ $color }) => $color} 28%,
      transparent 72%
    );

  opacity: ${({ $percentage }) =>
    Math.max(
      0.25,
      Math.min(
        0.7,
        0.3 + $percentage / 180
      )
    )};

  filter: blur(65px);

  will-change: transform;

  animation: ${({ $index }) =>
    $index % 2 === 0
      ? css`
          ${headerBlobMoveOne}
          14s
          ease-in-out
          infinite
        `
      : css`
          ${headerBlobMoveTwo}
          17s
          ease-in-out
          infinite
        `};

  left: ${({ $index }) => {
    if ($index === 0) {
      return "-12%";
    }

    if ($index === 1) {
      return "20%";
    }

    if ($index === 2) {
      return "52%";
    }

    return "72%";
  }};

  top: ${({ $index }) => {
    if ($index === 0) {
      return "-180px";
    }

    if ($index === 1) {
      return "-230px";
    }

    if ($index === 2) {
      return "-160px";
    }

    return "-240px";
  }};
`;

export const Logo = styled.a`
  position: relative;

  z-index: 2;

  width: 82px;
  height: 56px;

  display: flex;
  align-items: center;

  text-decoration: none;

  img {
    width: 82px;
    height: 56px;

    display: block;

    object-fit: contain;
  }
`;

export const Navigation = styled.nav`
  position: relative;

  z-index: 2;

  display: flex;
  align-items: center;

  gap: 42px;

  margin-left: auto;
  margin-right: 50px;
`;

export const NavLink = styled.a`
  position: relative;

  color: #FFE0C2;

  font-size: 14px;
  font-weight: 500;

  text-decoration: none;

  transition: color 0.2s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    border-radius: 2px;

    background: #ffb36c;

    transition: width 0.2s ease;
  }

  &:hover {
    color: #ff9d4d;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Actions = styled.div`
  position: relative;

  z-index: 2;

  display: flex;
  align-items: center;

  gap: 20px;
`;

export const SignUpButton = styled.button`
  width: 74px;
  height: 38px;

  border: none;

  border-radius: 9px;

  background: #ffb36c;

  color: #111111;

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ffa451;

    transform: translateY(-1px);

    box-shadow:
      0 5px 14px
      rgba(255, 179, 108, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ThemeButton = styled.button`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border:
    1px solid
    rgba(17, 17, 17, 0.12);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.4);

  color: #555555;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ffb36c;

    color: #111111;

    border-color: #ffb36c;

    transform: translateY(-1px);

    box-shadow:
      0 5px 14px
      rgba(255, 179, 108, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const UserIcon = styled.div`
  position: relative;

  z-index: 2;

  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border:
    1px solid
    rgba(17, 17, 17, 0.12);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.4);

  color: #555555;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffb36c;

    color: #111111;

    border-color: #ffb36c;

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
`;