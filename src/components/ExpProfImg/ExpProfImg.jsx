import styled from "styled-components";
import AluraFlixImg from "../../assets/exp/aluraflix.png";

const ExpProfSpanStyle = styled.span`
  /* background-color: white; */
  height: 300px;
  width: 60%;
  border: 5px solid rgb(228, 228, 228, 0.8);
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
  transition: all 400ms ease;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    box-shadow: none;
    cursor: pointer;
  }
`;

const ExpProfImgStyle = styled.img`
  width: 100%;
  transform: 0;
  transition: all 4s ease;
  &:hover {
    transform: translateY(calc(-100% + 300px));
  }
`;

const ExpProfImg = () => {
  return (
    <ExpProfSpanStyle>
      <ExpProfImgStyle src={AluraFlixImg} alt="aluraflix"></ExpProfImgStyle>
    </ExpProfSpanStyle>
  );
};

export default ExpProfImg;
