import React, { useState } from "react";
import Input from "../../components/Input";
import useForm from "../../hooks/useForm";

const AtualizarSenha = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["password"]
  );

  async function whenSubmitted() {
    //await api.post("/reset-pass", values);
  }

  return (
    <div className="flex justify-center items-center h-4/6 flex-col">
      <form onSubmit={handleSubmit}>
        <p className="text-lg mb-4">Atualizar senha</p>

        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nova senha:
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          errors={errors}
        />
        <br />
        <br />

        <div className="btn-flex-login">
          <button
            type="submit"
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AtualizarSenha;
