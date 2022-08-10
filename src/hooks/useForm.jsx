import React, { useState, useEffect } from "react";

function useForm(callback, fields) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let tempValues = {};
    fields.forEach((field) => {
      tempValues = { ...tempValues, [field]: "" };
    });
    setValues(tempValues);
  }, []);

  function validate() {
    let tempErrors = {};
    fields.forEach((field) => {
      if (!values[field]) {
        tempErrors = {
          ...tempErrors,
          [field]: "Esse campo não pode ser vazio",
        };
      } else if (field === "password" && values[field].length < 8)
        tempErrors = {
          ...tempErrors,
          [field]: "A senha precisa ter pelo menos 8 dígitos",
        };
    });
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length) return false;
    else return true;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    if (validate()) callback();
  }

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
