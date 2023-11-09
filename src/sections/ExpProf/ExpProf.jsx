import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExpProfImg from "../../components/ExpProfImg/ExpProfImg";
import ExpText from "../../components/ExpText/ExpText";
import ButtonExpLink from "../../components/ButtonExpLink/ButtonExpLink";

const ExpProfStyled = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 992px) {
    padding: 1rem;
    margin-top: 1rem;

  }
`;
const ExpProfContentItemStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ExpProf = ({dataExpProf}) => {
  return (
    <ContentSections>
      <ExpProfStyled id="proyectos">
        <Subtitle bold>Experiencia Profesional</Subtitle>
        {dataExpProf.map((item, index) => (
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

ExpProf.propTypes = {
  dataExpProf: PropTypes.array.isRequired,
};

export default ExpProf;
