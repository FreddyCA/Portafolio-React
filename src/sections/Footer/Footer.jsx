import styled from "styled-components";
import IconFooter from "../../assets/svg/github.svg";
import LogoLinkedin from "../../assets/svg/linkedin.svg";

const FooterStyle = styled.div`
  width: 100%;
  height: 150px;
  background-color: #121212;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e4e4e4;
`;
const FooterText = styled.h3`
  color: #d8dfe8;
  font-weight: 700;
  font-size: 1rem;
`;

const FooterLogosContentStyle = styled.div`
  height: 50px;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const FooterLinkLogoStyle = styled.a`
  height: 40px;
  width: 40px;
  text-decoration: none;
  cursor: pointer;
`;
const FooterLogoStyle = styled.img`
  width: 40px;
  height: 40px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <FooterText>Desarrollado por Carlos Ari | 2023</FooterText>
      <FooterLogosContentStyle>
        <FooterLinkLogoStyle
          href="https://github.com/FreddyCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLogoStyle src={IconFooter} alt="logo github" />
        </FooterLinkLogoStyle>
        <FooterLinkLogoStyle
          href="https://www.linkedin.com/in/carlosari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLogoStyle src={LogoLinkedin} alt="logo linkedin" />
        </FooterLinkLogoStyle>
      </FooterLogosContentStyle>
    </FooterStyle>
  );
};

export default Footer;
