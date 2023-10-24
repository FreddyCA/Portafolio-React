import styled from "styled-components";
import Subtitle from "../../components/Subtitle/Subtitle";
import AcademicButton from "../../components/AcademicButton/AcademicButton";

const AcademicStyle = styled.div`
  width: 100%;
  padding: 2rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Academic = () => {
  return (
    <AcademicStyle>
      <Subtitle bold>Formación Académica</Subtitle>
      <AcademicButton></AcademicButton>
    </AcademicStyle>
  );
};

export default Academic;
