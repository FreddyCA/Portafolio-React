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
  @media screen and (max-width: 992px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    margin-top: 1rem;
  }
`;

const Academic = () => {
  return (
    <AcademicStyle id="formacion">
      <Subtitle bold>Formación Académica</Subtitle>
      <AcademicButton></AcademicButton>
    </AcademicStyle>
  );
};

export default Academic;
