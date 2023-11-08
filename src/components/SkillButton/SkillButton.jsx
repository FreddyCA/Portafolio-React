import styled from "styled-components";
import PropTypes from "prop-types";

const SkillContentStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem 0;
  @media (max-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 892px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 0;
  }
`;

const SkillItemStyle = styled.div`
  background-color: var(--color--fondoPrincipal);
  margin: 0 auto;
  width: 125px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 250ms ease;
  border-radius: 1.5rem;
  box-shadow: 0 6px 8px rgba(275, 175, 0, 0.7);
  border: 1px solid rgba(275, 175, 0, 0.4);
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    translate: 0 -0.5rem;
    background-color: var(--color--fondoHover);
    box-shadow: 0 10px 12px rgba(275, 275, 275, 0.3);
    border: 2px solid rgba(275, 175, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 70px;
    flex-direction: row-reverse;
    align-items: center;
    box-shadow: 0 6px 8px rgba(275, 175, 0, 0.5);
    border-radius: 0%;
    border: 2px solid var(--color--fondoHover);
    &:hover {
      translate: none;
      border: none;
      background-color: rgb(25, 0, 80);
      box-shadow: 0 5px 7px rgba(25, 0, 170);
    }
  }
`;

const SkillImgStyle = styled.img`
  height: 70px;
  margin-top: 1rem;
  width: 70px;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    margin: auto;
  }
  @media (max-width: 576px) {
    height: 40px;
    width: 40px;
    margin: auto;
  }
`;
const SkillNameStyle = styled.p`
  font-weight: 700;
  background-color: var(--color--fondoHover);
  color: var(--color--textoPrincipal);
  width: 100%;
  height: 40px;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 65%;
    height: 100%;
    border-radius: 0%;
    font-weight: 400;
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

const SkillButton = ({ data }) => {
  return (
    <SkillContentStyle>
      {data.map((item, index) => (
        <SkillItemStyle key={index}>
          <SkillImgStyle src={item.img} alt={item.titulo}></SkillImgStyle>
          <SkillNameStyle>{item.titulo}</SkillNameStyle>
        </SkillItemStyle>
      ))}
    </SkillContentStyle>
  );
};

SkillButton.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SkillButton;
