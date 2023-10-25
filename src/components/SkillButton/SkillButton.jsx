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
  box-shadow: 0 5px 18px rgba(275, 175, 0, 0.7);
  border: 1px solid rgba(275, 175, 0, 0.4);
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    translate: 0 -0.5rem;
    background-color: var(--color--fondoHover);
    box-shadow: 0 15px 20px rgba(75, 0, 130, 0.2);
    box-shadow: 0 10px 12px rgba(275, 275, 275, 0.3);
    border: 2px solid rgba(275, 175, 0, 0.4);
  }
`;

const SkillImgStyle = styled.img`
  height: 70px;
  margin-top: 1rem;
  width: 70px;
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
