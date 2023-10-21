import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExpProfImg from "../../components/ExpProfImg/ExpProfImg";
import Button from "../../components/Button/Button";
import ExpText from "../../components/ExpText/ExpText";

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
`;

const ExpProfInfoStyle = styled.div`
  width: 35%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ExpProfBtnsStyle = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: start;
  gap: 1rem;
`;

const ExpProf = () => {
  return (
    <ContentSections>
      <ExpProfStyled>
        <Subtitle bold>Experiencia Profesional</Subtitle>

        <ExpProfContentItemStyle>
          <ExpProfImg></ExpProfImg>
          <ExpProfInfoStyle>
            <Subtitle>AluraFlix</Subtitle>
            <ExpText>
              Proyecto del programa ONE, página web desarrollada con React con
              un apariencia similar a una plataforma de video
            </ExpText>
            <ExpProfBtnsStyle>
              <Button>Repositorio</Button>
              <Button>Demo</Button>
            </ExpProfBtnsStyle>
          </ExpProfInfoStyle>
        </ExpProfContentItemStyle>

        <ExpProfContentItemStyle>
          <ExpProfImg></ExpProfImg>
          <ExpProfInfoStyle>
            <Subtitle>Mini</Subtitle>
            <ExpText>Proyecto</ExpText>
            <ExpProfBtnsStyle>
              <Button>repo</Button>
              <Button>demo</Button>
            </ExpProfBtnsStyle>
          </ExpProfInfoStyle>
        </ExpProfContentItemStyle>
      </ExpProfStyled>
    </ContentSections>
  );
};

export default ExpProf;
