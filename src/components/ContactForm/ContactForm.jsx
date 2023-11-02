import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import validationsForm from "../../js/Formvalidation";

const FormContentStyle = styled.div`
  width: 55%;
  background-color: skyblue;
  padding: 2rem;
`;

const FormNameStyle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  ${(props) =>
    props.$small &&
    css`
      font-weight: 300;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    `}
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabelStyle = styled.label`
  margin: 0.7rem 0 0.5rem;
  font-weight: 700;
`;

const FormInputStyle = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  font-size: 1rem;
  border-bottom: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;

const FormTextStyle = styled.textarea`
  margin-bottom: 0.2rem;
  font-size: 1rem;
  border: none;
  resize: none;
  padding: 0.5rem;
  min-height: 3rem;
  font-family: "Roboto", sans-serif;
  border-bottom: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;

const FormTextErrorStyle = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
`;

const FormButtonStyle = styled.button`
  background-color: red;
  margin-top: 2rem;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 0.75rem;
  ${(props) =>
    props.$submit &&
    css`
      background-color: var(--color--hover);
      color: var(--color--fondoPrincipal);
      border: 2px solid var(--color--fondoPrincipal);
    `}
`;

const updateErrors = (name, errorMessage, setErrors) => {
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));
};

const evaluateErrors = (errors, submit, setSubmit) => {
  const valuesState = Object.values(errors).every((value) => value === true);
  setSubmit(valuesState);
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validationsForm(name, value, setErrors, updateErrors);
  };

  useEffect(() => {
    evaluateErrors(errors, submit, setSubmit);
  }, [errors, submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submit) {
      console.log("envia", formData);
    } else {
      console.log("no se envia");
    }
  };

  return (
    <FormContentStyle>
      <FormNameStyle>Contacto</FormNameStyle>
      <FormNameStyle $small>¿Quieres contactarme?</FormNameStyle>
      <FormNameStyle $small>
        Complete el siguiente formulario y me pondré en contacto con usted lo
        antes posible.
      </FormNameStyle>

      <FormStyle onSubmit={handleSubmit} autoComplete="on">
        <FormLabelStyle htmlFor="name">Nombre</FormLabelStyle>
        <FormInputStyle
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={formData.name}
          id="name"
          autoComplete="on"
        ></FormInputStyle>
        {errors.name && <FormTextErrorStyle>{errors.name}</FormTextErrorStyle>}

        <FormLabelStyle htmlFor="email">Email</FormLabelStyle>
        <FormInputStyle
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          value={formData.email}
          id="email"
          autoComplete="on"
        ></FormInputStyle>
        {errors.email && (
          <FormTextErrorStyle>{errors.email}</FormTextErrorStyle>
        )}

        <FormLabelStyle htmlFor="subject">Asunto</FormLabelStyle>
        <FormInputStyle
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          value={formData.subject}
          id="subject"
          autoComplete="off"
        ></FormInputStyle>
        {errors.subject && (
          <FormTextErrorStyle>{errors.subject}</FormTextErrorStyle>
        )}

        <FormLabelStyle htmlFor="message">Mensaje</FormLabelStyle>
        <FormTextStyle
          id="message"
          name="message"
          placeholder="Escribe tu mensaje"
          onChange={handleChange}
          value={formData.message}
        ></FormTextStyle>
        {errors.message && (
          <FormTextErrorStyle>{errors.message}</FormTextErrorStyle>
        )}

        <FormButtonStyle type="submit" $submit={submit}>
          Enviar
        </FormButtonStyle>

        {!submit && (
          <FormTextErrorStyle>
            *Todos los campos son requeridos
          </FormTextErrorStyle>
        )}
      </FormStyle>
    </FormContentStyle>
  );
};

export default ContactForm;
