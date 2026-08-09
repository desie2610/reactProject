import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;

  width: 100%;
  max-width: 1440px;

  height: min(595px, calc(100vw * 595 / 1440));

  min-height: 400px;

  margin: 0 auto;

  overflow: hidden;

  display: flex;
  justify-content: center;

  background: #111111;

  @media (max-width: 600px) {
    height: auto;
    min-height: 595px;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";

    position: absolute;

    inset: 0;

    background: rgba(0, 0, 0, 0.48);
  }
`;

export const HeroContent = styled.div`
  position: relative;

  z-index: 1;

  width: 100%;
  max-width: 800px;

  padding: 48px 20px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  margin: 0;

  color: #ffffff;

  font-size: 23px;
  font-weight: 700;

  line-height: 1.2;

  text-align: center;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Info = styled.div`
  margin-top: 43px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25px;

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

export const Description = styled.p`
  margin: 0;

  color: #ffffff;

  font-size: 14px;
  font-weight: 400;

  line-height: 1.15;

  text-align: right;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 78px;

  flex-shrink: 0;

  background: #ffffff;

  @media (max-width: 600px) {
    height: 70px;
  }
`;

export const DateBlock = styled.p`
  margin: 0;

  color: #ffffff;

  font-size: 14px;
  font-weight: 400;

  line-height: 1.15;

  text-align: left;

  sup {
    position: relative;

    top: -2px;

    font-size: 9px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const SearchWrapper = styled.form`
  width: 337px;
  height: 24px;

  margin-top: 75px;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  border-radius: 6px;

  background: #ffffff;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    width: min(337px, 100%);

    margin-top: 55px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;

  width: 100%;
  min-width: 0;
  height: 24px;

  padding: 0 14px;

  border: none;
  outline: none;

  background: #ffffff;
  color: #222222;

  font-size: 9px;
  font-weight: 400;

  box-sizing: border-box;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    background: #ffffff;
  }
`;

export const SearchButton = styled.button`
  width: 24px;
  height: 24px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: #ffb36c;
  color: #111111;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;