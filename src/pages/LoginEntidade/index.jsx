import React from "react";

import "./style.css";

const LoginEntidade = () => {
  return (
    <div className="flex justify-center items-center h-5/6 flex-col">
      <form className="w-1/6">
        <p className="text-lg mb-4">Acesso ao sistema</p>

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="mail"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        ></input>
        <br></br>

        <label
          htmlFor="senha"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Senha
        </label>
        <input
          type="password"
          id="senha"
          name="senha"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        ></input>
        <br></br>

        <a href="/" className="link-recuperacao">
          Esqueci minha senha
        </a>

        <div className="btn-flex-login">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            value="Submit"
          >
            {" "}
            Login{" "}
          </button>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            type="button"
          >
            <a href="/entidade/registro">Cadastrar</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginEntidade;
