const validationsForm = (name, value, setErrors, updateErrors) => {
  if (name === "name") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validateTexto(value)) {
      if (!validateLength(value, 50)) {
        updateErrors(name, "No se admite más de 50 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(name, "No se admite carácteres extraños", setErrors);
    }
  }
  if (name === "email") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validateEmail(value)) {
      if (!validateLength(value, 30)) {
        updateErrors(name, "No se admite más de 30 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(name, "El correo no es válido", setErrors);
    }
  }

  if (name === "subject") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validateTexto(value)) {
      if (!validateLength(value, 150)) {
        updateErrors(name, "No se admite más de 150 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(name, "No se admite carácteres extraños", setErrors);
    }
  }
  if (name === "message") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validateTexto(value)) {
      if (!validateLength(value, 2000)) {
        updateErrors(name, "No se admite más de 2000 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(name, "No se admite carácteres extraños", setErrors);
    }
  }
};

const validateTexto = (inputValue) => {
  const regex = /^[A-Za-z0-9À-ÿ\s@/,_.-]+$/;
  return regex.test(inputValue);
};
const validateEmail = (email) => {
  let emailRegex =
    /^[0-9a-zA-Z]+([0-9a-zA-Z ]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};
const validateLength = (inputValue, maxLength) => {
  return inputValue.length <= maxLength ? true : false;
};
const validateEmpty = (text) => {
  return text.trim() !== "";
};
export default validationsForm;
