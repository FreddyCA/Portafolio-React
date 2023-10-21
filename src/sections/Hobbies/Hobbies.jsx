import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";

const HobbiesStyle = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: yellow; */
`;

const Hobbies = () => {
  return (
    <ContentSections>
      <HobbiesStyle>
        <Subtitle bold={true}>Hobbies</Subtitle>
      </HobbiesStyle>
    </ContentSections>
  );
};

export default Hobbies;
