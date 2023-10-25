import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import IconFutbol from "../../assets/futbol.png";

const HobbiesStyle = styled.div`
  /* height: 200px; */
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const HobbieItemContentStyle = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 0;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const HobbieItemStyle = styled.div`
  width: 150px;
  height: 130px;
  margin: 0 auto;
  background-color: #354657;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  box-shadow: 0 5px 10px rgba(275, 175, 0, 0.7);

  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: var(--color--fondoHover);
    color: #354657;
    translate: 0 -0.5rem;
    transition: 250ms;
    box-shadow: 0 5px 15px rgb(70, 70, 70, 0.5);
    box-shadow: 0 5px 20px rgba(228, 228, 228, 0.8);
  }
`;

const HobbieItemImgStyle = styled.img`
  width: 80px;
  &:hover {
    rotate: calc(-360deg);
    transition: 200ms;
  }
`;

const HobbieItemTextStyle = styled.p`
  font-weight: 700;
  color: var(--color--textoPrincipal);
`;

const Hobbies = () => {
  return (
    <ContentSections>
      <HobbiesStyle>
        <Subtitle bold={true}>Hobbies</Subtitle>
        <HobbieItemContentStyle>
          <HobbieItemStyle>
            <HobbieItemImgStyle
              src={IconFutbol}
              alt="icon"
            ></HobbieItemImgStyle>
            <HobbieItemTextStyle>Fútbol</HobbieItemTextStyle>
          </HobbieItemStyle>
          <HobbieItemStyle>
            <HobbieItemImgStyle
              src={IconFutbol}
              alt="icon"
            ></HobbieItemImgStyle>
            <HobbieItemTextStyle>Fútbol</HobbieItemTextStyle>
          </HobbieItemStyle>
          <HobbieItemStyle>
            <HobbieItemImgStyle
              src={IconFutbol}
              alt="icon"
            ></HobbieItemImgStyle>
            <HobbieItemTextStyle>Fútbol</HobbieItemTextStyle>
          </HobbieItemStyle>
          <HobbieItemStyle>
            <HobbieItemImgStyle
              src={IconFutbol}
              alt="icon"
            ></HobbieItemImgStyle>
            <HobbieItemTextStyle>Fútbol</HobbieItemTextStyle>
          </HobbieItemStyle>
          <HobbieItemStyle>
            <HobbieItemImgStyle
              src={IconFutbol}
              alt="icon"
            ></HobbieItemImgStyle>
            <HobbieItemTextStyle>Fútbol</HobbieItemTextStyle>
          </HobbieItemStyle>
        </HobbieItemContentStyle>
      </HobbiesStyle>
    </ContentSections>
  );
};

export default Hobbies;
