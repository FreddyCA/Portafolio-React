import { useState } from "react";
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState(null);
    console.log(setForm, setErrors, setLoading, setResponse, validateForm)
  const handleChange = (e) => {console.log(e)};

  const handleBlur = (e) => {console.log(e)};

  const handleSubmit = (e) => {console.log(e)};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
