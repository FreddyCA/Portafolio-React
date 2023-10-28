import { useState } from "react";
import styled, { css } from "styled-components";

const FormContentStyle = styled.div`
  width: 400px;
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
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const FormInputStyle = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.2rem;
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

const FormTextErrorStyle = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  padding: 0 0.5rem;
  visibility: h;
  margin-bottom: 0.575rem;
`;

const FormButtonStyle = styled.button`
  background-color: red;
  margin-top: 2rem;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
    // agregar error para mensaje de error, usar useref o algo similar

  // const [error, setError] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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
          id="name"
          name="name"
          value={formData.nombre}
          onChange={handleChange}
          autoComplete="on"
        ></FormInputStyle>
        <FormTextErrorStyle>Error</FormTextErrorStyle>

        <FormLabelStyle htmlFor="email">Correo</FormLabelStyle>
        <FormInputStyle
          type="email"
          id="email"
          name="email"
          value={formData.correo}
          onChange={handleChange}
          autoComplete="on"
        ></FormInputStyle>
        <FormTextErrorStyle>Error</FormTextErrorStyle>

        <FormLabelStyle htmlFor="subject">Asunto</FormLabelStyle>
        <FormInputStyle
          type="text"
          id="subject"
          name="subject"
          value={formData.asunto}
          onChange={handleChange}
        ></FormInputStyle>
        <FormTextErrorStyle>Error</FormTextErrorStyle>

        <FormLabelStyle htmlFor="message">Mensaje</FormLabelStyle>
        <FormTextStyle
          id="message"
          name="message"
          value={formData.mensaje}
          onChange={handleChange}
        ></FormTextStyle>
        <FormTextErrorStyle>Error</FormTextErrorStyle>

        <FormButtonStyle type="submit">Enviar</FormButtonStyle>
      </FormStyle>
    </FormContentStyle>
  );
};

export default Form;
