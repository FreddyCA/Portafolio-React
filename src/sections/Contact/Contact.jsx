import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactImg from "../../components/ContactImg/ContactImg";

const ContactStyle = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Contact = () => {
  return (
    <ContentSections>
      <ContactStyle id="contacto">
        <ContactImg></ContactImg>
        <ContactForm></ContactForm>
      </ContactStyle>
    </ContentSections>
  );
};

export default Contact;
