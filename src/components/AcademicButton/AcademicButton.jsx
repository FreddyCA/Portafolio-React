import styled from "styled-components";

const AcademicButtonContentStyle = styled.div`
  width: 100%;
  /* height: 250px; */
  background-color: orange;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const AcademicButtonItemStyle = styled.div`
  width: 200px;
  height: 250px;
  background-color: red;
`;

const AcademicImgStyle = styled.div`
  height: 60%;
  background-color: blanchedalmond;
`;

const AcademicText = styled.p`
  background-color: yellow;
  min-height: 20%;
  padding: 0 0 1rem;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const AcademicButton = () => {
  return (
    <AcademicButtonContentStyle>
      <AcademicButtonItemStyle>
        <AcademicImgStyle></AcademicImgStyle>
        <AcademicText>a</AcademicText>
        <AcademicText>a</AcademicText>
      </AcademicButtonItemStyle>
      <AcademicButtonItemStyle></AcademicButtonItemStyle>
      <AcademicButtonItemStyle></AcademicButtonItemStyle>
      <AcademicButtonItemStyle></AcademicButtonItemStyle>
    </AcademicButtonContentStyle>
  );
};

export default AcademicButton;
