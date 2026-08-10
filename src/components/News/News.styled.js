import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(255, 179, 108, 0.22) 10%,
      rgba(255, 179, 108, 0.08) 22%,
      rgba(255, 179, 108, 0) 48%
    ),
    #ffffff;
`;

export const NewsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 500px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const NewsContent = styled.div`
  opacity: 0;
  transform: translateX(-50px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const NewsLabel = styled.span`
  display: inline-block;

  margin-bottom: 18px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffb36c;
`;

export const NewsTitle = styled.h2`
  margin: 0 0 22px;

  max-width: 520px;

  color: #111111;

  font-size: 34px;
  font-weight: 700;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const NewsText = styled.p`
  max-width: 500px;

  margin: 0 0 28px;

  color: #666666;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
`;

export const NewsButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NewsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 42px;
  padding: 0 20px;

  border: none;
  border-radius: 7px;

  background: #111111;
  color: #ffffff;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    background: #ffb36c;
    color: #111111;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    transform: none;
  }

  svg {
    width: 16px;
    height: 16px;

    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  &:first-child:hover svg {
    transform: translateX(-3px);
  }
`;

export const NewsImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: visible;

  opacity: 0;
  transform: translateX(50px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const NewsSideImage = styled.img`
  position: absolute;

  width: 76%;
  height: 390px;

  object-fit: cover;

  border-radius: 16px;

  background: #eeeeee;

  opacity: 0.75;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  z-index: 1;

  will-change: transform, opacity;

  backface-visibility: hidden;

  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s ease,
    filter 0.7s ease;

  &.previous {
    left: -5px;
    top: 80px;

    transform: rotate(-4deg) scale(0.94);

    filter: brightness(0.92);
  }

  &.next {
    right: -5px;
    top: 80px;

    transform: rotate(4deg) scale(0.94);

    filter: brightness(0.92);
  }

  @media (max-width: 768px) {
    width: 70%;
    height: 300px;

    &.previous {
      left: 0;
      top: 70px;
    }

    &.next {
      right: 0;
      top: 70px;
    }
  }
`;

export const NewsImage = styled.img`
  position: relative;

  display: block;

  width: 82%;
  height: 430px;

  object-fit: cover;

  border-radius: 16px;

  background: #eeeeee;

  z-index: 3;

  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);

  opacity: 0;

  transform: translate3d(45px, 0, 0) scale(0.96);

  will-change: transform, opacity;

  backface-visibility: hidden;

  &.loaded {
    animation: newsImageIn 0.7s
      cubic-bezier(0.22, 1, 0.36, 1)
      forwards;
  }

  @keyframes newsImageIn {
    0% {
      opacity: 0;
      transform: translate3d(45px, 0, 0) scale(0.96);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 340px;
  }
`;