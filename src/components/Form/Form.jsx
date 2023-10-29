// import { useState } from "react";
import styled, { css } from "styled-components";
import { useForm } from "../../hooks/useForm";

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

const initialForm = {};
const validationsForm = (form) => {
  console.log(form)
};

const Form = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  console.log(errors, loading, response)
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
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          id="name"
          autoComplete="on"
          required
        ></FormInputStyle>

        <FormLabelStyle htmlFor="email">Email</FormLabelStyle>

        <FormInputStyle
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          id="email"
          autoComplete="on"
          required
        ></FormInputStyle>

        <FormLabelStyle htmlFor="subject">Asunto</FormLabelStyle>
        <FormInputStyle
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          id="subject"
          autoComplete="on"
          required
        ></FormInputStyle>

        <FormLabelStyle htmlFor="message">Mensaje</FormLabelStyle>
        <FormTextStyle
          id="message"
          name="message"
          placeholder="Escribe tu mensaje"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.message}
          required
        ></FormTextStyle>

        <FormTextErrorStyle>Error</FormTextErrorStyle>

        <FormButtonStyle type="submit">Enviar</FormButtonStyle>
      </FormStyle>
    </FormContentStyle>
  );
};

export default Form;
