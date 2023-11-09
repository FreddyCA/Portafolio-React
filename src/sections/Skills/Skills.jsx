import styled from "styled-components";
import PropTypes from "prop-types";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import SkillButton from "../../components/SkillButton/SkillButton";

const SkillsStyle = styled.div`
  width: 100%;
  padding: 2rem 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 992px) {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 0 1rem;
  }
`;

const Skills = ({ dataHardSkill, dataSoftSkill }) => {
  return (
    <>
      <ContentSections>
        <SkillsStyle id="skills">
          <Subtitle bold={true}>Hard Skills</Subtitle>
          <SkillButton data={dataHardSkill}></SkillButton>
        </SkillsStyle>
      </ContentSections>
      <ContentSections>
        <SkillsStyle>
          <Subtitle bold={true}>Soft Skills</Subtitle>
          <SkillButton data={dataSoftSkill}></SkillButton>
        </SkillsStyle>
      </ContentSections>
    </>
  );
};

Skills.propTypes = {
  dataHardSkill: PropTypes.array.isRequired,
  dataSoftSkill: PropTypes.array.isRequired,
};

export default Skills;
