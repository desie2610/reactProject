import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100%;
  padding: 80px 0 90px;
  box-sizing: border-box;

  background:
    radial-gradient(
      circle at 10% 0%,
      rgba(255, 179, 108, 0.13),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 100%,
      rgba(255, 179, 108, 0.08),
      transparent 32%
    ),
    #ffffff;
`;

export const NewsTitle = styled.h2`
  position: relative;

  width: fit-content;

  margin: 0 0 45px;

  color: #111111;

  font-size: 28px;
  font-weight: 700;
  line-height: 1.15;

  letter-spacing: -0.8px;

  opacity: ${(props) =>
    props.$visible ? 1 : 0};

  transform: ${(props) =>
    props.$visible
      ? "translateY(0)"
      : "translateY(18px)"};

  transition:
    opacity 0.8s
      cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 0.8s
      cubic-bezier(0.2, 0.8, 0.2, 1);

  &::before {
    content: "";

    position: absolute;

    left: 0;
    bottom: -14px;

    width: 58px;
    height: 4px;

    border-radius: 20px;

    background: linear-gradient(
      90deg,
      #ff9d4d,
      #ffc078
    );

    box-shadow:
      0 4px 12px
        rgba(255, 163, 82, 0.35);

    transform: ${(props) =>
      props.$visible
        ? "scaleX(1)"
        : "scaleX(0)"};

    transform-origin: left;

    transition:
      transform 0.6s
        cubic-bezier(0.2, 0.8, 0.2, 1);

    transition-delay: 0.35s;
  }

  &::after {
    content: "";

    position: absolute;

    left: 66px;
    bottom: -14px;

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: #ffb36c;

    opacity: ${(props) =>
      props.$visible ? 1 : 0};

    transform: ${(props) =>
      props.$visible
        ? "scale(1)"
        : "scale(0)"};

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    transition-delay: 0.9s;
  }
`;

export const NewsList = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: repeat(
    4,
    minmax(0, 1fr)
  );

  gap: 24px;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    );
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;

    gap: 20px;
  }
`;

export const NewsCard = styled.article`
  position: relative;

  min-width: 0;

  overflow: hidden;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.95);

  border: 1px solid
    rgba(255, 179, 108, 0.15);

  box-shadow:
    0 5px 15px
      rgba(0, 0, 0, 0.04),
    0 15px 35px
      rgba(0, 0, 0, 0.07);

  cursor: pointer;

  transform: translateY(0);

  transition:
    transform 0.4s
      cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.4s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);

    border-color: rgba(
      255,
      179,
      108,
      0.5
    );

    box-shadow:
      0 10px 25px
        rgba(0, 0, 0, 0.06),
      0 25px 55px
        rgba(255, 164, 81, 0.14);
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 205px;

  display: block;

  object-fit: cover;

  background: #eeeeee;

  transition:
    transform 0.6s
      cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 0.4s ease;

  ${NewsCard}:hover & {
    transform: scale(1.08);

    filter: brightness(0.92);
  }
`;

export const NewsContent = styled.div`
  position: relative;

  min-height: 115px;

  padding: 20px 20px 21px;

  box-sizing: border-box;

  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.98),
      #ffffff
    );

  &::before {
    content: "";

    position: absolute;

    left: 20px;
    top: 0;

    width: 35px;
    height: 2px;

    border-radius: 10px;

    background: #ffb36c;

    opacity: 0;

    transform: scaleX(0);

    transform-origin: left;

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  ${NewsCard}:hover &::before {
    opacity: 1;

    transform: scaleX(1);
  }
`;

export const NewsDescription = styled.p`
  margin: 0;

  color: #161616;

  font-size: 14px;
  font-weight: 600;

  line-height: 1.45;

  letter-spacing: -0.1px;

  display: -webkit-box;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  transition:
    color 0.25s ease,
    transform 0.25s ease;

  ${NewsCard}:hover & {
    color: #000000;

    transform: translateY(-1px);
  }
`;

export const MoreButton = styled.button`
  position: relative;

  width: 138px;
  height: 42px;

  margin-top: 32px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border: 1px solid
    rgba(255, 179, 108, 0.25);

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      #ffb36c,
      #ff9f4d
    );

  color: #111111;

  font-size: 13px;
  font-weight: 600;

  letter-spacing: 0.1px;

  cursor: pointer;

  box-shadow:
    0 6px 15px
      rgba(255, 165, 82, 0.2);

  transition:
    transform 0.3s
      cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.3s ease,
    filter 0.3s ease;

  &:disabled {
    cursor: default;
    opacity: 0.7;
    transform: none;
  }

  &::before {
    content: "";

    position: absolute;

    top: -50%;
    left: -80%;

    width: 55%;
    height: 200%;

    background: rgba(
      255,
      255,
      255,
      0.3
    );

    transform: rotate(20deg);

    transition: left 0.55s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-4px);

    filter: brightness(1.04);

    box-shadow:
      0 10px 22px
        rgba(255, 164, 81, 0.3);

    &::before {
      left: 130%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);

    box-shadow:
      0 5px 12px
        rgba(255, 164, 81, 0.2);
  }
`;