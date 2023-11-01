import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactStyle = styled.div`
  width: 100%;
  background-color: red;
  padding: 2rem;
`;


const Contact = () => {
  return (
    <ContentSections>
      <ContactStyle id="contacto">
        <ContactForm></ContactForm>
      </ContactStyle>
    </ContentSections>
  );
};

export default Contact;
