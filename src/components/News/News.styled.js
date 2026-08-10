import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
  background: #ffffff;
  overflow: hidden;
`;

export const NewsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 430px;
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
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffb36c;
    color: #111111;
    transform: translateX(3px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const NewsImageWrapper = styled.div`
  width: 100%;
  height: 430px;

  overflow: hidden;
  border-radius: 16px;

  background: #eeeeee;

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
    height: 300px;
  }
`;

export const NewsImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  animation: newsImageIn 0.5s ease;

  @keyframes newsImageIn {
    from {
      opacity: 0;
      transform: scale(1.04);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;