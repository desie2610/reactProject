import styled, { keyframes, css } from "styled-components";

const blobMoveOne = keyframes`
  0% {
    transform:
      translate(-8%, -5%)
      scale(1);
  }

  25% {
    transform:
      translate(18%, 8%)
      scale(1.15);
  }

  50% {
    transform:
      translate(35%, -10%)
      scale(1.3);
  }

  75% {
    transform:
      translate(10%, 18%)
      scale(1.12);
  }

  100% {
    transform:
      translate(-8%, -5%)
      scale(1);
  }
`;

const blobMoveTwo = keyframes`
  0% {
    transform:
      translate(8%, 5%)
      scale(1);
  }

  25% {
    transform:
      translate(-15%, 18%)
      scale(1.2);
  }

  50% {
    transform:
      translate(-30%, -5%)
      scale(1.3);
  }

  75% {
    transform:
      translate(-5%, -18%)
      scale(1.08);
  }

  100% {
    transform:
      translate(8%, 5%)
      scale(1);
  }
`;

const blobMoveThree = keyframes`
  0% {
    transform:
      translate(0, 10%)
      scale(1);
  }

  30% {
    transform:
      translate(20%, -12%)
      scale(1.2);
  }

  60% {
    transform:
      translate(-20%, 4%)
      scale(1.3);
  }

  100% {
    transform:
      translate(0, 10%)
      scale(1);
  }
`;

export const AppWrapper = styled.div`
  position: relative;

  min-height: 100vh;
  width: 100%;

  color: #111111;

  box-sizing: border-box;

  overflow-x: hidden;

  isolation: isolate;
`;

export const ThemeBackground = styled.div`
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  pointer-events: none;

  z-index: -1;

  background: #ffffff;
`;

export const ThemeBlob = styled.div`
  position: absolute;

  width: ${({ $percentage }) =>
    Math.max(
      55,
      Math.min(
        100,
        55 + $percentage * 0.45
      )
    )}vw;

  height: ${({ $percentage }) =>
    Math.max(
      55,
      Math.min(
        100,
        55 + $percentage * 0.45
      )
    )}vw;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      ${({ $color }) => $color} 0%,
      ${({ $color }) => $color} 32%,
      transparent 72%
    );

  opacity: ${({ $percentage }) =>
    Math.max(
      0.32,
      Math.min(
        0.85,
        0.35 + $percentage / 150
      )
    )};

  filter: blur(85px);

  mix-blend-mode: normal;

  will-change:
    transform,
    opacity;

  animation: ${({ $index }) =>
    $index % 3 === 0
      ? css`
          ${blobMoveOne}
          18s
          ease-in-out
          infinite
        `
      : $index % 3 === 1
      ? css`
          ${blobMoveTwo}
          21s
          ease-in-out
          infinite
        `
      : css`
          ${blobMoveThree}
          24s
          ease-in-out
          infinite
        `};

  left: ${({ $index, $count }) => {
    if ($count === 1) {
      return "15%";
    }

    if ($count === 2) {
      return $index === 0
        ? "-15%"
        : "55%";
    }

    if ($count === 3) {
      if ($index === 0) {
        return "-20%";
      }

      if ($index === 1) {
        return "35%";
      }

      return "60%";
    }

    if ($index === 0) {
      return "-20%";
    }

    if ($index === 1) {
      return "20%";
    }

    if ($index === 2) {
      return "55%";
    }

    return "15%";
  }};

  top: ${({ $index, $count }) => {
    if ($count === 1) {
      return "10%";
    }

    if ($count === 2) {
      return $index === 0
        ? "-20%"
        : "35%";
    }

    if ($count === 3) {
      if ($index === 0) {
        return "-15%";
      }

      if ($index === 1) {
        return "5%";
      }

      return "55%";
    }

    if ($index === 0) {
      return "-20%";
    }

    if ($index === 1) {
      return "5%";
    }

    if ($index === 2) {
      return "50%";
    }

    return "70%";
  }};
`;

export const Main = styled.main`
  width: 100%;

  min-height: calc(100vh - 82px);

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 40px 64px;

  box-sizing: border-box;

  background: transparent;
`;