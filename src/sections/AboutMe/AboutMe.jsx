import styled from "styled-components";
import Button from "../../components/Buttons/Buttons";

const AboutMeStyle = styled.div`
  height: 150px;
  background-color: blue;
`;

const AboutMe = () => {
  return (
    <AboutMeStyle>
      <Button></Button>
      <Button></Button>
    </AboutMeStyle>
  );
};

export default AboutMe;
