import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;

  position: relative;
  overflow: hidden;

  background: ${({ $themeColors }) => {
    if (!$themeColors?.length) {
      return "#FFB56B";
    }

    const colors = $themeColors.map((item) => item.color);

    return `linear-gradient(120deg, ${colors.join(", ")})`;
  }};

  color: #111111;

  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  min-height: 190px;

  margin: 0 auto;
  padding: 42px 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 80px;

  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    padding: 40px 50px;

    gap: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 40px 30px;

    gap: 35px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  min-width: 180px;
`;

export const Logo = styled.img`
  width: 82px;
  height: 56px;

  object-fit: contain;

  display: block;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 170px;
`;

export const Title = styled.h3`
  margin: 0 0 12px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: #111111;
`;

export const Address = styled.p`
  margin: 0;

  display: flex;
  align-items: flex-start;
  gap: 8px;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;

  line-height: 1.6;

  color: #111111;

  svg {
    margin-top: 3px;
    flex: 0 0 auto;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;
`;

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.42);

  background: color-mix(in srgb, var(--theme-primary) 24%, white);

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);

    background: color-mix(in srgb, var(--theme-primary) 48%, white);

    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    outline: 3px solid rgba(17, 17, 17, 0.35);
    outline-offset: 3px;
  }
`;

export const SocialIcon = styled.img`
  width: 22px;
  height: 22px;

  object-fit: contain;

  display: block;
`;

export const BottomLine = styled.div`
  width: 100%;

  position: relative;
  z-index: 1;

  border-top: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 30px;

  @media (max-width: 520px) {
    padding: 13px 20px;
  }
`;

export const Copyright = styled.p`
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 400;

  color: rgba(17, 17, 17, 0.65);

  text-align: center;

  span {
    color: #111111;
    font-weight: 600;
  }
`;

export const FooterLink = styled.a`
  margin-left: auto;

  color: rgba(17, 17, 17, 0.72);

  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 600;

  text-decoration: none;

  transition: color 0.2s ease;

  &:hover { color: #111111; }
`;

export const BackToTopButton = styled.button`
  width: 34px;
  height: 34px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-left: 14px;
  padding: 0;

  border: 1px solid rgba(17, 17, 17, 0.16);
  border-radius: 50%;

  background: var(--theme-button-gradient);
  color: #111111;

  cursor: pointer;

  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: var(--theme-primary-strong);
    box-shadow: 0 5px 12px rgba(101, 55, 13, 0.16);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid rgba(17, 17, 17, 0.35);
    outline-offset: 2px;
  }
`;
