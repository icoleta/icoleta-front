import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

import { api } from "./../../services/api";

const CadastroUsuario = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["cpf", "name", "email", "password"]
  );

  async function whenSubmitted() {
    await api.post("/registerUser", values);
    alert("Usuário criado");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form onSubmit={handleSubmit} className="w-1/6">
        <p className="text-lg mb-4">Cadastro de usuário</p>

        <label
          htmlFor="cpf"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          CPF:
        </label>
        <Input
          type="text"
          id="cpf"
          name="cpf"
          onChange={handleChange}
          errors={errors}
        />
        <br></br>

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nome:
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          errors={errors}
        />
        <br></br>

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

        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Senha:
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          errors={errors}
        />
        <br></br>

        <button
          type="submit"
          className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Criar conta de usuário
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
