import styled from "styled-components";
import ContentSections from "../../components/ContentSections/ContentSections";
import Form from "../../components/Form/Form";

const ContactStyle = styled.div`
  width: 100%;
  background-color: red;
  padding: 2rem;
`;


const Contact = () => {
  return (
    <ContentSections>
      <ContactStyle id="contacto">
        <Form></Form>
      </ContactStyle>
    </ContentSections>
  );
};

export default Contact;
