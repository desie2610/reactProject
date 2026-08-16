import { FiArrowUp, FiMapPin } from "react-icons/fi";

import {
  FooterWrapper,
  FooterContainer,
  LogoWrapper,
  Logo,
  InfoBlock,
  Title,
  Address,
  Socials,
  SocialLink,
  SocialIcon,
  BottomLine,
  Copyright,
  FooterLink,
  BackToTopButton,
} from "./Footer.styled";

import logo from "./photos/qwerty.png";
import instagram from "./photos/instagram.png";
import facebook from "./photos/facebook.png";
import whatsapp from "./photos/whatsapp.png";
import { useLanguage } from "../../i18n";

export default function Footer({ themeColors }) {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper id="contacts" $themeColors={themeColors}>
      <FooterContainer>
        <LogoWrapper>
          <Logo src={logo} alt="247 forecast" />
        </LogoWrapper>

        <InfoBlock>
          <Title>{t("address")}</Title>

          <Address>
            <FiMapPin aria-hidden="true" />
            <span>
              Svobody str. 35
              <br />
              Kyiv, Ukraine
            </span>
          </Address>
        </InfoBlock>

        <InfoBlock>
          <Title>{t("contactUs")}</Title>

          <Socials>
            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={instagram} alt="Instagram" />
            </SocialLink>

            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={facebook} alt="Facebook" />
            </SocialLink>

            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={whatsapp} alt="WhatsApp" />
            </SocialLink>
          </Socials>
        </InfoBlock>
      </FooterContainer>

      <BottomLine>
        <Copyright>
          © 2025 <span>247 forecast</span>. All rights reserved.
        </Copyright>
        <FooterLink href="#about">{t("aboutUs")}</FooterLink>
        <BackToTopButton type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
          <FiArrowUp size={17} />
        </BackToTopButton>
      </BottomLine>
    </FooterWrapper>
  );
}
/88888888888888/