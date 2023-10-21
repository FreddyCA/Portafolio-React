import styled from "styled-components";
import HtmlImg from "../../assets/html5.png";

const SkillContentStyle = styled.div`
  /* background-color: yellowgreen; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1.5rem;
  /* width: 150px; */
  /* height: 200px; */
`;
const SkillItemStyle = styled.div`
  background-color: var(--color--fondoPrincipal);
  width: 120px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 100%;
`;
const SkillNameStyle = styled.p`
  font-weight: 700;
  background-color: var(--color--fondoHover);
  color: var(--color--textoPrincipal);
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SkillButton = () => {
  return (
    <SkillContentStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
      <SkillItemStyle>
        <SkillImgStyle src={HtmlImg} alt="html"></SkillImgStyle>
        <SkillNameStyle>HTML5</SkillNameStyle>
      </SkillItemStyle>
    </SkillContentStyle>
  );
};

export default SkillButton;
