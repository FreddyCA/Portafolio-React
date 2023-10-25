import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";
import SkillButton from "../../components/SkillButton/SkillButton";

import data from "../../data"

const SkillsStyle = styled.div`
  width: 100%;
  padding: 2rem 2rem 0;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Skills = () => {
  // console.log(data)
  return (
    <>
      <ContentSections>
        <SkillsStyle>
          <Subtitle bold={true}>Hard Skills</Subtitle>
          <SkillButton data={data.hardSkills}></SkillButton>
        </SkillsStyle>
      </ContentSections>
      <ContentSections>
        <SkillsStyle>
          <Subtitle bold={true}>Soft Skills</Subtitle>
          <SkillButton data={data.softSkills}></SkillButton>
        </SkillsStyle>
      </ContentSections>
    </>
  );
};

export default Skills;
