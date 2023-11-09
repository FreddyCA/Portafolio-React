import styled from "styled-components";
import PropTypes from "prop-types";
import ContentSections from "../../components/ContentSections/ContentSections";
import Subtitle from "../../components/Subtitle/Subtitle";

const PersonStyle = styled.div`
  background-color: var(--color--fondoPrincipal);
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(275, 175, 0, 0.4);
  border: 1px solid rgba(275, 175, 0, 0.4);
  @media screen and (max-width: 992px) {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    border-radius: 0;
    margin-top: 1.5rem;
    border: none;
  }
`;

const PersonTextStyle = styled.p`
  color: var(--color--textoPrincipal);
  font-weight: 300;
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4rem;
  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.2rem;
  }
`;

const Person = ({ dataPerson }) => {
  return (
    <ContentSections>
      <PersonStyle id="sobre_mi">
        <Subtitle bold={true}>Sobre mi</Subtitle>
        {dataPerson.map((item, index) => (
          <PersonTextStyle key={index}>{item.p}</PersonTextStyle>
        ))}
      </PersonStyle>
    </ContentSections>
  );
};

Person.propTypes = {
  dataPerson: PropTypes.array.isRequired,
};

export default Person;
