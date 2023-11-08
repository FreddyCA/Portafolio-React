import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import HobbieButton from "../../components/HobbieButton/HobbieButton";
import data from "../../data";

const HobbiesStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 992px) {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0 1rem;
  }
`;

const Hobbies = () => {
  return (
    <ContentSections>
      <HobbiesStyle id="hobbies">
        <Subtitle bold={true}>Hobbies</Subtitle>
        <HobbieButton data={data.hobbies}></HobbieButton>
      </HobbiesStyle>
    </ContentSections>
  );
};

export default Hobbies;
