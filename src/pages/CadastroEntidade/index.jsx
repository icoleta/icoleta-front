import React from "react";
import Input from "../../components/Input";

import "./style.css";

const CadastroEntidade = () => {
  return (
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form className="w-1/6">
        <p className="text-lg mb-4">Cadastro de entidade</p>

        <label
          htmlFor="cnpj"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          CNPJ
        </label>
        <Input type="text" id="cnpj" name="cnpj" />
        <br></br>

        <label
          htmlFor="nome"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nome
        </label>
        <Input type="text" id="nome" name="nome" />
        <br></br>

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <Input type="mail" id="email" name="email" />
        <br></br>

        <label
          htmlFor="senha"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Senha
        </label>
        <Input type="password" id="senha" name="senha" />
        <br></br>

        <div class="btn-flex">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            value="Submit"
          >
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroEntidade;
