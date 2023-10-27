import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";

import PefilPhotoBG from "../../assets/svg/blob.svg";
import PefilPhoto from "../../assets/ofi-small.png";
import Button from "../../components/Button/Button";
import Name from "../../components/Name/Name";
import Subtitle from "../../components/Subtitle/Subtitle";
import ArrowSVG from "../../assets/svg/arrow.svg";

import data from "../../data";

const AboutMeStyle = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

const PerfilContentSvg = styled.div`
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  background-image: url(${PefilPhotoBG});
  background-repeat: no-repeat;
  background-size: 550px;
  background-position-x: -130px;
  background-position-y: -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px rgba(275, 215, 0, 0.3);
`;
const PerfilSvg = styled.img`
  height: 100%;
`;
const IconAboutSVGStyle = styled.img`
  width: 20px;
  display: flex;
  margin: 0 0.3rem;
`;

const BotonsContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  height: 100px;
  align-items: end;
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const AboutMe = () => {
  return (
    <ContentSections>
      <AboutMeStyle>
        <InfoContent>
          <Name></Name>
          <Subtitle>Frontend Developer</Subtitle>
          <BotonsContent>
            {data.aboutMe.map((item, index) => (
              <Button key={index} href={item.href}>
                <IconAboutSVGStyle
                  src={item.icon}
                  alt={`icono ${item.redName}`}
                ></IconAboutSVGStyle>
                {item.redName}
                <IconAboutSVGStyle
                  src={ArrowSVG}
                  alt="abrir en otra ventana"
                ></IconAboutSVGStyle>
              </Button>
            ))}
          </BotonsContent>
        </InfoContent>
        <PerfilContentSvg>
          <PerfilSvg src={PefilPhoto} alt="svg"></PerfilSvg>
        </PerfilContentSvg>
      </AboutMeStyle>
    </ContentSections>
  );
};

export default AboutMe;
