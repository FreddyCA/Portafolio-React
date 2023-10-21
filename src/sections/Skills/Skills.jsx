import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import SkillButton from "../../components/SkillButton/SkillButton";

const SkillsStyle = styled.div`
  width: 100%;
  /* background-color: orange; */
  padding: 2rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Skills = () => {
  return (
    <>
      <ContentSections>
        <SkillsStyle>
          <Subtitle bold={true}>Hard Skills</Subtitle>
          <SkillButton></SkillButton>
        </SkillsStyle>
      </ContentSections>
      <ContentSections>
        <SkillsStyle>
          <Subtitle bold={true}>Soft Skills</Subtitle>
          <SkillButton></SkillButton>
        </SkillsStyle>
      </ContentSections>
    </>
  );
};

export default Skills;
