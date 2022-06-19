import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

const RecuperarSenha = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["email"]
  );

  async function whenSubmitted() {
    await api.post("/send-reset-email", values);
    alert("Link para atualização de senha enviado por email");
  }

  return (
    <div className="flex justify-center items-center h-4/6 flex-col">
      <form onSubmit={handleSubmit}>
        <p className="text-lg mb-4">Recuperar senha</p>

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email:
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          errors={errors}
        />
        <br></br>

        <div className="btn-flex-login">
          <button
            type="submit"
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Enviar email
          </button>

          <Link
            to="/usuario/atualizar"
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Atualizar senha
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RecuperarSenha;
