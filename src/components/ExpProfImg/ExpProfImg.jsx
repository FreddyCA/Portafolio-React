import styled from "styled-components";
import PropTypes from "prop-types";

const ExpProfSpanStyle = styled.span`
  height: 300px;
  width: 60%;
  border: 5px solid rgb(228, 228, 228, 0.8);
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
  transition: all 400ms ease;
  opacity: 0.9;
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    box-shadow: none;
    cursor: pointer;
    border: 5px solid rgb(255, 215, 0, 0.5);
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    height: 200px;
  }
`;

const ExpProfImgStyle = styled.img`
  width: 100%;
  transform: 0;
  transition: all 4s ease;
  &:hover {
    transform: translateY(calc(-100% + 300px));
  }
  @media screen and (max-width: 576px) {
    &:hover {
      transform: translateY(calc(-100% + 200px));
    }
  }
`;

const ExpProfImg = ({ imgItem, altItem }) => {
  return (
    <ExpProfSpanStyle>
      <ExpProfImgStyle
        src={imgItem}
        alt={`captura de ${altItem}`}
      ></ExpProfImgStyle>
    </ExpProfSpanStyle>
  );
};

ExpProfImg.propTypes = {
  imgItem: PropTypes.string.isRequired,
  altItem: PropTypes.string.isRequired,
};

export default ExpProfImg;
