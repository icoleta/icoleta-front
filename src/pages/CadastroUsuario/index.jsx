import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

import personApi from "./../../services/api/person";

const CadastroUsuario = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["name", "email", "password"]
  );

  async function whenSubmitted() {
    await personApi.createUser(values);
    navigate("/login");
  }

  return (
    <div className="m-8">
      <div className="text-center mt-8">
        <h2 className="text-4xl tracking-tight">Cadastro de usuário</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <fieldset className="font-semibold my-2 text-lg text-center">
            Informações da Pessoais
          </fieldset>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Nome
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          </div>
          <fieldset className="font-semibold my-2 text-lg text-center">
            Informações de Login
          </fieldset>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email de usuário
              </label>
              <Input
                type="mail"
                id="email"
                name="email"
                onChange={handleChange}
                errors={errors}
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Criar conta de usuário
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroUsuario;
