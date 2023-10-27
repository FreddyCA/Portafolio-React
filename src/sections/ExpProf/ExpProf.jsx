import styled, { css } from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExpProfImg from "../../components/ExpProfImg/ExpProfImg";
import ExpText from "../../components/ExpText/ExpText";
import ButtonExpLink from "../../components/ButtonExpLink/ButtonExpLink";

import data from "../../data";

const ExpProfStyled = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const ExpProfContentItemStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.$isEven &&
    css`
      flex-direction: row-reverse;
    `}
`;

const ExpProfInfoStyle = styled.div`
  width: 35%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ExpProf = () => {
  return (
    <ContentSections>
      <ExpProfStyled>
        <Subtitle bold>Experiencia Profesional</Subtitle>
        {data.experience.map((item, index) => (
          <ExpProfContentItemStyle key={index} $isEven={index % 2 !== 0}>
            <ExpProfImg imgItem={item.img} altItem={item.title}></ExpProfImg>
            <ExpProfInfoStyle>
              <Subtitle>{item.title}</Subtitle>
              <ExpText>{item.description}</ExpText>
              <ButtonExpLink
                repoLink={item.repository}
                demoLink={item.demo}
              ></ButtonExpLink>
            </ExpProfInfoStyle>
          </ExpProfContentItemStyle>
        ))}
      </ExpProfStyled>
    </ContentSections>
  );
};

export default ExpProf;
