import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

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
      if ((field === "name" && values[field].length === 0) || (field === "name" && /\d/.test(values[field]))) {
        tempErrors = {
          ...tempErrors,
          [field]: "Insira um NOME válido",
        };
      } else if ((field === "phone" && values[field].length > 11) || (field === "phone" && values[field].length === 0) || (field === "phone" && !!!/\d/.test(values[field]))) {
        tempErrors = {
          ...tempErrors,
          [field]: "Insira um número de TELEFONE válido",
        }
      } else if (field === "password" && values[field].length < 8) {
        tempErrors = {
          ...tempErrors,
          [field]: "A SENHA precisa ter pelo menos 8 dígitos",
        }
      } else if (field === "email" && (!values[field].includes("@") && !values[field].endsWith(".com"))) {
        tempErrors = {
          ...tempErrors,
          [field]: "Insira um E-MAIL válido.",
        };
      };
    });
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length) {
      const firstErrorKey = Object.keys(tempErrors)[0];

      toast.warning(tempErrors[firstErrorKey], {
        position: "bottom-right",
      });

      return false;
    }
    else return true;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) callback();
  }

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
