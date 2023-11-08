import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import validationsForm from "../../js/validationsForm.js";

const FormContentStyle = styled.div`
  width: 55%;
  background-color: var(--color--fondoPrincipal);
  border: 5px solid var(--color--fondoHover);
  border-left: none;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
    border: none;
    border-top: 5px solid var(--color--fondoHover);
  }
`;

const FormNameStyle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color--textoPrincipal);
  @media screen and (max-width: 768px) {
    font-size: 1.875rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.275rem;
  }

  ${(props) =>
    props.$small &&
    css`
      font-weight: 300;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 576px) {
        font-size: 0.875rem;
      }
    `}
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabelStyle = styled.label`
  margin: 0.7rem 0 0.5rem;
  font-weight: 700;
  color: var(--color--textoPrincipal);
`;

const FormInputStyle = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: transparent;
  background-color: rgb(38, 38, 38);
  border: none;
  border: 1px solid var(--color--fondoHover);
  font-size: 1rem;
  color: var(--color--textoPrincipal);
  caret-color: rgb(188, 188, 188);
  &:focus {
    outline: none;
    border: 1px solid transparent;
    border-bottom: 1px solid blue;
    background-color: rgb(58, 58, 58);
  }
  &::placeholder {
    color: rgb(188, 188, 188);
    font-size: 0.875rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.935rem;
    &::placeholder {
      font-size: 0.775rem;
    }
  }
`;

const FormTextStyle = styled.textarea`
  margin-bottom: 0.2rem;
  font-size: 1rem;
  border: none;
  resize: none;
  padding: 0.5rem;
  min-height: 3rem;
  background-color: rgb(38, 38, 38);
  font-family: "Roboto", sans-serif;
  color: var(--color--textoPrincipal);
  caret-color: rgb(188, 188, 188);
  border: 1px solid var(--color--fondoHover);
  &:focus {
    outline: none;
    border: 1px solid transparent;
    border-bottom: 1px solid blue;
    background-color: rgb(58, 58, 58);
  }
  &::placeholder {
    color: rgb(188, 188, 188);
    font-size: 0.875rem;
  }
`;

const FormTextErrorStyle = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color--resaltador);
`;

const FormButtonStyle = styled.button`
  background-color: #1e1e1e;
  color: #f0f0f0;
  margin-top: 1rem;
  padding: 15px 20px;
  border: 1px solid #333;
  margin-bottom: 0.75rem;
  @media screen and (max-width: 768px) {
    width: 50%;
    margin: 1rem auto;
  }
  ${(props) =>
    props.$submit &&
    css`
      background-color: #2d2d2d;
      color: var(--color--textoPrincipal);
      box-shadow: 0 3px 5px #007bff;
      cursor: pointer;
      &:hover {
        color: #007bff;
        border: 1px solid #007bff;
      }
    `}
`;

const updateErrors = (name, errorMessage, setErrors) => {
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));
};

const evaluateErrors = (errors, setSubmit) => {
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
    evaluateErrors(errors, setSubmit);
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
          autoComplete="off"
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
          autoComplete="off"
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
