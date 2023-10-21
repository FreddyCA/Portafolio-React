import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import AcademicButton from "../../components/AcademicButton/AcademicButton";

const AcademicStyle = styled.div`
  /* height: 200px; */
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Academic = () => {
  return (
    <ContentSections>
      <AcademicStyle>
        <Subtitle bold>Formación Académica</Subtitle>
        <AcademicButton></AcademicButton>
      </AcademicStyle>
    </ContentSections>
  );
};

export default Academic;
