import styled from "styled-components";
import PropTypes from "prop-types";

const HobbieButtonsContentStyle = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 0;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 892px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 0;
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
    box-shadow: 0 5px 20px rgba(228, 228, 228, 0.8);
  }
  @media (max-width: 768px) {
    width: 90%;
    height: 80px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
    box-shadow: 0 5px 7px rgba(275, 175, 0, 0.6);
    border-radius: 0%;
    &:hover {
      translate: none;
      box-shadow: 0 5px 10px rgba(228, 228, 228, 0.7);
    }
  }
`;

const HobbieItemImgStyle = styled.img`
  width: 80px;
  &:hover {
    rotate: calc(-360deg);
    transition: 200ms;
  }
  @media (max-width: 768px) {
    width: 50px;
    margin: auto;
  }
`;

const HobbieItemTextStyle = styled.p`
  font-weight: 700;
  color: var(--color--textoPrincipal);
  @media (max-width: 768px) {
    height: 100%;
    font-weight: 400;
    padding: 0.4rem;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rebeccapurple;
  }
  @media (max-width: 576px) {
    font-size: 0.875rem;
    text-align: center;
  }
`;

const HobbieButton = ({ data }) => {
  return (
    <HobbieButtonsContentStyle>
      {data.map((item, index) => (
        <HobbieItemStyle key={index}>
          <HobbieItemImgStyle
            src={item.img}
            alt={item.titulo}
          ></HobbieItemImgStyle>
          <HobbieItemTextStyle>{item.titulo}</HobbieItemTextStyle>
        </HobbieItemStyle>
      ))}
    </HobbieButtonsContentStyle>
  );
};

HobbieButton.propTypes = {
  data: PropTypes.array.isRequired,
};
export default HobbieButton;
